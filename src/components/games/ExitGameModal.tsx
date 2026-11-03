"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { useLang } from "@/i18n/LanguageProvider";

interface ExitGameModalProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ExitGameModal({ open, onConfirm, onCancel }: ExitGameModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const { tr } = useLang();

  useEffect(() => {
    if (!open) return;
    dialogRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onCancel();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/40 px-4 backdrop-blur-sm">
      <div
        ref={dialogRef}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="exit-modal-title"
        aria-describedby="exit-modal-desc"
        tabIndex={-1}
        className="w-full max-w-sm rounded-2xl bg-surface p-6 shadow-cardHover outline-none"
      >
        <h2 id="exit-modal-title" className="font-heading text-lg font-bold text-ink">
          {tr({ kk: "Ойыннан шығасыз ба?", ru: "Выйти из игры?", en: "Leave the game?" })}
        </h2>
        <p id="exit-modal-desc" className="mt-2 text-sm leading-relaxed text-ink/60">
          {tr({ kk: "Ағымдағы прогресс сақталмайды.", ru: "Текущий прогресс не сохранится.", en: "Your current progress won't be saved." })}
        </p>
        <div className="mt-6 flex flex-col-reverse gap-2.5 sm:flex-row sm:justify-end">
          <Button variant="secondary" onClick={onCancel}>
            {tr({ kk: "Қалу", ru: "Остаться", en: "Stay" })}
          </Button>
          <Button variant="primary" onClick={onConfirm}>
            {tr({ kk: "Шығу", ru: "Выйти", en: "Leave" })}
          </Button>
        </div>
      </div>
    </div>
  );
}
