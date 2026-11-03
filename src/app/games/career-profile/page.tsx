"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { GameShell } from "@/components/games/GameShell";
import { StartScreen } from "@/components/games/StartScreen";
import { LoadingAnalysis } from "@/components/games/LoadingAnalysis";
import { ExitGameModal } from "@/components/games/ExitGameModal";
import { Button } from "@/components/ui/Button";
import { QuestionCard } from "@/components/games/career-profile/QuestionCard";
import { CareerResult } from "@/components/games/career-profile/CareerResult";
import { useCareerProfileGame } from "@/hooks/useCareerProfileGame";
import { trackGameEvent } from "@/lib/games/analytics";
import { useLang } from "@/i18n/LanguageProvider";

const LOADING_MESSAGES = [
  { kk: "Шешімдеріңізді талдаудамыз…", ru: "Анализируем ваши решения…", en: "Analysing your decisions…" },
  { kk: "Күшті жақтарыңызды анықтаудамыз…", ru: "Определяем сильные стороны…", en: "Identifying your strengths…" },
  { kk: "Мансап бағыттарын салыстырудамыз…", ru: "Сравниваем карьерные направления…", en: "Comparing career paths…" },
  { kk: "Ұсынымды қалыптастырудамыз…", ru: "Формируем рекомендацию…", en: "Building your recommendation…" },
];

export default function CareerProfilePage() {
  const router = useRouter();
  const [exitModalOpen, setExitModalOpen] = useState(false);
  const game = useCareerProfileGame();
  const { tr } = useLang();

  const handleExitClick = () => {
    if (game.hasProgress) {
      setExitModalOpen(true);
    } else {
      router.push("/games");
    }
  };

  return (
    <GameShell
      title={tr({ kk: "Сіздің мансаптық профиліңіз", ru: "Ваш карьерный профиль", en: "Your career profile" })}
      duration={tr({ kk: "шамамен 2 минут", ru: "около 2 минут", en: "about 2 minutes" })}
      progress={
        game.status === "playing"
          ? { current: game.questionIndex + 1, total: game.questions.length }
          : undefined
      }
      onExitClick={handleExitClick}
    >
      {game.status === "intro" && (
        <StartScreen
          heading={tr({ kk: "Мамандықты соқыр таңдамаңыз", ru: "Не выбирайте профессию вслепую", en: "Don't choose a career blindly" })}
          text={tr({ kk: "Бес жағдаяттық сұраққа жауап беріңіз. Біз жұмысқа деген тәсіліңізді талдап, күшті жақтарыңыз барынша ашылатын бағыттарды көрсетеміз.", ru: "Ответьте на пять ситуационных вопросов. Мы проанализируем ваш подход к работе и покажем направления, в которых ваши сильные стороны могут раскрыться лучше всего.", en: "Answer five situational questions. We'll analyse your approach to work and show the fields where your strengths can shine the most." })}
          hint={tr({ kk: "Мұнда дұрыс жауаптар жоқ. Өзіңізге шынымен жақын нұсқаны таңдаңыз.", ru: "Здесь нет правильных ответов. Выбирайте тот вариант, который действительно ближе вам.", en: "There are no right answers here. Choose the option that's genuinely closest to you." })}
          buttonLabel={tr({ kk: "Ойынды бастау", ru: "Начать игру", en: "Start the game" })}
          onStart={game.start}
          mascotPose="laptop"
          mascotAlt={tr({ kk: "Ноутбугі бар SkillBridge KZ талисманы", ru: "Талисман SkillBridge KZ с ноутбуком", en: "SkillBridge KZ mascot with a laptop" })}
        />
      )}

      {game.status === "playing" && game.currentQuestion && (
        <div className="flex flex-col gap-6">
          <QuestionCard
            question={game.currentQuestion}
            selectedOptionId={game.selectedOptionId}
            onSelect={game.selectOption}
          />
          <div className="flex justify-end">
            <Button size="lg" disabled={!game.selectedOptionId} onClick={game.goNext}>
              {game.questionIndex === game.questions.length - 1
                ? tr({ kk: "Аяқтау", ru: "Завершить", en: "Finish" })
                : tr({ kk: "Келесі", ru: "Далее", en: "Next" })}
            </Button>
          </div>
        </div>
      )}

      {game.status === "loading" && (
        <LoadingAnalysis
          messages={LOADING_MESSAGES.map(tr)}
          onComplete={game.finishLoading}
          mascotPose="thinking"
          mascotAlt={tr({ kk: "SkillBridge KZ талисманы жауаптарды талдап жатыр", ru: "Талисман SkillBridge KZ анализирует ответы", en: "SkillBridge KZ mascot analysing answers" })}
        />
      )}

      {game.status === "result" && game.result && (
        <CareerResult
          result={game.result}
          onRestart={game.restart}
          onSeeOpportunities={() => {
            trackGameEvent("game_platform_cta_clicked", { slug: "career-profile" });
            router.push("/games/complete?from=career-profile");
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
