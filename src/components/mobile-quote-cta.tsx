"use client";

import { usePathname } from "next/navigation";
import { quoteHref } from "@/components/header-primary-cta";

export function MobileQuoteCta() {
  const pathname = usePathname();
  const onThanks =
    pathname === "/request-sent" || pathname === "/request-sent/";

  if (onThanks) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(28,25,22,0.08)] lg:hidden">
      <a
        href={quoteHref(pathname)}
        className="inline-flex h-12 w-full items-center justify-center rounded-md bg-primary text-base font-medium text-primary-foreground hover:bg-primary/90"
      >
        Get a quote
      </a>
    </div>
  );
}
