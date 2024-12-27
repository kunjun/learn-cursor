import { getPosts } from '@/lib/posts'

export default async function sitemap() {
  const posts = await getPosts()
  
  const postEntries = posts.map((post) => ({
    url: `https://cursor-guide.vercel.com/posts/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const routes = ['', '/docs', '/all-tutorials'].map((route) => ({
    url: `https://cursor-guide.vercel.com${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  }))

  return [...routes, ...postEntries]
} 