import type { Metadata } from "next";
import Link from "next/link";
import { Disclosure } from "@/components/disclosure";
import { FaqList } from "@/components/faq-list";
import { ForProsBand } from "@/components/for-pros-band";
import { JsonLd } from "@/components/json-ld";
import { QuoteFormLoader } from "@/components/quote-form-loader";
import { TrustStrip } from "@/components/trust-strip";
import {
  citiesInRegion,
  cityRegionHeadings,
  cityRegionOrder,
  servicePath,
  services,
  site,
  type City,
} from "@/config/site";
import { homeFaqs } from "@/lib/content";
import {
  faqPageSchema,
  organizationSchema,
  webSiteSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: `${site.name} — roofing quote directory`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const questions = homeFaqs();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <JsonLd
        data={[organizationSchema(), webSiteSchema(), faqPageSchema(questions)]}
      />
      <section className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_22rem]">
        <div id="hero">
          <p className="text-[13px] font-medium leading-[18px] text-primary">
            {site.tagline}
          </p>
          <h1 className="mt-2 font-heading text-[clamp(1.5rem,6.2vw,2rem)] font-semibold leading-[1.25] tracking-tight text-balance md:text-[40px] md:leading-[48px]">
            Find roofing by city. Request a quote. Skip the fake shop page.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-[26px]">
            {site.name} is a lead-generation directory for roofing companies.
            We are not a contractor. We do not send a crew, and we do not
            invent company names, star ratings, or city-specific prices. Each
            city has its own URL. Paid spots, when they exist, are labeled.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-[26px] text-muted-foreground">
            Dayton / Miami Valley, Columbus / Franklin County, and Cincinnati
            / Hamilton County quote requests stay with{" "}
            {site.exclusiveContractor} at {site.leadsEmail}. We do not sell
            those leads to other contractors. Cincinnati is also in-house —
            not a contractor-pay market and not an Exclusive SKU.
          </p>
          <Disclosure className="mt-3 max-w-2xl" />
        </div>
        <QuoteFormLoader />
      </section>

      <TrustStrip className="mt-8 rounded-[16px] border border-border bg-card px-4 py-3 text-center sm:px-6" />

      <div id="cities" className="scroll-mt-24">
        {cityRegionOrder.map((region) => {
          const live = citiesInRegion(region);
          const copy = cityRegionHeadings[region];
          return (
            <section
              key={region}
              id={region === "dayton" ? "cities-dayton" : `${region}-cities`}
              className="mt-14"
            >
              <h2 className="font-heading text-2xl font-semibold">
                {copy.heading}
              </h2>
              <p className="mt-2 max-w-2xl text-base text-muted-foreground">
                {copy.intro}
              </p>
              <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {live.map((city) => (
                  <CityCard key={city.slug} city={city} />
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <div className="mt-14">
        <ForProsBand />
      </div>

      <section className="mt-14">
        <h2 className="font-heading text-2xl font-semibold">
          What is on a city page
        </h2>
        <ol className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            "A locked H1: Best {Service} in {City} — 2026",
            "A disclosure that this is a directory and paid spots are labeled",
            "How to choose: license, material, ice and access, written scope, reviews with addresses, insurance vs out of pocket, warranty",
            "National cost ranges cited to Angi — not a local survey",
            "Five FAQs that match the on-page questions in schema",
            "Listings from a data file, or an empty state with the quote form",
          ].map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border bg-card px-4 py-3 text-sm leading-6"
            >
              {item}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="font-heading text-2xl font-semibold">Services we index</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {services.map((service) => (
            <li key={service.slug}>
              <span className="font-medium">{service.name}.</span>{" "}
              <span className="text-muted-foreground">{service.blurb}</span>
            </li>
          ))}
        </ul>
      </section>

      <FaqList faqs={questions} />
    </div>
  );
}

function CityCard({ city }: { city: City }) {
  return (
    <li className="flex flex-col rounded-lg border border-border bg-card p-5">
      <h3 className="font-heading text-xl font-semibold">
        {city.name}, {city.stateAbbr}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-[26px] text-muted-foreground">
        {city.setting.split(/(?<=\.)\s/)[0]}
      </p>
      <p className="mt-4">
        <Link
          href={servicePath(city, "roof-repair")}
          className="font-medium underline underline-offset-2"
        >
          Best Roof Repair in {city.name} — {site.year}
        </Link>
      </p>
      <p className="mt-2">
        <Link href={`/${city.slug}/`} className="text-sm hover:underline">
          All {city.name} services
        </Link>
      </p>
    </li>
  );
}
