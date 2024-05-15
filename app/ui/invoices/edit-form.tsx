'use client'

import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'

import Link from 'next/link'

import { updateInvoice } from '@/app/lib/actions'
import type { CustomerField, InvoiceForm } from '@/app/lib/definitions'
import { Button } from '@/app/ui/button'

/* eslint-disable react/jsx-no-bind */

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  readonly invoice: InvoiceForm
  readonly customers: CustomerField[]
}) {
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id)

  return (
    <form action={updateInvoiceWithId}>
      <div className="p-4 bg-gray-50 rounded-md md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="block mb-2 text-sm font-medium">
            Choose customer
          </label>
          <div className="relative">
            <select
              required={true}
              id="customer"
              name="customerId"
              className="block py-2 pl-10 w-full text-sm rounded-md border border-gray-200 peer outline-2 placeholder:text-gray-500"
              defaultValue={invoice.customer_id}
            >
              <option disabled={true} value="">
                Select a customer
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="absolute left-3 top-1/2 text-gray-500 -translate-y-1/2 pointer-events-none h-[18px] w-[18px]" />
          </div>
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="block mb-2 text-sm font-medium">
            Choose an amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                required={true}
                id="amount"
                name="amount"
                type="number"
                defaultValue={invoice.amount}
                placeholder="Enter USD amount"
                className="block py-2 pl-10 w-full text-sm rounded-md border border-gray-200 peer outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="absolute left-3 top-1/2 text-gray-500 -translate-y-1/2 pointer-events-none h-[18px] w-[18px] peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Invoice Status */}
        <fieldset>
          <legend className="block mb-2 text-sm font-medium">
            Set the invoice status
          </legend>
          <div className="py-3 bg-white rounded-md border border-gray-200 px-[14px]">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  required={true}
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  defaultChecked={invoice.status === 'pending'}
                  className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:ring-offset-gray-800 focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-600"
                />
                <label
                  htmlFor="pending"
                  className="flex gap-1.5 items-center py-1.5 px-3 ml-2 text-xs font-medium text-gray-600 bg-gray-100 rounded-full dark:text-gray-300"
                >
                  Pending <ClockIcon className="w-4 h-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  required={true}
                  id="paid"
                  name="status"
                  type="radio"
                  value="paid"
                  defaultChecked={invoice.status === 'paid'}
                  className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:ring-offset-gray-800 focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-600"
                />
                <label
                  htmlFor="paid"
                  className="flex gap-1.5 items-center py-1.5 px-3 ml-2 text-xs font-medium text-white bg-green-500 rounded-full dark:text-gray-300"
                >
                  Paid <CheckIcon className="w-4 h-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="flex gap-4 justify-end mt-6">
        <Link
          href="/dashboard/invoices"
          className="flex items-center px-4 h-10 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Invoice</Button>
      </div>
    </form>
  )
}
