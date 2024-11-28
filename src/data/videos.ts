export type Category = '全部' | '基础教程' | '功能演示' | '实战案例' | '进阶技巧' | 'B站教程';

export const categories: Category[] = ['全部', '基础教程', '功能演示', '实战案例', '进阶技巧', 'B站教程'];

export interface Video {
  id: string;
  url: string;
  title: string;
  description: string;
  platform: 'youtube' | 'bilibili';
  category: Category;
}

export const videos: Video[] = [
  {
    id: '1',
    url: 'https://youtu.be/sKxUEnylsQg',
    title: 'Cursor AI 代码编辑器介绍',
    description: '探索 Cursor AI 的强大功能，了解它如何革新编程体验。',
    platform: 'youtube',
    category: '基础教程'
  },
  {
    id: '2',
    url: 'https://youtu.be/gqUQbjsYZLQ',
    title: 'Cursor 基础功能教程',
    description: '学习 Cursor 的基本操作和核心功能，快速上手 AI 编程。',
    platform: 'youtube',
    category: '基础教程'
  },
  {
    id: '3',
    url: 'https://youtu.be/1CC88QGQiEA',
    title: 'AI 驱动的代码编辑器完整指南',
    description: '深入了解 Cursor 的各项功能，掌握 AI 辅助编程技巧。',
    platform: 'youtube',
    category: '基础教程'
  },
  {
    id: '4',
    url: 'https://youtu.be/yk9lXobJ95E',
    title: 'Cursor AI 功能演示：代码生成',
    description: '通过实例演示 Cursor 如何帮助你快速生成高质量代码。',
    platform: 'youtube',
    category: '功能演示'
  },
  {
    id: '5',
    url: 'https://youtu.be/V9_RzjqCXP8',
    title: 'Cursor 代码解释与重构功能',
    description: '了解 Cursor 如何帮助你理解和优化现有代码。',
    platform: 'youtube',
    category: '功能演示'
  },
  {
    id: '6',
    url: 'https://youtu.be/fv1rkctrEPk',
    title: 'Cursor AI 实时编程助手演示',
    description: '体验 Cursor 的实时编程辅助功能，提高编码效率。',
    platform: 'youtube',
    category: '功能演示'
  },
  {
    id: '7',
    url: 'https://youtu.be/u3wPImWBz7c',
    title: '8分钟搭建 Perplexity 克隆应用',
    description: '使用 Cursor AI 快速构建一个类似 Perplexity 的应用程序。',
    platform: 'youtube',
    category: '实战案例'
  },
  {
    id: '8',
    url: 'https://youtu.be/tjFnifSEEjQ',
    title: 'AI 客服机器人开发教程',
    description: '从零开始，使用 Cursor 开发一个智能客服机器人。',
    platform: 'youtube',
    category: '实战案例'
  },
  {
    id: '9',
    url: 'https://youtu.be/42zmF9ARSWM',
    title: '使用 Cursor 构建现代化 Web 应用',
    description: '完整演示如何使用 Cursor 开发一个功能完善的 Web 应用。',
    platform: 'youtube',
    category: '实战案例'
  },
  {
    id: '10',
    url: 'https://youtu.be/_SN7fqSNThg',
    title: 'Cursor 高级开发技巧',
    description: '掌握 Cursor 的高级特性，提升开发效率。',
    platform: 'youtube',
    category: '进阶技巧'
  },
  {
    id: '11',
    url: 'https://youtu.be/nUTR11D8q08',
    title: 'AI 编程最佳实践指南',
    description: '学习使用 Cursor 进行 AI 辅助开发的最佳实践。',
    platform: 'youtube',
    category: '进阶技巧'
  },
  {
    id: '12',
    url: 'https://youtu.be/oBDdcVaRhUk',
    title: 'Cursor 性能优化技巧',
    description: '了解如何优化 Cursor 的使用，提高开发效率。',
    platform: 'youtube',
    category: '进阶技巧'
  },
  {
    id: 'bilibili-1',
    url: 'https://www.bilibili.com/video/BV1e3t4etExj',
    title: 'Cursor 中文使用教程',
    description: '适合中文用户的 Cursor AI 编程助手完整教程。',
    platform: 'bilibili',
    category: 'B站教程'
  }
];