/* =========================================================================
   ECO GLAMPING BURABAY — SCRIPT.JS
   Contains:
   1. Translations object (ru / kk / en)
   2. i18n engine (apply / switch / persist language)
   3. UI interactions: header scroll, mobile nav, FAQ accordion,
      back-to-top, scroll reveal animations, contact form validation,
      loading screen
   ========================================================================= */

/* -------------------------------------------------------------------------
   1. TRANSLATIONS
   Every data-i18n="key" element in index.html gets its textContent from here.
   Elements using data-i18n-attr="attrName:key" get an attribute translated
   instead (e.g. placeholder, content).
   ------------------------------------------------------------------------- */
const translations = {
  ru: {
    meta_title: "Eco Glamping Burabay — Глэмпинг на озере Щучье, Боровое",
    meta_description: "Eco Glamping Burabay — уютные барнхаусы и глэмпинг на юго-западном берегу озера Щучье: ресторан грузинской кухни, дровяная баня с купелью, пляж и активный отдых в Боровом.",

    nav_about: "О нас",
    nav_accommodation: "Проживание",
    nav_amenities: "Удобства",
    nav_gallery: "Галерея",
    nav_why: "Почему мы",
    nav_faq: "Вопросы",
    nav_contact: "Контакты",
    nav_book: "Забронировать",

    hero_eyebrow: "оз. Щучье · Боровое · Казахстан",
    hero_title: "Тишина леса.<br>Тепло дерева.<br>Свет озера.",
    hero_subtitle: "Eco Glamping Burabay — барнхаусы и сафари-тенты на юго-западном берегу озера Щучье, баня на дровах и грузинский ресторан среди сосен.",
    hero_cta_primary: "Смотреть домики",
    hero_cta_secondary: "Написать в WhatsApp",

    about_eyebrow: "О месте",
    about_title: "Маленькое лесное убежище на берегу Щучьего",
    about_p1: "Eco Glamping Burabay — база отдыха на юго-западном берегу озера Щучье, рядом с Бурабаем и Щучинском. Мы построили коллекцию стильных барнхаусов и сафари-тентов среди сосен, чтобы гости могли сочетать комфорт с настоящей природой.",
    about_p2: "На территории — баня на дровах с купелью, грузинский ресторан, летняя терраса под зонтиками, мангальные зоны и выход к озеру для купания и рыбалки. Кухня работает до 22:00, а сама база — круглосуточно.",
    about_stat1: "типа домиков",
    about_stat2: "территория открыта",
    about_stat3: "подписчиков в Instagram",

    acc_eyebrow: "Проживание",
    acc_title: "Выберите свой домик среди сосен",
    acc_subtitle: "Барнхаусы с панорамными окнами и сафари-тенты — для пар, семей и небольших компаний.",
    acc_badge_forest: "Вид на лес",
    acc_badge_lake: "Вид на озеро",
    acc1_title: "2-местный барнхаус",
    acc1_guests: "2 гостя",
    acc1_desc: "[Описание домика] Уютный барнхаус с террасой, двуспальной кроватью и панорамным окном в лес.",
    acc2_title: "4-местный барнхаус",
    acc2_guests: "4 гостя",
    acc2_desc: "[Описание домика] Просторный барнхаус с раскладным диваном, мини-баром и собственной чайной станцией.",
    acc3_title: "2-местный барнхаус",
    acc3_guests: "2 гостя",
    acc3_desc: "[Описание домика] Барнхаус с видом на озеро Щучье прямо из окна — идеален для рассветов и закатов.",
    acc4_title: "Сафари-тент",
    acc4_guests: "до 5 гостей",
    acc4_desc: "Спальные места на 5 человек, обеденный стол, постельное бельё и полный гигиенический набор.",
    acc_cta: "Забронировать",
    acc_note: "Завтраки и пользование мангальной зоной включены в стоимость проживания.",
    price_weekday: "вс–пт",
    price_weekend: "сб и праздничные дни",
    price_weekday_short: "будние дни",
    price_weekend_short: "выходные",
    price_night: "сутки",
    price_hour: "час",

    banya_eyebrow: "Отдельно",
    banya_title: "Баня на дровах без чана",
    banya_li1: "Минимальная аренда — 2 часа",
    banya_li2: "Максимальная вместимость — 6 человек",
    banya_li3: "Парная рассчитана на 4 человек",

    amenities_eyebrow: "Удобства",
    amenities_title: "Всё для комфортного отдыха на природе",
    amenity1_title: "Wi-Fi",
    amenity1_desc: "Бесплатный Wi-Fi для гостей на всей территории.",
    amenity2_title: "Грузинский ресторан",
    amenity2_desc: "Кафе грузинской кухни на территории, кухня работает до 22:00.",
    amenity3_title: "Баня и купель",
    amenity3_desc: "Дровяная русская баня с парной и купелью, полотенца и гигиенические принадлежности.",
    amenity4_title: "Мангальная зона",
    amenity4_desc: "Зоны с мангалом и дровами — включены в стоимость проживания.",
    amenity5_title: "Парковка",
    amenity5_desc: "Бесплатная парковка для гостей на территории базы.",
    amenity6_title: "Завтрак включён",
    amenity6_desc: "Завтрак включён в стоимость для гостей барнхаусов и тентов.",
    amenity7_title: "Озеро и рыбалка",
    amenity7_desc: "Прямой выход к озеру Щучье — купание и рыбалка рядом с домиком.",
    amenity8_title: "Летняя терраса",
    amenity8_desc: "Терраса под зонтиками для отдыха и приёма пищи на свежем воздухе.",

    gallery_eyebrow: "Галерея",
    gallery_title: "Место, где хочется остаться дольше",

    why_eyebrow: "Почему мы",
    why_title: "Природа и комфорт в одном месте",
    why1_title: "Прямой берег озера",
    why1_desc: "Территория расположена на юго-западном берегу озера Щучье — до воды несколько шагов.",
    why2_title: "Настоящая баня на дровах",
    why2_desc: "Русская парная и купель — классический ритуал отдыха после дня на природе.",
    why3_title: "Грузинская кухня на территории",
    why3_desc: "Не нужно никуда ехать за ужином — ресторан работает прямо на базе.",
    why4_title: "Приватные барнхаусы",
    why4_desc: "Каждый домик спрятан среди сосен — тишина и приватность вместо шумного кемпинга.",

    cta_title: "Готовы к следующему отдыху?",
    cta_button: "Написать в WhatsApp",

    faq_eyebrow: "Вопросы",
    faq_title: "Часто задаваемые вопросы",
    faq1_q: "Как добраться до Eco Glamping Burabay?",
    faq1_a: "Мы находимся на юго-западном берегу озера Щучье, 2а, рядом со Щучинском, Акмолинская область. Точный маршрут можно посмотреть на карте ниже или в 2GIS.",
    faq2_q: "Что входит в стоимость проживания?",
    faq2_a: "Завтраки и пользование мангальной зоной включены в стоимость проживания во всех барнхаусах и сафари-тентах.",
    faq3_q: "Можно ли забронировать баню отдельно?",
    faq3_a: "Да, баня на дровах без чана бронируется отдельно, минимальная аренда — 2 часа, вместимость до 6 человек.",
    faq4_q: "До какого времени работает ресторан?",
    faq4_a: "Кухня грузинского ресторана на территории работает до 22:00. Сама база отдыха открыта круглосуточно.",
    faq5_q: "Как забронировать домик?",
    faq5_a: "Проще всего написать нам в WhatsApp или Instagram, либо позвонить по указанному номеру телефона.",

    contact_eyebrow: "Контакты",
    contact_title: "Свяжитесь с нами",
    contact_lead: "Напишите нам напрямую в WhatsApp или Instagram, позвоните — или найдите нас на карте.",
    contact_address_label: "Адрес",
    contact_phone_label: "Телефон",
    contact_whatsapp_label: "WhatsApp",
    contact_instagram_label: "Instagram",
    contact_hours_label: "Режим работы",
    contact_hours_value: "Территория — круглосуточно, ресторан — до 22:00",
    map_2gis_btn: "Открыть в 2GIS",


    footer_tagline: "Глэмпинг и барнхаусы на озере Щучье, Боровое",
    footer_rights: "Все права защищены."
  },

  kk: {
    meta_title: "Eco Glamping Burabay — Щучье көлінде глэмпинг, Бурабай",
    meta_description: "Eco Glamping Burabay — Щучье көлінің оңтүстік-батыс жағалауындағы жайлы барнхаустар мен глэмпинг: грузин асханасы, отынмен жылытылатын моншасы, жағажай және белсенді демалыс.",

    nav_about: "Біз туралы",
    nav_accommodation: "Тұру",
    nav_amenities: "Ыңғайлылықтар",
    nav_gallery: "Галерея",
    nav_why: "Неге бізді таңдайды",
    nav_faq: "Сұрақтар",
    nav_contact: "Байланыс",
    nav_book: "Брондау",

    hero_eyebrow: "Щучье көлі · Бурабай · Қазақстан",
    hero_title: "Орманның тыныштығы.<br>Ағаштың жылуы.<br>Көлдің жарығы.",
    hero_subtitle: "Eco Glamping Burabay — Щучье көлінің оңтүстік-батыс жағалауындағы барнхаустар мен сафари-шатырлар, қарағайлар арасындағы отынмен жылытылатын монша және грузин асханасы.",
    hero_cta_primary: "Үйлерді көру",
    hero_cta_secondary: "WhatsApp-қа жазу",

    about_eyebrow: "Орын туралы",
    about_title: "Щучье жағалауындағы шағын орман баспанасы",
    about_p1: "Eco Glamping Burabay — Бурабай мен Щучинскіге жақын, Щучье көлінің оңтүстік-батыс жағалауындағы демалыс базасы. Біз қонақтарға табиғатпен үйлескен ыңғайлылықты ұсыну үшін қарағайлар арасында сәнді барнхаустар мен сафари-шатырлар жиынтығын салдық.",
    about_p2: "Аумақта — моншасы бар отын моншасы, грузин асханасы, күн шатырлары астындағы жазғы терраса, мангал аймақтары және көлге шығу жүзу мен балық аулауға мүмкіндік береді. Асхана 22:00-ге дейін жұмыс істейді, ал база тәулік бойы ашық.",
    about_stat1: "үй түрі",
    about_stat2: "аумақ ашық",
    about_stat3: "Instagram жазылушылары",

    acc_eyebrow: "Тұру",
    acc_title: "Қарағайлар арасынан үйіңізді таңдаңыз",
    acc_subtitle: "Панорамалық терезелі барнхаустар мен сафари-шатырлар — жұптарға, отбасыларға және шағын топтарға.",
    acc_badge_forest: "Орманға көрініс",
    acc_badge_lake: "Көлге көрініс",
    acc1_title: "2 адамдық барнхаус",
    acc1_guests: "2 қонақ",
    acc1_desc: "[Үй сипаттамасы] Террасасы, екі орындық төсегі және орманға қараған панорамалық терезесі бар жайлы барнхаус.",
    acc2_title: "4 адамдық барнхаус",
    acc2_guests: "4 қонақ",
    acc2_desc: "[Үй сипаттамасы] Жинамалы диваны, мини-барымен және жеке шай станциясы бар кең барнхаус.",
    acc3_title: "2 адамдық барнхаус",
    acc3_guests: "2 қонақ",
    acc3_desc: "[Үй сипаттамасы] Терезеден тікелей Щучье көліне көрінісі бар барнхаус — таң мен күн батысын тамашалауға тамаша.",
    acc4_title: "Сафари-шатыр",
    acc4_guests: "5 қонаққа дейін",
    acc4_desc: "5 адамға арналған төсек орындар, ас үстелі, төсек-орын жабдықтары және толық гигиеналық жинақ.",
    acc_cta: "Брондау",
    acc_note: "Таңғы ас пен мангал аймағын пайдалану тұру құнына кіреді.",
    price_weekday: "жс–жм",
    price_weekend: "сенбі және мереке күндері",
    price_weekday_short: "жұмыс күндері",
    price_weekend_short: "демалыс күндері",
    price_night: "тәулік",
    price_hour: "сағат",

    banya_eyebrow: "Бөлек",
    banya_title: "Шаны жоқ отын моншасы",
    banya_li1: "Ең аз жалдау мерзімі — 2 сағат",
    banya_li2: "Ең көп сыйымдылық — 6 адам",
    banya_li3: "Бу бөлмесі 4 адамға есептелген",

    amenities_eyebrow: "Ыңғайлылықтар",
    amenities_title: "Табиғатта жайлы демалу үшін бәрі бар",
    amenity1_title: "Wi-Fi",
    amenity1_desc: "Аумақ бойынша қонақтарға тегін Wi-Fi.",
    amenity2_title: "Грузин асханасы",
    amenity2_desc: "Аумақтағы грузин асханасы кафесі, асхана 22:00-ге дейін жұмыс істейді.",
    amenity3_title: "Монша және шан",
    amenity3_desc: "Бу бөлмесі мен шаны бар орыс отын моншасы, сүлгілер мен гигиеналық құралдар.",
    amenity4_title: "Мангал аймағы",
    amenity4_desc: "Мангал мен отыны бар аймақтар — тұру құнына кіреді.",
    amenity5_title: "Тұрақ",
    amenity5_desc: "База аумағында қонақтарға арналған тегін автотұрақ.",
    amenity6_title: "Таңғы ас кіреді",
    amenity6_desc: "Барнхаус пен шатыр қонақтары үшін таңғы ас құнға кіреді.",
    amenity7_title: "Көл және балық аулау",
    amenity7_desc: "Щучье көліне тікелей шығу — үй жанында жүзу және балық аулау.",
    amenity8_title: "Жазғы терраса",
    amenity8_desc: "Ашық ауада демалу және тамақтану үшін күн шатырлары астындағы терраса.",

    gallery_eyebrow: "Галерея",
    gallery_title: "Ұзағырақ қалғың келетін орын",

    why_eyebrow: "Неге бізді таңдайды",
    why_title: "Табиғат пен жайлылық бір жерде",
    why1_title: "Көлдің тікелей жағалауы",
    why1_desc: "Аумақ Щучье көлінің оңтүстік-батыс жағалауында орналасқан — суға дейін бірнеше қадам.",
    why2_title: "Нағыз отын моншасы",
    why2_desc: "Орыс бу бөлмесі мен шан — табиғатта өткізген күннен кейінгі классикалық демалыс рәсімі.",
    why3_title: "Аумақтағы грузин асханасы",
    why3_desc: "Кешкі ас үшін ешжерге барудың қажеті жоқ — асхана база аумағында жұмыс істейді.",
    why4_title: "Жеке барнхаустар",
    why4_desc: "Әр үй қарағайлар арасында жасырынған — шулы кемпинг орнына тыныштық пен жекелік.",

    cta_title: "Келесі демалысқа дайынсыз ба?",
    cta_button: "WhatsApp-қа жазу",

    faq_eyebrow: "Сұрақтар",
    faq_title: "Жиі қойылатын сұрақтар",
    faq1_q: "Eco Glamping Burabay-ге қалай жетуге болады?",
    faq1_a: "Біз Щучье көлінің оңтүстік-батыс жағалауында, 2а мекенжайында, Щучинскіге жақын, Ақмола облысында орналасқанбыз. Нақты бағытты төмендегі картадан немесе 2GIS-тен қараңыз.",
    faq2_q: "Тұру құнына не кіреді?",
    faq2_a: "Барлық барнхаустар мен сафари-шатырларда тұру құнына таңғы ас пен мангал аймағын пайдалану кіреді.",
    faq3_q: "Моншаны бөлек брондауға бола ма?",
    faq3_a: "Иә, шаны жоқ отын моншасын бөлек брондауға болады, ең аз жалдау мерзімі — 2 сағат, сыйымдылығы — 6 адамға дейін.",
    faq4_q: "Асхана қай уақытқа дейін жұмыс істейді?",
    faq4_a: "Аумақтағы грузин асханасы 22:00-ге дейін жұмыс істейді. Демалыс базасының өзі тәулік бойы ашық.",
    faq5_q: "Үйді қалай брондауға болады?",
    faq5_a: "Ең оңайы — бізге WhatsApp немесе Instagram арқылы жазу, немесе көрсетілген телефон нөміріне қоңырау шалу.",

    contact_eyebrow: "Байланыс",
    contact_title: "Бізбен байланысыңыз",
    contact_lead: "Бізге тікелей WhatsApp немесе Instagram арқылы жазыңыз, қоңырау шалыңыз — немесе картадан тауып алыңыз.",
    contact_address_label: "Мекенжай",
    contact_phone_label: "Телефон",
    contact_whatsapp_label: "WhatsApp",
    contact_instagram_label: "Instagram",
    contact_hours_label: "Жұмыс уақыты",
    contact_hours_value: "Аумақ — тәулік бойы, асхана — 22:00-ге дейін",
    map_2gis_btn: "2GIS-те ашу",


    footer_tagline: "Щучье көлінде глэмпинг және барнхаустар, Бурабай",
    footer_rights: "Барлық құқықтар қорғалған."
  },

  en: {
    meta_title: "Eco Glamping Burabay — Glamping at Lake Shchuchye, Burabay",
    meta_description: "Eco Glamping Burabay — cozy barnhouses and glamping on the southwest shore of Lake Shchuchye: Georgian restaurant, wood-fired banya with hot tub, beach and outdoor activities in Burabay.",

    nav_about: "About",
    nav_accommodation: "Accommodation",
    nav_amenities: "Amenities",
    nav_gallery: "Gallery",
    nav_why: "Why Us",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_book: "Book Now",

    hero_eyebrow: "Lake Shchuchye · Burabay · Kazakhstan",
    hero_title: "Forest silence.<br>Warmth of wood.<br>Light of the lake.",
    hero_subtitle: "Eco Glamping Burabay — barnhouses and safari tents on the southwest shore of Lake Shchuchye, a wood-fired banya and a Georgian restaurant among the pines.",
    hero_cta_primary: "View Accommodation",
    hero_cta_secondary: "Message on WhatsApp",

    about_eyebrow: "About the Place",
    about_title: "A small forest hideaway on the shore of Lake Shchuchye",
    about_p1: "Eco Glamping Burabay is a retreat on the southwest shore of Lake Shchuchye, near Burabay and Shchuchinsk. We built a collection of stylish barnhouses and safari tents among the pines so guests can combine comfort with real nature.",
    about_p2: "On site: a wood-fired banya with a hot tub, a Georgian restaurant, a summer terrace under umbrellas, BBQ areas and direct lake access for swimming and fishing. The kitchen is open until 22:00, and the property itself is open around the clock.",
    about_stat1: "types of accommodation",
    about_stat2: "the property is open",
    about_stat3: "Instagram followers",

    acc_eyebrow: "Accommodation",
    acc_title: "Choose your cabin among the pines",
    acc_subtitle: "Barnhouses with panoramic windows and safari tents — for couples, families and small groups.",
    acc_badge_forest: "Forest view",
    acc_badge_lake: "Lake view",
    acc1_title: "2-Person Barnhouse",
    acc1_guests: "2 guests",
    acc1_desc: "[Accommodation description] A cozy barnhouse with a terrace, a double bed and a panoramic window facing the forest.",
    acc2_title: "4-Person Barnhouse",
    acc2_guests: "4 guests",
    acc2_desc: "[Accommodation description] A spacious barnhouse with a sofa bed, a mini-bar and its own tea station.",
    acc3_title: "2-Person Barnhouse",
    acc3_guests: "2 guests",
    acc3_desc: "[Accommodation description] A barnhouse with a lake view right from the window — perfect for sunrises and sunsets.",
    acc4_title: "Safari Tent",
    acc4_guests: "up to 5 guests",
    acc4_desc: "Sleeping space for 5, a dining table, bedding and a full set of hygiene essentials.",
    acc_cta: "Book Now",
    acc_note: "Breakfast and use of the BBQ area are included in the accommodation price.",
    price_weekday: "Sun–Fri",
    price_weekend: "Sat & public holidays",
    price_weekday_short: "weekdays",
    price_weekend_short: "weekends",
    price_night: "night",
    price_hour: "hour",

    banya_eyebrow: "Separately",
    banya_title: "Wood-Fired Banya (no tub)",
    banya_li1: "Minimum rental — 2 hours",
    banya_li2: "Maximum capacity — 6 people",
    banya_li3: "Steam room fits up to 4 people",

    amenities_eyebrow: "Amenities",
    amenities_title: "Everything for a comfortable stay in nature",
    amenity1_title: "Wi-Fi",
    amenity1_desc: "Free Wi-Fi for guests across the property.",
    amenity2_title: "Georgian Restaurant",
    amenity2_desc: "An on-site Georgian cuisine café, kitchen open until 22:00.",
    amenity3_title: "Banya & Hot Tub",
    amenity3_desc: "Wood-fired Russian banya with a steam room and hot tub, towels and hygiene essentials provided.",
    amenity4_title: "BBQ Area",
    amenity4_desc: "BBQ areas with firewood — included in the accommodation price.",
    amenity5_title: "Parking",
    amenity5_desc: "Free parking for guests on the property.",
    amenity6_title: "Breakfast Included",
    amenity6_desc: "Breakfast is included for barnhouse and tent guests.",
    amenity7_title: "Lake & Fishing",
    amenity7_desc: "Direct access to Lake Shchuchye — swimming and fishing right by your cabin.",
    amenity8_title: "Summer Terrace",
    amenity8_desc: "A terrace under umbrellas for relaxing and dining outdoors.",

    gallery_eyebrow: "Gallery",
    gallery_title: "A place you'll want to stay longer",

    why_eyebrow: "Why Choose Us",
    why_title: "Nature and comfort in one place",
    why1_title: "Right on the lakeshore",
    why1_desc: "The property sits on the southwest shore of Lake Shchuchye — the water is just steps away.",
    why2_title: "A real wood-fired banya",
    why2_desc: "A Russian steam room and hot tub — the classic ritual after a day outdoors.",
    why3_title: "Georgian cuisine on site",
    why3_desc: "No need to go anywhere for dinner — the restaurant is right on the property.",
    why4_title: "Private barnhouses",
    why4_desc: "Every cabin is tucked among the pines — quiet and private instead of a crowded campsite.",

    cta_title: "Ready for your next rest?",
    cta_button: "Contact us on WhatsApp",

    faq_eyebrow: "FAQ",
    faq_title: "Frequently Asked Questions",
    faq1_q: "How do I get to Eco Glamping Burabay?",
    faq1_a: "We're located on the southwest shore of Lake Shchuchye, 2a, near Shchuchinsk, Akmola region. See the exact route on the map below or in 2GIS.",
    faq2_q: "What's included in the accommodation price?",
    faq2_a: "Breakfast and use of the BBQ area are included in the price for all barnhouses and safari tents.",
    faq3_q: "Can I book the banya separately?",
    faq3_a: "Yes, the wood-fired banya without a tub can be booked separately; minimum rental is 2 hours, capacity up to 6 people.",
    faq4_q: "Until what time is the restaurant open?",
    faq4_a: "The on-site Georgian restaurant's kitchen is open until 22:00. The property itself is open around the clock.",
    faq5_q: "How do I book a cabin?",
    faq5_a: "The easiest way is to message us on WhatsApp or Instagram, or call the phone number listed.",

    contact_eyebrow: "Contact",
    contact_title: "Get in touch",
    contact_lead: "Message us directly on WhatsApp or Instagram, give us a call — or find us on the map.",
    contact_address_label: "Address",
    contact_phone_label: "Phone",
    contact_whatsapp_label: "WhatsApp",
    contact_instagram_label: "Instagram",
    contact_hours_label: "Working Hours",
    contact_hours_value: "Property — 24/7, restaurant — until 22:00",
    map_2gis_btn: "Open in 2GIS",


    footer_tagline: "Glamping and barnhouses at Lake Shchuchye, Burabay",
    footer_rights: "All rights reserved."
  }
};

