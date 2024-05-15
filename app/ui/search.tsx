'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useDebouncedCallback } from 'use-debounce'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import logger from '../lib/logger'

export default function Search({
  placeholder,
}: { readonly placeholder: string }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((keyword: string) => {
    logger.info('Searching for', keyword)
    const params = new URLSearchParams(searchParams)
    params.set('page', '1') // Reset page to 1

    if (keyword) {
      params.set('query', keyword)
    } else {
      params.delete('query')
    }

    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className="flex relative flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="block pl-10 w-full text-sm rounded-md border border-gray-200 peer py-[9px] outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        defaultValue={searchParams.get('query')?.toString() ?? ''}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 text-gray-500 -translate-y-1/2 h-[18px] w-[18px] peer-focus:text-gray-900" />
    </div>
  )
}
