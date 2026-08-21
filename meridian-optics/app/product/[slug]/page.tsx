import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductBySlug } from "@/db/queries";
import { formatPrice } from "@/lib/format-price";
import { AddToCartButton } from "./add-to-cart-button";
import { getLocale } from "@/i18n/get-locale";
import { dictionaries } from "@/i18n/dictionary";
import {
  localizedProductName,
  localizedProductDescription,
  localizedFrameShape,
  localizedFrameMaterial,
} from "@/lib/localize";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);
  if (!product) notFound();

  const locale = getLocale();
  const dict = dictionaries[locale];
  const name = localizedProductName(product, locale);
  const description = localizedProductDescription(product, locale);
  const frameShape = localizedFrameShape(product, locale);
  const frameMaterial = localizedFrameMaterial(product, locale);

  const specRows: [string, string | null][] = [
    [dict.product.frameShape, frameShape],
    [dict.product.material, frameMaterial],
    [dict.product.lensWidth, product.lensWidthMm ? `${product.lensWidthMm} mm` : null],
    [dict.product.bridge, product.bridgeWidthMm ? `${product.bridgeWidthMm} mm` : null],
    [dict.product.temple, product.templeLengthMm ? `${product.templeLengthMm} mm` : null],
    [dict.product.polarized, product.isPolarized ? dict.product.yes : dict.product.no],
  ];

  return (
    <section className="mx-auto grid max-w-content gap-10 px-5 py-14 md:grid-cols-2 md:px-8">
      <div className="relative aspect-square bg-bone">
        <Image
          src={product.imageUrl}
          alt={name}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <div>
        <p className="eyebrow mb-2">
          {product.category
            ? locale === "ar" && product.category.nameAr
              ? product.category.nameAr
              : product.category.name
            : dict.product.frame}
        </p>
        <h1 className="font-display text-4xl text-ink">{name}</h1>

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

        <p className="mt-6 max-w-[56ch] font-body text-ink/75">{description}</p>

        <AddToCartButton product={product} name={name} />

        <div className="pd-ruler pd-ruler--major my-8" aria-hidden="true" />

        <p className="eyebrow mb-3">{dict.product.specSheet}</p>
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
