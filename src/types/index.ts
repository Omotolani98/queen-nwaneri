export interface Artwork {
  id: string;
  slug: string;
  title: string;
  description: string;
  collection: string;
  medium: string;
  dimensions: string;
  year: number;
  price: number; // AUD cents
  sold: boolean;
  featured: boolean;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
}
