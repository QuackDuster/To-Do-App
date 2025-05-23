"use client";

import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import * as todosApi from "@/todos/helpers/toDos";
import { useRouter } from "next/navigation";
import { addToDo, deleteCompleted } from "../actions/todo-actions";


export const NewToDo = () => {

  const router = useRouter();
  const [description, setDescription] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!description) return;

    // await addToDo(description, user.id); look how to do it with server actions

    await todosApi.createToDo(description);
    router.refresh();

    setDescription("");
  };

  // const deleteCompleted = async () => {
  //   await todosApi.deleteCompletedToDo();
  //   router.refresh();
  // };

  return (
    <form onSubmit={onSubmit} className="flex w-full">
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="w-6/12 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="What do you need to complete?"
      />

      <button
        type="submit"
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
      >
        Create
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={() => deleteCompleted()}
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
      >
        <IoTrashOutline />
        Delete completed
      </button>
    </form>
  );
};
