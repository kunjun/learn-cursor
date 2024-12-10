'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface MenuItem {
  title: string
  href: string
  items?: MenuItem[]
}

const menuItems: MenuItem[] = [
  {
    title: '前言',
    href: '/tutorials/preface',
  },
  {
    title: '一、了解 Cursor 工具',
    href: '/tutorials/basics',
    items: [
      { title: '1.1 Cursor 简介与安装', href: '/tutorials/basics/intro' },
      { title: '1.2 配置中文插件', href: '/tutorials/basics/chinese-plugin' },
      { title: '1.3 用 Cursor 写出第一个程序', href: '/tutorials/basics/first-program' },
      { title: '1.4 更多技巧', href: '/tutorials/basics/tips' },
    ]
  },
  {
    title: '二、上手 Cursor 开发',
    href: '/tutorials/getting-started',
    items: [
      { 
        title: '2.1 前期准备', 
        href: '/tutorials/getting-started/preparation',
        items: [
          { title: '2.1.1 新建文件夹', href: '/tutorials/getting-started/preparation/create-folder' },
          { title: '2.1.2 准备 .cursorrules 文件', href: '/tutorials/getting-started/preparation/cursor-rules' },
        ]
      },
      {
        title: '2.2 网页开发',
        href: '/tutorials/getting-started/web-dev',
        items: [
          { title: '2.2.1 表达你的需求', href: '/tutorials/getting-started/web-dev/requirements' },
          { title: '2.2.2 测试和迭代', href: '/tutorials/getting-started/web-dev/testing' },
          { title: '2.2.3 发布上线', href: '/tutorials/getting-started/web-dev/deploy' },
        ]
      }
    ]
  },
  {
    title: '三、学习相关编程知识',
    href: '/tutorials/programming',
    items: [
      {
        title: '3.1 前端基础',
        href: '/tutorials/programming/frontend',
        items: [
          { title: '3.1.1 HTML', href: '/tutorials/programming/frontend/html' },
          { title: '3.1.2 HTML + CSS', href: '/tutorials/programming/frontend/html-css' },
          { title: '3.1.3 HTML + CSS + JavaScript', href: '/tutorials/programming/frontend/html-css-js' },
        ]
      },
      {
        title: '3.2 后端基础 (Python)',
        href: '/tutorials/programming/backend',
        items: [
          { title: '3.2.1 基础语法介绍', href: '/tutorials/programming/backend/syntax' },
          { title: '3.2.2 输入输出', href: '/tutorials/programming/backend/io' },
          { title: '3.2.3 基础运算与逻辑运算', href: '/tutorials/programming/backend/operations' },
        ]
      },
      {
        title: '3.3 数据库',
        href: '/tutorials/programming/database',
        items: [
          { title: '3.3.1 Cursor 实操', href: '/tutorials/programming/database/cursor-practice' },
          { title: '3.3.2 理论 + 代码案例', href: '/tutorials/programming/database/theory-examples' },
        ]
      }
    ]
  }
]

export default function TutorialLayout({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState<string[]>(['新手入门'])

  const toggleSection = (title: string) => {
    setOpenSections(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    )
  }

  return (
    <div className="flex min-h-screen">
      {/* 左侧导航 */}
      <aside className="w-64 border-r bg-gray-50 p-6">
        <nav>
          {menuItems.map((section) => (
            <div key={section.title} className="mb-4">
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-blue-600"
              >
                <span>{section.title}</span>
                <svg
                  className={cn(
                    "h-4 w-4 transition-transform",
                    openSections.includes(section.title) ? "rotate-90" : ""
                  )}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              
              {openSections.includes(section.title) && section.items && (
                <ul className="mt-2 space-y-2 pl-4">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block text-sm hover:text-blue-600",
                          pathname === item.href
                            ? "text-blue-600 font-medium"
                            : "text-gray-600"
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* 右侧内容 */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
} 