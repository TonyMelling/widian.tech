/**
 * Demo-enquiry fields, controlled values and validation.
 *
 * Pure and dependency-free so the same rules run in the browser (instant, accessible feedback) and on the server
 * (the only check that is trusted). The controlled lists are a working proposal for owner approval — see
 * docs/LEAD_CAPTURE_AND_COMMUNICATIONS.md "Approved form fields and qualification bands".
 */

export const BUILDING_BANDS = [
  { value: "1-5", label: "1–5 buildings" },
  { value: "6-25", label: "6–25 buildings" },
  { value: "26-100", label: "26–100 buildings" },
  { value: "100-plus", label: "More than 100 buildings" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const CHALLENGES = [
  { value: "scattered-records", label: "Inspection, finding and remedial records are scattered" },
  { value: "closure-evidence", label: "Showing that remedial work was independently checked and verified" },
  { value: "contractor-coordination", label: "Coordinating contractors and their evidence" },
  { value: "portfolio-visibility", label: "Seeing open actions across a portfolio" },
  { value: "exploring", label: "Just exploring Widian" },
  { value: "other", label: "Something else" },
] as const;

export const LIMITS = {
  name: 100,
  email: 254,
  organisation: 150,
  role: 100,
  message: 1500,
} as const;

/** Version of the optional-updates wording shown beside the checkbox. Bump whenever that wording changes. */
export const MARKETING_WORDING_VERSION = "2026-11-v1";

export type EnquiryField =
  | "name"
  | "email"
  | "organisation"
  | "role"
  | "buildingBand"
  | "challenge"
  | "message";

export type EnquiryInput = {
  name: string;
  email: string;
  organisation: string;
  role: string;
  buildingBand: string;
  challenge: string;
  message: string;
  marketingOptIn: boolean;
};

export type FieldErrors = Partial<Record<EnquiryField, string>>;

export type ValidationResult =
  | { ok: true; data: EnquiryInput }
  | { ok: false; errors: FieldErrors };

// Deliberately permissive: one @, a dotted domain, no whitespace. Real verification is the acknowledgement email.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/;
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

function clean(value: unknown, multiline = false): string {
  if (typeof value !== "string") return "";
  let text = value.normalize("NFC").replace(CONTROL_CHARS, "");
  if (!multiline) text = text.replace(/[\r\n\t]+/g, " ");
  return text.trim();
}

export function validateEnquiry(raw: unknown): ValidationResult {
  const source = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const data: EnquiryInput = {
    name: clean(source.name),
    email: clean(source.email).toLowerCase(),
    organisation: clean(source.organisation),
    role: clean(source.role),
    buildingBand: clean(source.buildingBand),
    challenge: clean(source.challenge),
    message: clean(source.message, true),
    marketingOptIn: source.marketingOptIn === true,
  };

  const errors: FieldErrors = {};
  if (!data.name) errors.name = "Enter your name.";
  else if (data.name.length > LIMITS.name) errors.name = `Use ${LIMITS.name} characters or fewer.`;

  if (!data.email) errors.email = "Enter your work email address.";
  else if (data.email.length > LIMITS.email || !EMAIL_PATTERN.test(data.email)) {
    errors.email = "Enter a valid email address, for example name@company.com.";
  }

  if (!data.organisation) errors.organisation = "Enter your organisation.";
  else if (data.organisation.length > LIMITS.organisation) {
    errors.organisation = `Use ${LIMITS.organisation} characters or fewer.`;
  }

  if (!data.role) errors.role = "Enter your role.";
  else if (data.role.length > LIMITS.role) errors.role = `Use ${LIMITS.role} characters or fewer.`;

  if (!BUILDING_BANDS.some((band) => band.value === data.buildingBand)) {
    errors.buildingBand = "Choose the option closest to your portfolio.";
  }
  if (!CHALLENGES.some((challenge) => challenge.value === data.challenge)) {
    errors.challenge = "Choose the option closest to your main challenge.";
  }
  if (data.message.length > LIMITS.message) {
    errors.message = `Use ${LIMITS.message} characters or fewer.`;
  }

  return Object.keys(errors).length > 0 ? { ok: false, errors } : { ok: true, data };
}

export function labelFor(list: readonly { value: string; label: string }[], value: string): string {
  return list.find((item) => item.value === value)?.label ?? value;
}

/** Shape of the browser-generated idempotency key. */
export const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
