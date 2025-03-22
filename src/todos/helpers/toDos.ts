import { ToDo } from "@prisma/client";

// const sleep = (seconds: number = 0):Promise<boolean> => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(true)
//       }, seconds * 1000 );
//     })
// }

export const updateToDo = async (id: string, complete: boolean ): Promise<ToDo> => {
    const body = { complete }

    const dbToDo = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    }).then(res => res.json())

    console.log({dbToDo})

    return dbToDo;
}

export const createToDo = async (description: string ): Promise<ToDo> => {
    const body = { description }

    const dbToDo = await fetch(`/api/todos/`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    }).then(res => res.json())

    console.log({dbToDo})

    return dbToDo;
}

export const deleteCompletedToDo = async (): Promise<boolean> => {

    await fetch(`/api/todos`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    }).then(res => res.json())


    return true;
}