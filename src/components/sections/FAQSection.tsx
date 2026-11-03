"use client";

import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MascotImage } from "@/components/ui/MascotImage";
import { FAQAccordion } from "./FAQAccordion";
import { FAQ_ITEMS } from "@/lib/content";
import { useLang } from "@/i18n/LanguageProvider";

export function FAQSection() {
  const { tr } = useLang();
  return (
    <section id="faq" className="relative py-14 sm:py-[72px] lg:py-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionLabel>FAQ</SectionLabel>
          <SectionHeading className="mt-5">
            {tr({ kk: "Жиі қойылатын сұрақтар", ru: "Часто задаваемые вопросы", en: "Frequently asked questions" })}
          </SectionHeading>
          <p className="mt-5 max-w-sm text-[17px] leading-relaxed text-ink/70">
            {tr({ kk: "Сұрағыңызға жауап мұнда болмаса, бізге жазыңыз — түсінуге көмектесеміз.", ru: "Если ответа на ваш вопрос здесь нет, напишите нам — мы поможем разобраться.", en: "If you can't find your answer here, write to us — we'll help you figure it out." })}
          </p>
          <MascotImage
            pose="thinking"
            alt={tr({ kk: "SkillBridge KZ талисманы сұрақ туралы ойланып тұр", ru: "Талисман SkillBridge KZ задумчиво размышляет над вопросом", en: "SkillBridge KZ mascot thinking about a question" })}
            width={160}
            className="mt-8 w-[130px] sm:w-[150px] lg:w-[160px]"
          />
        </div>

        <FAQAccordion items={FAQ_ITEMS} />
      </Container>
    </section>
  );
}
