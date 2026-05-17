"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, Check, Copy } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SOCIAL } from "@/lib/constants";

const fadeUp = {
  initial: { opacity: 0, y: 30 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
};

export function ContactContent() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(SOCIAL.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      {/* Heading */}
      <motion.div {...fadeUp} className="mb-20">
        <AnimatedText
          text="Get in Touch"
          as="h1"
          className="font-display text-5xl font-semibold tracking-wide sm:text-6xl lg:text-7xl"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 text-lg text-muted-foreground"
        >
          For commissions, inquiries, or just to say hello.
        </motion.p>
      </motion.div>

      {/* Contact cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Instagram */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
        >
          <MagneticButton
            as="a"
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full flex-col items-center gap-4 rounded-sm border border-border bg-card p-10 transition-colors hover:bg-muted"
          >
            <Instagram size={32} strokeWidth={1.5} />
            <span className="font-display text-xl tracking-wide">
              Instagram
            </span>
            <span className="text-sm text-muted-foreground">
              @queennwaneri
            </span>
          </MagneticButton>
        </motion.div>

        {/* Email */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.3 }}
        >
          <MagneticButton
            as="a"
            href={`mailto:${SOCIAL.email}`}
            className="flex w-full flex-col items-center gap-4 rounded-sm border border-border bg-card p-10 transition-colors hover:bg-muted"
          >
            <Mail size={32} strokeWidth={1.5} />
            <span className="font-display text-xl tracking-wide">Email</span>
            <span className="text-sm text-muted-foreground">
              {SOCIAL.email}
            </span>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Copy email button */}
      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.4 }}
        className="mt-8 flex justify-center"
      >
        <button
          onClick={copyEmail}
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {copied ? (
            <>
              <Check size={14} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={14} />
              Copy email address
            </>
          )}
        </button>
      </motion.div>
    </div>
  );
}
