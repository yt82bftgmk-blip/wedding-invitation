#!/usr/bin/env python3
"""
Wedding Invitation & RSVP Server for Nazar & Sofia
Supports bilingual website, Israeli Bit integration, Telegram notifications, and Owner Admin Dashboard with CMS & Photo Upload.
"""

import os
import sys
import json
import sqlite3
import base64
import time
import threading
import urllib.request
import urllib.parse
from http.server import HTTPServer, SimpleHTTPRequestHandler
from datetime import datetime

PORT = int(os.environ.get("PORT", 8080))
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PUBLIC_DIR = os.path.join(BASE_DIR, "public")
UPLOADS_DIR = os.path.join(PUBLIC_DIR, "uploads")
DB_PATH = os.path.join(BASE_DIR, "wedding.db")
CONFIG_PATH = os.path.join(BASE_DIR, "config.json")

os.makedirs(UPLOADS_DIR, exist_ok=True)


def load_config():
    if os.path.exists(CONFIG_PATH):
        try:
            with open(CONFIG_PATH, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"Error loading config: {e}")
    return {
        "wedding": {
            "groom_ru": "Назар",
            "bride_ru": "София",
            "groom_he": "נזר",
            "bride_he": "סופיה",
            "date": "2027-09-15T18:00:00",
            "venue_name_ru": "Зал торжеств «Royal Garden»",
            "venue_name_he": "אולם אירועים «Royal Garden»",
            "venue_city_ru": "Тель-Авив / Центр Израиля",
            "venue_city_he": "תל אביב / מרכז",
            "waze_link": "https://waze.com/ul",
            "google_maps_link": "https://maps.google.com",
            "bit_phone": "+972 50-000-0000",
            "bit_name": "Nazar & Sofia",
            "bit_link": "",
            "bit_reason_ru": "Подарок на свадьбу Назара и Софии",
            "bit_reason_he": "מתנה לחתונה של נזר וסופיה"
        },
        "photos": {
            "hero": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
            "gallery": []
        },
        "telegram": {
            "enabled": False,
            "bot_token": "",
            "chat_id": ""
        },
        "admin": {
            "password": "wedding2027admin"
        }
    }


def save_config(cfg):
    with open(CONFIG_PATH, "w", encoding="utf-8") as f:
        json.dump(cfg, f, ensure_ascii=False, indent=2)


