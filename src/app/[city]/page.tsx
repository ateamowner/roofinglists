import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Disclosure } from "@/components/disclosure";
import { FaqList } from "@/components/faq-list";
import { NearbyCityLinks } from "@/components/internal-links";
import { JsonLd } from "@/components/json-ld";
import { QuoteFormLoader } from "@/components/quote-form-loader";
import {
  cities,
  getCity,
  getParentCity,
  getService,
  servicePath,
  services,
  site,
} from "@/config/site";
import { hubFaqs, hubIntro, serviceCardBlurb } from "@/lib/content";
import {
  faqPageSchema,
  hubBreadcrumbs,
  publisherLocalBusiness,
} from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) return {};

  const title = `Roofing in ${city.name}, ${city.stateAbbr}`;
  const description = `${site.name} directory hub for ${city.name}. Open roof repair, replacement, storm damage, and inspection pages. Not a contractor.`;
  return {
    title,
    description,
    alternates: { canonical: `/${city.slug}/` },
  };
}

export default async function CityHubPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) notFound();

  const roofRepair = getService("roof-repair");
  const parent = getParentCity(city);
  const questions = hubFaqs(city);
  const intro = hubIntro(city);

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <JsonLd
        data={[
          publisherLocalBusiness(city),
          faqPageSchema(questions),
          hubBreadcrumbs(city),
        ]}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: `/${city.slug}`, label: `${city.name}, ${city.stateAbbr}` },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-[minmax(0,1fr)_22rem]">
        <div id="hero">
          <p className="text-[13px] font-medium leading-[18px] text-primary">
            {city.state}
            {city.status === "coming_soon" ? " · Coming soon" : null}
          </p>
          <h1 className="mt-2 font-heading text-[clamp(1.75rem,7.2vw,2rem)] font-semibold leading-10 tracking-tight md:text-[40px] md:leading-[48px]">
            Roofing in {city.name}, {city.stateAbbr}
          </h1>
          {city.status === "coming_soon" ? (
            <p className="mt-4 text-base leading-[26px]">
              The {city.name} hub is coming soon. {site.name} opened this URL so
              nearby-city links stay valid. You can still request a quote.{" "}
              {parent ? (
                <>
                  The live market page is{" "}
                  <Link href={`/${parent.slug}/`} className="underline underline-offset-2">
                    {parent.name}
                  </Link>
                  .
                </>
              ) : null}
            </p>
          ) : (
            intro.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base leading-[26px]">
                {paragraph}
              </p>
            ))
          )}
          <Disclosure className="mt-4" />

          <h2 className="mt-8 font-heading text-xl font-semibold">
            Services in {city.name}
          </h2>
          <ul className="mt-3 grid gap-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={servicePath(city, service)}
                  className="block rounded-lg border border-border bg-card px-4 py-3 hover:border-primary"
                >
                  <span className="font-medium">
                    Best {service.name} in {city.name} — {site.year}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {serviceCardBlurb(city, service)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <FaqList faqs={questions} />
          <NearbyCityLinks city={city} service={roofRepair} />
        </div>
        <aside className="md:sticky md:top-24 md:self-start">
          {roofRepair ? (
            <QuoteFormLoader city={city} service={roofRepair} />
          ) : null}
        </aside>
      </div>
    </article>
  );
}
