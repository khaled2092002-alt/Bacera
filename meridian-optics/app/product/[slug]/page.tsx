import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductBySlug } from "@/db/queries";
import { formatPrice } from "@/lib/format-price";
import { AddToCartButton } from "./add-to-cart-button";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);
  if (!product) notFound();

  const specRows: [string, string | null][] = [
    ["Frame shape", product.frameShape],
    ["Material", product.frameMaterial],
    ["Lens width", product.lensWidthMm ? `${product.lensWidthMm} mm` : null],
    ["Bridge", product.bridgeWidthMm ? `${product.bridgeWidthMm} mm` : null],
    ["Temple", product.templeLengthMm ? `${product.templeLengthMm} mm` : null],
    ["Polarized", product.isPolarized ? "Yes" : "No"],
  ];

  return (
    <section className="mx-auto grid max-w-content gap-10 px-5 py-14 md:grid-cols-2 md:px-8">
      <div className="relative aspect-square bg-bone">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <div>
        <p className="eyebrow mb-2">
          {product.category ? product.category.name : "Frame"}
        </p>
        <h1 className="font-display text-4xl text-ink">{product.name}</h1>

        <div className="mt-4 flex items-baseline gap-3">
          <span className="font-mono text-xl text-ink">
            {formatPrice(product.priceCents, product.currency)}
          </span>
          {product.compareAtPriceCents && (
            <span className="font-mono text-sm text-fog line-through">
              {formatPrice(product.compareAtPriceCents, product.currency)}
            </span>
          )}
        </div>

        <p className="mt-6 max-w-[56ch] font-body text-ink/75">
          {product.description}
        </p>

        <AddToCartButton product={product} />

        <div className="pd-ruler pd-ruler--major my-8" aria-hidden="true" />

        <p className="eyebrow mb-3">Spec sheet</p>
        <dl className="grid grid-cols-2 gap-y-3 font-mono text-sm">
          {specRows
            .filter(([, value]) => value)
            .map(([label, value]) => (
              <div key={label} className="contents">
                <dt className="text-fog">{label}</dt>
                <dd className="text-ink">{value}</dd>
              </div>
            ))}
        </dl>
      </div>
    </section>
  );
}
