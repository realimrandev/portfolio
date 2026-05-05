import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, MeshDistortMaterial, Sphere, PerspectiveCamera, Environment, MeshWobbleMaterial, TorusKnot, Box, Stars } from '@react-three/drei';
import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

function FloatingObjects() {
  const { theme } = useTheme();
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  const ThemeGeometry = useMemo(() => {
    switch (theme) {
      case 'cyber':
        return (
          <Float speed={4} rotationIntensity={2} floatIntensity={2}>
            <Box args={[2, 2, 2]} ref={meshRef}>
              <meshStandardMaterial color="#00FFAA" wireframe />
            </Box>
          </Float>
        );
      case 'royal':
        return (
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <TorusKnot args={[1, 0.3, 128, 16]} ref={meshRef}>
              <meshStandardMaterial color="#FF3E55" roughness={0.1} metalness={0.8} />
            </TorusKnot>
          </Float>
        );
      case 'oceanic':
        return (
          <Float speed={3} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1.5, 64, 64]} ref={meshRef}>
              <MeshWobbleMaterial color="#3E94FF" speed={1.5} factor={0.6} />
            </Sphere>
          </Float>
        );
      default:
        return (
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Sphere args={[1.5, 64, 64]} ref={meshRef}>
              <MeshDistortMaterial
                color="#D4AF37"
                speed={2}
                distort={0.4}
                radius={1}
              />
            </Sphere>
          </Float>
        );
    }
  }, [theme]);

  return (
    <>
      {ThemeGeometry}
      
      {/* Decorative particles based on theme */}
      {[...Array(30)].map((_, i) => (
        <Float key={i} speed={Math.random() + 0.5}>
          <Sphere
            args={[0.02, 16, 16]}
            position={[
              (Math.random() - 0.5) * 12,
              (Math.random() - 0.5) * 12,
              (Math.random() - 0.5) * 6
            ]}
          >
            <meshStandardMaterial 
              color={theme === 'default' ? '#D4AF37' : theme === 'cyber' ? '#00FFAA' : theme === 'royal' ? '#FF3E55' : '#3E94FF'} 
              emissive={theme === 'default' ? '#D4AF37' : theme === 'cyber' ? '#00FFAA' : theme === 'royal' ? '#FF3E55' : '#3E94FF'} 
              emissiveIntensity={2} 
            />
          </Sphere>
        </Float>
      ))}

      {theme === 'cyber' && <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />}
    </>
  );
}

export default function ThreeScene() {
  const { theme } = useTheme();

  return (
    <div className="absolute inset-0 -z-10 transition-colors duration-1000" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color={theme === 'default' ? '#D4AF37' : '#FFFFFF'} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <FloatingObjects />
        
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
