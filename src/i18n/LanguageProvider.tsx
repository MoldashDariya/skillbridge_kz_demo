"use client";

import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "kk" | "ru" | "en";

/** A piece of copy in every supported language. */
export type Localized = Record<Lang, string>;

export const LANGS: Array<{ code: Lang; label: string; htmlLang: string }> = [
  { code: "kk", label: "KZ", htmlLang: "kk" },
  { code: "ru", label: "RU", htmlLang: "ru" },
  { code: "en", label: "EN", htmlLang: "en" },
];

const DEFAULT_LANG: Lang = "ru";
const STORAGE_KEY = "skillbridge:lang";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Picks the current-language string out of a Localized value. */
  tr: (text: Localized) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectInitialLang(): Lang {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "kk" || saved === "ru" || saved === "en") return saved;
  } catch {
    // localStorage may be unavailable (private mode) — fall through
  }
  const browser = window.navigator.language.toLowerCase();
  if (browser.startsWith("kk")) return "kk";
  if (browser.startsWith("en")) return "en";
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    setLangState(detectInitialLang());
  }, []);

  useEffect(() => {
    document.documentElement.lang = LANGS.find((l) => l.code === lang)?.htmlLang ?? lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore — the choice simply won't persist
    }
  }, []);

  const tr = useCallback((text: Localized) => text[lang] ?? text[DEFAULT_LANG], [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, tr }}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
