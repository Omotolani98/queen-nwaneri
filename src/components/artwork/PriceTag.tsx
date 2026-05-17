import { formatPrice } from "@/lib/utils";

interface PriceTagProps {
  price: number;
  sold: boolean;
}

export function PriceTag({ price, sold }: PriceTagProps) {
  if (sold) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-2xl font-semibold tracking-tight text-muted-foreground line-through">
          {formatPrice(price)}
        </span>
        <span className="rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
          Sold
        </span>
      </div>
    );
  }

  return (
    <span className="text-2xl font-semibold tracking-tight">
      {formatPrice(price)}
    </span>
  );
}
