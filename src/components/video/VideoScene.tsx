import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

interface VideoSceneProps {
  isActive: boolean;
}

export function VideoScene({ isActive }: VideoSceneProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current && isActive) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  const { scale } = useSpring({
    scale: isActive ? 1.2 : 1,
    config: { tension: 100, friction: 10 },
  });

  return (
    <group>
      <animated.mesh ref={meshRef} scale={scale}>
        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
        <meshStandardMaterial
          color="#ff0080"
          metalness={0.5}
          roughness={0.2}
          emissive="#ff0080"
          emissiveIntensity={0.5}
        />
      </animated.mesh>
    </group>
  );
}