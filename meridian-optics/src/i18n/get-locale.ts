import { cookies } from "next/headers";
import { defaultLocale, locales, type Locale } from "./dictionary";
import { LOCALE_COOKIE } from "./constants";

export function getLocale(): Locale {
  const value = cookies().get(LOCALE_COOKIE)?.value;
  if (value && (locales as readonly string[]).includes(value)) {
    return value as Locale;
  }
  return defaultLocale;
}
