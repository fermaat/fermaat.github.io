import type { Locale } from "./strings";

// Detect locale from an Astro URL. Astro's i18n also exposes `Astro.currentLocale`,
// but pages under `/es/` always imply ES, so we derive it from the path for simplicity.
export function getLocale(url: URL | string): Locale {
  const pathname = typeof url === "string" ? url : url.pathname;
  return pathname.startsWith("/es/") || pathname === "/es" ? "es" : "en";
}

// Given the current path, build the counterpart in the other locale.
// Blog routes don't have an ES mirror — fall back to the ES home.
export function alternatePath(pathname: string, current: Locale): string {
  if (current === "es") {
    const stripped = pathname.replace(/^\/es(\/|$)/, "/");
    return stripped === "" ? "/" : stripped;
  }
  if (pathname.startsWith("/blog")) return "/es/";
  if (pathname === "/") return "/es/";
  return "/es" + pathname;
}

// Localise an internal link prefix. /projects/foo → /es/projects/foo in ES.
export function localizePath(pathname: string, locale: Locale): string {
  if (locale === "en") return pathname;
  if (pathname.startsWith("/es/") || pathname === "/es") return pathname;
  return "/es" + (pathname === "/" ? "/" : pathname);
}
