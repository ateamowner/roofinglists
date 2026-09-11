"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { CityRegion } from "@/config/site";

export type CityCardItem = {
  slug: string;
  name: string;
  stateAbbr: string;
  href: string;
};

export type CityCardRegion = {
  region: CityRegion;
  heading: string;
  intro: string;
  cities: CityCardItem[];
};

export function CityCardGrid({ regions }: { regions: CityCardRegion[] }) {
  const [query, setQuery] = useState("");
  const needle = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!needle) return regions;
    return regions
      .map((block) => ({
        ...block,
        cities: block.cities.filter((city) => {
          const haystack = `${city.name} ${city.stateAbbr}`.toLowerCase();
          return haystack.includes(needle);
        }),
      }))
      .filter((block) => block.cities.length > 0);
  }, [needle, regions]);

  return (
    <div id="cities" className="scroll-mt-24">
      <div className="mt-10 max-w-md">
        <label
          htmlFor="city-search"
          className="mb-1.5 block text-[13px] font-medium leading-[18px]"
        >
          Search cities
        </label>
        <input
          id="city-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="City name"
          autoComplete="off"
          className="h-11 w-full rounded-[14px] border border-input bg-card px-3 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 max-w-xl text-base leading-[26px] text-muted-foreground">
          No cities match that name. Send the form above — we still hold the
          request.
        </p>
      ) : (
        filtered.map((block) => (
          <section
            key={block.region}
            id={
              block.region === "dayton" ? "cities-dayton" : `${block.region}-cities`
            }
            className="mt-14"
          >
            <h2 className="font-heading text-2xl font-semibold">
              {block.heading}
            </h2>
            <p className="mt-2 max-w-2xl text-base text-muted-foreground">
              {block.intro}
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {block.cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={city.href}
                    className="flex min-h-[7.5rem] flex-col rounded-[14px] border border-border bg-card p-5 shadow-[0_12px_32px_rgba(19,32,43,0.10)] transition-transform duration-150 hover:-translate-y-[2px] active:-translate-y-[2px] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    <h3 className="font-heading text-xl font-semibold tracking-tight">
                      {city.name}, {city.stateAbbr}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Roof repair
                    </p>
                    <p className="mt-auto pt-4 text-sm font-medium text-primary">
                      Open {city.name}
                      <span aria-hidden="true"> →</span>
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </div>
  );
}
