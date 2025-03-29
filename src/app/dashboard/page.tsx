import { WidgetItem } from "@/components";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


export default async function DashboardPage() {

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <>
      <div className="grid gap-6 grid-cols-1">
        <WidgetItem title="User connected SS" >
          <div className="flex flex-col justify-center items-center text-center">
            <span>Welcome back!</span>

            <div className="flex flex-col gap-2 mt-2">
              <span className="text-xl font-medium text-gray-700">{session.user?.name ?? 'No Name'}</span>
            </div>
          </div>
        </WidgetItem>
      </div>
    </>
  );
}
