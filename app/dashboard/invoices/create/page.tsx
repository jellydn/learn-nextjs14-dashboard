import { fetchCustomers } from '@/app/lib/data'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
import CreateInvoiceForm from '@/app/ui/invoices/create-form'

export default async function CreateInvoicePage() {
  const customers = await fetchCustomers()

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <CreateInvoiceForm customers={customers} />
    </main>
  )
}
