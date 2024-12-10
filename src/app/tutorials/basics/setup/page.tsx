import { Metadata } from 'next'
import TutorialLayout from '@/components/TutorialLayout'

export const metadata: Metadata = {
  title: 'Cursor安装和配置 - 新手入门教程',
  description: '学习如何安装和配置Cursor AI编程助手，开始您的AI辅助编程之旅。',
}

export default function SetupTutorialPage() {
  return (
    <TutorialLayout>
      <div className="prose max-w-none">
        <h1>安装和配置 Cursor</h1>
        
        <h2>系统要求</h2>
        <ul>
          <li>Windows 10/11 或 macOS 10.15+</li>
          <li>4GB 以上内存</li>
          <li>稳定的网络连接</li>
        </ul>

        <h2>安装步骤</h2>
        <ol>
          <li>
            <p>访问 Cursor 官网下载安装包</p>
            <pre><code>https://cursor.sh</code></pre>
          </li>
          <li>运行安装程序，按照向导完成安装</li>
          <li>首次启动时，登录您的账号</li>
        </ol>

        <h2>基础配置</h2>
        <p>
          安装完成后，您可以进行以下基础配置：
        </p>
        <ul>
          <li>选择您喜欢的主题</li>
          <li>配置代码自动补全</li>
          <li>设置快捷键</li>
        </ul>
      </div>
    </TutorialLayout>
  )
} 