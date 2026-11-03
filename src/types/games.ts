import type { LucideIcon } from "lucide-react";
import type { Localized } from "@/i18n/LanguageProvider";

/** Lifecycle status shared by every mini-game. */
export type GameStatus =
  | "intro"
  | "playing"
  | "loading"
  | "result";

export interface GameProgress {
  current: number;
  total: number;
}

export type GameSlug = "career-profile" | "vacancy-safety" | "employer";

/* -------------------------------------------------------------------------- */
/* Game 1 — Career profile                                                    */
/* -------------------------------------------------------------------------- */

export type CareerDimension =
  | "analytical"
  | "social"
  | "creative"
  | "practical"
  | "organised"
  | "entrepreneurial";

export interface CareerAnswerOption {
  id: string;
  label: Localized;
  /** Weight added to one or more dimensions when this option is chosen. */
  weights: Partial<Record<CareerDimension, number>>;
}

export interface CareerQuestion {
  id: string;
  order: number;
  situation: Localized;
  question: Localized;
  options: CareerAnswerOption[];
}

export interface CareerAnswer {
  questionId: string;
  optionId: string;
}

export interface CareerProfileDefinition {
  dimension: CareerDimension;
  title: Localized;
  explanation: Localized;
  icon: LucideIcon;
}

export interface CareerProfileResult {
  primary: CareerProfileDefinition;
  alternatives: Array<CareerProfileDefinition & { matchPercent: number }>;
  scores: Record<CareerDimension, number>;
}

/* -------------------------------------------------------------------------- */
/* Game 2 — Vacancy safety                                                    */
/* -------------------------------------------------------------------------- */

export type VacancyRiskCategory =
  | "payment_required"
  | "personal_card_transfer"
  | "bank_details_request"
  | "documents_before_offer"
  | "anonymous_telegram_only"
  | "unrealistic_salary"
  | "no_company_info"
  | "unpaid_trial_project"
  | "none";

export interface VacancyScenario {
  id: string;
  order: number;
  title: Localized;
  company: Localized;
  location: Localized;
  workFormat: Localized;
  salary: Localized;
  description: Localized;
  responsibilities: Localized[];
  requirements: Localized[];
  conditions: Localized[];
  isSafe: boolean;
  riskCategory: VacancyRiskCategory;
  /** The exact phrase/condition to visually highlight during review. */
  highlightedDetail: Localized;
  explanation: Localized;
  safetyTip: Localized;
}

export type VacancyDecision = "safe" | "risk";

export interface VacancyFeedback {
  scenarioId: string;
  decision: VacancyDecision;
  isCorrect: boolean;
}

/* -------------------------------------------------------------------------- */
/* Game 3 — Employer simulation                                               */
/* -------------------------------------------------------------------------- */

export interface EmployerVacancy {
  title: Localized;
  responsibilities: Localized[];
  requiredSkills: Localized[];
  preferredSkills: Localized[];
  schedule: Localized;
  workFormat: Localized;
  educationExpectation: Localized;
  learningOpportunities: Localized[];
}

export type EmployerDecision = "invite" | "clarify" | "reject";

export interface CandidateProfile {
  id: string;
  order: number;
  name: Localized;
  ageRange: Localized;
  speciality: Localized;
  location: Localized;
  availability: Localized;
  education: Localized;
  experience: Localized;
  projects: Localized[];
  skills: Localized[];
  missingInformation: Localized[];
  strengths: Localized[];
  concerns: Localized[];
  recommendedDecision: EmployerDecision;
  explanation: Localized;
  /** 0-3, used to rank decision quality without a strict "correct answer" feel. */
  decisionScore: Record<EmployerDecision, number>;
}

export interface EmployerFeedback {
  candidateId: string;
  decision: EmployerDecision;
  score: number;
}

/* -------------------------------------------------------------------------- */
/* Generic result wrapper (used for the /games/complete hand-off)             */
/* -------------------------------------------------------------------------- */

export interface GameResult {
  slug: GameSlug;
  completedAt: string;
}

/* -------------------------------------------------------------------------- */
/* Analytics                                                                  */
/* -------------------------------------------------------------------------- */

export type GameAnalyticsEvent =
  | "game_opened"
  | "game_started"
  | "game_question_answered"
  | "game_completed"
  | "game_restarted"
  | "game_platform_cta_clicked"
  | "game_other_game_clicked";
