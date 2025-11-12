"use client";
import React from "react";
import Image from "next/image";
// 3D-styled tech icons (inline SVG or monogram) with brand colors
const TECHS = [
  { name: "JavaScript", short: "JS", colors: "from-yellow-400 to-amber-500", fg: "text-black" },
  { name: "TypeScript", short: "TS", colors: "from-sky-400 to-blue-500", fg: "text-white/90" },
  { name: "HTML5", short: "HTML", colors: "from-orange-400 to-rose-500", fg: "text-white/90" },
  { name: "CSS3", short: "CSS", colors: "from-blue-400 to-indigo-500", fg: "text-white/90" },
  { name: "React", short: "", colors: "from-cyan-400 to-sky-500", fg: "text-white/90", icon: "react" },
  { name: "Node.js", short: "Node", colors: "from-emerald-400 to-lime-500", fg: "text-black/80" },
  { name: "Express", short: "Ex", colors: "from-slate-300 to-zinc-200", fg: "text-black/80" },
  { name: "Sequelize", short: "Seq", colors: "from-teal-400 to-cyan-500", fg: "text-white/90" },
  { name: "PostgreSQL", short: "PG", colors: "from-sky-500 to-blue-700", fg: "text-white/90" },
];

function ReactLogo({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="3">
        <ellipse rx="18" ry="6" transform="translate(32 32) rotate(60)" />
        <ellipse rx="18" ry="6" transform="translate(32 32) rotate(-60)" />
        <ellipse rx="18" ry="6" transform="translate(32 32) rotate(0)" />
      </g>
      <circle cx="32" cy="32" r="4" fill="currentColor" />
    </svg>
  );
}

function TechTile({ name, short, colors, fg, icon }) {
  return (
    <div className="group relative">
      {/* pseudo 3D base */}
      <div
        className={
          `rounded-2xl bg-gradient-to-br ${colors} p-3 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.6)] ring-1 ring-white/10
           transform-gpu transition-all duration-300 hover:-translate-y-1 hover:rotate-[0.5deg]`}
        aria-label={name}
        title={name}
      >
        <div className="rounded-xl bg-black/20 backdrop-blur-[2px] p-3 flex items-center justify-center">
          {icon === "react" ? (
            <ReactLogo className={`h-9 w-9 ${fg} drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]`} />
          ) : (
            <span className={`text-sm font-extrabold tracking-tight ${fg}`}>{short}</span>
          )}
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="About illustration" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          {/* 3D tech icons grid */}
          <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {TECHS.map((t) => (
              <TechTile key={t.name} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
