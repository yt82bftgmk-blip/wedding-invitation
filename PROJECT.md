Перед началом прочитай файл PROJECT.md в корне проекта:
/Users/viktorkhristenko/.gemini/antigravity/scratch/wedding-invitation/PROJECT.md

Краткая сводка:
- Папка проекта: /Users/viktorkhristenko/.gemini/antigravity/scratch/wedding-invitation
- Живой сайт (Render): https://nazar-sofia-wedding.onrender.com
- Админ-панель: https://nazar-sofia-wedding.onrender.com/admin
- Основные файлы:
  - public/index.html, public/app.js, public/style.css (сейчас style.css?v=12, app.js?v=30) — двуязычный гостевой сайт (RU / HE RTL), приветственное окно при входе (#welcome-modal) с переключателем языка, крестиком и кнопкой «Читать нашу историю» (закрывает окно и оставляет гостя в самом верху страницы, чтобы он видел дату и время свадьбы), случайный плеер из 4 треков (track_1, track_2, track_4, track_5), адаптация под увеличенный шрифт на телефонах и защита от вылета при зуме (включая #rsvp-page-overlay с flex-wrap у счётчиков, заголовков и селектора телефона), плавные эффекты появления при скролле (.reveal-left, .reveal-right, .reveal-photo, .reveal-scale, .reveal-icon), раздел «Наша история» (4 главы: 2023, 2024, 2025 «Встреча после долгой разлуки», 2026 «Она сказала «Да!»» с фото #story-img-0..3), «Фотоальбом любви» (включая /uploads/smile_tenderness.jpg) со всплывающим окном #photo-story-modal, блок Bit и отдельная полноэкранная страница подтверждения присутствия (#rsvp-page-overlay) с блоками «Семья» (Дети до 12 и Муж/Жена и родные) и «Дополнительные гости», без бейджа «Итого: 1».
  - public/admin.html — закрытая админ-панель (/admin) с редактированием текстов (RU/HE) и автопереводом RU -> HE (при сохранении и при переключении на HE, сохраняя ручные правки на иврите), фото (hero, 4 фото истории, фотоальбом), Bit, доп. пунктов анкеты (включая кнопку «Удалить»), таблицей гостей и бэкапом.
  - public/uploads/ — загруженные и обработанные фото сайта (в т.ч. smile_tenderness.jpg).
  - server.py — Python-сервер, SQLite (wedding.db), API (включая /api/translate и автоперевод RU -> HE в /api/settings) и Telegram-бот.
  - config.json — настройки, тексты, Bit, фото, доп. поля RSVP, пароль админа и Telegram.
  - sync_live.py — точная 1:1 выгрузка живых данных с Render (/api/backup) в локальный репозиторий (включая удаления и очистку списка гостей).

Правила:
1. Сохраняй поддержку двух языков (русский и иврит RTL).
2. Не добавляй ссылку на /admin в публичный футер гостевого сайта.
3. ПЕРЕД любым git push обязательно запускай `python3 sync_live.py` и коммить обновлённые config.json / wedding.db / public/uploads.
4. После изменений в public/ обновляй ?v=... в public/index.html и пушь в GitHub.

МОЯ СЛЕД ЗАДАЧА: 
