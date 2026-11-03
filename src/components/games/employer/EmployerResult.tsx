"use client";

import { MascotReaction } from "@/components/games/MascotReaction";
import { GameFooterActions } from "@/components/games/GameFooterActions";
import { useLang } from "@/i18n/LanguageProvider";

interface EmployerResultProps {
  totalScore: number;
  maxScore: number;
  onRestart: () => void;
  onSeeProfile: () => void;
}

function getTier(ratio: number) {
  if (ratio >= 0.8) {
    return {
      heading: { kk: "Сіз тек түйіндемені емес, әлеуетті бағалайсыз", ru: "Вы оцениваете потенциал, а не только резюме", en: "You judge potential, not just the CV" },
      text: { kk: "Сіз бос орын талаптарын үміткердің нақты дағдыларымен салыстыра аласыз және тек тәжірибенің жоқтығынан бас тартпайсыз.", ru: "Вы умеете сопоставлять требования вакансии с реальными навыками кандидата и не отказываете только из-за отсутствия опыта.", en: "You can match a vacancy's requirements to a candidate's real skills and don't reject people just for lacking experience." },
    };
  }
  if (ratio >= 0.5) {
    return {
      heading: { kk: "Сіз ойластырылған шешімдер қабылдайсыз", ru: "Вы принимаете взвешенные решения", en: "You make balanced decisions" },
      text: { kk: "Бірақ кейде мамандықтың сәйкестігі немесе тәжірибенің болуы сізге үміткердің практикалық дағдыларынан гөрі көбірек әсер етеді.", ru: "Но иногда совпадение специальности или наличие опыта влияет на вас сильнее, чем практические навыки кандидата.", en: "But sometimes a matching field or prior experience sways you more than a candidate's practical skills." },
    };
  }
  return {
    heading: { kk: "Жақсы үміткер әрдайым мінсіз көрінбейді", ru: "Хороший кандидат не всегда выглядит идеально", en: "A good candidate doesn't always look perfect" },
    text: { kk: "Алғашқы жұмыс үшін оқу жобаларын, ынтаны, ауыспалы дағдыларды және үйренуге дайындықты ескеру ерекше маңызды.", ru: "Для первой работы особенно важно учитывать учебные проекты, мотивацию, переносимые навыки и готовность учиться.", en: "For a first job it's especially important to consider study projects, motivation, transferable skills and willingness to learn." },
  };
}

export function EmployerResult({ totalScore, maxScore, onRestart, onSeeProfile }: EmployerResultProps) {
  const ratio = maxScore > 0 ? totalScore / maxScore : 0;
  const tier = getTier(ratio);
  const { tr } = useLang();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-start gap-6 rounded-3xl border border-border bg-gradient-to-br from-mascot/[0.12] to-mascot/[0.20] p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="font-heading text-[26px] font-bold text-ink sm:text-[32px]">{tr(tier.heading)}</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{tr(tier.text)}</p>
        </div>
        <MascotReaction
          pose="excited"
          alt={tr({ kk: "SkillBridge KZ талисманы шешіміңізді қолдайды", ru: "Талисман SkillBridge KZ поддерживает ваше решение", en: "SkillBridge KZ mascot supporting your decision" })}
          width={150}
          float
        />
      </div>

      <GameFooterActions
        primaryLabel={tr({ kk: "Күшті профиль қандай болатынын көру", ru: "Посмотреть, как выглядит сильный профиль", en: "See what a strong profile looks like" })}
        onPrimaryClick={onSeeProfile}
        onRestart={onRestart}
      />

      <p className="text-xs leading-relaxed text-ink/40">
        {tr({ kk: "Нәтиже демонстрациялық модельге негізделген және басқарушылық дағдыларыңыздың нақты бағасы емес, оқу мысалы ретінде қызмет етеді.", ru: "Результат основан на демонстрационной модели и служит образовательным примером, а не реальной оценкой ваших управленческих навыков.", en: "This result is based on a demo model and is a learning example, not a real assessment of your management skills." })}
      </p>
    </div>
  );
}
