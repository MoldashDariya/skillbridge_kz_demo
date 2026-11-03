"use client";

import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { CandidateProfile } from "@/types/games";
import { useLang } from "@/i18n/LanguageProvider";

interface EmployerFeedbackProps {
  candidate: CandidateProfile;
  onNext: () => void;
  isLast: boolean;
}

export function EmployerFeedback({ candidate, onNext, isLast }: EmployerFeedbackProps) {
  const { tr } = useLang();
  return (
    <div className="mt-6 rounded-2xl border border-border bg-soft/60 p-6" role="status" aria-live="polite">
      <div className="flex items-start gap-3">
        <Sparkles size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
        <div>
          <p className="font-heading text-[15px] font-bold text-ink">{tr({ kk: "Жұмыс берушінің шешімі", ru: "Решение работодателя", en: "The employer's decision" })}</p>
          <p className="mt-1 text-sm font-semibold text-ink/60">{tr({ kk: "Не маңызды болып шықты?", ru: "Что оказалось важным?", en: "What turned out to matter?" })}</p>
        </div>
      </div>
      <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
        {tr({ kk: "Мінсіз түйіндеменің болуы емес, үміткердің бос орынның нақты міндеттеріне сәйкестігі.", ru: "Не наличие идеального резюме, а соответствие кандидата конкретным задачам вакансии.", en: "Not a perfect CV, but how well the candidate fits the vacancy's actual tasks." })}
      </p>
      <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{tr(candidate.explanation)}</p>
      <div className="mt-4">
        <Button onClick={onNext} size="md">
          {isLast
            ? tr({ kk: "Қорытындыны көру", ru: "Посмотреть итог", en: "See the summary" })
            : tr({ kk: "Келесі үміткер", ru: "Следующий кандидат", en: "Next candidate" })}
        </Button>
      </div>
    </div>
  );
}
