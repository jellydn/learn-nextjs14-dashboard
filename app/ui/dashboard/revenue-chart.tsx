import { CalendarIcon } from '@heroicons/react/24/outline'

import { fetchRevenue } from '@/app/lib/data'
import { generateYAxis } from '@/app/lib/utils'
import { lusitana } from '@/app/ui/fonts'

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function RevenueChart() {
  const revenue = await fetchRevenue()
  const chartHeight = 350

  const { yAxisLabels, topLabel } = generateYAxis(revenue)

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>
  }

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Recent Revenue
      </h2>

      <div className="p-4 bg-gray-50 rounded-xl">
        <div className="grid grid-cols-12 gap-2 items-end p-4 mt-0 bg-white rounded-md md:gap-4 sm:grid-cols-13">
          <div
            className="hidden flex-col justify-between mb-6 text-sm text-gray-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {revenue.map((month) => (
            <div key={month.month} className="flex flex-col gap-2 items-center">
              <div
                className="w-full bg-blue-300 rounded-md"
                style={{
                  height: `${(chartHeight / topLabel) * month.revenue}px`,
                }}
              />
              <p className="text-sm text-gray-400 -rotate-90 sm:rotate-0">
                {month.month}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pt-6 pb-2">
          <CalendarIcon className="w-5 h-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500">Last 12 months</h3>
        </div>
      </div>
    </div>
  )
}
