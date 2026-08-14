import { notFound } from "next/navigation";
import { getCategories, getProducts } from "@/db/queries";
import { ProductCard } from "@/components/ProductCard";

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const categories = await getCategories();
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) notFound();

  const products = await getProducts(params.slug);

  return (
    <section className="mx-auto max-w-content px-5 py-14 md:px-8">
      <p className="eyebrow mb-3">{products.length} frames</p>
      <h1 className="font-display text-4xl text-ink">{category.name}</h1>
      {category.description && (
        <p className="mt-3 max-w-[52ch] font-body text-ink/70">
          {category.description}
        </p>
      )}

      <div className="pd-ruler pd-ruler--major my-8" aria-hidden="true" />

      {products.length === 0 ? (
        <p className="font-body text-ink/60">
          Nothing in this category yet — check back soon.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
