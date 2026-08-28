import type { Metadata } from "next";
import { Disclosure } from "@/components/disclosure";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacy — ${site.name}`,
  description: `How ${site.name} collects quote-form data and holds it for approved roofing companies.`,
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
        we can hold a quote request and, when an approved contractor is on the
        payer list, route it. We are not that contractor.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-semibold">What we collect</h2>
      <p className="mt-3 leading-7">
        From the quote form: first name, last name, phone, email, ZIP, service
        type, timing, optional roof type and age, optional message, SMS
        consent, and privacy consent. Hidden fields may include page URL, city,
        city slug, state, service, listing id, source, gclid, utm_source,
        utm_medium, and utm_campaign.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-semibold">How we use it</h2>
      <p className="mt-3 leading-7">
        The static form posts to Formsubmit, which emails{" "}
        <a href={`mailto:${site.leadsEmail}`} className="underline">
          {site.leadsEmail}
        </a>
        . We hold every request there. We share it only with a company that is
        on the approved payer list for your ZIP and service, including a paid
        listing on that URL when one exists. There is no approved payer list in
        this repository, so the inbox is {site.leadsEmail} only. We never send
        a lead to a contractor who is not on that list.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-semibold">SMS</h2>
      <p className="mt-3 leading-7">
        SMS consent is optional. If you check it, the company that receives
        your request may text you about that job. Consent is not a condition of
        submitting the form.
      </p>

      <h2 className="mt-8 font-heading text-2xl font-semibold">What we do not do</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
        <li>We do not take card numbers on this site.</li>
        <li>We do not sell a public people-search list of form submitters.</li>
        <li>We do not publish your request on the city page.</li>
        <li>We do not send your request to a contractor who is not an approved payer.</li>
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
