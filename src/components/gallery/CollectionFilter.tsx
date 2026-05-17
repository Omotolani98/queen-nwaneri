"use client";

import { motion } from "framer-motion";
import { collections } from "@/data/collections";
import { cn } from "@/lib/utils";

interface CollectionFilterProps {
  active: string;
  onChange: (slug: string) => void;
}

const allCollections = [{ id: "all", name: "All", slug: "all" }, ...collections];

export function CollectionFilter({ active, onChange }: CollectionFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {allCollections.map((collection) => (
        <button
          key={collection.slug}
          onClick={() => onChange(collection.slug)}
          className={cn(
            "relative rounded-full px-4 py-2 text-sm transition-colors",
            active === collection.slug
              ? "text-background"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {active === collection.slug && (
            <motion.div
              layoutId="filter-pill"
              className="absolute inset-0 rounded-full bg-foreground"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative z-10">{collection.name}</span>
        </button>
      ))}
    </div>
  );
}
