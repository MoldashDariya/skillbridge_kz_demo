import {
  LineChart,
  Code2,
  Users,
  Palette,
  ClipboardList,
  Rocket,
} from "lucide-react";
import type { Localized } from "@/i18n/LanguageProvider";
import type {
  CareerQuestion,
  CareerProfileDefinition,
  CareerDimension,
} from "@/types/games";

/**
 * DEMO CONTENT — replaceable.
 * Five situational questions covering: decision-making, teamwork, working
 * with information, unfamiliar tasks, and motivation. Weights are kept
 * separate from any UI so scoring never lives inside JSX.
 */
export const CAREER_QUESTIONS: CareerQuestion[] = [
  {
    id: "q1",
    order: 1,
    situation: {
      kk: "Командаңызға міндетті шешудің екі нұсқасының бірін тез таңдау керек, бірақ толық сенімділік үшін деректер жеткіліксіз.",
      ru: "Вашей команде нужно быстро выбрать один из двух вариантов решения задачи, а данных для полной уверенности не хватает.",
      en: "Your team needs to quickly choose between two solutions, but there isn't enough data to be fully sure.",
    },
    question: {
      kk: "Ең алдымен не істейсіз?",
      ru: "Что вы делаете в первую очередь?",
      en: "What do you do first?",
    },
    options: [
      {
        id: "q1a",
        label: {
          kk: "Қолда бар сандарды жинап, нұсқаларды фактілер бойынша салыстырамын",
          ru: "Собираю доступные цифры и сравниваю варианты по фактам",
          en: "I gather the available numbers and compare the options on the facts",
        },
        weights: { analytical: 2, organised: 1 },
      },
      {
        id: "q1b",
        label: {
          kk: "Жағдайды командамен талқылап, әркімнің пікірін ескеремін",
          ru: "Обсуждаю ситуацию с командой и учитываю мнение каждого",
          en: "I discuss it with the team and take everyone's opinion into account",
        },
        weights: { social: 2, organised: 1 },
      },
      {
        id: "q1c",
        label: {
          kk: "Ешкім қарастырмаған ерекше үшінші нұсқаны ұсынамын",
          ru: "Предлагаю нестандартный третий вариант, который никто не рассматривал",
          en: "I suggest an unusual third option nobody has considered",
        },
        weights: { creative: 2, entrepreneurial: 1 },
      },
      {
        id: "q1d",
        label: {
          kk: "Іс жүзінде ең оңай әрі тез енгізілетін нұсқаны таңдаймын",
          ru: "Выбираю вариант, который проще и быстрее всего внедрить на практике",
          en: "I pick the option that's easiest and fastest to put into practice",
        },
        weights: { practical: 2, entrepreneurial: 1 },
      },
    ],
  },
  {
    id: "q2",
    order: 2,
    situation: {
      kk: "Жобаға әртүрлі міндеттері бар бірнеше адам қатысады, ал мерзім тығыз.",
      ru: "В проекте участвуют несколько человек с разными задачами, и сроки поджимают.",
      en: "Several people with different tasks are working on a project, and the deadline is close.",
    },
    question: {
      kk: "Сізге қай рөл жақынырақ?",
      ru: "Какая роль вам ближе всего?",
      en: "Which role suits you best?",
    },
    options: [
      {
        id: "q2a",
        label: {
          kk: "Міндеттер мен мерзімдердің жазылып, ештеңе жоғалмауын қадағалаймын",
          ru: "Слежу, чтобы задачи и дедлайны были расписаны и ничего не потерялось",
          en: "I make sure tasks and deadlines are written down and nothing gets lost",
        },
        weights: { organised: 2, practical: 1 },
      },
      {
        id: "q2b",
        label: {
          kk: "Бәрі бір-бірін түсінуі үшін қатысушылар арасындағы байланысты сақтаймын",
          ru: "Поддерживаю связь между участниками, чтобы все понимали друг друга",
          en: "I keep everyone in touch so people understand each other",
        },
        weights: { social: 2 },
      },
      {
        id: "q2c",
        label: {
          kk: "Нәтижені қалай қызықтырақ және көзге түсетін ету керектігін ойлап табамын",
          ru: "Придумываю, как сделать результат интереснее и заметнее",
          en: "I come up with ways to make the result more interesting and visible",
        },
        weights: { creative: 2 },
      },
      {
        id: "q2d",
        label: {
          kk: "Ең күрделі техникалық бөлігін өз мойныма аламын",
          ru: "Беру на себя самую сложную техническую часть",
          en: "I take on the hardest technical part",
        },
        weights: { analytical: 1, practical: 1, entrepreneurial: 1 },
      },
    ],
  },
  {
    id: "q3",
    order: 3,
    situation: {
      kk: "Сізге көп әрі шашыраңқы ақпарат берілді — кестелер, хабарламалар, жазбалар.",
      ru: "Вам дали большой объём разрозненной информации — таблицы, сообщения, заметки.",
      en: "You've been given a lot of scattered information — spreadsheets, messages, notes.",
    },
    question: {
      kk: "Онымен қалай жұмыс істейсіз?",
      ru: "Как вы с ней работаете?",
      en: "How do you work with it?",
    },
    options: [
      {
        id: "q3a",
        label: {
          kk: "Заңдылықтарды іздеп, деректерді түсінікті жүйеге келтіремін",
          ru: "Ищу закономерности и структурирую данные в понятную систему",
          en: "I look for patterns and organise the data into a clear system",
        },
        weights: { analytical: 2, organised: 1 },
      },
      {
        id: "q3b",
        label: {
          kk: "Мұның қайсысы шынымен маңызды екенін адамдардан нақтылаймын",
          ru: "Уточняю у людей, что из этого действительно важно",
          en: "I ask people what in all this really matters",
        },
        weights: { social: 2 },
      },
      {
        id: "q3c",
        label: {
          kk: "Ақпаратты көрнекі түрде — сызба, визуал немесе әңгіме арқылы ұсынамын",
          ru: "Представляю информацию наглядно — схемой, визуалом, историей",
          en: "I present it visually — as a diagram, a visual or a story",
        },
        weights: { creative: 2 },
      },
      {
        id: "q3d",
        label: {
          kk: "Нәтижеге шынымен қажет нәрсені ғана қалдырамын",
          ru: "Оставляю только то, что реально пригодится для результата",
          en: "I keep only what will actually be useful for the result",
        },
        weights: { practical: 2 },
      },
    ],
  },
  {
    id: "q4",
    order: 4,
    situation: {
      kk: "Сізге бұрын кездеспеген міндет тапсырылды, ал нұсқаулық жоқтың қасы.",
      ru: "Вам поручили задачу, с которой вы раньше не сталкивались, и инструкции почти нет.",
      en: "You've been given a task you've never done before, with almost no instructions.",
    },
    question: {
      kk: "Неден бастайсыз?",
      ru: "С чего вы начнёте?",
      en: "Where do you start?",
    },
    options: [
      {
        id: "q4a",
        label: {
          kk: "Міндетті түсінікті қадамдарға бөліп, әрқайсысын жеке тексеремін",
          ru: "Разберу задачу на понятные шаги и проверю каждый по отдельности",
          en: "I break the task into clear steps and check each one separately",
        },
        weights: { analytical: 1, organised: 2 },
      },
      {
        id: "q4b",
        label: {
          kk: "Ұқсас нәрсеге бұрын тап болған адамды табамын",
          ru: "Найду человека, который уже сталкивался с похожим",
          en: "I find someone who has dealt with something similar",
        },
        weights: { social: 1, practical: 1 },
      },
      {
        id: "q4c",
        label: {
          kk: "Бірнеше тәсілді байқап, қайсысы жұмыс істейтінін көремін",
          ru: "Попробую несколько подходов и посмотрю, что сработает",
          en: "I try several approaches and see what works",
        },
        weights: { creative: 1, entrepreneurial: 2 },
      },
      {
        id: "q4d",
        label: {
          kk: "Бірден ең практикалық бөлігіне кірісіп, қалғанын жол-жөнекей түсінемін",
          ru: "Сразу приступлю к самой практичной части, а разберусь по ходу",
          en: "I jump straight into the most practical part and figure it out as I go",
        },
        weights: { practical: 2, entrepreneurial: 1 },
      },
    ],
  },
  {
    id: "q5",
    order: 5,
    situation: {
      kk: "Сіз алғашқы жұмыста немен айналысатыныңызды таңдап жатырсыз.",
      ru: "Вы выбираете, чем заниматься на первой работе.",
      en: "You're choosing what to do in your first job.",
    },
    question: {
      kk: "Нәтижеде сіз үшін ең маңыздысы не?",
      ru: "Что для вас важнее всего в результате?",
      en: "What matters most to you in the outcome?",
    },
    options: [
      {
        id: "q5a",
        label: {
          kk: "Менің қорытындыларымның команда шешімдеріне қалай әсер ететінін көру",
          ru: "Видеть, как мои выводы влияют на решения команды",
          en: "Seeing how my conclusions shape the team's decisions",
        },
        weights: { analytical: 2, organised: 1 },
      },
      {
        id: "q5b",
        label: {
          kk: "Адамдарға көмектесіп, олардың нақты мәселелерін шешу",
          ru: "Помогать людям и решать их конкретные вопросы",
          en: "Helping people and solving their specific problems",
        },
        weights: { social: 2 },
      },
      {
        id: "q5c",
        label: {
          kk: "Бұрын болмаған жаңа нәрсе жасау",
          ru: "Создавать что-то новое, чего раньше не было",
          en: "Creating something new that didn't exist before",
        },
        weights: { creative: 2, entrepreneurial: 1 },
      },
      {
        id: "q5d",
        label: {
          kk: "Жұмысымның нақты, аяқталған нәтижесін көру",
          ru: "Видеть осязаемый, законченный результат своей работы",
          en: "Seeing a tangible, finished result of my work",
        },
        weights: { practical: 2 },
      },
    ],
  },
];

