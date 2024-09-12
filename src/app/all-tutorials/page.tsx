import VideoGrid from '@/components/VideoGrid';
import { videos } from '@/data/videos';

export default function AllTutorials() {
  return (
    <div className="pt-16"> {/* 为固定的header添加顶部内边距 */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Cursor Video Tutorials</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12">
          Explore our comprehensive collection of Cursor tutorials to master the AI-powered code editor
        </p>
        <VideoGrid videos={videos} />
      </div>
    </div>
  );
}