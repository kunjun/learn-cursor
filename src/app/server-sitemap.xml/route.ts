import { getServerSideSitemap } from 'next-sitemap'
import { getPosts } from '@/lib/posts'

interface Post {
  slug: string;
  // 如果 Post 对象还有其他属性，请在这里添加
}

export async function GET() {
  try {
    const posts = await getPosts()
    
    if (!Array.isArray(posts) || posts.length === 0) {
      throw new Error('getPosts 返回的数据不是数组或为空')
    }

    const fields = posts.map((post: Post) => ({
      loc: `https://www.learncursor.com/posts/${post.slug}`,
      lastmod: new Date().toISOString(),
    }))

    const sitemap = await getServerSideSitemap(fields)

    return new Response(sitemap.toString(), {
      headers: {
        'Content-Type': 'application/xml',
      },
    })
  } catch (error) {
    console.error('生成站点地图时出错:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}