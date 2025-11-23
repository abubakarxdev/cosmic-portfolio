import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import Earth from './Earth';
import ShootingStars from './ShootingStars';
import * as THREE from 'three';

const CameraController = () => {
  useFrame(({ camera }) => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = scrollY / maxScroll;

    // Advanced Scroll Movement:
    // Y-axis: Move down as before
    // Z-axis: Zoom out slightly
    // X-axis: Sine wave movement to create left-right parallax
    
    // Initial Position (Scroll 0): Camera center, Earth offset to Right (x=2.5)
    // As we scroll, we want the Earth to move across or stay dynamic.
    
    const targetY = -scrollProgress * 4; 
    const targetZ = 5 + scrollProgress * 2;
    
    // Earth starts at x=2.5 (Right). 
    // We move the camera or the object. Let's move the camera to follow a path.
    // Or better, let's keep the camera mostly centered but sway it.
    
    const targetX = Math.sin(scrollProgress * Math.PI * 2) * 2; 
    
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
    
    camera.lookAt(0, targetY, 0);
  });
  return null;
};

const Scene3D = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* Cinematic Lighting - High Fidelity & Bright */}
        <hemisphereLight 
          skyColor={0xffffff} 
          groundColor={0x444444} 
          intensity={2.0} // Much brighter fill
        />
        <directionalLight 
          position={[5, 3, 5]} 
          intensity={6.0} // Intense sunlight
          castShadow 
        />
        <pointLight position={[-5, -2, -5]} intensity={1.5} color="#4b96f3" /> {/* Bright rim fill */}
        
        <CameraController />
        <Suspense fallback={null}>
          <Stars 
            radius={100} 
            depth={50} 
            count={5000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1} 
          />
          <ShootingStars />
          <Earth position={[2.5, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
