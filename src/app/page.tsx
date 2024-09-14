import { getSortedPostsData } from '@/lib/posts'
import ArticleList from '@/components/ArticleList'
import { Metadata } from 'next'
import Link from 'next/link'
import VideoGrid from '@/components/VideoGrid'
import { videos } from '@/data/videos';

export const metadata: Metadata = {
  title: 'Learn Cursor - Tutorials for Cursor Composer, IDE, and AI Code Editor',
  description: 'Learn Cursor offers comprehensive tutorials for Cursor Composer, a core feature of the Cursor IDE and AI code editor. Discover expert tips, video guides, and core features to enhance your coding skills. Visit now to master Cursor and boost your programming efficiency.',
}

export default function Home() {
  const allPostsData = getSortedPostsData().slice(0, 6)
  const limitedVideos = videos.slice(0, 6)

  return (
    <div className="container mx-auto py-12 space-y-16">
      {/* 顶部内容 */}
      <div className="text-neutral-900 pb-12 pt-10 text-center min-[780px]:pt-16 min-[780px]:pr-0 min-[780px]:pb-0 min-[780px]:pl-0 lg:pt-28 lg:pr-0 lg:pb-8 lg:pl-0">
        <h1 className="text-[5.38rem] leading-none font-extrabold mb-8">
          学习 Cursor <br className="hidden min-[500px]:block" /> AI 智能代码编辑器
        </h1>
        <h3 className="text-stone-500 text-xl mb-10">
          Learn Cursor 为您提供 Cursor Composer、IDE 和 AI 代码编辑器的全面教程。发现专家提示、视频指南和核心功能，提升您的编码技能。立即访问以掌握 Cursor 并提高您的编程效率。
        </h3>
        <div className="mb-8">
          <div className="inline-block p-3">
            <Link 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold items-center justify-center px-14 inline-flex h-11 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
              href="/all-tutorials"
            >
              开始学习
            </Link>
          </div>
          <div className="inline-block p-3">
            <Link 
              className="text-stone-500 items-center justify-center px-14 inline-flex h-11 rounded-lg border border-stone-200 hover:bg-stone-100 transition duration-300 ease-in-out shadow-md hover:shadow-md"
              href="/docs"
            >
              中文文档
            </Link>
          </div>
        </div>
        {/* 移除了开源协议和GitHub信息 */}
      </div>

      {/* Cursor 代码编辑器部分 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-neutral-900 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">什么是Cursor代码编辑器</h2>
        <h3 className="text-stone-500 text-xl mb-20">智能AI辅助编程,提升开发效率</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            { title: "AI 辅助编码", desc: "利用AI技术智能补全代码,提供编程建议。" },
            { title: "智能代码补全", desc: "基于上下文的智能代码补全,加速编码过程。" },
            { title: "代码重构", desc: "自动识别并优化代码结构,提高代码质量。" },
            { title: "多语言支持", desc: "支持多种编程语言,适应不同开发需求。" },
            { title: "实时协作", desc: "支持团队实时协作编辑,提高开发效率。" },
            { title: "自定义扩展", desc: "丰富的插件生态系统,满足个性化需求。" }
          ].map((item, index) => (
            <div key={index} className="cursor-pointer flex flex-col justify-between border border-gray-200 rounded-md p-8 h-52 text-left hover:shadow-lg transition-all duration-300 group">
              <div>
                <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
              </div>
              <div className="text-sm text-blue-600">
                <a href="#" className="inline-flex items-center group-hover:underline">
                  了解更多 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-sm mt-8">
          <strong className="font-bold">更多功能：</strong> 支持{" "}
          <a className="text-blue-600 hover:underline" href="#">版本控制</a>、{" "}
          <a className="text-blue-600 hover:underline" href="#">调试工具</a>、{" "}
          <a className="text-blue-600 hover:underline" href="#">性能分析</a>、{" "}
          <a className="text-blue-600 hover:underline" href="#">自动化测试</a> 等等
        </p>
      </div>

      {/* 视频教程部分 */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
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

      {/* 文章列表部分 */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <ArticleList articles={allPostsData} />
      </div>
    </div>
  )
}