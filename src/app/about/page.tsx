import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Queen Nwaneri — artist, storyteller, and creator of original contemporary artworks.",
};

export default function AboutPage() {
  return <AboutContent />;
}
