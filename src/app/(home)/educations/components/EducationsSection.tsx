"use client";

import { useState } from "react";

import { educationsData } from "@/data/EducationData";

import EducationList from "./EducationList";

const EducationsSection = () => {
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
        Educations
      </h1>
      {/* experience list */}
      {educationsData.map((item, index) => (
        <EducationList
          key={item.id}
          school={item.school}
          major={item.major}
          degree={item.degree}
          duration={item.duration}
          gpa={item.gpa}
          open={isOpenIndex === index}
          onToggle={() => setIsOpenIndex(isOpenIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default EducationsSection;
