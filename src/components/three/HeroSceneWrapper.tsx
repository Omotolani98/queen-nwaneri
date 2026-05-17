"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene"),
  { ssr: false, loading: () => null }
);

export function HeroSceneWrapper() {
  return <HeroScene />;
}
