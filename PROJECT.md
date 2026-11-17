# 💍 Шпаргалка по проекту (Назар & София)

Готовый контекст для копирования в следующий чат и быстрой навигации по проекту.

- **Папка проекта:** `/Users/viktorkhristenko/.gemini/antigravity/scratch/wedding-invitation`
- **Живой сайт (Render):** `https://nazar-sofia-wedding.onrender.com`
- **Админ-панель:** `https://nazar-sofia-wedding.onrender.com/admin`

---

## 📁 Основные файлы

- **`public/index.html`, `public/app.js`, `public/style.css`** — двуязычный гостевой сайт (RU / HE RTL), сейчас подключены `style.css?v=5` и `app.js?v=10`:
  - Случайный музыкальный плеер из 5 спокойных романтических мелодий (`public/music/track_1.mp3`–`track_5.mp3`).
  - Первый экран (`#hero`), блок «Наша история» (3 главы с фото `#story-img-0..2`) и «Фотоальбом любви» (`#gallery-grid`) со всплывающими мини-историями (`#photo-story-modal`).
  - Тайминг дня, карточка зала (Waze / Google Maps), блок подарка **Bit** (ссылка `bit_link` + причина перевода `bit_reason_ru/he`).
  - **Форма RSVP (`#rsvp-form`):** обязательные `Имя *` (`#first_name`), `Фамилия *` (`#last_name`), `Телефон *` (`#phone`), выбор присутствия, а в разделе «Количество человек» — два необязательных поля: **Дети** (`#children_names`) и **Зову кого-то ещё** (`#plus_one_name`). Количество гостей (`guests_count`) считается автоматически (`1 + дети + доп. гости`, либо `0` при отказе), а имена сохраняются в `custom_answers`.
- **`public/admin.html`** — закрытая админ-панель (`/admin`), визуальная копия сайта:
  - Inline-редактирование всех текстов (RU / HE RTL) и настроек Bit (`bit_link`, `bit_name`, `bit_phone`, `bit_reason_ru/he`).
  - Редактирование **всех фотографий** на сайте: главного фото (`hero`), всех 3 фото в «Нашей истории» (`story-img-0..2`, загрузка или ссылка) и фотоальбома (добавление, замена в карточке или модальном окне, удаление, редактирование подписей и историй).
  - Доп. пункты анкеты (`rsvp_custom_fields`), список гостей и статистика (`#guests-section`), экспорт CSV, кнопка «Бэкап» (`/api/backup`, `/api/restore`) и Telegram-настройки.
- **`server.py`** — Python-сервер (`http.server` + `sqlite3`):
  - Статика с `Cache-Control: no-cache, no-store, must-revalidate`.
  - API гостя и админки (`/api/config`, `/api/rsvp`, `/api/rsvps`, `/api/settings`, `/api/upload-photo`, `/api/backup`, `/api/restore`, `/api/export-csv`, `/api/sync-github`).
  - Telegram-бот (`/api/telegram-webhook`) — уведомления о новых анкетах (включая `custom_answers`) и команды статистики.
- **`config.json`** — настройки свадьбы, тексты (`wedding.texts`), Bit, `rsvp_custom_fields`, фото (`photos.hero`, `photos.story`, `photos.gallery`, `photos.stories`), пароль админа и токены Telegram.
- **`wedding.db`** — SQLite-база с таблицей `rsvps` (включая колонку `custom_answers`).
- **`sync_live.py`** — скрипт выгрузки живых данных с Render (`/api/backup`) в локальный репозиторий.

---

## ⚠️ Важные правила работы

1. Сохраняй поддержку двух языков (**русский** и **иврит RTL**).
2. Не добавляй ссылку на `/admin` в публичный футер гостевого сайта.
3. **ПЕРЕД любым `git push`** обязательно запускай `python3 sync_live.py`, чтобы не затереть правки владельцев и фото/гостей на живом сервере.
4. После изменений в `public/` обновляй версию `?v=...` в `public/index.html` (сейчас `style.css?v=5`, `app.js?v=9`), пушь в GitHub и при необходимости синхронизируй живой сервер через `GET /api/sync-github`.
