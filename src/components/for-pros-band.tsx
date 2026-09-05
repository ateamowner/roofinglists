import Link from "next/link";
import { site } from "@/config/site";

export function ForProsBand() {
  return (
    <section
      id="for-pros"
      className="rounded-[16px] border border-border bg-card px-5 py-6 shadow-sm sm:px-6"
    >
      <h2 className="font-heading text-2xl font-semibold">
        For roofing companies
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-[26px] text-muted-foreground">
        Featured — paid placement is $99/month for markets outside Dayton,
        Columbus, and Cincinnati. {site.exclusiveContractor} covers Dayton /
        Miami Valley, Columbus / Franklin County, and Cincinnati / Hamilton
        County at {site.leadsEmail}. Those inbound quotes stay in-house. They
        are not contractor-pay Exclusive SKUs. We do not invent companies to
        fill a page.
      </p>
      <p className="mt-4">
        <Link
          href="/for-pros/"
          className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 text-[15px] font-medium leading-5 text-primary-foreground hover:bg-primary/90"
        >
          Featured — $99/month
        </Link>
      </p>
    </section>
  );
}
