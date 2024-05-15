import { PowerIcon } from '@heroicons/react/24/outline'

import Link from 'next/link'

import AcmeLogo from '@/app/ui/acme-logo'
import NavLinks from '@/app/ui/dashboard/nav-links'
import { signOut } from '@/auth'

export default function SideNav() {
  return (
    <div className="flex flex-col py-4 px-3 h-full md:px-2">
      <Link
        className="flex justify-start items-end p-4 mb-2 h-20 bg-blue-600 rounded-md md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex flex-row justify-between space-x-2 md:flex-col md:space-y-2 md:space-x-0 grow">
        <NavLinks />
        <div className="hidden w-full h-auto bg-gray-50 rounded-md md:block grow" />
        <form
          action={async () => {
            'use server'
            await signOut()
          }}
        >
          <button
            type="submit"
            className="flex gap-2 justify-center items-center p-3 w-full text-sm font-medium bg-gray-50 rounded-md md:flex-none md:justify-start md:p-2 md:px-3 hover:text-blue-600 h-[48px] grow hover:bg-sky-100"
          >
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  )
}
