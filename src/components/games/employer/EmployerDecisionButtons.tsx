"use client";

import { UserCheck, HelpCircle, UserX } from "lucide-react";
import { cn } from "@/lib/cn";
import type { EmployerDecision } from "@/types/games";
import { useLang, type Localized } from "@/i18n/LanguageProvider";

interface EmployerDecisionButtonsProps {
  selected: EmployerDecision | null;
  onSelect: (decision: EmployerDecision) => void;
  disabled?: boolean;
}

const OPTIONS: Array<{ value: EmployerDecision; label: Localized; icon: typeof UserCheck }> = [
  { value: "invite", label: { kk: "Шақыру", ru: "Пригласить", en: "Invite" }, icon: UserCheck },
  { value: "clarify", label: { kk: "Ақпарат сұрау", ru: "Запросить информацию", en: "Ask for more info" }, icon: HelpCircle },
  { value: "reject", label: { kk: "Әзірге бас тарту", ru: "Пока отказать", en: "Decline for now" }, icon: UserX },
];

export function EmployerDecisionButtons({ selected, onSelect, disabled }: EmployerDecisionButtonsProps) {
  const { tr } = useLang();
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {OPTIONS.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(value)}
          className={cn(
            "flex min-h-[44px] items-center justify-center gap-2 rounded-2xl border px-5 py-4 text-[15px] font-semibold transition-all disabled:pointer-events-none disabled:opacity-60",
            selected === value
              ? "border-primary bg-soft text-primary"
              : "border-border bg-surface text-ink/80 hover:border-primary/40"
          )}
        >
          <Icon size={18} aria-hidden="true" />
          {tr(label)}
        </button>
      ))}
    </div>
  );
}
