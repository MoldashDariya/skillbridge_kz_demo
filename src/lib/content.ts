import {
  UserCheck,
  ShieldCheck,
  Sparkles,
  Eye,
  Users,
  GraduationCap,
  Briefcase,
  Percent,
  ShieldAlert,
  Compass,
  Route,
  UserPlus,
  Building2,
  Trophy,
  ShieldQuestion,
  UsersRound,
  HeartHandshake,
} from "lucide-react";
import type { Localized } from "@/i18n/LanguageProvider";
import type {
  NavLink,
  FeatureBubble,
  Stat,
  ProblemItem,
  ProcessStep,
  GameItem,
  PartnerCategory,
  FaqItem,
  FooterLinkGroup,
} from "./types";
import { VIDEO_TRANSCRIPTS, type TranscriptSegment } from "./video-transcripts";

export const NAV_LINKS: NavLink[] = [
  { label: { kk: "Жоба туралы", ru: "О проекте", en: "About" }, href: "#about" },
  { label: { kk: "Қалай жұмыс істейді", ru: "Как работает", en: "How it works" }, href: "#how-it-works" },
  { label: { kk: "Ойындар", ru: "Игры", en: "Games" }, href: "#games" },
  { label: { kk: "Нәтижелер", ru: "Результаты", en: "Results" }, href: "#results" },
  { label: { kk: "Серіктестер", ru: "Партнёры", en: "Partners" }, href: "#partners" },
  { label: { kk: "Сұрақтар", ru: "FAQ", en: "FAQ" }, href: "#faq" },
];

export const HERO_TRUST_ITEMS: Localized[] = [
  { kk: "Тексерілген жұмыс берушілер", ru: "Проверенные работодатели", en: "Verified employers" },
  { kk: "Расталған студенттер", ru: "Подтверждённые студенты", en: "Verified students" },
  { kk: "AI-ұсыныстар", ru: "AI-рекомендации", en: "AI recommendations" },
];

export const HERO_FLOATING_CARDS: Localized[] = [
  { kk: "Тексерілген жұмыс беруші", ru: "Проверенный работодатель", en: "Verified employer" },
  { kk: "Бос орындарды AI іріктеуі", ru: "AI-подбор вакансий", en: "AI job matching" },
  { kk: "Колледж қолдауы", ru: "Поддержка колледжа", en: "College support" },
];

export const ABOUT_FEATURES: FeatureBubble[] = [
  {
    icon: UserCheck,
    label: {
      kk: "Бәрі расталған профильден басталады",
      ru: "Всё начинается с подтверждённого профиля",
      en: "Everything starts with a verified profile",
    },
  },
  {
    icon: ShieldCheck,
    label: {
      kk: "Тек тексерілген жұмыс берушілер",
      ru: "Только проверенные работодатели",
      en: "Only verified employers",
    },
  },
  {
    icon: Sparkles,
    label: {
      kk: "AI қолайлы мүмкіндіктерді табуға көмектеседі",
      ru: "AI помогает находить подходящие возможности",
      en: "AI helps find the right opportunities",
    },
  },
  {
    icon: Eye,
    label: {
      kk: "Жұмыс беруші студенттің дағдылары мен мамандығын көреді",
      ru: "Работодатель видит навыки и специальность студента",
      en: "Employers see the student's skills and field of study",
    },
  },
];

export const STATS: Stat[] = [
  {
    value: "100+",
    label: { kk: "Студент", ru: "Студентов", en: "Students" },
    icon: Users,
  },
  { value: "2", label: { kk: "Колледж", ru: "Колледжа", en: "Colleges" }, icon: GraduationCap },
  {
    value: "12+",
    label: { kk: "Тағылымдама", ru: "Стажировок", en: "Internships" },
    icon: Briefcase,
  },
  {
    value: "57%",
    label: { kk: "Қатысушылар — қыздар", ru: "Участников — девушки", en: "Of participants are women" },
    icon: Percent,
  },
];

