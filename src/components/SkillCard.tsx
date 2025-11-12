// import Image from "next/image";
import { FC } from "react";

// types
import { SkillCardProps } from "@/types/skills";

const SkillCard: FC<SkillCardProps> = ({ skillTitle, icon: Icon }) => {
  return (
    <li
      className="flex flex-col items-center px-10 py-6 border border-zinc-950/50
        dark:border-zinc-50/50 rounded-lg hover:bg-zinc-300/30
        dark:hover:bg-zinc-50/10 transition duration-300"
    >
      <Icon className="py-8 w-40 h-40 fill-zinc-950 dark:fill-zinc-50" />
      <p
        className="text-zinc-950 dark:text-zinc-50
          font-(family-name:--font-pontano-sans) lowercase"
      >
        {skillTitle}
      </p>
    </li>
  );
};

export default SkillCard;
