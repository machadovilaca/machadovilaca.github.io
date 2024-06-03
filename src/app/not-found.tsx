import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md px-4 py-12 text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl font-medium text-gray-500 dark:text-gray-400">
          Nothing done here yet, but you can check out my resume!
        </p>
      </div>
      <Link
        href="/resume"
        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        prefetch={false}
      >
        Resume
      </Link>
    </div>
  )
}
