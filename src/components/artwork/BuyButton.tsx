"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, ShoppingBag } from "lucide-react";

interface BuyButtonProps {
  artworkId: string;
  sold: boolean;
}

export function BuyButton({ artworkId, sold }: BuyButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ artworkId }),
      });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setLoading(false);
    }
  };

  if (sold) {
    return (
      <button
        disabled
        className="flex w-full items-center justify-center gap-2 rounded-sm bg-muted px-8 py-4 text-sm font-medium text-muted-foreground"
      >
        No longer available
      </button>
    );
  }

  return (
    <motion.button
      onClick={handleBuy}
      disabled={loading}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex w-full items-center justify-center gap-2 rounded-sm bg-foreground px-8 py-4 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
    >
      {loading ? (
        <Loader2 size={18} className="animate-spin" />
      ) : (
        <>
          <ShoppingBag size={18} />
          Purchase Artwork
        </>
      )}
    </motion.button>
  );
}
