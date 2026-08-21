import type { Metadata } from "next";
import { CartProvider } from "@/context/cart-context";
import { LocaleProvider } from "@/context/locale-context";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getLocale } from "@/i18n/get-locale";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meridian Optics Co.",
  description:
    "Frames measured, cut, and finished to the millimeter. Sunglasses, optical frames, and accessories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = getLocale();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className="flex min-h-screen flex-col font-body">
        <LocaleProvider initialLocale={locale}>
          <CartProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </CartProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
