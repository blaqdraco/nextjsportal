"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutMeSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
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
            <Link
              href="/Imani_Lameck_Kirenga_CV.pdf"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div
            className="glow-circle rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative flex items-center justify-center transition-shadow duration-300 group"
            style={{
              boxShadow: '0 0 40px 10px #a855f7, 0 0 80px 20px #f43f5e',
            }}
          >
            <style jsx>{`
              .glow-circle {
                box-shadow: 0 0 40px 10px #a855f7, 0 0 80px 20px #f43f5e;
                transition: box-shadow 0.3s;
              }
              .glow-circle:hover {
                box-shadow: 0 0 40px 10px #22d3ee, 0 0 80px 20px #f59e42;
              }
            `}</style>
            <Image
              src="/images/mypic2.png"
              alt="Imani Lameck Kirenga"
              className="rounded-full object-cover w-full h-full"
              fill
              sizes="(max-width: 400px) 100vw, 400px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeSection;
