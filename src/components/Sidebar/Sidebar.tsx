import { CiLogout } from 'react-icons/ci';
import Image from 'next/image';
import Link from 'next/link';
import { SidebarItem } from './SidebarItem';
import { IoBasketOutline, IoCalendarOutline, IoCheckboxOutline, IoCodeWorkingOutline, IoListOutline, IoPerson, IoPersonOutline } from 'react-icons/io5';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { LogOutButton } from './LogOutButton';


const menuItems = [
  {
    icon: <IoCalendarOutline />,
    title: 'Dashboard',
    path: '/dashboard'
  },
  {
    icon: <IoCheckboxOutline />,
    title: 'Rest To-Do\'s',
    path: '/dashboard/rest-todos'
  },
  {
    icon: <IoListOutline />,
    title: 'SA To-Do\'s',
    path: '/dashboard/server-todos'
  },
  {
    icon: <IoCodeWorkingOutline />,
    title: 'Cookies',
    path: '/dashboard/cookies'
  },
  {
    icon: <IoBasketOutline />,
    title: 'Products',
    path: '/dashboard/products'
  },
  {
    icon: <IoPersonOutline />,
    title: 'Profile',
    path: '/dashboard/profile'
  }
]

export const Sidebar = async () => {

  const session = await getServerSession(authOptions);

  const userName = session?.user?.name ?? 'No name';
  const userImage = (session?.user?.image) ?
  session.user.image :
  'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg';

  const userRoles = session?.user?.roles ?? ['client'];

  return (
    <>
          <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
              <div className="-mx-6 px-6 py-4 flex justify-center items-center">
                <Link href="/dashboard" title="home">
                  <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7RDEtPGvqNOxsei62fAUnKqBZkR5tyrOilA&s" alt="tailus logo" width={100} height={100}/>
                </Link>
              </div>

              <div className="mt-8 text-center">
                <Image src={ userImage } alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" width={100} height={100}/>
                  <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{ userName }</h5>
                  <span className="hidden text-gray-400 lg:block capitalize">{userRoles.join(',')}</span>
              </div>

              <ul className="space-y-2 tracking-wide mt-8">
                {
                  menuItems.map((item) => (
                    <SidebarItem key={item.path} {...item} />
                  ))
                }
              </ul>
            </div>

            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
              <LogOutButton />
            </div>
          </aside>
    </>
  )
}
