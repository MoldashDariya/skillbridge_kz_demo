"use client";

import { MascotReaction } from "@/components/games/MascotReaction";
import { GameFooterActions } from "@/components/games/GameFooterActions";
import { SafetyRules } from "./SafetyRules";
import { useLang } from "@/i18n/LanguageProvider";

interface VacancyResultProps {
  correctCount: number;
  total: number;
  onRestart: () => void;
  onGoToVacancies: () => void;
}

function getTier(correctCount: number) {
  if (correctCount === 6) {
    return {
      heading: { kk: "Сізді алдау қиын", ru: "Вас сложно обмануть", en: "You're hard to fool" },
      text: { kk: "Сіз шарттарды мұқият зерттеп, кәсіби безендірудің артында жасырылған тәуекелдерді де байқайсыз.", ru: "Вы внимательно изучаете условия и замечаете даже те риски, которые скрыты за профессиональным оформлением.", en: "You study the conditions carefully and notice even the risks hidden behind professional presentation." },
    };
  }
  if (correctCount >= 4) {
    return {
      heading: { kk: "Сіз тәуекелдердің көбін байқайсыз", ru: "Вы замечаете большинство рисков", en: "You spot most of the risks" },
      text: { kk: "Бірақ кейбір қауіпті шарттар әлі де жұмысқа орналасудың қалыпты бөлігі сияқты көрінуі мүмкін.", ru: "Но некоторые опасные условия всё ещё могут выглядеть как обычная часть трудоустройства.", en: "But some dangerous conditions can still look like a normal part of getting hired." },
    };
  }
  if (correctCount >= 2) {
    return {
      heading: { kk: "Өтінім жіберуге асықпаңыз", ru: "Не спешите отправлять отклик", en: "Don't rush to apply" },
      text: { kk: "Құжаттарды немесе жеке деректерді бермес бұрын компания мен жұмыс шарттарын мұқиятырақ тексерген жөн.", ru: "Перед передачей документов или личных данных стоит внимательнее проверять компанию и условия работы.", en: "Before handing over documents or personal data, check the company and working conditions more carefully." },
    };
  }
  return {
    heading: { kk: "Кәсіби безендіру әлі қауіпсіздік дегенді білдірмейді", ru: "Профессиональное оформление ещё не означает безопасность", en: "A professional look doesn't mean it's safe" },
    text: { kk: "Жұмыс берушіні тексеріңіз, ақша аудармаңыз және жұмыс операциялары үшін жеке банк деректемелеріңізді пайдаланбаңыз.", ru: "Проверяйте работодателя, не переводите деньги и не используйте личные банковские реквизиты для рабочих операций.", en: "Check the employer, don't transfer money, and don't use your personal bank details for work transactions." },
  };
}

export function VacancyResult({ correctCount, total, onRestart, onGoToVacancies }: VacancyResultProps) {
  const tier = getTier(correctCount);
  const { tr } = useLang();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-start gap-6 rounded-3xl border border-border bg-gradient-to-br from-accent/[0.05] to-accent/[0.12] p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-primary/70">
            {tr({
              kk: `${total} шешімнің ${correctCount}-і дұрыс`,
              ru: `${correctCount} из ${total} правильных решений`,
              en: `${correctCount} of ${total} correct decisions`,
            })}
          </p>
          <h2 className="mt-2 font-heading text-[26px] font-bold text-ink sm:text-[32px]">
            {tr(tier.heading)}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{tr(tier.text)}</p>
        </div>
        <MascotReaction
          pose="thumbsup"
          alt={tr({ kk: "SkillBridge KZ талисманы қауіпсіздік қалқанын ұстап тұр", ru: "Талисман SkillBridge KZ держит проверенный щит безопасности", en: "SkillBridge KZ mascot holding a safety shield" })}
          width={150}
          float
        />
      </div>

      <SafetyRules />

      <GameFooterActions
        primaryLabel={tr({ kk: "Тексерілген бос орындарға өту", ru: "Перейти к проверенным вакансиям", en: "Go to verified vacancies" })}
        onPrimaryClick={onGoToVacancies}
        onRestart={onRestart}
      />

      <p className="text-xs leading-relaxed text-ink/40">
        {tr({ kk: "Нәтиже демонстрациялық модельге негізделген және бос орындар қауіпсіздігін толық тексеру емес, оқу мысалы ретінде қызмет етеді.", ru: "Результат основан на демонстрационной модели и служит образовательным примером, а не полной проверкой безопасности вакансий.", en: "This result is based on a demo model and is a learning example, not a full safety check of vacancies." })}
      </p>
    </div>
  );
}
