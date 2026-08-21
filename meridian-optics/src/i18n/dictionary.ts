export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

type Dictionary = {
  brand: { name: string; tagline: string };
  nav: { sunglasses: string; optical: string; accessories: string };
  cart: { label: string; item: string; items: string };
  home: {
    eyebrow: string;
    line1: string;
    line2: string;
    line3: string;
    intro: string;
    featured: string;
    frames: string;
  };
  category: {
    emptyTitle: string;
    empty: string;
  };
  product: {
    frame: string;
    specSheet: string;
    frameShape: string;
    material: string;
    lensWidth: string;
    bridge: string;
    temple: string;
    polarized: string;
    yes: string;
    no: string;
    addToCart: string;
    addShort: string;
    added: string;
  };
  cartPage: {
    title: string;
    emptyTitle: string;
    emptyBody: string;
    browse: string;
    subtotal: string;
    remove: string;
    checkout: string;
    quantityFor: string;
  };
  checkoutPage: {
    title: string;
    subtotal: string;
    pay: string;
    redirecting: string;
    genericError: string;
  };
  footer: {
    blurb: string;
    shop: string;
    studio: string;
    about: string;
    fitGuide: string;
    contact: string;
    notesTitle: string;
    notes: string;
    rights: string;
    made: string;
  };
  langSwitch: { label: string };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    brand: { name: "MERIDIAN", tagline: "Optics Co." },
    nav: { sunglasses: "Sunglasses", optical: "Optical", accessories: "Accessories" },
    cart: { label: "Cart", item: "item", items: "items" },
    home: {
      eyebrow: "Est. optics studio — every frame to spec",
      line1: "SEE",
      line2: "PRECISELY",
      line3: "MERIDIAN OPTICS",
      intro:
        "Frames measured, cut, and finished the way an optician would check them — to the millimeter. Sunglasses and optical, ready for your prescription.",
      featured: "Featured",
      frames: "frames",
    },
    category: {
      emptyTitle: "Nothing here yet",
      empty: "Nothing in this category yet — check back soon.",
    },
    product: {
      frame: "Frame",
      specSheet: "Spec sheet",
      frameShape: "Frame shape",
      material: "Material",
      lensWidth: "Lens width",
      bridge: "Bridge",
      temple: "Temple",
      polarized: "Polarized",
      yes: "Yes",
      no: "No",
      addToCart: "Add to cart",
      addShort: "Add",
      added: "Added to cart",
    },
    cartPage: {
      title: "Your cart",
      emptyTitle: "Nothing here yet",
      emptyBody: "Frames you add will show up here.",
      browse: "Browse frames",
      subtotal: "Subtotal",
      remove: "Remove",
      checkout: "Checkout",
      quantityFor: "Quantity for",
    },
    checkoutPage: {
      title: "Checkout",
      subtotal: "Order subtotal",
      pay: "Pay with Stripe",
      redirecting: "Redirecting…",
      genericError: "Something went wrong",
    },
    footer: {
      blurb:
        "Frames measured, cut, and finished the way an optician would check them — to the millimeter.",
      shop: "Shop",
      studio: "Studio",
      about: "About",
      fitGuide: "Fit guide",
      contact: "Contact",
      notesTitle: "Notes",
      notes:
        "Free adjustments for the life of the frame at any partner optician. Bring your receipt.",
      rights: "Meridian Optics Co.",
      made: "Made for careful eyes",
    },
    langSwitch: { label: "العربية" },
  },
  ar: {
    brand: { name: "ميريديان", tagline: "للبصريات" },
    nav: { sunglasses: "نظارات شمس", optical: "نظارات طبية", accessories: "إكسسوارات" },
    cart: { label: "السلة", item: "قطعة", items: "قطع" },
    home: {
      eyebrow: "استوديو بصريات — كل إطار على المقاس بالمليمتر",
      line1: "شوف",
      line2: "بدقة",
      line3: "ميريديان للبصريات",
      intro:
        "إطارات تُقاس وتُقص وتُشطّب بنفس دقة أخصائي البصريات — بالمليمتر. نظارات شمس وطبية، جاهزة لوصفتك الطبية.",
      featured: "مختارات",
      frames: "إطار",
    },
    category: {
      emptyTitle: "لا يوجد شيء هنا بعد",
      empty: "لا يوجد منتجات في هذا التصنيف بعد — تابعنا قريبًا.",
    },
    product: {
      frame: "إطار",
      specSheet: "المواصفات",
      frameShape: "شكل الإطار",
      material: "الخامة",
      lensWidth: "عرض العدسة",
      bridge: "الجسر",
      temple: "الذراع",
      polarized: "مستقطبة",
      yes: "نعم",
      no: "لا",
      addToCart: "أضف إلى السلة",
      addShort: "أضف",
      added: "تمت الإضافة",
    },
    cartPage: {
      title: "سلتك",
      emptyTitle: "لا يوجد شيء هنا بعد",
      emptyBody: "الإطارات التي تضيفها ستظهر هنا.",
      browse: "تصفح الإطارات",
      subtotal: "الإجمالي الفرعي",
      remove: "إزالة",
      checkout: "إتمام الشراء",
      quantityFor: "الكمية لـ",
    },
    checkoutPage: {
      title: "إتمام الشراء",
      subtotal: "إجمالي الطلب",
      pay: "ادفع عبر Stripe",
      redirecting: "جارٍ التحويل…",
      genericError: "حدث خطأ ما",
    },
    footer: {
      blurb: "إطارات تُقاس وتُقص وتُشطّب بنفس دقة أخصائي البصريات — بالمليمتر.",
      shop: "المتجر",
      studio: "الاستوديو",
      about: "من نحن",
      fitGuide: "دليل المقاسات",
      contact: "تواصل معنا",
      notesTitle: "ملاحظات",
      notes: "تعديلات مجانية مدى عمر الإطار لدى أي أخصائي بصريات شريك. أحضر إيصالك.",
      rights: "ميريديان للبصريات",
      made: "صُنع لعيون تستحق العناية",
    },
    langSwitch: { label: "English" },
  },
};
