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

      <div className="relative pl-8">
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
                  <div className="flex items-center gap-2 text-white">
                    <Cap />
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
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
                </motion.article>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
