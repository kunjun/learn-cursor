import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  views: number
}

async function getPosts(): Promise<Post[]> {
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
          console.log(`正在处理文件: ${filename}`)
          console.log('解析出的 Front Matter 数据:', data)
          if (!data.title || !data.date) {
            console.warn(`文件 ${filename} 缺少标题或日期。`)
          }
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

export default async function PostsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
  const page = parseInt(searchParams.page) || 1
  const postsPerPage = 20
  const allPosts = await getPosts()
  const startIndex = 0
  const endIndex = page * postsPerPage
  const visiblePosts = allPosts.slice(startIndex, endIndex)
  const hasMore = endIndex < allPosts.length

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-4">博客文章</h1>
      <p className="text-lg text-center mb-6">
      发现更多Cursor教程，技巧提示、视频指南和核心功能，提升您的编码技能。
      </p>
      <div className="space-y-6">
        {visiblePosts.map((post) => (
          <div
            key={post.slug}
            className="flex flex-col border-2 border-zinc-200 rounded-lg p-4 gap-4 bg-white hover:shadow-md transition-shadow"
          >
            <Link href={`/posts/${post.slug}`}>
              <h3 className="text-xl font-bold hover:underline">
                {post.title}
              </h3>
              <p className="text-sm text-zinc-400 mt-2">{post.excerpt}</p>
            </Link>
            <div className="flex items-center gap-2 mt-2">
              <div className="text-xs text-zinc-500">{post.date}</div>
              <div className="text-xs text-zinc-500">
                • {post.views} 次阅读
              </div>
            </div>
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="flex justify-center mt-6">
          <Link
            href={`/posts?page=${page + 1}`}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            加载更多
          </Link>
        </div>
      )}
    </div>
  )
}