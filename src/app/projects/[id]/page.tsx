import { prisma } from "../../../db/prisma";

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const project = await prisma.projects.findUnique({ where: { id } });
  if (!project) return <div>Project not found</div>;

  return (
    <div>
      <h1>{project.title}</h1>
    </div>
  );
}