export const PROBLEMS: ProblemItem[] = [
  {
    icon: Briefcase,
    title: {
      kk: "Тәжірибесіз алғашқы жұмыс",
      ru: "Первая работа без опыта",
      en: "A first job without experience",
    },
    description: {
      kk: "Бос орындардың көбі студентте әлі жоқ тәжірибені талап етеді.",
      ru: "Большинство вакансий требуют опыт, которого у студента ещё нет.",
      en: "Most vacancies ask for experience a student doesn't have yet.",
    },
  },
  {
    icon: ShieldAlert,
    title: {
      kk: "Алаяқтыққа тап болу қаупі",
      ru: "Риск столкнуться с обманом",
      en: "The risk of being scammed",
    },
    description: {
      kk: "Кәсіби көрінетін хабарландырулардың артында жалған немесе қауіпті ұсыныстар жасырынуы мүмкін.",
      ru: "За профессиональными объявлениями могут скрываться фейковые или небезопасные предложения.",
      en: "Professional-looking ads can hide fake or unsafe offers.",
    },
  },
  {
    icon: Compass,
    title: {
      kk: "Мүмкіндіктер шашыраңқы",
      ru: "Возможности разбросаны",
      en: "Opportunities are scattered",
    },
    description: {
      kk: "Telegram, әлеуметтік желілер, сайттар мен таныстар арқылы практика іздеу ұзаққа созылады.",
      ru: "Telegram, социальные сети, сайты и личные знакомства превращают поиск практики в долгий процесс.",
      en: "Telegram, social media, websites and personal contacts turn the search for a placement into a long process.",
    },
  },
  {
    icon: Route,
    title: {
      kk: "Колледж бүкіл жолды әрдайым көре бермейді",
      ru: "Колледж не всегда видит весь путь",
      en: "Colleges can't always see the full picture",
    },
    description: {
      kk: "Жолдама берілгеннен кейін студенттің практика орнын тапқанын және процестің қалай өтіп жатқанын бақылау қиын.",
      ru: "После выдачи направления сложно контролировать, нашёл ли студент место практики и как проходит процесс.",
      en: "Once a referral is issued, it's hard to track whether the student found a placement and how it's going.",
    },
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: UserPlus,
    title: { kk: "Студент профиль жасайды", ru: "Студент создаёт профиль", en: "The student creates a profile" },
    order: 1,
  },
  {
    icon: ShieldCheck,
    title: { kk: "Колледж студентті растайды", ru: "Колледж подтверждает студента", en: "The college verifies the student" },
    order: 2,
  },
  {
    icon: Building2,
    title: { kk: "Жұмыс беруші модерациядан өтеді", ru: "Работодатель проходит модерацию", en: "The employer passes moderation" },
    order: 3,
  },
  {
    icon: Sparkles,
    title: { kk: "AI қолайлы мүмкіндіктерді табады", ru: "AI находит подходящие возможности", en: "AI finds suitable opportunities" },
    order: 4,
  },
  {
    icon: Trophy,
    title: { kk: "Студент алғашқы тәжірибесін алады", ru: "Студент получает первый опыт", en: "The student gains first experience" },
    order: 5,
  },
];

export const GAMES: GameItem[] = [
  {
    icon: Compass,
    title: { kk: "Сізге қай мамандық сәйкес келеді?", ru: "Какая профессия подходит вам?", en: "Which career suits you?" },
    description: {
      kk: "Бес жұмыс жағдаяты сіздің шешім қабылдау, міндеттерді шешу және адамдармен әрекеттесу тәсіліңізді көрсетеді.",
      ru: "Пять рабочих ситуаций покажут, как вы принимаете решения, решаете задачи и взаимодействуете с людьми.",
      en: "Five work situations show how you make decisions, solve problems and work with people.",
    },
    meta: { kk: "5 сұрақ · шамамен 2 минут", ru: "5 вопросов · около 2 минут", en: "5 questions · about 2 minutes" },
    buttonLabel: { kk: "Бастау", ru: "Начать", en: "Start" },
    accent: "blue",
  },
  {
    icon: ShieldQuestion,
    title: { kk: "Жалған ба, әлде нақты бос орын ба?", ru: "Фейк или реальная вакансия?", en: "Fake or real vacancy?" },
    description: {
      kk: "Алты хабарландыру қауіпсіз бос орынды күмәнді бос орыннан ажырата алатыныңызды тексеруге көмектеседі.",
      ru: "Шесть объявлений помогут проверить, умеете ли вы отличать безопасную вакансию от сомнительной.",
      en: "Six ads help you check whether you can tell a safe vacancy from a suspicious one.",
    },
    meta: { kk: "6 хабарландыру · шамамен 2 минут", ru: "6 объявлений · около 2 минут", en: "6 ads · about 2 minutes" },
    buttonLabel: { kk: "Бастау", ru: "Начать", en: "Start" },
    accent: "violet",
  },
  {
    icon: UsersRound,
    title: {
      kk: "Сұхбатқа кімді шақырар едіңіз?",
      ru: "Кого бы вы пригласили на собеседование?",
      en: "Who would you invite to an interview?",
    },
    description: {
      kk: "Бес түйіндеме мен жағдаят үміткерлерді іріктеуге жұмыс берушінің көзімен қарауға көмектеседі.",
      ru: "Пять резюме и ситуаций помогут посмотреть на отбор кандидатов глазами работодателя.",
      en: "Five CVs and situations let you see candidate selection through an employer's eyes.",
    },
    meta: { kk: "5 үміткер · 3 нұсқа", ru: "5 кандидатов · 3 варианта", en: "5 candidates · 3 options" },
    buttonLabel: { kk: "Бастау", ru: "Начать", en: "Start" },
    accent: "yellow",
  },
];

