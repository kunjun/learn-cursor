import React from 'react'
import { Navigation } from '@/components/Navigation';
import '@/styles/globals.css'; // 引入您的全局样式
import { CustomSidebar } from '@/components/CustomSidebar';

export default {
  // 主题配置
  project: {
    link: 'https://github.com/geektao/learn-cursors-3.0', // 替换为您的 GitHub 仓库链接
  },
  docsRepositoryBase: 'https://github.com/geektao/learn-cursors-3.0/tree/main/src/docs', // 替换为您的文档仓库链接
  titleSuffix: ' – Cursor 中文文档',
  logo: (
    <>
      <span className="font-extrabold">Cursor</span>
      <span className="ml-2 font-normal">中文文档</span>
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  navigation: false, // 禁用 Nextra 内置的导航栏
  sidebar: {
    component: <CustomSidebar />, // 使用自定义侧边栏组件
  },
  // 确保 navbar 配置被注释或删除
  navbar: {
    component: <Navigation />,
  },
};
