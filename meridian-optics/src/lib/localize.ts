import type { Locale } from "@/i18n/dictionary";
import type { Product, Category } from "@/db/schema";

export function localizedProductName(product: Product, locale: Locale) {
  return locale === "ar" && product.nameAr ? product.nameAr : product.name;
}

export function localizedProductDescription(product: Product, locale: Locale) {
  return locale === "ar" && product.descriptionAr
    ? product.descriptionAr
    : product.description;
}

export function localizedFrameShape(product: Product, locale: Locale) {
  return locale === "ar" && product.frameShapeAr
    ? product.frameShapeAr
    : product.frameShape;
}

export function localizedFrameMaterial(product: Product, locale: Locale) {
  return locale === "ar" && product.frameMaterialAr
    ? product.frameMaterialAr
    : product.frameMaterial;
}

export function localizedCategoryName(category: Category, locale: Locale) {
  return locale === "ar" && category.nameAr ? category.nameAr : category.name;
}

export function localizedCategoryDescription(category: Category, locale: Locale) {
  return locale === "ar" && category.descriptionAr
    ? category.descriptionAr
    : category.description;
}
