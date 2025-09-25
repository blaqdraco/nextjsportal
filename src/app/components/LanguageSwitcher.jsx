"use client";
import React from "react";
import { useLanguage } from "../providers/LanguageProvider";

const options = [
  { code: "en", label: "English" },
  { code: "sw", label: "Swahili" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
];

export default function LanguageSwitcher({ compact = false }) {
  const { lang, setLang } = useLanguage();

  return (
    <div className="relative">
      <select
        aria-label="Language selector"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className={
          (compact
            ? "h-9 rounded-lg px-2 text-sm "
            : "h-10 rounded-xl px-3 text-sm ") +
          " bg-white/5 border border-white/10 text-slate-200 outline-none backdrop-blur-md hover:border-white/20"
        }
      >
        {options.map((opt) => (
          <option key={opt.code} value={opt.code}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
