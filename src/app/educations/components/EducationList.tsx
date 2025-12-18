"use client";

// icons
import { ChevronDown, ChevronUp } from "lucide-react";

// types
import { EducationListProps } from "@/types/educations";

const EducationList = ({
  school,
  major,
  degree,
  duration,
  gpa,
  open,
  onToggle,
}: EducationListProps) => {
  return (
    <>
      <div
        className="w-85 lg:w-full md:w-full sm:w-100 px-4 py-2 my-10 bg-zinc-300
          dark:bg-zinc-800 rounded-md"
      >
        <button
          onClick={onToggle}
          className="w-full lg:w-200 md:w-full sm:w-100 flex justify-between
            items-center px-3 py-4 text-left font-bold"
        >
          <span className="text-lg truncate">
            {school} {duration}
          </span>
          <span className="float-right">
            {open ? <ChevronUp /> : <ChevronDown />}
          </span>
        </button>
      </div>

      {/* detail */}
      <div
        className={`w-full relative bottom-9 bg-zinc-200 dark:bg-zinc-900
          text-start rounded-md transition-all duration-300 overflow-hidden
          ${open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"} text-sm
          lg:text-lg md:text-md`}
      >
        <div className="px-7 py-5">
          <span>
            {degree}, {major}
          </span>
          <br />
          {gpa === "" ? <span></span> : <span>GPA: {gpa}</span>}
        </div>
      </div>
    </>
  );
};

export default EducationList;
