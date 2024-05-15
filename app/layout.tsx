import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { inter } from './ui/fonts'
import './ui/global.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://nextjs14.productsway.com'),
}

export default function RootLayout({
  children,
}: {
  readonly children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
