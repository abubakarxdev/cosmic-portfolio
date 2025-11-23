import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Sphere, useTexture } from '@react-three/drei';
import * as THREE from 'three';

import EarthDayMap from '../assets/earth_daymap.jpg';
import EarthNormalMap from '../assets/earth_normal.jpg';
import EarthSpecularMap from '../assets/earth_specular.jpg';
import EarthCloudsMap from '../assets/earth_clouds.png';

const Earth = (props) => {
  const earthRef = useRef();
  const cloudsRef = useRef();
  const groupRef = useRef();

  const [colorMap, normalMap, specularMap, cloudsMap] = useTexture([
    EarthDayMap,
    EarthNormalMap,
    EarthSpecularMap,
    EarthCloudsMap,
  ]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Rotate the entire group to simulate day/night cycle
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.05;
    }
    // Clouds rotate slightly faster relative to Earth
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = time * 0.02; 
    }
  });

  return (
    <group {...props}>
      {/* Tilt the Earth axis by 23.5 degrees */}
      <group ref={groupRef} rotation={[0, 0, 23.5 * (Math.PI / 180)]}>
        
        {/* Earth Sphere */}
        <mesh ref={earthRef}>
          <sphereGeometry args={[1.5, 64, 64]} />
          <meshPhongMaterial
            map={colorMap}
            normalMap={normalMap}
            normalScale={[2, 2]}
            specularMap={specularMap}
            specular={new THREE.Color(0x666666)}
            shininess={30}
            emissive={new THREE.Color(0x111111)} // Slight self-illumination to prevent pitch black shadows
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Cloud Layer */}
        <mesh ref={cloudsRef}>
          <sphereGeometry args={[1.53, 64, 64]} />
          <meshStandardMaterial
            map={cloudsMap}
            transparent
            opacity={0.9} // More visible clouds
            depthWrite={false}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Atmosphere Glow (Fresnel Shader) */}
        <mesh>
          <sphereGeometry args={[1.65, 64, 64]} />
          <shaderMaterial
            transparent
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
            uniforms={{
              color: { value: new THREE.Color('#4b96f3') },
              viewVector: { value: new THREE.Vector3(0, 0, 1) }
            }}
            vertexShader={`
              varying vec3 vNormal;
              void main() {
                vNormal = normalize(normalMatrix * normal);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `}
            fragmentShader={`
              uniform vec3 color;
              varying vec3 vNormal;
              void main() {
                // Thinner, sharper rim
                float intensity = pow(0.55 - dot(vNormal, vec3(0, 0, 1.0)), 7.0);
                gl_FragColor = vec4(color, 1.0) * intensity * 2.0;
              }
            `}
          />
        </mesh>
      </group>
    </group>
  );
};

export default Earth;
