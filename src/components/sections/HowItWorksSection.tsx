"use client";

import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessTimeline } from "./ProcessTimeline";
import { useLang } from "@/i18n/LanguageProvider";

export function HowItWorksSection() {
  const { tr } = useLang();
  return (
    <section id="how-it-works" className="relative py-14 sm:py-[72px] lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel align="center" className="mx-auto flex w-fit">
            {tr({ kk: "БҰЛ ҚАЛАЙ ЖҰМЫС ІСТЕЙДІ", ru: "КАК ЭТО РАБОТАЕТ", en: "HOW IT WORKS" })}
          </SectionLabel>
          <SectionHeading align="center" className="mt-5">
            {tr({ kk: "Профильден алғашқы практикаға дейін — бес түсінікті қадам", ru: "От профиля до первой практики — пять понятных шагов", en: "From profile to first placement — five clear steps" })}
          </SectionHeading>
        </div>

        <div className="mt-14 sm:mt-16">
          <ProcessTimeline />
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center text-[15px] leading-relaxed text-ink/55 sm:mt-16">
          {tr({ kk: "Студент қауіпсіз бастау алады. Жұмыс беруші — лайықты үміткер. Колледж — практиканың ашық процесі.", ru: "Студент получает безопасный старт. Работодатель — подходящего кандидата. Колледж — прозрачный процесс прохождения практики.", en: "The student gets a safe start. The employer gets the right candidate. The college gets a transparent placement process." })}
        </p>
      </Container>
    </section>
  );
}
