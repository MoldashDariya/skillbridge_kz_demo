import type { Localized } from "@/i18n/LanguageProvider";

/** One spoken line of a video, with its time range in seconds. */
export interface TranscriptSegment {
  start: number;
  end: number;
  text: Localized;
}

/**
 * Transcripts of the video reviews in /public/videos, keyed by file number.
 * The videos are recorded in Russian; `ru` is what is said, `kk` and `en`
 * are translations. Timings come from automatic speech recognition — adjust
 * them here if a line is highlighted too early or too late.
 */
export const VIDEO_TRANSCRIPTS: Record<string, TranscriptSegment[]> = {
  "1": [
    {
      start: 0.6,
      end: 7.8,
      text: {
        kk: "Барлығыңызға сәлем, менің атым Дамир, мен электромонтер мамандығының үшінші курс студентімін.",
        ru: "Всем привет, меня зовут Дамир, я студент третьего курса специальности «Электромонтёр».",
        en: "Hi everyone, my name is Damir, I'm a third-year student studying to be an electrician.",
      },
    },
    {
      start: 8.5,
      end: 14.4,
      text: {
        kk: "Жақында мен SkillBridge KZ платформасының пилоттық сынағына қатыстым.",
        ru: "Недавно я принял участие в пилотном тестировании платформы SkillBridge KZ.",
        en: "Recently I took part in the pilot testing of the SkillBridge KZ platform.",
      },
    },
    {
      start: 15.0,
      end: 19.6,
      text: {
        kk: "Бұл платформаны пайдалану маған ұнады, өте қарапайым әрі ыңғайлы.",
        ru: "Мне понравилось пользоваться этой платформой, очень просто и удобно.",
        en: "I enjoyed using the platform — it's very simple and convenient.",
      },
    },
    {
      start: 20.5,
      end: 31.6,
      text: {
        kk: "Енді практиканы немесе алғашқы жұмысыңды көптеген әртүрлі чаттарды қарап шықпай-ақ бір жерден іздеуге болады.",
        ru: "Теперь можно искать практику или же первую свою работу в одном месте, не просматривая множество разных чатов.",
        en: "Now you can look for a placement or your first job in one place, without scrolling through lots of different chats.",
      },
    },
    {
      start: 32.2,
      end: 36.1,
      text: {
        kk: "Бұл жоба шынымен көптеген студенттерге көмектеседі деп ойлаймын.",
        ru: "Думаю, этот проект действительно поможет многим студентам.",
        en: "I think this project will really help a lot of students.",
      },
    },
  ],
  "2": [
    {
      start: 0.7,
      end: 6.5,
      text: {
        kk: "Барлығыңызға сәлем! Менің атым Кирилл. Мен электромонтер мамандығының екінші курс студентімін.",
        ru: "Всем привет! Меня зовут Кирилл. Я студент второго курса специальности «Электромонтёр».",
        en: "Hi everyone! My name is Kirill. I'm a second-year student studying to be an electrician.",
      },
    },
    {
      start: 6.5,
      end: 9.8,
      text: {
        kk: "Мен SkillBridge KZ пилоттық сынағына қатыстым.",
        ru: "Я участвовал в пилотном тестировании SkillBridge KZ.",
        en: "I took part in the SkillBridge KZ pilot testing.",
      },
    },
    {
      start: 10.2,
      end: 14.7,
      text: {
        kk: "Платформаны пайдаланғаннан кейін команда бізден өз идеяларымызбен бөлісуді сұрады.",
        ru: "После использования платформы команда попросила нас поделиться своими идеями.",
        en: "After we used the platform, the team asked us to share our ideas.",
      },
    },
    {
      start: 15.1,
      end: 21.0,
      text: {
        kk: "Мен түйіндеме құрастыруға және сұхбатқа дайындалуға көмектесетін AI-көмекші қосуды ұсындым.",
        ru: "Я предложил добавить AI-помощника, который помогал бы составлять резюме и готовиться к собеседованиям.",
        en: "I suggested adding an AI assistant that would help write a CV and prepare for interviews.",
      },
    },
    {
      start: 21.4,
      end: 25.6,
      text: {
        kk: "Команданың студенттердің пікіріне шынымен құлақ асатыны өте жағымды.",
        ru: "Очень приятно, что команда действительно прислушивается к мнению студентов.",
        en: "It's really nice that the team actually listens to what students think.",
      },
    },
  ],
  "3": [
    {
      start: 0.0,
      end: 4.5,
      text: {
        kk: "Сәлеметсіз бе, менің атым Максим Коворов, мен Талғар политехникалық колледжінің студентімін.",
        ru: "Здравствуйте, меня зовут Коворов Максим, я студент Талгарского политехнического колледжа.",
        en: "Hello, my name is Maxim Kovorov, I'm a student at Talgar Polytechnic College.",
      },
    },
    {
      start: 4.8,
      end: 12.4,
      text: {
        kk: "Мен SkillBridge KZ пилоттық нұсқасын сынап көрдім және көңілім толды: интерфейсі түсінікті, ал жобаның идеясының өзі өте өзекті.",
        ru: "Я протестировал пилотную версию SkillBridge KZ и остался доволен: интерфейс оказался понятным, а сама идея проекта очень актуальна.",
        en: "I tested the pilot version of SkillBridge KZ and was happy with it: the interface is easy to understand, and the idea itself is very relevant.",
      },
    },
    {
      start: 12.7,
      end: 18.5,
      text: {
        kk: "Әсіресе пилоттан кейін команда платформаны одан да ыңғайлы ету үшін кері байланыс жинағаны ұнады.",
        ru: "Особенно понравилось, что после пилота команда собирала обратную связь, чтобы сделать платформу ещё удобнее.",
        en: "I especially liked that after the pilot the team collected feedback to make the platform even more convenient.",
      },
    },
    {
      start: 18.9,
      end: 21.4,
      text: {
        kk: "Жобаның толық нұсқасын көруге қуаныштымын.",
        ru: "Буду рад увидеть полную версию проекта.",
        en: "I'm looking forward to seeing the full version of the project.",
      },
    },
  ],
  "4": [
    {
      start: 0.0,
      end: 4.0,
      text: {
        kk: "Сәлеметсіз бе, менің атым Андрей, мен Талғар политехникалық колледжінің студентімін.",
        ru: "Здравствуйте, меня зовут Андрей, я студент Талгарского политехнического колледжа.",
        en: "Hello, my name is Andrey, I'm a student at Talgar Polytechnic College.",
      },
    },
    {
      start: 4.6,
      end: 8.3,
      text: {
        kk: "Мен SkillBridge KZ пилоттық нұсқасын сынап көрдім және көңілім толды.",
        ru: "Я протестировал пилотную версию SkillBridge KZ и остался доволен.",
        en: "I tested the pilot version of SkillBridge KZ and was happy with it.",
      },
    },
    {
      start: 8.5,
      end: 12.2,
      text: {
        kk: "Интерфейсі түсінікті, ал жобаның идеясының өзі өте өзекті.",
        ru: "Интерфейс оказался понятным, а сама идея проекта очень актуальна.",
        en: "The interface is easy to understand, and the idea itself is very relevant.",
      },
    },
    {
      start: 12.5,
      end: 19.5,
      text: {
        kk: "Әсіресе пилоттан кейін команда платформаны одан да ыңғайлы ету үшін кері байланыс жинағаны ұнады.",
        ru: "Особенно понравилось, что после пилота команда собирала обратную связь, чтобы сделать платформу ещё удобнее.",
        en: "I especially liked that after the pilot the team collected feedback to make the platform even more convenient.",
      },
    },
    {
      start: 19.5,
      end: 22.1,
      text: {
        kk: "Жобаның толық нұсқасын көруге қуаныштымын.",
        ru: "Буду рад увидеть полную версию проекта.",
        en: "I'm looking forward to seeing the full version of the project.",
      },
    },
  ],
};
