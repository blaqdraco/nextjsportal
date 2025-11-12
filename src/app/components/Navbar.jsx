"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon, CpuChipIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { GITHUB_URL, LINKEDIN_URL, BUY_ME_A_COFFEE_URL } from "../config/socials";
import { useLanguage } from "../providers/LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinksBase = [
  { key: "nav.about", path: "#about" },
  { title: "Experience", path: "#experience" },
  { title: "Education", path: "#education" },
  { key: "nav.projects", path: "#projects" },
  { key: "nav.contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      {/* subtle gradient line at very top */}
      <div className="pointer-events-none h-[1px] w-full bg-gradient-to-r from-fuchsia-500/40 via-purple-400/40 to-cyan-400/40" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={
            `mt-3 flex items-center justify-between rounded-2xl border transition-all ` +
            // Minimal: softer border, less opacity, no ring or extra shadows
            `border-white/5 bg-[#0b0b0c]/60 backdrop-blur-lg`
          }
        >
          {/* Brand */}
          <Link href={"/"} className="flex items-center gap-2 pl-4 py-2">
            <span className="relative inline-flex items-center justify-center">
              {/* Minimal: remove colorful glow backdrop, reduce icon glow */}
              <CpuChipIcon className="relative h-6 w-6 text-cyan-300" />
            </span>
            {/* Minimal brand text */}
            <span className="hidden sm:block text-cyan-200 text-lg font-semibold tracking-tight">Imani Lameck</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-1 pr-2">
              {navLinksBase.map((link, index) => (
                <li key={index} className="group">
                  <NavLink href={link.path} title={link.key ? t(link.key) : link.title} />
                </li>
              ))}

              {/* Social icons + actions */}
              <li className="ml-2 hidden lg:flex items-center gap-2 pl-2 border-l border-white/10">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-white/[0.04] transition hover:bg-white/[0.08]"
                  aria-label="GitHub"
                >
                  <Image src="/github-icon.svg" alt="GitHub" width={18} height={18} />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-white/[0.04] transition hover:bg-white/[0.08]"
                  aria-label="LinkedIn"
                >
                  <Image src="/linkedin-icon.svg" alt="LinkedIn" width={18} height={18} />
                </a>

                {/* Resume download */}
                <a
                  href="/resume.pdf"
                  download="Imani_Lameck_CV.pdf"
                  className="ml-1 inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-cyan-100 transition hover:bg-cyan-400/15"
                >
                  <ArrowDownTrayIcon className="h-4 w-4" />
                  <span className="text-sm font-medium">Resume</span>
                </a>
                <a
                  href={BUY_ME_A_COFFEE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-2 inline-flex items-center gap-2 rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-amber-200 transition hover:border-amber-300/60 hover:bg-amber-400/20 hover:text-amber-100"
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
                  <span className="text-sm font-medium">Buy me a coffee</span>
                </a>
                {/* Language switcher */}
                <div className="ml-2">
                  <LanguageSwitcher compact />
                </div>
              </li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden pr-2">
            <button
              onClick={() => setNavbarOpen((v) => !v)}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-white/20 hover:bg-white/10"
              aria-label={navbarOpen ? "Close menu" : "Open menu"}
            >
              {navbarOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {navbarOpen ? (
        <MenuOverlay links={navLinksBase} onClose={() => setNavbarOpen(false)} />
      ) : null}
    </nav>
  );
};

export default Navbar;
