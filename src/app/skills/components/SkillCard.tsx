// import Image from "next/image";
import { FC } from "react";

// types
import { SkillCardProps } from "@/types/skills";

const SkillCard: FC<SkillCardProps> = ({ icon: Icon }) => {
  return (
    <li
      className="flex flex-col items-center p-2 border border-zinc-950/50
        dark:border-zinc-50/50 rounded-lg hover:bg-zinc-300/30
        dark:hover:bg-zinc-50/10 transition duration-300"
    >
      <Icon
        className="py-4 w-20 lg-20 lg:w-20 lg:h-20 md:w-20 md:h-20 sm:w-25
          sm:h-25 fill-zinc-950 dark:fill-zinc-50"
      />
    </li>
  );
};

export default SkillCard;
