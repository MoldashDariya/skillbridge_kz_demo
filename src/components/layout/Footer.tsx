"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Instagram, Send, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FOOTER_GROUPS } from "@/lib/content";
import { LANGS, useLang } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/cn";
import {
  PLATFORM_URL,
  CONTACT_EMAIL,
  TELEGRAM_URL,
  INSTAGRAM_URL,
} from "@/lib/constants";

export function Footer() {
  const pathname = usePathname();
  const { lang, setLang, tr } = useLang();
  const resolveHref = (href: string) =>
    href.startsWith("#") && pathname !== "/" ? `/${href}` : href;

  return (
    <footer className="relative bg-footer text-white/70">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/brand/logo-icon.png"
                alt=""
                width={30}
                height={34}
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="font-heading text-lg font-extrabold tracking-tight text-white">
                SkillBridge<span className="text-secondary">KZ</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              {tr({ kk: "SkillBridge KZ — оқудан алғашқы жұмысқа апаратын қауіпсіз жол.", ru: "SkillBridge KZ — безопасный путь от обучения к первой работе.", en: "SkillBridge KZ — a safe path from studying to your first job." })}
            </p>
            <Button href={PLATFORM_URL} variant="white" size="md" className="mt-6">
              {tr({ kk: "Платформаны ашу", ru: "Открыть платформу", en: "Open the platform" })}
            </Button>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <div key={group.title.ru}>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white/40">
                {tr(group.title)}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label.ru}>
                    <a
                      href={resolveHref(link.href)}
                      className="text-[15px] text-white/65 transition-colors hover:text-white"
                    >
                      {tr(link.label)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white/40">
              {tr({ kk: "Байланыс", ru: "Контакты", en: "Contacts" })}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[15px] text-white/65 transition-colors hover:text-white"
                >
                  <Instagram size={16} aria-hidden="true" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[15px] text-white/65 transition-colors hover:text-white"
                >
                  <Send size={16} aria-hidden="true" />
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 text-[15px] text-white/65 transition-colors hover:text-white"
                >
                  <Mail size={16} aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/45">
            {tr({ kk: "Қазақстанда жаңа буын мамандары үшін жасалған.", ru: "Создано в Казахстане для нового поколения специалистов.", en: "Made in Kazakhstan for a new generation of professionals." })}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/45">
            <a href="#" className="hover:text-white/70">
              {tr({ kk: "Құпиялылық саясаты", ru: "Политика конфиденциальности", en: "Privacy policy" })}
            </a>
            <a href="#" className="hover:text-white/70">
              {tr({ kk: "Пайдалану шарттары", ru: "Условия использования", en: "Terms of use" })}
            </a>
            <div
              className="flex items-center rounded-full border border-white/15 px-1"
              role="group"
              aria-label={tr({ kk: "Тілді таңдау", ru: "Выбор языка", en: "Language" })}
            >
              {LANGS.map(({ code, label }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  aria-pressed={lang === code}
                  className={cn("px-2 py-1 transition-colors hover:text-white", lang === code && "text-white/90")}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
