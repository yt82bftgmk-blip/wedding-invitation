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
    bit_copy_btn: "Скопировать номер",
    bit_copied: "Номер скопирован! ✓",
    bit_open_app: "Открыть Bit",

    rsvp_tag: "Будем счастливы вас видеть",
    rsvp_title: "Подтверждение присутствия",
    rsvp_desc: "Пожалуйста, ответьте на приглашение, чтобы мы могли позаботиться о вашем комфорте!",
    field_first_name: "Имя *",
    field_last_name: "Фамилия *",
    field_phone: "Номер телефона *",
    field_attendance: "Сможете ли вы прийти? *",
    choice_yes: "Я обязательно приду!",
    choice_no: "К сожалению, не смогу",
    field_guests_count: "Количество человек",
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
    bit_copy_btn: "העתק מספר טלפון",
    bit_copied: "המספר הועתק! ✓",
    bit_open_app: "פתח ב-Bit",

    rsvp_tag: "נשמח מאוד לראותכם",
    rsvp_title: "אישור הגעה",
    rsvp_desc: "אנא אשרו את הגעתכם כדי שנוכל להיערך בצורה הטובה ביותר עבורכם!",
    field_first_name: "שם פרטי *",
    field_last_name: "שם משפחה *",
    field_phone: "מספר טלפון *",
    field_attendance: "האם תגיעו לחגוג עמנו? *",
    choice_yes: "מגיע/ה בשמחה!",
    choice_no: "לצערי לא אוכל להגיע",
    field_guests_count: "מספר אורחים",
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

    footer_love: "באהבה והערכה רבה לכל אחד ואחת מכם ❤️"
  }
};

let currentLang = 'ru';
let weddingConfig = null;
let weddingPhotos = null;
let weddingTargetDate = new Date("2027-09-15T18:00:00").getTime();

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    lucide.createIcons();
  }
  fetchConfig();
  startCountdown();
  initMusicAutoPlay();
});

let isMusicPlaying = false;
let userPausedMusic = false;

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
    card.className = "photo-story-card cursor-pointer group bg-white p-3 rounded-2xl border border-[#E8DFC9] shadow-md space-y-2 relative overflow-hidden active:scale-95 transition-transform";
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

function toggleGuestCount(isAttending) {
  const container = document.getElementById("guest-count-container");
  if (!container) return;
  container.style.display = isAttending ? "block" : "none";
}

async function submitRSVP(event) {
  event.preventDefault();
  const btn = document.getElementById("btn-submit");
  const dict = translations[currentLang];
  const originalText = btn.innerHTML;

  if (!validatePhoneNumber()) {
    return;
  }

  btn.disabled = true;
  btn.innerHTML = `<span class="animate-spin mr-2">⏳</span> ${dict.btn_submitting || 'Отправка...'}`;

  const firstName = document.getElementById("first_name").value.trim();
  const lastName = document.getElementById("last_name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const attendance = document.querySelector('input[name="attendance"]:checked').value;
  const guestsCount = attendance === 'attending' ? parseInt(document.getElementById("guests_count").value) : 0;
  const message = document.getElementById("message").value.trim();

  const payload = {
    first_name: firstName,
    last_name: lastName,
    phone: phone,
    attendance: attendance,
    guests_count: guestsCount,
    message: message,
    language: currentLang
  };

  try {
    const response = await fetch('/api/rsvp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (response.ok && data.success) {
      if (window.confetti && attendance === 'attending') {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      }

      document.getElementById("rsvp-form").classList.add("hidden");
      document.getElementById("rsvp-success").classList.remove("hidden");
    } else {
      alert("Ошибка отправки: " + (data.error || "Пожалуйста, проверьте данные"));
    }
  } catch (err) {
    console.error("Submission failed:", err);
    alert("Не удалось отправить форму. Проверьте соединение с сервером.");
  } finally {
    btn.disabled = false;
    btn.innerHTML = originalText;
  }
}

function resetRSVPForm() {
  document.getElementById("rsvp-form").reset();
  document.getElementById("rsvp-form").classList.remove("hidden");
  document.getElementById("rsvp-success").classList.add("hidden");
  toggleGuestCount(true);
}
