"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/cart-context";
import { useLocale } from "@/context/locale-context";
import { formatPrice } from "@/lib/format-price";

export default function CartPage() {
  const { items, subtotalCents, setQuantity, removeItem } = useCart();
  const { dict } = useLocale();

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-content px-5 py-20 text-center md:px-8">
        <p className="eyebrow mb-3">{dict.cartPage.title}</p>
        <h1 className="font-display text-3xl text-ink">{dict.cartPage.emptyTitle}</h1>
        <p className="mt-3 font-body text-ink/60">{dict.cartPage.emptyBody}</p>
        <Link
          href="/"
          className="mt-6 inline-block border border-ink px-6 py-3 font-body text-sm hover:bg-ink hover:text-paper"
        >
          {dict.cartPage.browse}
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-content px-5 py-14 md:px-8">
      <h1 className="font-display text-3xl text-ink">{dict.cartPage.title}</h1>
      <div className="pd-ruler pd-ruler--major my-6" aria-hidden="true" />

      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <div key={item.productId} className="flex items-center gap-4">
            <div className="relative h-20 w-20 shrink-0 bg-bone">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="font-display text-lg text-ink">{item.name}</p>
              <p className="font-mono text-sm text-fog">
                {formatPrice(item.priceCents)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <label className="sr-only" htmlFor={`qty-${item.productId}`}>
                {dict.cartPage.quantityFor} {item.name}
              </label>
              <input
                id={`qty-${item.productId}`}
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) =>
                  setQuantity(item.productId, Number(e.target.value))
                }
                className="w-16 border border-ink/30 bg-transparent px-2 py-1 text-center font-mono text-sm"
              />
              <button
                onClick={() => removeItem(item.productId)}
                aria-label={`${dict.cartPage.remove} ${item.name}`}
                className="font-mono text-xs uppercase text-fog hover:text-signal"
              >
                {dict.cartPage.remove}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pd-ruler pd-ruler--major my-8" aria-hidden="true" />

      <div className="flex items-center justify-between">
        <span className="eyebrow">{dict.cartPage.subtotal}</span>
        <span className="font-mono text-xl text-ink">
          {formatPrice(subtotalCents)}
        </span>
      </div>

      <Link
        href="/checkout"
        className="mt-6 block w-full border border-ink py-3 text-center font-body text-sm text-ink hover:bg-ink hover:text-paper md:inline-block md:w-auto md:px-10"
      >
        {dict.cartPage.checkout}
      </Link>
    </section>
  );
}
