import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../db/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    const items = await prisma.educations.findMany({
      orderBy: { startDate: "desc" },
    });

    return res.status(200).json(items);
  }
  if (req.method === "POST") {
    const created = await prisma.educations.create({ data: req.body });

    return res.status(201).json(created);
  }

  return res.status(405).end(); // Method Not Allowed
}
