"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MascotImage } from "@/components/ui/MascotImage";
import { Button } from "@/components/ui/Button";
import { PartnerCategoryCard } from "./PartnerCategoryCard";
import { PARTNER_CATEGORIES } from "@/lib/content";
import { useLang } from "@/i18n/LanguageProvider";

const PARTNER_LOGOS = [
  {
    name: "Partner 1",
    src: "/partners/1.jpeg",
  },
  {
    name: "Partner 2",
    src: "/partners/2.jpeg",
  },
];

const COLLEGE_PARTNER_HREF = "https://forms.gle/2L5SpLT2FM9Bbctw8";
const EMPLOYER_PARTNER_HREF = "https://forms.gle/Yp9myvB4Kyyarz4HA";

export function PartnersSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tr } = useLang();

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isModalOpen]);

  return (
      <>
        <section
            id="partners"
            className="relative py-14 sm:py-[72px] lg:py-28"
        >
          <Container>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary to-accent px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20 xl:px-16">
              <div
                  aria-hidden="true"
                  className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
              />

              <div
                  aria-hidden="true"
                  className="absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-mascot/20 blur-3xl"
              />

              <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[minmax(280px,0.7fr)_minmax(0,1.3fr)] lg:items-center lg:gap-10 xl:gap-14">
                <div>
                  <SectionLabel tone="dark">{tr({ kk: "ЫНТЫМАҚТАСТЫҚ", ru: "СОТРУДНИЧЕСТВО", en: "PARTNERSHIP" })}</SectionLabel>

                  <SectionHeading tone="dark" className="mt-5">
                    {tr({ kk: "Алғашқы мансаптық мүмкіндікті жалғыз жасау мүмкін емес", ru: "Первую карьерную возможность невозможно создать в одиночку", en: "No one can create a first career opportunity alone" })}
                  </SectionHeading>

                  <p className="mt-5 text-[17px] leading-relaxed text-white/80">
                    {tr({ kk: "SkillBridge KZ жас мамандардың болашағына уақыты мен білімін салуға дайын колледждермен, жұмыс берушілермен және ұйымдармен бірге дамып келеді.", ru: "SkillBridge KZ развивается вместе с колледжами, работодателями и организациями, которые готовы инвестировать время и знания в будущее молодых специалистов.", en: "SkillBridge KZ grows together with colleges, employers and organisations ready to invest their time and knowledge in the future of young professionals." })}
                  </p>

                  <div className="mt-8 hidden lg:flex lg:items-end lg:gap-4">
                    <MascotImage
                        pose="point"
                        alt={tr({ kk: "SkillBridge KZ талисманы серіктес санаттарын көрсетіп тұр", ru: "Талисман SkillBridge KZ указывает на категории партнёров", en: "SkillBridge KZ mascot pointing at partner categories" })}
                        width={150}
                        className="w-[130px] xl:w-[150px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {PARTNER_CATEGORIES.map((category) => (
                      <PartnerCategoryCard
                          key={category.title.ru}
                          category={category}
                      />
                  ))}
                </div>
              </div>

              <div className="relative mt-14 border-t border-white/15 pt-8">
                <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                  {tr({ kk: "Платформа серіктестері", ru: "Партнёры платформы", en: "Platform partners" })}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6">
                  {PARTNER_LOGOS.map((logo) => (
                      <div
                          key={logo.name}
                          className="flex h-16 w-36 items-center justify-center rounded-xl bg-white px-4 shadow-sm"
                      >
                        <Image
                            src={logo.src}
                            alt={logo.name}
                            width={120}
                            height={48}
                            className="max-h-10 w-auto object-contain"
                        />
                      </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-12 flex flex-col items-center gap-5 text-center">
                <p className="max-w-xl text-[17px] leading-relaxed text-white/85">
                  {tr({ kk: "Біз студенттерге қауіпсіз әрі адал бастау бергісі келетін ұйымдармен ынтымақтасуға ашықпыз.", ru: "Мы открыты к сотрудничеству с организациями, которые хотят дать студентам безопасный и честный старт.", en: "We're open to working with organisations that want to give students a safe and fair start." })}
                </p>

                <Button
                    type="button"
                    variant="white"
                    size="lg"
                    onClick={() => setIsModalOpen(true)}
                >
                  {tr({ kk: "Серіктес болу", ru: "Стать партнёром", en: "Become a partner" })}
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {isModalOpen && (
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="partner-modal-title"
                className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 px-4 py-8 backdrop-blur-sm"
                onMouseDown={(event) => {
                  if (event.target === event.currentTarget) {
                    setIsModalOpen(false);
                  }
                }}
            >
              <div className="relative w-full max-w-md rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8">
                <button
                    type="button"
                    aria-label={tr({ kk: "Терезені жабу", ru: "Закрыть окно", en: "Close" })}
                    onClick={() => setIsModalOpen(false)}
                    className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink/60 transition-colors hover:bg-ink/10 hover:text-ink"
                >
                  <X size={20} aria-hidden="true" />
                </button>

                <div className="pr-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                    {tr({ kk: "Ынтымақтастық", ru: "Сотрудничество", en: "Partnership" })}
                  </p>

                  <h2
                      id="partner-modal-title"
                      className="mt-3 font-heading text-2xl font-bold text-ink"
                  >
                    {tr({ kk: "Санатты таңдаңыз", ru: "Выберите категорию", en: "Choose a category" })}
                  </h2>

                  <p className="mt-3 text-[15px] leading-relaxed text-ink/60">
                    {tr({ kk: "Ынтымақтастықтың қолайлы нысанына өту үшін кімнің атынан екеніңізді көрсетіңіз.", ru: "Укажите, кого вы представляете, чтобы перейти к подходящей форме сотрудничества.", en: "Tell us who you represent to open the right partnership form." })}
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Button
                      href={COLLEGE_PARTNER_HREF}
                      variant="primary"
                      size="lg"
                      className="w-full"
                  >
                    {tr({ kk: "Колледж", ru: "Колледж", en: "College" })}
                  </Button>

                  <Button
                      href={EMPLOYER_PARTNER_HREF}
                      variant="white"
                      size="lg"
                      className="w-full border border-primary text-primary"
                  >
                    {tr({ kk: "Жұмыс беруші", ru: "Работодатель", en: "Employer" })}
                  </Button>
                </div>
              </div>
            </div>
        )}
      </>
  );
}