// import Image from "next/image";
import { FC } from "react";

interface SkillCardProps {
  skillTitle: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const SkillCard: FC<SkillCardProps> = ({ skillTitle, icon: Icon }) => {
  return (
    <li
      className="flex flex-col items-center px-10 py-6 border
        border-[#ebebeb]/50 rounded-lg shadow-md hover:shadow-lg
        hover:bg-[#ebebeb]/30 transition duration-300"
    >
      <Icon className="py-8 w-40 h-40 fill-[#ebebeb]" />
      <p
        className="text-[#ebebeb] font(family-name:--font-pontano-sans)
          lowercase"
      >
        {skillTitle}
      </p>
    </li>
  );
};

export default SkillCard;
