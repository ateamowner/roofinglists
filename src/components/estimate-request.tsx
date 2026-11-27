import Link from "next/link";
import { site, type City, type Service } from "@/config/site";
import type { Listing } from "@/types/listing";

const fieldClassName =
  "h-11 w-full rounded-[14px] border border-input bg-card px-2.5 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

function slugify(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/**
 * Per-company "Request an estimate" CTA. A native <details> + HTML POST to
 * FormSubmit, so it works with no JavaScript. Delivers to site.leadsEmail
 * (owner@ inbox) only. The company name and page URL ride along as hidden fields.
 */
export function EstimateRequest({
  listing,
  city,
  service,
  pagePath,
  serviceLabel,
}: {
  listing: Listing;
  city: City;
  service: Service;
  /** When set (city hubs), the hidden page_url is this path instead of the service page. */
  pagePath?: string;
  /** When set (city hubs), used in the visible copy and email subject instead of the service name. */
  serviceLabel?: string;
}) {
  const id = `estimate-${slugify(listing.name)}`;
  const label = serviceLabel ?? service.name;
  const pageUrl = `${site.url.replace(/\/+$/, "")}${
    pagePath ?? `/${city.slug}/${service.slug}/`
  }`;

  return (
    <details className="group mt-4" id={id}>
      <summary className="inline-flex h-11 cursor-pointer list-none items-center justify-center rounded-[14px] bg-primary px-4 text-[15px] font-medium leading-5 text-primary-foreground hover:bg-primary/90 [&::-webkit-details-marker]:hidden">
        Request an estimate
      </summary>
      <form
        action={site.formAction}
        method="POST"
        acceptCharset="UTF-8"
        className="mt-3 grid gap-3 rounded-[14px] border border-border bg-muted/40 p-4"
      >
        <p className="text-[13px] leading-[20px] text-muted-foreground">
          Ask for a {label.toLowerCase()} estimate from {listing.name}.
          This request goes to the {site.name} inbox, not straight to{" "}
          {listing.name}. We follow up, usually within one business day. To
          reach the company yourself, call the number above.
        </p>
        <div>
          <label htmlFor={`${id}-name`} className="mb-1.5 block text-[13px] font-medium leading-[18px]">
            Name
          </label>
          <input id={`${id}-name`} name="name" required autoComplete="name" className={fieldClassName} />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className="mb-1.5 block text-[13px] font-medium leading-[18px]">
            Phone
          </label>
          <input id={`${id}-phone`} name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={fieldClassName} />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="mb-1.5 block text-[13px] font-medium leading-[18px]">
            Email
          </label>
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" className={fieldClassName} />
        </div>
        <div>
          <label htmlFor={`${id}-address`} className="mb-1.5 block text-[13px] font-medium leading-[18px]">
            Address or ZIP
          </label>
          <input id={`${id}-address`} name="address_or_zip" required autoComplete="street-address" className={fieldClassName} />
        </div>
        <div>
          <label htmlFor={`${id}-note`} className="mb-1.5 block text-[13px] font-medium leading-[18px]">
            Short job note
          </label>
          <textarea
            id={`${id}-note`}
            name="job_note"
            rows={3}
            className="min-h-20 w-full rounded-[14px] border border-input bg-card px-2.5 py-2 text-base leading-[26px] outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            placeholder="Leak spot, storm date, roof age, or access notes."
          />
        </div>
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <input type="hidden" name="_next" value={site.formRedirect} />
        <input type="hidden" name="_subject" value={`${site.name} estimate request: ${listing.name} (${city.name}, ${label})`} />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="company_name" value={listing.name} />
        <input type="hidden" name="company_bbb_profile" value={listing.profile_url} />
        <input type="hidden" name="page_url" value={pageUrl} />
        <input type="hidden" name="city" value={city.name} />
        <input type="hidden" name="service" value={service.slug} />
        <input type="hidden" name="form" value="company-estimate" />
        <input type="hidden" name="source" value="roofinglists.com" />
        <button
          type="submit"
          className="inline-flex h-11 w-full items-center justify-center rounded-[14px] bg-primary text-[15px] font-medium leading-5 text-primary-foreground hover:bg-primary/90"
        >
          Send estimate request
        </button>
        <p className="text-xs leading-5 text-muted-foreground">
          By sending, you agree to the{" "}
          <Link href="/privacy/" className="underline underline-offset-2">
            privacy policy
          </Link>
          . No credit card. We never sell your request.
        </p>
      </form>
    </details>
  );
}
