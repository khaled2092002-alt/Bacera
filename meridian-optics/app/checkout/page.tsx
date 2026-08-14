"use client";

import { useState } from "react";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/format-price";

export default function CheckoutPage() {
  const { items, subtotalCents } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Checkout failed");
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto max-w-content px-5 py-14 md:px-8">
      <h1 className="font-display text-3xl text-ink">Checkout</h1>
      <div className="pd-ruler pd-ruler--major my-6" aria-hidden="true" />

      <div className="flex items-center justify-between">
        <span className="eyebrow">Order subtotal</span>
        <span className="font-mono text-xl text-ink">
          {formatPrice(subtotalCents)}
        </span>
      </div>

      {error && (
        <p className="mt-4 font-mono text-sm text-signal">{error}</p>
      )}

      <button
        onClick={handleCheckout}
        disabled={loading || items.length === 0}
        className="mt-6 w-full border border-ink py-3 font-body text-sm text-ink transition-colors hover:bg-ink hover:text-paper disabled:opacity-40 md:w-auto md:px-10"
      >
        {loading ? "Redirecting…" : "Pay with Stripe"}
      </button>
    </section>
  );
}
