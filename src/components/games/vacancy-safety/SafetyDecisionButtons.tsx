"use client";

import { ShieldCheck, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/cn";
import type { VacancyDecision } from "@/types/games";
import { useLang } from "@/i18n/LanguageProvider";

interface SafetyDecisionButtonsProps {
  selected: VacancyDecision | null;
  onSelect: (decision: VacancyDecision) => void;
  disabled?: boolean;
}

export function SafetyDecisionButtons({ selected, onSelect, disabled }: SafetyDecisionButtonsProps) {
  const { tr } = useLang();
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <button
        type="button"
        disabled={disabled}
        onClick={() => onSelect("safe")}
        className={cn(
          "flex min-h-[44px] items-center justify-center gap-2 rounded-2xl border px-5 py-4 text-[15px] font-semibold transition-all disabled:pointer-events-none disabled:opacity-60",
          selected === "safe"
            ? "border-primary bg-soft text-primary"
            : "border-border bg-surface text-ink/80 hover:border-primary/40"
        )}
      >
        <ShieldCheck size={18} aria-hidden="true" />
        {tr({ kk: "Қауіпсіз көрінеді", ru: "Выглядит безопасно", en: "Looks safe" })}
      </button>
      <button
        type="button"
        disabled={disabled}
        onClick={() => onSelect("risk")}
        className={cn(
          "flex min-h-[44px] items-center justify-center gap-2 rounded-2xl border px-5 py-4 text-[15px] font-semibold transition-all disabled:pointer-events-none disabled:opacity-60",
          selected === "risk"
            ? "border-danger bg-danger/[0.06] text-danger"
            : "border-border bg-surface text-ink/80 hover:border-danger/40"
        )}
      >
        <ShieldAlert size={18} aria-hidden="true" />
        {tr({ kk: "Мұнда тәуекел бар", ru: "Здесь есть риск", en: "There's a risk" })}
      </button>
    </div>
  );
}