export interface VideoTestimonial {
  studentName: string;
  college: string;
  speciality: string;
  videoSrc: string;   // path in /public/videos
  poster: string;     // static frame shown before play, also in /public/videos (or /public/images)
  /** Timed transcript of what is said in the video, shown under the player. */
  transcript: TranscriptSegment[];
}

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    studentName: "",
    college: "",
    speciality: "",
    videoSrc: "/videos/1.mov",
    poster: "/videos/1.jpg",
    transcript: VIDEO_TRANSCRIPTS["1"],
  },
  {
    studentName: "",
    college: "",
    speciality: "",
    videoSrc: "/videos/2.mp4",
    poster: "/videos/2.jpg",
    transcript: VIDEO_TRANSCRIPTS["2"],
  },
  {
    studentName: "",
    college: "",
    speciality: "",
    videoSrc: "/videos/3.mp4",
    poster: "/videos/3.jpg",
    transcript: VIDEO_TRANSCRIPTS["3"],
  },
  {
    studentName: "",
    college: "",
    speciality: "",
    videoSrc: "/videos/4.mov",
    poster: "/videos/4.jpg",
    transcript: VIDEO_TRANSCRIPTS["4"],
  },
  // add the rest of your video reviews here, matching real filenames in public/videos
  // and a transcript entry in video-transcripts.ts
];

export interface TextTestimonial {
  studentName: string;
  college: string;
  text: Localized;
}

export const TEXT_TESTIMONIALS: TextTestimonial[] = [
  {
    studentName: "",
    college: "",
    text: {
      kk: "Бұған дейін практиканы тек таныстар арқылы немесе бос орынның шын-жалғаны белгісіз Telegram-чаттардан іздейтінмін. Мұнда барлық жұмыс берушілердің тексерілгені ұнады. Өтінімді бірнеше минутта жібердім және мәртебесі бірден көрініп тұрды. Мұндай платформаны пайдалану әлдеқайда тыныш.",
      ru: "До этого искала практику только через знакомых или Telegram-чаты, где было непонятно, настоящая ли вакансия. Здесь понравилось, что все работодатели проверенные. Подала заявку буквально за пару минут и сразу было видно статус. Намного спокойнее пользоваться такой платформой.",
      en: "Before this I only looked for placements through friends or Telegram chats, where you couldn't tell if a vacancy was real. Here I liked that every employer is verified. I applied in literally a couple of minutes and could see the status right away. Using a platform like this feels much safer.",
    },
  },
  {
    studentName: "",
    college: "",
    text: {
      kk: "Әдетте жұмыс берушілер студенттерде әлі жоқ тәжірибені қалайды. SkillBridge-те дәл колледж студенттеріне арналған бос орындарды көрдім, сондықтан түйіндемені бекер жіберіп жатқандай сезім болмады. Интерфейсі өте қарапайым, тез түсіндім.",
      ru: "Обычно работодатели хотят опыт, которого у студентов еще нет. На SkillBridge увидела вакансии именно для студентов колледжей, поэтому не было ощущения, что отправляешь резюме впустую. Интерфейс очень простой, разобралась быстро.",
      en: "Employers usually want experience students don't have yet. On SkillBridge I saw vacancies made specifically for college students, so it didn't feel like sending my CV into the void. The interface is very simple, I figured it out quickly.",
    },
  },
  {
    studentName: "",
    college: "",
    text: {
      kk: "Ең ұнағаны — бос орындарды әртүрлі сайттардан іздеудің қажеті жоқ. Бәрі бір жерде, оның үстіне бос орынның мамандығыма сәйкес келетіні бірден түсінікті. Платформаны басқа колледждерге де қосады деп үміттенемін.",
      ru: "Больше всего понравилось, что не нужно искать вакансии по разным сайтам. Все в одном месте, плюс сразу понятно, подходит ли вакансия под мою специальность. Надеюсь, платформу подключат и в других колледжах.",
      en: "What I liked most is that you don't have to search different websites. Everything is in one place, and it's immediately clear whether a vacancy fits my field. I hope other colleges join the platform too.",
    },
  },
  {
    studentName: "",
    college: "",
    text: {
      kk: "Ең ұнағаны — платформаның өзі қолайлы бос орындарды ұсынады. Ұзақ іздеудің қажеті жоқ — AI мамандығыма сай ұсыныстарды бірден көрсетеді. Бұл уақытты көп үнемдейді.",
      ru: "Больше всего понравилось, что платформа сама предлагает подходящие вакансии. Не нужно долго искать — AI сразу показывает предложения, которые подходят под мою специальность. Это сильно экономит время.",
      en: "What I liked most is that the platform suggests suitable vacancies by itself. No need to search for ages — AI immediately shows offers that match my field. It saves a lot of time.",
    },
  },
];

