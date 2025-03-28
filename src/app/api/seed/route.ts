import prisma from '@/app/lib/prisma'
import bcrypt from 'bcryptjs'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

    await prisma.toDo.deleteMany()
    await prisma.user.deleteMany()

    const user = await prisma.user.create({
        data: {
            email: 'test1@google.com',
            password: bcrypt.hashSync('123456'),
            roles: ['admin', 'client', 'super-user'],
            toDos: {
                create: [
                    { description: 'Buy milk', complete: true },
                    { description: 'Buy eggs' },
                    { description: 'Buy bread' },
                    { description: 'Buy butter' },
                    { description: 'Buy cheese' }
                ]
            }
        }
    });

    // await prisma.toDo.createMany({
    //     data: [
    //         { description: 'Buy milk', complete: true },
    //         { description: 'Buy eggs' },
    //         { description: 'Buy bread' },
    //         { description: 'Buy butter' },
    //         { description: 'Buy cheese' }
    //     ]
    // })

  return NextResponse.json({ message: 'Seed executed' })
}