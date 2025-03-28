import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup"
import { getUserSessionServer } from "../auth/actions/auth-actions";

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

const postSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false)
})

export async function POST(request: Request) {

  const user = await getUserSessionServer()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  try {
    const { complete, description } = await postSchema.validate(await request.json())

    const toDo = await prisma.toDo.create({ data: { complete, description, userId: user.id } })

    return NextResponse.json(toDo)
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }

}

export async function DELETE(request: Request) {

  const user = await getUserSessionServer()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  try {

  await prisma.toDo.deleteMany({ where: {complete: true, userId: user.id }  })

    return NextResponse.json('Deleted all completed ToDos')
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }

}