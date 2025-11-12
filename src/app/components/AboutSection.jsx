"use client";
import React from "react";
import Image from "next/image";
// Tech set to display as 3D badges
const TECHS = [
  { name: "HTML5", icon: "html" },
  { name: "CSS3", icon: "css" },
  { name: "JavaScript", icon: "js" },
  { name: "Laravel", icon: "laravel" },
  { name: "React", icon: "react" },
  { name: "Redux", icon: "redux" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "Node.js", icon: "node" },
  { name: "Three.js", icon: "three" },
  { name: "Git", icon: "git" },
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

// Minimal inline icons for common tech
const HtmlIcon = ({ className = "" }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden>
    <path fill="#e44d26" d="M9 4h30l-3 34-12 4-12-4-3-34z" />
    <path fill="#f16529" d="M24 6v32l9-3 2.6-29H24z" />
    <path fill="#fff" d="M24 26h6l-.5 6-5.5 2-5.5-2-.2-3h3l.1 1.3 2.9 1 2.9-1 .2-2.3H18l-.5-6h12l.2-3H17.1l-.3-3H33l-.4 6H24z" />
  </svg>
);

const CssIcon = ({ className = "" }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden>
    <path fill="#264de4" d="M9 4h30l-3 34-12 4-12-4-3-34z" />
    <path fill="#2965f1" d="M24 6v32l9-3 2.6-29H24z" />
    <path fill="#fff" d="M24 26h6l-.4 4.5-5.6 1.9-5.6-1.9-.2-2.2h3l.1.9 2.7.9 2.7-.9.2-2.2H18l-.5-6h12l.3-3H17.2l-.3-3H33l-.4 6H24z" />
  </svg>
);

const JsIcon = ({ className = "" }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden>
    <rect x="6" y="6" width="36" height="36" rx="6" fill="#f7df1e" />
    <path d="M20 32.5c0 3.2-2 5-5 5-2 0-3.6-.7-4.8-2l2.2-2.6c.8.8 1.6 1.2 2.6 1.2 1 0 1.6-.6 1.6-1.8V20h3.4v12.5zM28.3 34.4c1 .8 2.2 1.2 3.6 1.2 1.6 0 2.8-.8 2.8-2.2 0-1.2-.7-1.9-2.5-2.6l-.8-.3c-2.6-.9-4.3-2.2-4.3-4.9 0-2.5 1.9-4.4 5-4.4 2.2 0 3.8.6 5 1.6l-1.9 2.6c-.9-.6-1.9-1-3.1-1-1.6 0-2.3.9-2.3 1.9 0 1.3.9 1.9 3 2.6l.8.3c3 .9 4.7 2.3 4.7 5 0 2.9-2.3 4.6-5.4 4.6-2.3 0-4.2-.7-5.6-1.9l2-2.5z" fill="#0b0b0c" />
  </svg>
);

const LaravelIcon = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" stroke="#fb503b" strokeWidth="3" aria-hidden>
    <path d="M10 20l14-6 10 6v12l-10 6-14-6V20z" />
    <path d="M34 20l14-6 6 4v12l-12 6-8-4V20z" />
  </svg>
);

const ReduxIcon = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden>
    <path fill="none" stroke="#764abc" strokeWidth="4" d="M24 44c-6 0-10-6-8-11 1.3-3.2 4.8-5 8.4-4.5M40 20c6 0 10 6 8 11-1.3 3.2-4.8 5-8.4 4.5M22 28c2.2 5.8 7.8 13 14.5 16.5 4.7 2.5 9.5 2.5 12.7 1.3" />
    <circle cx="22" cy="28" r="3" fill="#764abc" />
    <circle cx="42" cy="35" r="3" fill="#764abc" />
    <circle cx="40" cy="20" r="3" fill="#764abc" />
  </svg>
);

const TailwindIcon = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden>
    <path fill="#38bdf8" d="M12 28c4-10 12-15 24-12 5 1 8 4 10 8-4-2-7-2-10 0-3 2-5 4-10 4-5 0-9-2-14 0zm6 16c4-10 12-15 24-12 5 1 8 4 10 8-4-2-7-2-10 0-3 2-5 4-10 4-5 0-9-2-14 0z" />
  </svg>
);

const NodeIcon = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden>
    <path d="M32 6l22 12v28L32 58 10 46V18L32 6z" fill="#3c873a" />
    <text x="32" y="39" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff">JS</text>
  </svg>
);

const ThreeIcon = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" stroke="#4b5563" strokeWidth="3" aria-hidden>
    <path d="M32 10l20 12-20 12L12 22 32 10z" />
    <path d="M12 22v20l20 12 20-12V22M32 34v20" />
  </svg>
);

const GitIcon = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden>
    <circle cx="32" cy="32" r="22" fill="#f05133" />
    <path d="M22 34h10v-8l10 10v6" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" />
    <circle cx="22" cy="34" r="3" fill="#fff" />
    <circle cx="32" cy="26" r="3" fill="#fff" />
    <circle cx="42" cy="42" r="3" fill="#fff" />
  </svg>
);

function Badge3D({ title, children }) {
  return (
    <div className="group inline-block" title={title} aria-label={title}>
      <div
        className="relative h-16 w-16 select-none overflow-hidden [clip-path:polygon(50%_0%,80%_10%,95%_35%,95%_65%,80%_90%,50%_100%,20%_90%,5%_65%,5%_35%,20%_10%)]
                   shadow-[0_12px_24px_rgba(0,0,0,0.35)] ring-1 ring-white/10 transform-gpu transition-transform duration-300 hover:-translate-y-1"
      >
        <div className="absolute inset-0 bg-[conic-gradient(at_50%_50%,#ffffff_0deg,#e9e9e9_90deg,#dcdcdc_180deg,#f1f1f1_270deg,#ffffff_360deg)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent mix-blend-overlay" />
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          <div className="h-12 w-12 rounded-full border border-white/40 bg-gradient-to-b from-neutral-50 to-neutral-200 shadow-inner flex items-center justify-center">
            {children}
          </div>
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
          {/* 3D badge icons grid */}
          <div className="mt-8 grid grid-cols-5 sm:grid-cols-6 gap-4">
            {TECHS.map((t) => (
              <Badge3D key={t.name} title={t.name}>
                {t.icon === "react" && <ReactLogo className="h-7 w-7 text-cyan-500" />}
                {t.icon === "redux" && <ReduxIcon className="h-7 w-7" />}
                {t.icon === "tailwind" && <TailwindIcon className="h-7 w-7" />}
                {t.icon === "node" && <NodeIcon className="h-7 w-7" />}
                {t.icon === "three" && <ThreeIcon className="h-7 w-7" />}
                {t.icon === "git" && <GitIcon className="h-7 w-7" />}
                {t.icon === "html" && <HtmlIcon className="h-7 w-7" />}
                {t.icon === "css" && <CssIcon className="h-7 w-7" />}
                {t.icon === "js" && <JsIcon className="h-7 w-7" />}
                {t.icon === "laravel" && <LaravelIcon className="h-7 w-7" />}
              </Badge3D>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
