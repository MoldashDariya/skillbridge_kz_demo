"use client";

import type { CareerProfileDefinition } from "@/types/games";
import { useLang } from "@/i18n/LanguageProvider";

interface CareerDirectionCardProps {
  direction: CareerProfileDefinition & { matchPercent: number };
}

export function CareerDirectionCard({ direction }: CareerDirectionCardProps) {
  const Icon = direction.icon;
  const { tr } = useLang();
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-soft/60 p-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-card">
        <Icon size={18} aria-hidden="true" />
      </span>
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-heading text-[15px] font-bold text-ink">{tr(direction.title)}</h3>
          <span className="rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-primary">
            {direction.matchPercent}% {tr({ kk: "сәйкестік", ru: "совпадение", en: "match" })}
          </span>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{tr(direction.explanation)}</p>
      </div>
    </div>
  );
}
