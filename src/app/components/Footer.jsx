import React from "react";
import { BUY_ME_A_COFFEE_URL } from "../config/socials";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <a
          href={BUY_ME_A_COFFEE_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-amber-200 transition hover:border-amber-300/60 hover:bg-amber-400/20 hover:text-amber-100"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
          <span className="text-sm font-medium">Buy me a coffee</span>
        </a>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
