import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cursor教程 - Cursor Composer、IDE和AI代码编辑器的教程。大量文章和视频指南提升您的编码技能',
  description:
    '学习 Cursor 提供了 Cursor Composer 的全面教程，这是 Cursor IDE 和 AI 代码编辑器的核心功能。发现专家提示、视频指南和核心功能，提升您的编码技能。立即访问，掌握 Cursor，提升您的编程效率。',
  alternates: {
    canonical: 'https://www.learn-cursor.com', // 将此替换为您的实际域名
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6152848695010247"
          crossOrigin="anonymous"
        />
        <meta name="google-adsense-account" content="ca-pub-6152848695010247" />
      </head>
      <body className={inter.className}>
        <Navigation /> {/* 全局导航栏 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
        <Footer />
        <GoogleAnalytics measurementId="G-25JE8RSPJN" />
      </body>
    </html>
  )
}