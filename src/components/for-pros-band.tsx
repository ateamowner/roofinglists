import Link from "next/link";
import { site } from "@/config/site";

export function ForProsBand() {
  return (
    <section
      id="for-pros"
      className="rounded-[16px] border border-border bg-card px-5 py-6 shadow-sm sm:px-6"
    >
      <p className="text-sm font-medium text-primary">For roofing companies</p>
      <h2 className="mt-1 font-heading text-2xl font-semibold">
        Paid spots, when they exist, are labeled. Dayton, Columbus, and
        Cincinnati are not for sale.
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
        {site.exclusiveContractor} covers Dayton / Miami Valley, Columbus /
        Franklin County, and Cincinnati / Hamilton County at {site.leadsEmail}.
        Those inbound quotes stay in-house. They are not contractor-pay
        Exclusive SKUs. A labeled Featured listing may exist later in another
        market — that path is paid and labeled. We do not invent companies to
        fill a page.
      </p>
      <p className="mt-4">
        <Link
          href="/for-pros/"
          className="inline-flex h-11 items-center justify-center rounded-lg border border-primary px-5 text-base font-medium text-primary hover:bg-primary hover:text-primary-foreground"
        >
          For Pros
        </Link>
      </p>
    </section>
  );
}
