'use client'

import { useEffect } from 'react'

import logger from '@/app/lib/logger'

export default function ErrorPage({
  error,
  reset,
}: {
  readonly error: Error & { digest?: string }
  readonly reset: () => void
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    logger.error(error)
  }, [error])

  return (
    <main className="flex flex-col justify-center items-center h-full">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        type="button"
        className="py-2 px-4 mt-4 text-sm text-white bg-blue-500 rounded-md transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => {
            reset()
          }
        }
      >
        Try again
      </button>
    </main>
  )
}
