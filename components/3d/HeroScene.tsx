'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Ring, Stars } from '@react-three/drei';
import * as THREE from 'three';

function FloatingOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[1.2, 64, 64]}>
        <MeshDistortMaterial
          color="#00ff41"
          emissive="#00ff41"
          emissiveIntensity={0.4}
          distort={0.4}
          speed={3}
          wireframe
          transparent
          opacity={0.6}
        />
      </Sphere>
    </Float>
  );
}

function ParticleField() {
  const count = 800;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);
  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.04;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#00d4ff" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function GridPlane() {
  const gridRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (gridRef.current) {
      (gridRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.15 + Math.sin(clock.getElapsedTime()) * 0.05;
    }
  });
  return (
    <mesh ref={gridRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
      <planeGeometry args={[30, 30, 30, 30]} />
      <meshBasicMaterial color="#00ff41" wireframe transparent opacity={0.15} />
    </mesh>
  );
}

function Rings() {
  const r1 = useRef<THREE.Mesh>(null);
  const r2 = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (r1.current) r1.current.rotation.x = clock.getElapsedTime() * 0.5;
    if (r2.current) r2.current.rotation.y = clock.getElapsedTime() * 0.3;
  });
  return (
    <>
      <Ring ref={r1} args={[1.8, 2.0, 64]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.4} side={THREE.DoubleSide} />
      </Ring>
      <Ring ref={r2} args={[2.4, 2.6, 64]} rotation={[Math.PI / 4, 0, 0]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#bf00ff" transparent opacity={0.3} side={THREE.DoubleSide} />
      </Ring>
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} color="#00ff41" intensity={2} />
      <pointLight position={[-5, -5, 5]} color="#00d4ff" intensity={1.5} />
      <pointLight position={[0, 5, -5]} color="#bf00ff" intensity={1} />

      <Stars radius={80} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      <ParticleField />
      <GridPlane />
      <FloatingOrb />
      <Rings />
    </Canvas>
  );
}
