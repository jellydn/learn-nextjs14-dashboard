import { fetchCardData, fetchRevenue, fetchLatestInvoices } from "@/app/lib/data";
import { Card } from "@/app/ui/dashboard/cards";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import { lusitana } from "@/app/ui/fonts";
import {
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from "@/app/ui/skeletons";

  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfInvoices,
    numberOfCustomers,
  } = await fetchCardData();
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-4 lg:grid-cols-8">
          <RevenueChart revenue={revenue} />
                    <RevenueChart revenue={revenue} />
                    <LatestInvoices latestInvoices={latestInvoices} />
}
