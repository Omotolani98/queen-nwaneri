import { ChevronDown } from "lucide-react";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { HeroContent } from "@/components/layout/HeroContent";
import { HeroSceneWrapper } from "@/components/three/HeroSceneWrapper";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[90vh] flex-col items-center justify-center overflow-hidden">
        <HeroSceneWrapper />
        <HeroContent />

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="animate-bounce text-muted-foreground">
            <ChevronDown size={24} />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <GalleryGrid />
    </>
  );
}
