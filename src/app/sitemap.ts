import type { MetadataRoute } from "next";
import { cities, servicePath, services, site } from "@/config/site";
import { isThinHub, isThinServicePage } from "@/lib/listings";

import {
  cityPageLastmod,
  homePageLastmod,
  servicePageLastmod,
  staticPageLastmod,
} from "@/lib/lastmod";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/privacy/", "/for-pros/", "/how-we-list/"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified:
      path === "/"
        ? homePageLastmod()
        : staticPageLastmod(`src/app${path}page.tsx`),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.4,
  }));

  const serviceSlugs = services.map((service) => service.slug);
  /** Pages with fewer than 3 verified listings are noindex,follow and stay out of the sitemap. */
  const cityRoutes = cities.flatMap((city) => [
    ...(isThinHub(city.slug, serviceSlugs) ? [] : [{
      url: `${site.url}/${city.slug}/`,
      lastModified: cityPageLastmod(
        city.slug,
        services.map((service) => service.slug)
      ),
      changeFrequency: "weekly" as const,
      priority: city.status === "live" ? 0.8 : 0.4,
    }]),
    ...services
      .filter((service) => !isThinServicePage(city.slug, service.slug))
      .map((service) => ({
      url: `${site.url}${servicePath(city, service)}/`,
      lastModified: servicePageLastmod(city.slug, service.slug),
      changeFrequency: "weekly" as const,
      priority:
        city.status === "live" && service.slug === "roof-repair" ? 0.9 : 0.5,
    })),
  ]);

  return [...staticRoutes, ...cityRoutes];
}
