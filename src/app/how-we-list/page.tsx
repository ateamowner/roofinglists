import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/schema";
import { shareMeta } from "@/lib/share-meta";

const PATH = "/how-we-list/";
const title = `How ${site.name} Works`;
const description =
  `${site.name} publishes roofing guides and quote pages for Dayton / Miami Valley, Columbus / Franklin County and Cincinnati / Hamilton County, Ohio. Requests in those areas go directly to A Team Contracting and are never sold to other contractors.`;

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
        RoofingLists publishes roofing guides and quote pages for Dayton /
        Miami Valley, Columbus / Franklin County and Cincinnati / Hamilton
        County, Ohio.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-semibold">
        Who handles your request
      </h2>
      <p className="mt-3 leading-7">
        Roof repair, replacement, storm damage and inspection requests in those
        areas go directly to A Team Contracting, a local Ohio contractor (call
        or text{" "}
        <a href={site.publicPhoneHref} className="underline">
          {site.publicPhone}
        </a>
        ). We say so on every page. Requests are never sold to other
        contractors.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-semibold">
        What we won&apos;t do
      </h2>
      <p className="mt-3 leading-7">
        Publish star ratings, invented company names or invented prices.
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
