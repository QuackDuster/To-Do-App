import prisma from '@/app/lib/prisma'
import { ToDo } from '@prisma/client'
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup'

interface Segments {
    params: {
        id: string
    }
}

const getToDo = async (id: string): Promise<ToDo | null > => {

    const toDo = await prisma.toDo.findFirst({ where: { id } });

    return toDo;
}

export async function GET(request: Request, { params }: Segments) {

    const toDo = await getToDo(params.id)

    if (!toDo) {
        return NextResponse.json({ error: `ToDo with ${params.id} not found` }, { status: 404 })
    }

  return NextResponse.json( toDo )
}

const putSchema = yup.object({
    complete: yup.boolean().optional(),
    description: yup.string().optional()
})

export async function PUT(request: Request, { params }: Segments) {

    const toDo = await getToDo(params.id)

    if (!toDo) {
        return NextResponse.json({ error: `ToDo with ${params.id} not found` }, { status: 404 })
    }

    try {
        const { complete, description, ...rest } = await putSchema.validate(await request.json())

        const updatedToDo = await prisma.toDo.update({
            where: { id: params.id },
            data: { complete, description }
        })

      return NextResponse.json( updatedToDo )

    } catch (error) {
        return NextResponse.json(error, { status: 400 })
    }
}