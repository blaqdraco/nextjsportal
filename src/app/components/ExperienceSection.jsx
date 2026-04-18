"use client";
import React from "react";
import { EXPERIENCES } from "../config/experience";
import { motion } from "framer-motion";

const getYear = (str) => {
  if (!str) return "";
  const m = String(str).match(/(\d{4})/);
  return m ? m[1] : String(str);
};

export default function ExperienceSection() {
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

  // Group experiences by start year
  const groups = EXPERIENCES.reduce((acc, it) => {
    const y = getYear(it.start);
    acc[y] = acc[y] || [];
    acc[y].push(it);
    return acc;
  }, {});

  const yearsDesc = Object.keys(groups).sort((a, b) => Number(b) - Number(a));

  return (
    <motion.section
      id="experience"
      className="py-12 lg:py-16"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white" variants={itemVariants}>
        Work Experience
      </motion.h2>

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_34%)]" />

        <div className="relative grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
          <div className="self-start lg:pr-6">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Experience</p>
            <div className="mt-6 h-px w-16 bg-gradient-to-r from-cyan-300/80 to-transparent" />
          </div>

          <div className="space-y-8 lg:border-l lg:border-white/10 lg:pl-8">
            {yearsDesc.map((year) => (
              <motion.div key={year} className="relative" variants={itemVariants}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/80 shadow-[0_0_0_4px_rgba(34,211,238,0.12)]" />
                  <div className="text-lg font-semibold text-slate-100">{year}</div>
                </div>

                <div className="space-y-4">
                  {groups[year].map((item, idx) => (
                    <motion.article
                      key={idx}
                      className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0c]/70 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.16)] backdrop-blur-sm"
                      variants={itemVariants}
                      whileHover={{ y: -3, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                      <div className="text-lg font-semibold text-white">{item.title}</div>
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
                      {item.link ? (
                        <p className="mt-2 text-sm">
                          <a
                            className="text-cyan-300 underline decoration-cyan-300/40 underline-offset-4 hover:text-cyan-200"
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Learn more
                          </a>
                        </p>
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
