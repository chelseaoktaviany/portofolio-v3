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
      <Icon
        className="py-8 w-20 lg-20 lg:w-40 lg:h-40 md:w-30 md:h-30 sm:w-25
          sm:h-25 fill-zinc-950 dark:fill-zinc-50"
      />
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
