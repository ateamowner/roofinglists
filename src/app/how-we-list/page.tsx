import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/schema";
import { shareMeta } from "@/lib/share-meta";

const PATH = "/how-we-list/";
const title = `How ${site.name} Works`;
const description =
  `How ${site.name} picks and checks the roofing companies it lists in Dayton, Columbus, and Cincinnati, and where estimate requests go. No copied ratings.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: PATH },
  ...shareMeta(title, description, PATH),
};

function pageUrl(path: string): string {
  const origin = site.url.replace(/\/+$/, "");
  if (path === "" || path === "/") return `${origin}/`;
  const withSlash = path.endsWith("/") ? path : `${path}/`;
  return `${origin}${withSlash.startsWith("/") ? withSlash : `/${withSlash}`}`;
}

export default function HowWeListPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: title,
            description,
            url: pageUrl(PATH),
            publisher: {
              "@type": "Organization",
              name: site.legalName,
              url: pageUrl("/"),
            },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "How RoofingLists works", path: PATH },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: PATH, label: "How RoofingLists works" },
        ]}
      />
      <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight">
        How RoofingLists works
      </h1>
      <p className="mt-4 leading-7">
        RoofingLists is an independent directory of roofing companies in
        Dayton / Miami Valley, Columbus / Franklin County and Cincinnati /
        Hamilton County, Ohio. We are not a contractor and are not affiliated
        with the companies we list.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-semibold">
        How companies get listed
      </h2>
      <p className="mt-3 leading-7">
        We list up to three roofing companies on each city and service page.
        Before a company goes on a page, we check its own website and its BBB
        profile for its name, street address, phone, the services it offers,
        when it started, and whether it serves that city (named on its site or
        in its BBB service area). Where two sources disagree, for example on a
        phone number or a founding year, the card notes it under Sources and
        notes. Listings are free and editorial.
      </p>
      <p className="mt-3 leading-7">
        Ohio does not license roofing contractors at the state level, so there
        is no state license number to rank on. Order on each page is: companies
        based in that city first, then companies based in the same county, then
        years in business. Every company listed today is a BBB Accredited
        Business. We do not copy star ratings or review counts; each company
        name links to its own BBB profile so you can read its record there.
      </p>
      <p className="mt-3 leading-7">
        A page with fewer than three verified companies is kept out of search
        results (noindex) and out of the sitemap until it is filled.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-semibold">
        Where estimate requests go
      </h2>
      <p className="mt-3 leading-7">
        Each company card has a Request an estimate button. That short form,
        and the quote form on each page, goes to the RoofingLists inbox, not
        straight to the company, and we follow up, usually within one business
        day. To reach a company directly, call the number on its card. We do
        not sell your request.
      </p>
      <p className="mt-3 leading-7">{site.disclosure}</p>

      <h2 className="mt-8 font-heading text-2xl font-semibold">
        What we won&apos;t do
      </h2>
      <p className="mt-3 leading-7">
        Copy star ratings or review counts, invent company names, phones,
        licenses or prices, or list a company we could not check.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-semibold">
        Before you hire any roofer
      </h2>
      <p className="mt-3 leading-7">
        Ask for proof of insurance, a written estimate with materials and
        warranty, who pulls the permit, and how storm-damage insurance claims
        are handled.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-semibold">
        Not the same site as RoofLists.com
      </h2>
      <p className="mt-3 leading-7">
        RoofingLists.com (with &quot;ing&quot;) is a separate site and isn&apos;t
        affiliated with RoofLists.com or The Roofing List.
      </p>
    </article>
  );
}
