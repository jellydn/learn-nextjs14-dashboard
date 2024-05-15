import type { ReactNode } from 'react'

import { inter } from '../ui/fonts'
import '../ui/global.css'

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
