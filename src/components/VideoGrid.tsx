'use client';

import { useState, useEffect } from 'react'

export interface VideoItem {
  id: string
  url: string
  title: string
  description: string
  platform: 'youtube' | 'bilibili'
  category: string
}

// 提取视频ID的工具函数
function getVideoId(url: string, platform: string) {
  if (platform === 'youtube') {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    return match ? match[1] : '';
  } else if (platform === 'bilibili') {
    const bvMatch = url.match(/(?:bilibili\.com\/video\/)([A-Za-z0-9]+)/);
    return bvMatch ? bvMatch[1] : '';
  }
  return '';
}

function VideoCard({ video }: { video: VideoItem }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const videoId = getVideoId(video.url, video.platform);

  useEffect(() => {
    if (video.platform === 'bilibili') {
      fetch(`/api/bilibili/thumbnail?videoId=${videoId}`)
        .then(res => res.json())
        .then(data => {
          if (data.pic) {
            setThumbnailUrl(data.pic);
          }
        })
        .catch(err => {
          console.error('Error fetching bilibili thumbnail:', err);
        });
    }
  }, [video.platform, videoId]);

  const renderVideoEmbed = () => {
    if (!isPlaying) return null;

    switch (video.platform) {
      case 'youtube':
        return (
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        );
      case 'bilibili':
        return (
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg"
            src={`//player.bilibili.com/player.html?bvid=${videoId}&page=1&high_quality=1&danmaku=0`}
            title={video.title}
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
    <div className="group cursor-pointer">
      <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-gray-100">
        {!isPlaying ? (
          <>
            <img 
              className="object-cover w-full h-full rounded-lg transform group-hover:scale-105 transition-all duration-500 ease-out" 
              src={video.platform === 'youtube' 
                ? `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
                : thumbnailUrl || '/placeholder-thumbnail.jpg'}
              alt={video.title} 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 ease-out" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => setIsPlaying(true)}
                className="transform group-hover:scale-110 transition-all duration-500 ease-out"
                aria-label="播放视频"
              >
                <div className="relative w-24 h-24 flex items-center justify-center">
                  {/* 最外层光晕 */}
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-xl transform scale-110 group-hover:scale-125 transition-all duration-500" />
                  
                  {/* 中间光晕 */}
                  <div className="absolute inset-2 bg-white/15 rounded-full blur-lg transform scale-105 group-hover:scale-120 transition-all duration-500" />
                  
                  {/* 主按钮容器 */}
                  <div className="relative w-16 h-16">
                    {/* 按钮背景 */}
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-full shadow-[0_0_15px_rgba(0,0,0,0.2)] transform group-hover:scale-105 transition-all duration-300" />
                    
                    {/* 内部渐变边框 */}
                    <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-white/30 to-white/10" />
                    
                    {/* 内部阴影效果 */}
                    <div className="absolute inset-[2px] rounded-full shadow-inner" />
                    
                    {/* 播放图标容器 */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* 播放图标 */}
                      <svg 
                        className="w-7 h-7 text-white drop-shadow-lg transform translate-x-0.5 group-hover:scale-110 transition-transform duration-300" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M8 5.14v14l11-7-11-7z" />
                      </svg>
                    </div>
                    
                    {/* 悬停时的光晕动画 */}
                    <div className="absolute -inset-4 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 animate-pulse" />
                  </div>
                </div>
              </button>
            </div>
            <div className="absolute bottom-3 right-3 px-2.5 py-1.5 bg-white/90 backdrop-blur-sm rounded-md text-sm font-medium text-gray-800 shadow-sm transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
              {video.platform === 'youtube' ? 'YouTube' : 'Bilibili'}
            </div>
          </>
        ) : (
          renderVideoEmbed()
        )}
      </div>

      <div className="space-y-2 transform group-hover:translate-x-1 transition-transform duration-300 ease-out">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {video.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">
          {video.description}
        </p>
      </div>
    </div>
  );
}

interface VideoGridProps {
  videos: VideoItem[]
}

export default function VideoGrid({ videos }: VideoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}