"use client";

import { Scene } from "./Scene";
import { FloatingArtwork } from "./FloatingArtwork";
import { BackgroundParticles } from "./BackgroundParticles";

export default function HeroScene() {
  return (
    <Scene>
      <FloatingArtwork position={[-3, 1, -2]} color="#d4a574" size={[1.8, 2.4]} speed={1.2} />
      <FloatingArtwork position={[2.5, -0.5, -1]} color="#7c9eb2" size={[1.5, 2]} speed={0.8} />
      <FloatingArtwork position={[0, 0.5, -3]} color="#b8a9c9" size={[2, 2.5]} speed={1} />
      <FloatingArtwork position={[-1.5, -1.5, -2.5]} color="#a3b18a" size={[1.2, 1.6]} speed={1.4} />
      <FloatingArtwork position={[3.5, 1.5, -3.5]} color="#e8c8a0" size={[1.4, 1.8]} speed={0.6} />
      <BackgroundParticles count={300} />
    </Scene>
  );
}
