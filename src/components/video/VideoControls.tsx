import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { useVideoStore } from '../../store/videoStore';
import { Button } from '../ui/Button';

interface VideoControlsProps {
  videoId: string;
  likes: number;
  comments: number;
  shares: number;
}

export function VideoControls({
  videoId,
  likes,
  comments,
  shares,
}: VideoControlsProps) {
  const { likeVideo, shareVideo } = useVideoStore();

  const controls = [
    { icon: Heart, label: likes, action: () => likeVideo(videoId) },
    { icon: MessageCircle, label: comments },
    { icon: Share2, label: shares, action: () => shareVideo(videoId) },
    { icon: Bookmark, label: 'Save' },
  ];

  return (
    <motion.div
      className="absolute right-4 bottom-20 flex flex-col gap-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      {controls.map(({ icon: Icon, label, action }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 * index }}
        >
          <Button
            variant="secondary"
            onClick={action}
            className="flex flex-col items-center gap-1 p-3"
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs font-medium">{label}</span>
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
}