"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface FloatingArtworkProps {
  position: [number, number, number];
  color: string;
  size?: [number, number];
  speed?: number;
}

export function FloatingArtwork({
  position,
  color,
  size = [1.5, 2],
  speed = 1,
}: FloatingArtworkProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.pointer.x * 0.05;
    meshRef.current.rotation.x = state.pointer.y * -0.03;
  });

  return (
    <Float speed={speed} rotationIntensity={0.2} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position}>
        <planeGeometry args={size} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
}
