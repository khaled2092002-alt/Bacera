"use client";

import { useState } from "react";
import { useCart } from "@/context/cart-context";
import { useLocale } from "@/context/locale-context";
import type { Product } from "@/db/schema";

export function AddToCartButton({
  product,
  name,
}: {
  product: Product;
  name: string;
}) {
  const { addItem } = useCart();
  const { dict } = useLocale();
  const [added, setAdded] = useState(false);

  return (
    <button
      onClick={() => {
        addItem({
          productId: product.id,
          slug: product.slug,
          name,
          priceCents: product.priceCents,
          imageUrl: product.imageUrl,
        });
        setAdded(true);
        setTimeout(() => setAdded(false), 1600);
      }}
      className="mt-6 w-full border border-ink py-3 font-body text-sm text-ink transition-colors hover:bg-ink hover:text-paper md:w-auto md:px-8"
    >
      {added ? dict.product.added : dict.product.addToCart}
    </button>
  );
}
