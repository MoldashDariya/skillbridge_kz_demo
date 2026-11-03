import { Compass, ShieldQuestion, UsersRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Localized } from "@/i18n/LanguageProvider";

export interface CatalogueGame {
  icon: LucideIcon;
  title: Localized;
  description: Localized;
  meta: Localized;
  buttonLabel: Localized;
  route: string;
  accent: "blue" | "violet" | "yellow";
}

export const GAME_CATALOGUE: CatalogueGame[] = [
  {
    icon: Compass,
    title: {
      kk: "Сізге дәл қай мамандық сәйкес келеді?",
      ru: "Какая профессия подходит именно вам?",
      en: "Which career is right for you?",
    },
    description: {
      kk: "Бес жұмыс жағдаяты сіздің шешім қабылдау, адамдармен әрекеттесу және жаңа міндеттерді шешу тәсіліңізді көрсетеді.",
      ru: "Пять рабочих ситуаций покажут, как вы принимаете решения, взаимодействуете с людьми и решаете новые задачи.",
      en: "Five work situations show how you make decisions, work with people and tackle new tasks.",
    },
    meta: {
      kk: "5 сұрақ · шамамен 2 минут",
      ru: "5 вопросов · около 2 минут",
      en: "5 questions · about 2 minutes",
    },
    buttonLabel: {
      kk: "Нәтижемді білу",
      ru: "Узнать свой результат",
      en: "Get my result",
    },
    route: "/games/career-profile",
    accent: "blue",
  },
  {
    icon: ShieldQuestion,
    title: {
      kk: "Қауіпті бос орынды тани аласыз ба?",
      ru: "Сможете распознать небезопасную вакансию?",
      en: "Can you spot an unsafe vacancy?",
    },
    description: {
      kk: "Алты хабарландыру сенімді көрінеді. Бірақ олардың тек үшеуі ғана шынымен қауіпсіз.",
      ru: "Шесть объявлений выглядят убедительно. Но только три из них действительно безопасны.",
      en: "Six ads look convincing. But only three of them are actually safe.",
    },
    meta: {
      kk: "6 бос орын · шамамен 4 минут · 3 жасырын қауіп",
      ru: "6 вакансий · около 4 минут · 3 скрытых риска",
      en: "6 vacancies · about 4 minutes · 3 hidden risks",
    },
    buttonLabel: {
      kk: "Тексеруді бастау",
      ru: "Начать проверку",
      en: "Start checking",
    },
    route: "/games/vacancy-safety",
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
      kk: "Бос орын талаптарын бес профильмен салыстырып, нағыз жұмыс беруші сияқты шешім қабылдап көріңіз.",
      ru: "Сравните требования вакансии с пятью профилями и попробуйте принять решение как настоящий работодатель.",
      en: "Compare a vacancy's requirements with five profiles and try deciding like a real employer.",
    },
    meta: {
      kk: "5 үміткер · шамамен 4–5 минут · 3 шешім нұсқасы",
      ru: "5 кандидатов · около 4–5 минут · 3 варианта решения",
      en: "5 candidates · about 4–5 minutes · 3 possible decisions",
    },
    buttonLabel: {
      kk: "Іріктеуді бастау",
      ru: "Начать отбор",
      en: "Start selecting",
    },
    route: "/games/employer",
    accent: "yellow",
  },
];
