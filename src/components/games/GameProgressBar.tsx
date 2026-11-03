"use client";

import type { GameProgress } from "@/types/games";
import { useLang } from "@/i18n/LanguageProvider";

interface GameProgressBarProps {
  progress: GameProgress;
}

export function GameProgressBar({ progress }: GameProgressBarProps) {
  const { current, total } = progress;
  const { tr } = useLang();
  const percent = Math.min(100, Math.round((current / total) * 100));

  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-ink/60">
        {tr({ kk: `${total} ішінен ${current}`, ru: `${current} из ${total}`, en: `${current} of ${total}` })}
      </p>
      <div
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={tr({
          kk: `Прогресс: ${total} сұрақтың ${current}-і`,
          ru: `Прогресс: вопрос ${current} из ${total}`,
          en: `Progress: question ${current} of ${total}`,
        })}
        className="h-2 w-full overflow-hidden rounded-full bg-border"
      >
        <div
          className="h-full rounded-full bg-gradient-primary transition-[width] duration-300 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
