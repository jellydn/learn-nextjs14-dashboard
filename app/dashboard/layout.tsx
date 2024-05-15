import type { ReactNode } from 'react'

import SideNav from '@/app/ui/dashboard/sidenav'

export default function Layout({ children }: { readonly children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen md:overflow-hidden md:flex-row">
      <div className="flex-none w-full md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  )
}
