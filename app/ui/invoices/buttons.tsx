/* eslint-disable react/jsx-no-bind */
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

import Link from 'next/link'

import { deleteInvoice } from '@/app/lib/actions'

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex items-center px-4 h-10 text-sm font-medium text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  )
}

export function UpdateInvoice({ id }: { readonly id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="p-2 rounded-md border hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  )
}

export function DeleteInvoice({ id }: { readonly id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id)

  return (
    <form action={deleteInvoiceWithId}>
      <button type="submit" className="p-2 rounded-md border hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  )
}
