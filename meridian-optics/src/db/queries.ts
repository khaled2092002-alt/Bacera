import { db } from "./index";
import { eq } from "drizzle-orm";
import { categories, products } from "./schema";

export async function getCategories() {
  return db.select().from(categories);
}

export async function getProducts(categorySlug?: string) {
  if (!categorySlug || categorySlug === "all") {
    return db.query.products.findMany({
      orderBy: (p, { asc }) => asc(p.name),
    });
  }
  const category = await db.query.categories.findFirst({
    where: eq(categories.slug, categorySlug),
  });
  if (!category) return [];
  return db.query.products.findMany({
    where: (p, { eq }) => eq(p.categoryId, category.id),
    orderBy: (p, { asc }) => asc(p.name),
  });
}

export async function getFeaturedProducts(limit = 4) {
  return db.query.products.findMany({
    where: (p, { eq }) => eq(p.isFeatured, true),
    orderBy: (p, { asc }) => asc(p.name),
    limit,
  });
}

export async function getProductBySlug(slug: string) {
  return db.query.products.findFirst({
    where: (p, { eq }) => eq(p.slug, slug),
    with: { category: true },
  });
}
