"use client";

import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MascotImage } from "@/components/ui/MascotImage";
import { ProblemCard } from "./ProblemCard";
import { PROBLEMS } from "@/lib/content";
import { useLang } from "@/i18n/LanguageProvider";

export function ProblemSection() {
  const { tr } = useLang();
  return (
    <section className="relative bg-gradient-to-b from-transparent via-soft/40 to-transparent py-14 sm:py-[72px] lg:py-28">
      <Container>
        <div className="max-w-2xl">
          <SectionLabel>{tr({ kk: "МӘСЕЛЕ", ru: "ПРОБЛЕМА", en: "THE PROBLEM" })}</SectionLabel>
          <SectionHeading className="mt-5">
            {tr({ kk: "Барлығы тәжірибе талап етсе, алғашқы тәжірибені алу қиын", ru: "Первый опыт получить сложно, если все уже требуют опыт", en: "It's hard to get first experience when everyone already asks for experience" })}
          </SectionHeading>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            {tr({ kk: "Студенттер практика мен алғашқы жұмысты жиі Telegram, әлеуметтік желілер және кездейсоқ хабарландырулар арқылы іздейді — онда жұмыс берушіні тексеру және мүмкіндіктің мамандығына сай келетінін түсіну қиын.", ru: "Студенты часто ищут практику и первую работу через Telegram, социальные сети и случайные объявления, где сложно проверить работодателя и понять, подходит ли возможность их специальности.", en: "Students often look for placements and first jobs via Telegram, social media and random ads, where it's hard to check the employer or tell whether the opportunity fits their field." })}
          </p>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((item, i) => (
            <ProblemCard key={item.title.ru} item={item} alt={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-8 flex items-center gap-4 sm:mt-10">
          <MascotImage
            pose="thinking"
            alt={tr({ kk: "SkillBridge KZ талисманы алғашқы жұмыс іздеу мәселесі туралы ойланып тұр", ru: "Талисман SkillBridge KZ задумчиво размышляет над проблемой поиска первой работы", en: "SkillBridge KZ mascot thinking about the first-job problem" })}
            width={92}
            className="w-[76px] sm:w-[92px]"
          />
          <p className="max-w-sm text-sm leading-relaxed text-ink/55">
            {tr({ kk: "Сондықтан SkillBridge KZ ондаған шашыраңқы арнаның орнына бір қауіпсіз процесс құрады.", ru: "Именно поэтому SkillBridge KZ строит один безопасный процесс — вместо десятка разрозненных каналов.", en: "That's why SkillBridge KZ builds one safe process instead of a dozen scattered channels." })}
          </p>
        </div>
      </Container>
    </section>
  );
}
