'use client'

import { ToDo } from "@prisma/client";
import { ToDoItem } from "./ToDoItem";

import * as toDosapi from '@/todos/helpers/toDos';
import { useRouter } from "next/navigation";

interface Props {
    toDos?: ToDo[];
}


export const ToDosGrid = ({ toDos = [] }: Props) => {

  const router = useRouter();

const toggleToDo = async (id: string, complete: boolean) => {
  const updatedToDo = await toDosapi.updateToDo(id, complete);
  console.log({ updatedToDo });
  router.refresh();
}

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {
            toDos.map((toDo) => (
            <ToDoItem key={toDo.id} todo={toDo} toggleToDo={toggleToDo} />
            ))
        }
    </div>
  )
}
