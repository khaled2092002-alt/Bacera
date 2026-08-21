"use client";

import Link from "next/link";
import { useLocale } from "@/context/locale-context";

export function Footer() {
  const { dict } = useLocale();

  return (
    <footer className="mt-24 bg-ink text-bone">
      <div className="pd-ruler" aria-hidden="true" />
      <div className="mx-auto grid max-w-content gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div>
          <p className="font-display text-xl font-semibold">{dict.brand.name}</p>
          <p className="mt-2 max-w-[26ch] font-body text-sm text-bone/60">
            {dict.footer.blurb}
          </p>
        </div>

        <div>
          <p className="eyebrow mb-3 text-brass">{dict.footer.shop}</p>
          <ul className="space-y-2 font-body text-sm text-bone/75">
            <li><Link href="/category/sunglasses">{dict.nav.sunglasses}</Link></li>
            <li><Link href="/category/optical">{dict.nav.optical}</Link></li>
            <li><Link href="/category/accessories">{dict.nav.accessories}</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-3 text-brass">{dict.footer.studio}</p>
          <ul className="space-y-2 font-body text-sm text-bone/75">
            <li><Link href="/about">{dict.footer.about}</Link></li>
            <li><Link href="/fit-guide">{dict.footer.fitGuide}</Link></li>
            <li><Link href="/contact">{dict.footer.contact}</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-3 text-brass">{dict.footer.notesTitle}</p>
          <p className="font-body text-sm text-bone/75">{dict.footer.notes}</p>
        </div>
      </div>

      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-5 font-mono text-[11px] uppercase tracking-chart text-bone/40 md:px-8">
        <span>© {new Date().getFullYear()} {dict.footer.rights}</span>
        <span>{dict.footer.made}</span>
      </div>
    </footer>
  );
}
