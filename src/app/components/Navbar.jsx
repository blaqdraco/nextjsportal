"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon, CpuChipIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { GITHUB_URL, LINKEDIN_URL } from "../config/socials";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
            `border-white/10 bg-[#0b0b0c]/70 backdrop-blur-xl ` +
            `shadow-lg ring-1 ring-white/10 ` +
            (scrolled ? "shadow-fuchsia-500/10" : "shadow-transparent")
          }
        >
          {/* Brand */}
          <Link href={"/"} className="flex items-center gap-2 pl-4 py-2">
            <span className="relative inline-flex items-center justify-center">
              <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-fuchsia-500/20 via-purple-500/10 to-cyan-400/20 blur" />
              <CpuChipIcon className="relative h-6 w-6 text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.35)]" />
            </span>
            <span className="hidden sm:block bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-300 bg-clip-text text-lg font-semibold tracking-tight text-transparent">
              
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-1 pr-2">
              {navLinks.map((link, index) => (
                <li key={index} className="group">
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}

              {/* Social icons */}
              <li className="ml-2 hidden lg:flex items-center gap-2 pl-2 border-l border-white/10">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:border-fuchsia-400/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgb(217,70,239,0.25)]"
                  aria-label="GitHub"
                >
                  <Image src="/github-icon.svg" alt="GitHub" width={18} height={18} />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgb(34,211,238,0.25)]"
                  aria-label="LinkedIn"
                >
                  <Image src="/linkedin-icon.svg" alt="LinkedIn" width={18} height={18} />
                </a>
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
        <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} />
      ) : null}
    </nav>
  );
};

export default Navbar;
