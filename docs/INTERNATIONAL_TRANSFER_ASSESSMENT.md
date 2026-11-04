# International Transfer Assessment — Book a Demo enquiry processing

**Status:** Draft prepared 2026-11-04 for owner approval. **Not approved.** This is an implementation record, not legal advice.
**Controller:** Widian Tech Limited (incorporation pending; no registration details yet). Until it exists, the assessment is made for the business that will become the controller and must be adopted by the company once incorporated.
**Related records:** `DECISIONS.md` D-010, D-012, D-034, D-042; `PRIVACY_AND_UK_GDPR_PLAN.md`; `LEAD_CAPTURE_AND_COMMUNICATIONS.md`; `PROGRESS_TRACKER.md` (entries 2026-11-04 (5)–(7)). Processor facts established in those records are relied on here, not repeated.

## 1. Conclusion

Widian's use of Supabase and Resend for demo enquiries involves restricted transfers under UK GDPR Chapter V. Each has a valid transfer route, the data is low in volume and sensitivity, and the residual risk is **low and acceptable**, subject to the conditions in section 6. Two items of evidence are still open (section 5): a live Data Privacy Framework (DPF) status check for Resend, and Supabase's sub-processor list and Transfer Impact Assessment (TIA). The assessment can be approved with those recorded as pre-launch tasks. It does not change the privacy notice, which says only that each provider publishes its safeguards.

## 2. What is transferred

| Item | Detail |
|---|---|
| Data | Name, work email, organisation, role, portfolio-size band, main challenge, optional message (max 1,500 characters, with a warning not to include building, resident or incident details), reference, timestamps, notice version, email delivery records |
| Not collected | Special-category or criminal-offence data (not solicited), marketing consent (D-041), analytics, cookies |
| Subjects and volume | Business contacts enquiring about a demonstration; low volume, individually identifiable |
| Retention | Unsuccessful enquiries: up to 12 months after last meaningful contact, then manual deletion, with justified exceptions (D-042). Resend: 30 days. Supabase backups age out on its schedule; no promise of immediate deletion from backups (D-042) |
| Purpose | Respond to the enquiry; no onward use |

## 3. Transfers and routes

| Provider | Role | Location of data | Transfer | UK route | Assessment needed? |
|---|---|---|---|---|---|
| **Supabase** (database) | Processor | London (`eu-west-2`); Supabase Inc. is a US company and Supabase may use sub-processors elsewhere | Remote operational or support access from outside the UK | EU SCCs (Module Two) with the UK Addendum (version B.1.0), incorporated in Supabase's DPA, which Supabase states applies to every organisation ([DPA](https://supabase.com/legal/customer-resources/data-processing-addendum)). Supabase's [transfers FAQ](https://supabase.com/legal/privacy-resources/data-residency-and-transfers-faq) names the US and Singapore as destinations relying on SCCs. No DPF reliance is published | **Yes** — a transfer risk assessment (TRA) is required before relying on an appropriate safeguard ([ICO](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/)) |
| **Resend** (email delivery) | Processor | United States (storage of email content and delivery records) | Storage and processing in the US | UK Extension to the EU-US DPF (the UK "data bridge"), with standard DPA containing SCCs and the UK Addendum as fallback (established; owner-confirmed) | **Not while the data bridge applies**; required if it ceases to apply, because the fallback is an Article 46 safeguard |

Out of scope, recorded to avoid doubt: **Vercel** (hosting and request logs) is covered in the notice and D-034; the **enquiry mailbox** provider (Widian's own mail host) is not assessed here and should be confirmed separately if it processes outside the UK; the optional **Cal.com** link sends no Widian data (visitor-initiated, none configured today).

## 4. Risk assessment

**Supabase, US (and any Singapore sub-processor access).**
- *Likelihood and impact.* The data is business contact details and a short qualification record. Impact on individuals if a foreign authority obtained it is low, and the likelihood that this data is of interest is low.
- *Law and practice.* For US transfers the ICO allows a TRA to rely on the UK government's published analysis of US law ([ICO guidance](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/completing-a-transfer-risk-assessment/completing-a-tra-using-the-uk-government-s-analysis-us/)). On that basis, with no special-category data transferred, the US risk is assessed as low. For Singapore, no analysis is made here: it is relevant only if a Singapore sub-processor can actually access this project's data, which is not yet evidenced (section 5).
- *Safeguards in place.* Data held in London; contractual SCCs and UK Addendum; HTTPS to the database; service-role key held server-side only in Vercel; row-level security enabled with no public policies; Supabase AI data-sharing opt-in set to Disabled; a dedicated project separate from the application database; no free-form data beyond a capped, warned message field.

**Resend, US.**
- *Route.* While Resend holds an active DPF certification that includes the UK Extension and covers this type of data, the data bridge applies and no transfer risk assessment or other safeguard is needed ([ICO](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/adequacy-regulations/how-does-the-uk-extension-to-the-eu-us-data-privacy-framework-work/)). The data bridge and DPF remain subject to legal and political change, which is why the fallback below matters.
- *Fallback.* If the bridge stopped applying, Widian would rely on the SCCs and UK Addendum in Resend's DPA and complete a short US TRA on the same reasoning as Supabase above.
- *Safeguards in place.* Plain-text emails only; retention limited to 30 days; the notification email is the only place the free-text message travels, which the owner has accepted (D-040); no marketing or analytics use; domain authentication (SPF, DKIM, DMARC) configured.

**Overall.** Low volume, low sensitivity, short retention, UK-region storage for the main record, a valid route for each provider and layered safeguards give a low residual risk. No supplementary measure (for example client-side encryption) is warranted at this scale.

## 5. Evidence still open

| # | Item | Why it matters | Smallest action |
|---|---|---|---|
| 1 | **Resend's live DPF status.** Active on the DPF list, UK Extension selected, and covering non-HR data | The "no TRA needed" position depends on it being true at launch | Check the [DPF list](https://www.dataprivacyframework.gov/list) on the day of sign-off and record the date. If it does not hold, complete the fallback US TRA before launch |
| 2 | **Supabase sub-processors and TIA.** Which sub-processors and countries can access this project's data; Singapore in particular | Determines whether any restricted transfer beyond the US applies, and whether a Singapore assessment is needed | Review Supabase's published sub-processor list and download its TIA (available from the organisation's Legal Documents page, not yet downloaded) and note the outcome here |
| 3 | **Adoption by the controller.** Widian Tech Limited does not yet exist, and the Supabase and Resend agreements must be held by, or moved to, the legal controller | An assessment and a DPA are only effective for the entity that holds them | After incorporation, confirm the account holder and adopt this document |
| 4 | **Owner approval and review date** | Section 7 is blank | Sign off or amend |

Not reopened, as instructed: Resend's DPA, safeguards and retention; Supabase's DPA contents beyond the mechanism cited above.

## 6. Conditions of the conclusion

1. Only the fields in section 2 are collected; no special-category data is solicited; no marketing or analytics use without a new assessment.
2. The Supabase project stays in London and the Resend account stays on its current DPA terms.
3. Section 5 items 1 and 2 are closed before Production collection opens.
4. Reassess on: a new or changed provider or sub-processor; a change to what is collected or why; a DPF or data-bridge change; or annually, whichever is first.

## 7. Sign-off

| | |
|---|---|
| Approved by | *Not yet approved* |
| Date | |
| Next review due | |
