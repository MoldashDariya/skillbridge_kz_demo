"use client";

import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MascotImage } from "@/components/ui/MascotImage";
import { CatalogueGameCard } from "@/components/games/CatalogueGameCard";
import { GAME_CATALOGUE } from "@/data/games/catalogue";
import { useLang } from "@/i18n/LanguageProvider";

export function GamesSection() {
  const { tr } = useLang();
  return (
    <section id="games" className="relative py-14 sm:py-[72px] lg:py-28">
      <Container>
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <SectionLabel>{tr({ kk: "ИНТЕРАКТИВТІ ҚҰРАЛДАР", ru: "ИНТЕРАКТИВНЫЕ ИНСТРУМЕНТЫ", en: "INTERACTIVE TOOLS" })}</SectionLabel>
            <SectionHeading className="mt-5">
              {tr({ kk: "Алғашқы өтінім алдында өзіңді тексер", ru: "Проверь себя перед первым откликом", en: "Test yourself before your first application" })}
            </SectionHeading>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              {tr({ kk: "Қысқа мансап ойындары өз қызығушылықтарыңды, дағдыларыңды және сұхбатқа дайындығыңды жақсырақ түсінуге көмектеседі.", ru: "Короткие карьерные игры помогают лучше понять свои интересы, навыки и готовность к собеседованию.", en: "Short career games help you better understand your interests, skills and interview readiness." })}
            </p>
          </div>
          <MascotImage
            pose="book"
            alt={tr({ kk: "SkillBridge KZ талисманы мансап ойындарына дайындалып кітап оқып отыр", ru: "Талисман SkillBridge KZ читает книгу, готовясь к карьерным играм", en: "SkillBridge KZ mascot reading a book before the career games" })}
            width={132}
            className="hidden w-[110px] shrink-0 sm:block lg:w-[132px]"
          />
        </div>

        <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GAME_CATALOGUE.map((game) => (
            <CatalogueGameCard key={game.route} game={game} />
          ))}
        </div>
      </Container>
    </section>
  );
}
