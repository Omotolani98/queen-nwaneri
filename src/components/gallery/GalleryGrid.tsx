"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { artworks } from "@/data/artworks";
import { ArtworkCard } from "./ArtworkCard";
import { CollectionFilter } from "./CollectionFilter";

export function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? artworks
      : artworks.filter((a) => a.collection === activeFilter);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-12">
        <CollectionFilter active={activeFilter} onChange={setActiveFilter} />
      </div>

      <LayoutGroup>
        <motion.div
          layout
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((artwork, i) => (
              <motion.div
                key={artwork.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ArtworkCard artwork={artwork} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {filtered.length === 0 && (
        <p className="py-20 text-center text-muted-foreground">
          No artworks in this collection yet.
        </p>
      )}
    </section>
  );
}
