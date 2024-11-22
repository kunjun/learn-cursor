'use client'

import Link from 'next/link'
import Image from 'next/image'

interface Post {
  slug: string
  coverImage: string
  title: string
  category: string
  excerpt: string
  tags: string[]
  date: string
}

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link 
      href={`/posts/${post.slug}`}
      className="group block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative">
        <Image
          src={post.coverImage}
          alt={post.title}
          width={250}
          height={140}
          className="object-cover w-full h-[140px] rounded-t-lg"
          priority
        />
      </div>
      
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 line-clamp-2 h-[3.5rem] group-hover:text-blue-600 transition-colors">{post.title}</h2>
        <p className="line-clamp-3 text-gray-600 mt-2">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-sm bg-gray-100 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </Link>
  )
} 