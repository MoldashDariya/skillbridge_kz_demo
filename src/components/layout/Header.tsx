"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/content";
import { cn } from "@/lib/cn";
import { LANGS, useLang } from "@/i18n/LanguageProvider";

const PLATFORM_HREF = "https://skillbridge-black-delta.vercel.app";

const OPEN_PLATFORM = { kk: "Платформаны ашу", ru: "Открыть платформу", en: "Open the platform" };

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, tr } = useLang();

  const pathname = usePathname();

  const resolveHref = (href: string) =>
      pathname === "/" ? href : `/${href}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
      <>
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "border-b border-border bg-white/85 shadow-[0_1px_0_0_rgba(220,231,248,0.8)] backdrop-blur-md"
                    : "border-b border-transparent bg-white/60 backdrop-blur-sm"
            )}
        >
          <Container className="flex h-[76px] items-center justify-between">
            <a
                href={resolveHref("#top")}
                className="flex shrink-0 items-center gap-2.5"
            >
              <Image
                  src="/brand/logo-icon.png"
                  alt=""
                  width={34}
                  height={38}
                  className="h-9 w-auto"
                  priority
              />

              <span className="font-heading text-[19px] font-extrabold tracking-tight text-ink">
              SkillBridge<span className="text-primary">KZ</span>
            </span>
            </a>

            <nav
                className="hidden items-center gap-0.5 xl:flex"
                aria-label={tr({ kk: "Негізгі навигация", ru: "Основная навигация", en: "Main navigation" })}
            >
              {NAV_LINKS.map((link) => (
                  <a
                      key={link.href}
                      href={resolveHref(link.href)}
                      className="whitespace-nowrap rounded-full px-3 py-2 text-[15px] font-medium text-ink/80 transition-colors hover:bg-soft hover:text-primary"
                  >
                    {tr(link.label)}
                  </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 xl:flex">
              <div
                  className="flex h-10 items-center rounded-full border border-border px-1 text-sm font-semibold text-ink/70"
                  role="group"
                  aria-label={tr({ kk: "Тілді таңдау", ru: "Выбор языка", en: "Language" })}
              >
                {LANGS.map(({ code, label }) => (
                    <button
                        key={code}
                        type="button"
                        onClick={() => setLang(code)}
                        className={cn(
                            "flex h-8 w-9 items-center justify-center rounded-full transition-colors hover:bg-soft hover:text-primary",
                            lang === code && "bg-soft text-primary"
                        )}
                        aria-pressed={lang === code}
                    >
                      {label}
                    </button>
                ))}
              </div>

              <Button href={PLATFORM_HREF} size="md" className="whitespace-nowrap">
                {tr(OPEN_PLATFORM)}
              </Button>
            </div>

            <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-ink xl:hidden"
                aria-label={tr(
                    menuOpen
                        ? { kk: "Мәзірді жабу", ru: "Закрыть меню", en: "Close menu" }
                        : { kk: "Мәзірді ашу", ru: "Открыть меню", en: "Open menu" }
                )}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </Container>

          <div
              className={cn(
                  "fixed inset-x-0 top-[76px] z-40 origin-top overflow-hidden bg-white transition-[max-height,opacity] duration-300 ease-out xl:hidden",
                  menuOpen
                      ? "max-h-[calc(100vh-76px)] opacity-100"
                      : "max-h-0 opacity-0"
              )}
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                  <a
                      key={link.href}
                      href={resolveHref(link.href)}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-xl px-4 py-3.5 text-base font-medium text-ink hover:bg-soft"
                  >
                    {tr(link.label)}
                  </a>
              ))}

              <div className="mt-2 flex items-center justify-between rounded-xl border border-border px-4 py-3">
              <span className="text-sm font-medium text-ink/70">
                {tr({ kk: "Тіл", ru: "Язык", en: "Language" })}
              </span>

                <div className="flex items-center gap-2">
                  {LANGS.map(({ code, label }) => (
                      <button
                          key={code}
                          type="button"
                          onClick={() => setLang(code)}
                          aria-pressed={lang === code}
                          className={cn(
                              "rounded-full px-3 py-1.5 text-sm font-semibold transition-colors hover:bg-soft hover:text-primary",
                              lang === code ? "bg-soft text-primary" : "text-ink/60"
                          )}
                      >
                        {label}
                      </button>
                  ))}
                </div>
              </div>

              <Button
                  href={PLATFORM_HREF}
                  size="lg"
                  className="mt-3 w-full"
                  onClick={() => setMenuOpen(false)}
              >
                {tr(OPEN_PLATFORM)}
              </Button>
            </Container>
          </div>
        </header>

      </>
  );
}