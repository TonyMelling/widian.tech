/**
 * Facts the owner must supply before the matching public copy can be completed.
 * Leave a value `null` until it is verified; nothing is invented or defaulted.
 *
 * - controllerName: the legal entity that is the data controller. Fill only once it is confirmed
 *   (do not describe Widian Limited as incorporated before then).
 * - registeredAddress / companyNumber: only if the entity is incorporated.
 * - privacyEmail: a monitored address for data-protection requests.
 * - contactEmail: general enquiries and demonstration requests.
 * - supportEmail: customer support.
 * - securityEmail: security reports.
 * - privacyWordingApproved: set to true only once the privacy notice wording and the controller details have
 *   been confirmed. Until then /privacy stays noindex and visibly marked as not final.
 */
export const SITE_FACTS: {
  controllerName: string | null;
  registeredAddress: string | null;
  companyNumber: string | null;
  privacyEmail: string | null;
  contactEmail: string | null;
  supportEmail: string | null;
  securityEmail: string | null;
  privacyWordingApproved: boolean;
} = {
  controllerName: null,
  registeredAddress: null,
  companyNumber: null,
  privacyEmail: "info@widian.tech",
  contactEmail: "info@widian.tech",
  supportEmail: "support@widian.tech",
  securityEmail: "security@widian.tech",
  privacyWordingApproved: false,
};

/** Names of the privacy-notice facts that are still missing (empty once the notice can be published). */
export function missingPrivacyFacts(facts = SITE_FACTS): string[] {
  const missing: string[] = [];
  if (!facts.controllerName) missing.push("the legal name of the data controller");
  if (!facts.privacyEmail) missing.push("a monitored privacy email address");
  if (!facts.privacyWordingApproved) missing.push("confirmation of the privacy notice wording");
  // A registered address and company number are required only for an incorporated company; their absence
  // is acceptable for an unincorporated controller, but both must then be omitted together.
  if (Boolean(facts.registeredAddress) !== Boolean(facts.companyNumber)) {
    missing.push("both the registered address and the company number (or neither, if not incorporated)");
  }
  return missing;
}
