import SkillCard from "./components/SkillCard";

import { skillLists } from "@/data/SkillData";

const SkillsPage = () => {
  return (
    <section className="w-full px-5 py-30">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-semibold my-2 py-6">Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          {skillLists.map((item) => (
            <SkillCard
              key={item.id}
              skillTitle={item.skillTitle}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
