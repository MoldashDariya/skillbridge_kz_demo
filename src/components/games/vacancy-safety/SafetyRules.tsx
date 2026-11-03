"use client";

import { ShieldCheck } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";

const RULES = [
  { kk: "Жұмыс алу үшін ақы төлемеңіз.", ru: "Не платите за получение работы.", en: "Don't pay to get a job." },
  { kk: "Бөгде ақшаны жеке картаңыз арқылы өткізбеңіз.", ru: "Не проводите чужие деньги через личную карту.", en: "Don't move other people's money through your personal card." },
  { kk: "Компанияны және оның байланыстарын тексеріңіз.", ru: "Проверяйте компанию и её контакты.", en: "Check the company and its contact details." },
  { kk: "Міндеттер мен шарттарды толық оқыңыз.", ru: "Читайте обязанности и условия полностью.", en: "Read the duties and conditions in full." },
  { kk: "Құжаттарды тек ресми ұсыныстан кейін ғана беріңіз.", ru: "Передавайте документы только после официального предложения.", en: "Hand over documents only after an official offer." },
];

export function SafetyRules() {
  const { tr } = useLang();
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-ai text-white">
          <ShieldCheck size={18} aria-hidden="true" />
        </span>
        <h4 className="font-heading text-lg font-bold text-ink">
          {tr({ kk: "Қауіпсіз іздеудің бес ережесі", ru: "Пять правил безопасного поиска", en: "Five rules for a safe job search" })}
        </h4>
      </div>
      <ol className="mt-4 flex flex-col gap-2.5">
        {RULES.map((rule, i) => (
          <li key={rule.ru} className="flex items-start gap-3 text-[15px] text-ink/70">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-soft text-xs font-bold text-primary">
              {i + 1}
            </span>
            {tr(rule)}
          </li>
        ))}
      </ol>
    </div>
  );
}
