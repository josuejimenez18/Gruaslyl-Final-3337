import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "es" | "en";

/** Texto bilingüe. */
export type L = { es: string; en: string };

interface I18nValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (value: L) => string;
}

const I18nContext = createContext<I18nValue | null>(null);

const STORAGE_KEY = "gruaslyl.lang";

function initialLang(): Lang {
  if (typeof window === "undefined") return "es";
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (fromUrl === "en" || fromUrl === "es") return fromUrl;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "es") return stored;
  // Español por defecto: el público principal es costarricense.
  return "es";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang === "es" ? "es-CR" : "en";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo<I18nValue>(
    () => ({ lang, setLang, t: (v: L) => v[lang] }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
