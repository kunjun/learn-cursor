import { Metadata } from 'next'
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import { marked } from 'marked'
import Link from 'next/link'

interface Post {
  title: string
  date: string
  excerpt: string
  content: string
  slug: string
}

interface PostProps {
  params: {
    slug: string
  }
}

async function getPost(slug: string): Promise<Post | null> {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filePath = path.join(postsDirectory, `${slug}.md`)

  try {
    const fileContents = await fs.readFile(filePath, 'utf-8')
    const { data, content } = matter(fileContents)

    return {
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      content,
      slug,
    }
  } catch {
    return null
  }
}

async function getRelatedPosts(currentSlug: string): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const files = await fs.readdir(postsDirectory)
  const posts: Post[] = []

  for (const file of files) {
    if (file.endsWith('.md')) {
      const slug = file.replace('.md', '')
      if (slug !== currentSlug) {
        const post = await getPost(slug)
        if (post) {
          posts.push(post)
        }
      }
    }
  }

  // 您可以根据实际情况调整相关文章的筛选逻辑
  return posts.slice(0, 3)
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPost(params.slug)
  if (!post) {
    return {
      title: '文章未找到',
      description: '抱歉，您访问的文章不存在。',
    }
  }
  return {
    title: `${post.title} - 您的网站名`,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(params.slug)

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.date}</p>
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: marked(post.content) }}
      />

      {/* 添加灰色横线 */}
      <div className="border-t border-gray-200 mt-12 pt-8">
        <h2 className="text-2xl font-bold mb-4">相关推荐</h2>
        <div className="grid gap-4">
          {relatedPosts.map((relatedPost) => (
            <Link key={relatedPost.slug} href={`/posts/${relatedPost.slug}`}>
              <div className="border border-zinc-200 rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold">
                  {relatedPost.title}
                </h3>
                <p className="text-sm text-gray-500">{relatedPost.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}