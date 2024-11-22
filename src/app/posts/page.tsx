import { Metadata } from 'next'
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import PostsLayout from '@/components/PostsLayout'

// SEO元数据
export const metadata: Metadata = {
  title: '博客文章列表 - Cursor中文文档',
  description: '发现更多Cursor教程，技巧提示、视频指南和核心功能，提升您的编码技能。',
}

// 服务器端获取初始文章列表
async function getInitialPosts() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  try {
    const filenames = await fs.readdir(postsDirectory)
    const posts = await Promise.all(
      filenames
        .filter(filename => filename.endsWith('.md'))
        .slice(0, 12) // 初始加载12篇文章
        .map(async filename => {
          const filePath = path.join(postsDirectory, filename)
          const fileContents = await fs.readFile(filePath, 'utf-8')
          const { data } = matter(fileContents)
          
          console.log('Post image path:', data.coverImage)
          
          return {
            slug: filename.replace('.md', ''),
            title: data.title,
            date: data.date,
            excerpt: data.excerpt,
            coverImage: data.coverImage || '/images/default-cover.jpg',
            category: data.category || '未分类',
            tags: data.tags || []
          }
        })
    )
    return posts
  } catch (error) {
    console.error('获取文章列表失败:', error)
    return []
  }
}

// 获取所有分类和标签
async function getMetadata() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = await fs.readdir(postsDirectory)
  const allTags = new Set<string>()
  const allCategories = new Set<string>()

  await Promise.all(
    filenames.map(async filename => {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = await fs.readFile(filePath, 'utf-8')
      const { data } = matter(fileContents)
      
      if (data.category) allCategories.add(data.category)
      if (data.tags) data.tags.forEach((tag: string) => allTags.add(tag))
    })
  )

  return {
    categories: Array.from(allCategories),
    tags: Array.from(allTags)
  }
}

export default async function PostsPage() {
  // 服务器端获取初始数据
  const initialPosts = await getInitialPosts()
  const { categories, tags } = await getMetadata()

  return (
    <PostsLayout 
      initialPosts={initialPosts.map(post => ({
        ...post,
        id: post.slug, // 使用slug作为id
        content: '', // 添加空content
        image: post.coverImage, // 添加image字段
        author: {  // 添加默认author
          name: 'Admin',
          image: '/default-avatar.jpg',
          picture: '/default-avatar.jpg'
        }
      }))}
      categories={categories}
      tags={tags}
    />
  )
}