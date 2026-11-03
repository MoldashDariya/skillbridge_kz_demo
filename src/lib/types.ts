import type { LucideIcon } from "lucide-react";
import type { Localized } from "@/i18n/LanguageProvider";

export interface NavLink {
  label: Localized;
  href: string;
}

export interface TrustItem {
  label: Localized;
}

export interface FeatureBubble {
  icon: LucideIcon;
  label: Localized;
}

export interface Stat {
  value: string;
  label: Localized;
  icon: LucideIcon;
}

export interface ProblemItem {
  icon: LucideIcon;
  title: Localized;
  description: Localized;
}

export interface ProcessStep {
  icon: LucideIcon;
  title: Localized;
  order: number;
}

export interface GameItem {
  icon: LucideIcon;
  title: Localized;
  description: Localized;
  meta: Localized;
  buttonLabel: Localized;
  accent: "blue" | "violet" | "yellow";
}

export interface ResultStory {
  studentName: Localized;
  college: Localized;
  speciality: Localized;
  result: Localized;
  isPlaceholder: boolean;
}

export interface PartnerCategory {
  icon: LucideIcon;
  title: Localized;
  description: Localized;
}

export interface FaqItem {
  question: Localized;
  answer: Localized;
}

export interface FooterLinkGroup {
  title: Localized;
  links: NavLink[];
}
