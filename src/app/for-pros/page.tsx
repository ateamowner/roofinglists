import type { Metadata } from "next";
import Link from "next/link";
import {
  citiesInRegion,
  servicePath,
  site,
} from "@/config/site";

export const metadata: Metadata = {
  title: `For roofing companies — ${site.name}`,
  description: `How ${site.name} treats Dayton / Miami Valley, Columbus, and Cincinnati coverage. No exclusive or sold Dayton, Columbus, or Cincinnati leads. No credit card on this page.`,
  alternates: { canonical: "/for-pros/" },
};

export default function ForProsPage() {
  const daytonCities = citiesInRegion("dayton");
  const columbusCities = citiesInRegion("columbus");
  const cincinnatiCities = citiesInRegion("cincinnati");

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
        Dayton / Miami Valley, Columbus / Franklin County, and Cincinnati /
        Hamilton County stay with {site.exclusiveContractor} at{" "}
        {site.leadsEmail}. We do not sell those leads to other contractors,
        and we do not offer exclusive or sold Dayton, Columbus, or Cincinnati
        leads on this page. Cincinnati is also in-house — not a
        contractor-pay market and not an Exclusive SKU. Those leads stay at{" "}
        {site.leadsEmail}.
      </p>

      <h2 className="mt-10 font-heading text-2xl font-semibold">
        Dayton / Miami Valley coverage
      </h2>
      <p className="mt-3 leading-7">
        Every live city listed in this section is inside this ring. Homeowner
        forms on those URLs post to {site.leadsEmail}. {site.exclusiveContractor}{" "}
        receives those requests. We will not route a Dayton-area lead to
        another shop, and we will not sell exclusive category rights on those
        city × service URLs.
      </p>
      <p className="mt-3 leading-7">
        Paid listings may exist later <em>outside</em> Dayton, Columbus, and
        Cincinnati. That is not for sale here today. There is no approved
        payer list in this repo, so the inbox is {site.leadsEmail} only.
      </p>

      <h2 className="mt-10 font-heading text-2xl font-semibold">
        Columbus / Franklin County
      </h2>
      <p className="mt-3 leading-7">
        Columbus is a live Central Ohio hub. It is not a 25-mile Dayton city
        and it is not a contractor-pay roofinglists market. Columbus quote
        requests stay with {site.exclusiveContractor} at {site.leadsEmail},
        the same as Dayton. We do not sell those leads. We do not offer
        Exclusive or sold Columbus, and we do not invent contractors to fill
        the page.
      </p>

      <h2 className="mt-10 font-heading text-2xl font-semibold">
        Cincinnati / Hamilton County
      </h2>
      <p className="mt-3 leading-7">
        Cincinnati is a live Southwest Ohio hub. It is not a contractor-pay
        roofinglists market and not an Exclusive or Featured SKU. Cincinnati
        quote requests stay with {site.exclusiveContractor} at{" "}
        {site.leadsEmail}, the same as Dayton and Columbus. We do not sell
        those leads. We do not invent contractors to fill the page. Do not
        email asking to buy Cincinnati inbound quotes.
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
          <p className="font-semibold">Exclusive or sold Columbus leads</p>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            Not offered. Columbus / Franklin County requests stay with{" "}
            {site.exclusiveContractor} at {site.leadsEmail}. There is no
            Featured or exclusive Stripe SKU for Columbus.
          </p>
        </li>
        <li className="rounded-lg border border-border bg-card p-4">
          <p className="font-semibold">Exclusive or sold Cincinnati leads</p>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            Not offered. Cincinnati / Hamilton County requests stay with{" "}
            {site.exclusiveContractor} at {site.leadsEmail}. There is no
            Featured or exclusive Stripe SKU for Cincinnati.
          </p>
        </li>
        <li className="rounded-lg border border-border bg-card p-4">
          <p className="font-semibold">Invented listings</p>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            We do not invent company names, phones, licenses, star ratings, or
            city-specific prices to fill a page. Standard, featured, and
            exclusive placement labels exist in the templates for a future
            market outside Dayton, Columbus, and Cincinnati — they are not a
            lead auction for those cities.
          </p>
        </li>
      </ul>

      <h2 className="mt-10 font-heading text-2xl font-semibold">
        What may exist later
      </h2>
      <p className="mt-3 leading-7">
        Featured — paid placement is $99/month for an approved contractor
        outside Dayton, Columbus, and Cincinnati. It is labeled{" "}
        <strong>Featured — paid placement</strong>. Exclusive sold leads will
        still not apply to Dayton, Columbus, or Cincinnati. There is no
        credit-card field on the homeowner form. Email{" "}
        <a href={`mailto:${site.email}`} className="underline">
          {site.email}
        </a>{" "}
        for Featured in another market. We do not invent listings to fill a
        page.
      </p>
      <p className="mt-3 leading-7">
        The form collects required phone, email, ZIP, service, timing, and
        privacy consent. SMS consent is optional and visible. Optional name,
        message, roof type, and roof age sit behind More details. Hidden fields
        carry page URL, city, state, and service. Every request — Dayton,
        Columbus, Cincinnati, or otherwise — posts to {site.leadsEmail}.
      </p>

      <h2 className="mt-10 font-heading text-2xl font-semibold">Contact</h2>
      <p className="mt-3 leading-7">
        Questions about a future market outside Dayton, Columbus, and
        Cincinnati — not about buying those inbound quotes — go to{" "}
        <a href={`mailto:${site.email}`} className="underline">
          {site.email}
        </a>
        . Do not send card numbers to the homeowner form.
      </p>

      <h2 className="mt-10 font-heading text-2xl font-semibold">
        Live URLs in the Dayton exclusive
      </h2>
      <ul className="mt-3 space-y-2">
        {daytonCities.map((city) => (
          <li key={city.slug}>
            <Link
              href={servicePath(city, "roof-repair")}
              className="underline underline-offset-2"
            >
              {servicePath(city, "roof-repair")}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 font-heading text-2xl font-semibold">
        Live Columbus URLs (in-house with {site.exclusiveContractor})
      </h2>
      <ul className="mt-3 space-y-2">
        {columbusCities.map((city) => (
          <li key={city.slug}>
            <Link
              href={servicePath(city, "roof-repair")}
              className="underline underline-offset-2"
            >
              {servicePath(city, "roof-repair")}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 font-heading text-2xl font-semibold">
        Live Cincinnati URLs (in-house with {site.exclusiveContractor})
      </h2>
      <ul className="mt-3 space-y-2">
        {cincinnatiCities.map((city) => (
          <li key={city.slug}>
            <Link
              href={servicePath(city, "roof-repair")}
              className="underline underline-offset-2"
            >
              {servicePath(city, "roof-repair")}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
