"use client";

import { usePathname } from "next/navigation";

const buttonClassName =
  "inline-flex h-10 items-center rounded-md bg-primary px-3 text-primary-foreground hover:bg-primary/90";

const pagesWithoutForm = new Set(["for-pros", "privacy", "request-sent"]);

export function quoteHref(pathname: string): string {
  const parts = pathname.replace(/^\/|\/$/g, "").split("/").filter(Boolean);
  const hasOnPageForm =
    parts.length === 0 ||
    (parts.length === 1 && !pagesWithoutForm.has(parts[0])) ||
    parts.length === 2;
  return hasOnPageForm ? "#quote" : "/#quote";
}

export function HeaderPrimaryCta() {
  const pathname = usePathname();

  return (
    <a href={quoteHref(pathname)} className={buttonClassName}>
      Get a quote
    </a>
  );
}
