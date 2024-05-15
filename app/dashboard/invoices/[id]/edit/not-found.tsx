import { FaceFrownIcon } from '@heroicons/react/24/outline'

import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex flex-col gap-2 justify-center items-center h-full">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested invoice.</p>
      <Link
        href="/dashboard/invoices"
        className="py-2 px-4 mt-4 text-sm text-white bg-blue-500 rounded-md transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  )
}
