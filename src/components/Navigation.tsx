'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Github } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavItem {
  path: string
  label: string
  isExternal?: boolean
}

const navItems: NavItem[] = [
  { path: '/', label: '首页' },
  { path: '/tutorials', label: '从零开始AI编程' },
  { path: '/docs', label: '中文文档' },
  { path: '/all-tutorials', label: '视频教程' },
  { path: '/posts', label: '文章教程' },
//   { path: 'https://nf.video/Up9Xa', label: ' ChatGPT 合租', isExternal: true },
  { path: 'https://changelog.cursor.sh/', label: 'Cursor 历程', isExternal: true },
]

export function Navigation() {
  const pathname = usePathname()

  function isActive(path: string): boolean {
    const currentPath = (pathname ?? '/').replace(/\/$/, '') || '/'
    const navPath = path.replace(/\/$/, '') || '/'
    return currentPath === navPath
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="https://cursor-guide.vercel.com" className="flex h-14 text-sky-600 items-center">
            <div className="relative w-40 h-10">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={160}
                height={40}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </Link>
          <nav className="flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.isExternal) {
                return (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-stone-500 hover:text-blue-600 transition duration-300"
                  >
                    {item.label}
                  </a>
                )
              } else {
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      'text-sm font-medium transition duration-300',
                      isActive(item.path)
                        ? 'text-blue-600'
                        : 'text-stone-500 hover:text-blue-600'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              }
            })}
          </nav>
          {/* <div className="flex items-center">
            <Link
              href="https://github.com/kunjun/cursor-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-blue-600 transition duration-300"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div> */}
        </div>
      </div>
    </header>
  )
}