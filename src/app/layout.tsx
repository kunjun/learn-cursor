import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <Navigation /> {/* 全局导航栏 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
        <GoogleAnalytics measurementId="G-25JE8RSPJN" />
      </body>
    </html>
  )
}