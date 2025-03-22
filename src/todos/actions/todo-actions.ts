'use server';

import prisma from "@/app/lib/prisma";
import { ToDo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const sleep = async (seconds: number = 0) => {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });
}

export const toggleToDo = async (id: string, complete: boolean): Promise<ToDo> => {

    await sleep(3);

    const toDo = await prisma.toDo.findFirst({where: { id }});
    if (!toDo) {
        throw new Error('ToDo not found');
    }

    const updatedToDo = await prisma.toDo.update({
        where: { id },
        data: { complete }
    })

    revalidatePath('/dashboard/server-todos');
    return updatedToDo;
}

export const addToDo = async (description: string) => {
    try {

        const toDo = await prisma.toDo.create({ data: { description } })
        revalidatePath('/dashboard/server-todos');
        return toDo

      } catch (error) {

        return {
            message: 'Error creating ToDo',
        }

      }
}

export const deleteCompleted = async (): Promise<void> => {
    await prisma.toDo.deleteMany({ where: { complete: true } });
    revalidatePath('/dashboard/server-todos');
}