import { clsx } from 'clsx'

import Link from 'next/link'

import { lusitana } from '@/app/ui/fonts'

type Breadcrumb = {
  label: string
  href: string
  active?: boolean
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  readonly breadcrumbs: Breadcrumb[]
}) {
  return (
    <nav aria-label="Breadcrumb" className="block mb-6">
      <ol className={clsx(lusitana.className, 'flex text-xl md:text-2xl')}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={clsx(
              breadcrumb.active ? 'text-gray-900' : 'text-gray-500',
            )}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="inline-block mx-3">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}
