"use client";

import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MascotImage } from "@/components/ui/MascotImage";
import { VideoReviewsCarousel } from "./VideoReviewsCarousel";
import { TextReviewsMarquee } from "./TextReviewsMarquee";
import { useLang } from "@/i18n/LanguageProvider";

export function ResultsSection() {
  const { tr } = useLang();
  return (
      <section id="results" className="relative py-14 sm:py-[72px] lg:py-28">
        <Container>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>{tr({ kk: "НӘТИЖЕЛЕР", ru: "РЕЗУЛЬТАТЫ", en: "RESULTS" })}</SectionLabel>
              <SectionHeading className="mt-5">
                {tr({ kk: "Алғашқы мансаптық қадамдар тарихы", ru: "Истории первых карьерных шагов", en: "Stories of first career steps" })}
              </SectionHeading>
            </div>
            <MascotImage
                pose="excited"
                alt={tr({ kk: "SkillBridge KZ талисманы студенттердің алғашқы жетістіктеріне қуанып тұр", ru: "Талисман SkillBridge KZ радостно празднует первые успехи студентов", en: "SkillBridge KZ mascot celebrating students' first wins" })}
                width={110}
                className="hidden w-[100px] shrink-0 sm:block"
            />
          </div>

          <div className="mt-11">
            <VideoReviewsCarousel />
          </div>
        </Container>

        <div className="mt-12">
          <TextReviewsMarquee />
        </div>

        <Container>
          <p className="mt-6 text-center text-sm text-ink/45">
            {tr({ kk: "Пікірлер SkillBridge KZ пилоттық сынағына қатысушылардан жиналды.", ru: "Отзывы собраны среди участников пилотного тестирования SkillBridge KZ.", en: "Reviews were collected from participants in the SkillBridge KZ pilot." })}
          </p>
        </Container>
      </section>
  );
}