import React from "react";
import { BUY_ME_A_COFFEE_URL } from "../config/socials";

const Footer = () => {
  const CURRENT_YEAR = new Date().getFullYear();
  const START_YEAR = Number(process.env.NEXT_PUBLIC_COPYRIGHT_START_YEAR ?? 2020);
  const yearText = START_YEAR === CURRENT_YEAR ? `${CURRENT_YEAR}` : `${START_YEAR}–${CURRENT_YEAR}`;

  return (
    <footer className="relative z-10 text-white">
      {/* thin glowing line at the top of the footer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-fuchsia-500/40 via-purple-400/40 to-cyan-400/40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-[2px] h-3 bg-gradient-to-r from-fuchsia-500/10 via-purple-400/10 to-cyan-400/10 blur-md"
      />

      <div className="container px-6 py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Left: copyright */}
          <div className="order-2 sm:order-1">
            <p className="text-xs text-slate-400">
              © {yearText} Imani Lameck Kirenga. All rights reserved.
            </p>
          </div>

          {/* Center: affiliations */}
          <div className="order-3 sm:order-2">
            <p className="text-xs text-slate-400 text-center sm:text-left">
              Affiliations: {" "}
              <a
                href="https://www.erb.go.tz/"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-300 hover:text-cyan-200 underline underline-offset-2"
              >
                Engineers Registration Board (ERB)
              </a>
              {" "}•{" "}
              <a
                href="https://www.costech.or.tz/seap" 
                target="_blank"
                rel="noreferrer"
                className="text-cyan-300 hover:text-cyan-200 underline underline-offset-2"
              >
                SEAP (Structured Engineers Apprenticeship Programme)
              </a>
            </p>
          </div>

          {/* Right: support */}
          <div className="order-1 sm:order-3 flex justify-center sm:justify-end">
            <a
              href={BUY_ME_A_COFFEE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-amber-200 transition hover:border-amber-300/60 hover:bg-amber-400/20 hover:text-amber-100"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
              <span className="text-sm font-medium">Buy me a coffee</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
