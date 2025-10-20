import { NextResponse } from "next/server";

import prisma from "../../../../prisma/client";

export async function GET() {
  // get all users
  const users = await prisma.user.findMany();

  // get response
  return NextResponse.json(
    {
      message: "Users fetched successfully",
      data: users,
    },
    { status: 200 },
  );
}
