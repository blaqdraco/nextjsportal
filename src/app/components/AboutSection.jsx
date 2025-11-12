"use client";
import React from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const SKILLS = [
  "Node.js",
  "Express",
  "PostgreSQL",
  "Sequelize",
  "JavaScript",
  "React",
];

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
          {/* Skills only (minimal tabs removed) */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SKILLS.map((skill) => (
              <div key={skill} className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-cyan-300" />
                <span className="text-slate-200">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
