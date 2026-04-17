"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Tanzania Mineral Sector Management Information System",
    description:
      "Private government project. System details and screenshots are not publicly available due to security requirements.",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web", "Private"],
    gitUrl: null,
    previewUrl: null,
  },
  {
    id: 2,
    title: "Ministry of Minerals Improved Website",
    description:
      "Official ministry website project for the Tanzania Ministry of Minerals, currently under construction for improved public information and service access.",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web", "Government"],
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
    tag: ["All", "Web", "Private"],
    gitUrl: null,
    previewUrl: null,
  },
  {
    id: 4,
    title: "Tanzania Mining Conference Website",
    description:
      "Private conference management system for the Tanzania Mining Conference. Public-facing details are intentionally limited.",
    image: "/images/projects/4.jpg",
    tag: ["All", "Web", "Private"],
    gitUrl: null,
    previewUrl: null,
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Private"
          isSelected={tag === "Private"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
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
