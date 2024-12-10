import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cursor编程教程 - 简介',
  description: 'Cursor编程工具介绍及其带来的编程体验改变'
}

export default function IntroPage() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>Cursor编程教程简介</h1>
      
      <p className="lead">
        想象一下，如果编程可以像用 Word 一样简单：你说"我要制作一个统计表格"，它就能帮你把工具做出来，这是一种什么体验？
      </p>

      <p>
        这不是科幻，这就是 Cursor 带来的改变。Cursor 正在重新定义编程的学习方式，它带来了这些改变：
      </p>

      <h2>1. 通过对话就能写代码</h2>
      <p>
        传统编程充满了晦涩的语法规则和逻辑障碍，而 Cursor 把这个过程变成了类似写作的体验。你只需用自然语言描述你的想法，它就能立即翻译成完整的代码。
      </p>

      <h2>2. 让想法快速变成产品</h2>
      <p>
        Cursor 最大的革新在于，它让你把注意力从"如何写代码"转移到"解决什么问题"。对初学者来说，这意味着更快的学习曲线；对专业开发者来说，这意味着更高的工作效率。你可以专注于实现想法，而不是被技术细节困住。
      </p>

      <h2>3. 让开发实现"民主化"</h2>
      <p>
        通过生成规范、专业的代码，Cursor 让新手也能快速参与到实际项目中。它模糊了初学者和专业开发者之间的界限，让协作变得更加顺畅。这不仅提升了开发效率，更重要的是，它正在让更多人有机会参与到软件创造中。
      </p>

      <p className="mt-8">
        Cursor 不仅仅是一个工具，它代表着编程教育的新范式：更直观、更高效、更平民化。下面我们就开始本期 Cursor 编程的学习之旅。
      </p>
    </article>
  )
} 