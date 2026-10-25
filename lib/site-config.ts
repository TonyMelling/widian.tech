/**
 * Facts the owner must supply before the matching public copy can be completed.
 * Leave a value `null` until it is verified; nothing is invented or defaulted.
 *
 * - controllerName: the legal entity that is the data controller. Fill only once it is confirmed
 *   (do not describe Widian Limited as incorporated before then).
 * - registeredAddress / companyNumber: only if the entity is incorporated.
 * - privacyEmail: a monitored address for data-protection requests.
 * - contactEmail: a monitored general enquiry / support address.
 */
export const SITE_FACTS: {
  controllerName: string | null;
  registeredAddress: string | null;
  companyNumber: string | null;
  privacyEmail: string | null;
  contactEmail: string | null;
} = {
  controllerName: null,
  registeredAddress: null,
  companyNumber: null,
  privacyEmail: null,
  contactEmail: null,
};

/** Names of the privacy-notice facts that are still missing (empty once the notice can be published). */
export function missingPrivacyFacts(facts = SITE_FACTS): string[] {
  const missing: string[] = [];
  if (!facts.controllerName) missing.push("the legal name of the data controller");
  if (!facts.privacyEmail) missing.push("a monitored privacy email address");
  // A registered address and company number are required only for an incorporated company; their absence
  // is acceptable for an unincorporated controller, but both must then be omitted together.
  if (Boolean(facts.registeredAddress) !== Boolean(facts.companyNumber)) {
    missing.push("both the registered address and the company number (or neither, if not incorporated)");
  }
  return missing;
}
