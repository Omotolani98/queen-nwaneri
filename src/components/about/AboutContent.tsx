"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";

const fadeUp = {
  initial: { opacity: 0, y: 30 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
};

export function AboutContent() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      {/* Hero */}
      <motion.div {...fadeUp} className="mb-20">
        <AnimatedText
          text="About the Artist"
          as="h1"
          className="font-display text-5xl font-semibold tracking-wide sm:text-6xl lg:text-7xl"
        />
      </motion.div>

      {/* Portrait placeholder */}
      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.2 }}
        className="mb-16 aspect-[4/5] max-w-md overflow-hidden rounded-sm bg-muted"
      >
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
          Artist portrait
        </div>
      </motion.div>

      {/* Bio */}
      <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
        <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
          Queen Nwaneri is a contemporary artist based in Melbourne, Australia.
          Her work explores the intersection of emotion, identity, and the
          natural world through bold colour, texture, and form.
        </motion.p>

        <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }}>
          Drawing from a rich cultural heritage and a deep connection to the
          Australian landscape, Queen creates pieces that invite viewers into
          a space of reflection and wonder. Each work is a conversation between
          the seen and the felt — the tangible and the ethereal.
        </motion.p>

        <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.5 }}>
          Working primarily in oils, acrylics, and mixed media, her process is
          intuitive and layered. Paintings evolve through multiple stages of
          application and removal, building depth that rewards close viewing.
        </motion.p>
      </div>

      {/* Artist Statement */}
      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.6 }}
        className="mt-20 border-t border-border pt-16"
      >
        <h2 className="font-display text-3xl font-semibold tracking-wide">
          Artist Statement
        </h2>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          &ldquo;I paint to understand. Each canvas is a question I don&apos;t yet
          know how to answer — an exploration of colour as language, texture as
          memory, and form as feeling. My work lives in the space between
          intention and intuition, where something true emerges from the act
          of creating itself.&rdquo;
        </p>
      </motion.div>
    </div>
  );
}
