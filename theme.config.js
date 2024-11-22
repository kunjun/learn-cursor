import React from 'react'
import { Navigation } from '@/components/Navigation';
import '@/styles/globals.css'; // 引入您的全局样式
import { CustomSidebar } from '@/components/CustomSidebar';
import { useRouter } from 'next/router'

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
  useNextSeoProps() {
    const { asPath } = useRouter()
    
    // 基础 SEO 配置
    const defaultSEO = {
      openGraph: {
        type: 'website',
        locale: 'zh_CN',
        url: 'https://www.learn-cursor.com',
        siteName: 'Cursor中文文档',
      },
      twitter: {
        handle: '@cursor',
        site: '@cursor',
        cardType: 'summary_large_image',
      },
      additionalMetaTags: [
        {
          name: 'application-name',
          content: 'Cursor中文文档'
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes'
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'default'
        },
        {
          name: 'apple-mobile-web-app-title',
          content: 'Cursor中文文档'
        },
        {
          name: 'format-detection',
          content: 'telephone=no'
        }
      ]
    }

    // 首页使用特殊配置
    if (asPath === '/') {
      return {
        ...defaultSEO,
        title: 'Cursor教程 - Cursor Composer、IDE和AI代码编辑器的教程。大量文章和视频指南提升您的编码技能',
  description:
    '学习 Cursor 提供了 Cursor Composer 的全面教程，这是 Cursor IDE 和 AI 代码编辑器的核心功能。发现专家提示、视频指南和核心功能，提升您的编码技能。立即访问，掌握 Cursor，提升您的编程效率。',
      }
    }

    // 其他页面添加后缀
    return {
      ...defaultSEO,
      titleTemplate: '%s - Cursor中文文档'
    }
  }
};