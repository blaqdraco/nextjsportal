"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const LANG_KEY = "app.lang";

const dictionaries = {
  en: {
    nav: { about: "About", projects: "Projects", contact: "Contact" },
  },
  sw: {
    nav: { about: "Kuhusu", projects: "Miradi", contact: "Wasiliana" },
  },
  fr: {
    nav: { about: "À propos", projects: "Projets", contact: "Contact" },
  },
  es: {
    nav: { about: "Acerca de", projects: "Proyectos", contact: "Contacto" },
  },
};

const fallbackLang = "en";

const LanguageContext = createContext({
  lang: fallbackLang,
  setLang: () => {},
  t: (key) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(fallbackLang);

  // Detect from localStorage or browser on first mount
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(LANG_KEY) : null;
    if (stored && dictionaries[stored]) {
      setLang(stored);
      return;
    }
    const browser = (typeof navigator !== "undefined" && navigator.language) || "en";
    const short = browser.split("-")[0].toLowerCase();
    const match = dictionaries[short] ? short : fallbackLang;
    setLang(match);
  }, []);

  // Persist and update <html lang>
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(LANG_KEY, lang);
      try {
        document.documentElement.setAttribute("lang", lang);
      } catch (_) {}
    }
  }, [lang]);

  const t = useMemo(() => {
    return (key) => {
      const parts = key.split(".");
      let value = dictionaries[lang] || dictionaries[fallbackLang];
      for (const p of parts) {
        value = value?.[p];
      }
      if (typeof value === "string") return value;
      // fallback chain
      value = dictionaries[fallbackLang];
      for (const p of parts) {
        value = value?.[p];
      }
      return typeof value === "string" ? value : key;
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
