"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

const achievementsList = [
  { metric: "Projects", value: "100", postfix: "+" },
  { prefix: "~", metric: "Users", value: "100000" },
  { metric: "Awards", value: "7" },
  { metric: "Years", value: "5" },
];

const AchievementsSection = () => {
  return (
    <div className="py-6 sm:py-10">
      <div className="corner-frame relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d1b2a]/80 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] px-6 py-8 sm:px-12" style={{ "--frame-accent": "34 211 238" }}>
        <span className="corner-frame__corner corner-frame__corner--tl" aria-hidden="true" />
        <span className="corner-frame__corner corner-frame__corner--tr" aria-hidden="true" />
        <span className="corner-frame__corner corner-frame__corner--bl" aria-hidden="true" />
        <span className="corner-frame__corner corner-frame__corner--br" aria-hidden="true" />
        {/* Ambient gradient */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.07),transparent_50%)]" />
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-0 sm:divide-x sm:divide-white/[0.06]">
          {achievementsList.map((achievement, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight flex items-baseline gap-0.5">
                {achievement.prefix && <span>{achievement.prefix}</span>}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-3xl sm:text-4xl font-extrabold"
                  configs={(_, i) => ({ mass: 1, friction: 100, tensions: 140 * (i + 1) })}
                />
                {achievement.postfix && <span>{achievement.postfix}</span>}
              </h2>
              <p className="text-[#8892a4] text-sm mt-1 font-medium">{achievement.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
