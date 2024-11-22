import { Metadata } from 'next';
import VideoGrid from '@/components/VideoGrid';
import { videos, categories, type Category } from '@/data/videos';

export const metadata: Metadata = {
  title: '所有 Cursor 教程 - 学习 Cursor Composer 和 AI 代码编辑器',
  description: '浏览我们完整的 Cursor 教程合集。学习如何使用 Cursor Composer、IDE 功能和 AI 驱动的编码工具，以提升您的编程技能和效率。',
};

export default function AllTutorials({ 
  searchParams 
}: { 
  searchParams: { category?: Category } 
}) {
  // 获取 URL 查询参数中的分类，若未指定则默认为 '全部'
  const selectedCategory = searchParams.category || '全部';

  // 根据选中的分类过滤视频
  const filteredVideos =
    selectedCategory === '全部'
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  return (
    <div className="pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">搜罗全网 Cursor 视频教程</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12">
          浏览全网最全面的 Cursor 教程，掌握 Cursor AI 驱动的代码编辑器
        </p>
        
        {/* 分类筛选按钮 */}
        <div className="mb-8">
          <ul className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <li key={category}>
                <a
                  href={`?category=${encodeURIComponent(category)}`}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* 视频网格 */}
        <VideoGrid videos={filteredVideos.map(video => ({
          ...video,
          platform: video.platform as "youtube" | "bilibili" // Type assertion to fix type error
        }))} />
      </div>
    </div>
  );
}