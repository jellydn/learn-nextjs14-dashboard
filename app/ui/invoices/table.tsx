import Image from 'next/image'

import { fetchFilteredInvoices } from '@/app/lib/data'
import { formatCurrency, formatDateToLocal } from '@/app/lib/utils'
import { DeleteInvoice, UpdateInvoice } from '@/app/ui/invoices/buttons'
import InvoiceStatus from '@/app/ui/invoices/status'

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string
  currentPage: number
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage)

  return (
    <div className="flow-root mt-6">
      <div className="inline-block min-w-full align-middle">
        <div className="p-2 bg-gray-50 rounded-lg md:pt-0">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="p-4 mb-2 w-full bg-white rounded-md"
              >
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <div className="flex items-center mb-2">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex justify-between items-center pt-4 w-full">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="text-sm font-normal text-left rounded-lg">
              <tr>
                <th scope="col" className="py-5 px-4 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="py-5 px-3 font-medium">
                  Email
                </th>
                <th scope="col" className="py-5 px-3 font-medium">
                  Amount
                </th>
                <th scope="col" className="py-5 px-3 font-medium">
                  Date
                </th>
                <th scope="col" className="py-5 px-3 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pr-3 pl-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="py-3 pr-3 pl-6 whitespace-nowrap">
                    <div className="flex gap-3 items-center">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="py-3 px-3 whitespace-nowrap">
                    {invoice.email}
                  </td>
                  <td className="py-3 px-3 whitespace-nowrap">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="py-3 px-3 whitespace-nowrap">
                    {formatDateToLocal(invoice.date)}
                  </td>
                  <td className="py-3 px-3 whitespace-nowrap">
                    <InvoiceStatus status={invoice.status} />
                  </td>
                  <td className="py-3 pr-3 pl-6 whitespace-nowrap">
                    <div className="flex gap-3 justify-end">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
