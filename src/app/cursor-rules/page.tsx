import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { BookOpenIcon, CommandLineIcon, CogIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

// 添加 metadata 导出
export const metadata: Metadata = {
  title: 'Cursor rules 规则指南 | 自定义 AI 编码助手规则',
  description: '学习如何配置和使用 Cursor rules，让 AI 助手完全理解您的编码风格和项目需求，提供更精准的代码建议和更智能的编程辅助。',
  openGraph: {
    title: 'Cursor 规则指南 | 自定义 AI 编码助手规则',
    description: '学习如何配置和使用 Cursor 规则，让 AI 助手完全理解您的编码风格和项目需求。',
  },
};

export default function CursorRules() {
  const features = [
    {
      title: "智能代码生成",
      description: "通过自然语言描述，让 AI 生成符合您团队规范的代码",
      icon: <CommandLineIcon className="h-6 w-6" />,
      examples: [
        "生成符合 TypeScript 规范的 React 组件",
        "创建遵循 REST API 最佳实践的接口",
        "编写符合测试规范的单元测试"
      ]
    },
    {
      title: "代码重构建议",
      description: "获取符合项目规范的代码优化和重构建议",
      icon: <CogIcon className="h-6 w-6" />,
      examples: [
        "将类组件重构为函数组件",
        "优化性能并添加适当的类型注解",
        "提取重复代码为可复用函数"
      ]
    },
    {
      title: "文档生成",
      description: "自动生成符合团队标准的代码文档和注释",
      icon: <DocumentTextIcon className="h-6 w-6" />,
      examples: [
        "生成 JSDoc 风格的函数文档",
        "创建符合规范的 README 文件",
        "添加符合要求的代码注释"
      ]
    },
    {
      title: "编码规范检查",
      description: "实时检查并提供符合团队规范的改进建议",
      icon: <BookOpenIcon className="h-6 w-6" />,
      examples: [
        "检查代码风格是否符合规范",
        "验证命名约定的正确性",
        "确保代码结构符合最佳实践"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb
        items={[
          { label: 'Cursor 规则', href: '/cursor-rules' }
        ]}
      />
      
      {/* 顶部介绍区域 */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Cursor rules 规则指南</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              通过自定义规则，让 AI 助手完全理解您的编码风格和项目需求，
              提供更精准的代码建议和更智能的编程辅助。
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 规则类型说明 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">规则类型</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <CogIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">全局规则</h3>
              </div>
              <p className="text-gray-600 mb-4">
                在 Cursor 设置中配置，适用于所有项目的通用规则：
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  通过设置 {'>'} 偏好设置 {'>'} AI 规则进行配置
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  定义默认的代码风格和格式要求
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  设置通用的文档和注释规范
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <DocumentTextIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">项目规则</h3>
              </div>
              <p className="text-gray-600 mb-4">
                在项目根目录的 .cursorrules 文件中定义，仅适用于特定项目：
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  项目特定的代码规范和最佳实践
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  团队约定的命名规则和架构要求
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  项目相关的文档模板和格式
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* AI 功能展示 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">AI 助手功能</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 rounded-full p-3 mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">示例指令：</h4>
                  <ul className="space-y-2">
                    {feature.examples.map((example, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-center">
                        <span className="mr-2 text-indigo-500">→</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 规则示例 */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Cursor rules 规则配置示例</h2>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="bg-gray-50 rounded-lg p-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                <code>{`# Cursor 项目规则示例
# 文件名: .cursorrules

## 代码风格
- 使用 TypeScript 严格模式
- 优先使用函数式组件和 Hooks
- 遵循 ESLint 和 Prettier 配置

## 命名规范
- 组件使用 PascalCase
- 函数和变量使用 camelCase
- 常量使用 UPPER_SNAKE_CASE
- 类型和接口使用 PascalCase

## 文件组织
- 按功能模块组织文件
- 组件放在 components 目录
- 工具函数放在 utils 目录
- 类型定义放在 types 目录

## 测试规范
- 使用 Jest 和 React Testing Library
- 测试文件使用 .test.ts(x) 后缀
- 测试覆盖率要求 > 80%

## 文档要求
- 所有函数必须有 JSDoc 注释
- 复杂组件需要添加使用示例
- README 需包含安装和使用说明

## Git 提交规范
- 使用约定式提交信息
- 每个提交只做一件事
- 提交前进行代码审查`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* 在最后添加使用步骤部分 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">如何创建和使用 Cursor 规则</h2>
        
        <div className="grid gap-8">
          {/* 步骤 1 */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl font-bold">
                  1
                </span>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold mb-4">创建 .cursorrules 文件</h3>
                <p className="text-gray-600 mb-4">在项目根目录录中创建一个名为 .cursorrules 的文件。</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">操作步骤：</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <span className="mr-2 text-blue-500">→</span>
                      打开项目根目录
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="mr-2 text-blue-500">→</span>
                      创建新文件并命名为 .cursorrules
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="mr-2 text-blue-500">→</span>
                      确保文件名前有英文句点(.)
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="mr-2 text-blue-500">→</span>
                      文件不需要扩展名
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 步骤 2 */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl font-bold">
                  2
                </span>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold mb-4">定义您的规则</h3>
                <p className="text-gray-600 mb-4">使用适当的语法编写您的 Cursor 规则。</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">编写要点：</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <span className="mr-2 text-blue-500">→</span>
                      使用清晰的语言描述规则
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="mr-2 text-blue-500">→</span>
                      按照功能模块组织规则
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="mr-2 text-blue-500">→</span>
                      添加具体的代码示例
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="mr-2 text-blue-500">→</span>
                      包含必要的注释说明
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 步骤 3 */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl font-bold">
                  3
                </span>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold mb-4">开始编码</h3>
                <p className="text-gray-600 mb-4">Cursor 将在您编写代码时自动应用您的规则。</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">使用步骤：</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <span className="mr-2 text-blue-500">→</span>
                      保存 .cursorrules 文件
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="mr-2 text-blue-500">→</span>
                      重启 Cursor 编辑器
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="mr-2 text-blue-500">→</span>
                      开始编写代码
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="mr-2 text-blue-500">→</span>
                      观察 AI 助手的响应
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 补充说明 */}
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">使用提示</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </span>
                <div>
                  <p className="text-blue-800">规则文件会立即生效</p>
                  <p className="text-blue-600 text-sm mt-1">保存文件后，Cursor 会自动加载新的规则设置</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </span>
                <div>
                  <p className="text-blue-800">规则可以随时更新</p>
                  <p className="text-blue-600 text-sm mt-1">您可以根据需要随时修改规则文件内容</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </span>
                <div>
                  <p className="text-blue-800">支持多个项目</p>
                  <p className="text-blue-600 text-sm mt-1">每个项目可以有自己的规则文件</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 