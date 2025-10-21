import { prisma } from "../../db/prisma";

export default async function SkillsPage() {
  const skills = await prisma.skills.findMany({ orderBy: { order: "asc" } });

  return (
    <section>
      <h1 className="text-2xl font-semibold-mb-4">Skills</h1>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill.id}>{skill.skillTitle}</li>
        ))}
      </ul>
    </section>
  );
}
