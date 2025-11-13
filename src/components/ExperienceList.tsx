"use client";

// icons
import { ChevronDown, ChevronUp } from "lucide-react";

// types
import { ExperienceListProps } from "@/types/experiences";

const ExperienceList = ({
  jobTitle,
  company,
  location,
  duration,
  techStack,
  open,
  onToggle,
}: ExperienceListProps) => {
  return (
    <>
      <div
        className="w-85 lg:w-full md:w-full sm:w-100 px-4 py-2 my-10 bg-zinc-300
          dark:bg-zinc-800 rounded-md"
      >
        <button
          onClick={onToggle}
          className="w-full lg:w-full md:w-full sm:w-100 flex justify-between
            items-center px-3 py-4 text-left font-bold"
        >
          <span className="text-lg truncate">
            {jobTitle} @ {company}
          </span>
          <span className="float-right">
            {open ? <ChevronUp /> : <ChevronDown />}
          </span>
        </button>
      </div>

      {/* detail */}
      <div
        className={`relative bottom-9 bg-zinc-200 dark:bg-zinc-900 text-start
          rounded-md transition-all duration-300 overflow-hidden
          ${open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"} text-sm
          lg:text-lg md:text-md`}
      >
        <div className="px-7 py-5">
          <span>{location}</span>
          <br />
          <span>{duration}</span>

          <div
            className="w-full grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4
              sm:grid-cols-2 px-2 py-3 gap-2"
          >
            {techStack.map((item, index) => (
              <span
                key={index}
                className="flex justify-center items-center w-30 px-2 py-4 my-2
                  mr-2 bg-transparent border border-zinc-900
                  dark:border-zinc-600 rounded-full text-center lg:text-center
                  md:text-center sm:text-center text-xs lg:text-sm md:text-md
                  sm:text-sm hover:cursor-pointer tracking-wider"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceList;
