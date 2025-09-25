import React from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { GITHUB_URL, LINKEDIN_URL } from "../config/socials";

const MenuOverlay = ({ links, onClose }) => {
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
                  title={link.title}
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
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
