import { getFeaturedProducts } from "@/db/queries";
import { ProductCard } from "@/components/ProductCard";
import { getLocale } from "@/i18n/get-locale";
import { dictionaries } from "@/i18n/dictionary";

export default async function HomePage() {
  const featured = await getFeaturedProducts(4);
  const locale = getLocale();
  const dict = dictionaries[locale];

  return (
    <>
      <section className="mx-auto max-w-content px-5 pb-16 pt-14 md:px-8 md:pt-20">
        <p className="eyebrow mb-6">{dict.home.eyebrow}</p>
        {/* Signature: acuity-chart hero, three rows shrinking like a Snellen chart */}
        <h1 className="max-w-3xl">
          <span className="acuity-line block" data-row="1">{dict.home.line1}</span>
          <span className="acuity-line block" data-row="2">{dict.home.line2}</span>
          <span className="acuity-line block" data-row="3">{dict.home.line3}</span>
        </h1>
        <p className="mt-8 max-w-[46ch] font-body text-base text-ink/70">
          {dict.home.intro}
        </p>
      </section>

      <div className="pd-ruler pd-ruler--major mx-5 md:mx-8" aria-hidden="true" />

      <section className="mx-auto max-w-content px-5 py-16 md:px-8">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="font-display text-2xl text-ink">{dict.home.featured}</h2>
          <span className="spec-label">{featured.length} {dict.home.frames}</span>
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
