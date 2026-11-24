export type Language = 'RU' | 'KZ' | 'EN'

export interface TranslationSchema {
  header: {
    subtitle: string
    nav: {
      platform: string
      features: string
      scenarios: string
      faq: string
    }
    requestDemo: string
  }
  hero: {
    words: string[]
    subtitle: string
    description: string
    downloadApp: string
    requestDemo: string
    patientsCount: string
    grants: {
      presidential: string
      healthMinistry: string
      cardioAssoc: string
      asfendiyarov: string
    }
  }
  marquee: string
  mission: {
    solutionTitle: string
    solutionText: string
    goalTitle: string
    goalText: string
  }
  promo: {
    title: string
    watchButton: string
  }
  stats: {
    title: string
    description: string
    item1: string
    item2: string
    item3: string
    item4: string
  }
  founder: {
    name: string
    title: string
    quote: string
  }
  products: {
    doctorTitle: string
    doctorSpan: string
    doctorText: string
    doctorBtn: string
    patientTitle: string
    patientSpan: string
    patientText: string
  }
  faq: {
    title: string
    items: Array<{ id: number; title: string; content: string }>
  }
  news: {
    title: string
    subtitle: string
    items: Array<{ id: number; title: string }>
  }
  contactBanner: {
    title: string
  }
  footer: {
    subtitle: string
    description: string
    sections: string
    contacts: string
    address: string
    rights: string
    documents: string
    privacyPolicy: string
    publicOffer: string
  }
  modal: {
    title: string
    description: string
    clinicRole: string
    patientRole: string
    namePlaceholder: string
    phonePlaceholder: string
    contextPlaceholder: string
    consentText: string
    submitBtn: string
    submitting: string
    successTitle: string
    successSubtitle: string
    detailsTitle: string
    organizationLabel: string
    roleLabel: string
    phoneLabel: string
    contextLabel: string
    closeBtn: string
    error: string
  }
}