export const CAREER_PROFILES: Record<CareerDimension, CareerProfileDefinition> = {
  analytical: {
    dimension: "analytical",
    title: {
      kk: "Деректер аналитикасы және зерттеулер",
      ru: "Аналитика данных и исследования",
      en: "Data analytics and research",
    },
    explanation: {
      kk: "Жауаптарыңыздан жағдайды талдап, нұсқаларды салыстырып, фактілерге сүйеніп ойластырылған шешім қабылдай алатыныңыз көрінеді. Сонымен қатар сізге өз қорытындыларыңыздың команда нәтижесіне қалай әсер ететінін көру маңызды.",
      ru: "По вашим ответам видно, что вы умеете анализировать ситуацию, сравнивать варианты и принимать взвешенные решения на основе фактов. При этом вам важно видеть, как ваши выводы влияют на результат команды.",
      en: "Your answers show that you can analyse a situation, compare options and make well-reasoned decisions based on facts. It also matters to you to see how your conclusions affect the team's results.",
    },
    icon: LineChart,
  },
  practical: {
    dimension: "practical",
    title: {
      kk: "Әзірлеу және цифрлық өнімдер",
      ru: "Разработка и цифровые продукты",
      en: "Development and digital products",
    },
    explanation: {
      kk: "Сіз түсінікті, нақты нәтижеге қарай жылжып, идеядан іске асыруға тез көшуді жөн көресіз. Сізге тек теория емес, жұмысыңыздың практикалық пайдасын көру маңызды.",
      ru: "Вы предпочитаете двигаться к понятному, ощутимому результату и быстро переходить от идеи к реализации. Вам важно видеть практическую пользу своей работы, а не только теорию.",
      en: "You prefer to work towards a clear, tangible result and move quickly from idea to implementation. You want to see the practical value of your work, not just the theory.",
    },
    icon: Code2,
  },
  social: {
    dimension: "social",
    title: {
      kk: "Коммуникация және адамдармен жұмыс",
      ru: "Коммуникации и работа с людьми",
      en: "Communication and working with people",
    },
    explanation: {
      kk: "Жауаптарыңыз адамдарды жақсы сезінетініңізді, диалог құра алатыныңызды және күрделі жағдайларда да ортақ тіл табатыныңызды көрсетеді. Бұл команда мен клиенттерге байланысты рөлдер үшін құнды қасиет.",
      ru: "Ваши ответы показывают, что вы хорошо чувствуете людей, умеете выстраивать диалог и находить общий язык даже в сложных ситуациях. Это ценное качество для ролей, связанных с командой и клиентами.",
      en: "Your answers show that you read people well, can build a dialogue and find common ground even in difficult situations. That's a valuable quality for roles involving teams and clients.",
    },
    icon: Users,
  },
  creative: {
    dimension: "creative",
    title: {
      kk: "Дизайн және шешімдер жасау",
      ru: "Дизайн и создание решений",
      en: "Design and building solutions",
    },
    explanation: {
      kk: "Сіз ерекше тәсілдерді іздеп, айқын шешімдердің арасынан ерекшеленетін идеяларды ұсынуға бейімсіз. Сізге жұмыс нәтижесі тек пайдалы ғана емес, қызықты болуы да маңызды.",
      ru: "Вы склонны искать нестандартные подходы и предлагать идеи, которые выделяются на фоне очевидных решений. Вам важно, чтобы результат работы был не только полезным, но и интересным.",
      en: "You tend to look for unconventional approaches and suggest ideas that stand out from the obvious ones. You want your work to be not only useful but interesting too.",
    },
    icon: Palette,
  },
  organised: {
    dimension: "organised",
    title: {
      kk: "Процестер мен жобаларды ұйымдастыру",
      ru: "Организация процессов и проектов",
      en: "Process and project organisation",
    },
    explanation: {
      kk: "Сіз міндеттерді құрылымдап, егжей-тегжейді қадағалап, бүкіл процесті толығымен есте ұстай аласыз. Командалар көбіне ретсіздікті түсінікті жүйеге айналдыра алатын адамдарға сүйенеді.",
      ru: "Вы умеете структурировать задачи, следить за деталями и удерживать в голове весь процесс целиком. Команды часто держатся на людях, которые умеют организовать хаос в понятную систему.",
      en: "You can structure tasks, keep track of details and hold the whole process in your head. Teams often rely on people who can turn chaos into a clear system.",
    },
    icon: ClipboardList,
  },
  entrepreneurial: {
    dimension: "entrepreneurial",
    title: {
      kk: "Техникалық және инженерлік бағыттар",
      ru: "Технические и инженерные направления",
      en: "Technical and engineering fields",
    },
    explanation: {
      kk: "Сіз жаңаны байқап көруге, бастаманы өз қолыңызға алуға және нақты нұсқаулық әлі жоқ жерде шешім іздеуге дайынсыз. Бұл бірнеше міндеттің түйіскен жерінде жұмыс істеуге тура келетін жерде бағаланады.",
      ru: "Вы готовы пробовать новое, брать на себя инициативу и искать решения там, где чёткой инструкции ещё не существует. Это ценится там, где приходится работать на стыке нескольких задач.",
      en: "You're ready to try new things, take the initiative and find solutions where no clear instructions exist yet. That's valued wherever work sits at the crossroads of several tasks.",
    },
    icon: Rocket,
  },
};

export const CAREER_RECOMMENDATIONS: Localized[] = [
  {
    kk: "Профильге оқу жобасын қосу",
    ru: "Добавить учебный проект в профиль",
    en: "Add a study project to your profile",
  },
  {
    kk: "Таңдалған бағыт бойынша қысқа кіріспе курстан өту",
    ru: "Пройти короткий вводный курс по выбранному направлению",
    en: "Take a short intro course in your chosen field",
  },
  {
    kk: "Бастапқы деңгейдегі практика немесе тағылымдама табу",
    ru: "Найти практику или стажировку начального уровня",
    en: "Find an entry-level placement or internship",
  },
  {
    kk: "Жұмыс берушіге көрсету үшін орындалған тапсырманың үлгісін дайындау",
    ru: "Подготовить пример выполненной задачи, чтобы показать работодателю",
    en: "Prepare an example of completed work to show an employer",
  },
];
