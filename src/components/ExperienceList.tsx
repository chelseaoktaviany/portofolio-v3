"use client";

import { useState } from "react";

const ExperienceList = ({
  jobTitle,
  company,
  location,
  duration,
  techStack,
}: {
  jobTitle: string;
  company: string;
  location: string;
  duration: string;
  techStack: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
  };

  return (
    <div
      className="w-3xl px-10 py-5 my-10 bg-[#282828] rounded-md"
      onClick={toggleDetails}
    >
      <div className="my-5 text-start font-bold">
        <h2 className="text-lg truncate">
          {jobTitle} @ {company}
        </h2>
      </div>
      {/* detail */}
      <div className={`mt-2 py-2 text-start ${isOpen ? "" : "hidden"}`}>
        <div className="italic">
          <p>{location}</p>
          <p>{duration}</p>
        </div>
        <div className="flex flex-wrap py-3 mt-3">
          {techStack.map((item, index) => (
            <span
              key={index}
              className="px-5 py-4 my-2 mr-4 bg-[#1e1e1e] border
                border-[#646464] rounded-4xl text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceList;
