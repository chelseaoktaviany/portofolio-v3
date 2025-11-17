"use client";

import { useState } from "react";
import ExperienceList from "@/components/ExperienceList";

//  data
import { experiencesData } from "@/data/ExperienceData";

const Experiences = () => {
  const [isOpenIndex, setIsOpenIndex] = useState<number | null>(0);

  return (
    <div
      className="flex flex-col justify-center lg:justify-center
        md:justify-center sm:justify-center lg:items-center"
    >
      <h1
        className="text-3xl lg:text-6xl md:text-5xl sm:text-4xl text-center
          md:text-center sm:text-center font-bold
          font-(family-name:--font-archivo-black) py-6"
      >
        Work Experiences
      </h1>
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
