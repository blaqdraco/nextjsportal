import React from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { GITHUB_URL, LINKEDIN_URL, BUY_ME_A_COFFEE_URL } from "../config/socials";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../providers/LanguageProvider";

const MenuOverlay = ({ links, onClose }) => {
  const { t } = useLanguage();
  return (
    <div className="md:hidden fixed inset-0 z-40">
      {/* Backdrop */}
      <button
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Panel */}
      <div className="absolute inset-x-3 top-4 rounded-2xl border border-white/10 bg-[#0b0b0c]/90 p-3 shadow-2xl ring-1 ring-white/10">
        <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-2">
          <ul className="flex flex-col items-stretch divide-y divide-white/5">
            {links.map((link, index) => (
              <li key={index} className="group">
                <NavLink
                  href={link.path}
                  title={link.key ? t(link.key) : link.title}
                  onClick={onClose}
                  className="w-full"
                />
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="mt-3 flex items-center justify-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-fuchsia-400/40 hover:bg-white/10"
              aria-label="GitHub"
            >
              <Image src="/github-icon.svg" alt="GitHub" width={18} height={18} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-cyan-400/40 hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <Image src="/linkedin-icon.svg" alt="LinkedIn" width={18} height={18} />
            </a>
          </div>

          <div className="mt-4 flex flex-col items-center gap-3">
            {/* Resume download */}
            <a
              href="/resume.pdf"
              download="Imani_Lameck_CV.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-400/20 hover:text-cyan-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 3a1 1 0 011 1v8.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L11 12.586V4a1 1 0 011-1z" />
                <path d="M5 19a2 2 0 002 2h10a2 2 0 002-2v-3a1 1 0 112 0v3a4 4 0 01-4 4H7a4 4 0 01-4-4v-3a1 1 0 112 0v3z" />
              </svg>
              <span className="text-sm font-medium">Resume</span>
            </a>

            <a
              href={BUY_ME_A_COFFEE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-amber-200 transition hover:border-amber-300/60 hover:bg-amber-400/20 hover:text-amber-100"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
              <span className="text-sm font-medium">Buy me a coffee</span>
            </a>
          </div>

          {/* Language */}
          <div className="mt-3 flex justify-center">
            <LanguageSwitcher compact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
