'use client'

import Link from 'next/link'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 py-4 px-4 bg-white">
      <Link href="/" className="text-gray-600 hover:text-blue-600">
        <HomeIcon className="h-5 w-5" />
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRightIcon className="h-5 w-5 text-gray-400" />
          <Link
            href={item.href}
            className={`ml-2 text-sm font-medium ${
              index === items.length - 1
                ? 'text-gray-900'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  )
} 