# 💍 Шпаргалка по проекту (Назар & София)

Готовый контекст для копирования в следующий чат и быстрой навигации по проекту.

- **Папка проекта:** `/Users/viktorkhristenko/.gemini/antigravity/scratch/wedding-invitation`
- **Живой сайт (Render):** `https://nazar-sofia-wedding.onrender.com`
- **Админ-панель:** `https://nazar-sofia-wedding.onrender.com/admin`

---

## 📁 Структура и основные файлы

- **`public/index.html`, `public/app.js`, `public/style.css`** — двуязычный гостевой сайт (RU / HE RTL), сейчас подключены `style.css?v=7` и `app.js?v=21`:
  - Случайный музыкальный плеер из 5 мелодий (`public/music/track_1.mp3`–`track_5.mp3`, включая обновлённые `track_2.mp3` — *Jeon Su Yeon — Breeze* и `track_5.mp3` — *Jermaine Gordon — Better Together*).
  - **Мобильные анимации (`@media (max-width: 768px)`) и переливающаяся палитра:**
    - Только на телефонах при открытии плавно выезжают элементы первого экрана (`.hero-enter-1`–`5`, `.music-pill-enter`), а при скролле через `IntersectionObserver` (`initScrollAnimations`) появляются карточки, тексты и иконки (`.reveal-on-scroll`, `.reveal-icon`).
    - Единый тёплый перелив в гамме шампань / слоновая кость / перламутр / розовое золото (`gradient-drift`: `.bg-iridescent-hero`, `.bg-iridescent-ivory`, `.bg-iridescent-blush`, `.iridescent-title`, `.iridescent-card`, `.countdown-tile`, `.bit-card-iridescent`, `.gold-divider`).
  - Первый экран (`#hero`), блок «Наша история» (3 главы с фото `#story-img-0..2`) и «Фотоальбом любви» (`#gallery-grid`) со всплывающими мини-историями (`#photo-story-modal`).
  - Тайминг дня, карточка зала (Waze / Google Maps), блок подарка **Bit** (`bit_link`, `bit_name`, `bit_phone`, `bit_reason_ru/he`).
  - **Форма RSVP (`#rsvp-form`) с защитой от дубликатов и редактированием записи:**
    - Обязательные `Имя *` (`#first_name`), `Фамилия *` (`#last_name`), `Телефон *` (`#phone`), выбор присутствия и раздел **«Количество человек»** (`#guest-count-container`) с живым счётчиком (`#rsvp-total-guests-badge`, `1 + дети + муж/жена и родные + доп. гости`):
      - **Блок «Семья»** (`המשפחה`):
        - **Дети** *(только дети до 12 лет)* (`#children_count`, подпись «Имя», поля `#children_inputs_container` с подсказкой `Имя ребёнка`, без нумерации `1, 2, 3`).
        - **Муж / Жена и родные** *(подростки 12+ и взрослые)* (`#family_adults_count`, подпись «Имя и фамилия», поля `#family_adults_inputs_container` с подсказкой `Имя и фамилия`).
      - **Блок «Дополнительные гости»** (`אורחים נוספים`):
        - (`#plus_one_count`, подпись «Имя и фамилия», поля `#plus_one_inputs_container` с подсказкой `Имя и фамилия`).
      - Данные сохраняются в `custom_answers` (`children_names`, `family_adults`, `companion_name`) вместе с кастомными полями `rsvp_custom_fields`.
    - **Валидация и запрет повторов имён:**
      - Для всех гостей, кроме детей (**Муж / Жена и родные** и **Дополнительные гости**), обязательно полное **Имя и фамилия** (минимум 2 слова).
      - И на клиенте (`submitRSVP`), и на сервере (`validate_adult_names_and_duplicates`) запрещён повтор одного и того же сочетания *Имя + Фамилия* (внутри текущей анкеты и среди всех уже записанных гостей в базе `rsvps`). Ошибка выводится в `#rsvp-validation-error`.
    - **Защита от дубликатов и редактирование:**
      - При повторном заходе с того же браузера (`localStorage`: `wedding_rsvp_registered` + проверка через `POST /api/rsvp/check`) или при вводе уже существующего номера телефона / имени+фамилии система не создаёт дубликат, а показывает карточку `#rsvp-already-registered` («Вы уже в списке гостей! 💍» с номером телефона для связи из `bit_phone`) и кнопку **«Редактировать мою запись»** (`POST /api/rsvp/update`).
- **`public/admin.html`** — закрытая админ-панель (`/admin`), визуальная копия сайта:
  - Inline-редактирование всех текстов (RU / HE RTL) и настроек Bit (`bit_link`, `bit_name`, `bit_phone`, `bit_reason_ru/he`).
  - Редактирование **всех фотографий** на сайте: главного фото (`hero`), всех 3 фото в «Нашей истории» (`story-img-0..2`) и фотоальбома (добавление, замена, удаление, редактирование подписей и историй).
  - Превью обновлённой RSVP-анкеты, конструктор доп. пунктов (`rsvp_custom_fields`), статистика с разбивкой (`#stat-people-breakdown`: Осн / Дет / Доп, где `family_adults` учитывается в составе взрослых), фильтры, поиск по именам (включая `family_adults`), таблица гостей, экспорт CSV, кнопка «Бэкап» (`/api/backup`, `/api/restore`) и Telegram-настройки.
- **`server.py`** — Python-сервер (`http.server` + `sqlite3`):
  - Статика с `Cache-Control: no-cache, no-store, must-revalidate`.
  - API гостя и админки (`/api/config`, `/api/rsvp`, `/api/rsvp/check`, `/api/rsvp/update`, `/api/rsvps`, `/api/settings`, `/api/upload-photo`, `/api/backup`, `/api/restore`, `/api/export-csv`, `/api/sync-github`).
  - Нормализация телефонов (`+972`/`05X` и `+7`/`8`), нормализация имён, проверка полноты имени+фамилии и защита от дублей взрослых гостей across form & DB (`validate_adult_names_and_duplicates`).
  - Telegram-бот (`/api/telegram-webhook`) — уведомления о новых анкетах и обновлениях записей (`✏️ Гость обновил свою запись!`).
- **`config.json`** — настройки свадьбы, тексты (`wedding.texts`), Bit (`bit_phone`: `0586331035`), `rsvp_custom_fields`, фото (`photos.hero`, `photos.story`, `photos.gallery`, `photos.stories`), пароль админа и токены Telegram.
- **`wedding.db`** — SQLite-база с таблицей `rsvps` (включая `custom_answers`, `phone_normalized`, `full_name_normalized`).
- **`sync_live.py`** — скрипт выгрузки живых данных с Render (`/api/backup`) в локальный репозиторий.
- **`public/images/`, `public/music/`, `public/uploads/`** — статические картинки, 5 аудио-треков и загруженные фото.

---

## ⚠️ Важные правила работы

1. Сохраняй поддержку двух языков (**русский** и **иврит RTL**).
2. Не добавляй ссылку на `/admin` в публичный футер гостевого сайта.
3. **ПЕРЕД любым `git push`** обязательно запускай `python3 sync_live.py` (и коммить обновлённые `config.json`/`public/uploads`/`wedding.db`, если на живом сервере были правки), чтобы не затереть правки владельцев и фото/гостей на Render.
4. После изменений в `public/` обновляй версию `?v=...` в `public/index.html` (сейчас `style.css?v=7`, `app.js?v=21`), пушь в GitHub и при необходимости синхронизируй живой сервер через `GET /api/sync-github`.

МОЯ СЛЕД ЗАДАЧА: 
