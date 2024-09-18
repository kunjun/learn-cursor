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
      <h1 className="text-3xl font-bold text-center mb-4">博客文章列表</h1>
      <p className="text-lg text-center mb-6">
        欢迎阅读我的博客，这里分享技术文章和心得。
      </p>
      <ul className="space-y-6">
        {visiblePosts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/posts/${post.slug}`}
              className="text-2xl font-semibold text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">
              {post.date} • {post.views} 次阅读
            </p>
            <p className="text-base text-gray-700">{post.excerpt}</p>
          </li>
        ))}
      </ul>
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