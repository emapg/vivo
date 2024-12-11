import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { useVideoStore } from '../store/videoStore';

interface VideoControlsProps {
  videoId: string;
  likes: number;
  comments: number;
  shares: number;
}

export function VideoControls({ videoId, likes, comments, shares }: VideoControlsProps) {
  const likeVideo = useVideoStore((state) => state.likeVideo);

  return (
    <div className="absolute right-4 bottom-20 flex flex-col gap-4">
      <button
        onClick={() => likeVideo(videoId)}
        className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
      >
        <Heart className="w-6 h-6 text-white" />
        <span className="text-white text-sm">{likes}</span>
      </button>
      
      <button className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="text-white text-sm">{comments}</span>
      </button>
      
      <button className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
        <Share2 className="w-6 h-6 text-white" />
        <span className="text-white text-sm">{shares}</span>
      </button>
    </div>
  );
}