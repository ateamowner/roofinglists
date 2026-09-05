import { lockedH1, site, type City, type Service } from "@/config/site";
import type { Faq } from "@/lib/content";

export function organizationId() {
  return `${site.url.replace(/\/+$/, "")}/#organization`;
}

/** City/hub publisher. Organization, not LocalBusiness — this directory is not a contractor. */
export function publisherLocalBusiness(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId(),
    name: site.legalName,
    alternateName: site.name,
    description: `${site.name} is a directory that publishes city pages for roofing. Dayton / Miami Valley, Columbus / Franklin County, and Cincinnati / Hamilton County quote requests stay with ${site.exclusiveContractor}. ${site.name} is not a roofing contractor and does not perform field work.`,
    url: trailingSlashUrl("/"),
    email: site.email,
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: city.state,
      },
    },
    knowsAbout: "Roofing directory",
  };
}

export function faqPageSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** Homepage only. Directory publisher — no phone, address, reviews, or AggregateRating. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://roofinglists.com/#organization",
    name: "RoofingLists",
    url: "https://roofinglists.com/",
    email: "owner@ateamcontractings.com",
    description:
      "Lead-generation directory. Paid placements labeled. Not a contractor.",
  };
}

/** Homepage only. No SearchAction — this site has no site search. */
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: trailingSlashUrl("/"),
    description: site.description,
    publisher: {
      "@id": organizationId(),
    },
  };
}

function trailingSlashUrl(path: string): string {
  const origin = site.url.replace(/\/+$/, "");
  if (path === "" || path === "/") return `${origin}/`;
  const withSlash = path.endsWith("/") ? path : `${path}/`;
  return `${origin}${withSlash.startsWith("/") ? withSlash : `/${withSlash}`}`;
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: trailingSlashUrl(item.path),
    })),
  };
}

export function servicePageBreadcrumbs(city: City, service: Service) {
  return breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: `${city.name}, ${city.stateAbbr}`, path: `/${city.slug}` },
    { name: service.name, path: `/${city.slug}/${service.slug}` },
  ]);
}

export function hubBreadcrumbs(city: City) {
  return breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: `${city.name}, ${city.stateAbbr}`, path: `/${city.slug}` },
  ]);
}

export function servicePageHeadline(city: City, service: Service) {
  return lockedH1(service, city);
}
