// Bilingual dictionary: Russian (RU) & Hebrew (HE)
const translations = {
  ru: {
    hero_badge: "Приглашение на свадьбу",
    names_title: "Назар & София",
    hero_subtitle: "Мы приглашаем вас разделить радость самого счастливого дня нашей жизни!",
    wedding_day_label: "День нашей свадьбы",
    wedding_date: "15 Сентября 2027",
    timer_title: "До торжества осталось:",
    timer_days: "Дней",
    timer_hours: "Часов",
    timer_minutes: "Минут",
    timer_seconds: "Секунд",
    btn_rsvp_hero: "Подтвердить присутствие",

    story_tag: "Как всё начиналось",
    story_title: "Наша история",
    story_subtitle: "Каждый шаг приближал нас к этому счастливому дню",
    story_event1_date: "2023 год",
    story_event1_title: "Первая встреча",
    story_event1_text: "Случайный разговор, который перевернул наши жизни. С первого взгляда стало ясно: впереди нас ждёт нечто невероятное.",
    story_event2_date: "2024 год",
    story_event2_title: "Первое путешествие",
    story_event2_text: "Незабываемые закаты, тысячи фотографий, смех и понимание того, что мы идеальная команда в любом уголке мира.",
    story_event3_date: "2025 год",
    story_event3_title: "Она сказала «Да!»",
    story_event3_text: "Самый романтический вечер, трепетное биение сердец и самое главное слово, открывшее новую главу нашей семьи.",

    gallery_tag: "Наши моменты",
    gallery_title: "Фотогалерея",
    gallery_subtitle: "Тёплые кадры наших счастливых дней",

    schedule_tag: "Торжественный день",
    schedule_title: "Программа свадьбы",
    sched_1_time: "18:30",
    sched_1_title: "Сбор гостей & Фуршет",
    sched_1_desc: "Приветственные напитки, закуски и тёплые встречи",
    sched_2_time: "19:30",
    sched_2_title: "Хупа / Церемония",
    sched_2_desc: "Торжественная церемония бракосочетания",
    sched_3_time: "20:15",
    sched_3_title: "Праздничный ужин",
    sched_3_desc: "Банкет, изысканные блюда и тосты за молодых",
    sched_4_time: "21:30",
    sched_4_title: "Танцы и вечеринка",
    sched_4_desc: "Зажигательная музыка, свадебный торт и веселье",

    location_tag: "Где нас найти",
    location_title: "Место проведения",
    venue_title: "Зал торжеств «Royal Garden»",
    venue_city: "Тель-Авив / Центр Израиля",
    btn_waze: "Открыть в Waze",
    btn_maps: "Открыть в Google Maps",

    gift_tag: "Подарки",
    gift_title: "Свадебный подарок",
    gift_description: "Ваше присутствие и тёплые улыбки — самый ценный подарок для нас! Но если вы хотите сделать памятный вклад в нашу молодую семью, вы можете легко воспользоваться израильским приложением Bit.",
    bit_recipient: "Получатель",
    bit_reason_label: "Назначение:",
    bit_copy_btn: "Скопировать номер",
    bit_copied: "Номер скопирован! ✓",
    bit_open_app: "Открыть Bit",

    rsvp_tag: "Будем счастливы вас видеть",
    rsvp_title: "Подтверждение присутствия",
    rsvp_tap_hint: "Нажмите, чтобы заполнить анкету",
    rsvp_tap_hint_open: "Нажмите, чтобы свернуть анкету",
    btn_back_to_invite: "Назад к приглашению",
    rsvp_desc: "Пожалуйста, ответьте на приглашение, чтобы мы могли позаботиться о вашем комфорте!",
    field_first_name: "Имя *",
    field_last_name: "Фамилия *",
    field_phone: "Номер телефона *",
    field_attendance: "Сможете ли вы прийти? *",
    choice_yes: "Я обязательно приду!",
    choice_no: "К сожалению, не смогу",
    field_guests_count: "Количество человек",
    field_guest_full_name: "Имя и фамилия *",
    family_section_title: "Семья",
    field_children_names: "Дети",
    children_age_note: "(только дети до 12 лет)",
    field_children_count: "Имя",
    field_family_adults: "Муж / Жена и родные",
    family_adults_note: "(подростки 12+ и взрослые)",
    field_family_adults_count: "Имя и фамилия",
    field_plus_one: "Дополнительные гости",
    field_plus_one_count: "Имя и фамилия",
    count_none: "Нет (0)",
    child_placeholder: "Имя ребёнка",
    family_adult_placeholder: "Имя и фамилия",
    plus_one_placeholder: "Имя и фамилия",
    err_adult_full_name_required: "Укажите полное имя и фамилию (2 слова) для всех гостей, кроме детей.",
    err_duplicate_guest_in_form: "Человек «{name}» уже указан — этот человек уже записан!",
    err_duplicate_guest_in_db: "Этот человек («{name}») уже записан в списке гостей!",
    total_guests_prefix: "Итого:",
    guest_opt_1: "1 человек (только я)",
    guest_opt_2: "2 человека (+1 гость)",
    guest_opt_3: "3 человека",
    guest_opt_4: "4+ человека (с семьёй)",
    field_message: "Тёплые слова молодожёнам (мини-поздравление)",
    optional_tag: "(по желанию)",
    btn_submit_rsvp: "Отправить подтверждение",
    btn_submitting: "Отправка...",

    success_title: "Спасибо за ваш ответ!",
    success_desc: "Ваше подтверждение и поздравление успешно отправлены Назару и Софии! До встречи на празднике любви!",
    btn_send_another: "Заполнить ещё один ответ",

    already_reg_title: "Вы уже в списке гостей! 💍",
    already_reg_reason_phone: "Ваша запись уже существует — этот номер телефона уже зарегистрирован, мы с радостью ждём вас!",
    already_reg_reason_name: "Ваша запись уже существует — гость с таким именем и фамилией уже зарегистрирован, мы с радостью ждём вас!",
    already_reg_note_prefix: "Повторная регистрация не нужна. Если вы хотите отменить или изменить запись, пожалуйста, напишите нам по номеру:",
    btn_back_to_form: "Записать другого гостя",
    btn_edit_existing: "Редактировать мою запись",
    btn_save_changes: "Сохранить изменения",
    btn_load_and_edit: "Редактировать запись →",
    edit_mode_banner: "Режим редактирования записи — измените количество гостей или данные и сохраните.",
    btn_cancel_edit: "Отмена",
    updated_title: "Изменения сохранены! 💍",
    updated_desc: "Ваша запись успешно обновлена. Назар и София уже получили обновлённую информацию!",
    already_reg_status_attending: "Приду",
    already_reg_status_declined: "Не смогу прийти",
    already_reg_guests: "Гостей:",
    inline_dup_phone: "Этот номер телефона уже зарегистрирован в списке гостей.",
    inline_dup_name: "Гость с таким именем и фамилией уже зарегистрирован.",

    footer_love: "С любовью и благодарностью к каждому гостю ❤️"
  },

  he: {
    hero_badge: "הזמנה לחתונה",
    names_title: "נזר וסופיה",
    hero_subtitle: "אנו שמחים ונרגשים להזמינכם לחגוג עמנו את יום נישואינו!",
    wedding_day_label: "יום החתונה שלנו",
    wedding_date: "15 בספטמבר 2027",
    timer_title: "הספירה לאחור החלה:",
    timer_days: "ימים",
    timer_hours: "שעות",
    timer_minutes: "דקות",
    timer_seconds: "שניות",
    btn_rsvp_hero: "אישור הגעה",

    story_tag: "איך הכל התחיל",
    story_title: "הסיפור שלנו",
    story_subtitle: "כל צעד קירב אותנו ליום המאושר הזה",
    story_event1_date: "שנת 2023",
    story_event1_title: "המפגש הראשון",
    story_event1_text: "שיחה מקרית אחת ששינתה את חיינו לחלוטין. מהמבט הראשון היה ברור שזהו תחילתו של סיפור אהבה מיוחד.",
    story_event2_date: "שנת 2024",
    story_event2_title: "הטיול הראשון ביחד",
    story_event2_text: "שקיעות בלתי נשכחות, אינספור תמונות וצחוק, וההבנה שאנחנו הצוות המושלם בכל מקום בעולם.",
    story_event3_date: "שנת 2025",
    story_event3_title: "היא אמרה כן!",
    story_event3_text: "ערב רומנטי ומרגש במיוחד, פעימות לב מואצות והמילה המיוחלת שפתחה את הפרק המרגש ביותר בחיינו.",

    gallery_tag: "רגעים שלנו",
    gallery_title: "גלריית תמונות",
    gallery_subtitle: "רגעים חמים מהימים המאושרים שלנו",

    schedule_tag: "היום המאושר",
    schedule_title: "לוח זמנים לחתונה",
    sched_1_time: "18:30",
    sched_1_title: "קבלת פנים",
    sched_1_desc: "מינגלינג, משקאות ונשנושים מפנקים",
    sched_2_time: "19:30",
    sched_2_title: "חופה וקידושין",
    sched_2_desc: "הטקס המרגש מתחת לחופה",
    sched_3_time: "20:15",
    sched_3_title: "סעודת חתונה",
    sched_3_desc: "ארוחת ערב חגיגית, מנות שף והרמת כוסית",
    sched_4_time: "21:30",
    sched_4_title: "מסיבה וריקודים",
    sched_4_desc: "מוזיקה מעולה, עוגת חתונה וריקודים עד השעות הקטנות",

    location_tag: "איפה נפגשים",
    location_title: "מיקום האירוע",
    venue_title: "אולם אירועים «Royal Garden»",
    venue_city: "תל אביב / מרכז",
    btn_waze: "ניווט ב-Waze",
    btn_maps: "פתיחה ב-Google Maps",

    gift_tag: "מתנות",
    gift_title: "מתנה לחתונה",
    gift_description: "הנוכחות והחיוך שלכם הם המתנה היקרה ביותר עבורנו! אך אם ברצונכם להעניק לנו מתנה כספית, ניתן לעשות זאת בקלות באמצעות אפליקציית Bit.",
    bit_recipient: "שם המוטב",
    bit_reason_label: "סיבה:",
    bit_copy_btn: "העתק מספר טלפון",
    bit_copied: "המספר הועתק! ✓",
    bit_open_app: "פתח ב-Bit",

    rsvp_tag: "נשמח מאוד לראותכם",
    rsvp_title: "אישור הגעה",
    rsvp_tap_hint: "לחצו למילוי הטופס",
    rsvp_tap_hint_open: "לחצו לסגירת הטופס",
    btn_back_to_invite: "חזרה להזמנה",
    rsvp_desc: "אנא אשרו את הגעתכם כדי שנוכל להיערך בצורה הטובה ביותר עבורכם!",
    field_first_name: "שם פרטי *",
    field_last_name: "שם משפחה *",
    field_phone: "מספר טלפון *",
    field_attendance: "האם תגיעו לחגוג עמנו? *",
    choice_yes: "מגיע/ה בשמחה!",
    choice_no: "לצערי לא אוכל להגיע",
    field_guests_count: "מספר אורחים",
    field_guest_full_name: "שם פרטי ושם משפחה *",
    family_section_title: "המשפחה",
    field_children_names: "ילדים",
    children_age_note: "(ילדים עד גיל 12 בלבד)",
    field_children_count: "שם",
    field_family_adults: "בן / בת זוג ומשפחה",
    family_adults_note: "(נוער 12+ ומבוגרים)",
    field_family_adults_count: "שם פרטי ומשפחה",
    field_plus_one: "אורחים נוספים",
    field_plus_one_count: "שם פרטי ומשפחה",
    count_none: "ללא (0)",
    child_placeholder: "שם הילד/ה",
    family_adult_placeholder: "שם פרטי ומשפחה",
    plus_one_placeholder: "שם פרטי ומשפחה",
    err_adult_full_name_required: "יש להזין שם פרטי ושם משפחה מלאים (2 מילים) לכל האורחים (למעט ילדים).",
    err_duplicate_guest_in_form: "האורח/ת «{name}» כבר מופיע/ה ברשימה — לא ניתן לרשום פעמיים!",
    err_duplicate_guest_in_db: "אורח/ת זה («{name}») כבר רשום/ה ברשימת האורחים!",
    total_guests_prefix: "סה״כ:",
    guest_opt_1: "אורח 1 (רק אני)",
    guest_opt_2: "2 אורחים (אני ובן/בת זוג)",
    guest_opt_3: "3 אורחים",
    guest_opt_4: "4+ אורחים (עם המשפחה)",
    field_message: "ברכה ואיחולים לזוג הצעיר",
    optional_tag: "(אופציונלי)",
    btn_submit_rsvp: "שליחת אישור הגעה",
    btn_submitting: "שולח...",

    success_title: "תודה רבה על אישורכם!",
    success_desc: "אישור ההגעה והברכה שלכם התקבלו בהצלחה אצל נזר וסופיה! מצפים לחגוג יחד!",
    btn_send_another: "מילוי אישור נוסף",

    already_reg_title: "אתם כבר ברשימת האורחים! 💍",
    already_reg_reason_phone: "הרישום שלכם כבר קיים — מספר הטלפון הזה כבר רשום במערכת, נשמח לחגוג יחד!",
    already_reg_reason_name: "הרישום שלכם כבר קיים — אורח עם שם פרטי ומשפחה זה כבר רשום, נשמח לחגוג יחד!",
    already_reg_note_prefix: "אין צורך להירשם שוב. אם ברצונכם לבטל או לעדכן את הרישום, אנא כתבו לנו למספר:",
    btn_back_to_form: "רישום אורח נוסף",
    btn_edit_existing: "עריכת הרישום שלי",
    btn_save_changes: "שמירת שינויים",
    btn_load_and_edit: "עריכת הרישום ←",
    edit_mode_banner: "מצב עריכת רישום — ניתן לשנות את מספר האורחים או הפרטים ולשמור.",
    btn_cancel_edit: "ביטול",
    updated_title: "השינויים נשמרו! 💍",
    updated_desc: "הרישום שלכם עודכן בהצלחה. נזר וסופיה כבר קיבלו את הפרטים המעודכנים!",
    already_reg_status_attending: "מגיע/ה",
    already_reg_status_declined: "לא אוכל להגיע",
    already_reg_guests: "אורחים:",
    inline_dup_phone: "מספר הטלפון הזה כבר רשום ברשימת האורחים.",
    inline_dup_name: "אורח עם שם פרטי ומשפחה זה כבר רשום.",

    footer_love: "באהבה והערכה רבה לכל אחד ואחת מכם ❤️"
  }
};

