# Privacy and UK GDPR Plan

## Scope and accountability

This is an implementation control plan, not legal advice. Widian remains responsible for deciding and documenting its purposes, lawful bases, retention, processors and responses to individual rights. Assign a named privacy owner before lead capture goes live.

The plan covers walkthrough enquiries, marketing preferences, analytics identifiers, server logs and communications metadata collected through `widian.tech`.

## Data map

Maintain a record of processing activities containing:

| Processing | Data subjects | Data | Purpose | Proposed basis | Recipients/processors | Location | Retention | Owner |
|---|---|---|---|---|---|---|---|---|
| Walkthrough enquiry | Professional visitors | Identity, business contact and qualification fields | Respond to requested enquiry and manage opportunity | Decide and document before launch | Hosting, CRM, email | Confirm | Approve schedule | Sales/Privacy |
| Optional marketing | Subscribers | Identity, business email, preference evidence | Send requested marketing | Consent or another approved basis; assess PECR separately | CRM/email marketing | Confirm | Until withdrawal plus justified suppression evidence | Marketing/Privacy |
| Essential security logs | Visitors | IP/device/request metadata | Security, abuse prevention and diagnosis | Decide and document | Hosting/security suppliers | Confirm | Short, justified period | Engineering/Privacy |
| Audience analytics | Visitors | Pseudonymous usage events | Improve website and measure acquisition | Assess cookies/ePrivacy and UK GDPR | Analytics supplier | Confirm | Configure minimum | Marketing/Privacy |

Do not use the table's proposed bases as final legal determinations. Complete and approve the assessment for Widian's circumstances.

## Privacy by design checklist

- Define each purpose before selecting fields or suppliers.
- Collect only data necessary for that purpose.
- Do not collect resident details, special-category data, defect evidence or incident narratives in a marketing form.
- Use privacy-protective defaults; optional marketing is off by default.
- Separate enquiry fulfilment from promotional marketing.
- Keep public website data separate from the operational building-record database unless explicitly approved.
- Limit access by role and periodically review access.
- Assess processor terms, sub-processors, international transfers, data location and deletion support.
- Complete a DPIA screening; complete a DPIA if the screening identifies likely high risk.
- Test rights handling, deletion and suppression before launch.

## Layered privacy information

At the form, provide concise just-in-time information and a link to the full privacy notice. The notice must identify:

- Widian's legal identity and contact details;
- the privacy contact;
- each purpose and lawful basis;
- categories of personal data;
- recipients/processors and relevant international-transfer safeguards;
- retention periods or the criteria used to determine them;
- applicable individual rights and how to exercise them;
- the right to complain to the ICO;
- whether information is required and the consequence of not providing it;
- any automated decision-making or profiling, if used;
- the date/version of the notice.

Store the notice version associated with each submission.

## Consent and direct marketing

- Do not bundle marketing permission into a walkthrough request.
- Use a separate, specific, informed and affirmative choice where consent is the chosen basis.
- Keep evidence of who consented, when, how, what they were told and the wording/version used.
- Make withdrawal as easy as giving consent.
- Honour direct-marketing objections promptly and centrally; the right to object to direct marketing is absolute.
- Maintain a minimal suppression record rather than deleting the only evidence needed to prevent re-contact.
- Assess PECR treatment by channel and subscriber type; B2B does not remove all obligations, particularly for sole traders and some partnerships.
- Do not upload enquiry leads to advertising “custom audiences” or enrichment services without a separate, approved assessment and notice.

## Cookies and analytics

1. Inventory every cookie, local-storage item, pixel and third-party request.
2. Classify what is strictly necessary and document why.
3. Block non-essential technologies until valid consent where required.
4. Offer equally prominent accept and reject choices, plus granular preference controls where used.
5. Store consent evidence and allow preferences to be changed later.
6. Keep analytics free of form values and direct identifiers.
7. Do not load embedded video, chat, calendar or social services before the applicable consent decision.
8. Re-scan staging and production after supplier or code changes.

A cookieless configuration does not remove the need to assess personal-data processing.

## Retention and deletion

UK GDPR does not prescribe a universal number of months. Widian must set and justify periods by purpose.

- Set separate review/deletion rules for unqualified enquiries, active opportunities, customers, communication logs, consent evidence, suppression records, analytics and security logs.
- Automate review/deletion where possible and generate exception reports.
- Anonymise only where re-identification is not reasonably possible; deletion is often simpler for unused leads.
- Flow deletion to processors and integrations, subject to justified legal or suppression records.
- Document backup expiry and restoration handling.
- Review the schedule at least when purposes, suppliers or business processes change.

## Individual rights procedure

- Publish a clear request channel.
- Verify identity proportionately without collecting excessive new data.
- Search the canonical lead store, email platform, analytics where identifiable, support tools, integrations, logs and backups as applicable.
- Support access, rectification, erasure, restriction, portability, objection and withdrawal where applicable.
- Record request dates, decisions, searches, disclosures and completion without retaining unnecessary copies.
- Escalate complex requests and breaches to the accountable privacy owner.

## Security and incident readiness

- Use TLS, encryption at rest, least privilege, MFA and secret rotation.
- Keep audit logs for privileged lead access and exports.
- Verify email and CRM webhooks; use idempotency and replay protection.
- Redact personal data from application logs, error monitoring and analytics.
- Maintain processor contacts, incident playbook and breach-assessment workflow.
- Test restoration, deletion, supplier outage and unauthorised-access scenarios.

## Pre-launch compliance gate

- Data map and record of processing approved
- Controller identity and privacy contact confirmed
- Lawful-basis and PECR assessment approved
- Form fields pass necessity review
- Privacy and cookie notices approved and versioned
- Processor agreements and transfer assessments complete
- Retention/deletion configuration tested
- Consent, withdrawal, objection and suppression tested
- Rights procedure and incident owner confirmed
- Cookie scan matches the published notice
- No personal data appears in analytics, URLs or routine logs

