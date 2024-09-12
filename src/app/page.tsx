import { getSortedPostsData } from '@/lib/posts'
import ArticleList from '@/components/ArticleList'
import { Metadata } from 'next'
import Link from 'next/link'
import VideoGrid from '@/components/VideoGrid'
import { videos } from '@/data/videos';

export const metadata: Metadata = {
  title: 'GitBase - Open Source Dynamic Website CMS Without Database',
  description: 'A Next.js site with Tailwind & Shadcn/UI, using GitHub API for content management. No database needed for dynamic updates.',
}

export default function Home() {
  const allPostsData = getSortedPostsData().slice(0, 6)
  const limitedVideos = videos.slice(0, 6)  // 选择前6个视频

  return (
    <div className="container mx-auto py-12 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          GitBase
        </h1>
        <h2 className="text-2xl tracking-tighter sm:text-3xl md:text-3xl lg:text-3xl">Open Source Dynamic Website CMS Without Database</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          GitBase is a dynamic, database-free website built with Next.js, Tailwind CSS, and Shadcn/UI, featuring a content management system powered by the GitHub API for seamless updates and administration.
        </p>
      </section>

      {/* 视频教程部分 */}
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16'>
        <div className="flex justify-between items-center mb-8">
          <h2 className='text-3xl font-bold'>Cursor Video Tutorials</h2>
          <Link 
            href="/all-tutorials" 
            className="text-blue-600 hover:text-blue-800 font-semibold flex items-center group"
          >
            More
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <VideoGrid videos={limitedVideos} />
      </div>

      <ArticleList articles={allPostsData} />
    </div>
  )
}