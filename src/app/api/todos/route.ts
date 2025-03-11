import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get("take") ?? "10");
  const skip = Number(searchParams.get("skip") ?? "0");

  if (isNaN(take)) {
    return NextResponse.json({ error: "Invalid take parameter, take must be a number" }, { status: 400 });
  }

  if (isNaN(take)) {
    return NextResponse.json({ error: "Invalid skip parameter, take must be a number" }, { status: 400 });
  }

  const toDos = await prisma.toDo.findMany({
    take: take,
    skip: skip,
  });

  return NextResponse.json(toDos);
}