let currentLang = 'ru';
let weddingConfig = null;
let weddingPhotos = null;
let weddingTargetDate = new Date("2027-09-15T18:00:00").getTime();
let editingRsvpId = null;
let pendingExistingRsvp = null;

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    lucide.createIcons();
  }
  fetchConfig().then(() => restoreSavedRegistrationState());
  startCountdown();
  initMusicAutoPlay();
  initRsvpDuplicateCheck();
  initScrollAnimations();
  if (window.location.hash === "#rsvp") {
    openRsvpSection();
  }
});

const MUSIC_TRACKS = [
  "/music/track_1.mp3",
  "/music/track_2.mp3",
  "/music/track_3.mp3",
  "/music/track_4.mp3",
  "/music/track_5.mp3"
];
let currentTrackIndex = -1;
let isMusicPlaying = false;
let userPausedMusic = false;

function pickNextRandomTrack(audio) {
  let prev = currentTrackIndex;
  if (prev === -1) {
    try {
      const saved = parseInt(localStorage.getItem("wedding_last_track"), 10);
      if (!isNaN(saved)) prev = saved;
    } catch (e) {}
  }
  const candidates = MUSIC_TRACKS.map((_, i) => i).filter(i => i !== prev);
  const nextIdx = candidates[Math.floor(Math.random() * candidates.length)] ?? 0;
  currentTrackIndex = nextIdx;
  try {
    localStorage.setItem("wedding_last_track", String(nextIdx));
  } catch (e) {}
  if (audio) {
    audio.src = MUSIC_TRACKS[nextIdx];
  }
}

function toggleMusic() {
  const audio = document.getElementById("wedding-audio");
  if (!audio) return;

  if (isMusicPlaying || !audio.paused) {
    audio.pause();
    isMusicPlaying = false;
    userPausedMusic = true;
    updateMusicUI(false);
  } else {
    userPausedMusic = false;
    audio.play().then(() => {
      isMusicPlaying = true;
      updateMusicUI(true);
    }).catch(err => {
      console.log("Audio play error:", err);
    });
  }
}

function updateMusicUI(playing) {
  const vinyl = document.getElementById("vinyl-icon");
  const eq = document.getElementById("music-eq");
  const text = document.getElementById("music-status-text");
  const isHe = (currentLang === 'he');

  if (playing) {
    if (vinyl) vinyl.classList.add("animate-spin-slow");
    if (eq) { eq.classList.remove("hidden"); eq.classList.add("flex"); }
    if (text) text.textContent = isHe ? "עצור מוזיקה ⏸" : "Остановить музыку ⏸";
  } else {
    if (vinyl) vinyl.classList.remove("animate-spin-slow");
    if (eq) { eq.classList.add("hidden"); eq.classList.remove("flex"); }
    if (text) text.textContent = isHe ? "נגן מוזיקה ▶️" : "Включить музыку ▶️";
  }
}

function initMusicAutoPlay() {
  const audio = document.getElementById("wedding-audio");
  if (!audio) return;
  audio.volume = 0.75;

  pickNextRandomTrack(audio);
  audio.addEventListener("ended", () => {
    pickNextRandomTrack(audio);
    if (!userPausedMusic) {
      audio.play().catch(() => {});
    }
  });

  const unlockEvents = ['click', 'touchstart', 'touchend', 'pointerdown', 'pointerup', 'keydown'];

  const startOnInteraction = (e) => {
    if (userPausedMusic || isMusicPlaying) return;
    // Ignore clicks on the music toggle button itself (toggleMusic handles it)
    if (e && e.target && e.target.closest && e.target.closest('#btn-toggle-music')) return;

    audio.play().then(() => {
      isMusicPlaying = true;
      updateMusicUI(true);
      unlockEvents.forEach(ev => {
        document.removeEventListener(ev, startOnInteraction, true);
        window.removeEventListener(ev, startOnInteraction, true);
      });
    }).catch(() => {
      // Keep listeners active until a valid user gesture unlocks audio
    });
  };

  // Try immediate autoplay right away
  audio.play().then(() => {
    isMusicPlaying = true;
    updateMusicUI(true);
  }).catch(() => {
    updateMusicUI(false);
    unlockEvents.forEach(ev => {
      document.addEventListener(ev, startOnInteraction, { capture: true, passive: true });
      window.addEventListener(ev, startOnInteraction, { capture: true, passive: true });
    });
  });
}

