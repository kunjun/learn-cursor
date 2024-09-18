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
      content,
    }
  } catch {
    return null
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