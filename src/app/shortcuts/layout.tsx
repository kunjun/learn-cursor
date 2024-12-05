import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cursor 快捷键大全 | AI代码补全、Cmd K、Composer等核心功能快捷键指南',
  description: 'Cursor IDE 官方快捷键速查手册，包含 AI 代码补全(Tab)、内联编辑(Cmd K)、聊天界面、Composer、@符号命令等核心功能的所有快捷键。适用于 Windows、Linux 和 macOS 系统，助您显著提升编程效率。',
  keywords: [
    'Cursor IDE',
    'Cursor 快捷键',
    'AI 代码补全',
    'Cmd K',
    'Composer',
    'IDE 快捷键',
    '编程效率',
    '代码编辑器',
    'AI 编程助手'
  ].join(', '),
  openGraph: {
    title: 'Cursor IDE 快捷键完全指南 - 提升10倍编程效率',
    description: '最全面的 Cursor 快捷键指南，掌握 AI 代码补全、内联编辑、Composer 等核心功能的快捷键操作，适用于所有主流操作系统。',
    type: 'website',
    locale: 'zh_CN',
  },
  alternates: {
    canonical: '/shortcuts'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function ShortcutsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 