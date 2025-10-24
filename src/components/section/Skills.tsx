import { prisma } from "@/db/prisma";

import SkillCard from "@/components/SkillCard";

const Skills = async () => {
  const skills = await prisma.skills.findMany({ orderBy: { id: "asc" } });

  return (
    <div className="py-2 text-center md:text-center sm:text-center">
      <div className="text-center">
        <h1
          className="text-[70px] font-bold my-8
            font-(family-name:--font-archivo-black)"
        >
          What I do
        </h1>
      </div>
      {/* skills list */}
      <div className="grid md:grid-cols-4 gap-10 max-w-6xl w-full"></div>
    </div>
  );
};

export default Skills;
