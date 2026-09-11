"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  formLeadNote,
  formRoofAges,
  formRoofTypes,
  formServiceTypes,
  formTimings,
  site,
  type City,
  type Service,
} from "@/config/site";

const fieldClassName =
  "h-11 w-full rounded-[14px] border border-input bg-card px-2.5 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

const FORM_STEPS = ["Contact", "Job", "Confirm"] as const;

type Draft = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  zip: string;
  service_type: string;
  timing: string;
  roof_type: string;
  roof_age: string;
  message: string;
  sms_consent: boolean;
  privacy_consent: boolean;
};

const drafts = new Map<string, Draft>();

function emptyDraft(service?: Service): Draft {
  return {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    zip: "",
    service_type: service?.formValue ?? "roof repair",
    timing: service?.slug === "storm-damage" ? "emergency" : "this_week",
    roof_type: "",
    roof_age: "",
    message: "",
    sms_consent: false,
    privacy_consent: false,
  };
}

function draftKey(city?: City, service?: Service) {
  return `${city?.slug ?? "home"}:${service?.slug ?? "none"}`;
}

function readDraft(key: string, service?: Service): Draft {
  const cached = drafts.get(key);
  if (cached) return cached;
  return emptyDraft(service);
}

function writeDraft(key: string, draft: Draft) {
  drafts.set(key, draft);
}

type QuoteFormProps = {
  city?: City;
  service?: Service;
  listingId?: string;
  compact?: boolean;
};

