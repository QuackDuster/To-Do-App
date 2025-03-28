export const dynamic = 'force-dynamic'
export const revalidate = 0;

import { getUserSessionServer } from "@/app/api/auth/actions/auth-actions";
import prisma from "@/app/lib/prisma";
import { NewToDo, ToDosGrid } from "@/todos";
import { redirect } from "next/navigation";

export const metadata = {
 title: 'Server Actions ToDos List',
 description: 'SEO Title',
};

export default async function ServerTodosPage() {

  const user = await getUserSessionServer();

  if (!user) redirect('/api/auth/signin');

  const ToDos = await prisma.toDo.findMany({
    where: { userId: user.id },
    orderBy: { id: 'asc'
    } });

  return (
    <>
      <div className="grid gap-2">
        <span className="text-3xl">Server Actions</span>
        <div className="w-full mb-5" >
          <NewToDo />
        </div>
      </div>

      <ToDosGrid toDos={ToDos} />
    </>
  );
}