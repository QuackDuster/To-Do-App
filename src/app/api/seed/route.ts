import prisma from '@/app/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

    await prisma.toDo.deleteMany()

    await prisma.toDo.createMany({
        data: [
            { description: 'Buy milk', complete: true },
            { description: 'Buy eggs' },
            { description: 'Buy bread' },
            { description: 'Buy butter' },
            { description: 'Buy cheese' }
        ]
    })

  return NextResponse.json({ message: 'Seed executed' })
}