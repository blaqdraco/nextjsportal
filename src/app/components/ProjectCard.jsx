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
}) => {
  const hasLinks = Boolean(gitUrl || previewUrl);

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden bg-[#101318]"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, 0.08), rgba(10, 10, 10, 0.28)), url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center top" }}
      >
        {hasLinks && (
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
            {gitUrl && (
              <Link
                href={gitUrl}
                className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              >
                <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
              </Link>
            )}
            {previewUrl && (
              <Link
                href={previewUrl}
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              >
                <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
              </Link>
            )}
          </div>
        )}
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <div className="flex items-center justify-between gap-3 mb-2">
          <h5 className="text-xl font-semibold">{title}</h5>
          {isCurrent && (
            <span className="inline-flex items-center gap-2 text-xs font-medium text-[#B7F7C4] whitespace-nowrap">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
              {statusLabel}
            </span>
          )}
        </div>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
