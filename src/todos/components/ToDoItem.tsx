'use client'
import { ToDo } from "@prisma/client";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

interface Props {
  todo: ToDo;
  // Actions to call
  toggleToDo: (id: string, complete: boolean) => Promise<ToDo|void>;
}

export const ToDoItem = ({ todo, toggleToDo }: Props) => {
  return (
    <div className={todo.complete ? "todoDone" : "todoPending"}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div onClick={() => toggleToDo(todo.id, !todo.complete)}
        className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${todo.complete ? "bg-blue-100" : "bg-red-100"}`}>
        {
          todo.complete ? (<IoCheckboxOutline size={30} />) : (<IoSquareOutline size={30} />)
        }
        </div>
        <div className="text-center sm:text-left">
            {todo.description}
        </div>
      </div>
    </div>
  );
};
