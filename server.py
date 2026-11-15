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
            "bit_name": "Nazar & Sofia"
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
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
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

        if not first_name or not last_name or not phone:
            self.send_json({"error": "First name, last name, and phone are required"}, status=400)
            return

        try:
            conn = sqlite3.connect(DB_PATH)
            cursor = conn.cursor()
            cursor.execute("""
                INSERT INTO rsvps (first_name, last_name, phone, attendance, guests_count, message, language)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            """, (first_name, last_name, phone, attendance, guests_count, message, language))
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
            "language": language
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
        cursor.execute("SELECT id, first_name, last_name, phone, attendance, guests_count, message, language, created_at FROM rsvps ORDER BY id DESC")
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

            items.append({
                "id": r[0],
                "first_name": r[1],
                "last_name": r[2],
                "phone": r[3],
                "attendance": r[4],
                "guests_count": r[5],
                "message": r[6],
                "language": r[7],
                "created_at": r[8]
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
        cursor.execute("SELECT id, first_name, last_name, phone, attendance, guests_count, message, language, created_at FROM rsvps ORDER BY id ASC")
        rows = cursor.fetchall()
        conn.close()

        import csv
        import io
        output = io.StringIO()
        writer = csv.writer(output)
        writer.writerow(["ID", "Имя", "Фамилия", "Телефон", "Присутствие", "Кол-во гостей", "Поздравление", "Язык", "Дата регистрации"])

        for r in rows:
            writer.writerow([r[0], r[1], r[2], r[3], "Придет" if r[4] == "attending" else "Не придет", r[5], r[6], r[7], r[8]])

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

    def send_file(self, filepath, content_type):
        try:
            with open(filepath, "rb") as f:
                content = f.read()
            self.send_response(200)
            self.send_header("Content-Type", content_type)
            self.send_header("Access-Control-Allow-Origin", "*")
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


def run_server():
    init_db()
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
