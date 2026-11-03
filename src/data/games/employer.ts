import type { CandidateProfile, EmployerVacancy } from "@/types/games";

/** DEMO CONTENT — replaceable. No real people are represented. */
export const EMPLOYER_VACANCY: EmployerVacancy = {
  title: {
    kk: "Junior Data Analyst / Деректер талдаушысы-тағылымдамашы",
    ru: "Junior Data Analyst / Стажёр-аналитик данных",
    en: "Junior Data Analyst / Data Analyst Intern",
  },
  responsibilities: [
    {
      kk: "Өнім көрсеткіштері бойынша апта сайынғы есептерді дайындау",
      ru: "Готовить еженедельные отчёты по показателям продукта",
      en: "Prepare weekly reports on product metrics",
    },
    {
      kk: "Талдау алдында деректерді тексеру және тазалау",
      ru: "Проверять и очищать данные перед анализом",
      en: "Check and clean data before analysis",
    },
    {
      kk: "Командаға нәтижелерді визуализациялауға көмектесу",
      ru: "Помогать команде визуализировать результаты",
      en: "Help the team visualise results",
    },
  ],
  requiredSkills: [
    { kk: "Excel немесе Google Sheets", ru: "Excel или Google Sheets", en: "Excel or Google Sheets" },
    { kk: "Негізгі математика және логика", ru: "Базовая математика и логика", en: "Basic maths and logic" },
    { kk: "Егжей-тегжейге мұқияттылық", ru: "Внимательность к деталям", en: "Attention to detail" },
  ],
  preferredSkills: [
    { kk: "SQL", ru: "SQL", en: "SQL" },
    { kk: "Power BI немесе Tableau тәжірибесі", ru: "Опыт с Power BI или Tableau", en: "Experience with Power BI or Tableau" },
    { kk: "Негізгі Python", ru: "Базовый Python", en: "Basic Python" },
  ],
  schedule: {
    kk: "Аптасына 20–25 сағат, икемді кесте",
    ru: "20–25 часов в неделю, гибкий график",
    en: "20–25 hours a week, flexible schedule",
  },
  workFormat: {
    kk: "Гибрид: кеңседе 2 күн, қалғаны қашықтан",
    ru: "Гибрид: 2 дня в офисе, остальное удалённо",
    en: "Hybrid: 2 days in the office, the rest remote",
  },
  educationExpectation: {
    kk: "2–4 курс студенті, мамандық қатаң шектелмейді",
    ru: "Студент 2–4 курса, специальность не строго ограничена",
    en: "2nd–4th year student, field of study not strictly limited",
  },
  learningOpportunities: [
    {
      kk: "Компанияның нақты, иесіздендірілген деректерімен жұмыс",
      ru: "Работа с реальными, обезличенными данными компании",
      en: "Work with the company's real, anonymised data",
    },
    {
      kk: "Senior-талдаушыдан тәлімгерлік",
      ru: "Наставничество от senior-аналитика",
      en: "Mentoring from a senior analyst",
    },
    {
      kk: "Тағылымдамадан кейін жұмыс ұсынысын алу мүмкіндігі",
      ru: "Возможность оффера после стажировки",
      en: "A chance of a job offer after the internship",
    },
  ],
};