export const translations: Record<Language, TranslationSchema> = {
  RU: {
    header: {
      subtitle: 'Digital chronic care platform',
      nav: {
        platform: 'Платформа',
        features: 'Возможности',
        scenarios: 'Сценарии',
        faq: 'FAQ',
      },
      requestDemo: 'Запросить демо',
    },
    hero: {
      words: ['AI', 'ПУЗ', 'Health', 'Мониторинг', 'Аналитика', 'ПМСП', 'Поддержка', 'Контроль'],
      subtitle: 'Цифровая платформа для пациента и медицинской организации',
      description: 'qMed AI помогает пациенту быть под наблюдением каждый день, а медицинской организации – раньше видеть риски и вовремя реагировать.',
      downloadApp: 'Скачать приложение',
      requestDemo: 'Запросить демо-версию',
      patientsCount: 'пациентов уже с нами',
      grants: {
        presidential: 'Президентский грант',
        healthMinistry: 'Министерство здравоохранения РК',
        cardioAssoc: 'Ассоциация кардиологов РК',
        asfendiyarov: 'КазНМУ им. Асфендиярова',
      },
    },
    marquee: 'Ежедневный самоконтроль пациента • Сигналы риска и очередь внимания • ЗОЖ-кабинеты: курение, алкоголь, питание, активность • Аналитика для медицинской команды • ',
    mission: {
      solutionTitle: 'Решение',
      solutionText: 'Платформа открывает доступ пациентам по самоконтролю хронических неинфекционных заболеваний ХСН, АГ, СД и облегчает взаимодействие с медицинским персоналом.',
      goalTitle: 'Наша цель',
      goalText: 'Внедрить систему, которая позволит пациентам эффективно самоконтролировать заболевание, тем самым предотвращая его прогрессирование и снижая количество госпитализаций и смертности.',
    },
    promo: {
      title: 'Промо-видео о платформе qMed AI',
      watchButton: 'Смотреть промо-видео',
    },
    stats: {
      title: 'Эффект для программы',
      description: 'qMed AI делает хроническое наблюдение быстрее, прозрачнее и управляемее: данные → риск → очередь внимания → действие → результат.',
      item1: 'ежедневных ответов автоматически распределяются по зонам риска',
      item2: 'быстрее команда находит пациентов для приоритетного контакта',
      item3: 'меньше ручной рутины у координаторов и медперсонала',
      item4: 'мониторинг статусов пациентов и динамики программы',
    },
    founder: {
      name: 'Нұрлан Биімбет',
      title: 'Founder & CEO, qMed AI',
      quote: '«Мы создаем цифровую телемедицинскую экосистему, которая помогает клиникам оптимизировать процессы, врачам – раскрыть свой потенциал, а пациентам – получать качественную и своевременную помощь.»',
    },
    products: {
      doctorTitle: 'Платформа для ',
      doctorSpan: 'врача',
      doctorText: 'Единая цифровая среда наблюдения: структурированная картина состояния пациентов между визитами, сигналы риска, очередь внимания и аналитика по охвату, участкам и врачам — вместо разрозненных таблиц, чатов и звонков.',
      doctorBtn: 'Обсудить внедрение',
      patientTitle: 'Приложение для ',
      patientSpan: 'пациента',
      patientText: 'Понятный ежедневный маршрут: короткие чек-ины, самоконтроль показателей, напоминания и ЗОЖ-кабинеты — курение, алкоголь, питание, активность и эмоциональное здоровье. Пациент не остаётся один между визитами.',
    },
    faq: {
      title: 'Частые вопросы',
      items: [
        {
          id: 1,
          title: 'Для кого предназначен qMed AI?',
          content: 'Для пациентов с хроническими заболеваниями (АГ, ХСН, СД), врачей поликлиник, центров ПМСП, частных клиник, программ управления заболеваниями, корпоративных программ здоровья и региональных проектов диспансерного наблюдения.',
        },
        {
          id: 2,
          title: 'Что получает пациент?',
          content: 'Понятный ежедневный маршрут: чек-ины, напоминания, самоконтроль показателей и сопровождение между визитами. Плюс ЗОЖ-кабинеты — курение, алкоголь, питание, физическая активность и эмоциональное здоровье.',
        },
        {
          id: 3,
          title: 'Что получает врач и поликлиника?',
          content: 'Структурированную картину состояния пациента между визитами, понятные статусы (стабильно / нужно внимание / приоритетно), очередь внимания и аналитику по пациентам, участкам и врачам вместо разрозненных таблиц и звонков.',
        },
        {
          id: 4,
          title: 'Заменяет ли qMed AI врача?',
          content: 'Нет. Платформа не ставит диагноз вместо специалиста. Она помогает пациенту регулярно передавать данные, а врачу — раньше видеть важные изменения и принимать решения на основе более полной картины.',
        },
        {
          id: 5,
          title: 'Насколько быстро можно начать пилот?',
          content: 'Пилот можно начать с компактного сценария: одна группа пациентов, нозология, частота чек-инов, роли и формат реакции врача. Сложная интеграция для старта не обязательна — контур расширяется по мере развития проекта.',
        },
      ],
    },
    news: {
      title: 'СМИ о ',
      subtitle: 'Публикации, интервью и новости о развитии платформы',
      items: [
        { id: 1, title: 'Итоги Astana Smart City: топ-10 стартапов, улучшающих жизнь столицы' },
        { id: 2, title: 'Проект «Тәуелсіздік ұрпақтары» внедряют в поликлиниках страны' },
        { id: 4, title: 'В Алматы представили медицинские технологии для коммерциализации' },
        { id: 5, title: 'Казахстанские стартапы стали победителями гранд-финала Digital Startup Awards' },
      ],
    },
    contactBanner: {
      title: 'Узнайте, как qMed AI поможет вам или вашей организации',
    },
    footer: {
      subtitle: 'Digital chronic care platform',
      description: 'Цифровая платформа для хронического наблюдения, самоконтроля пациентов, приоритизации рисков и управляемой работы медицинской команды.',
      sections: 'Разделы',
      contacts: 'Контакты',
      address: 'Алматы, Кабдолова 22Б',
      rights: '© qMed AI 2026 · ТОО «qBots»',
      documents: 'Документы',
      privacyPolicy: 'Политика конфиденциальности',
      publicOffer: 'Публичная оферта',
    },
    modal: {
      title: 'Связаться с нами',
      description: 'Оставьте контакт — поможем подобрать формат: для пациента, поликлиники, программы наблюдения или пилотного проекта.',
      clinicRole: 'Клиника',
      patientRole: 'Пациент',
      namePlaceholder: 'Организация / ФИО',
      phonePlaceholder: 'Телефон',
      contextPlaceholder: 'Кратко: кто вы и какой вопрос хотите обсудить',
      consentText: 'Нажимая кнопку, я даю согласие на сбор и обработку персональных данных',
      submitBtn: 'Отправить запрос',
      submitting: 'Отправка...',
      successTitle: 'Заявка принята!',
      successSubtitle: 'Спасибо за обращение. Наш менеджер свяжется с вами в ближайшее время.',
      detailsTitle: 'Детали заявки:',
      organizationLabel: 'Организация',
      roleLabel: 'Роль',
      phoneLabel: 'Телефон',
      contextLabel: 'Запрос',
      closeBtn: 'Понятно, закрыть',
      error: 'Не удалось отправить заявку. Попробуйте ещё раз.',
    },
  },
  KZ: {
    header: {
      subtitle: 'Созылмалы ауруларды бақылаудың цифрлық платформасы',
      nav: {
        platform: 'Платформа',
        features: 'Мүмкіндіктер',
        scenarios: 'Сценарийлер',
        faq: 'Сұрақ-жауап',
      },
      requestDemo: 'Демо сұрау',
    },
    hero: {
      words: ['AI', 'АББ', 'Health', 'Мониторинг', 'Аналитика', 'МСАК', 'Қолдау', 'Бақылау'],
      subtitle: 'Пациент пен медициналық ұйымға арналған цифрлық платформа',
      description: 'qMed AI пациентке күнделікті бақылауда болуға, ал медициналық ұйымға – тәуекелдерді ертерек көріп, уақытылы әрекет етуге көмектеседі.',
      downloadApp: 'Қолданбаны жүктеу',
      requestDemo: 'Демо-нұсқаны сұрау',
      patientsCount: 'пациент бізбен бірге',
      grants: {
        presidential: 'Президенттік грант',
        healthMinistry: 'ҚР Денсаулық сақтау министрлігі',
        cardioAssoc: 'ҚР Кардиологтар қауымдастығы',
        asfendiyarov: 'С.Д. Асфендияров атындағы ҚазҰМУ',
      },
    },
    marquee: 'Пациенттің күнделікті өзін-өзі бақылауы • Тәуекел сигналдары мен назар кезегі • СӨС-кабинеттер: темекі шегу, алкоголь, тамақтану, белсенділік • Медициналық топқа арналған аналитика • ',
    mission: {
      solutionTitle: 'Шешім',
      solutionText: 'Платформа созылмалы жұқпалы емес аурулары (СЖЖ, АГ, ҚД) бар пациенттерге өзін-өзі бақылау мүмкіндігін ашады және медициналық персоналмен өзара әрекеттесуді жеңілдетеді.',
      goalTitle: 'Біздің мақсатымыз',
      goalText: 'Пациенттерге ауруды тиімді өзін-өзі бақылауға мүмкіндік беретін жүйені енгізу, осылайша оның өршуінің алдын алу, госпитализациялар мен өлім-жітім санын азайту.',
    },
    promo: {
      title: 'qMed AI платформасы туралы промо-бейне',
      watchButton: 'Промо-бейнені қарау',
    },
    stats: {
      title: 'Бағдарлама үшін тиімділік',
      description: 'qMed AI созылмалы бақылауды жылдам, ашық және басқарылатын етеді: деректер → тәуекел → назар кезегі → әрекет → нәтиже.',
      item1: 'күнделікті жауаптар автоматты түрде тәуекел аймақтары бойынша бөлінеді',
      item2: 'басымдық контактісі үшін топ пациенттерді жылдам табады',
      item3: 'координаторлар мен медперсоналда қолмен істелетін жұмыс азайды',
      item4: 'пациенттер мәртебесін және бағдарлама динамикасын бақылау',
    },
    founder: {
      name: 'Нұрлан Биімбет',
      title: 'Founder & CEO, qMed AI',
      quote: '«Біз клиникаларға процестерді оңтайландыруға, дәрігерлерге — өз әлеуетін ашуға, ал пациенттерге — сапалы әрі уақытылы көмек алуға көмектесетін цифрлық телемедициналық экожүйені құрамыз.»',
    },
    products: {
      doctorTitle: 'Дәрігерге арналған ',
      doctorSpan: 'платформа',
      doctorText: 'Кездесулер арасындағы бақылаудың бірыңғай цифрлық ортасы: шашыраңқы кестелер, чаттар мен қоңыраулардың орнына пациенттер жағдайының құрылымдық бейнесі, тәуекел сигналдары, назар кезегі және қамту, учаскелер мен дәрігерлер бойынша аналитика.',
      doctorBtn: 'Енгізуді талқылау',
      patientTitle: 'Пациентке арналған ',
      patientSpan: 'қолданба',
      patientText: 'Түсінікті күнделікті бағыт: қысқа чек-индер, көрсеткіштерді өзін-өзі бақылау, еске салулар және СӨС-кабинеттер — темекі шегу, алкоголь, тамақтану, белсенділік және эмоционалды денсаулық. Пациент кездесулер арасында жалғыз қалмайды.',
    },
    faq: {
      title: 'Жиі қойылатын сұрақтар',
      items: [
        {
          id: 1,
          title: 'qMed AI кімге арналған?',
          content: 'Созылмалы аурулары бар пациенттерге (АГ, СЖЖ, ҚД), емхана дәрігерлеріне, МСАК орталықтарына, жеке клиникаларға, ауруларды басқару бағдарламаларына және диспансерлік бақылаудың өңірлік жобаларына арналған.',
        },
        {
          id: 2,
          title: 'Пациент не алады?',
          content: 'Түсінікті күнделікті маршрут: чек-индер, еске салулар, көрсеткіштерді өзін-өзі бақылау және кездесулер арасындағы сүйемелдеу. Сонымен қатар СӨС-кабинеттер — темекі шегу, алкоголь, тамақтану, дене белсенділігі және эмоционалды денсаулық.',
        },
        {
          id: 3,
          title: 'Дәрігер мен емхана не алады?',
          content: 'Шашыраңқы кестелер мен қоңыраулардың орнына кездесулер арасындағы пациент жағдайының құрылымдық суретін, түсінікті мәртебелерді (тұрақты / назар аудару керек / басым), назар кезегін және пациенттер, учаскелер мен дәрігерлер бойынша аналитиканы алады.',
        },
        {
          id: 4,
          title: 'qMed AI дәрігерді алмастыра ма?',
          content: 'Жоқ. Платформа маманның орнына диагноз қоймайды. Ол пациентке деректерді жүйелі түрде беруге, ал дәрігерге — маңызды өзгерістерді ерте көріп, толығырақ бейне негізінде шешім қабылдауға көмектеседі.',
        },
        {
          id: 5,
          title: 'Пилотты қаншалықты жылдам бастауға болады?',
          content: 'Пилотты ғылыми-тәжірибелік ықшам сценарийден бастауға болады: пациенттердің бір тобы, нозология, чек-индер жиілігі, рөлдер мен дәрігердің реакция форматы. Бастау үшін күрделі интеграция міндетті емес — жобаның дамуына қарай контур кеңейтіледі.',
        },
      ],
    },
    news: {
      title: 'БҰҚ qMed AI ',
      subtitle: 'Платформаның дамуы туралы жарияланымдар, сұхбаттар мен жаңалықтар',
      items: [
        { id: 1, title: 'Astana Smart City қорытындысы: елорда өмірін жақсартатын топ-10 стартап' },
        { id: 2, title: '«Тәуелсіздік ұрпақтары» жобасы ел емханаларында енгізілуде' },
        { id: 4, title: 'Алматыда коммерцияландыруға арналған медициналық технологиялар таныстырылды' },
        { id: 5, title: 'Қазақстандық стартаптар Digital Startup Awards гранд-финалының жеңімпаздары атанды' },
      ],
    },
    contactBanner: {
      title: 'qMed AI сізге немесе ұйымыңызға қалай көмектесетінін біліңіз',
    },
    footer: {
      subtitle: 'Созылмалы ауруларды бақылаудың цифрлық платформасы',
      description: 'Созылмалы бақылау, пациенттердің өзін-өзі бақылауы, тәуекелдерді басымдыққа алу және медициналық топтың басқарылатын жұмысына арналған цифрлық платформа.',
      sections: 'Бөлімдер',
      contacts: 'Байланыстар',
      address: 'Алматы, Қабдолов 22Б',
      rights: '© qMed AI 2026 · «qBots» ЖШС',
      documents: 'Құжаттар',
      privacyPolicy: 'Құпиялық саясаты',
      publicOffer: 'Жария оферта',
    },
    modal: {
      title: 'Бізбен байланысу',
      description: 'Байланысыңызды қалдырыңыз — форматты таңдауға көмектесеміз: пациентке, емханаға, бақылау бағдарламасына немесе пилоттық жобаға.',
      clinicRole: 'Клиника',
      patientRole: 'Пациент',
      namePlaceholder: 'Ұйым / Т.А.Ә.',
      phonePlaceholder: 'Телефон',
      contextPlaceholder: 'Қысқаша: сіз кемсіз және қандай сұрақты талқылағыңыз келеді',
      consentText: 'Түймені басу арқылы мен жеке деректерді жинауға және өңдеуге келісім беремін',
      submitBtn: 'Сұранымды жіберу',
      submitting: 'Жіберілуде...',
      successTitle: 'Өтінім қабылданды!',
      successSubtitle: 'Өтінішіңізге рақмет. Менеджеріміз жақын арада сізбен хабарласады.',
      detailsTitle: 'Өтінім мәліметтері:',
      organizationLabel: 'Ұйым',
      roleLabel: 'Рөлі',
      phoneLabel: 'Телефон',
      contextLabel: 'Сұраным',
      closeBtn: 'Түсінікті, жабу',
      error: 'Өтінімді жіберу мүмкін болмады. Қайталап көріңіз.',
    },
  },
  EN: {
    header: {
      subtitle: 'Digital chronic care platform',
      nav: {
        platform: 'Platform',
        features: 'Features',
        scenarios: 'Scenarios',
        faq: 'FAQ',
      },
      requestDemo: 'Request a demo',
    },
    hero: {
      words: ['AI', 'DMP', 'Health', 'Monitoring', 'Analytics', 'PHC', 'Support', 'Control'],
      subtitle: 'Digital platform for patients and healthcare organizations',
      description: 'qMed AI helps patients stay monitored every day, while enabling healthcare organizations to detect risks early and respond in time.',
      downloadApp: 'Download app',
      requestDemo: 'Request a demo',
      patientsCount: 'patients already with us',
      grants: {
        presidential: 'Presidential Grant',
        healthMinistry: 'Ministry of Healthcare of the RK',
        cardioAssoc: 'Association of Cardiologists of the RK',
        asfendiyarov: 'Asfendiyarov KazNMU',
      },
    },
    marquee: 'Daily patient self-monitoring • Risk signals & attention queue • Healthy lifestyle hubs: smoking, alcohol, nutrition, activity • Analytics for the medical team • ',
    mission: {
      solutionTitle: 'Solution',
      solutionText: 'The platform gives patients access to self-monitoring for chronic non-communicable diseases (CHF, HTN, DM) and streamlines interaction with medical staff.',
      goalTitle: 'Our Goal',
      goalText: 'To implement a system that empowers patients to effectively self-manage their condition, preventing disease progression and reducing hospitalizations and mortality.',
    },
    promo: {
      title: 'Promo video about the qMed AI platform',
      watchButton: 'Watch promo video',
    },
    stats: {
      title: 'Program Impact',
      description: 'qMed AI makes chronic care faster, more transparent, and manageable: data → risk → attention queue → action → result.',
      item1: 'of daily responses are automatically sorted by risk zones',
      item2: 'faster identification of patients for priority contact',
      item3: 'less manual routine for coordinators and medical staff',
      item4: 'monitoring of patient statuses and program dynamics',
    },
    founder: {
      name: 'Nurlan Biimbet',
      title: 'Founder & CEO, qMed AI',
      quote: '“We are building a digital telemedicine ecosystem that helps clinics optimize processes, empowers doctors to unlock their potential, and enables patients to receive timely, high-quality care.”',
    },
    products: {
      doctorTitle: 'Platform for ',
      doctorSpan: 'doctors',
      doctorText: 'A unified digital care environment: a structured view of patient health between visits, risk signals, an attention queue, and analytics across coverage, districts, and doctors — instead of scattered spreadsheets, chats, and calls.',
      doctorBtn: 'Discuss implementation',
      patientTitle: 'App for ',
      patientSpan: 'patients',
      patientText: 'A clear daily routine: short check-ins, vital sign self-monitoring, reminders, and healthy lifestyle hubs — smoking, alcohol, nutrition, physical activity, and mental wellbeing. Patients are never left alone between visits.',
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          id: 1,
          title: 'Who is qMed AI designed for?',
          content: 'For patients with chronic conditions (HTN, CHF, DM), polyclinic doctors, primary healthcare centers (PHC), private clinics, disease management programs (DMP), corporate wellness programs, and regional outpatient monitoring projects.',
        },
        {
          id: 2,
          title: 'What does the patient get?',
          content: 'A clear daily pathway: check-ins, reminders, self-monitoring of health metrics, and support between visits. Plus healthy lifestyle hubs covering smoking, alcohol, nutrition, physical activity, and emotional health.',
        },
        {
          id: 3,
          title: 'What do doctors and clinics get?',
          content: 'A structured overview of patient status between visits, clear risk statuses (stable / needs attention / priority), an attention queue, and analytics across patients, districts, and doctors instead of fragmented spreadsheets and calls.',
        },
        {
          id: 4,
          title: 'Does qMed AI replace a doctor?',
          content: 'No. The platform does not diagnose conditions in place of a specialist. It helps patients submit data regularly and enables doctors to spot critical changes earlier and make informed decisions based on a fuller clinical picture.',
        },
        {
          id: 5,
          title: 'How quickly can a pilot be launched?',
          content: 'A pilot can start with a compact scenario: a single patient group, condition, check-in frequency, team roles, and doctor response workflow. Complex integration is not required to start — the scope expands as the project grows.',
        },
      ],
    },
    news: {
      title: 'Media about ',
      subtitle: 'Publications, interviews, and news about the platform’s development',
      items: [
        { id: 1, title: 'Astana Smart City Results: Top 10 Startups Improving Capital Life' },
        { id: 2, title: '“Tauelsizdik Urpaqtary” Project Implemented in Clinics Nationwide' },
        { id: 4, title: 'Medical Technologies for Commercialization Presented in Almaty' },
        { id: 5, title: 'Kazakhstani Startups Win the Grand Final of Digital Startup Awards' },
      ],
    },
    contactBanner: {
      title: 'Discover how qMed AI can help you or your organization',
    },
    footer: {
      subtitle: 'Digital chronic care platform',
      description: 'Digital platform for chronic care monitoring, patient self-management, risk prioritization, and coordinated medical team workflows.',
      sections: 'Sections',
      contacts: 'Contacts',
      address: 'Almaty, Kabdolov St. 22B',
      rights: '© qMed AI 2026 · qBots LLP',
      documents: 'Documents',
      privacyPolicy: 'Privacy Policy',
      publicOffer: 'Public Offer',
    },
    modal: {
      title: 'Contact Us',
      description: 'Leave your contact details — we will help find the right format for a patient, clinic, monitoring program, or pilot project.',
      clinicRole: 'Clinic',
      patientRole: 'Patient',
      namePlaceholder: 'Organization / Full Name',
      phonePlaceholder: 'Phone number',
      contextPlaceholder: 'Briefly: who you are and what you would like to discuss',
      consentText: 'By clicking the button, I consent to the collection and processing of personal data',
      submitBtn: 'Send request',
      submitting: 'Sending...',
      successTitle: 'Request received!',
      successSubtitle: 'Thank you for reaching out. Our manager will contact you shortly.',
      detailsTitle: 'Request details:',
      organizationLabel: 'Organization',
      roleLabel: 'Role',
      phoneLabel: 'Phone',
      contextLabel: 'Inquiry',
      closeBtn: 'Got it, close',
      error: 'Failed to send request. Please try again.',
    },
  },
}
