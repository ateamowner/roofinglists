import type { Metadata } from "next";
import { CityCardGrid } from "@/components/city-card-grid";
import { Disclosure } from "@/components/disclosure";
import { FaqList } from "@/components/faq-list";
import { ForProsBand } from "@/components/for-pros-band";
import { JsonLd } from "@/components/json-ld";
import { QuoteFormLoader } from "@/components/quote-form-loader";
import { TrustStrip } from "@/components/trust-strip";
import {
  citiesInRegion,
  cityPath,
  cityRegionHeadings,
  cityRegionOrder,
  services,
  site,
} from "@/config/site";
import { homeFaqs } from "@/lib/content";
import {
  faqPageSchema,
  organizationSchema,
  webSiteSchema,
} from "@/lib/schema";
import { shareMeta } from "@/lib/share-meta";

const title = `Roofing Companies in Dayton, Columbus & Cincinnati`;
const description =
  site.description;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  ...shareMeta(title, description, "/"),
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
            Roof issue? Compare verified local roofers, then request an estimate.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-[26px]">
            {site.name} is a directory, not a contractor. Paid spots, when they
            exist, are labeled.
          </p>
          <TrustStrip className="mt-4" />
          <p className="mt-5 max-w-2xl text-base leading-[26px] text-muted-foreground">
            Each Dayton / Miami Valley, Columbus / Franklin County, and
            Cincinnati / Hamilton County service page lists up to three roofing
            companies, each checked against its own website and BBB profile.
            Every card has a Request an estimate button. We do not copy star
            ratings, and we never sell your request.
          </p>
          <Disclosure className="mt-3 max-w-2xl" />
        </div>
        <QuoteFormLoader />
      </section>

      <CityCardGrid
        regions={cityRegionOrder.map((region) => {
          const copy = cityRegionHeadings[region];
          return {
            region,
            heading: copy.heading,
            intro: copy.intro,
            cities: citiesInRegion(region).map((city) => ({
              slug: city.slug,
              name: city.name,
              stateAbbr: city.stateAbbr,
              href: `${cityPath(city)}/`,
            })),
          };
        })}
      />

      <div className="mt-14">
        <ForProsBand />
      </div>

      <section className="mt-14">
        <h2 className="font-heading text-2xl font-semibold">
          What is on a city page
        </h2>
        <ol className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            "A locked H1 naming the service, the city, and the year",
            "A disclosure that this is a directory and paid spots are labeled",
            "How to choose: license, material, ice and access, written scope, reviews with addresses, insurance vs out of pocket, warranty",
            "National cost ranges cited to Angi, not a local survey",
            "Five FAQs that match the on-page questions in schema",
            "Up to three verified companies, each linked to its own BBB profile, with a Request an estimate button",
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