/* -------------------------------------------------------------------------
   2. I18N ENGINE
   ------------------------------------------------------------------------- */
const I18N_STORAGE_KEY = "ecoGlampingLang";
const SUPPORTED_LANGS = ["ru", "kk", "en"];

function getStoredLang() {
  const stored = localStorage.getItem(I18N_STORAGE_KEY);
  return SUPPORTED_LANGS.includes(stored) ? stored : "ru";
}

function applyLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = "ru";
  const dict = translations[lang];

  // Text content
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Attribute translations, format: data-i18n-attr="attrName:key"
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const parts = el.getAttribute("data-i18n-attr").split(":");
    const attrName = parts[0];
    const key = parts[1];
    if (dict[key] !== undefined) {
      el.setAttribute(attrName, dict[key]);
    }
  });

  // Document-level updates
  document.documentElement.lang = lang;
  if (dict.meta_title) document.title = dict.meta_title;

  // Active button state
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  localStorage.setItem(I18N_STORAGE_KEY, lang);
}

/* -------------------------------------------------------------------------
   3. UI INTERACTIONS
   ------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {

  /* --- Restore & wire up language switcher --- */
  applyLanguage(getStoredLang());

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.getAttribute("data-lang"));
    });
  });

  /* --- Loading screen --- */
  const loader = document.getElementById("loader");
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("hide"), 400);
  });
  // Fallback in case 'load' already fired
  if (document.readyState === "complete") {
    setTimeout(() => loader.classList.add("hide"), 400);
  }

  /* --- Sticky header shadow on scroll --- */
  const header = document.getElementById("siteHeader");
  const backToTop = document.getElementById("backToTop");
  function onScroll() {
    const scrolled = window.scrollY > 30;
    header.classList.toggle("scrolled", scrolled);
    backToTop.classList.toggle("show", window.scrollY > 500);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* --- Mobile navigation --- */
  const burger = document.getElementById("burgerBtn");
  const mainNav = document.getElementById("mainNav");
  const overlay = document.getElementById("mobileNavOverlay");

  function closeMobileNav() {
    burger.classList.remove("active");
    mainNav.classList.remove("active");
    overlay.classList.remove("active");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  function openMobileNav() {
    burger.classList.add("active");
    mainNav.classList.add("active");
    overlay.classList.add("active");
    burger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  burger.addEventListener("click", () => {
    mainNav.classList.contains("active") ? closeMobileNav() : openMobileNav();
  });
  overlay.addEventListener("click", closeMobileNav);
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });

  /* --- FAQ accordion --- */
  document.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      document.querySelectorAll(".faq-item").forEach((i) => {
        i.classList.remove("active");
        i.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });
      if (!isActive) {
        item.classList.add("active");
        question.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* --- Scroll reveal animations --- */
  const revealTargets = document.querySelectorAll(
    ".about-text, .about-media, .acc-card, .amenity, .gallery-item, .why-list li, .why-media, .faq-item, .contact-info, .cta-content, .banya-block, .section-title, .section-sub"
  );
  revealTargets.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );
  revealTargets.forEach((el) => observer.observe(el));

  /* --- Footer year --- */
  document.getElementById("year").textContent = new Date().getFullYear();
});
