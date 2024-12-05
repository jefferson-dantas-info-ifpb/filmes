export function Pagination({
  page,
  pageCount,
  isSearch = false
}: {
  page: number
  pageCount: number
  isSearch?: boolean
}) {
  return (
    <div className="flex items-center justify-between border-t border-gray-700 px-4 py-3 sm:px-6 mt-4">
      <div className="flex flex-1 items-center justify-between">
        <div>
          <p className="text-sm">
            Página <span className="font-medium">{page}</span> de <span className="font-medium">{pageCount}</span>
          </p>
        </div>

        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <GoToPreviousPage page={page} isSearch={isSearch} />
            <GoToPage page={1} current={page === 1} isSearch={isSearch} />
            <GoToPage page={2} current={page === 2} isSearch={isSearch} />
            <GoToPage page={3} current={page === 3} isSearch={isSearch} />
            {page <= 3 || page >= pageCount - 2 ? (
              <MorePages />
            ) : (
              <>
                <MorePages />
                <GoToPage page={page} current isSearch={isSearch} />
                <MorePages />
              </>
            )}
            <GoToPage page={pageCount - 2} current={page === pageCount - 2} isSearch={isSearch} />
            <GoToPage page={pageCount - 1} current={page === pageCount - 1} isSearch={isSearch} />
            <GoToPage page={pageCount} current={page === pageCount} isSearch={isSearch} />
            <GoToNextPage page={page} isSearch={isSearch} />
          </nav>
        </div>
      </div>
    </div>
  )
}

export function GoToPreviousPage({ page, isSearch }: { page: number; isSearch: boolean }) {
  return (
    <a
      href={isSearch ? `/search/${page - 1}${location.search}` : `/page/${page - 1}`}
      className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-600 hover:bg-gray-900 focus:z-20 focus:outline-offset-0"
    >
      <span className="sr-only">Previous</span>
      <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
        <path
          fill-rule="evenodd"
          d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  )
}

export function GoToNextPage({ page, isSearch }: { page: number; isSearch: boolean }) {
  return (
    <a
      href={isSearch ? `/search/${page + 1}${location.search}` : `/page/${page + 1}`}
      className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-600 hover:bg-gray-900 focus:z-20 focus:outline-offset-0"
    >
      <span className="sr-only">Next</span>
      <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
        <path
          fill-rule="evenodd"
          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  )
}

export function GoToPage({ page, current, isSearch }: { page: number; current?: boolean; isSearch: boolean }) {
  return (
    <a
      href={isSearch ? `/search/${page}${location.search}` : `/page/${page}`}
      aria-current="page"
      className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
        current
          ? 'bg-slate-600 focus-visible:outline-slate-600 hover:bg-gray-500'
          : 'ring-1 ring-inset ring-gray-600 hover:bg-gray-900'
      }`}
    >
      {page}
    </a>
  )
}

export function MorePages() {
  return (
    <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-600 focus:outline-offset-0">
      ...
    </span>
  )
}
