import { getFeaturedProducts } from "@/db/queries";
import { ProductCard } from "@/components/ProductCard";

export default async function HomePage() {
  const featured = await getFeaturedProducts(4);

  return (
    <>
      <section className="mx-auto max-w-content px-5 pb-16 pt-14 md:px-8 md:pt-20">
        <p className="eyebrow mb-6">Est. optics studio — every frame to spec</p>
        {/* Signature: acuity-chart hero, three rows shrinking like a Snellen chart */}
        <h1 className="max-w-3xl">
          <span className="acuity-line block" data-row="1">SEE</span>
          <span className="acuity-line block" data-row="2">PRECISELY</span>
          <span className="acuity-line block" data-row="3">MERIDIAN OPTICS</span>
        </h1>
        <p className="mt-8 max-w-[46ch] font-body text-base text-ink/70">
          Frames measured, cut, and finished the way an optician would check
          them — to the millimeter. Sunglasses and optical, ready for your
          prescription.
        </p>
      </section>

      <div className="pd-ruler pd-ruler--major mx-5 md:mx-8" aria-hidden="true" />

      <section className="mx-auto max-w-content px-5 py-16 md:px-8">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="font-display text-2xl text-ink">Featured</h2>
          <span className="spec-label">{featured.length} frames</span>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
