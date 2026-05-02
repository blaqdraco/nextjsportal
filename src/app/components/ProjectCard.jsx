import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  isCurrent = false,
  statusLabel = "Current Project",
  featured = false,
  imgPosition,
}) => {
  const hasLinks = Boolean(gitUrl || previewUrl);
  const imgHeight = featured
    ? "h-60 md:h-80"
    : "h-48 md:h-60";

  return (
    <div
      className="corner-frame group flex flex-col h-full rounded-2xl overflow-hidden border border-white/[0.07] bg-[#0d1b2a] shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-cyan-400/20 hover:shadow-[0_16px_48px_rgba(34,211,238,0.1)]"
      style={{ "--frame-accent": featured ? "34 211 238" : "96 165 250" }}
    >
      <span className="corner-frame__corner corner-frame__corner--tl" aria-hidden="true" />
      <span className="corner-frame__corner corner-frame__corner--tr" aria-hidden="true" />
      <span className="corner-frame__corner corner-frame__corner--bl" aria-hidden="true" />
      <span className="corner-frame__corner corner-frame__corner--br" aria-hidden="true" />

      {/* Image */}
      <div
        className={`${imgHeight} relative overflow-hidden bg-[#060f1c]`}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(6,15,28,0.05), rgba(6,15,28,0.4)), url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: imgPosition ?? "center top",
        }}
      >
        {/* Hover overlay with buttons */}
        {hasLinks && (
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-[#060f1c]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
            {gitUrl && (
              <Link
                href={gitUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
              >
                <CodeBracketIcon className="h-4 w-4" />
                GitHub
              </Link>
            )}
            {previewUrl && (
              <Link
                href={previewUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
              >
                <EyeIcon className="h-4 w-4" />
                Live Demo
              </Link>
            )}
          </div>
        )}

        {/* Featured ribbon */}
        {featured && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-[#0a192f]/80 backdrop-blur-sm px-3 py-1 text-xs font-mono text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h5 className="text-base font-semibold text-white leading-snug">{title}</h5>
          {isCurrent && (
            <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-2.5 py-1 text-xs font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {statusLabel}
            </span>
          )}
        </div>
        <p className="text-[#8892a4] text-sm leading-relaxed flex-1">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