def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS rsvps (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            phone TEXT NOT NULL,
            attendance TEXT NOT NULL,
            guests_count INTEGER DEFAULT 1,
            message TEXT,
            language TEXT DEFAULT 'ru',
            custom_answers TEXT DEFAULT '{}',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    cursor.execute("PRAGMA table_info(rsvps)")
    cols = [row[1] for row in cursor.fetchall()]
    if "custom_answers" not in cols:
        cursor.execute("ALTER TABLE rsvps ADD COLUMN custom_answers TEXT DEFAULT '{}'")
    conn.commit()
    conn.close()


def send_telegram_notification(rsvp_data):
    cfg = load_config()
    tg = cfg.get("telegram", {})
    if not tg.get("enabled") or not tg.get("bot_token") or not tg.get("chat_id"):
        return False

    bot_token = tg["bot_token"]
    raw_chat_id = tg["chat_id"]

    if isinstance(raw_chat_id, list):
        chat_ids = [str(x).strip() for x in raw_chat_id if str(x).strip()]
    elif isinstance(raw_chat_id, str):
        chat_ids = [x.strip() for x in raw_chat_id.replace(",", " ").split() if x.strip()]
    else:
        chat_ids = [str(raw_chat_id)] if raw_chat_id else []

    if not chat_ids:
        return False

    status_icon = "🎉" if rsvp_data.get("attendance") == "attending" else "💔"
    status_text = "БУДЕТ ПРИСУТСТВОВАТЬ" if rsvp_data.get("attendance") == "attending" else "НЕ СМОЖЕТ ПРИЙТИ"

    msg_lines = [
        f"{status_icon} <b>Новый ответ на приглашение!</b>",
        "",
        f"👤 <b>Гость:</b> {rsvp_data.get('first_name', '')} {rsvp_data.get('last_name', '')}",
        f"📞 <b>Телефон:</b> {rsvp_data.get('phone', '')}",
        f"📊 <b>Статус:</b> {status_text}",
        f"👥 <b>Количество человек:</b> {rsvp_data.get('guests_count', 1)}",
    ]

    if rsvp_data.get("message"):
        msg_lines.append(f"💌 <b>Поздравление:</b>\n<i>«{rsvp_data.get('message')}»</i>")

    custom_answers = rsvp_data.get("custom_answers") or {}
    if isinstance(custom_answers, dict) and custom_answers:
        for k, v in custom_answers.items():
            if isinstance(v, dict):
                label = v.get("label_ru") or v.get("label_he") or k
                val = v.get("value", "")
            else:
                label = k
                val = v
            if val not in (None, ""):
                msg_lines.append(f"📝 <b>{label}:</b> {val}")

    msg_lines.append("")
    msg_lines.append(f"⏰ {datetime.now().strftime('%Y-%m-%d %H:%M')}")

    full_text = "\n".join(msg_lines)
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"

    success_any = False
    for cid in chat_ids:
        payload = {
            "chat_id": cid,
            "text": full_text,
            "parse_mode": "HTML"
        }
        try:
            data = json.dumps(payload).encode("utf-8")
            req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
            with urllib.request.urlopen(req, timeout=5) as response:
                success_any = True
        except Exception as e:
            print(f"Failed to send Telegram alert to {cid}: {e}")

    return success_any


def get_stats_message():
    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("SELECT attendance, guests_count FROM rsvps")
        rows = cursor.fetchall()
        conn.close()

        total_responses = len(rows)
        attending_responses = 0
        declined_responses = 0
        total_people = 0

        for att, cnt in rows:
            if att == 'attending':
                attending_responses += 1
                total_people += (cnt or 1)
            else:
                declined_responses += 1

        lines = [
            "📊 <b>Статистика гостей на данный момент:</b>",
            "━━━━━━━━━━━━━━━━━━",
            f"🎉 <b>Подтвердили (анкет):</b> {attending_responses}",
            f"👥 <b>ВСЕГО ГОСТЕЙ ПРИДЕТ:</b> <b>{total_people} чел.</b>",
            f"💔 <b>Не смогут прийти:</b> {declined_responses} чел.",
            f"📨 <b>Всего ответов получено:</b> {total_responses}",
            "━━━━━━━━━━━━━━━━━━",
            f"⏰ <i>Обновлено: {datetime.now().strftime('%d.%m.%Y %H:%M')}</i>"
        ]
        return "\n".join(lines)
    except Exception as e:
        return f"Ошибка при получении статистики: {e}"


def get_guest_list_message(attending=True):
    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        status = 'attending' if attending else 'declined'
        cursor.execute("SELECT first_name, last_name, phone, guests_count, message FROM rsvps WHERE attendance = ? ORDER BY id ASC", (status,))
        rows = cursor.fetchall()
        conn.close()

        if not rows:
            if attending:
                return "📋 <b>Список гостей пока пуст.</b>\nКогда гости заполнят анкету на сайте, они появятся здесь!"
            else:
                return "💔 <b>Пока никто не отказался!</b>\nВсе приглашённые планируют присутствовать! 🎉"

        if attending:
            total_people = sum(r[3] or 1 for r in rows)
            lines = [
                f"📋 <b>Список подтверждённых гостей</b>",
                f"<i>(Анкет: {len(rows)}, Всего людей: {total_people})</i>",
                "━━━━━━━━━━━━━━━━━━"
            ]
            for idx, r in enumerate(rows, 1):
                f_name, l_name, phone, count, msg = r
                count_str = f" (+{count-1})" if count and count > 1 else ""
                lines.append(f"<b>{idx}. {f_name} {l_name}</b> — <b>{count or 1} чел.</b>{count_str}")
                lines.append(f"   📞 <code>{phone}</code>")
                if msg:
                    lines.append(f"   💌 <i>«{msg}»</i>")
                lines.append("")
        else:
            lines = [
                f"💔 <b>Гости, которые не смогут прийти ({len(rows)} чел.):</b>",
                "━━━━━━━━━━━━━━━━━━"
            ]
            for idx, r in enumerate(rows, 1):
                f_name, l_name, phone, _, msg = r
                lines.append(f"<b>{idx}. {f_name} {l_name}</b>")
                lines.append(f"   📞 <code>{phone}</code>")
                if msg:
                    lines.append(f"   💌 <i>«{msg}»</i>")
                lines.append("")

        return "\n".join(lines)
    except Exception as e:
        return f"Ошибка при получении списка: {e}"


def get_wishes_message():
    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("SELECT first_name, last_name, message, created_at FROM rsvps WHERE message IS NOT NULL AND TRIM(message) != '' ORDER BY id DESC LIMIT 15")
        rows = cursor.fetchall()
        conn.close()

        if not rows:
            return "💌 <b>Пока нет поздравлений.</b>\nКак только гости напишут тёплые слова, они появятся здесь!"

        lines = [
            f"💌 <b>Тёплые слова и поздравления от гостей:</b>",
            "━━━━━━━━━━━━━━━━━━"
        ]
        for r in rows:
            f_name, l_name, msg, date = r
            lines.append(f"👤 <b>{f_name} {l_name}:</b>")
            lines.append(f"<i>«{msg}»</i>\n")

        return "\n".join(lines)
    except Exception as e:
        return f"Ошибка при получении поздравлений: {e}"


def send_telegram_reply(bot_token, chat_id, text):
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    payload = {
        "chat_id": chat_id,
        "text": text,
        "parse_mode": "HTML",
        "reply_markup": {
            "keyboard": [
                [{"text": "📊 Сколько придет"}, {"text": "📋 Список гостей"}],
                [{"text": "💔 Кто не сможет"}, {"text": "💌 Поздравления"}]
            ],
            "resize_keyboard": True,
            "is_persistent": True
        }
    }
    try:
        data = json.dumps(payload).encode("utf-8")
        req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
        with urllib.request.urlopen(req, timeout=5) as response:
            return True
    except Exception as e:
        print(f"Failed to send reply to {chat_id}: {e}")
        return False


class WeddingHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=PUBLIC_DIR, **kwargs)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        if path == "/" or path == "/index.html":
            self.send_file(os.path.join(PUBLIC_DIR, "index.html"), "text/html; charset=utf-8")
            return
        elif path == "/admin" or path == "/admin.html":
            self.send_file(os.path.join(PUBLIC_DIR, "admin.html"), "text/html; charset=utf-8")
            return
        elif path == "/api/config":
            cfg = load_config()
            public_cfg = {
                "wedding": cfg.get("wedding", {}),
                "photos": cfg.get("photos", {}),
                "telegram_configured": bool(cfg.get("telegram", {}).get("enabled") and cfg.get("telegram", {}).get("bot_token"))
            }
            self.send_json(public_cfg)
            return
        elif path == "/api/rsvps":
            self.handle_get_rsvps()
            return
        elif path == "/api/export-csv":
            self.handle_export_csv()
            return
        elif path == "/api/setup-webhook":
            self.handle_setup_webhook()
            return
        elif path == "/api/sync-github":
            self.handle_sync_github()
            return
        elif path == "/api/backup":
            self.handle_backup()
            return
        elif path == "/app.js":
            self.send_file(os.path.join(PUBLIC_DIR, "app.js"), "application/javascript; charset=utf-8")
            return
        elif path == "/style.css":
            self.send_file(os.path.join(PUBLIC_DIR, "style.css"), "text/css; charset=utf-8")
            return

        super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        content_length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_length)

        try:
            payload = json.loads(body.decode("utf-8")) if body else {}
        except Exception:
            self.send_error(400, "Invalid JSON")
            return

        if path == "/api/rsvp":
            self.handle_post_rsvp(payload)
        elif path == "/api/telegram-webhook":
            self.handle_telegram_webhook(payload)
        elif path == "/api/setup-webhook":
            self.handle_setup_webhook()
        elif path == "/api/settings":
            self.handle_save_settings(payload)
        elif path == "/api/upload-photo":
            self.handle_upload_photo(payload)
        elif path == "/api/test-telegram":
            self.handle_test_telegram(payload)
        elif path == "/api/rsvps/clear":
            self.handle_clear_rsvps()
        elif path == "/api/rsvps/delete":
            self.handle_delete_rsvp(payload)
        elif path == "/api/restore":
            self.handle_restore(payload)
        else:
            self.send_error(404, "Endpoint not found")

    def do_DELETE(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        if path == "/api/rsvps/clear":
            self.handle_clear_rsvps()
        elif path == "/api/rsvps":
            query = urllib.parse.parse_qs(parsed.query)
            rsvp_id = query.get("id", [None])[0]
            self.handle_delete_rsvp({"id": rsvp_id})
        else:
            self.send_error(404, "Endpoint not found")

    def check_admin(self):
        auth_header = self.headers.get("Authorization", "")
        cfg = load_config()
        expected_pass = cfg.get("admin", {}).get("password", "wedding2027admin")
        return auth_header == f"Bearer {expected_pass}"

    def handle_post_rsvp(self, payload):
        first_name = payload.get("first_name", "").strip()
        last_name = payload.get("last_name", "").strip()
        phone = payload.get("phone", "").strip()
        attendance = payload.get("attendance", "attending")
        guests_count = int(payload.get("guests_count", 1))
        message = payload.get("message", "").strip()
        language = payload.get("language", "ru")
        custom_answers = payload.get("custom_answers")
        if not isinstance(custom_answers, dict):
            custom_answers = {}
        custom_answers_json = json.dumps(custom_answers, ensure_ascii=False)

        if not first_name or not last_name or not phone:
            self.send_json({"error": "First name, last name, and phone are required"}, status=400)
            return

        try:
            conn = sqlite3.connect(DB_PATH)
            cursor = conn.cursor()
            cursor.execute("""
                INSERT INTO rsvps (first_name, last_name, phone, attendance, guests_count, message, language, custom_answers)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """, (first_name, last_name, phone, attendance, guests_count, message, language, custom_answers_json))
            conn.commit()
            rsvp_id = cursor.lastrowid
            conn.close()
        except Exception as e:
            self.send_json({"error": f"Database error: {str(e)}"}, status=500)
            return

        rsvp_data = {
            "id": rsvp_id,
            "first_name": first_name,
            "last_name": last_name,
            "phone": phone,
            "attendance": attendance,
            "guests_count": guests_count,
            "message": message,
            "language": language,
            "custom_answers": custom_answers
        }

        telegram_sent = send_telegram_notification(rsvp_data)

        self.send_json({
            "success": True,
            "id": rsvp_id,
            "telegram_sent": telegram_sent,
            "message": "RSVP recorded successfully"
        })

    def handle_get_rsvps(self):
        if not self.check_admin():
            self.send_json({"error": "Unauthorized"}, status=401)
            return

        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("SELECT id, first_name, last_name, phone, attendance, guests_count, message, language, created_at, custom_answers FROM rsvps ORDER BY id DESC")
        rows = cursor.fetchall()
        conn.close()

        items = []
        attending_count = 0
        declined_count = 0
        total_people = 0

        for r in rows:
            is_attending = (r[4] == "attending")
            if is_attending:
                attending_count += 1
                total_people += (r[5] or 1)
            else:
                declined_count += 1

            try:
                ca = json.loads(r[9]) if r[9] else {}
            except Exception:
                ca = {}

            items.append({
                "id": r[0],
                "first_name": r[1],
                "last_name": r[2],
                "phone": r[3],
                "attendance": r[4],
                "guests_count": r[5],
                "message": r[6],
                "language": r[7],
                "created_at": r[8],
                "custom_answers": ca
            })

        cfg = load_config()
        self.send_json({
            "stats": {
                "total_responses": len(rows),
                "attending_responses": attending_count,
                "declined_responses": declined_count,
                "total_people_attending": total_people
            },
            "rsvps": items,
            "config": {
                "wedding": cfg.get("wedding", {}),
                "photos": cfg.get("photos", {}),
                "telegram": {
                    "enabled": cfg.get("telegram", {}).get("enabled", False),
                    "bot_token": "***" if cfg.get("telegram", {}).get("bot_token") else "",
                    "chat_id": cfg.get("telegram", {}).get("chat_id", "")
                }
            }
        })

    def handle_clear_rsvps(self):
        if not self.check_admin():
            self.send_json({"error": "Unauthorized"}, status=401)
            return
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("DELETE FROM rsvps;")
        cursor.execute("DELETE FROM sqlite_sequence WHERE name='rsvps';")
        conn.commit()
        conn.close()
        self.send_json({"success": True, "message": "All RSVPs cleared"})

    def handle_delete_rsvp(self, payload):
        if not self.check_admin():
            self.send_json({"error": "Unauthorized"}, status=401)
            return
        rsvp_id = payload.get("id")
        if not rsvp_id:
            self.send_json({"error": "Missing id"}, status=400)
            return
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("DELETE FROM rsvps WHERE id = ?;", (rsvp_id,))
        conn.commit()
        conn.close()
        self.send_json({"success": True, "message": "RSVP deleted"})

    def handle_upload_photo(self, payload):
        if not self.check_admin():
            self.send_json({"error": "Unauthorized"}, status=401)
            return

        image_data = payload.get("image", "")
        file_name = payload.get("filename", "")

        if not image_data:
            self.send_json({"error": "No image data provided"}, status=400)
            return

        # Expect base64 data url e.g. "data:image/jpeg;base64,..."
        try:
            if "," in image_data:
                header, encoded = image_data.split(",", 1)
            else:
                encoded = image_data

            ext = ".jpg"
            if "png" in header:
                ext = ".png"
            elif "webp" in header:
                ext = ".webp"

            timestamp = int(time.time() * 1000)
            out_filename = f"photo_{timestamp}{ext}"
            out_path = os.path.join(UPLOADS_DIR, out_filename)

            with open(out_path, "wb") as f:
                f.write(base64.b64decode(encoded))

            photo_url = f"/uploads/{out_filename}"
            self.send_json({"success": True, "url": photo_url})
        except Exception as e:
            self.send_json({"error": f"Failed to save image: {e}"}, status=500)

    def handle_export_csv(self):
        auth_query = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query).get("key", [""])[0]
        cfg = load_config()
        expected_pass = cfg.get("admin", {}).get("password", "wedding2027admin")

        if auth_query != expected_pass:
            self.send_error(401, "Unauthorized")
            return

        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("SELECT id, first_name, last_name, phone, attendance, guests_count, message, language, created_at, custom_answers FROM rsvps ORDER BY id ASC")
        rows = cursor.fetchall()
        conn.close()

        import csv
        import io
        output = io.StringIO()
        writer = csv.writer(output)
        writer.writerow(["ID", "Имя", "Фамилия", "Телефон", "Присутствие", "Кол-во гостей", "Поздравление", "Доп. пункты", "Язык", "Дата регистрации"])

        for r in rows:
            ca_str = ""
            try:
                ca = json.loads(r[9]) if r[9] else {}
                if isinstance(ca, dict) and ca:
                    parts = []
                    for k, v in ca.items():
                        if isinstance(v, dict):
                            parts.append(f"{v.get('label_ru') or k}: {v.get('value', '')}")
                        else:
                            parts.append(f"{k}: {v}")
                    ca_str = "; ".join(parts)
            except Exception:
                ca_str = ""
            writer.writerow([r[0], r[1], r[2], r[3], "Придет" if r[4] == "attending" else "Не придет", r[5], r[6], ca_str, r[7], r[8]])

        csv_data = output.getvalue().encode("utf-8-sig")

        self.send_response(200)
        self.send_header("Content-Type", "text/csv; charset=utf-8")
        self.send_header("Content-Disposition", 'attachment; filename="wedding_guests_nazar_sofia.csv"')
        self.send_header("Content-Length", str(len(csv_data)))
        self.end_headers()
        self.wfile.write(csv_data)

    def handle_save_settings(self, payload):
        if not self.check_admin():
            self.send_json({"error": "Unauthorized"}, status=401)
            return

        cfg = load_config()

        if "wedding" in payload:
            cfg["wedding"].update(payload["wedding"])
        if "photos" in payload:
            cfg["photos"].update(payload["photos"])
        if "telegram" in payload:
            cfg["telegram"].update(payload["telegram"])

        save_config(cfg)
        self.send_json({"success": True, "message": "Settings saved successfully", "config": cfg})

    def handle_backup(self):
        if not self.check_admin():
            self.send_json({"error": "Unauthorized"}, status=401)
            return

        cfg = load_config()
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("SELECT id, first_name, last_name, phone, attendance, guests_count, message, language, created_at, custom_answers FROM rsvps ORDER BY id ASC")
        rows = cursor.fetchall()
        conn.close()

        rsvps = [
            {
                "id": r[0],
                "first_name": r[1],
                "last_name": r[2],
                "phone": r[3],
                "attendance": r[4],
                "guests_count": r[5],
                "message": r[6],
                "language": r[7],
                "created_at": r[8],
                "custom_answers": json.loads(r[9]) if r[9] else {}
            }
            for r in rows
        ]

        uploads = {}
        if os.path.exists(UPLOADS_DIR):
            for fname in os.listdir(UPLOADS_DIR):
                fpath = os.path.join(UPLOADS_DIR, fname)
                if os.path.isfile(fpath):
                    try:
                        with open(fpath, "rb") as f:
                            uploads[fname] = base64.b64encode(f.read()).decode("ascii")
                    except Exception as e:
                        print(f"Backup read upload error ({fname}): {e}")

        self.send_json({
            "exported_at": datetime.now().isoformat(),
            "wedding": cfg.get("wedding", {}),
            "photos": cfg.get("photos", {}),
            "rsvps": rsvps,
            "uploads": uploads
        })

    def handle_restore(self, payload):
        if not self.check_admin():
            self.send_json({"error": "Unauthorized"}, status=401)
            return

        cfg = load_config()
        if "wedding" in payload and isinstance(payload["wedding"], dict):
            cfg["wedding"].update(payload["wedding"])
        if "photos" in payload and isinstance(payload["photos"], dict):
            cfg["photos"].update(payload["photos"])
        save_config(cfg)

        uploads = payload.get("uploads", {})
        if isinstance(uploads, dict):
            os.makedirs(UPLOADS_DIR, exist_ok=True)
            for fname, b64 in uploads.items():
                safe_name = os.path.basename(fname)
                if not safe_name:
                    continue
                try:
                    with open(os.path.join(UPLOADS_DIR, safe_name), "wb") as f:
                        f.write(base64.b64decode(b64))
                except Exception as e:
                    print(f"Restore upload error ({safe_name}): {e}")

        rsvps = payload.get("rsvps", [])
        if isinstance(rsvps, list) and rsvps:
            conn = sqlite3.connect(DB_PATH)
            cursor = conn.cursor()
            if payload.get("replace_rsvps"):
                cursor.execute("DELETE FROM rsvps;")
            for r in rsvps:
                cursor.execute(
                    "SELECT id FROM rsvps WHERE first_name = ? AND last_name = ? AND phone = ?",
                    (r.get("first_name", ""), r.get("last_name", ""), r.get("phone", ""))
                )
                if not cursor.fetchone():
                    cursor.execute("""
                        INSERT INTO rsvps (first_name, last_name, phone, attendance, guests_count, message, language, custom_answers, created_at)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                    """, (
                        r.get("first_name", ""),
                        r.get("last_name", ""),
                        r.get("phone", ""),
                        r.get("attendance", "attending"),
                        int(r.get("guests_count", 1)),
                        r.get("message", ""),
                        r.get("language", "ru"),
                        json.dumps(r.get("custom_answers") or {}, ensure_ascii=False),
                        r.get("created_at") or datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                    ))
            conn.commit()
            conn.close()

        self.send_json({"success": True, "message": "Backup restored successfully"})

    def handle_test_telegram(self, payload):
        if not self.check_admin():
            self.send_json({"error": "Unauthorized"}, status=401)
            return

        test_data = {
            "first_name": "Тестовый",
            "last_name": "Гость",
            "phone": "+972 50-123-4567",
            "attendance": "attending",
            "guests_count": 2,
            "message": "Тестовое поздравление! Бот настроен и работает отлично! 🎉🥂"
        }
        success = send_telegram_notification(test_data)
        self.send_json({"success": success})

    def handle_telegram_webhook(self, payload):
        msg = payload.get("message") or payload.get("edited_message")
        if not msg:
            self.send_json({"ok": True})
            return

        chat = msg.get("chat", {})
        chat_id = str(chat.get("id", ""))
        text = (msg.get("text") or "").strip().lower()

        cfg = load_config()
        tg = cfg.get("telegram", {})
        bot_token = tg.get("bot_token")
        raw_allowed = tg.get("chat_id", "")

        if isinstance(raw_allowed, list):
            allowed_ids = [str(x).strip() for x in raw_allowed]
        else:
            allowed_ids = [x.strip() for x in str(raw_allowed).replace(",", " ").split() if x.strip()]

        if not bot_token:
            self.send_json({"ok": True})
            return

        # Security check: only Nazar and Sofia
        if chat_id not in allowed_ids:
            send_telegram_reply(bot_token, chat_id, "🔒 Этот бот приватный и предназначен только для жениха и невесты (Назара и Софии).")
            self.send_json({"ok": True})
            return

        # Commands handling
        if text in ["/start", "/help", "старт", "меню", "привет", "главная"]:
            greeting = (
                "💍 <b>Приветствуем, молодожёны!</b>\n\n"
                "Я ваш свадебный бот-ассистент.\n"
                "Вы можете просто нажимать кнопки внизу экрана или писать мне обычные вопросы:\n\n"
                "• <b>«Сколько придет»</b> — покажет точный подсчет людей\n"
                "• <b>«Список гостей»</b> — пришлет полный список подтвердивших с телефонами\n"
                "• <b>«Кто не сможет»</b> — покажет тех, кто отклонил\n"
                "• <b>«Поздравления»</b> — покажет все тёплые пожелания от гостей"
            )
            send_telegram_reply(bot_token, chat_id, greeting)
        elif any(k in text for k in ["сколько", "статистик", "стата", "сколько людей", "/stats", "📊 сколько придет"]):
            reply_text = get_stats_message()
            send_telegram_reply(bot_token, chat_id, reply_text)
        elif any(k in text for k in ["список", "кто придет", "/list", "гости", "📋 список гостей"]):
            reply_text = get_guest_list_message(attending=True)
            send_telegram_reply(bot_token, chat_id, reply_text)
        elif any(k in text for k in ["отказал", "не сможет", "не придет", "/declined", "💔 кто не сможет"]):
            reply_text = get_guest_list_message(attending=False)
            send_telegram_reply(bot_token, chat_id, reply_text)
        elif any(k in text for k in ["поздравлен", "пожелан", "слова", "💌 поздравления", "/wishes"]):
            reply_text = get_wishes_message()
            send_telegram_reply(bot_token, chat_id, reply_text)
        else:
            default_reply = (
                "Я вас понял, но лучше нажмите одну из кнопок внизу меню 👇\n"
                "или напишите <b>«Сколько придет»</b> или <b>«Список гостей»</b>!"
            )
            send_telegram_reply(bot_token, chat_id, default_reply)

        self.send_json({"ok": True})

    def handle_setup_webhook(self):
        cfg = load_config()
        tg = cfg.get("telegram", {})
        bot_token = tg.get("bot_token")
        if not bot_token:
            self.send_json({"error": "No bot token configured"}, status=400)
            return

        webhook_url = "https://nazar-sofia-wedding.onrender.com/api/telegram-webhook"
        set_url = f"https://api.telegram.org/bot{bot_token}/setWebhook?url={urllib.parse.quote(webhook_url)}"
        try:
            req = urllib.request.Request(set_url)
            with urllib.request.urlopen(req, timeout=5) as response:
                res_body = json.loads(response.read().decode())
                
                # Send greeting with buttons to Nazar and Sofia
                raw_allowed = tg.get("chat_id", "")
                if isinstance(raw_allowed, list):
                    chat_ids = [str(x).strip() for x in raw_allowed]
                else:
                    chat_ids = [x.strip() for x in str(raw_allowed).replace(",", " ").split() if x.strip()]
                for cid in chat_ids:
                    send_telegram_reply(bot_token, cid, "⚡ <b>Команды и кнопки активированы!</b>\nТеперь внизу экрана у вас есть кнопки для подсчёта гостей.")

                self.send_json({"success": True, "telegram_response": res_body})
        except Exception as e:
            self.send_json({"error": str(e)}, status=500)

    def handle_sync_github(self):
        files_to_sync = ["public/index.html", "public/app.js", "public/style.css", "public/admin.html"]
        synced = []
        for rel_path in files_to_sync:
            raw_url = f"https://raw.githubusercontent.com/yt82bftgmk-blip/wedding-invitation/main/{rel_path}?t={int(time.time())}"
            try:
                req = urllib.request.Request(raw_url, headers={"Cache-Control": "no-cache"})
                with urllib.request.urlopen(req, timeout=10) as res:
                    data = res.read()
                    dest = os.path.join(BASE_DIR, rel_path)
                    with open(dest, "wb") as f:
                        f.write(data)
                    synced.append(rel_path)
            except Exception as e:
                print(f"Sync error for {rel_path}: {e}")
        self.send_json({"success": True, "synced": synced})

    def send_file(self, filepath, content_type):
        try:
            with open(filepath, "rb") as f:
                content = f.read()
            self.send_response(200)
            self.send_header("Content-Type", content_type)
            self.send_header("Access-Control-Allow-Origin", "*")
            self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
            self.send_header("Pragma", "no-cache")
            self.send_header("Expires", "0")
            self.send_header("Content-Length", str(len(content)))
            self.end_headers()
            self.wfile.write(content)
        except FileNotFoundError:
            self.send_error(404, "File not found")

    def send_json(self, data, status=200):
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


def auto_setup_webhook():
    time.sleep(3)
    cfg = load_config()
    tg = cfg.get("telegram", {})
    bot_token = tg.get("bot_token")
    if not bot_token:
        return
    webhook_url = "https://nazar-sofia-wedding.onrender.com/api/telegram-webhook"
    set_url = f"https://api.telegram.org/bot{bot_token}/setWebhook?url={urllib.parse.quote(webhook_url)}"
    try:
        req = urllib.request.Request(set_url)
        with urllib.request.urlopen(req, timeout=5) as res:
            print("Webhook registered on startup:", res.read().decode())
    except Exception as e:
        print("Auto webhook setup error:", e)


def run_server():
    init_db()
    threading.Thread(target=auto_setup_webhook, daemon=True).start()
    server_address = ("", PORT)
    httpd = HTTPServer(server_address, WeddingHandler)
    print(f"==================================================")
    print(f"💍 Свадебное приложение Назара и Софии запущено!")
    print(f"🌐 Сайт приглашения:    http://localhost:{PORT}")
    print(f"👑 Панель владельца:    http://localhost:{PORT}/admin")
    print(f"==================================================")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nСервер остановлен.")
        httpd.server_close()


if __name__ == "__main__":
    run_server()
