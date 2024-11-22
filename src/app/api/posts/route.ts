import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const postsPerPage = 12

  try {
    const postsDirectory = path.join(process.cwd(), 'posts')
    const filenames = await fs.readdir(postsDirectory)
    
    const posts = await Promise.all(
      filenames
        .filter(filename => filename.endsWith('.md'))
        .map(async filename => {
          const filePath = path.join(postsDirectory, filename)
          const fileContents = await fs.readFile(filePath, 'utf-8')
          const { data, excerpt } = matter(fileContents)
          
          return {
            id: filename.replace('.md', ''),
            title: data.title,
            date: data.date,
            excerpt: data.excerpt || excerpt,
            category: data.category || '未分类',
            tags: data.tags || [],
            image: data.coverImage || '/images/default-cover.jpg',
            author: {
              name: data.author?.name || 'Anonymous',
              image: data.author?.image || '/images/default-avatar.jpg'
            }
          }
        })
    )

    // 分页
    const start = (page - 1) * postsPerPage
    const end = start + postsPerPage
    const paginatedPosts = posts.slice(start, end)

    return NextResponse.json(paginatedPosts)
  } catch (error) {
    console.error('获取文章列表失败:', error)
    return NextResponse.json({ error: '获取文章列表失败' }, { status: 500 })
  }
} 