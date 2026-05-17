import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { artworks, getArtworkBySlug } from "@/data/artworks";
import { PriceTag } from "@/components/artwork/PriceTag";
import { BuyButton } from "@/components/artwork/BuyButton";
import { ArtworkDetailClient } from "@/components/artwork/ArtworkDetailClient";
import { SITE } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ success?: string; cancelled?: string }>;
}

export async function generateStaticParams() {
  return artworks.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artwork = getArtworkBySlug(slug);
  if (!artwork) return {};

  return {
    title: artwork.title,
    description: artwork.description,
    openGraph: {
      title: `${artwork.title} | ${SITE.name}`,
      description: artwork.description,
      images: [{ url: artwork.image.src }],
    },
  };
}

export default async function ArtworkPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { success, cancelled } = await searchParams;
  const artwork = getArtworkBySlug(slug);

  if (!artwork) notFound();

  return (
    <ArtworkDetailClient>
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Back link */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} />
          Back to Gallery
        </Link>

        {/* Success/Cancel banners */}
        {success && (
          <div className="mb-8 rounded-sm border border-green-200 bg-green-50 p-4 text-sm text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
            Thank you for your purchase! You will receive a confirmation email shortly.
          </div>
        )}
        {cancelled && (
          <div className="mb-8 rounded-sm border border-border bg-muted p-4 text-sm text-muted-foreground">
            Purchase was cancelled. The artwork is still available.
          </div>
        )}

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
            <Image
              src={artwork.image.src}
              alt={artwork.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              priority
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <h1 className="font-display text-4xl font-semibold tracking-wide sm:text-5xl">
              {artwork.title}
            </h1>

            <div className="mt-6 space-y-3 text-muted-foreground">
              <p>{artwork.medium}</p>
              <p>{artwork.dimensions}</p>
              <p>{artwork.year}</p>
            </div>

            <p className="mt-8 leading-relaxed text-muted-foreground">
              {artwork.description}
            </p>

            <div className="mt-8">
              <PriceTag price={artwork.price} sold={artwork.sold} />
            </div>

            <div className="mt-8">
              <BuyButton artworkId={artwork.id} sold={artwork.sold} />
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              Shipping available within Australia only. Free shipping on all orders.
            </p>
          </div>
        </div>
      </div>
    </ArtworkDetailClient>
  );
}
