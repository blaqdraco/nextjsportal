"use client";
import React from "react";
import { EDUCATION } from "../config/experience";

const Cap = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 text-fuchsia-300" fill="currentColor" aria-hidden>
    <path d="M12 3L1 8l11 5 9-4.091V17h2V8L12 3z" />
    <path d="M7 12.5V16c0 1.657 2.239 3 5 3s5-1.343 5-3v-3.5l-5 2.273L7 12.5z" opacity=".5" />
  </svg>
);

export default function EducationSection() {
  return (
    <section id="education" className="py-12 lg:py-16">
      <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Education</h2>
      <div className="space-y-4">
        {EDUCATION.map((item, idx) => (
          <article
            key={idx}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0c]/60 p-5 shadow-lg ring-1 ring-white/10"
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-fuchsia-500/5 via-purple-400/5 to-cyan-400/5" />
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-[1fr_auto] items-start gap-3">
              <div>
                <div className="flex items-center gap-2 text-white">
                  <Cap />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="mt-1 text-sm text-slate-300">
                  <span className="font-medium">{item.org}</span>
                  {item.location ? <span> • {item.location}</span> : null}
                </p>
                {item.bullets?.length ? (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-300">
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="text-right text-slate-400 whitespace-nowrap">
                <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-1">
                  <span className="text-xs font-medium">{item.start} — {item.end}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
