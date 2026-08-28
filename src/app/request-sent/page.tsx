import type { Metadata } from "next";
import Link from "next/link";
import { Disclosure } from "@/components/disclosure";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `Request sent — ${site.name}`,
  robots: { index: false, follow: false },
};

export default function RequestSentPage() {
  return (
    <article className="mx-auto w-full max-w-xl px-4 py-16 sm:px-6">
      <h1 className="font-heading text-3xl font-semibold tracking-tight">
        Request sent. We hold it and route it only to an approved contractor.
      </h1>
      <p className="mt-4 leading-7 text-muted-foreground">
        {site.name} is a directory. Your request went to {site.leadsEmail}.
        Until a listing is live and that company is on the approved payer list,
        we hold the request there. The call comes from a local roofing company
        — not from a {site.name} crew.
      </p>
      <Disclosure className="mt-4" />
      <p className="mt-6">
        <Link href="/" className="underline underline-offset-2">
          Back to the directory
        </Link>
      </p>
    </article>
  );
}
