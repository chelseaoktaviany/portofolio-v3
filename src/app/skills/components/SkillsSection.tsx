import Link from "next/link";

// components
import Btn from "@/components/button";
import SkillCard from "./SkillCard";

// data
import { skillLists } from "@/data/SkillData";

const SkillsSection = () => {
  return (
    <div className="flex flex-col justify-center lg:items-center mt-5">
      <h1
        className="text-3xl lg:text-6xl md:text-4xl sm:text-4xl text-center
          md:text-center sm:text-center font-bold
          font-(family-name:--font-archivo-black) py-10 mb-10"
      >
        Tools & Skills
      </h1>
      {/* skills list */}
      <div
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-4
          md:grid-cols-3 sm:grid-cols-2 gap-10"
      >
        {skillLists.map((item) => (
          <SkillCard
            key={item.id}
            skillTitle={item.skillTitle}
            icon={item.icon}
          />
        ))}
      </div>

      {/* more skills button */}
      <div className="py-8 my-10">
        <Btn variant="ghost">
          <Link href="#">More skills</Link>
        </Btn>
      </div>
    </div>
  );
};

export default SkillsSection;
