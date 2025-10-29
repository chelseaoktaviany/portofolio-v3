"use client";

// icons
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExperienceListProps {
  jobTitle: string;
  company: string;
  location: string;
  duration: string;
  techStack: string[];
  open: boolean;
  onToggle: () => void;
}

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
        className="w-full px-4 py-2 my-10 bg-zinc-500 dark:bg-zinc-800
          rounded-md"
      >
        <button
          onClick={onToggle}
          className="w-full flex justify-between items-center px-8 py-4
            text-left font-bold"
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
        className={`w-full relative bottom-9 bg-zinc-400 dark:bg-zinc-900
          text-start rounded-md transition-all duration-300 overflow-hidden
          ${open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"} `}
      >
        <div className="p-5 mx-7">
          <span>{location}</span>
          <br />
          <span>{duration}</span>

          <div className="grid grid-cols-5 py-3 mt-3 text-center">
            {techStack.map((item, index) => (
              <span
                key={index}
                className="px-5 py-4 my-2 mr-4 bg-zinc-300 dark:bg-zinc-800
                  border border-zinc-900 dark:border-zinc-600 rounded-4xl
                  text-sm"
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
