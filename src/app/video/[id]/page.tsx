import { videos } from '@/data/videos'
import { notFound } from 'next/navigation'

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