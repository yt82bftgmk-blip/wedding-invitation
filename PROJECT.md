# 💍 Шпаргалка по структуре проекта (Назар & София)

Краткое руководство по устройству всего свадебного веб-приложения: гостевой сайт, админ-панель, сервер, база данных и Telegram-бот.

---

## 📁 Структура файлов проекта

```text
wedding-invitation/
├── server.py               # Python-сервер: статика, API гостей/админки, бэкап, SQLite и Telegram-бот
├── sync_live.py            # Скрипт: выгружает живые данные с Render (/api/backup) перед git push
├── config.json             # Конфигурация: данные свадьбы, тексты (RU/HE), фото, пароль и Telegram
├── wedding.db              # База данных SQLite (таблица rsvps с ответами гостей)
├── Procfile                # Команда запуска на хостинге Render (python3 server.py)
├── requirements.txt        # Зависимости Python
├── PROJECT.md              # Эта шпаргалка по проекту
├── README.md               # Базовое описание проекта
└── public/                 # Фронтенд и медиафайлы
    ├── index.html          # Гостевой сайт-приглашение (RU / HE RTL)
    ├── app.js              # Вся интерактивная логика гостевого сайта
    ├── style.css           # Стили, цветовая палитра (#FAF7F2) и анимации
    ├── admin.html          # Закрытая админ-панель (/admin) — визуальная копия сайта с inline-редактированием
    ├── music/
    │   └── wedding.mp3     # Фоновая музыка (автозапуск и цикл)
    ├── images/             # Локальные изображения
    └── uploads/            # Фотографии, загруженные через админ-панель
```

---

## 📄 Основные файлы и за что они отвечают

### 1. Гостевая часть (`public/index.html`, `public/app.js`, `public/style.css`)
* **[`public/index.html`](file:///Users/viktorkhristenko/.gemini/antigravity/scratch/wedding-invitation/public/index.html)** — разметка всех блоков приглашения:
  * Шапка с переключателем языка (`🇷🇺 Русский` / `🇮🇱 עברית`).
  * Плавающий музыкальный плеер (`#music-player-container`) и `<audio id="wedding-audio">`.
  * Первый экран (`#hero`) с именами, главным фото и таймером обратного отсчёта.
  * История пары (`#story`) и «Фотоальбом любви» (`#gallery-grid`) с 8 карточками.
  * Всплывающее окно мини-истории (`#photo-story-modal`) с размытием фона (`backdrop-blur-xl`) и кнопкой закрытия (`✕`).
  * Тайминг дня, карточка зала (Waze / Google Maps), блок подарка **Bit** и форма подтверждения (`#rsvp`).
* **[`public/app.js`](file:///Users/viktorkhristenko/.gemini/antigravity/scratch/wedding-invitation/public/app.js)** — клиентская логика:
  * `translations` и `setLanguage()` — перевод интерфейса и переключение `LTR` ↔ `RTL`.
  * `initMusicAutoPlay()` / `toggleMusic()` — автозапуск музыки (с разблокировкой при первом касании на мобильных) и кнопка паузы.
  * `photoStories`, `openPhotoStory()`, `closePhotoStory()` — мини-истории для фотографий в альбоме.
  * `setPhoneFormat()`, `handlePhoneKeyDown()`, `formatPhoneNumber()`, `validatePhoneNumber()` — строгая валидация телефона (только цифры, форматы Израиля `+972` / `05X` и России `+7`).
  * `submitRSVP()` — отправка анкеты в `/api/rsvp` и анимация конфетти.
* **[`public/style.css`](file:///Users/viktorkhristenko/.gemini/antigravity/scratch/wedding-invitation/public/style.css)** — тёплая палитра оттенка шампань (`#FAF7F2`), анимация крутящейся пластинки (`.animate-spin-slow`), эквалайзера (`.eq-bar-1..3`) и карточек альбома (`.photo-story-card`).

---

### 2. Админ-панель ([`public/admin.html`](file:///Users/viktorkhristenko/.gemini/antigravity/scratch/wedding-invitation/public/admin.html))
Открывается по адресу `/admin` и защищена паролем из `config.json`. Выполнена **идентично гостевому сайту** с доступом для редактирования прямо на странице:
* **Inline-редактор всех текстов (RU / HE RTL)** — редактирование любых заголовков, историй, программы дня, локации, карточки Bit и всех полей формы RSVP (`wedding.texts`), а также подписей и мини-историй к фото (`photos.stories`).
* **Фото и дата** — загрузка главного фото и фотоальбома (`/api/upload-photo`), выбор даты для таймера, ссылки Waze / Google Maps (`/api/settings`).
* **Гости и статистика (`#guests-section`)** — счётчики («Всего ответов», «Придут», «Не смогут», «Всего персон»), поиск, фильтры, таблица гостей с WhatsApp и удалением записей.
* **Экспорт и Бэкап** — выгрузка в CSV (`/api/export-csv`), скачивание/восстановление полной резервной копии `.json` (`/api/backup`, `/api/restore`) и авто-копия в `localStorage`.
* **Telegram** — тест уведомлений и активация webhook-бота (`/api/test-telegram`, `/api/setup-webhook`).

---

### 3. Сервер и база данных ([`server.py`](file:///Users/viktorkhristenko/.gemini/antigravity/scratch/wedding-invitation/server.py), [`config.json`](file:///Users/viktorkhristenko/.gemini/antigravity/scratch/wedding-invitation/config.json), `wedding.db`)
* **`server.py`** — единый Python-сервер (`http.server` + `sqlite3`):
  * Отдаёт статику с заголовками `Cache-Control: no-cache, no-store, must-revalidate`.
  * **Гостевые маршруты:** `GET /`, `GET /api/config`, `POST /api/rsvp`.
  * **Админские маршруты:** `GET /admin`, `GET /api/rsvps`, `DELETE /api/rsvps`, `DELETE /api/rsvps/clear`, `GET /api/export-csv`, `POST /api/settings`, `POST /api/upload-photo`, `GET /api/backup`, `POST /api/restore`, `POST /api/test-telegram`, `GET /api/setup-webhook`, `GET /api/sync-github`.
  * **Telegram-бот (`POST /api/telegram-webhook`):** мгновенно присылает анкеты новых гостей и отвечает только авторизованным Chat ID на кнопки меню (`📊 Сколько придет`, `📋 Список гостей`, `💔 Кто не сможет`, `💌 Поздравления`).
* **`config.json`** — хранит имена молодожёнов, дату, ссылки, список фотографий, пароль админки, токен Telegram-бота и разрешённые Chat ID.
* **`wedding.db`** — SQLite-база с таблицей `rsvps`.

---

## 🌐 Деплой и сохранность данных
* Хостинг: **Render** (`Procfile` → `web: python3 server.py`).
* **ВАЖНО перед любым `git push`:** сначала выполнить `python3 sync_live.py`, чтобы забрать с живого сервера актуальные настройки (`config.json`), загруженные фото (`public/uploads/`) и гостей (`wedding.db`) через `/api/backup`, и только потом коммитить и пушить. Так правки владельцев на живом сайте никогда не потеряются при пересборке Render.
* При обновлении статики (`public/*`) можно синхронизировать файлы на живом сервере через `GET /api/sync-github`.
* В админке доступна кнопка **«Бэкап»** (`/api/backup`, `/api/restore`) + авто-копия в `localStorage` браузера при каждом сохранении.
