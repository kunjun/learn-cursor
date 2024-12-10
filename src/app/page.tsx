import { Metadata } from 'next'
import Link from 'next/link'
import VideoGrid from '@/components/VideoGrid'
import { videos } from '@/data/videos'
import FAQSection from '../components/FAQSection'
import { HomeJsonLd } from '@/components/HomeJsonLd'

export const metadata: Metadata = {
  title: 'Cursor教程 - Cursor Composer、IDE和AI代码编辑器的教程。大量文章和视频指南提升您的编码技能',
  description: '学习 Cursor 提供了 Cursor Composer 的全面教程，这是 Cursor IDE 和 AI 代码编辑器的核心功能。发现专家提示、视频指南和核心功能，提升您的编码技能。立即访问，掌握 Cursor，提升您的编程效率。',
  keywords: ['Cursor', 'AI编程', 'IDE', 'Cursor教程', 'AI代码编辑器', 'Cursor Composer', '编程学习'],
  openGraph: {
    title: 'Cursor教程 - AI编程学习平台',
    description: '学习 Cursor 提供了 Cursor Composer 的全面教程，这是 Cursor IDE 和 AI 代码编辑器的核心功能。',
    type: 'website',
    url: 'https://learn-cursor.com',
    siteName: 'Learn Cursor',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Learn Cursor Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cursor教程 - AI编程学习平台',
    description: '学习 Cursor 提供了 Cursor Composer 的全面教程，这是 Cursor IDE 和 AI 代码编辑器的核心功能。',
    images: ['/logo.png']
  },
  alternates: {
    canonical: 'https://learn-cursor.com'
  }
}

const faqItems = [
  {
    question: "什么是 Cursor AI 代码编辑器？",
    answer: "Cursor 是一款革命性的 AI 驱动代码编辑器，通过智能代码补全、AI 辅助编程等功能，帮助开发者和学习者提高编码效率。我们的教程将详细解析 Cursor 的核心功能和使用技巧。"
  },
  {
    question: "Cursor AI 教程适合零基础学习者吗？",
    answer: "非常适合！我们的教程专为不同技术水平的学习者设计。从基础入门到高技巧，提供系统性的 Cursor AI 使用指南，帮助你快速掌握 AI 编程工具。"
  },
  {
    question: "Cursor AI 教程包含哪些内容？",
    answer: "我们的教程涵盖：1) Cursor 基础使用 2) AI 代码生成技巧 3) 实战项目案例 4) 多语言编程指南 5) 最新 AI 编程趋势解读，全方位助力你的编程学习。"
  },
  {
    question: "Cursor 支持哪些编程语言？",
    answer: "Cursor AI 支持 Python、JavaScript、TypeScript、Java、C++、Go 等主流编程语言。我们的教程将针对不同语言提供专属学习资源和实践指南。"
  },
  {
    question: "Cursor 教程的独特价值是什么？",
    answer: "我们致力于提供：1) 高质量视频教程 2) 深入文字解析 3) 实战代码示例 4) 紧跟技术前沿 5) 系统性学习路径，帮助你高效学习 AI 编程工具。"
  },
  {
    question: "Cursor 教程是免费的吗？",
    answer: "我们提供大量免费教程资源，覆盖 Cursor 使用的各个层面。部分进阶内容可能需要付费，但基础学习资源完全免费，助力你快速入门 AI 编程。"
  },
  {
    question: "Cursor Composer是什么？",
    answer: "Cursor Composer 是 Cursor AI 编辑器的核心功能，它允许开发者通过自然语言指令快速生成、重构和优化代码Composer 能够理解上下文，根据您的需求智能地生成代码片段、函数和整个模块，大大提高编码效率和代码质量。"
  }
];