export const CANDIDATES: CandidateProfile[] = [
  {
    id: "c1",
    order: 1,
    name: { kk: "Айжан К.", ru: "Айжан К.", en: "Aizhan K." },
    ageRange: { kk: "24 жас", ru: "24 года", en: "24 years old" },
    speciality: { kk: "Қолданбалы информатика", ru: "Прикладная информатика", en: "Applied computer science" },
    location: { kk: "Алматы", ru: "Алматы", en: "Almaty" },
    availability: { kk: "Аптасына 20 сағат, икемді", ru: "20 часов в неделю, гибко", en: "20 hours a week, flexible" },
    education: { kk: "3 курс, колледж", ru: "3 курс, колледж", en: "3rd year, college" },
    experience: { kk: "Ресми тәжірибе жоқ", ru: "Формального опыта нет", en: "No formal experience" },
    projects: [
      {
        kk: "Оқу жобасы: Excel-де студенттердің сабаққа қатысуын талдау",
        ru: "Учебный проект: анализ посещаемости студентов в Excel",
        en: "Study project: analysing student attendance in Excel",
      },
      {
        kk: "Курстық жұмысқа арналған Power BI дашборды",
        ru: "Дашборд в Power BI для курсовой работы",
        en: "A Power BI dashboard for coursework",
      },
    ],
    skills: [
      { kk: "Excel", ru: "Excel", en: "Excel" },
      { kk: "Power BI", ru: "Power BI", en: "Power BI" },
      { kk: "Негізгі аналитикалық логика", ru: "Базовая аналитическая логика", en: "Basic analytical thinking" },
    ],
    missingInformation: [],
    strengths: [
      {
        kk: "Бос орын міндеттеріне жақын нақты жобасы бар",
        ru: "Есть конкретный проект, близкий к задачам вакансии",
        en: "Has a concrete project close to the vacancy's tasks",
      },
      {
        kk: "Power BI біледі — бұл міндетті емес, бірақ қалаулы дағды",
        ru: "Знает Power BI — это желаемый, но не обязательный навык",
        en: "Knows Power BI — a preferred but not required skill",
      },
      { kk: "Кестесі толық сәйкес келеді", ru: "График полностью совпадает", en: "Schedule is a full match" },
    ],
    concerns: [{ kk: "Ресми жұмыс тәжірибесі жоқ", ru: "Нет формального опыта работы", en: "No formal work experience" }],
    recommendedDecision: "invite",
    explanation: {
      kk: "Оқу жобасы қолданбалы дағдыларды «тәжірибесіз» деген бос жолдан гөрі жақсырақ көрсетеді. Мамандығы, қолжетімділігі және қалаулы дағдылардың бір бөлігі бос орынға сәйкес келеді.",
      ru: "Учебный проект показывает применимые навыки лучше, чем пустая строка «без опыта». Специальность, доступность и часть желаемых навыков совпадают с вакансией.",
      en: "A study project shows applicable skills better than an empty “no experience” line. Field of study, availability and some of the preferred skills match the vacancy.",
    },
    decisionScore: { invite: 3, clarify: 2, reject: 0 },
  },
  {
    id: "c2",
    order: 2,
    name: { kk: "Данияр М.", ru: "Данияр М.", en: "Daniyar M." },
    ageRange: { kk: "22 жас", ru: "22 года", en: "22 years old" },
    speciality: { kk: "Экономика және статистика", ru: "Экономика и статистика", en: "Economics and statistics" },
    location: { kk: "Астана", ru: "Астана", en: "Astana" },
    availability: { kk: "Аптасына 15 сағат", ru: "15 часов в неделю", en: "15 hours a week" },
    education: { kk: "4 курс, университет", ru: "4 курс, университет", en: "4th year, university" },
    experience: { kk: "Практикалық тәжірибе жоқ", ru: "Нет практического опыта", en: "No practical experience" },
    projects: [],
    skills: [
      { kk: "Excel", ru: "Excel", en: "Excel" },
      { kk: "Негізгі SQL (оқу курсы)", ru: "Базовый SQL (учебный курс)", en: "Basic SQL (training course)" },
    ],
    missingInformation: [
      { kk: "Жұмыс немесе жоба үлгілері жоқ", ru: "Нет примеров работ или проектов", en: "No work samples or projects" },
    ],
    strengths: [
      {
        kk: "Мамандығы аналитикамен тікелей байланысты",
        ru: "Специальность напрямую связана с аналитикой",
        en: "Field of study is directly related to analytics",
      },
      {
        kk: "SQL курсынан өткен — қалаулы дағдыға сәйкес келеді",
        ru: "Проходил курс по SQL — совпадает с желаемым навыком",
        en: "Took an SQL course — matches a preferred skill",
      },
    ],
    concerns: [
      {
        kk: "Дағдыларды іс жүзінде қолданудың бірде-бір үлгісі жоқ",
        ru: "Нет ни одного примера применения навыков на практике",
        en: "Not a single example of applying the skills in practice",
      },
      {
        kk: "Мәлімделген SQL жобамен немесе тестпен расталмаған",
        ru: "Заявленный SQL не подтверждён проектом или тестом",
        en: "The claimed SQL isn't backed by a project or test",
      },
    ],
    recommendedDecision: "clarify",
    explanation: {
      kk: "Мамандығы мінсіз сәйкес келеді, бірақ мәлімделген SQL дағдысы ештеңемен расталмаған. Мұнда бірден бас тартпай, тест тапсырмасын немесе жұмыс үлгісін сұраған дұрыс.",
      ru: "Специальность подходит идеально, но заявленный навык SQL ничем не подтверждён. Здесь разумно запросить тестовое задание или пример работы, а не отказывать сразу.",
      en: "The field of study is a perfect fit, but the claimed SQL skill isn't backed up. It makes sense to ask for a test task or work sample rather than reject straight away.",
    },
    decisionScore: { invite: 2, clarify: 3, reject: 0 },
  },
  {
    id: "c3",
    order: 3,
    name: { kk: "Алина С.", ru: "Алина С.", en: "Alina S." },
    ageRange: { kk: "23 жас", ru: "23 года", en: "23 years old" },
    speciality: { kk: "Журналистика", ru: "Журналистика", en: "Journalism" },
    location: { kk: "Алматы", ru: "Алматы", en: "Almaty" },
    availability: { kk: "Аптасына 20–25 сағат", ru: "20–25 часов в неделю", en: "20–25 hours a week" },
    education: { kk: "Колледж түлегі", ru: "Выпускница колледжа", en: "College graduate" },
    experience: {
      kk: "1,5 жыл — студенттік ұйымда үйлестіруші",
      ru: "1,5 года — координатор в студенческой организации",
      en: "1.5 years — coordinator at a student organisation",
    },
    projects: [
      {
        kk: "SQL мен Python-ды онлайн-курстар арқылы өз бетімен үйренді",
        ru: "Самостоятельно выучила SQL и Python по онлайн-курсам",
        en: "Taught herself SQL and Python through online courses",
      },
      {
        kk: "Ұйым іс-шараларының статистикасын Google Sheets-те жүргізді",
        ru: "Вела статистику мероприятий организации в Google Sheets",
        en: "Kept the organisation's event statistics in Google Sheets",
      },
    ],
    skills: [
      { kk: "Excel", ru: "Excel", en: "Excel" },
      { kk: "SQL (оқу жобалары)", ru: "SQL (учебные проекты)", en: "SQL (study projects)" },
      { kk: "Python (бастапқы деңгей)", ru: "Python (начальный уровень)", en: "Python (beginner)" },
      { kk: "Процестерді ұйымдастыру", ru: "Организация процессов", en: "Process organisation" },
    ],
    missingInformation: [],
    strengths: [
      {
        kk: "Процестерді ұйымдастыру және сандармен жұмыс істеудің нақты тәжірибесі",
        ru: "Реальный опыт организации процессов и работы с цифрами",
        en: "Real experience organising processes and working with numbers",
      },
      {
        kk: "Қалаулы деп көрсетілген дағдыларды өз бетімен меңгерді",
        ru: "Самостоятельно освоила именно те навыки, которые указаны как желаемые",
        en: "Taught herself exactly the skills listed as preferred",
      },
      { kk: "Кестесі толық сәйкес келеді", ru: "График полностью совпадает", en: "Schedule is a full match" },
    ],
    concerns: [
      {
        kk: "Мамандығы формалды түрде аналитикамен байланысты емес",
        ru: "Специальность формально не связана с аналитикой",
        en: "Field of study isn't formally related to analytics",
      },
    ],
    recommendedDecision: "invite",
    explanation: {
      kk: "Мамандығы сәйкес келмейді, бірақ процестерді ұйымдастырудың нақты тәжірибесі және өз бетімен меңгерген SQL мен Python бос орын міндеттеріне тікелей жауап береді. Мұнда дипломның атауынан гөрі ауыспалы дағдылар маңыздырақ.",
      ru: "Специальность не совпадает, но реальный опыт организации процессов и самостоятельно освоенные SQL и Python напрямую отвечают задачам вакансии. Переносимые навыки здесь важнее названия диплома.",
      en: "The field doesn't match, but real experience organising processes and self-taught SQL and Python directly meet the vacancy's needs. Transferable skills matter more here than the name on the diploma.",
    },
    decisionScore: { invite: 3, clarify: 2, reject: 0 },
  },
  {
    id: "c4",
    order: 4,
    name: { kk: "Тимур А.", ru: "Тимур А.", en: "Timur A." },
    ageRange: { kk: "25 жас", ru: "25 лет", en: "25 years old" },
    speciality: { kk: "Қолданбалы математика", ru: "Прикладная математика", en: "Applied mathematics" },
    location: { kk: "Алматы", ru: "Алматы", en: "Almaty" },
    availability: {
      kk: "Тек кешке, аптасына 10 сағаттан аз",
      ru: "Только по вечерам, менее 10 часов в неделю",
      en: "Evenings only, under 10 hours a week",
    },
    education: { kk: "Университет түлегі", ru: "Выпускник университета", en: "University graduate" },
    experience: {
      kk: "3 жыл — логистикалық компанияда талдаушы",
      ru: "3 года — аналитик в логистической компании",
      en: "3 years — analyst at a logistics company",
    },
    projects: [
      {
        kk: "Алдыңғы жұмыс орнында Power BI-да есептілікті автоматтандырды",
        ru: "Автоматизировал отчётность в Power BI на предыдущем месте работы",
        en: "Automated reporting in Power BI at his previous job",
      },
      {
        kk: "Апта сайынғы есептілік үшін SQL-сұраулар құрды",
        ru: "Строил SQL-запросы для еженедельной отчётности",
        en: "Wrote SQL queries for weekly reporting",
      },
    ],
    skills: [
      { kk: "Excel", ru: "Excel", en: "Excel" },
      { kk: "SQL", ru: "SQL", en: "SQL" },
      { kk: "Power BI", ru: "Power BI", en: "Power BI" },
      { kk: "Tableau", ru: "Tableau", en: "Tableau" },
    ],
    missingInformation: [],
    strengths: [
      {
        kk: "Күшті тиісті тәжірибе және барлық қалаулы құралдарды сенімді меңгеру",
        ru: "Сильный релевантный опыт и уверенное владение всеми желаемыми инструментами",
        en: "Strong relevant experience and confident use of all preferred tools",
      },
      {
        kk: "Нақты нәтижелері бар расталған дағдылар",
        ru: "Подтверждённые навыки с реальными результатами",
        en: "Proven skills with real results",
      },
    ],
    concerns: [
      {
        kk: "Қолжетімділігі бос орын кестесіне сәйкес келмейді (20–25 сағат, гибрид)",
        ru: "Доступность не совпадает с графиком вакансии (20–25 часов, гибрид)",
        en: "Availability doesn't fit the vacancy schedule (20–25 hours, hybrid)",
      },
      {
        kk: "Тағылымдамашы лауазымы үшін біліктілігі тым жоғары болуы мүмкін",
        ru: "Может быть переквалифицирован для стажёрской позиции",
        en: "May be overqualified for an intern position",
      },
    ],
    recommendedDecision: "clarify",
    explanation: {
      kk: "Күшті үміткер дағдыларына байланысты емес, кестесі немесе жұмыс форматы себебінен сәйкес келмеуі мүмкін. Күшті профильден бас тартпас бұрын оның тағылымдама форматына дайын екенін нақтылаған жөн.",
      ru: "Сильный кандидат может не подойти не из-за навыков, а из-за графика или формата работы. Стоит уточнить, готов ли он к формату стажировки, прежде чем отказывать сильному профилю.",
      en: "A strong candidate might not fit because of schedule or work format rather than skills. It's worth checking whether he's open to an internship format before rejecting a strong profile.",
    },
    decisionScore: { invite: 1, clarify: 3, reject: 1 },
  },
  {
    id: "c5",
    order: 5,
    name: { kk: "Мадина Б.", ru: "Мадина Б.", en: "Madina B." },
    ageRange: { kk: "21 жас", ru: "21 год", en: "21 years old" },
    speciality: { kk: "Көрсетілмеген", ru: "Не указана", en: "Not specified" },
    location: { kk: "Көрсетілмеген", ru: "Не указано", en: "Not specified" },
    availability: { kk: "Көрсетілмеген", ru: "Не указано", en: "Not specified" },
    education: { kk: "Көрсетілмеген", ru: "Не указано", en: "Not specified" },
    experience: { kk: "Көрсетілмеген", ru: "Не указано", en: "Not specified" },
    projects: [],
    skills: [
      {
        kk: "Excel (түйіндемеде егжей-тегжейсіз көрсетілген)",
        ru: "Excel (указано в резюме без деталей)",
        en: "Excel (listed on the CV without details)",
      },
    ],
    missingInformation: [
      { kk: "Мамандығы мен оқу курсы", ru: "Специальность и курс обучения", en: "Field of study and year" },
      { kk: "Қолжетімділік форматы мен кестесі", ru: "Формат и график доступности", en: "Availability format and schedule" },
      { kk: "Жұмыс немесе жоба үлгілері", ru: "Примеры работ или проектов", en: "Work samples or projects" },
    ],
    strengths: [
      {
        kk: "Ілеспе хатта аналитикаға қызығушылық көрсетілген",
        ru: "Указан интерес к аналитике в сопроводительном письме",
        en: "Mentions an interest in analytics in the cover letter",
      },
    ],
    concerns: [
      {
        kk: "Профиль толық толтырылмаған — бос орынға сәйкестігін бағалау қиын",
        ru: "Профиль заполнен не полностью — сложно оценить соответствие вакансии",
        en: "The profile is incomplete — hard to judge the fit for the vacancy",
      },
    ],
    recommendedDecision: "clarify",
    explanation: {
      kk: "Ақпараттың жетіспеуі — бірден бас тартуға емес, сұрақ қоюға себеп. Мүмкін, үміткер әлсіз емес, жай ғана профилін соңына дейін толтырмаған шығар.",
      ru: "Недостаток информации — повод задать вопрос, а не сразу отказать. Возможно, кандидат просто не заполнил профиль до конца, а не является слабым кандидатом.",
      en: "Missing information is a reason to ask a question, not to reject straight away. The candidate may simply not have finished the profile rather than being weak.",
    },
    decisionScore: { invite: 0, clarify: 3, reject: 1 },
  },
];
