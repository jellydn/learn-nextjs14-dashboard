import { ArrowPathIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

import Image from 'next/image'

import { fetchLatestInvoices } from '@/app/lib/data'
import { lusitana } from '@/app/ui/fonts'

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices()

  return (
    <div className="flex flex-col w-full md:col-span-4 lg:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Invoices
      </h2>
      <div className="flex flex-col justify-between p-4 bg-gray-50 rounded-xl grow">
        <div className="px-6 bg-white">
          {latestInvoices.map((invoice, i) => (
            <div
              key={invoice.id}
              className={clsx(
                'flex flex-row items-center justify-between py-4',
                {
                  'border-t': i !== 0,
                },
              )}
            >
              <div className="flex items-center">
                <Image
                  src={invoice.image_url}
                  alt={`${invoice.name}'s profile picture`}
                  className="mr-4 rounded-full"
                  width={32}
                  height={32}
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold md:text-base truncate">
                    {invoice.name}
                  </p>
                  <p className="hidden text-sm text-gray-500 sm:block">
                    {invoice.email}
                  </p>
                </div>
              </div>
              <p
                className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
              >
                {invoice.amount}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pt-6 pb-2">
          <ArrowPathIcon className="w-5 h-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500">Updated just now</h3>
        </div>
      </div>
    </div>
  )
}
