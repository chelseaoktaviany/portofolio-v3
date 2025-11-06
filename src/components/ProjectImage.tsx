"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// date format
import moment from "moment";

// types
import { ProjectImageProps } from "@/types/projects";

// components
import { Button } from "@/components/ui/button";

const ProjectModal = ({
  title,
  projectDescription,
  projectImage,
  projectLink,
  demoLink,
  techStack,
  startDate,
  endDate,
}: ProjectImageProps) => {
  const monthYearStart = moment(startDate).format("MMMM YYYY");
  const monthYearEnd = moment(endDate).format("MMMM YYYY");

  let isPresent = false;
  return (
    <div
      className="flex flex-col text-zinc-50 rounded-2xl overflow-hidden
        shadow-md hover:shadow-lg transition-all dark:text-zinc-50 w-xl px-2
        py-5"
    >
      <div className="relative w-full h-52">
        <Image
          fill
          className="grayscale brightness-60 object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          src={projectImage || `https://placehold.co/600x400.png`}
          alt={title}
        />
      </div>

      <div className="flex flex-col flex-grow px-6 py-4 space-y-3">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="float-right text-zinc-50/40 italic">
            {monthYearStart} - {monthYearEnd}
          </span>
        </div>
        <p className="text-sm text-zinc-900 dark:text-zinc-400 leading-relaxed">
          {projectDescription}
        </p>
        {/* tech stack tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.map((item, index) => (
            <span
              key={index}
              className="px-5 py-4 my-2 bg-transparent border border-zinc-900
                dark:border-zinc-600 text-zinc-950 dark:text-zinc-50 text-sm
                rounded-4xl"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 pt-5">
          {demoLink && (
            <Button
              asChild
              className="px-6 py-7 border border-zinc-950 dark:border-zinc-50
                hover:bg-zinc-800 dark:hover:bg-zinc-50/5
                dark:hover:text-zinc-50 tracking-wider transition-colors
                text-zinc-50 text-center uppercase"
              variant="secondary"
            >
              <Link href={demoLink}>demo link</Link>
            </Button>
          )}

          {projectLink && (
            <Button
              asChild
              className="px-6 py-7 border border-zinc-950 dark:border-zinc-50
                hover:bg-zinc-950/5 dark:hover:bg-zinc-50/5 tracking-wider
                transition-colors text-center uppercase"
              variant="outline"
            >
              <Link href={projectLink}>project link</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

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
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="flex flex-col overflow-hidden w-xl px-2 py-3">
      <div className="p-0">
        <div
          className="relative w-full h-100 hover:cursor-pointer"
          onClick={() => {
            console.log("toggled");
            setIsOpened(true);
          }}
        >
          <Image
            fill
            className="grayscale hover:filter-none brightness-100 object-cover
              transition-colors rounded-sm"
            sizes="(max-width: 768px) 100vw, 33vw"
            src={projectImage || `https://placehold.co/600x400.png`}
            alt={title}
          />
        </div>
      </div>
      {isOpened ? (
        <ProjectModal
          title={title}
          projectDescription={projectDescription}
          projectLink={projectLink}
          demoLink={demoLink}
          techStack={techStack}
          projectImage={projectImage}
          startDate={startDate}
          endDate={endDate}
        />
      ) : null}
    </div>
  );
};

export default ProjectImage;
