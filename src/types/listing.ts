import type { ListingTier } from "@/config/site";

export type ListingSource = {
  /** What the source confirms, e.g. "BBB profile" or "Company website". */
  label: string;
  url: string;
  /** Date the source was checked (America/New_York). */
  checked: string;
};

export type ListingAddress = {
  street: string;
  locality: string;
  region: string;
  postal_code: string;
  source: string;
};

export type Listing = {
  name: string;
  areas_served: string[];
  phone: string;
  license_id: string;
  blurb: string;
  tier: ListingTier;
  /** The company's own BBB (or Google Business) profile. Cards link here only. */
  profile_url: string;
  city_slug: string;
  service_slug: string;
  /** Optional verified fields. Every value is cited in `sources`. */
  legal_name?: string;
  address?: ListingAddress;
  phone_source?: string;
  website?: string;
  year_started?: number | null;
  year_started_source?: string;
  bbb_accredited?: boolean;
  bbb_accredited_since?: string | null;
  license_note?: string;
  coverage_basis?: string[];
  rank?: number;
  ranking_basis?: string;
  sources?: ListingSource[];
  notes?: string[];
};
