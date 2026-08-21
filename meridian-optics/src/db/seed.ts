import { db } from "./index";
import { categories, products } from "./schema";

async function main() {
  console.log("Seeding Meridian Optics catalog…");

  const [sun, optical, accessories] = await db
    .insert(categories)
    .values([
      {
        name: "Sunglasses",
        nameAr: "نظارات شمس",
        slug: "sunglasses",
        description:
          "UV400-rated frames for everyday light, engineered with the same tolerances as our optical line.",
        descriptionAr:
          "إطارات بحماية UV400 للاستخدام اليومي، مصنّعة بنفس دقة خط النظارات الطبية لدينا.",
      },
      {
        name: "Optical",
        nameAr: "نظارات طبية",
        slug: "optical",
        description:
          "Prescription-ready frames. Every pair ships with demo lenses and a lab-ready spec sheet.",
        descriptionAr:
          "إطارات جاهزة للوصفة الطبية. كل قطعة تُشحن بعدسات تجريبية وورقة مواصفات جاهزة للمعمل.",
      },
      {
        name: "Accessories",
        nameAr: "إكسسوارات",
        slug: "accessories",
        description: "Cases, cloths, and small tools for the care of good glasses.",
        descriptionAr: "علب، قطع قماش، وأدوات صغيرة للعناية بنظارتك الجيدة.",
      },
    ])
    .returning();

  await db.insert(products).values([
    {
      categoryId: sun.id,
      name: "Halden Aviator",
      nameAr: "هالدن أفياتور",
      slug: "halden-aviator",
      description:
        "A double-bridge aviator in brushed titanium with G-15 polarized lenses. Cuts glare without shifting color temperature — true greens stay green.",
      descriptionAr:
        "إطار أفياتور بجسر مزدوج من التيتانيوم المصقول مع عدسات G-15 مستقطبة. يقلل الوهج دون تغيير درجة الألوان — الأخضر يبقى أخضر كما هو.",
      frameShape: "Aviator",
      frameShapeAr: "أفياتور",
      frameMaterial: "Titanium",
      frameMaterialAr: "تيتانيوم",
      lensWidthMm: 58,
      bridgeWidthMm: 14,
      templeLengthMm: 140,
      priceCents: 24500,
      compareAtPriceCents: null,
      stock: 42,
      imageUrl: "/products/halden-aviator.svg",
      gallery: [],
      isPolarized: true,
      isFeatured: true,
      rating: "4.8",
    },
    {
      categoryId: sun.id,
      name: "Corso Round",
      nameAr: "كورسو راوند",
      slug: "corso-round",
      description:
        "Hand-polished acetate in a tortoise finish, cut fuller than most rounds to sit well on wider faces. Grey-green polarized lenses.",
      descriptionAr:
        "أسيتات مصقولة يدويًا بلمسة السلحفاة، مقصوصة بشكل أعرض من المعتاد لتناسب الوجوه الواسعة. عدسات رمادية-خضراء مستقطبة.",
      frameShape: "Round",
      frameShapeAr: "دائري",
      frameMaterial: "Acetate",
      frameMaterialAr: "أسيتات",
      lensWidthMm: 50,
      bridgeWidthMm: 21,
      templeLengthMm: 145,
      priceCents: 19800,
      stock: 30,
      imageUrl: "/products/corso-round.svg",
      gallery: [],
      isPolarized: true,
      isFeatured: true,
      rating: "4.6",
    },
    {
      categoryId: sun.id,
      name: "Belmar Wayfarer",
      nameAr: "بيلمار ويفيرر",
      slug: "belmar-wayfarer",
      description:
        "The studio's best seller. A squared acetate silhouette with a slightly lowered temple for a relaxed, low-bridge fit.",
      descriptionAr:
        "الأكثر مبيعًا في الاستوديو. شكل أسيتات مربع مع ذراع منخفض قليلاً لملاءمة مريحة لجسور الأنف المنخفضة.",
      frameShape: "Wayfarer",
      frameShapeAr: "ويفيرر",
      frameMaterial: "Acetate",
      frameMaterialAr: "أسيتات",
      lensWidthMm: 52,
      bridgeWidthMm: 18,
      templeLengthMm: 145,
      priceCents: 17500,
      compareAtPriceCents: 21000,
      stock: 65,
      imageUrl: "/products/belmar-wayfarer.svg",
      gallery: [],
      isPolarized: false,
      isFeatured: false,
      rating: "4.5",
    },
    {
      categoryId: sun.id,
      name: "Iseo Shield",
      nameAr: "إيسيو شيلد",
      slug: "iseo-shield",
      description:
        "A single-lens wraparound shield with a stainless steel core. Built for high-glare environments — water, snow, open road.",
      descriptionAr:
        "درع لفّي بعدسة واحدة وقلب من الستانلس ستيل. مصمم للبيئات شديدة الوهج — الماء، الثلج، والطرق المفتوحة.",
      frameShape: "Shield",
      frameShapeAr: "درع",
      frameMaterial: "Nylon / Steel core",
      frameMaterialAr: "نايلون / قلب ستانلس ستيل",
      lensWidthMm: 62,
      bridgeWidthMm: 16,
      templeLengthMm: 130,
      priceCents: 21000,
      stock: 18,
      imageUrl: "/products/iseo-shield.svg",
      gallery: [],
      isPolarized: true,
      isFeatured: false,
      rating: "4.4",
    },
    {
      categoryId: optical.id,
      name: "Kessler Rectangle",
      nameAr: "كيسلر ريكتانجل",
      slug: "kessler-rectangle",
      description:
        "A precise rectangular optical frame in matte titanium. Spring hinges, adjustable nose pads, ready for any prescription lens.",
      descriptionAr:
        "إطار طبي مستطيل دقيق من التيتانيوم المطفي. مفصلات نابضية، وسادات أنف قابلة للتعديل، جاهز لأي عدسة طبية.",
      frameShape: "Rectangle",
      frameShapeAr: "مستطيل",
      frameMaterial: "Titanium",
      frameMaterialAr: "تيتانيوم",
      lensWidthMm: 54,
      bridgeWidthMm: 17,
      templeLengthMm: 145,
      priceCents: 22000,
      stock: 37,
      imageUrl: "/products/kessler-rectangle.svg",
      gallery: [],
      isPolarized: false,
      isFeatured: true,
      rating: "4.9",
    },
    {
      categoryId: optical.id,
      name: "Marchetti Cat-Eye",
      nameAr: "ماركيتي كات آي",
      slug: "marchetti-cat-eye",
      description:
        "A restrained cat-eye in layered acetate — amber over black — with a subtle upswept temple line.",
      descriptionAr:
        "شكل كات آي أنيق من أسيتات متعدد الطبقات — كهرماني فوق أسود — مع خط ذراع مرفوع بلطف.",
      frameShape: "Cat-Eye",
      frameShapeAr: "كات آي",
      frameMaterial: "Acetate",
      frameMaterialAr: "أسيتات",
      lensWidthMm: 51,
      bridgeWidthMm: 16,
      templeLengthMm: 140,
      priceCents: 20500,
      stock: 24,
      imageUrl: "/products/marchetti-cateye.svg",
      gallery: [],
      isPolarized: false,
      isFeatured: false,
      rating: "4.7",
    },
    {
      categoryId: optical.id,
      name: "Voss Oval",
      nameAr: "فوس أوفال",
      slug: "voss-oval",
      description:
        "A slim oval frame in brushed gold-tone metal, sized for narrower faces. Comes with a set of interchangeable nose pads.",
      descriptionAr:
        "إطار بيضاوي رفيع من معدن ذهبي مصقول، بمقاس يناسب الوجوه الضيقة. يأتي مع طقم وسادات أنف قابلة للتبديل.",
      frameShape: "Oval",
      frameShapeAr: "بيضاوي",
      frameMaterial: "Stainless Steel",
      frameMaterialAr: "ستانلس ستيل",
      lensWidthMm: 48,
      bridgeWidthMm: 20,
      templeLengthMm: 140,
      priceCents: 18900,
      stock: 45,
      imageUrl: "/products/voss-oval.svg",
      gallery: [],
      isPolarized: false,
      isFeatured: false,
      rating: "4.3",
    },
    {
      categoryId: optical.id,
      name: "Torrey Browline",
      nameAr: "توري براولاين",
      slug: "torrey-browline",
      description:
        "A modern take on the classic browline: acetate top, thin metal bottom rims, in a warm walnut tortoise.",
      descriptionAr:
        "لمسة عصرية على شكل البراولاين الكلاسيكي: أعلى من الأسيتات، وحواف سفلية معدنية رفيعة، بلون سلحفاة جوزي دافئ.",
      frameShape: "Browline",
      frameShapeAr: "براولاين",
      frameMaterial: "Acetate / Metal",
      frameMaterialAr: "أسيتات / معدن",
      lensWidthMm: 52,
      bridgeWidthMm: 19,
      templeLengthMm: 145,
      priceCents: 21500,
      stock: 29,
      imageUrl: "/products/torrey-browline.svg",
      gallery: [],
      isPolarized: false,
      isFeatured: false,
      rating: "4.6",
    },
    {
      categoryId: accessories.id,
      name: "Hard-Shell Travel Case",
      nameAr: "علبة سفر صلبة",
      slug: "hard-shell-travel-case",
      description:
        "A rigid EVA case lined in microfiber, sized for oversized frames. Magnetic clasp, carabiner loop.",
      descriptionAr:
        "علبة صلبة من الإيفا مبطنة بالميكروفايبر، بمقاس يناسب الإطارات الكبيرة. إغلاق مغناطيسي وحلقة تعليق.",
      frameShape: null,
      frameShapeAr: null,
      frameMaterial: "EVA / Microfiber",
      frameMaterialAr: "إيفا / ميكروفايبر",
      lensWidthMm: null,
      bridgeWidthMm: null,
      templeLengthMm: null,
      priceCents: 2800,
      stock: 120,
      imageUrl: "/products/travel-case.svg",
      gallery: [],
      isPolarized: false,
      isFeatured: false,
      rating: "4.7",
    },
    {
      categoryId: accessories.id,
      name: "Lens Cleaning Kit",
      nameAr: "طقم تنظيف العدسات",
      slug: "lens-cleaning-kit",
      description:
        "Two microfiber cloths, an anti-fog spray, and a precision screwdriver for hinge adjustments — everything a frame needs between fittings.",
      descriptionAr:
        "قطعتا قماش ميكروفايبر، بخاخ مضاد للضباب، ومفك دقيق لضبط المفصلات — كل ما يحتاجه الإطار بين الاستخدامات.",
      frameShape: null,
      frameShapeAr: null,
      frameMaterial: null,
      frameMaterialAr: null,
      lensWidthMm: null,
      bridgeWidthMm: null,
      templeLengthMm: null,
      priceCents: 1600,
      stock: 200,
      imageUrl: "/products/cleaning-kit.svg",
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
