import Link from "next/link";

import { Button } from "@/components/ui/button";

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
        <Button
          className="w-full lg:w-50 md:w-full sm:w-full h-18 px-10 py-6 border
            border-zinc-950 dark:border-zinc-50 hover:bg-zinc-300/30
            dark:hover:bg-zinc-50/10 tracking-wider transition-colors uppercase
            hover:cursor-pointer"
          variant="ghost"
        >
          <Link href="/skills">More skills</Link>
        </Button>
      </div>
    </div>
  );
};

export default SkillsSection;
