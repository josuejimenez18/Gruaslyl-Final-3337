import { site } from "./site";

const phones = site.phones.map((p) => p.tel);

/** Datos estructurados de la empresa para Google (perfil local + servicios). */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.domain}#business`,
  name: site.name,
  legalName: site.legalName,
  description:
    "Alquiler de grúas telescópicas de 5 a 65 toneladas, izaje y manejo de carga, montaje industrial y transporte de maquinaria en todo Costa Rica.",
  url: site.domain,
  image: `${site.domain}/images/hero.jpg`,
  logo: `${site.domain}/images/logo.png`,
  telephone: phones[0],
  email: site.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CR",
    addressRegion: "Costa Rica",
  },
  areaServed: { "@type": "Country", name: "Costa Rica" },
  sameAs: [site.facebook, site.instagram],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "06:00",
      closes: "18:00",
    },
  ],
  contactPoint: phones.map((tel) => ({
    "@type": "ContactPoint",
    telephone: tel,
    contactType: "sales",
    areaServed: "CR",
    availableLanguage: ["es", "en"],
  })),
};

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: `${site.domain}${path}`,
    provider: { "@id": `${site.domain}#business` },
    areaServed: { "@type": "Country", name: "Costa Rica" },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.domain}${item.path}`,
    })),
  };
}
