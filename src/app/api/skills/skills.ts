import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    const skills = await prisma.skills.findMany({ orderBy: { id: "asc" } });

    return res.status(200).json(skills);
  }
  if (req.method === "POST") {
    const createdData = await prisma.skills.create({ data: req.body });

    return res.status(201).json(createdData);
  }

  return res.status(405).end(); // Method Not Allowed
}
