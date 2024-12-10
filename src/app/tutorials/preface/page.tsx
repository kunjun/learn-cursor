import { Metadata } from 'next'
import TutorialLayout from '@/components/TutorialLayout'

export const metadata: Metadata = {
  title: 'Cursor教程 - 前言',
  description: 'Cursor AI编程助手教程前言，了解Cursor如何改变编程方式。',
}

export default function PrefacePage() {
  return (
    <TutorialLayout>
      <div className="prose max-w-none">
        <h1>前言</h1>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-4 my-4">
          <p className="text-green-700">
            欢迎大家来到 12 月航海 | Cursor 编程 | 实战手册。相信在接下来的日子里，我们将在这里见面很次。
          </p>
        </div>

        <h2>想象一下</h2>
        <p>
          如果编程可以像使用 Word 一样简单：你说"我要制作一个统计表格"，它就能帮你把工具直接做出来，这是一种什么体验？
        </p>

        <h2>Cursor 带来的改变</h2>
        <p>
          这不是科幻，这就是 Cursor 带来的改变。Cursor 正在重新定义编程的学习方式，它带来了这些改变：
        </p>

        <h3>1. 通过对话就能写代码</h3>
        <p>
          传统编程充满了晦涩的语法规则和技术障碍，而 Cursor 把这个过程变成了类似写作的体验。你只需用自然语言描述你的想法，它就能立即翻译成完整的代码。
        </p>

        <h3>2. 让编码快速变成产品</h3>
        <p>
          Cursor 最大的革新在于，它让你把注意力从"如何写代码"转移到"解决什么问题"。对初学者来说，这意味着更快的学习曲线；对专业开发者来说，这意味着更高的工作效率。
        </p>

        <h3>3. 让开发实现"民主化"</h3>
        <p>
          通过生成规范、专业的代码，Cursor 让新手能快速参与到实际项目中。它模糊了初学者和专业开发者之间的界限，让协作变得更加顺畅。这不仅提升了开发效率，更重要的是，它正在让更多人有机会参与到软件创造中。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
          <p className="text-blue-700">
            Cursor 不仅是一个工具，它代表着编程教育的新范式：更直观、更高效、更平民化。下面我们就开始本期 Cursor 编程的学习之旅。
          </p>
        </div>

        <p className="text-sm text-gray-600 mt-8">
          ���下内容由生财有术合伙人制作而成，仅供航海员以及生财有术球友学习使用。
        </p>
      </div>
    </TutorialLayout>
  )
} 