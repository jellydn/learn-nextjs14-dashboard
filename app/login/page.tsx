import type { Metadata } from 'next'

import Link from 'next/link'

import AcmeLogo from '@/app/ui/acme-logo'
import LoginForm from '@/app/ui/login-form'

export const metadata: Metadata = {
  title: 'Login | Acme Dashboard',
}

export default function LoginPage() {
  return (
    <main className="flex justify-center items-center md:h-screen">
      <div className="flex relative flex-col p-4 mx-auto space-y-2.5 w-full md:-mt-32 max-w-[400px]">
        <div className="flex items-end p-3 w-full h-20 bg-blue-500 rounded-lg md:h-36">
          <div className="w-32 text-white md:w-36">
            <Link href="/">
              <AcmeLogo />
            </Link>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}
