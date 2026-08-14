import { db } from "./index";
import { categories, products } from "./schema";

async function main() {
  console.log("Seeding Meridian Optics catalog…");

  const [sun, optical, accessories] = await db
    .insert(categories)
    .values([
      {
        name: "Sunglasses",
        slug: "sunglasses",
        description:
          "UV400-rated frames for everyday light, engineered with the same tolerances as our optical line.",
      },
      {
        name: "Optical",
        slug: "optical",
        description:
          "Prescription-ready frames. Every pair ships with demo lenses and a lab-ready spec sheet.",
      },
      {
        name: "Accessories",
        slug: "accessories",
        description: "Cases, cloths, and small tools for the care of good glasses.",
      },
    ])
    .returning();

  await db.insert(products).values([
    {
      categoryId: sun.id,
      name: "Halden Aviator",
      slug: "halden-aviator",
      description:
        "A double-bridge aviator in brushed titanium with G-15 polarized lenses. Cuts glare without shifting color temperature — true greens stay green.",
      frameShape: "Aviator",
      frameMaterial: "Titanium",
      lensWidthMm: 58,
      bridgeWidthMm: 14,
      templeLengthMm: 140,
      priceCents: 24500,
      compareAtPriceCents: null,
      stock: 42,
      imageUrl: "https://picsum.photos/seed/halden-aviator/900/900",
      gallery: [
        "https://picsum.photos/seed/halden-aviator-2/900/900",
        "https://picsum.photos/seed/halden-aviator-3/900/900",
      ],
      isPolarized: true,
      isFeatured: true,
      rating: "4.8",
    },
    {
      categoryId: sun.id,
      name: "Corso Round",
      slug: "corso-round",
      description:
        "Hand-polished acetate in a tortoise finish, cut fuller than most rounds to sit well on wider faces. Grey-green polarized lenses.",
      frameShape: "Round",
      frameMaterial: "Acetate",
      lensWidthMm: 50,
      bridgeWidthMm: 21,
      templeLengthMm: 145,
      priceCents: 19800,
      stock: 30,
      imageUrl: "https://picsum.photos/seed/corso-round/900/900",
      gallery: ["https://picsum.photos/seed/corso-round-2/900/900"],
      isPolarized: true,
      isFeatured: true,
      rating: "4.6",
    },
    {
      categoryId: sun.id,
      name: "Belmar Wayfarer",
      slug: "belmar-wayfarer",
      description:
        "The studio's best seller. A squared acetate silhouette with a slightly lowered temple for a relaxed, low-bridge fit.",
      frameShape: "Wayfarer",
      frameMaterial: "Acetate",
      lensWidthMm: 52,
      bridgeWidthMm: 18,
      templeLengthMm: 145,
      priceCents: 17500,
      compareAtPriceCents: 21000,
      stock: 65,
      imageUrl: "https://picsum.photos/seed/belmar-wayfarer/900/900",
      gallery: ["https://picsum.photos/seed/belmar-wayfarer-2/900/900"],
      isPolarized: false,
      isFeatured: false,
      rating: "4.5",
    },
    {
      categoryId: sun.id,
      name: "Iseo Shield",
      slug: "iseo-shield",
      description:
        "A single-lens wraparound shield with a stainless steel core. Built for high-glare environments — water, snow, open road.",
      frameShape: "Shield",
      frameMaterial: "Nylon / Steel core",
      lensWidthMm: 62,
      bridgeWidthMm: 16,
      templeLengthMm: 130,
      priceCents: 21000,
      stock: 18,
      imageUrl: "https://picsum.photos/seed/iseo-shield/900/900",
      gallery: [],
      isPolarized: true,
      isFeatured: false,
      rating: "4.4",
    },
    {
      categoryId: optical.id,
      name: "Kessler Rectangle",
      slug: "kessler-rectangle",
      description:
        "A precise rectangular optical frame in matte titanium. Spring hinges, adjustable nose pads, ready for any prescription lens.",
      frameShape: "Rectangle",
      frameMaterial: "Titanium",
      lensWidthMm: 54,
      bridgeWidthMm: 17,
      templeLengthMm: 145,
      priceCents: 22000,
      stock: 37,
      imageUrl: "https://picsum.photos/seed/kessler-rectangle/900/900",
      gallery: ["https://picsum.photos/seed/kessler-rectangle-2/900/900"],
      isPolarized: false,
      isFeatured: true,
      rating: "4.9",
    },
    {
      categoryId: optical.id,
      name: "Marchetti Cat-Eye",
      slug: "marchetti-cat-eye",
      description:
        "A restrained cat-eye in layered acetate — amber over black — with a subtle upswept temple line.",
      frameShape: "Cat-Eye",
      frameMaterial: "Acetate",
      lensWidthMm: 51,
      bridgeWidthMm: 16,
      templeLengthMm: 140,
      priceCents: 20500,
      stock: 24,
      imageUrl: "https://picsum.photos/seed/marchetti-cateye/900/900",
      gallery: [],
      isPolarized: false,
      isFeatured: false,
      rating: "4.7",
    },
    {
      categoryId: optical.id,
      name: "Voss Oval",
      slug: "voss-oval",
      description:
        "A slim oval frame in brushed gold-tone metal, sized for narrower faces. Comes with a set of interchangeable nose pads.",
      frameShape: "Oval",
      frameMaterial: "Stainless Steel",
      lensWidthMm: 48,
      bridgeWidthMm: 20,
      templeLengthMm: 140,
      priceCents: 18900,
      stock: 45,
      imageUrl: "https://picsum.photos/seed/voss-oval/900/900",
      gallery: [],
      isPolarized: false,
      isFeatured: false,
      rating: "4.3",
    },
    {
      categoryId: optical.id,
      name: "Torrey Browline",
      slug: "torrey-browline",
      description:
        "A modern take on the classic browline: acetate top, thin metal bottom rims, in a warm walnut tortoise.",
      frameShape: "Browline",
      frameMaterial: "Acetate / Metal",
      lensWidthMm: 52,
      bridgeWidthMm: 19,
      templeLengthMm: 145,
      priceCents: 21500,
      stock: 29,
      imageUrl: "https://picsum.photos/seed/torrey-browline/900/900",
      gallery: [],
      isPolarized: false,
      isFeatured: false,
      rating: "4.6",
    },
    {
      categoryId: accessories.id,
      name: "Hard-Shell Travel Case",
      slug: "hard-shell-travel-case",
      description:
        "A rigid EVA case lined in microfiber, sized for oversized frames. Magnetic clasp, carabiner loop.",
      frameShape: null,
      frameMaterial: "EVA / Microfiber",
      lensWidthMm: null,
      bridgeWidthMm: null,
      templeLengthMm: null,
      priceCents: 2800,
      stock: 120,
      imageUrl: "https://picsum.photos/seed/travel-case/900/900",
      gallery: [],
      isPolarized: false,
      isFeatured: false,
      rating: "4.7",
    },
    {
      categoryId: accessories.id,
      name: "Lens Cleaning Kit",
      slug: "lens-cleaning-kit",
      description:
        "Two microfiber cloths, an anti-fog spray, and a precision screwdriver for hinge adjustments — everything a frame needs between fittings.",
      frameShape: null,
      frameMaterial: null,
      lensWidthMm: null,
      bridgeWidthMm: null,
      templeLengthMm: null,
      priceCents: 1600,
      stock: 200,
      imageUrl: "https://picsum.photos/seed/cleaning-kit/900/900",
      gallery: [],
      isPolarized: false,
      isFeatured: false,
      rating: "4.5",
    },
  ]);

  console.log("Done.");
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
