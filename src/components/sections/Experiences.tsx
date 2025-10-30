"use client";

import { useState } from "react";
import ExperienceList from "@/components/ExperienceList";

//  data
import { experiencesData } from "@/data/ExperienceData";

const Experiences = () => {
  const [isOpenIndex, setIsOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="text-6xl text-center md:text-center sm:text-center font-bold
          font-(family-name:--font-archivo-black) py-10 mb-10"
      >
        Work Experiences
      </div>
      {/* experience list */}
      {experiencesData.map((item, index) => (
        <ExperienceList
          key={item.id}
          jobTitle={item.jobTitle}
          company={item.company}
          location={item.location}
          duration={item.duration}
          techStack={item.techStack}
          open={isOpenIndex === index}
          onToggle={() => setIsOpenIndex(isOpenIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default Experiences;