// Photo Stories Dataset & Lightbox Logic (8 full stories)
const photoStories = [
  {
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    title_ru: "В лучах заката",
    title_he: "בשקיעה יפהפייה",
    story_ru: "Незабываемый тёплый вечер, когда солнце медленно опускалось за горизонт. Мы говорили обо всём на свете и пообещали себе встречать вместе ещё тысячи таких закатов.",
    story_he: "ערב חמים ובלתי נשכח מול שקיעה עוצרת נשימה. שוחחנו על העתיד והבטחנו לעצמנו לפגוש עוד אינספור שקיעות יחד."
  },
  {
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
    title_ru: "Счастье вдвоём",
    title_he: "אושר ביחד",
    story_ru: "Кадры, которые не требуют лишних слов. Когда внутри тепло и спокойно, а впереди — целая совместная жизнь, полная любви, заботы и взаимной поддержки.",
    story_he: "רגעים שלא צריכים מילים. כשיש שלווה עמוקה בלב וידיעה ברורה שלפנינו חיים שלמים של אהבה וחלומות משותפים."
  },
  {
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80",
    title_ru: "Самый тёплый день",
    title_he: "היום הכי מאושר",
    story_ru: "День, когда весь мир вокруг словно замер. Мы просто держались за руки и знали, что впереди нас ждёт целая жизнь, полная путешествий и общих побед.",
    story_he: "יום שבו כל העולם שמסביב נעצר. פשוט החזקנו ידיים וידענו שמחכים לנו חיים שלמים של אהבה ומסעות משותפים."
  },
  {
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
    title_ru: "Навсегда вместе",
    title_he: "לתמיד ביחד",
    story_ru: "Самый искренний взгляд и обещание любить, беречь и поддерживать друг друга в любой ситуации. Это начало нашей красивой и крепкой семейной истории.",
    story_he: "מבט של אהבה כנה והבטחה לתמוך, לחבק ולצמוח יחד בכל שלב בדרך. ההתחלה של המשפחה החדשה שלנו."
  },
  {
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
    title_ru: "Улыбка и нежность",
    title_he: "חיוך ואהבה",
    story_ru: "Каждая улыбка рядом с тобой наполняет день светом. В таких простых и нежных мгновениях рождается настоящая, глубокая привязанность.",
    story_he: "כל חיוך לצידך ממלא את היום באור. ברגעים הפשוטים והעדינים האלה נולדת אהבה אמיתית ועמוקה."
  },
  {
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    title_ru: "Наше маленькое чудо",
    title_he: "הנס הקטן שלנו",
    story_ru: "Этот день стал для нас особенным воспоминанием. Мы гуляли, смеялись над каждой мелочью и именно тогда поняли, что наше маленькое чудо — это просто быть рядом друг с другом.",
    story_he: "היום הזה הפך לזיכרון מתוק ומיוחד עבורנו. טיילנו יחד, צחקנו מכל הלב והבנו שהנס הקטן שלנו הוא פשוט להיות אחד לצד השנייה."
  },
  {
    image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=800&q=80",
    title_ru: "Момент искренней радости",
    title_he: "רגע של שמחה",
    story_ru: "Когда сердца бьются в унисон, а вокруг — только радость, смех и предвкушение нашего большого праздника в кругу самых близких людей.",
    story_he: "כשהלבבות פועמים יחד, ומסביב רק שמחה, צחוק והתרגשות לקראת החגיגה הגדולה שלנו עם האנשים היקרים לנו מכל."
  },
  {
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80",
    title_ru: "Только ты и я",
    title_he: "רק אני ואת",
    story_ru: "Среди тысяч дорог и миллионов людей мы нашли друг друга. И теперь каждая новая страница нашей книги пишется нами вдвоём.",
    story_he: "בין אלפי דרכים ומיליוני אנשים מצאנו זה את זו. ומעכשיו, כל פרק חדש בספר החיים שלנו נכתב על ידי שנינו יחד."
  }
];

function openPhotoStory(index) {
  const story = photoStories[index] || photoStories[0];
  const isHe = (currentLang === 'he');

  const modal = document.getElementById("photo-story-modal");
  const card = document.getElementById("photo-story-card");
  const img = document.getElementById("modal-photo-img");
  const title = document.getElementById("modal-photo-title");
  const desc = document.getElementById("modal-photo-desc");
  const badge = document.getElementById("modal-badge-text");

  if (!modal || !card) return;

  img.src = story.image;
  title.textContent = isHe ? story.title_he : story.title_ru;
  desc.textContent = isHe ? story.story_he : story.story_ru;
  if (badge) badge.textContent = isHe ? "זיכרון של נזר וסופיה" : "Воспоминание Назара и Софии";

  modal.classList.remove("opacity-0", "pointer-events-none");
  modal.classList.add("opacity-100", "pointer-events-auto");
  card.classList.remove("scale-95");
  card.classList.add("scale-100");

  if (window.lucide) lucide.createIcons();
}

function closePhotoStory() {
  const modal = document.getElementById("photo-story-modal");
  const card = document.getElementById("photo-story-card");
  if (!modal || !card) return;

  modal.classList.remove("opacity-100", "pointer-events-auto");
  modal.classList.add("opacity-0", "pointer-events-none");
  card.classList.remove("scale-100");
  card.classList.add("scale-95");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePhotoStory();
});

async function fetchConfig() {
  try {
    const res = await fetch('/api/config');
    if (res.ok) {
      const data = await res.json();
      weddingConfig = data.wedding;
      weddingPhotos = data.photos;
      if (weddingConfig && weddingConfig.texts) {
        ['ru', 'he'].forEach(lang => {
          if (weddingConfig.texts[lang]) {
            Object.assign(translations[lang], weddingConfig.texts[lang]);
          }
        });
      }
      if (weddingPhotos && Array.isArray(weddingPhotos.stories)) {
        weddingPhotos.stories.forEach((customStory, idx) => {
          if (customStory && photoStories[idx]) {
            Object.assign(photoStories[idx], customStory);
          } else if (customStory) {
            photoStories[idx] = customStory;
          }
        });
      }
      if (weddingConfig && weddingConfig.date) {
        weddingTargetDate = new Date(weddingConfig.date).getTime();
        formatDisplayDate(weddingConfig.date);
      }
      setLanguage(currentLang);
      applyConfig();
      applyPhotos();
    }
  } catch (err) {
    console.log("Using default config:", err);
  }
}

