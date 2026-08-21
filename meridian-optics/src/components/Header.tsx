"use client";

import Link from "next/link";
import { ShoppingBag, Menu, Languages } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/cart-context";
import { useLocale } from "@/context/locale-context";

export function Header() {
  const { itemCount } = useCart();
  const { locale, dict, setLocale } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/category/sunglasses", label: dict.nav.sunglasses },
    { href: "/category/optical", label: dict.nav.optical },
    { href: "/category/accessories", label: dict.nav.accessories },
  ];

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight text-ink">
            {dict.brand.name}
          </span>
          <span className="eyebrow hidden sm:inline">{dict.brand.tagline}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-ink/80 transition-colors hover:text-lens-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
            aria-label={dict.langSwitch.label}
            className="eyebrow flex items-center gap-1.5 border border-ink/20 px-2.5 py-1.5 text-ink/80 transition-colors hover:border-lens-blue hover:text-lens-blue"
          >
            <Languages size={14} strokeWidth={1.5} />
            {dict.langSwitch.label}
          </button>

          <Link
            href="/cart"
            aria-label={`${dict.cart.label}, ${itemCount} ${
              itemCount === 1 ? dict.cart.item : dict.cart.items
            }`}
            className="relative flex items-center gap-2 text-ink transition-colors hover:text-lens-blue"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {itemCount > 0 && (
              <span className="spec-label absolute -end-3 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-signal px-1 !text-[10px] text-paper">
                {itemCount}
              </span>
            )}
          </Link>
          <button
            aria-label="Toggle menu"
            className="text-ink md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 px-5 py-3 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 font-body text-sm text-ink/80"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}

      <div className="pd-ruler pd-ruler--major" aria-hidden="true" />
    </header>
  );
}
