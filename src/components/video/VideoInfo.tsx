import { Music } from 'lucide-react';
import { Video } from '../../types';
import { motion } from 'framer-motion';

interface VideoInfoProps {
  video: Video;
}

export function VideoInfo({ video }: VideoInfoProps) {
  return (
    <motion.div
      className="absolute bottom-20 left-4 right-20 text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-bold mb-2">@{video.creator.username}</h2>
      <p className="text-sm mb-4">{video.description}</p>
      
      <div className="flex items-center gap-2">
        <Music className="w-4 h-4" />
        <span className="text-sm">
          {video.sound.name} - {video.sound.artist}
        </span>
      </div>

      <div className="flex gap-2 mt-2">
        {video.hashtags.map((tag) => (
          <span key={tag} className="text-sm text-primary">
            #{tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}