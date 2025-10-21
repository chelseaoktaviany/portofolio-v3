import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const id = String(req.query.id);

  if (req.method === "GET") {
    const project = await prisma.projects.findUnique({ where: { id } });

    return res.status(200).json(project);
  }

  if (req.method === "PUT") {
    const updatedData = await prisma.projects.update({
      where: { id },
      data: req.body,
    });

    return res.status(200).json(updatedData);
  }
  if (req.method === "DELETE") {
    await prisma.projects.delete({ where: { id } });

    return res.status(204).end();
  }

  return res.status(405).end(); // Method Not Allowed
}
