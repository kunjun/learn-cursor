import { Metadata } from 'next'
import TutorialLayout from '@/components/TutorialLayout'

export const metadata: Metadata = {
  title: 'Cursor教程 - 从入门到精通',
  description: '全面的Cursor AI编程助手教程，包含基础操作、AI辅助编程和高级技巧等内容。',
}

export default function TutorialsPage() {
  return (
    <TutorialLayout>
      <div className="prose max-w-none">
        <h1>Cursor 教程中心</h1>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-4 my-4">
          <p className="text-green-700">
            欢迎来到 Cursor 教程中心！本教程将帮助您从零开始掌握 Cursor AI 编程助手，
            让编程变得更简单、更高效。
          </p>
        </div>

        <h2>课程特点</h2>
        <ul>
          <li>循序渐进的学习路径</li>
          <li>丰富的实践案例</li>
          <li>详细的操作指南</li>
          <li>完整的知识体系</li>
        </ul>

        <h2>学习路线</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold">第一阶段：基础入门</h3>
            <p>了解 Cursor 的基本概念和操作方法</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold">第二阶段：实战应用</h3>
            <p>通过实际项目学习 Cursor 的高级功能</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold">第三阶段：技术进阶</h3>
            <p>掌握相关编程知识，提升开发能力</p>
          </div>
        </div>
      </div>
    </TutorialLayout>
  )
} 