'use client'; // 指定该组件为客户端组件

import { useState } from 'react'; // 导入 React 的 useState 钩子
import VideoGrid from '@/components/VideoGrid'; // 导入视频网格组件
import { videos } from '@/data/videos'; // 导入视频数据

// 定义视频分类的类型
type Category = '全部' | '基础功能' | '功能' | '其他';

export function VideosPage() {
  // 定义可供选择的分类列表
  const categories: Category[] = ['全部', '基础功能', '功能', '其他'];

  // 管理当前选中的分类状态，初始值为 '全部'
  const [selectedCategory, setSelectedCategory] = useState<Category>('全部');

  // 根据选中的分类过滤视频列表
  const filteredVideos =
    selectedCategory === '全部'
      ? videos // 如果选中 '全部'，则显示所有视频
      : videos.filter((video) => video.category === selectedCategory); // 否则只显示匹配的分类

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* 页面标题 */}
      <h1 className="text-4xl font-bold text-center mb-4">Cursor 视频教程</h1>
      {/* 页面描述 */}
      <p className="text-xl text-gray-600 text-center mb-12">
        探索我们的完整 Cursor 教程合集，掌握 AI 驱动的代码编辑器
      </p>
      {/* 分类筛选按钮 */}
      <div className="mb-8">
        <ul className="flex space-x-4 justify-center">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)} // 点击按钮时更新选中的分类
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white' // 当前选中分类的样式
                    : 'bg-gray-200 text-gray-700' // 未选中分类的样式
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* 视频网格，展示过滤后的视频 */}
      <VideoGrid videos={filteredVideos} />
    </div>
  );
}