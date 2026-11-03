"use client";

import { AlertCircle, CheckCircle2, HelpCircle } from "lucide-react";
import type { CandidateProfile } from "@/types/games";
import { useLang } from "@/i18n/LanguageProvider";

interface CandidateDetailsProps {
  candidate: CandidateProfile;
}

export function CandidateDetails({ candidate }: CandidateDetailsProps) {
  const { tr } = useLang();
  return (
    <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-heading text-xl font-bold text-ink">{tr(candidate.name)}</h2>
        <span className="text-sm text-ink/50">{tr(candidate.ageRange)}</span>
      </div>

      <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-xs font-bold uppercase tracking-wide text-ink/40">{tr({ kk: "Мамандық", ru: "Специальность", en: "Field of study" })}</dt>
          <dd className="text-ink/70">{tr(candidate.speciality)}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-wide text-ink/40">{tr({ kk: "Орналасқан жері", ru: "Локация", en: "Location" })}</dt>
          <dd className="text-ink/70">{tr(candidate.location)}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-wide text-ink/40">{tr({ kk: "Қолжетімділік", ru: "Доступность", en: "Availability" })}</dt>
          <dd className="text-ink/70">{tr(candidate.availability)}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-wide text-ink/40">{tr({ kk: "Білімі", ru: "Образование", en: "Education" })}</dt>
          <dd className="text-ink/70">{tr(candidate.education)}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-xs font-bold uppercase tracking-wide text-ink/40">{tr({ kk: "Тәжірибе", ru: "Опыт", en: "Experience" })}</dt>
          <dd className="text-ink/70">{tr(candidate.experience)}</dd>
        </div>
      </dl>

      {candidate.projects.length > 0 && (
        <div className="mt-4">
          <h3 className="text-xs font-bold uppercase tracking-wide text-ink/40">{tr({ kk: "Жобалар", ru: "Проекты", en: "Projects" })}</h3>
          <ul className="mt-1.5 flex flex-col gap-1 text-sm text-ink/70">
            {candidate.projects.map((p) => (
              <li key={p.ru}>{tr(p)}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-4">
        <h3 className="text-xs font-bold uppercase tracking-wide text-ink/40">{tr({ kk: "Дағдылар", ru: "Навыки", en: "Skills" })}</h3>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {candidate.skills.map((s) => (
            <span key={s.ru} className="rounded-full bg-soft px-2.5 py-1 text-xs font-medium text-primary">
              {tr(s)}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div>
          <h3 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-success">
            <CheckCircle2 size={13} aria-hidden="true" /> {tr({ kk: "Күшті жақтары", ru: "Сильные стороны", en: "Strengths" })}
          </h3>
          <ul className="mt-1.5 flex flex-col gap-1 text-sm text-ink/70">
            {candidate.strengths.map((s) => (
              <li key={s.ru}>{tr(s)}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-warning">
            <AlertCircle size={13} aria-hidden="true" /> {tr({ kk: "Неге назар аудару керек", ru: "На что обратить внимание", en: "Points to consider" })}
          </h3>
          <ul className="mt-1.5 flex flex-col gap-1 text-sm text-ink/70">
            {candidate.concerns.map((s) => (
              <li key={s.ru}>{tr(s)}</li>
            ))}
          </ul>
        </div>
        {candidate.missingInformation.length > 0 && (
          <div>
            <h3 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink/40">
              <HelpCircle size={13} aria-hidden="true" /> {tr({ kk: "Ақпарат жетіспейді", ru: "Не хватает информации", en: "Missing information" })}
            </h3>
            <ul className="mt-1.5 flex flex-col gap-1 text-sm text-ink/70">
              {candidate.missingInformation.map((s) => (
                <li key={s.ru}>{tr(s)}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
