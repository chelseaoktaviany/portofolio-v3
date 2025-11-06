import Link from "next/link";

import { Button } from "@/components/ui/button";

import SkillCard from "@/components/SkillCard";

// data
import { skillLists } from "@/data/SkillData";

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <h1
        className="text-6xl text-center md:text-center sm:text-center font-bold
          font-(family-name:--font-archivo-black) py-10 mb-10"
      >
        Tools & Skills
      </h1>
      {/* skills list */}
      <div className="grid md:grid-cols-4 gap-10 max-w-6xl w-full">
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
          className="w-50 h-18 px-10 py-6 border border-zinc-950
            dark:border-zinc-50 hover:bg-zinc-950/30 dark:hover:bg-zinc-50/30
            tracking-wider transition-colors uppercase hover:cursor-pointer"
          variant="ghost"
        >
          <Link href="#">More skills</Link>
        </Button>
      </div>
    </div>
  );
};

export default Skills;
