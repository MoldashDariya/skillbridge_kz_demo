"use client";

import type { EmployerVacancy } from "@/types/games";
import { useLang } from "@/i18n/LanguageProvider";

interface VacancyRequirementsProps {
  vacancy: EmployerVacancy;
}

export function VacancyRequirements({ vacancy }: VacancyRequirementsProps) {
  const { tr } = useLang();
  return (
    <div className="rounded-3xl border border-border bg-soft/60 p-6 sm:p-7">
      <p className="text-xs font-bold uppercase tracking-wide text-primary/70">{tr({ kk: "Бос орын", ru: "Вакансия", en: "Vacancy" })}</p>
      <h2 className="mt-1 font-heading text-xl font-bold text-ink">{tr(vacancy.title)}</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wide text-ink/40">{tr({ kk: "Міндеттер", ru: "Обязанности", en: "Responsibilities" })}</h3>
          <ul className="mt-1.5 flex flex-col gap-1 text-sm text-ink/70">
            {vacancy.responsibilities.map((item) => (
              <li key={item.ru}>{tr(item)}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wide text-ink/40">{tr({ kk: "Негізгі дағдылар", ru: "Ключевые навыки", en: "Key skills" })}</h3>
          <p className="mt-1.5 text-sm text-ink/70">{vacancy.requiredSkills.map(tr).join(", ")}</p>
          <h3 className="mt-3 text-xs font-bold uppercase tracking-wide text-ink/40">
            {tr({ kk: "Артықшылық болады", ru: "Будет плюсом", en: "Nice to have" })}
          </h3>
          <p className="mt-1.5 text-sm text-ink/70">{vacancy.preferredSkills.map(tr).join(", ")}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-ink/60">
        <span className="rounded-full bg-white px-3 py-1.5">{tr(vacancy.schedule)}</span>
        <span className="rounded-full bg-white px-3 py-1.5">{tr(vacancy.workFormat)}</span>
        <span className="rounded-full bg-white px-3 py-1.5">{tr(vacancy.educationExpectation)}</span>
      </div>
    </div>
  );
}
