import Link from "next/link";
import { EstimateRequest } from "@/components/estimate-request";
import {
  listingsEmptyFollowUp,
  listingsEmptyNote,
  listingsHoldNote,
  site,
  type City,
  type Service,
} from "@/config/site";
import type { Listing } from "@/types/listing";

const TIER_LABEL: Record<Listing["tier"], string> = {
  featured: "Featured (paid placement)",
  exclusive: "Exclusive (paid placement)",
  standard: "Listing",
};

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${m}/${d}/${y}`;
}

export function ListingsBlock({
  listings,
  city,
  service,
}: {
  listings: Listing[];
  city: City;
  service: Service;
}) {
  if (listings.length === 0) {
    return (
      <section id="listings" className="mt-10">
        <h2 className="font-heading text-xl font-semibold sm:text-2xl">
          {`${service.name} companies in ${city.name}`}
        </h2>
        <div className="mt-4 rounded-[14px] border border-border bg-card p-5 shadow-[0_12px_32px_rgba(19,32,43,0.10)]">
          <p className="font-heading text-lg font-semibold leading-[26px]">
            {listingsEmptyNote(city)}
          </p>
          <p className="mt-2 text-sm leading-[22px] text-muted-foreground">
            {listingsEmptyFollowUp()}. No credit card, no obligation.
          </p>
          <a
            href="#quote"
            className="mt-4 inline-flex h-11 items-center justify-center rounded-[14px] bg-primary px-4 text-[15px] font-medium leading-5 text-primary-foreground hover:bg-primary/90"
          >
            Get a roof quote
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="listings" className="mt-10">
      <h2 className="font-heading text-xl font-semibold sm:text-2xl">
        {`${service.name} companies in ${city.name}`}
      </h2>
      <p className="mt-2 text-sm leading-[22px] text-muted-foreground">
        {listingsHoldNote(city)}{" "}
        <Link href="/how-we-list/" className="underline underline-offset-2">
          How we list companies
        </Link>
      </p>
      <ol className="mt-4 space-y-4">
        {listings.map((listing) => (
          <li
            key={`${listing.tier}-${listing.name}`}
            className="rounded-[14px] border border-border bg-card p-5 shadow-[0_12px_32px_rgba(19,32,43,0.10)]"
          >
            <span className="text-xs font-medium text-muted-foreground">
              {TIER_LABEL[listing.tier]}
              {listing.rank ? ` #${listing.rank}` : ""}
            </span>
            <h3 className="mt-1 font-heading text-lg font-semibold">
              <a
                href={listing.profile_url}
                className="hover:underline"
                rel="nofollow noopener"
                target="_blank"
              >
                {listing.name}
              </a>
            </h3>
            {listing.blurb ? (
              <p className="mt-1 text-sm leading-[22px] text-muted-foreground">
                {listing.blurb}
              </p>
            ) : null}
            <dl className="mt-3 grid gap-1 text-sm">
              {listing.address ? (
                <div>
                  <dt className="inline font-medium">Address: </dt>
                  <dd className="inline">
                    {listing.address.street}, {listing.address.locality},{" "}
                    {listing.address.region} {listing.address.postal_code}
                  </dd>
                </div>
              ) : null}
              {listing.phone ? (
                <div>
                  <dt className="inline font-medium">Phone: </dt>
                  <dd className="inline">
                    <a
                      href={`tel:+1${listing.phone.replace(/\D/g, "")}`}
                      className="underline"
                    >
                      {listing.phone}
                    </a>
                  </dd>
                </div>
              ) : null}
              {listing.year_started ? (
                <div>
                  <dt className="inline font-medium">In business since: </dt>
                  <dd className="inline">{listing.year_started}</dd>
                </div>
              ) : null}
              {listing.bbb_accredited ? (
                <div>
                  <dt className="inline font-medium">BBB: </dt>
                  <dd className="inline">
                    Accredited Business
                    {listing.bbb_accredited_since
                      ? ` since ${formatDate(listing.bbb_accredited_since)}`
                      : ""}
                  </dd>
                </div>
              ) : null}
              {listing.areas_served.length > 0 ? (
                <div>
                  <dt className="inline font-medium">Areas served: </dt>
                  <dd className="inline">{listing.areas_served.join(", ")}</dd>
                </div>
              ) : null}
              <div>
                <dt className="inline font-medium">License: </dt>
                <dd className="inline">
                  {listing.license_id ||
                    listing.license_note ||
                    "Not shown. Ask the company."}
                </dd>
              </div>
            </dl>
            <p className="mt-3">
              <a
                href={listing.profile_url}
                className="text-sm font-medium underline underline-offset-2"
                rel="nofollow noopener"
                target="_blank"
              >
                View {listing.name} on BBB
              </a>
            </p>
            <EstimateRequest listing={listing} city={city} service={service} />
            {listing.sources && listing.sources.length > 0 ? (
              <details className="mt-3 text-xs leading-5 text-muted-foreground">
                <summary className="cursor-pointer">Sources and notes</summary>
                {listing.ranking_basis ? <p className="mt-2">{listing.ranking_basis}</p> : null}
                <ul className="mt-2 space-y-1 break-all">
                  {listing.sources.map((source) => (
                    <li key={source.url}>
                      {source.label}, checked {formatDate(source.checked)}: {source.url}
                    </li>
                  ))}
                </ul>
                {listing.notes && listing.notes.length > 0 ? (
                  <ul className="mt-2 list-disc space-y-1 pl-4">
                    {listing.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                ) : null}
              </details>
            ) : null}
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs leading-5 text-muted-foreground">
        {site.name} does not copy star ratings or review counts. Each company
        name links to its own BBB profile, where you can read its record.
      </p>
    </section>
  );
}
