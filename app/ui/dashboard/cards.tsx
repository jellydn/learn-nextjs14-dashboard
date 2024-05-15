import {
  BanknotesIcon,
  ClockIcon,
  InboxIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

import { fetchCardData } from '@/app/lib/data'
import { lusitana } from '@/app/ui/fonts'

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
}

export default async function CardWrapper() {
  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfInvoices,
    numberOfCustomers,
  } = await fetchCardData()

  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  )
}

export function Card({
  title,
  value,
  type,
}: {
  readonly title: string
  readonly value: number | string
  readonly type: 'invoices' | 'customers' | 'pending' | 'collected'
}) {
  const Icon = iconMap[type]

  return (
    <div className="p-2 bg-gray-50 rounded-xl shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="w-5 h-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  )
}
