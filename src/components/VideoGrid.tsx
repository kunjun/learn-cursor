import Link from 'next/link'

export interface VideoItem {
  id: string // 添加 id 字段
  title: string
  description: string
  thumbnail: string
  url: string
}

function VideoCard({ video }: { video: VideoItem }) {
  return (
    <Link href={`/video/${video.id}`}>
      <div className="bg-white cursor-pointer relative w-full rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="p-4">
          <div className="relative mb-4 aspect-video">
            <img className="object-cover w-full h-full rounded-lg" src={video.thumbnail} alt={video.title} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black bg-opacity-50 rounded-full p-3 transition-transform duration-300 hover:scale-110">
                <svg className="w-8 h-8" fill="rgb(255, 255, 255)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" fill="rgb(255, 255, 255)" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <h3 className="text-zinc-950 font-semibold text-lg mb-2">{video.title}</h3>
          <p className="text-zinc-500 text-sm line-clamp-2">{video.description}</p>
        </div>
      </div>
    </Link>
  )
}

export default function VideoGrid({ videos }: { videos: VideoItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  )
}