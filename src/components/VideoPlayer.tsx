import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Video } from '../types/video';

interface VideoPlayerProps {
  video: Video;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  );
}

export function VideoPlayer({ video }: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="w-full h-screen">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <Scene />
        <OrbitControls enableZoom={false} />
        <EffectComposer>
          <Bloom luminanceThreshold={1} intensity={1.5} />
        </EffectComposer>
      </Canvas>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <h2 className="text-white text-lg font-bold">{video.title}</h2>
        <p className="text-white/80">{video.description}</p>
      </div>
    </div>
  );
}