export const PARTNER_CATEGORIES: PartnerCategory[] = [
  {
    icon: GraduationCap,
    title: { kk: "Колледждер", ru: "Колледжи", en: "Colleges" },
    description: {
      kk: "Студенттердің мәртебесін растайды және практика туралы ашық ақпарат алады.",
      ru: "Подтверждают статус студентов и получают прозрачную картину практики.",
      en: "Verify student status and get a clear view of placements.",
    },
  },
  {
    icon: Building2,
    title: { kk: "Жұмыс берушілер", ru: "Работодатели", en: "Employers" },
    description: {
      kk: "Тексерілген платформа арқылы ынталы студенттер мен тағылымдамашыларды табады.",
      ru: "Находят мотивированных студентов и стажёров через проверенную платформу.",
      en: "Find motivated students and interns through a verified platform.",
    },
  },
  {
    icon: HeartHandshake,
    title: { kk: "Жастар бастамалары", ru: "Молодёжные инициативы", en: "Youth initiatives" },
    description: {
      kk: "Тәлімгерлік және алғашқы кәсіби тәжірибе бағдарламаларын дамытуға көмектеседі.",
      ru: "Помогают развивать программы наставничества и первого профессионального опыта.",
      en: "Help grow mentoring and first-work-experience programmes.",
    },
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: {
      kk: "SkillBridge KZ-ті кім пайдалана алады?",
      ru: "Кто может пользоваться SkillBridge KZ?",
      en: "Who can use SkillBridge KZ?",
    },
    answer: {
      kk: "Платформа ең алдымен колледж студенттері, жұмыс берушілер және оқу орындарының өкілдері үшін жасалып жатыр. Әр пайдаланушы тобына жеке функциялар қолжетімді.",
      ru: "Платформа создаётся прежде всего для студентов колледжей, работодателей и представителей учебных заведений. Отдельные функции доступны каждой группе пользователей.",
      en: "The platform is built primarily for college students, employers and representatives of educational institutions. Each group of users has its own features.",
    },
  },
  {
    question: {
      kk: "Платформа студенттер үшін тегін бе?",
      ru: "Платформа бесплатна для студентов?",
      en: "Is the platform free for students?",
    },
    answer: {
      kk: "Иә. Студенттер профиль жасап, ұсыныстар алып, қолжетімді бос орындарға тегін өтінім бере алады.",
      ru: "Да. Студенты могут создавать профиль, получать рекомендации и откликаться на доступные вакансии бесплатно.",
      en: "Yes. Students can create a profile, get recommendations and apply to available vacancies for free.",
    },
  },
  {
    question: {
      kk: "Жұмыс берушілер қалай тексеріледі?",
      ru: "Как проверяются работодатели?",
      en: "How are employers verified?",
    },
    answer: {
      kk: "Бос орын жарияламас бұрын жұмыс беруші компания туралы ақпарат береді және модерациядан өтеді. Тексеру жалған және қауіпті хабарландырулардың қаупін азайтуға көмектеседі.",
      ru: "Перед публикацией вакансий работодатель предоставляет информацию о компании и проходит модерацию. Проверка помогает снизить риск фейковых и небезопасных объявлений.",
      en: "Before publishing vacancies, an employer provides company information and passes moderation. This check helps reduce the risk of fake and unsafe ads.",
    },
  },
  {
    question: {
      kk: "Студентке колледж растауы не үшін керек?",
      ru: "Зачем студенту подтверждение колледжа?",
      en: "Why does a student need college verification?",
    },
    answer: {
      kk: "Растау жұмыс берушіге пайдаланушының шынымен көрсетілген колледжде және көрсетілген мамандық бойынша оқитынын көрсетеді. Бұл профильге деген сенімді арттырады.",
      ru: "Подтверждение показывает работодателю, что пользователь действительно обучается в указанном колледже и по указанной специальности. Это повышает доверие к профилю.",
      en: "Verification shows the employer that the user really studies at the stated college in the stated field. This makes the profile more trustworthy.",
    },
  },
  {
    question: {
      kk: "AI жұмыс берушінің шешімін алмастыра ма?",
      ru: "Заменяет ли AI решение работодателя?",
      en: "Does AI replace the employer's decision?",
    },
    answer: {
      kk: "Жоқ. AI профильді талдауға, қолайлы бос орындарды табуға және ұсыныстар беруге көмектеседі, бірақ түпкілікті шешімді әрқашан адам қабылдайды.",
      ru: "Нет. AI помогает анализировать профиль, находить подходящие вакансии и давать рекомендации, но окончательное решение всегда принимает человек.",
      en: "No. AI helps analyse profiles, find suitable vacancies and make recommendations, but the final decision is always made by a person.",
    },
  },
  {
    question: {
      kk: "Біздің колледжді қосуға бола ма?",
      ru: "Можно ли подключить наш колледж?",
      en: "Can our college join?",
    },
    answer: {
      kk: "Иә. Колледждер платформаның пилоттық сынағына қосылып, жүйені студенттерді растау және практиканың өтуін бақылау үшін пайдалана алады.",
      ru: "Да. Колледжи могут присоединиться к пилотированию платформы и использовать систему для подтверждения студентов и контроля прохождения практики.",
      en: "Yes. Colleges can join the platform pilot and use the system to verify students and track placements.",
    },
  },
  {
    question: {
      kk: "Жұмыс беруші бос орынды қалай орналастырады?",
      ru: "Как работодателю разместить вакансию?",
      en: "How does an employer post a vacancy?",
    },
    answer: {
      kk: "Компания профилін тіркеп, тексеруден өту керек, ал расталғаннан кейін түсінікті шарттары мен талаптары бар бос орынды жариялауға болады.",
      ru: "Необходимо зарегистрировать профиль компании, пройти проверку и после подтверждения опубликовать вакансию с понятными условиями и требованиями.",
      en: "Register a company profile, pass verification, and once approved, publish a vacancy with clear conditions and requirements.",
    },
  },
];

export const FOOTER_GROUPS: FooterLinkGroup[] = [
  {
    title: { kk: "Навигация", ru: "Навигация", en: "Navigation" },
    links: [
      { label: { kk: "Жоба туралы", ru: "О проекте", en: "About" }, href: "#about" },
      { label: { kk: "Қалай жұмыс істейді", ru: "Как работает", en: "How it works" }, href: "#how-it-works" },
      { label: { kk: "Ойындар", ru: "Игры", en: "Games" }, href: "#games" },
      { label: { kk: "Нәтижелер", ru: "Результаты", en: "Results" }, href: "#results" },
    ],
  },
  {
    title: { kk: "Пайдаланушыларға", ru: "Пользователям", en: "For users" },
    links: [
      { label: { kk: "Студенттерге", ru: "Для студентов", en: "For students" }, href: "#" },
      { label: { kk: "Жұмыс берушілерге", ru: "Для работодателей", en: "For employers" }, href: "#" },
      { label: { kk: "Колледждерге", ru: "Для колледжей", en: "For colleges" }, href: "#" },
      { label: { kk: "Байланыс", ru: "Контакты", en: "Contacts" }, href: "#" },
    ],
  },
];
