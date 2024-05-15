import type { Metadata } from 'next'
import { Suspense } from 'react'

import { fetchInvoicesPages } from '@/app/lib/data'
import { lusitana } from '@/app/ui/fonts'
import { CreateInvoice } from '@/app/ui/invoices/buttons'
import Pagination from '@/app/ui/invoices/pagination'
import InvoicesTable from '@/app/ui/invoices/table'
import Search from '@/app/ui/search'
import { InvoicesTableSkeleton } from '@/app/ui/skeletons'

export const metadata: Metadata = {
  title: 'Invoices | Acme Dashboard',
}

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
  }
}) {
  const query = searchParams?.query ?? ''
  const currentPage = Number(searchParams?.page) || 1

  const totalPages = await fetchInvoicesPages(query)

  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="flex gap-2 justify-between items-center mt-4 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <InvoicesTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="flex justify-center mt-5 w-full">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}
