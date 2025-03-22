'use client'
import { startTransition, useOptimistic } from "react";
import { ToDo } from "@prisma/client";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";
import { boolean } from "yup";

interface Props {
  todo: ToDo;
  // Actions to call
  toggleToDo: (id: string, complete: boolean) => Promise<ToDo|void>;
}

export const ToDoItem = ({ todo, toggleToDo }: Props) => {

  const [ toDoOptimistic, toggleToDoOptimistic ] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({ ...state, complete: newCompleteValue })
  );

  const onToggleToDo = async () => {

    try {

      startTransition(() => toggleToDoOptimistic(!toDoOptimistic.complete));

      await toggleToDo(toDoOptimistic.id, !toDoOptimistic.complete);

    } catch (error) {

      startTransition(() => toggleToDoOptimistic(!toDoOptimistic.complete));
    }

  }

  return (
    <div className={toDoOptimistic.complete ? "todoDone" : "todoPending"}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
        // onClick={() => toggleToDo(toDoOptimistic.id, !toDoOptimistic.complete)}
        onClick={ onToggleToDo }
        className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${toDoOptimistic.complete ? "bg-blue-100" : "bg-red-100"}`}>
        {
          toDoOptimistic.complete ? (<IoCheckboxOutline size={30} />) : (<IoSquareOutline size={30} />)
        }
        </div>
        <div className="text-center sm:text-left">
            {toDoOptimistic.description}
        </div>
      </div>
    </div>
  );
};
