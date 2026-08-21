import {
  pgTable,
  serial,
  text,
  varchar,
  integer,
  timestamp,
  boolean,
  numeric,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  nameAr: varchar("name_ar", { length: 120 }),
  slug: varchar("slug", { length: 120 }).notNull().unique(),
  description: text("description"),
  descriptionAr: text("description_ar"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  categoryId: integer("category_id")
    .notNull()
    .references(() => categories.id),
  name: varchar("name", { length: 160 }).notNull(),
  nameAr: varchar("name_ar", { length: 160 }),
  slug: varchar("slug", { length: 160 }).notNull().unique(),
  description: text("description").notNull(),
  descriptionAr: text("description_ar"),
  frameShape: varchar("frame_shape", { length: 60 }), // e.g. Round, Aviator, Wayfarer
  frameShapeAr: varchar("frame_shape_ar", { length: 60 }),
  frameMaterial: varchar("frame_material", { length: 60 }), // e.g. Acetate, Titanium
  frameMaterialAr: varchar("frame_material_ar", { length: 60 }),
  lensWidthMm: integer("lens_width_mm"),
  bridgeWidthMm: integer("bridge_width_mm"),
  templeLengthMm: integer("temple_length_mm"),
  priceCents: integer("price_cents").notNull(),
  compareAtPriceCents: integer("compare_at_price_cents"),
  currency: varchar("currency", { length: 3 }).notNull().default("USD"),
  stock: integer("stock").notNull().default(0),
  imageUrl: text("image_url").notNull(),
  gallery: text("gallery").array(),
  isPolarized: boolean("is_polarized").notNull().default(false),
  isFeatured: boolean("is_featured").notNull().default(false),
  rating: numeric("rating", { precision: 2, scale: 1 }).default("0"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const categoriesRelations = relations(categories, ({ many }) => ({
  products: many(products),
}));

export const productsRelations = relations(products, ({ one }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
}));

export type Category = typeof categories.$inferSelect;
export type Product = typeof products.$inferSelect;
