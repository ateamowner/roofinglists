import Link from "next/link";
import {
  getNearbyCities,
  lockedH1,
  servicePath,
  services,
  site,
  type City,
  type Service,
} from "@/config/site";

export function NearbyCityLinks({
  city,
  service,
}: {
  city: City;
  service?: Service;
}) {
  const nearby = getNearbyCities(city);
  if (nearby.length === 0) return null;

  const defaultService = service ?? services[0];

  return (
    <section className="mt-10">
      <h2 className="font-heading text-xl font-semibold">Nearby cities</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Each link is a real page with its own quote form.
      </p>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {nearby.map((item) => (
          <li key={item.slug}>
            <Link
              href={servicePath(item, defaultService)}
              className="inline-flex min-h-10 items-center underline-offset-2 hover:underline"
            >
              {lockedH1(defaultService, item)}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function RelatedServiceLinks({
  city,
  current,
}: {
  city: City;
  current?: Service;
}) {
  const related = services.filter((item) => item.slug !== current?.slug);

  return (
    <section className="mt-10">
      <h2 className="font-heading text-xl font-semibold">
        Related services in {city.name}
      </h2>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {related.map((item) => (
          <li key={item.slug}>
            <Link
              href={servicePath(city, item)}
              className="inline-flex min-h-10 items-center underline-offset-2 hover:underline"
            >
              Best {item.name} in {city.name} — {site.year}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
