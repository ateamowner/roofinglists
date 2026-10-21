"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { quoteHref } from "@/components/header-primary-cta";
import { cities, isInHouseLead, site } from "@/config/site";

const hideOn = new Set(["for-pros", "privacy", "request-sent"]);

export function MobileQuoteCta() {
  const pathname = usePathname();
  const [submitInView, setSubmitInView] = useState(false);
  const slug = pathname.replace(/^\/|\/$/g, "").split("/")[0] ?? "";

  useEffect(() => {
    const submit =
      document.getElementById("quote-submit") ??
      document.querySelector("#quote button[type='submit']");
    if (!submit) {
      setSubmitInView(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setSubmitInView(entry.intersectionRatio >= 0.4);
      },
      { threshold: [0, 0.4, 1] }
    );
    observer.observe(submit);
    return () => observer.disconnect();
  }, [pathname]);

  if (hideOn.has(slug) || submitInView) return null;

  const city = cities.find((item) => item.slug === slug);
  const showCall = !slug || (city ? isInHouseLead(city) : false);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(28,25,22,0.08)] md:hidden">
      <div className="flex gap-2">
        <a
          href={quoteHref(pathname)}
          className="inline-flex h-12 flex-1 items-center justify-center rounded-md bg-primary text-[15px] font-medium leading-5 text-primary-foreground hover:bg-primary/90"
        >
          Get a quote
        </a>
        {showCall ? (
          <a
            href={site.publicPhoneHref}
            className="inline-flex h-12 flex-1 items-center justify-center rounded-md border border-primary text-[15px] font-medium leading-5 text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Call or text
          </a>
        ) : null}
      </div>
    </div>
  );
}
