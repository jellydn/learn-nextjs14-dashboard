import { EyeIcon } from '@heroicons/react/24/outline'

import Image from 'next/image'
import Link from 'next/link'

import type { FormattedCustomersTable } from '@/app/lib/definitions'
import { lusitana } from '@/app/ui/fonts'
import Search from '@/app/ui/search'

export default async function CustomersTable({
  customers,
}: {
  customers: FormattedCustomersTable[]
}) {
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />
      <div className="flow-root mt-6">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden p-2 bg-gray-50 rounded-md md:pt-0">
              <div className="md:hidden">
                {customers?.map((customer) => (
                  <div
                    key={customer.id}
                    className="p-4 mb-2 w-full bg-white rounded-md"
                  >
                    <div className="flex justify-between items-center pb-4 border-b">
                      <div>
                        <Link href={`/dashboard/customers/${customer.id}`}>
                          <div className="flex items-center mb-2">
                            <div className="flex gap-3 items-center">
                              <Image
                                src={customer.image_url}
                                className="rounded-full"
                                alt={`${customer.name}'s profile picture`}
                                width={28}
                                height={28}
                              />
                              <p>{customer.name}</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500">
                            {customer.email}
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-5 w-full border-b">
                      <div className="flex flex-col w-1/2">
                        <p className="text-xs">Pending</p>
                        <p className="font-medium">{customer.total_pending}</p>
                      </div>
                      <div className="flex flex-col w-1/2">
                        <p className="text-xs">Paid</p>
                        <p className="font-medium">{customer.total_paid}</p>
                      </div>
                    </div>
                    <div className="pt-4 text-sm">
                      <p>{customer.total_invoices} invoices</p>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full text-gray-900 rounded-md md:table">
                <thead className="text-sm font-normal text-left bg-gray-50 rounded-md">
                  <tr>
                    <th scope="col" className="py-5 px-4 font-medium sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="py-5 px-3 font-medium">
                      Email
                    </th>
                    <th scope="col" className="py-5 px-3 font-medium">
                      Total Invoices
                    </th>
                    <th scope="col" className="py-5 px-3 font-medium">
                      Total Pending
                    </th>
                    <th scope="col" className="py-5 px-4 font-medium">
                      Total Paid
                    </th>
                    <th scope="col" className="py-5 px-4 font-medium">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="text-gray-900 divide-y divide-gray-200">
                  {customers.map((customer) => (
                    <tr key={customer.id} className="group">
                      <td className="py-5 pr-3 pl-4 text-sm text-black whitespace-nowrap bg-white sm:pl-6 group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        <div className="flex gap-3 items-center">
                          <Image
                            src={customer.image_url}
                            className="rounded-full"
                            alt={`${customer.name}'s profile picture`}
                            width={28}
                            height={28}
                          />
                          <p>{customer.name}</p>
                        </div>
                      </td>
                      <td className="py-5 px-4 text-sm whitespace-nowrap bg-white">
                        {customer.email}
                      </td>
                      <td className="py-5 px-4 text-sm whitespace-nowrap bg-white">
                        {customer.total_invoices}
                      </td>
                      <td className="py-5 px-4 text-sm whitespace-nowrap bg-white">
                        {customer.total_pending}
                      </td>
                      <td className="py-5 px-4 text-sm whitespace-nowrap bg-white">
                        {customer.total_paid}
                      </td>
                      <td className="py-5 px-4 text-sm whitespace-nowrap bg-white group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        <Link href={`/dashboard/customers/${customer.id}`}>
                          <span className="sr-only">View</span>
                          <EyeIcon className="w-5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
