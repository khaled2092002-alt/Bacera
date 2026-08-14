import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

type CheckoutItem = {
  name: string;
  priceCents: number;
  quantity: number;
  imageUrl: string;
};

export async function POST(req: NextRequest) {
  const { items }: { items: CheckoutItem[] } = await req.json();

  if (!items || items.length === 0) {
    return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
  }

  const origin = req.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: items.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: item.priceCents,
        product_data: {
          name: item.name,
          images: [item.imageUrl],
        },
      },
    })),
    success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cart`,
  });

  return NextResponse.json({ url: session.url });
}
