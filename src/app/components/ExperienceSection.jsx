"use client";
import React from "react";
import { EXPERIENCES } from "../config/experience";

const Dot = () => (
  <span className="relative inline-block h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
);

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 lg:py-16">
      <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Work Experience</h2>
      <div className="space-y-4">
        {EXPERIENCES.map((item, idx) => (
          <article
            key={idx}
            className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#0b0b0c]/60 p-5"
          >
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-[1fr_auto] items-start gap-3">
              <div>
                <div className="flex items-center gap-2 text-white">
                  <Dot />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="mt-1 text-sm text-slate-300">
                  <span className="font-medium">{item.org}</span>
                  {item.location ? <span> • {item.location}</span> : null}
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-300">
                  {item.bullets?.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                {item.link ? (
                  <p className="mt-2 text-sm">
                    <a className="text-cyan-300 hover:text-cyan-200 underline" href={item.link} target="_blank" rel="noreferrer">
                      Learn more
                    </a>
                  </p>
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
