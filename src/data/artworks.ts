import type { Artwork } from "@/types";

export const artworks: Artwork[] = [
  {
    id: "1",
    slug: "celestial-drift",
    title: "Celestial Drift",
    description:
      "An exploration of light and movement through layered textures, evoking the quiet majesty of celestial bodies in motion.",
    collection: "ethereal-forms",
    medium: "Oil on canvas",
    dimensions: "90 x 120 cm",
    year: 2024,
    price: 350000,
    sold: false,
    featured: true,
    image: {
      src: "/artworks/celestial-drift.svg",
      alt: "Abstract painting with flowing light and warm tones",
      width: 1200,
      height: 1600,
    },
  },
  {
    id: "2",
    slug: "silent-resonance",
    title: "Silent Resonance",
    description:
      "Deep blues and golds converge in a meditation on stillness and sound, where colour becomes vibration.",
    collection: "ethereal-forms",
    medium: "Acrylic on canvas",
    dimensions: "80 x 100 cm",
    year: 2024,
    price: 280000,
    sold: false,
    featured: true,
    image: {
      src: "/artworks/silent-resonance.svg",
      alt: "Deep blue and gold abstract composition",
      width: 1200,
      height: 1500,
    },
  },
  {
    id: "3",
    slug: "concrete-garden",
    title: "Concrete Garden",
    description:
      "The tension between organic growth and constructed environments, painted with bold strokes and urban textures.",
    collection: "urban-pulse",
    medium: "Mixed media on canvas",
    dimensions: "100 x 100 cm",
    year: 2023,
    price: 420000,
    sold: false,
    featured: false,
    image: {
      src: "/artworks/concrete-garden.svg",
      alt: "Mixed media piece blending organic and geometric forms",
      width: 1200,
      height: 1200,
    },
  },
  {
    id: "4",
    slug: "neon-solitude",
    title: "Neon Solitude",
    description:
      "A solo figure immersed in the electric glow of city nightlife — isolation within connection.",
    collection: "urban-pulse",
    medium: "Oil on canvas",
    dimensions: "70 x 90 cm",
    year: 2023,
    price: 310000,
    sold: true,
    featured: false,
    image: {
      src: "/artworks/neon-solitude.svg",
      alt: "Figure bathed in neon light against dark urban backdrop",
      width: 1200,
      height: 1540,
    },
  },
  {
    id: "5",
    slug: "morning-moss",
    title: "Morning Moss",
    description:
      "Soft greens and morning light captured in delicate brushwork — the forest floor at dawn.",
    collection: "natures-whisper",
    medium: "Watercolour on paper",
    dimensions: "50 x 70 cm",
    year: 2024,
    price: 180000,
    sold: false,
    featured: true,
    image: {
      src: "/artworks/morning-moss.svg",
      alt: "Soft green watercolour depicting forest floor at dawn",
      width: 1200,
      height: 1680,
    },
  },
  {
    id: "6",
    slug: "wild-current",
    title: "Wild Current",
    description:
      "Water in its most untamed state — rapids rendered in expressive, kinetic strokes that pull the viewer into the flow.",
    collection: "natures-whisper",
    medium: "Acrylic on canvas",
    dimensions: "120 x 80 cm",
    year: 2024,
    price: 390000,
    sold: false,
    featured: false,
    image: {
      src: "/artworks/wild-current.svg",
      alt: "Dynamic acrylic painting of rushing water currents",
      width: 1800,
      height: 1200,
    },
  },
];

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug);
}

export function getArtworksByCollection(collection: string): Artwork[] {
  return artworks.filter((a) => a.collection === collection);
}

export function getFeaturedArtworks(): Artwork[] {
  return artworks.filter((a) => a.featured);
}
