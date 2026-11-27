import type { Metadata } from "next";
import Link from "next/link";
import {
  citiesInRegion,
  servicePath,
  site,
} from "@/config/site";
import { shareMeta } from "@/lib/share-meta";

const title = `For Roofing Companies: How ${site.name} Listings Work`;
const description =
  `How ${site.name} picks the roofing companies it lists in Dayton, Columbus, and Cincinnati. Listings are free and editorial. No credit card on this page.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/for-pros/" },
  ...shareMeta(title, description, "/for-pros/"),
};

function UrlList({ slugs }: { slugs: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {slugs.map((slug) => (
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
  );
}

export default function ForProsPage() {
  const daytonCities = citiesInRegion("dayton").map((city) => city.slug);
  const columbusCities = citiesInRegion("columbus").map((city) => city.slug);
  const cincinnatiCities = citiesInRegion("cincinnati").map((city) => city.slug);

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="font-heading text-4xl font-semibold tracking-tight">
        For roofing companies
      </h1>
      <p className="mt-4 text-lg leading-8">
        {site.name} publishes city pages homeowners use to compare roofing
        companies and request estimates. {site.disclosure}
      </p>

      <h2 className="mt-10 font-heading text-2xl font-semibold">
        How companies are chosen
      </h2>
      <p className="mt-3 leading-7">
        Listings on Dayton / Miami Valley, Columbus / Franklin County, and
        Cincinnati / Hamilton County pages are free and editorial. We add up to
        three companies per city and service after checking each company&apos;s
        own website and BBB profile: name, street address, phone, services, the
        year it started, and whether it serves that city. Ohio has no state
        roofing license, so order is based on where the company is based, years
        in business, and BBB accreditation. We do not copy star ratings or
        review counts, and each card links the company&apos;s own BBB profile.
      </p>
      <p className="mt-3 leading-7">
        Estimate requests sent from a company card go to the {site.name} inbox
        with that company&apos;s name attached. They are not sold.
      </p>

      <h2 className="mt-10 font-heading text-2xl font-semibold">
        Corrections
      </h2>
      <p className="mt-3 leading-7">
        If a phone number, address, or service area on your card is out of
        date, email {site.leadsEmail} with a link to the page that shows the
        current detail (your own site or BBB profile). We do not accept payment
        to be listed or to change the order on Dayton, Columbus, or Cincinnati
        pages.
      </p>

      <h2 className="mt-10 font-heading text-2xl font-semibold">
        Paid placement
      </h2>
      <p className="mt-3 leading-7">
        Featured (paid placement) is $99/month for markets outside Dayton,
        Columbus, and Cincinnati. It is always labeled. We do not invent
        companies to fill a page.
      </p>

      <h2 className="mt-10 font-heading text-2xl font-semibold">
        Live Dayton-area URLs
      </h2>
      <UrlList slugs={daytonCities} />

      <h2 className="mt-10 font-heading text-2xl font-semibold">
        Live Columbus URLs
      </h2>
      <UrlList slugs={columbusCities} />

      <h2 className="mt-10 font-heading text-2xl font-semibold">
        Live Cincinnati URLs
      </h2>
      <UrlList slugs={cincinnatiCities} />
    </article>
  );
}
