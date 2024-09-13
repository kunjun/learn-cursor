import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import Script from 'next/script'
import { Layout } from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Learn Cursor - Tutorials for Composer, IDE, and AI Code Editor',
    template: '%s | Learn Cursor'
  },
  description: 'Learn Cursor offers comprehensive tutorials for Cursor Composer, a core feature of the Cursor IDE and AI code editor. Discover expert tips, video guides, and core features to enhance your coding skills.',
  keywords: ['Cursor', 'Cursor Composer', 'IDE', 'AI Code Editor', 'Coding Tutorials', 'Programming Efficiency'],
  openGraph: {
    title: 'Learn Cursor - Tutorials for Composer, IDE, and AI Code Editor',
    description: 'Discover expert tips, video guides, and core features to enhance your coding skills with Cursor Composer and AI-powered coding tools.',
    type: 'website',
    url: 'https://learn-cursor.com', // 请替换为您的实际网站 URL
    images: [
      {
        url: 'https://your-website-url.com/og-image.jpg', // 请替换为您的实际 Open Graph 图片 URL
        width: 1200,
        height: 630,
        alt: 'Learn Cursor Tutorials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn Cursor - Boost Your Coding Skills',
    description: 'Master Cursor Composer and AI-powered coding tools with our comprehensive tutorials and video guides.',
    images: ['https://your-website-url.com/twitter-image.jpg'], // 请替换为您的实际 Twitter 卡片图片 URL
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 脚本保持不变 */}
      </head>
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
        <GoogleAnalytics measurementId="G-25JE8RSPJN" />
      </body>
    </html>
  )
}