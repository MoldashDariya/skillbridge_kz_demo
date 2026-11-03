"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { GameShell } from "@/components/games/GameShell";
import { StartScreen } from "@/components/games/StartScreen";
import { ExitGameModal } from "@/components/games/ExitGameModal";
import { VacancyScenarioCard } from "@/components/games/vacancy-safety/VacancyScenarioCard";
import { SafetyDecisionButtons } from "@/components/games/vacancy-safety/SafetyDecisionButtons";
import { VacancyBreakdown } from "@/components/games/vacancy-safety/VacancyBreakdown";
import { VacancyResult } from "@/components/games/vacancy-safety/VacancyResult";
import { useVacancySafetyGame } from "@/hooks/useVacancySafetyGame";
import { trackGameEvent } from "@/lib/games/analytics";
import { useLang } from "@/i18n/LanguageProvider";

export default function VacancySafetyPage() {
  const router = useRouter();
  const [exitModalOpen, setExitModalOpen] = useState(false);
  const game = useVacancySafetyGame();
  const { tr } = useLang();

  const handleExitClick = () => {
    if (game.hasProgress) {
      setExitModalOpen(true);
    } else {
      router.push("/games");
    }
  };

  const lastFeedback = game.currentDecision
    ? { scenarioId: game.currentVacancy?.id ?? "", decision: game.currentDecision, isCorrect: (game.currentDecision === "safe") === (game.currentVacancy?.isSafe ?? false) }
    : null;

  return (
    <GameShell
      title={tr({ kk: "Жалған ба, әлде нақты бос орын ба?", ru: "Фейк или реальная вакансия?", en: "Fake or real vacancy?" })}
      duration={tr({ kk: "шамамен 4 минут", ru: "около 4 минут", en: "about 4 minutes" })}
      progress={
        game.status === "playing"
          ? { current: game.index + 1, total: game.scenarios.length }
          : undefined
      }
      onExitClick={handleExitClick}
    >
      {game.status === "intro" && (
        <StartScreen
          heading={tr({ kk: "Алаяқтық әрдайым айқын көрінбейді", ru: "Мошенничество не всегда выглядит очевидно", en: "Scams aren't always obvious" })}
          text={tr({ kk: "Қауіпті бос орында логотип, толық сипаттама және ресми рәсімдеу уәдесі болуы мүмкін. Нақты тәуекелдер көбіне төлем шарттарында, міндеттерде және жұмысқа орналасу процесінде жасырынады. Әр карточканы зерттеп, шешім қабылдаңыз: бос орын қауіпсіз көріне ме, әлде онда тәуекел бар ма.", ru: "Опасная вакансия может содержать логотип, подробное описание и обещание официального оформления. Настоящие риски часто скрываются в условиях оплаты, обязанностях и процессе трудоустройства. Изучите каждую карточку и примите решение: вакансия выглядит безопасно или в ней есть риск.", en: "A dangerous vacancy can have a logo, a detailed description and a promise of official employment. The real risks often hide in the payment terms, the duties and the hiring process. Study each card and decide: does the vacancy look safe, or is there a risk?" })}
          buttonLabel={tr({ kk: "Тексеруді бастау", ru: "Начать проверку", en: "Start checking" })}
          onStart={game.start}
          mascotPose="thinking"
          mascotAlt={tr({ kk: "SkillBridge KZ талисманы бос орынды тексеріп жатыр", ru: "Талисман SkillBridge KZ проверяет вакансию", en: "SkillBridge KZ mascot checking a vacancy" })}
        />
      )}

      {game.status === "playing" && game.currentVacancy && (
        <div>
          <VacancyScenarioCard vacancy={game.currentVacancy} showHighlight={game.showDetails} />

          <div className="mt-6">
            <SafetyDecisionButtons
              selected={game.currentDecision}
              onSelect={game.decide}
              disabled={!!game.currentDecision}
            />
          </div>

          {lastFeedback && (
            <VacancyBreakdown
              vacancy={game.currentVacancy}
              feedback={lastFeedback}
              showDetails={game.showDetails}
              onReview={game.reviewDetails}
              onNext={game.goNext}
              isLast={game.index === game.scenarios.length - 1}
            />
          )}
        </div>
      )}

      {game.status === "result" && (
        <VacancyResult
          correctCount={game.correctCount}
          total={game.scenarios.length}
          onRestart={game.restart}
          onGoToVacancies={() => {
            trackGameEvent("game_platform_cta_clicked", { slug: "vacancy-safety" });
            router.push("/games/complete?from=vacancy-safety");
          }}
        />
      )}

      <ExitGameModal
        open={exitModalOpen}
        onConfirm={() => router.push("/games")}
        onCancel={() => setExitModalOpen(false)}
      />
    </GameShell>
  );
}
