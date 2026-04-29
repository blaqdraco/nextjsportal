"use client";
import React from "react";
import { EDUCATION } from "../config/experience";
import { motion } from "framer-motion";

const Cap = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 text-fuchsia-300" fill="currentColor" aria-hidden>
    <path d="M12 3L1 8l11 5 9-4.091V17h2V8L12 3z" />
    <path d="M7 12.5V16c0 1.657 2.239 3 5 3s5-1.343 5-3v-3.5l-5 2.273L7 12.5z" opacity=".5" />
  </svg>
);

const getYear = (str) => {
  if (!str) return "";
  const m = String(str).match(/(\d{4})/);
  return m ? m[1] : String(str);
};

export default function EducationSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
  };

  // Group education by start year
  const groups = EDUCATION.reduce((acc, it) => {
    const y = getYear(it.start);
    acc[y] = acc[y] || [];
    acc[y].push(it);
    return acc;
  }, {});

  const yearsDesc = Object.keys(groups).sort((a, b) => Number(b) - Number(a));

  return (
    <motion.section
      id="education"
      className="py-12 lg:py-16"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white" variants={itemVariants}>
        Education
      </motion.h2>

      <div
        className="corner-frame relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10"
        style={{ "--frame-accent": "217 70 239" }}
      >
        <span className="corner-frame__corner corner-frame__corner--tl" aria-hidden="true" />
        <span className="corner-frame__corner corner-frame__corner--tr" aria-hidden="true" />
        <span className="corner-frame__corner corner-frame__corner--bl" aria-hidden="true" />
        <span className="corner-frame__corner corner-frame__corner--br" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.10),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_34%)]" />

        <div className="relative grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
          <div className="self-start lg:pr-6">
            <p className="text-xs uppercase tracking-[0.35em] text-fuchsia-300/70">Education</p>
            <div className="mt-6 h-px w-16 bg-gradient-to-r from-fuchsia-300/80 to-transparent" />
          </div>

          <div className="space-y-8 lg:border-l lg:border-white/10 lg:pl-8">
            {yearsDesc.map((year) => (
              <motion.div key={year} className="relative" variants={itemVariants}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-300/80 shadow-[0_0_0_4px_rgba(217,70,239,0.12)]" />
                  <div className="text-lg font-semibold text-slate-100">{year}</div>
                </div>

                <div className="space-y-4">
                  {groups[year].map((item, idx) => (
                    <motion.article
                      key={idx}
                      className="corner-frame relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0c]/70 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.16)] backdrop-blur-sm"
                      style={{ "--frame-accent": "217 70 239" }}
                      variants={itemVariants}
                      whileHover={{ y: -3, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                      <span className="corner-frame__corner corner-frame__corner--tl" aria-hidden="true" />
                      <span className="corner-frame__corner corner-frame__corner--tr" aria-hidden="true" />
                      <span className="corner-frame__corner corner-frame__corner--bl" aria-hidden="true" />
                      <span className="corner-frame__corner corner-frame__corner--br" aria-hidden="true" />
                      <div className="flex items-center gap-2 text-white">
                        <Cap />
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                      </div>
                      <p className="mt-1 text-sm text-slate-300">
                        <span className="font-medium">{item.org}</span>
                        {item.location ? <span> • {item.location}</span> : null}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        {item.start} — {item.end}
                      </p>
                      {item.bullets?.length ? (
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-300">
                          {item.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      ) : null}
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
