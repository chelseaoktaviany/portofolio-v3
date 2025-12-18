"use client";

import { useState } from "react";
import Image from "next/image";

// types
import { ProjectImageProps } from "@/types/projects";

// components
import ProjectModal from "./ProjectModal";

const ProjectImage = ({
  title,
  projectDescription,
  projectImage,
  projectLink,
  demoLink,
  techStack,
  startDate,
  endDate,
}: ProjectImageProps) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="flex flex-col overflow-hidden justify-center">
      <div onClick={() => setIsShown(true)}>
        <div
          className="relative w-full lg:w-xl md:w-140 sm:w-120 h-100
            hover:cursor-pointer"
        >
          <Image
            fill
            className="grayscale hover:filter-none brightness-60 object-cover
              transition-all rounded-sm"
            sizes="(max-width: 768px) 100vw, 33vw"
            src={projectImage || `/images/placeholder600x400.png`}
            alt={title}
          />
        </div>
      </div>
      <ProjectModal
        open={isShown}
        onOpenChange={setIsShown}
        title={title}
        projectDescription={projectDescription}
        projectLink={projectLink}
        demoLink={demoLink}
        techStack={techStack}
        projectImage={projectImage}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
};

export default ProjectImage;
