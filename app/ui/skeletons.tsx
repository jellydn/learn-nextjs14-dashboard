// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent'

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="w-5 h-5 bg-gray-200 rounded-md" />
        <div className="ml-2 w-16 h-6 text-sm font-medium bg-gray-200 rounded-md" />
      </div>
      <div className="flex justify-center items-center py-8 px-4 bg-white rounded-xl truncate">
        <div className="w-20 h-7 bg-gray-200 rounded-md" />
      </div>
    </div>
  )
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  )
}

export function RevenueChartSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <div className="mb-4 w-36 h-8 bg-gray-100 rounded-md" />
      <div className="p-4 bg-gray-100 rounded-xl">
        <div className="grid grid-cols-12 gap-2 items-end p-4 mt-0 bg-white rounded-md md:gap-4 h-[410px] sm:grid-cols-13" />
        <div className="flex items-center pt-6 pb-2">
          <div className="w-5 h-5 bg-gray-200 rounded-full" />
          <div className="ml-2 w-20 h-4 bg-gray-200 rounded-md" />
        </div>
      </div>
    </div>
  )
}

export function InvoiceSkeleton() {
  return (
    <div className="flex flex-row justify-between items-center py-4 border-b border-gray-100">
      <div className="flex items-center">
        <div className="mr-2 w-8 h-8 bg-gray-200 rounded-full" />
        <div className="min-w-0">
          <div className="w-40 h-5 bg-gray-200 rounded-md" />
          <div className="mt-2 w-12 h-4 bg-gray-200 rounded-md" />
        </div>
      </div>
      <div className="mt-2 w-12 h-4 bg-gray-200 rounded-md" />
    </div>
  )
}

export function LatestInvoicesSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4 lg:col-span-4`}
    >
      <div className="mb-4 w-36 h-8 bg-gray-100 rounded-md" />
      <div className="flex flex-col justify-between p-4 bg-gray-100 rounded-xl grow">
        <div className="px-6 bg-white">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <div className="flex items-center pt-6 pb-2">
            <div className="w-5 h-5 bg-gray-200 rounded-full" />
            <div className="ml-2 w-20 h-4 bg-gray-200 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  )
}

export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Customer Name and Image */}
      <td className="overflow-hidden relative py-3 pr-3 pl-6 whitespace-nowrap">
        <div className="flex gap-3 items-center">
          <div className="w-8 h-8 bg-gray-100 rounded-full" />
          <div className="w-24 h-6 bg-gray-100 rounded" />
        </div>
      </td>
      {/* Email */}
      <td className="py-3 px-3 whitespace-nowrap">
        <div className="w-32 h-6 bg-gray-100 rounded" />
      </td>
      {/* Amount */}
      <td className="py-3 px-3 whitespace-nowrap">
        <div className="w-16 h-6 bg-gray-100 rounded" />
      </td>
      {/* Date */}
      <td className="py-3 px-3 whitespace-nowrap">
        <div className="w-16 h-6 bg-gray-100 rounded" />
      </td>
      {/* Status */}
      <td className="py-3 px-3 whitespace-nowrap">
        <div className="w-16 h-6 bg-gray-100 rounded" />
      </td>
      {/* Actions */}
      <td className="py-3 pr-3 pl-6 whitespace-nowrap">
        <div className="flex gap-3 justify-end">
          <div className="bg-gray-100 rounded h-[38px] w-[38px]" />
          <div className="bg-gray-100 rounded h-[38px] w-[38px]" />
        </div>
      </td>
    </tr>
  )
}

export function InvoicesMobileSkeleton() {
  return (
    <div className="p-4 mb-2 w-full bg-white rounded-md">
      <div className="flex justify-between items-center pb-8 border-b border-gray-100">
        <div className="flex items-center">
          <div className="mr-2 w-8 h-8 bg-gray-100 rounded-full" />
          <div className="w-16 h-6 bg-gray-100 rounded" />
        </div>
        <div className="w-16 h-6 bg-gray-100 rounded" />
      </div>
      <div className="flex justify-between items-center pt-4 w-full">
        <div>
          <div className="w-16 h-6 bg-gray-100 rounded" />
          <div className="mt-2 w-24 h-6 bg-gray-100 rounded" />
        </div>
        <div className="flex gap-2 justify-end">
          <div className="w-10 h-10 bg-gray-100 rounded" />
          <div className="w-10 h-10 bg-gray-100 rounded" />
        </div>
      </div>
    </div>
  )
}

export function InvoicesTableSkeleton() {
  return (
    <div className="flow-root mt-6">
      <div className="inline-block min-w-full align-middle">
        <div className="p-2 bg-gray-50 rounded-lg md:pt-0">
          <div className="md:hidden">
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
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
                <th
                  scope="col"
                  className="relative pt-2 pr-6 pb-4 pl-3 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
