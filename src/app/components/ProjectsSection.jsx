"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 0,
    title: "SafariHunt",
    description:
      "A startup-focused initiative presented under the Ministry of Communication and Information Technology to support innovation, digital growth, and youth-led solutions.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Samia%20Suluhu%20Hassan%20%28cropped%29.jpg",
    imgPosition: "50% 30%",
    gitUrl: null,
    previewUrl: null,
    isCurrent: true,
    statusLabel: "Featured",
    featured: true,
  },
  {
    id: 1,
    title: "Tanzania Mineral Sector Management Information System",
    description:
      "Private government project. System details and screenshots are not publicly available due to security requirements.",
    image: "/images/projects/1.jpg",
    gitUrl: null,
    previewUrl: null,
  },
  {
    id: 2,
    title: "Ministry of Minerals Improved Website",
    description:
      "Official ministry website project for the Tanzania Ministry of Minerals, currently under construction for improved public information and service access.",
    image: "/images/projects/2.jpg",
    gitUrl: null,
    previewUrl: null,
    isCurrent: true,
    statusLabel: "Under Construction",
  },
  {
    id: 3,
    title: "DCEA Tanzania Authority Private Management System (MCIT)",
    description:
      "Private authority management platform developed under MCIT. Access is restricted and not available for public demo.",
    image: "/images/projects/3.jpg",
    gitUrl: null,
    previewUrl: null,
  },
  {
    id: 4,
    title: "Tanzania Mining Conference Website",
    description:
      "Private conference management system for the Tanzania Mining Conference. Public-facing details are intentionally limited.",
    image: "/images/projects/4.jpg",
    gitUrl: null,
    previewUrl: null,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const [featured, ...rest] = projectsData;

  return (
    <section id="projects" className="py-12 lg:py-20">
      <div className="flex items-end justify-between mb-8 md:mb-12">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/70 font-mono mb-2">Portfolio</p>
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            My Projects
          </h2>
        </div>
        <div className="hidden sm:block h-px flex-1 mx-8 bg-gradient-to-r from-white/5 to-transparent" />
      </div>

      <ul ref={ref} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
        {/* Featured tile — spans 2 columns */}
        <motion.li
          key={featured.id}
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.35 }}
          className="md:col-span-2 xl:col-span-2"
        >
          <ProjectCard
            title={featured.title}
            description={featured.description}
            imgUrl={featured.image}
            imgPosition={featured.imgPosition}
            gitUrl={featured.gitUrl}
            previewUrl={featured.previewUrl}
            isCurrent={featured.isCurrent}
            statusLabel={featured.statusLabel}
            featured={true}
          />
        </motion.li>

        {/* Regular tiles */}
        {rest.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: (index + 1) * 0.12 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              isCurrent={project.isCurrent}
              statusLabel={project.statusLabel}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
