"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const AboutMeSection = () => {
  const typeAnimationSequences = [
    { text: "Hello, I'm Imani Lameck Kirenga", color: "text-cyan-400" },
    { text: "Software Engineer", color: "text-cyan-300" },
    { text: "Mobile Developer", color: "text-fuchsia-400" },
    { text: "Data Scientist and Engineer", color: "text-yellow-400" },
    { text: "Cyber Security Expert", color: "text-emerald-400" },
  ];

  const [currentIdx, setCurrentIdx] = React.useState(0);

  return (
    <section className="py-16 lg:py-24">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 items-center">
        {/* ── Text column ── */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="col-span-12 sm:col-span-7 place-self-center text-center sm:text-left"
        >
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 mb-6 font-mono text-xs text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for work
          </div>

          {/* Terminal window */}
          <div className="mb-5 rounded-xl border border-white/[0.06] bg-[#0d1b2a] p-4 font-mono text-sm shadow-inner">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-2 text-slate-500 text-xs">~/imani -- whoami</span>
            </div>
            <span className="text-slate-400 mr-2">$</span>
            <span
              className={typeAnimationSequences[currentIdx].color + " font-bold text-xl sm:text-2xl lg:text-3xl transition-colors duration-300"}
              style={{ minHeight: "2.5rem" }}
            >
              <TypeAnimation
                sequence={[
                  () => setCurrentIdx(0),
                  typeAnimationSequences[0].text, 1200,
                  () => setCurrentIdx(1),
                  typeAnimationSequences[1].text, 1000,
                  () => setCurrentIdx(2),
                  typeAnimationSequences[2].text, 1000,
                  () => setCurrentIdx(3),
                  typeAnimationSequences[3].text, 1000,
                  () => setCurrentIdx(4),
                  typeAnimationSequences[4].text, 1200,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </div>

          <h2 className="text-white mb-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            Building{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              Secure
            </span>{" "}
            &amp; Scalable Software
          </h2>

          <p className="text-[#8892a4] text-base sm:text-lg mb-4 lg:text-xl max-w-2xl leading-relaxed">
            I&apos;m Imani Lameck Kirenga &mdash; a software engineer &amp; cyber security
            expert from Tanzania. I specialise in building secure, intuitive web and mobile
            applications using React, Next.js, Django, and .NET, applying secure-by-design
            principles at every layer.
          </p>

          <div className="flex flex-wrap gap-3 justify-center sm:justify-start mt-6">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold shadow-[0_0_24px_rgba(34,211,238,0.25)] hover:shadow-[0_0_36px_rgba(34,211,238,0.45)] transition-all duration-300 hover:scale-[1.03]"
            >
              Contact Me
            </Link>
            <a
              href="/resume.pdf"
              download="Imani_Lameck_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-200 font-semibold hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-all duration-300 hover:scale-[1.03]"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* ── Image column ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="col-span-12 sm:col-span-5 place-self-center"
        >
          <div className="relative w-[220px] h-[220px] lg:w-[340px] lg:h-[340px] mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-fuchsia-500 to-emerald-400 blur-2xl opacity-25 animate-pulse" />
            <div className="absolute inset-[3px] rounded-full bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-emerald-400 p-[2px]">
              <div className="w-full h-full rounded-full bg-[#0a192f] flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/mypic2.png"
                  alt="Imani Lameck Kirenga"
                  className="rounded-full object-cover"
                  width={320}
                  height={320}
                  priority
                />
              </div>
            </div>
            {/* Security badge */}
            <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-[#0a192f]/90 backdrop-blur-sm px-3 py-1.5 text-xs font-mono text-emerald-300 shadow-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Secure Code
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeSection;
