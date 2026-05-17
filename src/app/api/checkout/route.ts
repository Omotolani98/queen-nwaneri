import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { artworks } from "@/data/artworks";

export async function POST(request: Request) {
  try {
    const { artworkId } = await request.json();
    const artwork = artworks.find((a) => a.id === artworkId);

    if (!artwork || artwork.sold) {
      return NextResponse.json(
        { error: "Artwork not available" },
        { status: 400 }
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "aud",
            product_data: {
              name: artwork.title,
              description: `${artwork.medium}, ${artwork.dimensions}`,
              images: [`${baseUrl}${artwork.image.src}`],
            },
            unit_amount: artwork.price,
          },
          quantity: 1,
        },
      ],
      shipping_address_collection: {
        allowed_countries: ["AU"],
      },
      success_url: `${baseUrl}/artwork/${artwork.slug}?success=true`,
      cancel_url: `${baseUrl}/artwork/${artwork.slug}?cancelled=true`,
      metadata: {
        artworkId: artwork.id,
        artworkSlug: artwork.slug,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
