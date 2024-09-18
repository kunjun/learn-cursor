import { Metadata } from 'next'
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import { marked } from 'marked'

interface PostProps {
  params: {
    slug: string
  }
}

interface Post {
  title: string
  date: string
  excerpt: string
  content: string
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
    }
  } catch {
    return null
  }
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

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.date}</p>
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: marked(post.content) }}
      />
    </div>
  )
}