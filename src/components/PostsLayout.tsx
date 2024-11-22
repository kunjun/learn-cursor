'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Sidebar } from './Sidebar'
import { PostCard } from '@/components/PostCard'

interface Post {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  author: {
    name: string
    image: string
  }
  category: string
  tags: string[]
  image: string
}

interface PostsLayoutProps {
  initialPosts: Post[]
  categories: string[]
  tags: string[]
}

export default function PostsLayout({ 
  initialPosts,
  categories,
  tags 
}: PostsLayoutProps) {
  const [posts, setPosts] = useState(initialPosts)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [page, setPage] = useState(2) // 从第2页开始，因为第1页是初始数据
  const [loading, setLoading] = useState(false)

  // 加载更多文章
  const loadMorePosts = async () => {
    if (loading) return
    setLoading(true)
    try {
      const params = new URLSearchParams({
        page: String(page),
        category: selectedCategory,
        tags: selectedTags.join(','),
        search: searchTerm
      })
      const response = await fetch(`/api/posts?${params}`)
      const newPosts = await response.json()
      setPosts(prev => [...prev, ...newPosts])
      setPage(prev => prev + 1)
    } catch (error) {
      console.error('加载更多文章失败:', error)
    }
    setLoading(false)
  }

  // 无限滚动
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        loadMorePosts()
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loading, selectedCategory, selectedTags, searchTerm])

  return (
    <div className="flex min-h-screen">
      <Sidebar
        categories={categories}
        tags={tags}
        selectedCategory={selectedCategory}
        selectedTags={selectedTags}
        searchTerm={searchTerm}
        onCategoryChange={setSelectedCategory}
        onTagsChange={setSelectedTags}
        onSearchChange={setSearchTerm}
      />
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <PostCard 
              key={post.id}
              post={{
                slug: post.id,
                title: post.title,
                excerpt: post.excerpt,
                date: post.date,
                category: post.category,
                tags: post.tags,
                coverImage: post.image || '/images/default-cover.jpg'
              }} 
            />
          ))}
        </div>
        {loading && (
          <div className="text-center py-4">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent"></div>
          </div>
        )}
      </main>
    </div>
  )
} 