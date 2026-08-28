import type { Metadata } from "next";
import Link from "next/link";
import { liveCitySlugs, servicePath, site } from "@/config/site";

export const metadata: Metadata = {
  title: `For roofing companies — ${site.name}`,
  description: `How ${site.name} treats Dayton / Miami Valley coverage and what may be available later outside this ring. No exclusive Dayton-area leads. No credit card on this page.`,
};

export default function ForProsPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="font-heading text-4xl font-semibold tracking-tight">
        For roofing companies
      </h1>
      <p className="mt-4 text-lg leading-8">
        {site.name} publishes city pages homeowners already use to request a
        callback. We are not a fake contractor homepage. {site.disclosure}
      </p>
      <p className="mt-3 leading-7 text-muted-foreground">
        Live cities on this site are the Dayton / Miami Valley ring. Quote
        requests in that coverage stay with {site.exclusiveContractor} at{" "}
        {site.leadsEmail}. We do not sell those leads to other contractors, and
        we do not offer exclusive or sold Dayton-area leads on this page.
      </p>

      <h2 className="mt-10 font-heading text-2xl font-semibold">
        Dayton / Miami Valley coverage
      </h2>
      <p className="mt-3 leading-7">
        Every live city listed below is inside this ring. Homeowner forms on
        those URLs post to {site.leadsEmail}. {site.exclusiveContractor}{" "}
        receives those requests. We will not route a Dayton-area lead to
        another shop, and we will not sell exclusive category rights on those
        city × service URLs.
      </p>
      <p className="mt-3 leading-7">
        Paid listings may exist later <em>outside</em> this ring. That is not
        for sale here today. There is no approved payer list in this repo, so
        the inbox is {site.leadsEmail} only.
      </p>

      <h2 className="mt-10 font-heading text-2xl font-semibold">
        What is not for sale here
      </h2>
      <ul className="mt-4 space-y-4">
        <li className="rounded-lg border border-border bg-card p-4">
          <p className="font-semibold">Exclusive or sold Dayton-area leads</p>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            Not offered. Dayton, Oakwood, Troy, Springboro, and the other live
            cities in this coverage stay with {site.exclusiveContractor}. Do
            not email asking to buy those inbound quotes.
          </p>
        </li>
        <li className="rounded-lg border border-border bg-card p-4">
          <p className="font-semibold">Invented listings</p>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            We do not invent company names, phones, licenses, star ratings, or
            city-specific prices to fill a page. Standard, featured, and
            exclusive placement labels exist in the templates for a future
            market outside this ring — they are not a Dayton lead auction.
          </p>
        </li>
      </ul>

      <h2 className="mt-10 font-heading text-2xl font-semibold">
        What may exist later
      </h2>
      <p className="mt-3 leading-7">
        If {site.name} adds cities outside this Dayton / Miami Valley ring,
        labeled paid listings (standard or featured) may be available there.
        Exclusive sold leads will still not apply to the cities listed on this
        page. There is no credit-card field on {site.name}.
      </p>
      <p className="mt-3 leading-7">
        The form collects name, phone, email, ZIP, service, timing, optional
        roof type and age, optional message, SMS consent, and required privacy
        consent. Hidden fields carry page URL, city, state, and service. Every
        request in this coverage is held at {site.leadsEmail}.
      </p>

      <h2 className="mt-10 font-heading text-2xl font-semibold">Contact</h2>
      <p className="mt-3 leading-7">
        Questions about a future market outside this ring — not about buying
        Dayton-area leads — go to{" "}
        <a href={`mailto:${site.email}`} className="underline">
          {site.email}
        </a>
        . Do not send card numbers to the homeowner form.
      </p>

      <h2 className="mt-10 font-heading text-2xl font-semibold">
        Live URLs in this coverage
      </h2>
      <ul className="mt-3 space-y-2">
        {liveCitySlugs.map((slug) => (
          <li key={slug}>
            <Link
              href={servicePath(slug, "roof-repair")}
              className="underline underline-offset-2"
            >
              {servicePath(slug, "roof-repair")}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
