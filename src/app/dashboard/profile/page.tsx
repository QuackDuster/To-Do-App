'use client';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function ProfilePage() {

    const { data: session } = useSession()

    useEffect(() => {
        console.log('Client side')
    }, [])


  return (
    <div>
      <h1>Profile Page</h1>
      <hr/>
        <div className='flex flex-col'>
            <span>Name: {session?.user?.name ?? 'No name'}</span>
            <span>E-mail: {session?.user?.email ?? 'No email'}</span>
            <span>Image: {session?.user?.image ?? 'No image'}</span>
            <span>UUID: {session?.user?.id ?? 'No UUID'}</span>
            <span>Roles: {session?.user?.roles?.join(',') ?? ['no-roles']}</span>
        </div>
    </div>
  );
}