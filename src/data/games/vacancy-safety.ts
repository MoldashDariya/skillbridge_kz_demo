import type { VacancyScenario } from "@/types/games";

/**
 * DEMO CONTENT — replaceable. Fictional companies only.
 * Exactly 3 safe, exactly 3 risky, in a shuffled-feeling but stable order.
 */
export const VACANCY_SCENARIOS: VacancyScenario[] = [
  {
    id: "v1",
    order: 1,
    title: { kk: "SMM-менеджер", ru: "SMM-менеджер", en: "SMM manager" },
    company: { kk: "Bright Media Agency", ru: "Bright Media Agency", en: "Bright Media Agency" },
    location: { kk: "Алматы, қашықтан", ru: "Алматы, удалённо", en: "Almaty, remote" },
    workFormat: { kk: "Қашықтан, икемді кесте", ru: "Удалённо, гибкий график", en: "Remote, flexible schedule" },
    salary: { kk: "Қолға 350 000 – 450 000 ₸", ru: "350 000 – 450 000 ₸ на руки", en: "350,000 – 450,000 ₸ net" },
    description: {
      kk: "Instagram мен Telegram-дағы бірнеше аккаунтты жүргізу үшін белсенді SMM-менеджер іздейміз. Нөлден оқыту, ақы күн сайын төленеді.",
      ru: "Ищем активного SMM-менеджера для ведения нескольких аккаунтов в Instagram и Telegram. Обучение с нуля, оплата ежедневно.",
      en: "We're looking for an active SMM manager to run several Instagram and Telegram accounts. Training from scratch, paid daily.",
    },
    responsibilities: [
      {
        kk: "Агенттік клиенттерінің әлеуметтік желілерін жүргізу",
        ru: "Вести соцсети клиентов агентства",
        en: "Run social media for the agency's clients",
      },
      {
        kk: "Күніне 2–3 пост жариялау",
        ru: "Публиковать по 2–3 поста в день",
        en: "Publish 2–3 posts a day",
      },
      {
        kk: "Жазылушылардың хабарламаларына жауап беру",
        ru: "Отвечать на сообщения подписчиков",
        en: "Reply to followers' messages",
      },
    ],
    requirements: [
      { kk: "Тәжірибесіз — бәрін үйретеміз!", ru: "Без опыта — всему научим!", en: "No experience — we'll teach you everything!" },
      { kk: "Смартфон және интернетке қолжетімділік", ru: "Смартфон и доступ в интернет", en: "A smartphone and internet access" },
      { kk: "Бүгін бастауға дайындық", ru: "Готовность начать сегодня", en: "Ready to start today" },
    ],
    conditions: [
      { kk: "Шексіз табыс", ru: "Заработок без потолка", en: "Unlimited earnings" },
      { kk: "Күніне 2–3 сағат жұмыс", ru: "Работа 2–3 часа в день", en: "2–3 hours of work a day" },
      { kk: "Жылдам мансаптық өсу", ru: "Быстрый карьерный рост", en: "Fast career growth" },
      {
        kk: "Дәл қазір Telegram-ға жаз: @smm_work_kz",
        ru: "Пиши в Telegram прямо сейчас: @smm_work_kz",
        en: "Message us on Telegram right now: @smm_work_kz",
      },
    ],
    isSafe: false,
    riskCategory: "anonymous_telegram_only",
    highlightedDetail: {
      kk: "Дәл қазір Telegram-ға жаз: @smm_work_kz",
      ru: "Пиши в Telegram прямо сейчас: @smm_work_kz",
      en: "Message us on Telegram right now: @smm_work_kz",
    },
    explanation: {
      kk: "Бос орын компанияның ресми сайтын немесе поштасын айналып өтіп, тек анонимді Telegram-аккаунт арқылы хабарласуды ұсынады. Нағыз компаниялар әдетте өздерін сайт, HR-пошта немесе тізілімдегі карточка арқылы тексеруге мүмкіндік береді.",
      ru: "Вакансия предлагает общаться только через анонимный Telegram-аккаунт в обход официального сайта или почты компании. Настоящие компании обычно дают возможность проверить их через сайт, HR-почту или карточку в реестре.",
      en: "The vacancy only offers contact through an anonymous Telegram account, bypassing the company's official website or email. Real companies usually let you check them via a website, HR email or a business registry entry.",
    },
    safetyTip: {
      kk: "Егер байланыстың жалғыз жолы компанияға сілтемесіз жеке Telegram болса, өтінім берместен бұрын ресми байланысты сұраңыз немесе компанияны бөлек тексеріңіз.",
      ru: "Если единственный способ связи — личный Telegram без ссылки на компанию, попросите официальный контакт или проверьте компанию отдельно, прежде чем откликаться.",
      en: "If the only way to get in touch is a personal Telegram with no link to a company, ask for an official contact or check the company separately before applying.",
    },
  },
  {
    id: "v2",
    order: 2,
    title: { kk: "Деректер талдаушысы-тағылымдамашы", ru: "Стажёр-аналитик данных", en: "Data analyst intern" },
    company: { kk: "NordStat Analytics", ru: "NordStat Analytics", en: "NordStat Analytics" },
    location: { kk: "Астана, кеңсе", ru: "Астана, офис", en: "Astana, office" },
    workFormat: { kk: "Кеңсе, толық емес жұмыс күні", ru: "Офис, частичная занятость", en: "Office, part-time" },
    salary: { kk: "150 000 – 180 000 ₸", ru: "150 000 – 180 000 ₸", en: "150,000 – 180,000 ₸" },
    description: {
      kk: "2–4 курс студентін аналитика бөліміне ақылы тағылымдамаға шақырамыз. Компанияның нақты, бірақ иесіздендірілген деректерімен жұмыс.",
      ru: "Приглашаем студента 2–4 курса на оплачиваемую стажировку в отдел аналитики. Работа с реальными, но обезличенными данными компании.",
      en: "We invite a 2nd–4th year student to a paid internship in our analytics team. Work with the company's real but anonymised data.",
    },
    responsibilities: [
      {
        kk: "Апта сайынғы есептерді дайындауға көмектесу",
        ru: "Помогать готовить еженедельные отчёты",
        en: "Help prepare weekly reports",
      },
      {
        kk: "Кестелердегі деректерді тексеру және құрылымдау",
        ru: "Проверять и структурировать данные в таблицах",
        en: "Check and structure data in spreadsheets",
      },
      {
        kk: "Команданың апта сайынғы кездесулеріне қатысу",
        ru: "Участвовать в еженедельных встречах команды",
        en: "Take part in weekly team meetings",
      },
    ],
    requirements: [
      {
        kk: "Excel немесе Google Sheets-ті негізгі деңгейде білу",
        ru: "Базовые знания Excel или Google Sheets",
        en: "Basic knowledge of Excel or Google Sheets",
      },
      {
        kk: "Аналитикаға және сандармен жұмысқа қызығушылық",
        ru: "Интерес к аналитике и работе с цифрами",
        en: "Interest in analytics and working with numbers",
      },
      {
        kk: "Аптасына 15–20 сағат жұмыс істеу мүмкіндігі",
        ru: "Возможность работать 15–20 часов в неделю",
        en: "Able to work 15–20 hours a week",
      },
    ],
    conditions: [
      {
        kk: "Сынақ мерзімінен кейін ресми рәсімдеу",
        ru: "Официальное оформление после испытательного срока",
        en: "Official employment after the probation period",
      },
      {
        kk: "Аналитика командасынан тәлімгер",
        ru: "Наставник из команды аналитики",
        en: "A mentor from the analytics team",
      },
      {
        kk: "Оқуды ескеретін икемді кесте",
        ru: "Гибкий график с учётом учёбы",
        en: "A flexible schedule that fits around studies",
      },
    ],
    isSafe: true,
    riskCategory: "none",
    highlightedDetail: {
      kk: "Сынақ мерзімінен кейін ресми рәсімдеу",
      ru: "Официальное оформление после испытательного срока",
      en: "Official employment after the probation period",
    },
    explanation: {
      kk: "Бос орын нақты міндеттерді, тағылымдамаға шынайы жалақыны және түсінікті рәсімдеу процесін сипаттайды. Компания ашық көрсетілген, ал талаптар студенттің деңгейіне сәйкес келеді.",
      ru: "Вакансия описывает конкретные задачи, реалистичную зарплату для стажировки и понятный процесс оформления. Компания указана открыто, и требования соответствуют уровню студента.",
      en: "The vacancy describes specific tasks, a realistic internship salary and a clear hiring process. The company is named openly and the requirements match a student's level.",
    },
    safetyTip: {
      kk: "Қауіпсіз бос орындарда да жұмысқа шықпас бұрын сынақ мерзімінің шарттары мен шарт форматын нақтылаған жөн.",
      ru: "Даже у безопасных вакансий стоит уточнять условия испытательного срока и формат договора перед выходом на работу.",
      en: "Even with safe vacancies, it's worth clarifying the probation terms and contract type before you start.",
    },
  },
  {
    id: "v3",
    order: 3,
    title: { kk: "Төлемдерді өңдеу операторы", ru: "Оператор по обработке платежей", en: "Payment processing operator" },
    company: { kk: "Global Finance Solutions", ru: "Global Finance Solutions", en: "Global Finance Solutions" },
    location: { kk: "Қашықтан", ru: "Удалённо", en: "Remote" },
    workFormat: { kk: "Қашықтан, толық күн", ru: "Удалённо, полный день", en: "Remote, full-time" },
    salary: { kk: "Айына 800 000 ₸-ге дейін", ru: "до 800 000 ₸ в месяц", en: "up to 800,000 ₸ a month" },
    description: {
      kk: "Халықаралық компания клиенттердің төлемдерін жеке шот арқылы қабылдап, кейін өтемақымен аударатын жауапты қызметкер іздейді.",
      ru: "Международная компания ищет ответственного сотрудника для приёма и перевода платежей клиентов через личный счёт с последующей компенсацией.",
      en: "An international company is looking for a responsible employee to receive and forward client payments through a personal account, with compensation afterwards.",
    },
    responsibilities: [
      {
        kk: "Клиенттерден аударымдарды өз картаңызға қабылдау",
        ru: "Принимать переводы от клиентов на свою карту",
        en: "Receive transfers from clients on your own card",
      },
      {
        kk: "Қаражатты үйлестіруші көрсеткен шоттарға аудару",
        ru: "Переводить средства на счета, указанные координатором",
        en: "Transfer the money to accounts named by a coordinator",
      },
      {
        kk: "Күн соңында аударымдар туралы есеп беру",
        ru: "Отчитываться о переводах в конце дня",
        en: "Report on the transfers at the end of the day",
      },
    ],
    requirements: [
      { kk: "Банк картасының болуы", ru: "Наличие банковской карты", en: "Having a bank card" },
      { kk: "Мобильді банкингке қолжетімділік", ru: "Доступ к мобильному банкингу", en: "Access to mobile banking" },
      { kk: "Жауапкершілік және ұқыптылық", ru: "Ответственность и пунктуальность", en: "Responsibility and punctuality" },
    ],
    conditions: [
      { kk: "Әр аударымнан комиссия", ru: "Комиссия с каждого перевода", en: "Commission on every transfer" },
      { kk: "Ақы апта соңында төленеді", ru: "Оплата в конце недели", en: "Paid at the end of the week" },
      { kk: "Толық қашықтан жұмыс", ru: "Полная удалённая работа", en: "Fully remote work" },
    ],
    isSafe: false,
    riskCategory: "personal_card_transfer",
    highlightedDetail: {
      kk: "Клиенттерден аударымдарды өз картаңызға қабылдау",
      ru: "Принимать переводы от клиентов на свою карту",
      en: "Receive transfers from clients on your own card",
    },
    explanation: {
      kk: "Бұл адамды бөгде ақшаны жеке картасы арқылы аудару үшін пайдаланатын классикалық схема — көбіне ақшаның заңсыз жолмен алынуы мүмкін екенін білдірмей. Мұндай рөл орындаушының өзіне қаржылық және заңдық тәуекелдер тудырады.",
      ru: "Это классическая схема, в которой человека используют для перевода чужих денег через личную карту — часто без ведома, что деньги могут быть получены незаконно. Такая роль создаёт финансовые и юридические риски для самого исполнителя.",
      en: "This is a classic scheme where a person is used to move someone else's money through their personal card — often without knowing the money may have been obtained illegally. Such a role creates financial and legal risks for the person doing it.",
    },
    safetyTip: {
      kk: "Комиссиясы бар қалыпты жұмыс міндеті ретінде ұсынылса да, бөгде ақшаны ешқашан жеке картаңыз арқылы аудармаңыз.",
      ru: "Никогда не переводите чужие деньги через свою личную карту, даже если это преподносится как обычная рабочая задача с комиссией.",
      en: "Never move other people's money through your personal card, even if it's presented as a normal work task with a commission.",
    },
  },
  {
    id: "v4",
    order: 4,
    title: { kk: "Сату менеджерінің көмекшісі", ru: "Помощник менеджера по продажам", en: "Sales manager assistant" },
    company: { kk: "Жылыжай технологиялары KZ", ru: "Тепличные технологии KZ", en: "Greenhouse Technologies KZ" },
    location: { kk: "Шымкент, кеңсе", ru: "Шымкент, офис", en: "Shymkent, office" },
    workFormat: { kk: "Кеңсе, толық күн", ru: "Офис, полный день", en: "Office, full-time" },
    salary: { kk: "180 000 ₸ + бонустар", ru: "180 000 ₸ + бонусы", en: "180,000 ₸ + bonuses" },
    description: {
      kk: "Агротехника сататын шағын компания клиенттер базасымен жұмыс істеу және коммерциялық ұсыныстар дайындау үшін менеджер көмекшісін іздейді.",
      ru: "Небольшая компания по продаже агротехники ищет помощника менеджера для работы с клиентской базой и подготовки коммерческих предложений.",
      en: "A small agricultural equipment company is looking for a manager's assistant to work with the client base and prepare sales proposals.",
    },
    responsibilities: [
      { kk: "CRM-де клиенттер базасын жүргізу", ru: "Вести базу клиентов в CRM", en: "Maintain the client base in the CRM" },
      {
        kk: "Үлгі бойынша коммерциялық ұсыныстар дайындау",
        ru: "Готовить коммерческие предложения по шаблону",
        en: "Prepare sales proposals from a template",
      },
      {
        kk: "Клиенттермен кездесулерде менеджерге көмектесу",
        ru: "Помогать менеджеру на встречах с клиентами",
        en: "Assist the manager at client meetings",
      },
    ],
    requirements: [
      { kk: "Word пен Excel-ді сенімді меңгеру", ru: "Уверенное владение Word и Excel", en: "Confident with Word and Excel" },
      { kk: "Сауатты ауызша және жазбаша сөйлеу", ru: "Грамотная устная и письменная речь", en: "Good spoken and written communication" },
      { kk: "Жұмыс барысында үйренуге дайындық", ru: "Готовность учиться в процессе работы", en: "Willing to learn on the job" },
    ],
    conditions: [
      { kk: "Бірінші күннен еңбек шарты", ru: "Трудовой договор с первого дня", en: "Employment contract from day one" },
      { kk: "Сынақ мерзімі 1 ай", ru: "Испытательный срок 1 месяц", en: "1-month probation period" },
      { kk: "Еңбек кодексі бойынша ақылы демалыс", ru: "Оплачиваемый отпуск по трудовому кодексу", en: "Paid leave under the Labour Code" },
    ],
    isSafe: true,
    riskCategory: "none",
    highlightedDetail: { kk: "Бірінші күннен еңбек шарты", ru: "Трудовой договор с первого дня", en: "Employment contract from day one" },
    explanation: {
      kk: "Компания ашық көрсетілген, міндеттер нақты, ал шарттар еңбек заңнамасына сәйкес келеді. Жалақы лауазым деңгейі мен өңір үшін шынайы.",
      ru: "Компания указана открыто, обязанности конкретны, а условия соответствуют трудовому законодательству. Зарплата реалистична для уровня позиции и региона.",
      en: "The company is named openly, the duties are specific and the conditions comply with labour law. The salary is realistic for the level and region.",
    },
    safetyTip: {
      kk: "Жұмысқа шықпас бұрын еңбек шартының көшірмесін сұрап, сынақ мерзімі туралы тармақты мұқият оқыған жөн.",
      ru: "Перед выходом на работу стоит попросить копию трудового договора и внимательно прочитать пункт об испытательном сроке.",
      en: "Before starting, ask for a copy of the employment contract and read the probation clause carefully.",
    },
  },
  {
    id: "v5",
    order: 5,
    title: { kk: "Тәжірибесіз модель / промоутер", ru: "Модель / промоутер без опыта", en: "Model / promoter, no experience" },
    company: { kk: "Casting Pro Kazakhstan", ru: "Casting Pro Kazakhstan", en: "Casting Pro Kazakhstan" },
    location: { kk: "Алматы", ru: "Алматы", en: "Almaty" },
    workFormat: { kk: "Бір реттік жобалар", ru: "Разовые проекты", en: "One-off projects" },
    salary: { kk: "Жобасына 500 000 ₸-ден", ru: "от 500 000 ₸ за проект", en: "from 500,000 ₸ per project" },
    description: {
      kk: "Кастинг агенттігі 16–22 жастағы қыздар мен жігіттерді фотожобалар мен промо-іс-шараларға қатысуға шақырады. Арнайы білімсіз жоғары табыс.",
      ru: "Кастинговое агентство приглашает девушек и юношей 16–22 лет для участия в фотопроектах и промо-мероприятиях. Высокий доход без специального образования.",
      en: "A casting agency invites young women and men aged 16–22 to take part in photo projects and promo events. High income with no special training.",
    },
    responsibilities: [
      { kk: "Фотосессияларға қатысу", ru: "Участвовать в фотосессиях", en: "Take part in photo shoots" },
      { kk: "Промо-іс-шараларға қатысу", ru: "Присутствовать на промо-мероприятиях", en: "Attend promo events" },
      {
        kk: "Портфолио үшін сынақ фотосессиясынан өту",
        ru: "Пройти пробную фотосессию для портфолио",
        en: "Do a trial photo shoot for a portfolio",
      },
    ],
    requirements: [
      { kk: "Тартымды сыртқы келбет", ru: "Привлекательная внешность", en: "Attractive appearance" },
      {
        kk: "Портфолио жасау ақысын төлеуге дайындық — 45 000 ₸",
        ru: "Готовность оплатить создание портфолио — 45 000 ₸",
        en: "Willing to pay for a portfolio — 45,000 ₸",
      },
      { kk: "Тәжірибесіз, кастинг онлайн", ru: "Без опыта, кастинг онлайн", en: "No experience, online casting" },
    ],
    conditions: [
      {
        kk: "Портфолио құны алғашқы қаламақыдан шегеріледі",
        ru: "Стоимость портфолио вычитается из первого гонорара",
        en: "The portfolio cost is deducted from your first fee",
      },
      { kk: "Түсірілім жеке студияда", ru: "Съёмка на частной студии", en: "Shoot at a private studio" },
      {
        kk: "Ақы клиентпен келісілгеннен кейін төленеді",
        ru: "Оплата после согласования с клиентом",
        en: "Paid after approval by the client",
      },
    ],
    isSafe: false,
    riskCategory: "payment_required",
    highlightedDetail: {
      kk: "Портфолио жасау ақысын төлеуге дайындық — 45 000 ₸",
      ru: "Готовность оплатить создание портфолио — 45 000 ₸",
      en: "Willing to pay for a portfolio — 45,000 ₸",
    },
    explanation: {
      kk: "Кез келген жұмыс басталғанға дейін «портфолио жасау» немесе «рәсімдеу» үшін ақы төлеуді талап ету — кең таралған алаяқтық схемасы. Нағыз жұмыс беруші ізденушіге төлейді, керісінше емес.",
      ru: "Требование заплатить за «создание портфолио» или «оформление» до начала любой работы — распространённая мошенническая схема. Настоящий работодатель платит соискателю, а не наоборот.",
      en: "Being asked to pay for “creating a portfolio” or “registration” before any work starts is a common scam. A real employer pays the applicant, not the other way round.",
    },
    safetyTip: {
      kk: "Жұмыс іздеудің ешбір кезеңінде жұмысқа орналасу, оқу, портфолио немесе «тиімді» жобаларға қолжетімділік үшін ақы төлемеңіз.",
      ru: "Не платите за трудоустройство, обучение, портфолио или доступ к «выгодным» проектам ни на каком этапе поиска работы.",
      en: "Never pay for a job placement, training, a portfolio or access to “lucrative” projects at any stage of your job search.",
    },
  },
  {
    id: "v6",
    order: 6,
    title: { kk: "Junior-копирайтер", ru: "Junior-копирайтер", en: "Junior copywriter" },
    company: { kk: "WriteHub Content Studio", ru: "WriteHub Content Studio", en: "WriteHub Content Studio" },
    location: { kk: "Қашықтан", ru: "Удалённо", en: "Remote" },
    workFormat: { kk: "Қашықтан, толық емес жұмыс күні", ru: "Удалённо, частичная занятость", en: "Remote, part-time" },
    salary: {
      kk: "120 000 – 200 000 ₸ (тапсырма көлеміне қарай)",
      ru: "120 000 – 200 000 ₸ (по объёму задач)",
      en: "120,000 – 200,000 ₸ (depending on workload)",
    },
    description: {
      kk: "Контент-студия әлеуметтік желілер мен тауар карточкаларына қысқа мәтіндер жазатын бастаушы копирайтерді іздейді. Тест тапсырмасы ақылы.",
      ru: "Контент-студия ищет начинающего копирайтера для написания коротких текстов для соцсетей и карточек товаров. Тестовое задание оплачивается.",
      en: "A content studio is looking for a junior copywriter to write short texts for social media and product listings. The test task is paid.",
    },
    responsibilities: [
      { kk: "Тауар карточкаларына мәтін жазу", ru: "Писать тексты для карточек товаров", en: "Write product listing texts" },
      {
        kk: "Мәтіндерді клиенттің бренд-гайдына бейімдеу",
        ru: "Адаптировать тексты под бренд-гайд клиента",
        en: "Adapt texts to the client's brand guide",
      },
      {
        kk: "Тәлімгермен қысқа редакциядан өту",
        ru: "Проходить короткую редактуру с наставником",
        en: "Go through short edits with a mentor",
      },
    ],
    requirements: [
      { kk: "Орыс тілінде сауатты жазу", ru: "Грамотный письменный русский язык", en: "Good written Russian" },
      { kk: "Портфолио немесе тест тапсырмасы", ru: "Портфолио или тестовое задание", en: "A portfolio or test task" },
      { kk: "Кері байланыс алуға дайындық", ru: "Готовность получать обратную связь", en: "Open to feedback" },
    ],
    conditions: [
      { kk: "Ақылы тест тапсырмасы — 5 000 ₸", ru: "Оплачиваемое тестовое задание — 5 000 ₸", en: "Paid test task — 5,000 ₸" },
      { kk: "Ақылы қызмет көрсету шарты", ru: "Договор возмездного оказания услуг", en: "A paid services contract" },
      { kk: "Ақы айына екі рет төленеді", ru: "Оплата дважды в месяц", en: "Paid twice a month" },
    ],
    isSafe: true,
    riskCategory: "none",
    highlightedDetail: { kk: "Ақылы тест тапсырмасы — 5 000 ₸", ru: "Оплачиваемое тестовое задание — 5 000 ₸", en: "Paid test task — 5,000 ₸" },
    explanation: {
      kk: "Тест тапсырмасы үшін сізге ақы төленеді, керісінше емес — бұл жақсы белгі. Жұмыс шарттары, шарт форматы және төлем жиілігі түсінікті әрі шынайы сипатталған.",
      ru: "Тестовое задание оплачивается, а не наоборот — это хороший признак. Условия работы, формат договора и периодичность оплаты описаны понятно и реалистично.",
      en: "The test task is paid for, not the other way round — that's a good sign. Working conditions, contract type and payment frequency are described clearly and realistically.",
    },
    safetyTip: {
      kk: "Ақылы тест тапсырмасы — қалыпты тәжірибе. Сізге емес, сізден ақы сұраған жағдай сақтандыруы керек.",
      ru: "Оплачиваемое тестовое задание — нормальная практика. Насторожить должна ситуация, где просят заплатить вам, а не наоборот.",
      en: "A paid test task is normal practice. What should worry you is being asked to pay, rather than being paid.",
    },
  },
];
