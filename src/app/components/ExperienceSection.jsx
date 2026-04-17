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

      <div className="relative pl-8">
        {/* vertical line */}
        <div className="pointer-events-none absolute left-3 top-0 bottom-0 w-px bg-white/10" />

        {yearsDesc.map((year) => (
          <motion.div key={year} className="relative mb-8" variants={itemVariants}>
            {/* year heading (no dot/egg) */}
            <div className="mb-3 text-lg font-bold text-slate-200">{year}</div>

            <div className="space-y-4">
              {groups[year].map((item, idx) => (
                <motion.article
                  key={idx}
                  className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#0b0b0c]/60 p-5"
                  variants={itemVariants}
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
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
                </motion.article>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
