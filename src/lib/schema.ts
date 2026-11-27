import {
  lockedH1,
  site,
  type City,
  type Service,
} from "@/config/site";
import type { Faq } from "@/lib/content";
import type { Listing } from "@/types/listing";

export function publisherLocalBusiness(city: City) {
  const leadLine = `It is not affiliated with the ${city.name} companies it lists.`;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    alternateName: site.name,
    description: `${site.name} is a directory that publishes city pages for roofing. It does not invent company names, star ratings, or city-specific prices, and it does not perform field work. ${leadLine}`,
    url: site.url,
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

/** Homepage-only publisher graph. No reviews, ratings, or invented phone/address. */
export function organizationSchema() {
  const url = trailingSlashUrl("/");
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    alternateName: site.name,
    url,
    email: site.email,
    description: site.description,
    knowsAbout: "Roofing directory",
  };
}

/** Homepage-only WebSite node. No SearchAction, this site has no site search. */
export function webSiteSchema() {
  const url = trailingSlashUrl("/");
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url,
    description: site.description,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      url,
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

/** ItemList of the verified roofing companies on a city × service page. Never AggregateRating or Review. Empty → null. */
export function listingsItemListSchema(
  city: City,
  service: Service,
  listings: Listing[]
) {
  if (!listings.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${service.name} companies in ${city.name}, ${city.stateAbbr}`,
    numberOfItems: listings.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: listings.map((listing, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "RoofingContractor",
        name: listing.name,
        ...(listing.legal_name && listing.legal_name !== listing.name
          ? { legalName: listing.legal_name }
          : {}),
        telephone: listing.phone,
        description: listing.blurb,
        ...(listing.website ? { url: listing.website } : {}),
        sameAs: [listing.profile_url],
        ...(listing.address
          ? {
              address: {
                "@type": "PostalAddress",
                streetAddress: listing.address.street,
                addressLocality: listing.address.locality,
                addressRegion: listing.address.region,
                postalCode: listing.address.postal_code,
                addressCountry: "US",
              },
            }
          : {}),
        ...(listing.year_started
          ? { foundingDate: String(listing.year_started) }
          : {}),
        areaServed: listing.areas_served.map((area) => ({
          "@type": area.endsWith("County") ? "AdministrativeArea" : "City",
          name: area,
        })),
      },
    })),
  };
}
