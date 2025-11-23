import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Planet = (props) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.1;
    }
  });

  return (
    <group {...props}>
      {/* Core Planet */}
      <Sphere args={[1.5, 64, 64]} ref={meshRef}>
        <MeshDistortMaterial
          color="#4c1d95"
          emissive="#5b21b6"
          emissiveIntensity={0.5}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.9}
        />
      </Sphere>
      
      {/* Cloud Layer */}
      <Sphere args={[1.55, 64, 64]}>
        <meshStandardMaterial
          color="#a78bfa"
          transparent
          opacity={0.3}
          depthWrite={false}
          side={2}
        />
      </Sphere>
      
      {/* Atmosphere Glow */}
      <Sphere args={[1.7, 64, 64]}>
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.15}
          side={1} // BackSide
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
    </group>
  );
};

export default Planet;
