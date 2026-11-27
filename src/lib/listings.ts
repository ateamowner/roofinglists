import listingsFile from "../../data/listings.json";
import type { Listing } from "@/types/listing";

const TIER_ORDER = { exclusive: 0, featured: 1, standard: 2 } as const;
const listingsData = listingsFile as unknown as Listing[];

/** A city × service page needs this many verified listings to be indexed and in the sitemap. */
export const MIN_INDEXABLE_LISTINGS = 3;

function isListing(value: unknown): value is Listing {
  if (!value || typeof value !== "object") return false;
  const item = value as Partial<Listing>;
  return (
    typeof item.name === "string" &&
    Array.isArray(item.areas_served) &&
    typeof item.phone === "string" &&
    typeof item.license_id === "string" &&
    typeof item.blurb === "string" &&
    (item.tier === "standard" ||
      item.tier === "featured" ||
      item.tier === "exclusive") &&
    typeof item.profile_url === "string" &&
    typeof item.city_slug === "string" &&
    typeof item.service_slug === "string"
  );
}

export function getListings(citySlug: string, serviceSlug: string): Listing[] {
  const rows = Array.isArray(listingsData) ? listingsData : [];
  return rows
    .filter(isListing)
    .filter(
      (listing) =>
        listing.city_slug === citySlug && listing.service_slug === serviceSlug
    )
    .sort(
      (a, b) =>
        TIER_ORDER[a.tier] - TIER_ORDER[b.tier] ||
        (a.rank ?? 99) - (b.rank ?? 99)
    );
}

/** True when a city × service page has fewer than 3 verified listings: noindex,follow and out of the sitemap. */
export function isThinServicePage(citySlug: string, serviceSlug: string): boolean {
  return getListings(citySlug, serviceSlug).length < MIN_INDEXABLE_LISTINGS;
}

/** A city hub is held back when it names fewer than 3 unique companies (same cap as service pages). */
export function isThinHub(citySlug: string, serviceSlugs: string[]): boolean {
  return getCityCompanies(citySlug, serviceSlugs).length < MIN_INDEXABLE_LISTINGS;
}

/** Unique companies listed on any of a city's service pages, ranked by first appearance. */
export function getCityCompanies(citySlug: string, serviceSlugs: string[]): Listing[] {
  const seen = new Map<string, Listing>();
  for (const slug of serviceSlugs) {
    for (const listing of getListings(citySlug, slug)) {
      if (!seen.has(listing.name)) seen.set(listing.name, listing);
    }
  }
  return [...seen.values()];
}
