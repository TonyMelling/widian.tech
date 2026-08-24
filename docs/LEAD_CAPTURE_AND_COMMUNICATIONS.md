# Lead Capture and Communications

## Purpose

Define how enquiries from `widian.tech` become owned, traceable sales activity without turning email into the system of record or mixing marketing data into the operational Widian product by default.

## Recommended first-release architecture

1. The walkthrough form posts to a same-origin endpoint such as `POST /api/walkthrough`.
2. The endpoint validates and normalises the payload, applies rate limiting and bot controls, and creates an idempotency key and correlation ID.
3. A durable lead record is written before the visitor sees a success state.
4. An outbox or managed queue triggers an acknowledgement to the enquirer and an internal notification to the nominated Widian owner.
5. Delivery metadata and subsequent lifecycle changes are attached to the lead record.

Email is a notification channel, not the canonical lead database. Do not place leads in the operational Widian Supabase project unless a documented data-boundary decision approves it.

## Canonical storage decision

| Option | Best when | Advantages | Risks |
|---|---|---|---|
| Managed CRM | A person will actively qualify and follow up leads | Ownership, pipeline, tasks and reporting are ready-made | Cost, processor review, API constraints and vendor lock-in |
| Isolated marketing Postgres | Volume is initially small and infrastructure control matters | Clear boundary, flexible schema and provider-neutral API | A lead console and operating process must be built |
| CRM plus durable integration outbox | Sales operations already depend on a CRM and reliability matters | Strong workflow plus recoverable integrations | More moving parts and careful deduplication required |

Recommendation: use a managed CRM as the canonical store if Widian already has an agreed sales owner and CRM workflow. Otherwise begin with a small, isolated marketing database and an explicit migration/synchronisation contract. Provider selection remains a recorded decision.

## Minimum lead record

- Lead ID, correlation ID and creation timestamp
- Name, work email, organisation and role
- Optional phone number only if follow-up by phone is operationally required
- Portfolio/building band and primary challenge using controlled values
- Free-text context with a warning not to submit sensitive building, resident or incident data
- Page, referrer, campaign and UTM attribution where permitted
- Privacy notice version shown at submission
- Separate marketing preference, wording version, timestamp and source
- Lifecycle status, owner, next action and last-contact timestamp
- Communication delivery status and provider message identifier
- Suppression, unsubscribe and deletion/anonymisation state
- Created/updated timestamps and an audit trail of material changes

Do not collect special-category data, detailed building defects, resident information or inspection evidence through the marketing form.

## Lifecycle

`New → Triaged → Qualified → Walkthrough booked → Opportunity → Customer`

Exit states are `Closed — not proceeding`, `Duplicate` and `Spam`. A lead may be `Suppressed` for marketing without preventing an operational response to an active enquiry where appropriate.

Each status needs an owner, entry criteria, permitted transitions and a next-action expectation. “Form submitted” is not equivalent to “qualified lead”.

## Form and consent design

- Keep the first form short: name, work email, organisation, role, challenge and optional context.
- Link the privacy notice beside the submit action.
- Treat responding to the requested walkthrough as distinct from ongoing promotional marketing.
- If marketing subscription is offered, use a separate, optional, unticked control with specific wording.
- Store the exact consent wording/version and evidence of the choice.
- Support withdrawal and retain the minimum suppression record needed to avoid contacting someone again.
- Never use a pre-ticked box or make marketing consent a condition of requesting a walkthrough.

The final lawful-basis, retention and PECR treatment must be approved by Widian's accountable privacy owner or adviser, particularly for sole traders and other individual subscribers.

## Backend communications

### Enquirer acknowledgement

Send only after durable lead acceptance. Confirm receipt, explain the approved next step and response expectation, provide privacy/contact links, and make no unsupported compliance, security or availability claims.

### Internal notification

Route to a named owner or sales queue. Include the lead ID, qualification fields and a link to the canonical record. Avoid forwarding unnecessary free text into broad chat channels.

### Follow-up

Use CRM tasks or a controlled sequence, not an untracked personal inbox workflow. Keep operational enquiry messages separate from promotional campaigns and honour suppression centrally.

### Sending infrastructure

Use a transactional email provider or approved cloud email service. Configure SPF, DKIM and DMARC for the sending domain, use a monitored reply address, separate transactional and marketing templates, and process bounces/complaints through signed webhooks.

## API behaviour

`POST /api/walkthrough` must provide:

- client and server schema validation, size limits and normalisation;
- same-origin and CSRF protections appropriate to the framework;
- rate limiting, honeypot and time-based bot signals;
- idempotency to prevent duplicate leads on retry;
- generic public errors that expose neither providers nor storage;
- structured server logs without raw form bodies;
- success only after a durable record exists;
- accessible inline errors and a retry-safe failure state.

Proposed response:

```json
{
  "status": "accepted",
  "reference": "public-safe-reference"
}
```

## Reliability and recovery

- Write the lead and communication job in one transaction where possible.
- Retry temporary provider failures with bounded exponential backoff.
- Move exhausted jobs to a dead-letter/manual-review state and alert the owner.
- Reconcile accepted leads against acknowledgement and internal-delivery status.
- Make webhook processing idempotent and verify provider signatures.
- Provide a manual resend that does not create a duplicate lead.
- Monitor submission success, validation failure, provider failure, queue age and unowned leads.

## Security and privacy controls

- Encrypt transport and use provider-managed encryption at rest.
- Restrict access by role; use individual accounts and MFA where supported.
- Keep secrets server-side and rotate them.
- Record processors, data locations, retention and deletion behaviour.
- Minimise logs and redact email addresses, tokens and message bodies.
- Establish access, correction, deletion and export procedures.
- Review unqualified leads on a documented schedule; delete or anonymise when no longer needed.
- Do not state a fixed legal retention period. Widian must approve a justified operational schedule.

## Analytics events

- `walkthrough_form_view`
- `walkthrough_form_start`
- `walkthrough_form_validation_error` with field category, never field value
- `walkthrough_form_submit`
- `walkthrough_form_accepted`
- `walkthrough_form_error` with safe error class

Do not send names, emails, organisation names or free text to analytics.

## Decisions required

- ~~Canonical CRM/database and data region~~ — isolated marketing database (D-007); data region still to confirm
- Named lead owner and backup owner
- Response target and escalation path
- ~~Transactional email provider and sending subdomain~~ — Resend (D-008); subdomain and SPF/DKIM/DMARC configuration still to complete
- Approved form fields and qualification bands
- Privacy notice owner, lawful-basis assessment and marketing wording — blocked on privacy owner assignment (D-010, D-012)
- Retention/review schedule and deletion owner — blocked on privacy owner assignment (D-010, D-012)
- Whether chat notifications are needed and who may see them
- ~~Booking flow: immediate calendar selection or human qualification first~~ — immediate calendar selection (D-009); form still captures qualification fields so the walkthrough owner arrives prepared

## Acceptance criteria

- A successful UI state always corresponds to a durable lead record.
- Repeated submissions with the same idempotency key create one lead.
- A provider outage does not lose the lead and is visible operationally.
- Enquiry response and marketing permission are demonstrably separate.
- No personal data is sent to analytics or exposed in client logs.
- Keyboard and screen-reader users can complete, correct and resubmit the form.
- Suppressed contacts are not added to promotional sequences.
- Owners can trace each lead from source through communication and disposition.

