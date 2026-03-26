"use client";

import { useState } from "react";

// components
import Btn from "@/components/button";
import SkillCard from "./SkillCard";

// data
import { skillLists } from "@/data/SkillData";

const SkillsSection = () => {
  const [visible, setVisible] = useState(12);

  const setMoreSkills = () => {
    setVisible((prev) => prev + 6); // show 4 more
  };

  return (
    <div className="flex flex-col justify-center items-center mt-18">
      <h1
        className="text-3xl lg:text-6xl md:text-4xl sm:text-4xl text-center
          md:text-center sm:text-center font-bold
          font-(family-name:--font-archivo-black) py-10 my-10"
      >
        Tools & Skills
      </h1>
      {/* skills list */}
      <div
        className="max-w-6xl w-full grid grid-cols-1 2xl:grid-cols-6 xl:
          lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-10"
      >
        {skillLists.slice(0, visible).map((item) => (
          <SkillCard key={item.id} icon={item.icon} />
        ))}
      </div>

      {/* more skills button */}
      <div className="py-8 my-10">
        {visible < skillLists.length && (
          <Btn variant="ghost" onClick={setMoreSkills}>
            More skills
          </Btn>
        )}
      </div>
    </div>
  );
};

export default SkillsSection;
