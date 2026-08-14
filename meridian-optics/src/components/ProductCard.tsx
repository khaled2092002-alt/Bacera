"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/format-price";
import type { Product } from "@/db/schema";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  const specs = [
    product.lensWidthMm ? `${product.lensWidthMm}` : null,
    product.bridgeWidthMm ? `${product.bridgeWidthMm}` : null,
    product.templeLengthMm ? `${product.templeLengthMm}` : null,
  ];
  const hasSpecs = specs.some(Boolean);

  return (
    <div className="group relative flex flex-col">
      <Link
        href={`/product/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-bone"
      >
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />

        {/* Signature hover element: a focal crosshair, echoing an optometrist's
            centering mark for pupillary distance. */}
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          className="pointer-events-none absolute right-3 top-3 h-8 w-8 opacity-0 transition-opacity duration-300 group-hover:opacity-70"
        >
          <circle cx="50" cy="50" r="18" fill="none" stroke="#14171A" strokeWidth="1.5" />
          <line x1="50" y1="10" x2="50" y2="30" stroke="#14171A" strokeWidth="1.5" />
          <line x1="50" y1="70" x2="50" y2="90" stroke="#14171A" strokeWidth="1.5" />
          <line x1="10" y1="50" x2="30" y2="50" stroke="#14171A" strokeWidth="1.5" />
          <line x1="70" y1="50" x2="90" y2="50" stroke="#14171A" strokeWidth="1.5" />
        </svg>

        {product.compareAtPriceCents && (
          <span className="spec-label absolute left-3 top-3 bg-signal px-1.5 py-0.5 !text-[10px] text-paper">
            Sale
          </span>
        )}
      </Link>

      <div className="pd-ruler mt-3" aria-hidden="true" />

      <div className="flex flex-1 flex-col gap-1 pt-3">
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-display text-lg leading-snug text-ink">
            {product.name}
          </h3>
        </Link>

        {hasSpecs && (
          <p className="spec-label">
            {specs.filter(Boolean).join(" · ")} MM
          </p>
        )}

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-sm text-ink">
              {formatPrice(product.priceCents, product.currency)}
            </span>
            {product.compareAtPriceCents && (
              <span className="font-mono text-xs text-fog line-through">
                {formatPrice(product.compareAtPriceCents, product.currency)}
              </span>
            )}
          </div>

          <button
            onClick={() =>
              addItem({
                productId: product.id,
                slug: product.slug,
                name: product.name,
                priceCents: product.priceCents,
                imageUrl: product.imageUrl,
              })
            }
            className="eyebrow border border-ink px-3 py-1.5 text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
