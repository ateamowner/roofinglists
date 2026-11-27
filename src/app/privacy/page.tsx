import type { Metadata } from "next";
import { Disclosure } from "@/components/disclosure";
import { site } from "@/config/site";
import { shareMeta } from "@/lib/share-meta";

const title = `Privacy Policy, ${site.name}`;
const description =
  `How ${site.name} collects quote and estimate request data, where it goes, and what we never do with it.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy/" },
  ...shareMeta(title, description, "/privacy/"),
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="font-heading text-4xl font-semibold tracking-tight">
        Privacy
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">Effective {site.year}.</p>
      <Disclosure className="mt-4" />
      <p className="mt-4 leading-7">
        {site.name} ({site.domain}) is a directory. We collect information so
        we can follow up on a quote or estimate request. We are not affiliated
        with the roofing companies we list, and we do not sell your request.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-semibold">What we collect</h2>
      <p className="mt-3 leading-7">
        From the quote form: required phone, email, ZIP, service type, timing,
        and privacy consent; optional SMS consent; optional name, last name,
        roof type, roof age, and message behind More details. Hidden fields may
        include page URL, city, city slug, state, service, listing id, source,
        gclid, utm_source, utm_medium, and utm_campaign. From a Request an
        estimate form on a company card: name, phone, optional email, address
        or ZIP, an optional job note, plus hidden fields for the company name,
        its BBB profile URL, the page URL, city, and service.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-semibold">How we use it</h2>
      <p className="mt-3 leading-7">
        The static form posts to Formsubmit, which emails{" "}
        <a href={`mailto:${site.leadsEmail}`} className="underline">
          {site.leadsEmail}
        </a>
        . We use it to follow up on your request. If you asked for an estimate
        from a listed company, we may pass your contact details and job note to
        that company so it can reach you. We do not sell your request.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-semibold">SMS</h2>
      <p className="mt-3 leading-7">
        SMS consent is optional. If you check it, we may text you about that
        request. Consent is not a condition of submitting the
        form.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-semibold">What we do not do</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
        <li>We do not take card numbers on this site.</li>
        <li>We do not sell a public people-search list of form submitters.</li>
        <li>We do not publish your request on the city page.</li>
        <li>We do not sell quote or estimate requests.</li>
      </ul>

      <h2 className="mt-8 font-heading text-2xl font-semibold">Contact</h2>
      <p className="mt-3 leading-7">
        Questions:{" "}
        <a href={`mailto:${site.email}`} className="underline">
          {site.email}
        </a>
        .
      </p>
    </article>
  );
}