export default function Home() {
  const limitedVideos = videos.slice(0, 6);
  const websiteUrl = 'https://learn-cursor.com';

  return (
    <>
      <HomeJsonLd
        title="Cursor教程 - AI编程学习平台"
        description="学习 Cursor 提供了 Cursor Composer 的全面教程，这是 Cursor IDE 和 AI 代码编辑器的核心功能。"
        url={websiteUrl}
      />
      
      <main className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* 顶部内容 - 减少垂直内边距 */}
        <section className="py-10 md:py-16 space-y-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-50 rounded-full px-4 py-2 mb-6 text-blue-800 text-sm font-medium tracking-wide">
              🚀 全新 Cursor AI 学习平台
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight font-extrabold mb-6 text-gray-900 tracking-tight">
              学习 Cursor <br className="hidden sm:block" /> AI 智能代码编辑器
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Learn Cursor 为您提供 Cursor Composer、IDE 和 AI 代码编辑器的全面教程。发现专家提示、视频指南和核心功能，提升您的编码技能。
            </h2>
            <div className="flex justify-center space-x-4">
              <Link 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold items-center justify-center px-8 md:px-14 inline-flex h-12 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
                href="/tutorials"
              >
                开始学习
              </Link>
              <Link 
                className="text-gray-700 bg-white hover:bg-gray-50 items-center justify-center px-8 md:px-14 inline-flex h-12 rounded-xl border border-gray-200 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
                href="/docs"
              >
                中文文档
              </Link>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-200 my-4" />

        {/* Cursor 教程部分 */}
        <section className="py-10 md:py-16 space-y-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">Cursor AI 教程</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              为开发者和产品经理提供全面、实用的 Cursor AI 学习资源
            </p>
          </div>
          
          <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Cursor 教程",
                desc: "全面的 Cursor 掌握指南",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                ),
                link: "/posts"
              },
              {
                title: "Cursor 快捷键",
                desc: "提升效率的键盘快捷键速查表",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                  </svg>
                ),
                link: "/shortcuts"
              },
              {
                title: "Cursor 核心功能",
                desc: "探索 Cursor 的强大功能",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.035-.259a3.375 3.375 0 002.456-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                ),
                link: "/features"
              },
              {
                title: "Cursor 规则",
                desc: "学习如何为您的工作流程自定义 Cursor",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-orange-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                  </svg>
                ),
                link: "/cursor-rules"
              },
              {
                title: "视频教程",
                desc: "精心策划的视频内容，增强您的学习体验",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375v-1.5a1.125 1.125 0 00-1.125-1.125h-1.5a1.125 1.125 0 00-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125zm16.5 0h1.5a1.125 1.125 0 001.125-1.125v-1.5a1.125 1.125 0 00-1.125-1.125h-1.5a1.125 1.125 0 00-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125zm-16.5-12h1.5a1.125 1.125 0 001.125-1.125v-1.5A1.125 1.125 0 005.625 3.75h-1.5A1.125 1.125 0 003 4.875v1.5c0 .621.504 1.125 1.125 1.125zm16.5 0h1.5A1.125 1.125 0 0021 4.875v-1.5A1.125 1.125 0 0019.875 3.75h-1.5a1.125 1.125 0 00-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                ),
                link: "/video-tutorials"
              },
              {
                title: "AI 编程资源",
                desc: "发现 AI 辅助编程的工具和替代方案",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.25 3.75a2.249 2.249 0 01-1.987 1.036H9.236a2.249 2.249 0 01-1.987-1.036L5 14.5m14 0a2.25 2.25 0 00-2.25-2.25H5a2.25 2.25 0 00-2.25 2.25m14 0V12a2.25 2.25 0 00-2.25-2.25H5A2.25 2.25 0 002.75 12v2.25" />
                  </svg>
                ),
                link: "/ai-resources"
              }
            ].map((item, index) => (
              <Link 
                key={index}
                href={item.link}
                className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl"
                aria-label={`访问${item.title}`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-blue-50 rounded-full p-3 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <span className="text-blue-600 group-hover:text-blue-700 flex items-center text-sm">
                      了解更多
                      <svg 
                        className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </nav>
        </section>

        <hr className="border-t border-gray-200 my-4" />

        {/* 视频教程部分 */}
        <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">Cursor 视频教程</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                精选高质量的 Cursor 使用教程和实战案例，帮助您快速掌握 AI 编程技巧
              </p>
            </div>
            
            <VideoGrid videos={limitedVideos.map(video => ({
              ...video,
              platform: video.platform as "youtube" | "bilibili",
              author: { name: '', avatar: '' },
              duration: '',
            }))} />
            
            <div className="text-center mt-12">
              <Link 
                href="/all-tutorials" 
                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center justify-center group"
                aria-label="查看更多视频教程"
              >
                查看更多视频教程
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-100 my-4" />

        {/* FAQ部分 */}
        <section className="py-2">
          <FAQSection items={faqItems} />
        </section>
      </main>
    </>
  )
}