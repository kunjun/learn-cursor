import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  views: number
}

export async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'posts')
  try {
    const filenames = await fs.readdir(postsDirectory)
    const posts = await Promise.all(
      filenames
        .filter((filename) => filename.endsWith('.md'))
        .map(async (filename) => {
          const filePath = path.join(postsDirectory, filename)
          const fileContents = await fs.readFile(filePath, 'utf-8')
          const { data } = matter(fileContents)
          return {
            slug: filename.replace('.md', ''),
            title: data.title || '无标题',
            date: data.date || '无日期',
            excerpt: data.excerpt || '',
            views: data.views || 0,
          }
        })
    )
    // 按日期降序排序
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return posts
  } catch (error) {
    console.error('读取文章出错:', error)
    return []
  }
}
