"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  BUILDING_BANDS,
  CHALLENGES,
  LIMITS,
  validateEnquiry,
  type EnquiryField,
  type FieldErrors,
} from "@/lib/lead-capture/schema";

type Props = {
  /** Public Cal.com page, shown as a link (never an embed) once the enquiry is stored. */
  bookingUrl: string | null;
  contactEmail: string | null;
};

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "error"; message: string }
  | { kind: "accepted"; reference: string; name: string };

const FIELD_ORDER: EnquiryField[] = ["name", "email", "organisation", "role", "buildingBand", "challenge", "message"];

const CONTROL =
  "mt-2 block w-full rounded-sm border border-navy/40 bg-surface px-3.5 py-3 text-base text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy aria-[invalid=true]:border-ember-hover aria-[invalid=true]:border-2";
const LABEL = "block text-[15px] font-semibold text-navy";

export function DemoRequestForm({ bookingUrl, contactEmail }: Props) {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [messageLength, setMessageLength] = useState(0);
  const startedAt = useRef<number | null>(null);
  const idempotencyKey = useRef<string | null>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const hasErrors = Object.keys(errors).length > 0;

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  // Move focus to the error summary / result so keyboard and screen-reader users land on the outcome.
  useEffect(() => {
    if (hasErrors) summaryRef.current?.focus();
  }, [hasErrors, errors]);
  useEffect(() => {
    if (status.kind === "accepted" || status.kind === "error") resultRef.current?.focus();
  }, [status]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.kind === "submitting") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const text = (key: string) => String(data.get(key) ?? "");

    const payload = {
      name: text("name"),
      email: text("email"),
      organisation: text("organisation"),
      role: text("role"),
      buildingBand: text("buildingBand"),
      challenge: text("challenge"),
      message: text("message"),
    };

    const check = validateEnquiry(payload);
    if (!check.ok) {
      setErrors(check.errors);
      setStatus({ kind: "idle" });
      return;
    }
    setErrors({});
    setStatus({ kind: "submitting" });

    // One key per attempt-set: a retry after a network or server failure re-uses it, so it can never create
    // a second lead. It is cleared only once the enquiry is accepted.
    idempotencyKey.current ??= crypto.randomUUID();

    try {
      const response = await fetch("/api/walkthrough", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          website: text("website"),
          idempotencyKey: idempotencyKey.current,
          elapsedMs: startedAt.current ? Date.now() - startedAt.current : undefined,
        }),
      });
      const result = (await response.json().catch(() => ({}))) as {
        status?: string;
        reference?: string;
        errors?: FieldErrors;
      };

      if (response.ok && result.status === "accepted" && result.reference) {
        idempotencyKey.current = null;
        form.reset();
        setMessageLength(0);
        setStatus({ kind: "accepted", reference: result.reference, name: payload.name });
        return;
      }
      if (response.status === 422 && result.errors) {
        setErrors(result.errors);
        setStatus({ kind: "idle" });
        return;
      }
      setStatus({
        kind: "error",
        message:
          response.status === 429
            ? "There have been a lot of requests from your connection. Please wait a few minutes and try again."
            : "Something went wrong on our side and your request was not sent. Your answers are still here, so you can try again.",
      });
    } catch {
      setStatus({
        kind: "error",
        message: "We could not reach the server. Check your connection and try again; your answers are still here.",
      });
    }
  }

  if (status.kind === "accepted") {
    return (
      <div
        ref={resultRef}
        tabIndex={-1}
        role="status"
        className="border-l-2 border-verified bg-grey p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
      >
        <h2 className="font-display text-2xl font-bold text-navy">Request received.</h2>
        <p className="mt-3 text-base leading-relaxed text-navy">
          Thank you, {status.name}. Your reference is{" "}
          <span className="font-mono font-semibold">{status.reference}</span>.
        </p>
        {bookingUrl ? (
          <p className="mt-3 text-base leading-relaxed text-navy">
            <a className="font-semibold underline decoration-ember underline-offset-4" href={bookingUrl}>
              Choose a time for your demonstration
            </a>
            . If none of the times suit you, we will arrange one with you.
          </p>
        ) : (
          <p className="mt-3 text-base leading-relaxed text-navy">We will reply to arrange a time for your demonstration.</p>
        )}
        {contactEmail && (
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            If you do not hear from us, email{" "}
            <a className="font-semibold text-navy underline" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>{" "}
            and quote your reference.
          </p>
        )}
      </div>
    );
  }

  const describedBy = (field: EnquiryField, hint?: string) =>
    [hint, errors[field] ? `${field}-error` : null].filter(Boolean).join(" ") || undefined;
  const fieldError = (field: EnquiryField) =>
    errors[field] ? (
      <p id={`${field}-error`} className="mt-1.5 text-sm font-semibold text-ember-hover">
        <span className="sr-only">Error: </span>
        {errors[field]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate aria-describedby="form-privacy" className="space-y-6">
      {hasErrors && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="border-l-2 border-ember-hover bg-grey p-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
        >
          <p className="font-semibold text-navy">Please check the following</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-navy">
            {FIELD_ORDER.filter((field) => errors[field]).map((field) => (
              <li key={field}>
                <a className="underline" href={`#${field}`}>
                  {errors[field]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {status.kind === "error" && (
        <div
          ref={resultRef}
          tabIndex={-1}
          role="alert"
          className="border-l-2 border-amber bg-grey p-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
        >
          <p className="text-base text-navy">{status.message}</p>
          {contactEmail && (
            <p className="mt-2 text-sm text-text-secondary">
              Or email{" "}
              <a className="font-semibold text-navy underline" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>{" "}
              directly.
            </p>
          )}
        </div>
      )}

      {/* Honeypot: hidden from people and assistive technology; only automated form-fillers complete it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this field empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="name" className={LABEL}>Name</label>
        <input
          id="name" name="name" type="text" autoComplete="name" required maxLength={LIMITS.name}
          aria-invalid={Boolean(errors.name)} aria-describedby={describedBy("name")} className={CONTROL}
        />
        {fieldError("name")}
      </div>

      <div>
        <label htmlFor="email" className={LABEL}>Work email</label>
        <input
          id="email" name="email" type="email" autoComplete="email" required maxLength={LIMITS.email}
          aria-invalid={Boolean(errors.email)} aria-describedby={describedBy("email")} className={CONTROL}
        />
        {fieldError("email")}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="organisation" className={LABEL}>Organisation</label>
          <input
            id="organisation" name="organisation" type="text" autoComplete="organization" required
            maxLength={LIMITS.organisation} aria-invalid={Boolean(errors.organisation)}
            aria-describedby={describedBy("organisation")} className={CONTROL}
          />
          {fieldError("organisation")}
        </div>
        <div>
          <label htmlFor="role" className={LABEL}>Role</label>
          <input
            id="role" name="role" type="text" autoComplete="organization-title" required maxLength={LIMITS.role}
            aria-invalid={Boolean(errors.role)} aria-describedby={describedBy("role")} className={CONTROL}
          />
          {fieldError("role")}
        </div>
      </div>

      <div>
        <label htmlFor="buildingBand" className={LABEL}>Buildings you manage, inspect or work on</label>
        <select
          id="buildingBand" name="buildingBand" required defaultValue=""
          aria-invalid={Boolean(errors.buildingBand)} aria-describedby={describedBy("buildingBand")} className={CONTROL}
        >
          <option value="" disabled>Choose one</option>
          {BUILDING_BANDS.map((band) => (
            <option key={band.value} value={band.value}>{band.label}</option>
          ))}
        </select>
        {fieldError("buildingBand")}
      </div>

      <div>
        <label htmlFor="challenge" className={LABEL}>Main challenge</label>
        <select
          id="challenge" name="challenge" required defaultValue=""
          aria-invalid={Boolean(errors.challenge)} aria-describedby={describedBy("challenge")} className={CONTROL}
        >
          <option value="" disabled>Choose one</option>
          {CHALLENGES.map((challenge) => (
            <option key={challenge.value} value={challenge.value}>{challenge.label}</option>
          ))}
        </select>
        {fieldError("challenge")}
      </div>

      <div>
        <label htmlFor="message" className={LABEL}>
          Anything else we should know? <span className="font-normal text-text-secondary">(optional)</span>
        </label>
        <p id="message-hint" className="mt-1 text-sm text-text-secondary">
          Please don&rsquo;t include specific building, resident or incident details here.
        </p>
        <textarea
          id="message" name="message" rows={4} maxLength={LIMITS.message}
          onChange={(event) => setMessageLength(event.currentTarget.value.length)}
          aria-invalid={Boolean(errors.message)} aria-describedby={describedBy("message", "message-hint")}
          className={CONTROL}
        />
        <p className="mt-1 text-right font-mono text-xs text-text-secondary" aria-hidden="true">
          {messageLength}/{LIMITS.message}
        </p>
        {fieldError("message")}
      </div>

      <div className="border-t border-hairline pt-6">
        <p id="form-privacy" className="text-sm leading-relaxed text-text-secondary">
          We use these details only to respond to your request, and we do not add you to a mailing list. See the{" "}
          <Link className="font-semibold text-navy underline" href="/privacy">Privacy Notice</Link>.
        </p>
        <button
          type="submit"
          disabled={status.kind === "submitting"}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-sm bg-ember px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-ember-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status.kind === "submitting" ? "Sending…" : "Request a demo"}
        </button>
      </div>
    </form>
  );
}
