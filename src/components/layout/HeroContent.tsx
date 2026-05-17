"use client";

import { motion } from "framer-motion";

export function HeroContent() {
  return (
    <div className="relative z-10 text-center">
      <motion.h1
        className="font-display text-5xl font-semibold tracking-wide sm:text-7xl lg:text-8xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        Queen Nwaneri
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-muted-foreground sm:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        Original Artworks &middot; Melbourne, Australia
      </motion.p>
    </div>
  );
}
