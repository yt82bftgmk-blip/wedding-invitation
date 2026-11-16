#!/usr/bin/env python3
"""
Pulls live wedding config, uploaded photos, and RSVP guests from Render
into the local repository BEFORE pushing code updates to GitHub.
This guarantees user edits on the live site are never lost on redeploy.
"""

import os
import json
import base64
import sqlite3
import urllib.request

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CONFIG_PATH = os.path.join(BASE_DIR, "config.json")
UPLOADS_DIR = os.path.join(BASE_DIR, "public", "uploads")
DB_PATH = os.path.join(BASE_DIR, "wedding.db")
LIVE_URL = "https://nazar-sofia-wedding.onrender.com/api/backup"


def main():
    if not os.path.exists(CONFIG_PATH):
        print("config.json not found")
        return

    with open(CONFIG_PATH, "r", encoding="utf-8") as f:
        cfg = json.load(f)

    password = cfg.get("admin", {}).get("password", "")
    req = urllib.request.Request(
        LIVE_URL,
        headers={"Authorization": f"Bearer {password}"}
    )

    try:
        with urllib.request.urlopen(req, timeout=15) as res:
            data = json.loads(res.read().decode("utf-8"))
    except Exception as e:
        print(f"Could not fetch live backup: {e}")
        return

    if "wedding" in data:
        cfg["wedding"] = data["wedding"]
    if "photos" in data:
        cfg["photos"] = data["photos"]

    with open(CONFIG_PATH, "w", encoding="utf-8") as f:
        json.dump(cfg, f, ensure_ascii=False, indent=2)

    uploads = data.get("uploads", {})
    os.makedirs(UPLOADS_DIR, exist_ok=True)
    for fname, b64 in uploads.items():
        safe_name = os.path.basename(fname)
        if not safe_name:
            continue
        with open(os.path.join(UPLOADS_DIR, safe_name), "wb") as f:
            f.write(base64.b64decode(b64))

    rsvps = data.get("rsvps", [])
    if rsvps:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        for r in rsvps:
            cursor.execute(
                "SELECT id FROM rsvps WHERE first_name = ? AND last_name = ? AND phone = ?",
                (r.get("first_name", ""), r.get("last_name", ""), r.get("phone", ""))
            )
            if not cursor.fetchone():
                cursor.execute("""
                    INSERT INTO rsvps (first_name, last_name, phone, attendance, guests_count, message, language, created_at)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                """, (
                    r.get("first_name", ""),
                    r.get("last_name", ""),
                    r.get("phone", ""),
                    r.get("attendance", "attending"),
                    int(r.get("guests_count", 1)),
                    r.get("message", ""),
                    r.get("language", "ru"),
                    r.get("created_at")
                ))
        conn.commit()
        conn.close()

    print(f"Synced live data: {len(uploads)} upload(s), {len(rsvps)} RSVP(s).")


if __name__ == "__main__":
    main()
