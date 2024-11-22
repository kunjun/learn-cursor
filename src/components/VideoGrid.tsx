'use client';

import { useState, useEffect } from 'react'

export interface VideoItem {
  id: string
  url: string
  platform: 'youtube' | 'bilibili'
  category: string
}

interface VideoMetadata {
  title: string
  description: string
  author: {
    name: string
    avatar: string
  }
}

// 提取视频ID的工具函数
function getVideoId(url: string, platform: string) {
  if (platform === 'youtube') {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    return match ? match[1] : '';
  } else if (platform === 'bilibili') {
    const match = url.match(/(?:bilibili\.com\/video\/)([^?/]+)/);
    return match ? match[1] : '';
  }
  return '';
}

// 获取视频元数据的函数
const fetchVideoMetadata = async (videoId: string, platform: string): Promise<VideoMetadata> => {
  if (!videoId) {
    throw new Error('Video ID is required');
  }

  try {
    if (platform === 'youtube') {
      // 检查是否有 API Key
      if (!process.env.NEXT_PUBLIC_YOUTUBE_API_KEY) {
        console.error('YouTube API Key is not configured');
        throw new Error('YouTube API Key is missing');
      }

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch YouTube data');
      }

      const data = await response.json();
      
      if (!data.items?.[0]?.snippet) {
        throw new Error('Invalid YouTube response');
      }

      const snippet = data.items[0].snippet;
      return {
        title: snippet.title,
        description: snippet.description,
        author: {
          name: snippet.channelTitle,
          avatar: snippet.thumbnails?.default?.url || '/default-avatar.png'
        }
      };
    } else if (platform === 'bilibili') {
      const response = await fetch(
        `/api/bilibili?videoId=${videoId}` // 建议通过后端API代理请求
      );

      if (!response.ok) {
        throw new Error('Failed to fetch Bilibili data');
      }

      const data = await response.json();
      
      if (!data.data) {
        throw new Error('Invalid Bilibili response');
      }

      const info = data.data;
      return {
        title: info.title,
        description: info.desc,
        author: {
          name: info.owner.name,
          avatar: info.owner.face
        }
      };
    }

    throw new Error(`Unsupported platform: ${platform}`);
  } catch (error) {
    console.error('Error fetching video metadata:', error);
    // 返回默认值
    return {
      title: 'Video Title',
      description: 'Video Description',
      author: {
        name: 'Author',
        avatar: '/default-avatar.png'
      }
    };
  }
};

function VideoCard({ video }: { video: VideoItem }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [metadata, setMetadata] = useState<VideoMetadata | null>(null);
  const videoId = getVideoId(video.url, video.platform);

  useEffect(() => {
    let isMounted = true;

    const loadMetadata = async () => {
      try {
        const data = await fetchVideoMetadata(videoId, video.platform);
        if (isMounted) {
          setMetadata(data);
        }
      } catch (err) {
        console.error('Error loading video metadata:', err);
      }
    };

    loadMetadata();

    return () => {
      isMounted = false;
    };
  }, [videoId, video.platform]);

  const renderVideoEmbed = () => {
    if (!isPlaying) return null;

    switch (video.platform) {
      case 'youtube':
        return (
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={metadata?.title || 'Video'}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        );
      case 'bilibili':
        return (
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg"
            src={`//player.bilibili.com/player.html?bvid=${videoId}&page=1&high_quality=1&danmaku=0`}
            title={metadata?.title || 'Video'}
            frameBorder="0"
            scrolling="no"
            allowFullScreen
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="p-4">
        {/* 视频预览/播放区域 */}
        <div className="relative mb-4 aspect-video rounded-lg overflow-hidden group">
          {!isPlaying ? (
            <>
              {/* 视频缩略图 */}
              <img 
                className="object-cover w-full h-full rounded-lg transform group-hover:scale-105 transition-transform duration-300" 
                src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
                alt={metadata?.title || 'Video thumbnail'} 
              />
              {/* 播放按钮 */}
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"
                aria-label="播放视频"
              >
                <div className="bg-red-600 rounded-full p-4 transform hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </button>
            </>
          ) : (
            renderVideoEmbed()
          )}
        </div>

        {/* 视频信息区域 */}
        {metadata && (
          <div className="flex space-x-3 p-2">
            <img 
              className="w-10 h-10 rounded-full flex-shrink-0"
              src={metadata.author.avatar} 
              alt={metadata.author.name} 
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-zinc-950 font-semibold text-lg mb-1 line-clamp-2 break-words">
                {metadata.title}
              </h3>
              <div className="flex items-center text-sm text-zinc-500 mb-1">
                <span className="truncate">{metadata.author.name}</span>
              </div>
              <p className="text-zinc-500 text-sm mt-2 line-clamp-2 break-words">
                {metadata.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function VideoGrid({ videos }: { videos: VideoItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}