function formatDisplayDate(dateStr) {
  try {
    const d = new Date(dateStr);
    const monthsRu = ["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];
    const monthsHe = ["בינואר","בפברואר","במרץ","באפריל","במאי","ביוני","ביולי","באוגוסט","בספטמבר","באוקטובר","בנובמבר","בדצמבר"];
    const day = d.getDate();
    const year = d.getFullYear();
    const isHe = currentLang === 'he';

    const dateDisplay = document.getElementById("wedding-display-date");
    if (dateDisplay) {
      dateDisplay.textContent = isHe 
        ? `${day} ${monthsHe[d.getMonth()]} ${year}`
        : `${day} ${monthsRu[d.getMonth()]} ${year}`;
    }
  } catch (e) {
    console.error(e);
  }
}

function applyPhotos() {
  if (!weddingPhotos) return;

  // Hero Photo
  if (weddingPhotos.hero) {
    const heroImg = document.getElementById("hero-img");
    if (heroImg) heroImg.src = weddingPhotos.hero;
  }

  // Story Chapter Photos
  if (Array.isArray(weddingPhotos.story)) {
    weddingPhotos.story.forEach((url, idx) => {
      if (url) {
        const storyImg = document.getElementById(`story-img-${idx}`);
        if (storyImg) storyImg.src = url;
      }
    });
  }

  // Gallery Photos
  if (weddingPhotos.gallery && weddingPhotos.gallery.length > 0) {
    const galleryGrid = document.getElementById("gallery-grid");
    if (galleryGrid) {
      galleryGrid.innerHTML = "";
      galleryPhotosToColumns(weddingPhotos.gallery, galleryGrid);
    }
  }
}

function galleryPhotosToColumns(photos, container) {
  const isHe = (currentLang === 'he');

  photos.forEach((src, idx) => {
    if (photoStories[idx]) {
      photoStories[idx].image = src;
    } else {
      photoStories.push({
        image: src,
        title_ru: "Наше маленькое чудо",
        title_he: "הנס הקטן שלנו",
        story_ru: "Особенное мгновение нашей любви, наполненное теплом, нежностью и искренней радостью.",
        story_he: "רגע מיוחד של אהבה, מלא בחום, רוך ושמחה כנה."
      });
    }

    const st = photoStories[idx];
    const cap = isHe ? `«${st.title_he}»` : `«${st.title_ru}»`;

    const card = document.createElement("div");
    card.className = "reveal-photo photo-story-card cursor-pointer group bg-white p-3 rounded-2xl border border-[#E8DFC9] shadow-md space-y-2 relative overflow-hidden active:scale-95 transition-transform";
    card.style.setProperty("--reveal-delay", `${(idx % 4) * 80}ms`);
    card.setAttribute("onclick", `openPhotoStory(${idx})`);

    card.innerHTML = `
      <div class="relative overflow-hidden rounded-xl">
        <img src="${src}" alt="${st.title_ru}" class="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105">
        <div class="absolute bottom-2 right-2 bg-stone-900/75 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <span>📖</span>
          <span>${isHe ? 'הסיפור שלנו' : 'Читать историю'}</span>
        </div>
      </div>
      <div class="font-handwritten text-center text-stone-700 text-lg">${cap}</div>
    `;
    container.appendChild(card);
  });

  observeRevealElements(container);
  if (window.lucide) lucide.createIcons();
}

function applyConfig() {
  if (!weddingConfig) return;
  const isHe = currentLang === 'he';

  const groom = isHe ? (weddingConfig.groom_he || "נזר") : (weddingConfig.groom_ru || weddingConfig.groom || "Назар");
  const bride = isHe ? (weddingConfig.bride_he || "סופיה") : (weddingConfig.bride_ru || weddingConfig.bride || "София");

  const namesEl = document.getElementById("names-title");
  if (namesEl) {
    namesEl.textContent = isHe ? `${bride} ו${groom}` : `${groom} & ${bride}`;
  }

  const venueTitle = document.getElementById("venue-title");
  if (venueTitle) {
    venueTitle.textContent = isHe ? (weddingConfig.venue_name_he || "אולם אירועים") : (weddingConfig.venue_name_ru || "Зал торжеств");
  }

  const venueCity = document.getElementById("venue-city");
  if (venueCity) {
    venueCity.textContent = isHe ? (weddingConfig.venue_city_he || "מרכז") : (weddingConfig.venue_city_ru || "Центр Израиля");
  }

  const bitName = document.getElementById("bit-name-display");
  if (bitName) {
    bitName.textContent = weddingConfig.bit_name || `${groom} & ${bride}`;
  }

  const bitPhone = document.getElementById("bit-phone-display");
  if (bitPhone && weddingConfig.bit_phone) {
    bitPhone.textContent = weddingConfig.bit_phone;
  }

  const bitReasonWrapper = document.getElementById("bit-reason-wrapper");
  const bitReasonEl = document.getElementById("bit-reason-display");
  const bitReason = isHe ? (weddingConfig.bit_reason_he || "") : (weddingConfig.bit_reason_ru || "");
  if (bitReasonWrapper && bitReasonEl) {
    if (bitReason.trim()) {
      bitReasonEl.textContent = bitReason.trim();
      bitReasonWrapper.classList.remove("hidden");
    } else {
      bitReasonWrapper.classList.add("hidden");
    }
  }

  const btnOpenBit = document.getElementById("btn-open-bit");
  if (btnOpenBit) {
    const bitLink = (weddingConfig.bit_link || "").trim();
    if (/^https?:\/\//i.test(bitLink)) {
      btnOpenBit.href = bitLink;
      btnOpenBit.target = "_blank";
      btnOpenBit.rel = "noopener noreferrer";
    } else {
      btnOpenBit.href = "bit://";
      btnOpenBit.removeAttribute("target");
      btnOpenBit.removeAttribute("rel");
    }
  }

  renderGuestOptions();
  renderCustomRsvpFields();

  const btnWaze = document.getElementById("btn-waze");
  if (btnWaze && weddingConfig.waze_link) {
    btnWaze.href = weddingConfig.waze_link;
  }

  const btnMaps = document.getElementById("btn-maps");
  if (btnMaps && weddingConfig.google_maps_link) {
    btnMaps.href = weddingConfig.google_maps_link;
  }

  if (weddingConfig.date) {
    formatDisplayDate(weddingConfig.date);
  }
}

function setLanguage(lang) {
  currentLang = lang;
  const html = document.documentElement;
  const dict = translations[lang];

  if (lang === 'he') {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'he');
    document.getElementById('btn-lang-he').className = "px-3 py-1 text-xs font-medium rounded-full transition-all bg-white text-stone-900 shadow-sm";
    document.getElementById('btn-lang-ru').className = "px-3 py-1 text-xs font-medium rounded-full transition-all text-stone-600 hover:text-stone-900";
  } else {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', 'ru');
    document.getElementById('btn-lang-ru').className = "px-3 py-1 text-xs font-medium rounded-full transition-all bg-white text-stone-900 shadow-sm";
    document.getElementById('btn-lang-he').className = "px-3 py-1 text-xs font-medium rounded-full transition-all text-stone-600 hover:text-stone-900";
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  updateRsvpTapHint();

  const fName = document.getElementById('first_name');
  const lName = document.getElementById('last_name');
  const msg = document.getElementById('message');
  if (lang === 'he') {
    if (fName) fName.placeholder = "דוד";
    if (lName) lName.placeholder = "לוי";
    if (msg) msg.placeholder = "נזר וסופיה היקרים, מאחלים לכם המון מזל טוב...";
  } else {
    if (fName) fName.placeholder = "Давид";
    if (lName) lName.placeholder = "Леви";
    if (msg) msg.placeholder = "Дорогие Назар и София! От всей души поздравляем вас...";
  }

  renderChildrenInputs();
  renderFamilyAdultsInputs();
  renderPlusOneInputs();
  updateTotalGuestsBadge();

  applyConfig();
  applyPhotos();
  updateMusicUI(isMusicPlaying);

  if (window.lucide) {
    lucide.createIcons();
  }
}

function startCountdown() {
  function update() {
    const now = new Date().getTime();
    const distance = weddingTargetDate - now;

    if (distance < 0) {
      document.getElementById("days").innerText = "00";
      document.getElementById("hours").innerText = "00";
      document.getElementById("minutes").innerText = "00";
      document.getElementById("seconds").innerText = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

function copyBitNumber() {
  const phoneEl = document.getElementById("bit-phone-display");
  const phone = phoneEl ? phoneEl.textContent.trim() : "+972 50-000-0000";
  const btnText = document.getElementById("btn-copy-bit-text");

  navigator.clipboard.writeText(phone).then(() => {
    const dict = translations[currentLang];
    btnText.textContent = dict.bit_copied || "Номер скопирован! ✓";
    setTimeout(() => {
      btnText.textContent = dict.bit_copy_btn || "Скопировать номер";
    }, 2500);
  }).catch(() => {
    alert("Номер телефона: " + phone);
  });
}

function handleOpenBitClick() {
  const isHe = currentLang === 'he';
  const reason = weddingConfig
    ? (isHe ? (weddingConfig.bit_reason_he || "") : (weddingConfig.bit_reason_ru || "")).trim()
    : "";
  if (reason && navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(reason).catch(() => {});
  }
}

let currentPhoneFormat = 'il_intl'; // 'il_intl', 'il_local', 'ru'

function setPhoneFormat(format) {
  currentPhoneFormat = format;
  const input = document.getElementById("phone");
  const hint = document.getElementById("phone-hint");
  const isHe = (currentLang === 'he');

  ['il_intl', 'il_local', 'ru'].forEach(fmt => {
    const btn = document.getElementById(`btn-fmt-${fmt.replace('_', '-')}`);
    if (btn) {
      if (fmt === format) {
        btn.className = "px-2.5 py-1 rounded-lg text-xs font-semibold bg-stone-900 text-white transition-all shadow-sm";
      } else {
        btn.className = "px-2.5 py-1 rounded-lg text-xs font-semibold bg-stone-100 text-stone-700 hover:bg-stone-200 transition-all";
      }
    }
  });

  if (hint) {
    if (format === 'il_intl') {
      input.placeholder = "+972 50-123-4567";
      hint.textContent = isHe ? "הזינו 9 ספרות אחרי 972+ (לדוגמה: 50-123-4567)" : "Введите 9 цифр после +972 (например: 50-123-4567)";
    } else if (format === 'il_local') {
      input.placeholder = "058-123-4567";
      hint.textContent = isHe ? "הזינו 10 ספרות (לדוגמה: 058-123-4567)" : "Введите 10 цифр (начиная с 05X, например: 058-123-4567)";
    } else if (format === 'ru') {
      input.placeholder = "+7 (912) 345-67-89";
      hint.textContent = isHe ? "הזינו 10 ספרות אחרי 7+ (רוסיה)" : "Введите 10 цифр после +7 (например: 912 345-67-89)";
    }
  }

  formatPhoneNumber();
}

function handlePhoneKeyDown(e) {
  const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'];
  if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey) {
    return;
  }
  if (!/^[0-9]$/.test(e.key)) {
    e.preventDefault();
  }
}

function handlePhoneInput(e) {
  formatPhoneNumber();
}

function formatPhoneNumber() {
  const input = document.getElementById("phone");
  if (!input) return;
  let val = input.value;
  let digits = val.replace(/\D/g, '');

  if (currentPhoneFormat === 'il_intl') {
    if (digits.startsWith('972')) {
      digits = digits.slice(3);
    } else if (digits.startsWith('0')) {
      digits = digits.slice(1);
    }
    digits = digits.slice(0, 9);

    if (digits.length === 0) {
      input.value = "";
      return;
    }

    let formatted = "+972 ";
    if (digits.length <= 2) {
      formatted += digits;
    } else if (digits.length <= 5) {
      formatted += digits.slice(0, 2) + "-" + digits.slice(2);
    } else {
      formatted += digits.slice(0, 2) + "-" + digits.slice(2, 5) + "-" + digits.slice(5);
    }
    input.value = formatted;
  } 
  else if (currentPhoneFormat === 'il_local') {
    if (digits.startsWith('972')) {
      digits = '0' + digits.slice(3);
    }
    digits = digits.slice(0, 10);

    if (digits.length === 0) {
      input.value = "";
      return;
    }

    let formatted = "";
    if (digits.length <= 3) {
      formatted = digits;
    } else if (digits.length <= 6) {
      formatted += digits.slice(0, 3) + "-" + digits.slice(3);
    } else {
      formatted += digits.slice(0, 3) + "-" + digits.slice(3, 6) + "-" + digits.slice(6);
    }
    input.value = formatted;
  }
  else if (currentPhoneFormat === 'ru') {
    if (digits.startsWith('7') || digits.startsWith('8')) {
      if (digits.length > 1) digits = digits.slice(1);
      else digits = "";
    }
    digits = digits.slice(0, 10);

    if (digits.length === 0) {
      input.value = "";
      return;
    }

    let formatted = "+7 (";
    if (digits.length <= 3) {
      formatted += digits;
      if (digits.length === 3) formatted += ") ";
    } else if (digits.length <= 6) {
      formatted += digits.slice(0, 3) + ") " + digits.slice(3);
    } else if (digits.length <= 8) {
      formatted += digits.slice(0, 3) + ") " + digits.slice(3, 6) + "-" + digits.slice(6);
    } else {
      formatted += digits.slice(0, 3) + ") " + digits.slice(3, 6) + "-" + digits.slice(6, 8) + "-" + digits.slice(8);
    }
    input.value = formatted;
  }
}

function validatePhoneNumber() {
  const input = document.getElementById("phone");
  const digits = input.value.replace(/\D/g, '');
  const isHe = (currentLang === 'he');

  if (currentPhoneFormat === 'il_intl') {
    const effectiveDigits = digits.startsWith('972') ? digits.slice(3) : digits;
    if (effectiveDigits.length !== 9) {
      alert(isHe ? "אנא הזינו 9 ספרות מלאות אחרי קידומת 972+ (לדוגמה: 50-123-4567)" : "Пожалуйста, введите все 9 цифр израильского номера после +972 (например: +972 50-123-4567)");
      input.focus();
      return false;
    }
  } else if (currentPhoneFormat === 'il_local') {
    if (digits.length !== 10 || !digits.startsWith('05')) {
      alert(isHe ? "אנא הזינו 10 ספרות המתחילות ב-05 (לדוגמה: 058-123-4567)" : "Пожалуйста, введите 10 цифр израильского номера (начиная с 05, например: 058-123-4567)");
      input.focus();
      return false;
    }
  } else if (currentPhoneFormat === 'ru') {
    const effectiveDigits = (digits.startsWith('7') || digits.startsWith('8')) ? digits.slice(1) : digits;
    if (effectiveDigits.length !== 10) {
      alert(isHe ? "אנא הזינו 10 ספרות מלאות עבור מספר טלפון רוסי" : "Пожалуйста, введите все 10 цифр российского номера (после +7)");
      input.focus();
      return false;
    }
  }
  return true;
}

function escapeHtmlSafe(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getDefaultGuestOptions() {
  const dictRu = translations.ru;
  const dictHe = translations.he;
  return [
    { value: 1, label_ru: dictRu.guest_opt_1 || "1 человек (только я)", label_he: dictHe.guest_opt_1 || "אורח 1 (רק אני)" },
    { value: 2, label_ru: dictRu.guest_opt_2 || "2 человека (+1 гость)", label_he: dictHe.guest_opt_2 || "2 אורחים (אני ובן/בת זוג)" },
    { value: 3, label_ru: dictRu.guest_opt_3 || "3 человека", label_he: dictHe.guest_opt_3 || "3 אורחים" },
    { value: 4, label_ru: dictRu.guest_opt_4 || "4+ человека (с семьёй)", label_he: dictHe.guest_opt_4 || "4+ אורחים (עם המשפחה)" }
  ];
}

function renderGuestOptions() {
  const select = document.getElementById("guests_count");
  if (!select) return;
  const prevVal = select.value;
  const isHe = currentLang === 'he';
  const opts = (weddingConfig && Array.isArray(weddingConfig.guest_options) && weddingConfig.guest_options.length > 0)
    ? weddingConfig.guest_options
    : getDefaultGuestOptions();

  select.innerHTML = opts.map(o => {
    const label = isHe ? (o.label_he || o.label_ru || o.value) : (o.label_ru || o.label_he || o.value);
    const val = parseInt(o.value, 10) || 1;
    return `<option value="${val}">${escapeHtmlSafe(label)}</option>`;
  }).join("");

  if (prevVal && Array.from(select.options).some(opt => opt.value === prevVal)) {
    select.value = prevVal;
  }
}

function renderCustomRsvpFields() {
  const container = document.getElementById("rsvp-custom-fields");
  if (!container) return;

  // Preserve current values before re-rendering on language switch
  const prevValues = {};
  container.querySelectorAll("[data-custom-id]").forEach(el => {
    const id = el.getAttribute("data-custom-id");
    prevValues[id] = el.type === "checkbox" ? el.checked : el.value;
  });

  const fields = (weddingConfig && Array.isArray(weddingConfig.rsvp_custom_fields))
    ? weddingConfig.rsvp_custom_fields
    : [];

  if (fields.length === 0) {
    container.innerHTML = "";
    return;
  }

  const isHe = currentLang === 'he';
  const attendanceEl = document.querySelector('input[name="attendance"]:checked');
  const isAttending = !attendanceEl || attendanceEl.value === 'attending';

  container.innerHTML = fields.map(f => {
    const label = isHe ? (f.label_he || f.label_ru || "") : (f.label_ru || f.label_he || "");
    const showWhen = f.show_when || 'attending';
    const hiddenStyle = (showWhen === 'attending' && !isAttending) ? 'style="display:none"' : '';
    const reqAttr = f.required ? 'required' : '';
    const reqStar = f.required ? ' *' : '';

    if (f.type === 'select') {
      const opts = Array.isArray(f.options) ? f.options : [];
      const optHtml = opts.map(o => {
        const oLabel = isHe ? (o.label_he || o.label_ru || "") : (o.label_ru || o.label_he || "");
        return `<option value="${escapeHtmlSafe(oLabel)}">${escapeHtmlSafe(oLabel)}</option>`;
      }).join("");
      return `
        <div class="space-y-1.5 rsvp-custom-field" data-show-when="${escapeHtmlSafe(showWhen)}" ${hiddenStyle}>
          <label class="text-xs font-semibold uppercase tracking-wider text-stone-700">${escapeHtmlSafe(label)}${reqStar}</label>
          <select data-custom-id="${escapeHtmlSafe(f.id)}" ${reqAttr} class="w-full px-4 py-3 rounded-xl border border-stone-200 bg-[#FAF7F2]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-champagne-gold/50 focus:border-champagne-gold transition-all">
            ${optHtml}
          </select>
        </div>
      `;
    }

    if (f.type === 'checkbox') {
      return `
        <div class="rsvp-custom-field" data-show-when="${escapeHtmlSafe(showWhen)}" ${hiddenStyle}>
          <label class="flex items-center gap-3 p-4 rounded-xl border border-stone-200 bg-[#FAF7F2]/60 cursor-pointer hover:border-champagne-gold transition-all">
            <input type="checkbox" data-custom-id="${escapeHtmlSafe(f.id)}" ${reqAttr} class="accent-stone-900 w-4 h-4">
            <span class="text-sm font-medium text-stone-900">${escapeHtmlSafe(label)}${reqStar}</span>
          </label>
        </div>
      `;
    }

    const placeholder = isHe ? (f.placeholder_he || "") : (f.placeholder_ru || "");
    return `
      <div class="space-y-1.5 rsvp-custom-field" data-show-when="${escapeHtmlSafe(showWhen)}" ${hiddenStyle}>
        <label class="text-xs font-semibold uppercase tracking-wider text-stone-700">${escapeHtmlSafe(label)}${reqStar}</label>
        <input type="text" data-custom-id="${escapeHtmlSafe(f.id)}" ${reqAttr} placeholder="${escapeHtmlSafe(placeholder)}" class="w-full px-4 py-3 rounded-xl border border-stone-200 bg-[#FAF7F2]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-champagne-gold/50 focus:border-champagne-gold transition-all">
      </div>
    `;
  }).join("");

  // Restore previous values
  Object.keys(prevValues).forEach(id => {
    const el = container.querySelector(`[data-custom-id="${CSS.escape(id)}"]`);
    if (!el) return;
    if (el.type === "checkbox") {
      el.checked = Boolean(prevValues[id]);
    } else {
      el.value = prevValues[id];
    }
  });
}

function renderDynamicNameRows(containerId, count, inputClass, placeholderBase, scrollableThreshold = 6) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const existingValues = Array.from(container.querySelectorAll(`.${inputClass}`)).map(el => el.value);
  container.innerHTML = "";

  if (count <= 0) {
    container.classList.add("hidden");
    container.classList.remove("max-h-72", "overflow-y-auto", "pr-1");
    return;
  }

  container.classList.remove("hidden");
  if (count > scrollableThreshold) {
    container.classList.add("max-h-72", "overflow-y-auto", "pr-1");
  } else {
    container.classList.remove("max-h-72", "overflow-y-auto", "pr-1");
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.className = `${inputClass} w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-[#FAF7F2]/40 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-champagne-gold/50 focus:border-champagne-gold transition-all`;
    input.placeholder = placeholderBase;
    if (existingValues[i] !== undefined) {
      input.value = existingValues[i];
    }

    fragment.appendChild(input);
  }
  container.appendChild(fragment);
}

function getCountValue(inputId) {
  const el = document.getElementById(inputId);
  if (!el) return 0;
  const val = parseInt(el.value, 10);
  if (!Number.isFinite(val) || val < 0) return 0;
  return val;
}

function getChildrenCount() {
  return getCountValue("children_count");
}

function getFamilyAdultsCount() {
  return getCountValue("family_adults_count");
}

function getPlusOneCount() {
  return getCountValue("plus_one_count");
}

function updateTotalGuestsBadge() {
  const badge = document.getElementById("rsvp-total-guests-badge");
  if (!badge) return;
  const dict = translations[currentLang] || translations.ru;
  const total = 1 + getChildrenCount() + getFamilyAdultsCount() + getPlusOneCount();
  badge.textContent = `${dict.total_guests_prefix || "Итого:"} ${total}`;
}

function renderGuestGroupInputs(inputId, containerId, inputClass, placeholderKey, defaultPlaceholder) {
  const el = document.getElementById(inputId);
  let count = getCountValue(inputId);
  if (el && el.value !== "" && parseInt(el.value, 10) < 0) {
    el.value = "0";
    count = 0;
  }
  const dict = translations[currentLang] || translations.ru;
  renderDynamicNameRows(
    containerId,
    count,
    inputClass,
    dict[placeholderKey] || defaultPlaceholder
  );
  updateTotalGuestsBadge();
}

function renderChildrenInputs() {
  renderGuestGroupInputs(
    "children_count",
    "children_inputs_container",
    "children-name-input",
    "child_placeholder",
    "Имя ребёнка"
  );
}

function renderFamilyAdultsInputs() {
  renderGuestGroupInputs(
    "family_adults_count",
    "family_adults_inputs_container",
    "family-adult-name-input",
    "family_adult_placeholder",
    "Имя Фамилия"
  );
}

function renderPlusOneInputs() {
  renderGuestGroupInputs(
    "plus_one_count",
    "plus_one_inputs_container",
    "plus-one-name-input",
    "plus_one_placeholder",
    "Имя Фамилия"
  );
}

function stepGuestGroupCount(inputId, delta, renderFn) {
  const el = document.getElementById(inputId);
  if (!el) return;
  const next = Math.max(0, getCountValue(inputId) + delta);
  el.value = String(next);
  renderFn();
}

function stepChildrenCount(delta) {
  stepGuestGroupCount("children_count", delta, renderChildrenInputs);
}

function stepFamilyAdultsCount(delta) {
  stepGuestGroupCount("family_adults_count", delta, renderFamilyAdultsInputs);
}

function stepPlusOneCount(delta) {
  stepGuestGroupCount("plus_one_count", delta, renderPlusOneInputs);
}

function toggleGuestCount(isAttending) {
  const container = document.getElementById("guest-count-container");
  if (container) {
    container.style.display = isAttending ? "block" : "none";
  }
  document.querySelectorAll('.rsvp-custom-field[data-show-when="attending"]').forEach(el => {
    el.style.display = isAttending ? "block" : "none";
    el.querySelectorAll('input, select').forEach(inp => {
      if (!isAttending) {
        if (inp.hasAttribute('required')) {
          inp.setAttribute('data-was-required', '1');
          inp.removeAttribute('required');
        }
      } else if (inp.getAttribute('data-was-required') === '1') {
        inp.setAttribute('required', '');
      }
    });
  });
}

function normalizeFullNameClient(value) {
  return String(value || "").trim().replace(/\s+/g, " ").toLowerCase().replace(/ё/g, "е");
}

function isFullNameTwoWords(value) {
  const parts = String(value || "").trim().split(/\s+/).filter(Boolean);
  return parts.length >= 2;
}

function clearRsvpValidationError() {
  const box = document.getElementById("rsvp-validation-error");
  if (box) box.classList.add("hidden");
  document.querySelectorAll(".rsvp-input-error").forEach(el => {
    el.classList.remove("rsvp-input-error", "border-rose-400", "ring-2", "ring-rose-200");
  });
}

function showRsvpValidationError(message, focusEl = null) {
  const box = document.getElementById("rsvp-validation-error");
  const textEl = document.getElementById("rsvp-validation-error-text");
  if (textEl) textEl.textContent = message;
  if (box) {
    box.classList.remove("hidden");
    if (window.lucide) lucide.createIcons();
  }
  if (focusEl) {
    focusEl.classList.add("rsvp-input-error", "border-rose-400", "ring-2", "ring-rose-200");
    focusEl.focus();
    focusEl.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

async function submitRSVP(event) {
  event.preventDefault();
  const btn = document.getElementById("btn-submit");
  const dict = translations[currentLang];
  const originalText = btn.innerHTML;

  clearRsvpValidationError();

  if (!validatePhoneNumber()) {
    return;
  }

  const firstName = document.getElementById("first_name").value.trim();
  const lastName = document.getElementById("last_name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const attendance = document.querySelector('input[name="attendance"]:checked').value;

  if (attendance === 'attending') {
    const adultInputs = [
      ...Array.from(document.querySelectorAll(".family-adult-name-input")),
      ...Array.from(document.querySelectorAll(".plus-one-name-input"))
    ];

    for (const inp of adultInputs) {
      const val = inp.value.trim();
      if (!isFullNameTwoWords(val)) {
        showRsvpValidationError(
          dict.err_adult_full_name_required || "Укажите полное имя и фамилию (2 слова) для всех гостей, кроме детей.",
          inp
        );
        return;
      }
    }

    const seenNames = new Map();
    const primaryFull = `${firstName} ${lastName}`.trim();
    const primaryNorm = normalizeFullNameClient(primaryFull);
    if (primaryNorm) seenNames.set(primaryNorm, primaryFull);

    for (const inp of adultInputs) {
      const rawVal = inp.value.trim();
      const normVal = normalizeFullNameClient(rawVal);
      if (normVal && seenNames.has(normVal)) {
        const msg = (dict.err_duplicate_guest_in_form || "Человек «{name}» уже указан — этот человек уже записан!")
          .replace("{name}", rawVal);
        showRsvpValidationError(msg, inp);
        return;
      }
      if (normVal) seenNames.set(normVal, rawVal);
    }
  }

  btn.disabled = true;
  btn.innerHTML = `<span class="animate-spin mr-2">⏳</span> ${dict.btn_submitting || 'Отправка...'}`;

  const childrenCount = getChildrenCount();
  const familyAdultsCount = getFamilyAdultsCount();
  const plusOneCount = getPlusOneCount();
  const childrenNamesList = Array.from(document.querySelectorAll(".children-name-input"))
    .map(el => el.value.trim())
    .filter(Boolean);
  const familyAdultsNamesList = Array.from(document.querySelectorAll(".family-adult-name-input"))
    .map(el => el.value.trim())
    .filter(Boolean);
  const plusOneNamesList = Array.from(document.querySelectorAll(".plus-one-name-input"))
    .map(el => el.value.trim())
    .filter(Boolean);

  const effectiveChildrenCount = Math.max(childrenCount, childrenNamesList.length);
  const effectiveFamilyAdultsCount = Math.max(familyAdultsCount, familyAdultsNamesList.length);
  const effectivePlusOneCount = Math.max(plusOneCount, plusOneNamesList.length);
  const guestsCount = attendance === 'attending'
    ? (1 + effectiveChildrenCount + effectiveFamilyAdultsCount + effectivePlusOneCount)
    : 0;
  const message = document.getElementById("message").value.trim();

  const customAnswers = {};
  if (attendance === 'attending') {
    if (effectiveChildrenCount > 0) {
      customAnswers.children_names = {
        label_ru: "Дети (имена)",
        label_he: "שמות הילדים",
        count: effectiveChildrenCount,
        value: childrenNamesList.length > 0
          ? childrenNamesList.join(", ")
          : `${effectiveChildrenCount}`
      };
    }
    if (effectiveFamilyAdultsCount > 0) {
      customAnswers.family_adults = {
        label_ru: "Муж / Жена и близкие",
        label_he: "בן/בת זוג ומשפחה",
        count: effectiveFamilyAdultsCount,
        value: familyAdultsNamesList.length > 0
          ? familyAdultsNamesList.join(", ")
          : `${effectiveFamilyAdultsCount}`
      };
    }
    if (effectivePlusOneCount > 0) {
      customAnswers.companion_name = {
        label_ru: "Дополнительные гости",
        label_he: "אורחים נוספים",
        count: effectivePlusOneCount,
        value: plusOneNamesList.length > 0
          ? plusOneNamesList.join(", ")
          : `${effectivePlusOneCount}`
      };
    }
  }
  const customFields = (weddingConfig && Array.isArray(weddingConfig.rsvp_custom_fields))
    ? weddingConfig.rsvp_custom_fields
    : [];
  customFields.forEach(f => {
    if ((f.show_when || 'attending') === 'attending' && attendance !== 'attending') return;
    const el = document.querySelector(`[data-custom-id="${CSS.escape(f.id)}"]`);
    if (!el) return;
    let val = "";
    if (el.type === "checkbox") {
      val = el.checked ? (currentLang === 'he' ? "כן" : "Да") : (currentLang === 'he' ? "לא" : "Нет");
    } else {
      val = (el.value || "").trim();
    }
    if (val !== "") {
      customAnswers[f.id] = {
        label_ru: f.label_ru || f.label_he || f.id,
        label_he: f.label_he || f.label_ru || f.id,
        value: val
      };
    }
  });

  const payload = {
    first_name: firstName,
    last_name: lastName,
    phone: phone,
    attendance: attendance,
    guests_count: guestsCount,
    message: message,
    language: currentLang,
    custom_answers: customAnswers
  };

  const isEditMode = editingRsvpId !== null;
  const endpoint = isEditMode ? '/api/rsvp/update' : '/api/rsvp';
  if (isEditMode) {
    payload.rsvp_id = editingRsvpId;
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (response.ok && data.success) {
      try {
        localStorage.setItem('wedding_rsvp_registered', JSON.stringify({
          id: data.id || editingRsvpId,
          first_name: firstName,
          last_name: lastName,
          phone: phone,
          attendance: attendance,
          guests_count: guestsCount,
          saved_at: new Date().toISOString()
        }));
      } catch (e) {}

      if (window.confetti && attendance === 'attending') {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      }

      const successTitleEl = document.querySelector('#rsvp-success [data-i18n="success_title"]');
      const successDescEl = document.querySelector('#rsvp-success [data-i18n="success_desc"]');
      if (successTitleEl) {
        successTitleEl.textContent = isEditMode ? dict.updated_title : dict.success_title;
      }
      if (successDescEl) {
        successDescEl.textContent = isEditMode ? dict.updated_desc : dict.success_desc;
      }

      exitEditModeState();
      document.getElementById("rsvp-form").classList.add("hidden");
      document.getElementById("rsvp-already-registered").classList.add("hidden");
      document.getElementById("rsvp-success").classList.remove("hidden");
    } else if (response.status === 409 && data.error === 'already_registered') {
      pendingExistingRsvp = data.existing || null;
      showAlreadyRegisteredCard(data.reason, data.existing);
    } else if ((response.status === 409 || response.status === 400) && (data.error === 'duplicate_guest_name' || data.error === 'invalid_adult_name')) {
      const fallbackMsg = data.duplicate_name
        ? (dict.err_duplicate_guest_in_db || "Этот человек («{name}») уже записан в списке гостей!").replace("{name}", data.duplicate_name)
        : (dict.err_adult_full_name_required || "Укажите полное имя и фамилию.");
      const serverMsg = currentLang === 'he' ? (data.message_he || fallbackMsg) : (data.message_ru || fallbackMsg);
      let matchedInput = null;
      if (data.duplicate_name || data.name) {
        const targetNorm = normalizeFullNameClient(data.duplicate_name || data.name);
        const adultInputs = [
          ...Array.from(document.querySelectorAll(".family-adult-name-input")),
          ...Array.from(document.querySelectorAll(".plus-one-name-input"))
        ];
        matchedInput = adultInputs.find(inp => normalizeFullNameClient(inp.value) === targetNorm) || null;
      }
      showRsvpValidationError(serverMsg, matchedInput);
    } else {
      alert("Ошибка отправки: " + (data.message_ru || data.error || "Пожалуйста, проверьте данные"));
    }
  } catch (err) {
    console.error("Submission failed:", err);
    alert("Не удалось отправить форму. Проверьте соединение с сервером.");
  } finally {
    btn.disabled = false;
    if (editingRsvpId === null) {
      btn.innerHTML = originalText;
      const submitSpan = btn.querySelector('[data-i18n="btn_submit_rsvp"]');
      if (submitSpan) submitSpan.textContent = dict.btn_submit_rsvp;
    } else {
      btn.innerHTML = `<i data-lucide="check" class="w-5 h-5"></i><span>${escapeHtmlSafe(dict.btn_save_changes)}</span>`;
      if (window.lucide) lucide.createIcons();
    }
  }
}

function clearDuplicateHints() {
  const nameHint = document.getElementById("name-duplicate-hint");
  const phoneHint = document.getElementById("phone-duplicate-hint");
  if (nameHint) nameHint.classList.add("hidden");
  if (phoneHint) phoneHint.classList.add("hidden");
}

function initRsvpDuplicateCheck() {
  const firstEl = document.getElementById("first_name");
  const lastEl = document.getElementById("last_name");
  const phoneEl = document.getElementById("phone");

  if (firstEl && lastEl) {
    const onNameBlur = () => checkRsvpDuplicateField('name');
    const onNameInput = () => {
      const hint = document.getElementById("name-duplicate-hint");
      if (hint) hint.classList.add("hidden");
    };
    firstEl.addEventListener("blur", onNameBlur);
    lastEl.addEventListener("blur", onNameBlur);
    firstEl.addEventListener("input", onNameInput);
    lastEl.addEventListener("input", onNameInput);
  }

  if (phoneEl) {
    phoneEl.addEventListener("blur", () => checkRsvpDuplicateField('phone'));
    phoneEl.addEventListener("input", () => {
      const hint = document.getElementById("phone-duplicate-hint");
      if (hint) hint.classList.add("hidden");
    });
  }
}

async function checkRsvpDuplicateField(mode) {
  const dict = translations[currentLang] || translations.ru;
  const firstEl = document.getElementById("first_name");
  const lastEl = document.getElementById("last_name");
  const phoneEl = document.getElementById("phone");

  const payload = {};
  if (mode === 'name') {
    const fn = (firstEl?.value || "").trim();
    const ln = (lastEl?.value || "").trim();
    if (!fn || !ln) return;
    payload.first_name = fn;
    payload.last_name = ln;
  } else if (mode === 'phone') {
    const ph = (phoneEl?.value || "").trim();
    const digits = ph.replace(/\D/g, "");
    if (digits.length < 9) return;
    payload.phone = ph;
  } else {
    return;
  }

  try {
    const res = await fetch('/api/rsvp/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) return;
    const data = await res.json();
    if (data.registered) {
      pendingExistingRsvp = data.existing || null;
      const editBtnHtml = ` <button type="button" onclick="editExistingRSVP()" class="underline font-semibold hover:text-amber-950 ml-1">${escapeHtmlSafe(dict.btn_load_and_edit)}</button>`;
      if (mode === 'name' && data.reason === 'name') {
        const box = document.getElementById("name-duplicate-hint");
        const txt = document.getElementById("name-duplicate-hint-text");
        if (box && txt) {
          txt.innerHTML = escapeHtmlSafe(dict.inline_dup_name) + editBtnHtml;
          box.classList.remove("hidden");
        }
      } else if (mode === 'phone' && data.reason === 'phone') {
        const box = document.getElementById("phone-duplicate-hint");
        const txt = document.getElementById("phone-duplicate-hint-text");
        if (box && txt) {
          txt.innerHTML = escapeHtmlSafe(dict.inline_dup_phone) + editBtnHtml;
          box.classList.remove("hidden");
        }
      }
      if (window.lucide) lucide.createIcons();
    }
  } catch (e) {
    // Non-blocking pre-check
  }
}

function showAlreadyRegisteredCard(reason, existing) {
  if (existing) {
    pendingExistingRsvp = existing;
  }
  const dict = translations[currentLang] || translations.ru;
  const reasonEl = document.getElementById("already-reg-reason");
  const detailsEl = document.getElementById("already-reg-details");
  const noteEl = document.getElementById("already-reg-note");

  if (reasonEl) {
    reasonEl.textContent = reason === 'phone'
      ? dict.already_reg_reason_phone
      : dict.already_reg_reason_name;
  }

  if (noteEl) {
    const contactPhone = (weddingConfig && weddingConfig.bit_phone) ? weddingConfig.bit_phone.trim() : "+972 50-000-0000";
    const telHref = contactPhone.replace(/[^\d+]/g, '');
    noteEl.innerHTML = `${escapeHtmlSafe(dict.already_reg_note_prefix)} <a href="tel:${escapeHtmlSafe(telHref)}" dir="ltr" class="font-semibold text-stone-900 underline hover:text-champagne-gold transition-colors">${escapeHtmlSafe(contactPhone)}</a>`;
  }

  if (detailsEl && existing) {
    const fullName = escapeHtmlSafe(`${existing.first_name || ''} ${existing.last_name || ''}`.trim());
    const isAttending = existing.attendance === 'attending';
    const statusLabel = isAttending
      ? dict.already_reg_status_attending
      : dict.already_reg_status_declined;
    const guestsHtml = isAttending
      ? `<div><span class="text-stone-500">${escapeHtmlSafe(dict.already_reg_guests)}</span> <strong>${Number(existing.guests_count || 1)}</strong></div>`
      : '';
    detailsEl.innerHTML = `
      <div class="font-semibold text-stone-900">${fullName}</div>
      <div class="text-stone-700">${isAttending ? '🎉' : '💔'} ${escapeHtmlSafe(statusLabel)}</div>
      ${guestsHtml}
    `;
    detailsEl.classList.remove("hidden");
  } else if (detailsEl) {
    detailsEl.classList.add("hidden");
  }

  document.getElementById("rsvp-form").classList.add("hidden");
  document.getElementById("rsvp-success").classList.add("hidden");
  document.getElementById("rsvp-already-registered").classList.remove("hidden");
  if (window.lucide) lucide.createIcons();
}

async function restoreSavedRegistrationState() {
  try {
    const raw = localStorage.getItem('wedding_rsvp_registered');
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (!saved || (!saved.phone && !(saved.first_name && saved.last_name))) return;

    const res = await fetch('/api/rsvp/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: saved.first_name || '',
        last_name: saved.last_name || '',
        phone: saved.phone || ''
      })
    });
    if (!res.ok) return;
    const data = await res.json();
    if (data.registered) {
      showAlreadyRegisteredCard(data.reason || 'phone', data.existing || saved);
    } else {
      localStorage.removeItem('wedding_rsvp_registered');
    }
  } catch (e) {
    // Ignore storage/network errors
  }
}

function exitEditModeState() {
  editingRsvpId = null;
  const banner = document.getElementById("rsvp-edit-banner");
  if (banner) banner.classList.add("hidden");
  const dict = translations[currentLang] || translations.ru;
  const btn = document.getElementById("btn-submit");
  if (btn) {
    btn.innerHTML = `<i data-lucide="send" class="w-5 h-5 group-hover:translate-x-1 transition-transform"></i><span data-i18n="btn_submit_rsvp">${escapeHtmlSafe(dict.btn_submit_rsvp)}</span>`;
    if (window.lucide) lucide.createIcons();
  }
}

function editExistingRSVP() {
  const rec = pendingExistingRsvp;
  if (!rec) return;

  const dict = translations[currentLang] || translations.ru;
  editingRsvpId = rec.id || null;

  document.getElementById("first_name").value = rec.first_name || "";
  document.getElementById("last_name").value = rec.last_name || "";

  const rawPhone = rec.phone || "";
  const digits = rawPhone.replace(/\D/g, "");
  if (rawPhone.trim().startsWith("+7") || (digits.length === 11 && (digits.startsWith("7") || digits.startsWith("8")))) {
    setPhoneFormat('ru');
  } else if (digits.startsWith("05")) {
    setPhoneFormat('il_local');
  } else {
    setPhoneFormat('il_intl');
  }
  document.getElementById("phone").value = rawPhone;
  formatPhoneNumber();

  const att = rec.attendance === 'declined' ? 'declined' : 'attending';
  const radio = document.querySelector(`input[name="attendance"][value="${att}"]`);
  if (radio) radio.checked = true;
  toggleGuestCount(att === 'attending');

  const customAnswers = rec.custom_answers || {};

  // Pre-fill children
  const childrenData = customAnswers.children_names;
  const childrenCount = childrenData ? Number(childrenData.count || 0) : 0;
  const childrenEl = document.getElementById("children_count");
  if (childrenEl) childrenEl.value = String(childrenCount);
  renderChildrenInputs();
  if (childrenData && childrenData.value && isNaN(Number(childrenData.value))) {
    const names = String(childrenData.value).split(",").map(s => s.trim()).filter(Boolean);
    document.querySelectorAll(".children-name-input").forEach((inp, idx) => {
      if (names[idx]) inp.value = names[idx];
    });
  }

  // Pre-fill family adults (spouse / partner)
  const familyAdultsData = customAnswers.family_adults;
  const familyAdultsCount = familyAdultsData ? Number(familyAdultsData.count || 0) : 0;
  const familyAdultsEl = document.getElementById("family_adults_count");
  if (familyAdultsEl) familyAdultsEl.value = String(familyAdultsCount);
  renderFamilyAdultsInputs();
  if (familyAdultsData && familyAdultsData.value && isNaN(Number(familyAdultsData.value))) {
    const names = String(familyAdultsData.value).split(",").map(s => s.trim()).filter(Boolean);
    document.querySelectorAll(".family-adult-name-input").forEach((inp, idx) => {
      if (names[idx]) inp.value = names[idx];
    });
  }

  // Pre-fill +1 / additional guests
  const plusOneData = customAnswers.companion_name;
  const plusOneCount = plusOneData ? Number(plusOneData.count || 0) : 0;
  const plusOneEl = document.getElementById("plus_one_count");
  if (plusOneEl) plusOneEl.value = String(plusOneCount);
  renderPlusOneInputs();
  if (plusOneData && plusOneData.value && isNaN(Number(plusOneData.value))) {
    const names = String(plusOneData.value).split(",").map(s => s.trim()).filter(Boolean);
    document.querySelectorAll(".plus-one-name-input").forEach((inp, idx) => {
      if (names[idx]) inp.value = names[idx];
    });
  }

  updateTotalGuestsBadge();

  // Pre-fill custom fields
  const customFields = (weddingConfig && Array.isArray(weddingConfig.rsvp_custom_fields))
    ? weddingConfig.rsvp_custom_fields
    : [];
  customFields.forEach(f => {
    const el = document.querySelector(`[data-custom-id="${CSS.escape(f.id)}"]`);
    if (!el) return;
    const savedField = customAnswers[f.id];
    const val = savedField && typeof savedField === 'object' ? (savedField.value || '') : (savedField || '');
    if (el.type === "checkbox") {
      el.checked = (val === "Да" || val === "כן" || val === true);
    } else if (val !== "") {
      el.value = val;
    }
  });

  document.getElementById("message").value = rec.message || "";

  clearDuplicateHints();
  const banner = document.getElementById("rsvp-edit-banner");
  if (banner) banner.classList.remove("hidden");

  const btn = document.getElementById("btn-submit");
  if (btn) {
    btn.innerHTML = `<i data-lucide="check" class="w-5 h-5"></i><span>${escapeHtmlSafe(dict.btn_save_changes)}</span>`;
  }

  document.getElementById("rsvp-already-registered").classList.add("hidden");
  document.getElementById("rsvp-success").classList.add("hidden");
  document.getElementById("rsvp-form").classList.remove("hidden");
  if (window.lucide) lucide.createIcons();
}

function cancelEditMode() {
  resetRSVPForm();
}

function backToRSVPForm() {
  exitEditModeState();
  document.getElementById("rsvp-already-registered").classList.add("hidden");
  document.getElementById("rsvp-form").classList.remove("hidden");
}

function resetRSVPForm() {
  exitEditModeState();
  document.getElementById("rsvp-form").reset();
  const childrenContainer = document.getElementById("children_inputs_container");
  const familyAdultsContainer = document.getElementById("family_adults_inputs_container");
  const plusOneContainer = document.getElementById("plus_one_inputs_container");
  if (childrenContainer) childrenContainer.innerHTML = "";
  if (familyAdultsContainer) familyAdultsContainer.innerHTML = "";
  if (plusOneContainer) plusOneContainer.innerHTML = "";
  renderChildrenInputs();
  renderFamilyAdultsInputs();
  renderPlusOneInputs();
  clearDuplicateHints();
  const dict = translations[currentLang] || translations.ru;
  const successTitleEl = document.querySelector('#rsvp-success [data-i18n="success_title"]');
  const successDescEl = document.querySelector('#rsvp-success [data-i18n="success_desc"]');
  if (successTitleEl) successTitleEl.textContent = dict.success_title;
  if (successDescEl) successDescEl.textContent = dict.success_desc;
  document.getElementById("rsvp-form").classList.remove("hidden");
  document.getElementById("rsvp-success").classList.add("hidden");
  document.getElementById("rsvp-already-registered").classList.add("hidden");
  toggleGuestCount(true);
}

let revealObserver = null;

function observeRevealElements(root = document) {
  const targets = root.querySelectorAll(".reveal-on-scroll, .reveal-icon, .reveal-left, .reveal-right, .reveal-photo, .reveal-scale");
  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
    targets.forEach(el => el.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -30px 0px"
    });
  }

  targets.forEach(el => {
    if (!el.classList.contains("is-visible")) {
      revealObserver.observe(el);
    }
  });
}

function initScrollAnimations() {
  observeRevealElements(document);

  const header = document.getElementById("main-header");
  if (header) {
    const updateHeader = () => {
      if (window.scrollY > 30) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();
  }
}

let isRsvpSectionOpen = false;

function updateRsvpTapHint() {
  const hint = document.getElementById("rsvp-tap-hint");
  if (!hint) return;
  const dict = translations[currentLang] || translations.ru;
  hint.textContent = dict.rsvp_tap_hint || "Нажмите, чтобы заполнить анкету";
}

function setRsvpSectionOpen(open) {
  isRsvpSectionOpen = Boolean(open);
  const btn = document.getElementById("rsvp-toggle-btn");
  const overlay = document.getElementById("rsvp-page-overlay");
  if (btn) {
    btn.setAttribute("aria-expanded", isRsvpSectionOpen ? "true" : "false");
  }
  if (overlay) {
    if (isRsvpSectionOpen) {
      overlay.classList.remove("hidden");
      overlay.classList.add("is-open");
      overlay.setAttribute("aria-hidden", "false");
      overlay.scrollTop = 0;
      document.body.style.overflow = "hidden";
      if (window.lucide) lucide.createIcons();
    } else {
      overlay.classList.remove("is-open");
      overlay.classList.add("hidden");
      overlay.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  }
  updateRsvpTapHint();
}

function toggleRsvpSection() {
  setRsvpSectionOpen(!isRsvpSectionOpen);
}

function openRsvpSection() {
  setRsvpSectionOpen(true);
}

function closeRsvpSection() {
  setRsvpSectionOpen(false);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isRsvpSectionOpen) {
    closeRsvpSection();
  }
});
