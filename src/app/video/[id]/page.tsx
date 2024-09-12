import { videos } from '@/data/videos'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export default function VideoPage({ params }: { params: { id: string } }) {
  const video = videos.find(v => v.id === params.id)

  if (!video) {
    notFound()
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
      <div className="aspect-video mb-4">
        <iframe 
          width="100%" 
          height="100%" 
          src={video.url} 
          title={video.title}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-lg">{video.description}</p>
    </div>
  )
}

function getVideoById(id: string) {
  return videos.find(v => v.id === id)
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const video = getVideoById(params.id)
  
  if (!video) {
    return {
      title: 'Video Not Found',
      description: 'The requested Cursor tutorial video could not be found.',
    }
  }

  return {
    title: `${video.title} - Learn Cursor Tutorial`,
    description: `${video.description} Discover how to use Cursor Composer and AI-powered coding features in this comprehensive tutorial.`,
  }
}