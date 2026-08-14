import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-bone">
      <div className="pd-ruler" aria-hidden="true" />
      <div className="mx-auto grid max-w-content gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div>
          <p className="font-display text-xl font-semibold">MERIDIAN</p>
          <p className="mt-2 max-w-[26ch] font-body text-sm text-bone/60">
            Frames measured, cut, and finished the way an optician would
            check them — to the millimeter.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-3 text-brass">Shop</p>
          <ul className="space-y-2 font-body text-sm text-bone/75">
            <li><Link href="/category/sunglasses">Sunglasses</Link></li>
            <li><Link href="/category/optical">Optical</Link></li>
            <li><Link href="/category/accessories">Accessories</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-3 text-brass">Studio</p>
          <ul className="space-y-2 font-body text-sm text-bone/75">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/fit-guide">Fit guide</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-3 text-brass">Notes</p>
          <p className="font-body text-sm text-bone/75">
            Free adjustments for the life of the frame at any partner
            optician. Bring your receipt.
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-5 font-mono text-[11px] uppercase tracking-chart text-bone/40 md:px-8">
        <span>© {new Date().getFullYear()} Meridian Optics Co.</span>
        <span>Made for careful eyes</span>
      </div>
    </footer>
  );
}
