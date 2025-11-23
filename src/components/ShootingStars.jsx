import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Trail } from '@react-three/drei';
import * as THREE from 'three';

const ShootingStar = ({ position }) => {
  const ref = useRef();
  const speed = useRef(Math.random() * 0.5 + 0.5);
  const offset = useRef(Math.random() * 100);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed.current + offset.current;
    // Move diagonally across the screen
    const x = (t % 10) * 10 - 50; // Move from left to right
    const y = -(t % 10) * 5 + 25; // Move from top to bottom
    
    if (ref.current) {
      ref.current.position.set(x, y, -10);
    }
  });

  return (
    <Trail width={2} length={8} color="#ffffff" attenuation={(t) => t * t}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </mesh>
    </Trail>
  );
};

const ShootingStars = () => {
  // Create a few shooting stars with random starting positions
  const stars = Array.from({ length: 5 }).map((_, i) => (
    <ShootingStar key={i} position={[0, 0, 0]} />
  ));

  return <group>{stars}</group>;
};

export default ShootingStars;
