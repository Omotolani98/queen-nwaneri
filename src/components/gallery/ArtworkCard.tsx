"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Artwork } from "@/types";
import { formatPrice } from "@/lib/utils";

interface ArtworkCardProps {
  artwork: Artwork;
  index: number;
}

export function ArtworkCard({ artwork, index }: ArtworkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link href={`/artwork/${artwork.slug}`} className="group block">
        <motion.div
          className="relative overflow-hidden rounded-sm bg-muted"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={artwork.image.src}
              alt={artwork.image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

          {/* Sold badge */}
          {artwork.sold && (
            <div className="absolute top-4 right-4 rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
              Sold
            </div>
          )}
        </motion.div>

        {/* Info */}
        <div className="mt-4 space-y-1">
          <h3 className="font-display text-lg font-medium tracking-wide">
            {artwork.title}
          </h3>
          <p className="text-sm text-muted-foreground">{artwork.medium}</p>
          <p className="text-sm font-medium">
            {artwork.sold ? (
              <span className="text-muted-foreground line-through">
                {formatPrice(artwork.price)}
              </span>
            ) : (
              formatPrice(artwork.price)
            )}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
