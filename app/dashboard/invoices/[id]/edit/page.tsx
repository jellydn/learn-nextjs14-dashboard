import type { Metadata } from 'next'

import { notFound } from 'next/navigation'

import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
import EditInvoiceForm from '@/app/ui/invoices/edit-form'

export const metadata: Metadata = {
  title: 'Edit Invoice | Acme Dashboard',
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ])

  if (!invoice) {
    notFound()
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditInvoiceForm invoice={invoice} customers={customers} />
    </main>
  )
}
