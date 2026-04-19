// Central SEO config — change SITE_URL when custom domain is connected.
export const SITE_URL = "https://bortuhafreelance.lovable.app";
export const SITE_NAME = "Natali Fursa";
export const DEFAULT_OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/41ledUTcSsRlUbEtjTOSWkObH7Z2/social-images/social-1775298469894-about_hero_illustration.webp";

// Reusable JSON-LD: LocalBusiness / ProfessionalService for the brand.
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Natali Fursa — дизайн интерьеров",
  alternateName: "Наталия Фурса",
  description:
    "Дизайнер интерьеров Наталия Фурса. Авторские дизайн-проекты жилых и коммерческих пространств в Симферополе и на Южном берегу Крыма.",
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  telephone: "+7-978-540-09-81",
  email: "bortnik.n.n@yandex.ru",
  priceRange: "₽₽₽",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Симферополь",
    addressRegion: "Республика Крым",
    addressCountry: "RU",
  },
  areaServed: [
    { "@type": "City", name: "Симферополь" },
    { "@type": "City", name: "Ялта" },
    { "@type": "City", name: "Севастополь" },
    { "@type": "Place", name: "Южный берег Крыма" },
  ],
  sameAs: [
    "https://vk.ru/visfursa",
    "https://www.behance.net/bd28e124",
  ],
  founder: {
    "@type": "Person",
    name: "Наталия Фурса",
    jobTitle: "Дизайнер интерьеров",
  },
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Наталия Фурса",
  alternateName: "Natali Fursa",
  jobTitle: "Дизайнер интерьеров",
  description:
    "Дизайнер и визуализатор интерьера. 3 года практики, более 40 реализованных объектов в Симферополе и Крыму.",
  url: `${SITE_URL}/about`,
  image: DEFAULT_OG_IMAGE,
  worksFor: {
    "@type": "Organization",
    name: SITE_NAME,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Симферополь",
    addressCountry: "RU",
  },
  sameAs: [
    "https://vk.ru/visfursa",
    "https://www.behance.net/bd28e124",
  ],
};

export function breadcrumbJsonLd(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