export function QuoteForm({ city, service, listingId, compact }: QuoteFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const lastKeyRef = useRef("");
  const key = draftKey(city, service);
  const [draft, setDraft] = useState<Draft>(() => readDraft(key, service));

  function update<K extends keyof Draft>(name: K, value: Draft[K]) {
    setDraft((prev) => {
      const next = { ...prev, [name]: value };
      writeDraft(key, next);
      return next;
    });
  }

  function onTextChange<
    K extends "first_name" | "last_name" | "phone" | "email" | "zip" | "message",
  >(name: K, value: string) {
    const lastKey = lastKeyRef.current;
    const clearing =
      value === "" &&
      draft[name] !== "" &&
      lastKey !== "Backspace" &&
      lastKey !== "Delete";
    if (clearing) {
      setDraft((current) => ({ ...current }));
      return;
    }
    update(name, value);
  }

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const params = new URLSearchParams(window.location.search);
    setHidden(form, "page_url", window.location.href);
    setHidden(form, "gclid", params.get("gclid") ?? "");
    setHidden(form, "utm_source", params.get("utm_source") ?? "");
    setHidden(form, "utm_medium", params.get("utm_medium") ?? "");
    setHidden(form, "utm_campaign", params.get("utm_campaign") ?? "");
  }, []);

  const mailto = `mailto:${site.leadsEmail}?subject=${encodeURIComponent(`${site.name} quote request`)}`;

  return (
    <form
      ref={formRef}
      id="quote"
      action={site.formAction}
      method="POST"
      acceptCharset="UTF-8"
      autoComplete="off"
      onKeyDown={(event) => {
        lastKeyRef.current = event.key;
        if (event.key !== "Escape") return;
        event.preventDefault();
        event.stopPropagation();
        setDraft((current) => ({ ...current }));
      }}
      onFocusCapture={() => {
        window.setTimeout(() => {
          const form = formRef.current;
          if (!form) return;
          for (const name of ["phone", "email", "zip"] as const) {
            const field = form.elements.namedItem(name);
            if (field instanceof HTMLInputElement && field.value) {
              update(name, field.value);
            }
          }
        }, 50);
      }}
      className="scroll-mt-24 rounded-[14px] border border-border bg-card p-5 shadow-[0_12px_32px_rgba(19,32,43,0.10)]"
    >
      <h2 className="font-heading text-lg font-semibold md:text-xl">
        Request a callback
      </h2>
      <p className="mt-1 text-[13px] leading-[18px] text-muted-foreground">
        {formLeadNote(city)}
      </p>
      <FormProgress
        contactDone={Boolean(draft.phone.trim() && draft.zip.trim())}
        jobDone={Boolean(
          draft.phone.trim() &&
            draft.zip.trim() &&
            draft.service_type &&
            draft.timing
        )}
        confirmDone={
          Boolean(draft.phone.trim() && draft.zip.trim()) &&
          draft.privacy_consent
        }
      />

      <div className={`mt-4 grid gap-3 ${compact ? "" : "md:grid-cols-2"}`}>
        <Field label="Phone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            className={fieldClassName}
            value={draft.phone}
            onChange={(event) => onTextChange("phone", event.target.value)}
          />
        </Field>
        <Field label="ZIP" htmlFor="zip">
          <input
            id="zip"
            name="zip"
            required
            inputMode="numeric"
            autoComplete="postal-code"
            className={fieldClassName}
            value={draft.zip}
            onChange={(event) => onTextChange("zip", event.target.value)}
          />
        </Field>
        <Field label="Service" htmlFor="service_type">
          <select
            id="service_type"
            name="service_type"
            required
            className={fieldClassName}
            value={draft.service_type}
            onChange={(event) => update("service_type", event.target.value)}
          >
            {formServiceTypes.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Timing" htmlFor="timing">
          <select
            id="timing"
            name="timing"
            required
            className={fieldClassName}
            value={draft.timing}
            onChange={(event) => update("timing", event.target.value)}
          >
            {formTimings.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <details className="mt-4 rounded-[14px] border border-dashed border-border bg-muted/40 px-3 py-2">
        <summary className="cursor-pointer text-[13px] font-medium leading-[18px]">
          More details
        </summary>
        <div className={`mt-3 grid gap-3 ${compact ? "" : "md:grid-cols-2"}`}>
          <Field label="Email" htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={fieldClassName}
              value={draft.email}
              onChange={(event) => onTextChange("email", event.target.value)}
            />
          </Field>
          <Field label="Name" htmlFor="first_name">
            <input
              id="first_name"
              name="first_name"
              autoComplete="given-name"
              className={fieldClassName}
              value={draft.first_name}
              onChange={(event) => onTextChange("first_name", event.target.value)}
            />
          </Field>
          <Field label="Last name" htmlFor="last_name">
            <input
              id="last_name"
              name="last_name"
              autoComplete="family-name"
              className={fieldClassName}
              value={draft.last_name}
              onChange={(event) => onTextChange("last_name", event.target.value)}
            />
          </Field>
          <Field label="Roof type" htmlFor="roof_type">
            <select
              id="roof_type"
              name="roof_type"
              className={fieldClassName}
              value={draft.roof_type}
              onChange={(event) => update("roof_type", event.target.value)}
            >
              {formRoofTypes.map((item) => (
                <option key={item.value || "empty-type"} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Roof age" htmlFor="roof_age">
            <select
              id="roof_age"
              name="roof_age"
              className={fieldClassName}
              value={draft.roof_age}
              onChange={(event) => update("roof_age", event.target.value)}
            >
              {formRoofAges.map((item) => (
                <option key={item.value || "empty-age"} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <Field label="Message" htmlFor="message" className="mt-3">
          <textarea
            id="message"
            name="message"
            rows={4}
            className="min-h-24 w-full rounded-[14px] border border-input bg-card px-2.5 py-2 text-base leading-[26px] outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            placeholder="Leak location, last storm, asphalt vs slate, or access notes."
            value={draft.message}
            onChange={(event) => onTextChange("message", event.target.value)}
          />
        </Field>
      </details>

      <div className="mt-6 space-y-4 border-t border-border/70 pt-5">
        <label className="flex items-start gap-2.5 text-[13px] leading-[20px] text-muted-foreground">
          <input
            type="checkbox"
            name="sms_consent"
            value="true"
            className="mt-0.5 size-4 accent-primary"
            checked={draft.sms_consent}
            onChange={(event) => update("sms_consent", event.target.checked)}
          />
          <span>You may text me about this request at the number I provided.</span>
        </label>
        <label className="flex items-start gap-2.5 text-[13px] leading-[20px]">
          <input
            type="checkbox"
            name="privacy_consent"
            value="true"
            required
            className="mt-0.5 size-4 accent-primary"
            checked={draft.privacy_consent}
            onChange={(event) => update("privacy_consent", event.target.checked)}
          />
          <span>
            I agree to the{" "}
            <Link href="/privacy/" className="underline underline-offset-2">
              privacy policy
            </Link>
            . Required.
          </span>
        </label>
      </div>

      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <input type="hidden" name="_next" value={site.formRedirect} />
      <input type="hidden" name="_subject" value={`${site.name} quote request`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="page_url" defaultValue="" />
      <input type="hidden" name="city" defaultValue={city?.name ?? ""} />
      <input type="hidden" name="city_slug" defaultValue={city?.slug ?? ""} />
      <input type="hidden" name="state_abbr" defaultValue={city?.stateAbbr ?? ""} />
      <input type="hidden" name="service" defaultValue={service?.slug ?? ""} />
      <input type="hidden" name="listing_id" defaultValue={listingId ?? ""} />
      <input type="hidden" name="source" defaultValue="roofinglists.com" />
      <input type="hidden" name="gclid" defaultValue="" />
      <input type="hidden" name="utm_source" defaultValue="" />
      <input type="hidden" name="utm_medium" defaultValue="" />
      <input type="hidden" name="utm_campaign" defaultValue="" />

      <button
        id="quote-submit"
        type="submit"
        className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-[14px] bg-primary text-[15px] font-medium leading-5 text-primary-foreground hover:bg-primary/90"
      >
        Send request
      </button>
      <p className="mt-3 text-xs leading-5 text-muted-foreground">
        If the form cannot send, email{" "}
        <a href={mailto} className="underline">
          {site.leadsEmail}
        </a>{" "}
        with the same details.
      </p>
    </form>
  );
}

function setHidden(form: HTMLFormElement, name: string, value: string) {
  const field = form.elements.namedItem(name);
  if (field instanceof HTMLInputElement) field.value = value;
}

function FormProgress({
  contactDone,
  jobDone,
  confirmDone,
}: {
  contactDone: boolean;
  jobDone: boolean;
  confirmDone: boolean;
}) {
  const done = [contactDone, jobDone, confirmDone];
  const current = confirmDone ? 2 : jobDone && contactDone ? 2 : contactDone ? 1 : 0;

  return (
    <ol
      aria-label="Form progress"
      className="mt-4 flex items-center gap-2 text-[12px] font-medium leading-4 tracking-wide"
    >
      {FORM_STEPS.map((label, index) => {
        const active = index === current;
        const complete = done[index];
        return (
          <li key={label} className="flex min-w-0 flex-1 items-center gap-2">
            <span
              className={`flex size-2.5 shrink-0 rounded-full ${
                complete || active ? "bg-primary" : "bg-border"
              }`}
              aria-hidden="true"
            />
            <span
              className={
                complete || active ? "text-foreground" : "text-muted-foreground"
              }
            >
              {label}
            </span>
            {index < FORM_STEPS.length - 1 ? (
              <span
                aria-hidden="true"
                className={`ml-auto h-px w-full min-w-4 ${
                  done[index] ? "bg-primary/50" : "bg-border"
                }`}
              />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-[13px] font-medium leading-[18px]">
        {label}
      </label>
      {children}
    </div>
  );
}
