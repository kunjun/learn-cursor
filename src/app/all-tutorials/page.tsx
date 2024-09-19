import { Metadata } from 'next'; // 导入 Next.js 的元数据类型
import VideoGrid from '@/components/VideoGrid'; // 导入视频网格组件
import { videos } from '@/data/videos'; // 导入视频数据

// 定义视频分类的类型
type Category = '全部' | '个人网站' | 'Yutube频道' | 'B站' | '其他';

// 定义页面的元数据
export const metadata: Metadata = {
  title: '所有 Cursor 教程 - 学习 Cursor Composer 和 AI 代码编辑器', // 页面标题
  description:
    '浏览我们完整的 Cursor 教程合集。学习如何使用 Cursor Composer、IDE 功能和 AI 驱动的编码工具，以提升您的编程技能和效率。', // 页面描述
};

// 定义分类筛选按钮组件
function CategoryFilter({ categories, selectedCategory }: { categories: Category[]; selectedCategory: Category }) {
  return (
    <div className="mb-8">
      <ul className="flex space-x-4 justify-center">
        {categories.map((category) => (
          <li key={category}>
            <a
              href={`?category=${encodeURIComponent(category)}`}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white' // 当前选中分类的样式
                  : 'bg-gray-200 text-gray-700' // 未选中分类的样式
              }`}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 定义页面组件，接收 URL 查询参数
export default function AllTutorials({ searchParams }: { searchParams: { category?: Category } }) {
  // 定义可供选择的分类列表
  const categories: Category[] = ['全部', '个人网站', 'Yutube频道', 'B站', '其他'];

  // 根据 URL 查询参数获取当前选中的分类
  const selectedCategory = searchParams.category || '全';

  // 根据选中的类过滤视频列表
  const filteredVideos =
    selectedCategory === '全部'
      ? videos // 如果选中 '全部'，则显示所有视频
      : videos.filter((video) => video.category === selectedCategory); // 否则只显示匹配的分类

  return (
    <div className="pt-16">
      {/* 主容器，增加顶部内边距以适应固定的头部 */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* 页面标题 */}
        <h1 className="text-4xl font-bold text-center mb-4">搜罗全网 Cursor 视频教程</h1>
        {/* 页面描述 */}
        <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12">
          浏览全网最全面的 Cursor 教程，掌握 Cursor AI 驱动的代码编辑器
        </p>
        {/* 分类筛选按钮 */}
        <div className="mb-8">
          <ul className="flex space-x-4 justify-center">
            {categories.map((category) => (
              <li key={category}>
                <a
                  href={`?category=${encodeURIComponent(category)}`}
                  className={`px-4 py-2 rounded-full ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white' // 当前选中分类的样式
                      : 'bg-gray-200 text-gray-700' // 未选中分类的样式
                  }`}
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* 视频网格组件，展示过滤后的视频 */}
        <VideoGrid videos={filteredVideos} />
      </div>
    </div>
  );
}