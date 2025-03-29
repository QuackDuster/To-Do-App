'use client';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import Image from 'next/image';

export default function ProfilePage() {

    const { data: session } = useSession()

    useEffect(() => {
        console.log('Client side')
    }, [])

    const userImage = (session?.user?.image) ?
    session.user.image :
    'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg';

  return (

<>
<div className="md:col-span-2 lg:col-span-1">
  <div className="h-full py-8 px-6  rounded-xl border border-gray-200 bg-white">
    <div className="flex flex-col">

      <h5 className="text-xl text-gray-600 text-center">
        Profile Page
      </h5>
      <div className="mt-2 items-center flex flex-col justify-center gap-4">
            <Image src={ userImage } alt='' className="text-md font-bold text-gray-700 rounded-xl" width={100} height={100}/>
            <span className="text-xl text-gray-700">Name: </span>
            <span className="text-md font-bold text-gray-700">{session?.user?.name ?? 'No name'}</span>
            <span className="text-xl text-gray-700">Email: </span>
            <span className="text-md font-bold text-gray-700">{session?.user?.email ?? 'No email'}</span>
            <span className="text-xl text-gray-700">Roles: </span>
            <span className="text-md font-bold text-gray-700">{session?.user?.roles?.join(', ') ?? 'No roles'}</span>
      </div>

    </div>
  </div>
</div>
</>

  );
}