import VideoStats from '@/components/VideoStats'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

// 这里应该从你的数据源获取视频数据
const getVideoById = (id: string) => {
  const videos = [
    {
      id: 'cursor-settings',
      title: 'Cursor Settings',
      description: 'Learn about the different settings in Cursor and what each of them do to get the best out of it, right from the get go.',
      thumbnail: 'https://videos.cursorcasts.com/thumbnails/settings-thumbnail.jpg',
      url: 'https://videos.cursorcasts.com/videos/settings.mp4'
    },
    {
      id: 'cursor-tab',
      title: 'Cursor Tab',
      description: 'Learn how to use this awesome autocomplete feature across multiple lines, cursor predictions, fixing typos and more.',
      thumbnail: 'https://videos.cursorcasts.com/thumbnails/tab-thumbnail.jpg',
      url: 'https://videos.cursorcasts.com/videos/tab.mp4'
    },
    {
      id: 'cursor-chat',
      title: 'Cursor Chat',
      description: 'Chat with an LLM right in the sidebar, with one click apply of code changes, or running terminal commands.',
      thumbnail: 'https://videos.cursorcasts.com/thumbnails/chat-thumbnail.jpg',
      url: 'https://videos.cursorcasts.com/videos/chat.mp4'
    },
    {
      id: 'cmd-k',
      title: 'Cmd+K',
      description: 'You can use ⌘K to write new, or edit existing, code right in your file, or ask it to explain what the code means.',
      thumbnail: 'https://videos.cursorcasts.com/thumbnails/cmdk-thumbnail.jpg',
      url: 'https://videos.cursorcasts.com/videos/cmd+k.mp4'
    },
    {
      id: 'cursor-composer',
      title: 'Cursor Composer',
      description: 'Composer is like magic. Create full features and make changes across multiple files all at the same time!',
      thumbnail: 'https://videos.cursorcasts.com/thumbnails/composer-thumbnail.jpg',
      url: 'https://videos.cursorcasts.com/videos/composer.mp4'
    },
    {
      id: 'prompt-files',
      title: 'Prompt Files',
      description: 'Using prompt files (or SOPs) you can give the LLM repeatable instructions to easily create new tools or features very quickly.',
      thumbnail: 'https://videos.cursorcasts.com/thumbnails/prompt-files-thumbnail.jpg',
      url: 'https://videos.cursorcasts.com/videos/prompt-files.mp4'
    },
    {
      id: 'composer-projects',
      title: 'Composer Projects',
      description: 'Learn how to create projects to share SOPs and context between Cursor Composers and use them any time you need to work on a specific area of your app.',
      thumbnail: 'https://videos.cursorcasts.com/thumbnails/projects-thumbnail.jpg',
      url: 'https://videos.cursorcasts.com/videos/projects.mp4'
    }
  ]
  return videos.find(video => video.id === id)
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

export default function VideoPage({ params }: { params: { id: string } }) {
  const video = getVideoById(params.id)

  if (!video) {
    notFound()
  }

  // 这里可以从后端API获取初始统计数据
  const initialStats = {
    views: 955,
    hoursWatched: 95.95,
    completions: 169
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
      <p className="text-lg text-gray-700 mb-6">{video.description}</p>
      <div className="relative w-full pb-[56.25%] mb-6"> {/* 16:9 宽高比 */}
        <iframe
          src={`${video.url}?autoplay=true`}
          allow="autoplay; fullscreen"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
        ></iframe>
      </div>
      <VideoStats 
        initialViews={initialStats.views}
        initialHoursWatched={initialStats.hoursWatched}
        initialCompletions={initialStats.completions}
      />
    </div>
  )
}