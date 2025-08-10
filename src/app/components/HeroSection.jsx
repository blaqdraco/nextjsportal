"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const AboutMeSection = () => {
  const typeAnimationSequences = [
    {
      text: "Hello, I'm Imani Lameck Kirenga",
      color: "text-primary-500",
    },
    {
      text: "Web Developer",
      color: "text-cyan-400",
    },
    {
      text: "Mobile Developer",
      color: "text-pink-400",
    },
    {
      text: "Data scientist and Engineer",
      color: "text-yellow-400",
    },
  ];

  const [currentIdx, setCurrentIdx] = React.useState(0);

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <span
            className={`font-bold mb-2 block text-4xl sm:text-5xl lg:text-6xl ${typeAnimationSequences[currentIdx].color}`}
            style={{ minHeight: "3.5rem" }}
          >
            <TypeAnimation
              sequence={[
                () => setCurrentIdx(0),
                typeAnimationSequences[0].text,
                1000,
                () => setCurrentIdx(1),
                typeAnimationSequences[1].text,
                1000,
                () => setCurrentIdx(2),
                typeAnimationSequences[2].text,
                1000,
                () => setCurrentIdx(3),
                typeAnimationSequences[3].text,
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </span>
          <h2 className="text-white mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            About Me
          </h2>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl max-w-3xl">
            I’m Imani Lameck Kirenga, a passionate software engineer and developer from Tanzania.  
            I specialize in building intuitive and responsive web and mobile applications using modern technologies like React, Next.js, and Tailwind CSS.
          </p>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl max-w-3xl">
            With a background in software engineering and years of experience in tech, I bring a unique perspective to problem-solving and product development.  
            I enjoy crafting clean, efficient code and continuously learning to improve my skills.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
         <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative flex items-center justify-center before:content-[''] before:absolute before:inset-0 before:rounded-full before:z-0 before:pointer-events-none before:bg-gradient-to-r before:from-pink-500 before:via-yellow-400 before:to-cyan-400 before:blur-xl">
            <Image
              src="/images/mypic2.png"
              alt="hero image"
              className="relative z-10 rounded-full"
              width={300}
              height={300}
            />
          </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
