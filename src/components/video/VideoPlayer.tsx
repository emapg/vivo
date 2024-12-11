import { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Video } from '../../types';
import { VideoScene } from './VideoScene';
import { VideoInfo } from './VideoInfo';
import { VideoControls } from './VideoControls';

interface VideoPlayerProps {
  video: Video;
  isActive: boolean;
}

export function VideoPlayer({ video, isActive }: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && !isActive) {
      // Handle video becoming active
    }
  }, [inView, isActive]);

  return (
    <motion.div
      ref={containerRef}
      className="w-full h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div ref={inViewRef} className="absolute inset-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <Environment preset="sunset" />
          <VideoScene isActive={isActive} />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
          <EffectComposer>
            <Bloom luminanceThreshold={1} intensity={1.5} />
            <ChromaticAberration offset={[0.002, 0.002]} />
          </EffectComposer>
        </Canvas>
      </div>

      <VideoInfo video={video} />
      <VideoControls
        videoId={video.id}
        likes={video.likes}
        comments={video.comments.length}
        shares={video.shares}
      />
    </motion.div>
  );
}