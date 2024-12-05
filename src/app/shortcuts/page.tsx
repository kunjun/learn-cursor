'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import { 
  CommandLineIcon, 
  ChatBubbleLeftIcon, 
  KeyIcon, 
  AtSymbolIcon,
  WindowIcon,
  CogIcon
} from '@heroicons/react/24/outline';

interface ShortcutGroup {
  title: string;
  description: string;
  icon: React.ReactNode;
  shortcuts: {
    action: string;
    shortcut: string;
    description?: string;
  }[];
}

export default function Shortcuts() {
  const [selectedOS, setSelectedOS] = useState<'windows' | 'mac'>('windows');
  const [searchTerm, setSearchTerm] = useState('');

  const shortcutGroups: ShortcutGroup[] = [
    {
      title: "Cursor Tab (AI 代码补全)",
      description: "AI 驱动的智能代码补全功能，帮助您更快地编写代码",
      icon: <CommandLineIcon className="h-6 w-6" />,
      shortcuts: [
        { 
          action: "接受建议", 
          shortcut: "Tab",
          description: "接受 AI 提供的完整代码建议"
        },
        { 
          action: "拒绝建议", 
          shortcut: "Esc",
          description: "拒绝当前的 AI 代码建议"
        },
        { 
          action: "部分接受", 
          shortcut: selectedOS === 'windows' ? "Ctrl + →" : "⌘ + →",
          description: "只接受建议的一部分内容"
        },
      ]
    },
    {
      title: "Cmd K (内联编辑)",
      description: "快速进行代码编辑和重构的内联工",
      icon: <CogIcon className="h-6 w-6" />,
      shortcuts: [
        { 
          action: "打开 Cmd K", 
          shortcut: selectedOS === 'windows' ? "Ctrl + K" : "⌘ + K",
          description: "打开内联编辑工具"
        },
        { 
          action: "应用更改", 
          shortcut: selectedOS === 'windows' ? "Ctrl + Enter" : "⌘ + Return",
          description: "确认并应用编辑更改"
        },
        { 
          action: "取消更改", 
          shortcut: selectedOS === 'windows' ? "Ctrl + Backspace" : "⌘ + Delete",
          description: "取消当前的编辑更改"
        },
      ]
    },
    {
      title: "聊天界面",
      description: "与 AI 助手进行实时对话，获取编程帮助",
      icon: <ChatBubbleLeftIcon className="h-6 w-6" />,
      shortcuts: [
        { 
          action: "打开聊天", 
          shortcut: selectedOS === 'windows' ? "Ctrl + L" : "⌘ + L",
          description: "打开 AI 聊天窗口"
        },
        { 
          action: "将代码添加到聊天", 
          shortcut: selectedOS === 'windows' ? "Ctrl + L" : "⌘ + L",
          description: "将选中的代码发送到聊天窗口"
        },
      ]
    },
    {
      title: "Composer",
      description: "强大的 AI 代码生成和编辑工具",
      icon: <WindowIcon className="h-6 w-6" />,
      shortcuts: [
        { 
          action: "打开 Composer", 
          shortcut: selectedOS === 'windows' ? "Ctrl + I" : "⌘ + I",
          description: "打开 Composer 工具窗口"
        },
        { 
          action: "打开全屏 Composer", 
          shortcut: selectedOS === 'windows' ? "Ctrl + Shift + I" : "⌘ + Shift + I",
          description: "以全屏模式打开 Composer"
        },
      ]
    },
    {
      title: "@ 符号命令",
      description: "快速访问和搜索代码库的特殊命令",
      icon: <AtSymbolIcon className="h-6 w-6" />,
      shortcuts: [
        { 
          action: "引用文件", 
          shortcut: "@filename",
          description: "快速引用项目中的文件"
        },
        { 
          action: "引用函数", 
          shortcut: "@functionName",
          description: "引用代码中的函数"
        },
        { 
          action: "引用变量", 
          shortcut: "@variableName",
          description: "引用代码中的变量"
        },
        { 
          action: "搜索代码库", 
          shortcut: "@codebase query",
          description: "在整个代码库中搜索"
        },
        { 
          action: "搜索网络", 
          shortcut: "@web query",
          description: "搜索网络上的相关资源"
        },
      ]
    },
    {
      title: "通用快捷键",
      description: "常用的编辑器操作快捷键",
      icon: <KeyIcon className="h-6 w-6" />,
      shortcuts: [
        { 
          action: "打开命令面板", 
          shortcut: selectedOS === 'windows' ? "Ctrl + Shift + P" : "⌘ + Shift + P",
          description: "访问所有可用的命令"
        },
        { 
          action: "打开设置", 
          shortcut: selectedOS === 'windows' ? "Ctrl + ," : "⌘ + ,",
          description: "打开编辑器设置"
        },
        { 
          action: "切换侧边栏", 
          shortcut: selectedOS === 'windows' ? "Ctrl + B" : "⌘ + B",
          description: "显示/隐藏侧边栏"
        },
        { 
          action: "切换终端", 
          shortcut: selectedOS === 'windows' ? "Ctrl + `" : "⌘ + `",
          description: "显示/隐藏集成终端"
        },
        { 
          action: "新建文件", 
          shortcut: selectedOS === 'windows' ? "Ctrl + N" : "⌘ + N",
          description: "创建新文件"
        },
        { 
          action: "保存文件", 
          shortcut: selectedOS === 'windows' ? "Ctrl + S" : "⌘ + S",
          description: "保存当前文件"
        },
      ]
    }
  ];

  const filteredGroups = shortcutGroups.map(group => ({
    ...group,
    shortcuts: group.shortcuts.filter(
      shortcut => 
        shortcut.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shortcut.description?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(group => group.shortcuts.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb
        items={[
          { label: 'Cursor 快捷键', href: '/shortcuts' }
        ]}
      />
      
      {/* 顶部介绍区域 */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Cursor 键盘快捷键速查表</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              掌握这些快捷键，显著提升您的编程效率。本速查表涵盖了 Cursor 的所有核心功能，
              包括 AI 代码补全、内联编辑、聊天功能等。
            </p>
            
            {/* 操作系统选择 */}
            <div className="mt-8 flex justify-center space-x-4">
              <button
                onClick={() => setSelectedOS('windows')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedOS === 'windows'
                    ? 'bg-white text-blue-600'
                    : 'bg-blue-700 text-white'
                }`}
              >
                Windows / Linux
              </button>
              <button
                onClick={() => setSelectedOS('mac')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedOS === 'mac'
                    ? 'bg-white text-blue-600'
                    : 'bg-blue-700 text-white'
                }`}
              >
                macOS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 搜索栏 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative">
          <input
            type="text"
            placeholder="搜索快捷键..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* 快捷键内容区域 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredGroups.map((group, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-50 px-6 py-4 flex items-center border-b border-gray-200">
                <div className="p-2 bg-blue-100 rounded-lg mr-4">
                  {group.icon}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{group.title}</h2>
                  <p className="text-sm text-gray-600">{group.description}</p>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {group.shortcuts.map((shortcut, idx) => (
                  <div key={idx} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <span className="text-gray-900 font-medium">{shortcut.action}</span>
                        {shortcut.description && (
                          <p className="text-sm text-gray-600">{shortcut.description}</p>
                        )}
                      </div>
                      <code className="px-3 py-1 bg-gray-100 rounded-lg text-gray-800 font-mono text-sm whitespace-nowrap ml-4">
                        {shortcut.shortcut}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 