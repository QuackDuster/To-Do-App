import prisma from "@/app/lib/prisma";
import { NewToDo, ToDosGrid } from "@/todos";

export const metadata = {
 title: 'To-Dos List',
 description: 'SEO Title',
};

export default async function RestTodosPage() {

  const ToDos = await prisma.toDo.findMany({ orderBy: { id: 'asc' } });
  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5" >
      <NewToDo />
      </div>

      <ToDosGrid toDos={ToDos} />
    </div>
  );
}