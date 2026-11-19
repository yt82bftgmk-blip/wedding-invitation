# 💍 Шпаргалка по проекту (Назар & София)

Готовый контекст для копирования в следующий чат и быстрой навигации по проекту.

- **Папка проекта:** `/Users/viktorkhristenko/.gemini/antigravity/scratch/wedding-invitation`
- **Живой сайт (Render):** `https://nazar-sofia-wedding.onrender.com`
- **Админ-панель:** `https://nazar-sofia-wedding.onrender.com/admin`

---

## 📁 Структура и основные файлы

- **`public/index.html`, `public/app.js`, `public/style.css`** — двуязычный гостевой сайт (RU / HE RTL), сейчас подключены `style.css?v=12` и `app.js?v=24`:
  - Случайный музыкальный плеер из 5 мелодий (`public/music/track_1.mp3`–`track_5.mp3`, включая обновлённые `track_2.mp3` — *Jeon Su Yeon — Breeze* и `track_5.mp3` — *Jermaine Gordon — Better Together*).
  - **Адаптация под телефоны и плавные анимации при скролле:**
    - Зафиксирован `font-size: 16px` и `text-size-adjust: 100%` на `html`, чтобы на телефонах с увеличенным системным шрифтом вёрстка не разъезжалась.
    - На мобильных (`<= 768px`) отключены тяжёлые `backdrop-blur-*` и `blur-3xl`, чтобы не падала вкладка при приближении (pinch-to-zoom).
    - Плавное появление элементов при скролле через `IntersectionObserver` (`observeRevealElements`): `.reveal-on-scroll`, `.reveal-left`, `.reveal-right` (чередование глав истории), `.reveal-photo` (каскадное появление фото и альбома), `.reveal-scale` (карточки места и Bit), `.reveal-icon`.
    - Единый тёплый перелив в гамме шампань / слоновая кость / перламутр / розовое золото (`gradient-drift`: `.bg-iridescent-hero`, `.bg-iridescent-ivory`, `.bg-iridescent-blush`, `.iridescent-title`, `.iridescent-card`, `.countdown-tile`, `.bit-card-iridescent`, `.gold-divider`).
  - Первый экран (`#hero`), блок «Наша история» (3 главы с фото `#story-img-0..2`) и «Фотоальбом любви» (`#gallery-grid`) со всплывающими мини-историями (`#photo-story-modal` — адаптивная прокручиваемая карточка `max-h-[88dvh]` с кнопкой закрытия в шапке и внизу, а также закрытием по клику на фон).
  - Тайминг дня, карточка зала (Waze / Google Maps), блок подарка **Bit** (`bit_link`, `bit_name`, `bit_phone`, `bit_reason_ru/he`).
  - **Отдельная страница подтверждения присутствия (`#rsvp` -> `#rsvp-page-overlay`):**
    - В блоке `#rsvp` отображается заметная интерактивная кнопка **«Подтверждение присутствия»** (`#rsvp-toggle-btn`, `openRsvpSection()`) с бликом и подсказкой (`#rsvp-tap-hint`).
    - При нажатии открывается отдельная полноэкранная украшенная страница `#rsvp-page-overlay` (`.rsvp-page-bg`, точечный узор, цветочные SVG-уголки, кнопка «Назад к приглашению» / `closeRsvpSection()`).
    - Внутри формы (`#rsvp-form`): обязательные `Имя *`, `Фамилия *`, `Телефон *`, выбор присутствия и раздел **«Количество человек»** (без бейджа `Итого: 1`):
      - **Блок «Семья»** (`המשפחה`, `(по желанию)`):
        - **Дети** *(только дети до 12 лет)* (`#children_count`, подпись «Имя»).
        - **Муж / Жена и родные** *(подростки 12+ и взрослые)* `(по желанию)` (`#family_adults_count`, подпись «Имя и фамилия»).
      - **Блок «Дополнительные гости»** `(по желанию)` (`#plus_one_count`, подпись «Имя и фамилия»).
    - **Валидация и запрет повторов имён:** для всех гостей, кроме детей, обязательно полное **Имя и фамилия** (2 слова), запрещены повторы внутри анкеты и по всей базе гостей (`validate_adult_names_and_duplicates`).
    - **Защита от дубликатов и редактирование:** карточка `#rsvp-already-registered` с кнопкой **«Редактировать мою запись»** (`POST /api/rsvp/update`).
- **`public/admin.html`** — закрытая админ-панель (`/admin`):
  - Inline-редактирование текстов (RU / HE RTL), Bit, всех фото (hero, 3 фото истории, фотоальбом с историями).
  - Конструктор доп. пунктов анкеты (`rsvp_custom_fields`) с явной кнопкой **«Удалить»** у каждого пункта.
  - Статистика, фильтры, поиск по именам, таблица гостей, экспорт CSV, «Бэкап» (`/api/backup`, `/api/restore`) и Telegram-настройки.
- **`server.py`** — Python-сервер (`http.server` + `sqlite3`), API (`/api/config`, `/api/rsvp`, `/api/rsvp/check`, `/api/rsvp/update`, `/api/rsvps`, `/api/settings`, `/api/upload-photo`, `/api/backup`, `/api/restore`, `/api/export-csv`, `/api/sync-github`) и Telegram-бот.
- **`config.json`** — настройки свадьбы, тексты, Bit (`bit_phone`: `0586331035`), `rsvp_custom_fields`, фото, пароль админа и токены Telegram.
- **`wedding.db`** — SQLite-база с таблицей `rsvps`.
- **`sync_live.py`** — точная 1:1 выгрузка живых данных с Render (`/api/backup`) в локальный репозиторий (включая удаления и очистку списка гостей).

---

## ⚠️ Важные правила работы

1. Сохраняй поддержку двух языков (**русский** и **иврит RTL**).
2. Не добавляй ссылку на `/admin` в публичный футер гостевого сайта.
3. **ПЕРЕД любым `git push`** обязательно запускай `python3 sync_live.py` и коммить обновлённые `config.json` / `wedding.db` / `public/uploads`, если на живом сервере были правки (включая удаления гостей и изменения текстов).
4. После изменений в `public/` обновляй версию `?v=...` в `public/index.html` (сейчас `style.css?v=12`, `app.js?v=24`) и пушь в GitHub.

МОЯ СЛЕД ЗАДАЧА: 