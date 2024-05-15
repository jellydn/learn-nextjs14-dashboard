import type { Metadata } from 'next'
import { Suspense } from 'react'

import { fetchFilteredCustomers } from '@/app/lib/data'
import CustomersTable from '@/app/ui/customers/table'

export const metadata: Metadata = {
  title: 'Customers | Acme Dashboard',
}

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string
  }
}) {
  const query = searchParams?.query ?? ''
  const customers = await fetchFilteredCustomers(query)

  return (
    <div className="w-full">
      <Suspense key={query} fallback={<p>Loading</p>}>
        <CustomersTable customers={customers} />
      </Suspense>
    </div>
  )
}
