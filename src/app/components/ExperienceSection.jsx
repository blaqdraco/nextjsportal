"use client";
import React from "react";
import { EXPERIENCES } from "../config/experience";

const Dot = () => (
  <span className="relative inline-block h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
);

const getYear = (str) => {
  if (!str) return "";
  const m = String(str).match(/(\d{4})/);
  return m ? m[1] : String(str);
};

export default function ExperienceSection() {
  // Group experiences by start year
  const groups = EXPERIENCES.reduce((acc, it) => {
    const y = getYear(it.start);
    acc[y] = acc[y] || [];
    acc[y].push(it);
    return acc;
  }, {});

  const yearsDesc = Object.keys(groups).sort((a, b) => Number(b) - Number(a));

  return (
    <section id="experience" className="py-12 lg:py-16">
      <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Work Experience</h2>

      <div className="relative pl-8">
        {/* vertical line */}
        <div className="pointer-events-none absolute left-3 top-0 bottom-0 w-px bg-white/10" />

        {yearsDesc.map((year) => (
          <div key={year} className="relative mb-8">
            {/* year heading (no dot/egg) */}
            <div className="mb-3 text-lg font-bold text-slate-200">{year}</div>

            <div className="space-y-4">
              {groups[year].map((item, idx) => (
                <article
                  key={idx}
                  className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#0b0b0c]/60 p-5"
                >
                  <div className="text-white text-lg font-semibold">{item.title}</div>
                  <p className="mt-1 text-sm text-slate-300">
                    <span className="font-medium">{item.org}</span>
                    {item.location ? <span> • {item.location}</span> : null}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">{item.start} — {item.end}</p>
                  {item.bullets?.length ? (
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-300">
                      {item.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                  {item.link ? (
                    <p className="mt-2 text-sm">
                      <a
                        className="text-cyan-300 hover:text-cyan-200 underline"
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Learn more
                      </a>
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
