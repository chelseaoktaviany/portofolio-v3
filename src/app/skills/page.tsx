import SkillCard from "./components/SkillCard";

import { skillLists } from "@/data/SkillData";

const SkillsPage = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Skills</h1>
      <ul className="space-y-2">
        {skillLists.map((item) => (
          <SkillCard
            key={item.id}
            skillTitle={item.skillTitle}
            icon={item.icon}
          />
        ))}
      </ul>
    </section>
  );
};

export default SkillsPage;
