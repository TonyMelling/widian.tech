# International Transfer Assessment — Book a Demo enquiry processing

**Status:** Evidence review completed 2026-11-04. **Provisionally accepted by the owner** (recorded 4 November 2026); **formal adoption by Widian Tech Limited pending incorporation** (section 7). This is an implementation record, not legal advice.
**Controller:** Widian Tech Limited (incorporation pending; no registration details yet). Until it exists, the assessment is made for the business that will become the controller and must be adopted by the company once incorporated.
**Related records:** `DECISIONS.md` D-010, D-012, D-034, D-042; `PRIVACY_AND_UK_GDPR_PLAN.md`; `LEAD_CAPTURE_AND_COMMUNICATIONS.md`; `PROGRESS_TRACKER.md` (entries 2026-11-04 (5)–(8)). Processor facts established in those records are relied on here, not repeated.

## 1. Conclusion

Widian's use of Supabase and Resend for demo enquiries involves restricted transfers under UK GDPR Chapter V. Each has a valid transfer route, the data is low in volume and sensitivity, and the residual risk is **low and acceptable**, subject to the conditions in section 6. The evidence supports that conclusion, with two stated limits: the Singapore analysis rests on Supabase's own description of Singapore law and its practices, and Supabase's published TIA is older than its current contract documents (section 5). The owner has **provisionally accepted** the conclusion, including both limits (section 7); the confirmations in section 5 remain optional. It does not change the privacy notice, which says only that each provider publishes its safeguards.

**What the evidence review changed.** Supabase's DPA names **Supabase Pte. Ltd. (Singapore)** as the data importer, so Singapore is the principal transfer destination for Supabase, not an incidental one, and it is assessed in section 4. Resend's DPF listing is now verified.

## 2. What is transferred

| Item | Detail |
|---|---|
| Data | Name, work email, organisation, role, portfolio-size band, main challenge, optional message (max 1,500 characters, with a warning not to include building, resident or incident details), reference, timestamps, notice version, email delivery records |
| Not collected | Special-category or criminal-offence data (not solicited), marketing consent (D-041), analytics, cookies |
| Subjects and volume | Business contacts enquiring about a demonstration; low volume, individually identifiable |
| Retention | Unsuccessful enquiries: up to 12 months after last meaningful contact, then manual deletion, with justified exceptions (D-042). Resend: 30 days. Supabase backups age out on its schedule; no promise of immediate deletion from backups (D-042) |
| Purpose | Respond to the enquiry; no onward use |

## 3. Transfers and routes

| Provider | Role | Where the data is | Transfer | UK route | Assessment |
|---|---|---|---|---|---|
| **Supabase** (database) | Processor. Importer under the DPA: **Supabase Pte. Ltd., Singapore**. Supabase, Inc. (US) provides support and operational services | Database and backups in London (`eu-west-2`) on AWS; Supabase states logs are held in EU data centres. Support staff "may be in any timezone" and act only on a support request or security incident | Remote access from Singapore, the US or elsewhere | EU SCCs (Module Two) with the UK Addendum B.1.0, Schedule 2 of Supabase's DPA (Version 1, 1 August 2026), which applies to every customer. Supabase states it relies on SCCs for Singapore and US transfers; it publishes no DPF reliance for itself | **TRA required** for Singapore and the US (section 4) |
| **Resend** (email delivery) | Processor | United States (email content and delivery records) | Storage and processing in the US | UK Extension to the EU-US DPF (the UK data bridge), verified section 5; standard DPA with SCCs and the UK Addendum as fallback | **None while the data bridge applies**; a short US TRA if it ceases to |

Out of scope: **Vercel** (covered in the notice and D-034); the **enquiry mailbox** provider (Widian's own mail host), to be confirmed separately if it processes outside the UK; the optional **Cal.com** link, which sends no Widian data.

## 4. Risk assessment

**Supabase, Singapore (importer) and the US (Supabase, Inc. and sub-processors).**
- *What the destination law allows.* Supabase's TIA records that Singapore authorities have broad criminal-investigation and telecoms powers (Criminal Procedure Code, Telecommunications Act, Official Secrets Act, Prevention of Corruption Act, and the Foreign Interference (Countermeasures) Act once in force), alongside constitutional protections and a data-protection law (the PDPA) that does not bind public agencies. Singapore is not covered by UK adequacy regulations. For the US, the ICO allows a TRA to rely on the UK government's published analysis ([ICO guidance](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/completing-a-transfer-risk-assessment/completing-a-tra-using-the-uk-government-s-analysis-us/)); the TIA also analyses FISA 702, EO 12333 and EO 14086.
- *How exposed this data is.* The record sits in London on AWS and is encrypted in transit (TLS 1.2) and at rest (AES-256, per-project keys protected by hardware security modules) per Supabase's TIA and FAQ. Singapore or US access to project data arises only on a support request or security incident, is limited to the relevant project and is logged, per Supabase's FAQ. Widian controls the trigger. The TIA states Supabase has received no US government request under FISA 702 or EO 12333 and has disclosed no customer data to authorities; it publishes no transparency report and gives no equivalent statement for Singapore.
- *Likelihood and impact.* The data is business contact details and a short qualification record. The likelihood that an authority would seek it is low, and the impact on individuals if it did is low.
- *Safeguards.* Contractual SCCs and UK Addendum; Supabase's government-request protocol (legal review, challenge of invalid requests, customer notification unless prohibited); the sub-processor change process (section 5); HTTPS from Widian's server; service-role key held server-side only; row-level security with no public policies; Supabase AI data-sharing opt-in set to Disabled; a dedicated project separate from the application database; a capped, warned free-text field.
- *Residual risk:* **low.** Limits: the Singapore analysis relies on Supabase's description rather than independent legal advice, and the TIA was written for Supabase, Inc., not for the Singapore importer named in the DPA.

**Other Supabase sub-processors.** The 12 October 2026 list has 22 entries: hosting (AWS, Cloudflare, Google, Upstash, Vercel), and support, communications, monitoring, analytics and AI tools, almost all in the US, with one each in Singapore and Hungary (EU, covered by UK adequacy regulations). The list is not scoped by product or region, so which of them could touch this project's data cannot be verified. Applying the same reasoning, the exposure is limited to what is placed in a support request or logs, which Widian keeps free of enquiry data (section 6).

**Resend, US.** While Resend's certification is active under the UK Extension and covers this type of data, the data bridge applies and no TRA or other safeguard is needed ([ICO](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/adequacy-regulations/how-does-the-uk-extension-to-the-eu-us-data-privacy-framework-work/)). The bridge remains subject to legal and political change, so if it stopped applying Widian would rely on the SCCs and UK Addendum in Resend's DPA and complete a short US TRA on the reasoning above. Safeguards: plain-text emails only; 30-day retention; the notification email is the only place the free-text message travels (accepted by the owner, D-040); no marketing or analytics use; SPF, DKIM and DMARC configured. Residual risk: **low.**

**Overall.** Low volume, low sensitivity, short retention, London storage for the main record, a valid route for each provider and layered safeguards give a low residual risk. No supplementary measure such as client-side encryption is warranted at this scale.

## 5. Evidence status

| # | Item | Status | Detail |
|---|---|---|---|
| 1 | **Resend DPF listing** | **Closed 2026-11-04** | [DPF list](https://www.dataprivacyframework.gov/list) entry "Resend", San Francisco, CA: Active Participant. EU-U.S. DPF and UK Extension both "Active – Re-certification under Review"; original certification 20 Feb 2025; next certification due 3 Mar 2027; covered data Non-HR; no other covered entities. Business enquiry data is non-HR. Re-check on the day of sign-off and before 3 Mar 2027 |
| 2 | **Supabase sub-processors** | **Reviewed** | [List](https://supabase.com/legal/subprocessor-list/October-12-2026.pdf), 12 Oct 2026 (a 1 Jun 2026 version is also published). Singapore appears only as Supabase Pte. Ltd., described there as support "in marketplace related activities". Singapore relevance is nonetheless established by the DPA, which names Pte. Ltd. as importer (section 3) |
| 3 | **Supabase TIA** | **Reviewed; currency open** | [TIA](https://supabase.com/downloads/docs/Supabase+TIA+250314.pdf), dated 14 Mar 2025, importer Supabase, Inc., Module Two. It sets out the Singapore and US legal analysis and measures used above but has no overall conclusion section, the sign-off block is blank in the public copy, and its sub-processor table names vendors absent from the 2026 list (for example Fly.io, Stripe, Twilio, Atlassian, Stape). Supabase's FAQ says the TIA is reviewed annually |
| 4 | **Supabase entity description** | **Inconsistent across documents** | DPA: importer is Pte. Ltd. FAQ: Pte. Ltd. is primary processor, Inc. provides support and operations. TIA: importer is Inc. Sub-processor list: both appear as support providers. The DPA is the contract, so it governs |
| 5 | **Sub-processor change notice** | **Open (owner action)** | The DPA gives at least 30 days' notice of changes, with a 5-day objection window, to customers who subscribe to notifications; nothing is stated for those who do not |
| 6 | **Adoption by Widian Tech Limited** | Open | The agreements and this assessment must sit with the legal controller once incorporated |
| 7 | **Owner acceptance** | **Provisionally accepted** | Owner accepts the low residual-risk conclusion and both limits. Formal adoption by the controller is item 6; see section 7 |

**Smallest actions.** One email to Supabase's privacy contact (privacy@supabase.io, named in the DPA) asking for its current TIA covering Pte. Ltd. as importer and confirmation of which sub-processors can access database content; the owner may accept the residual risk without waiting for the reply. Subscribe to sub-processor change notices. Record the sign-off.

Not reopened, as instructed: Resend's DPA, safeguards and retention.

## 6. Conditions of the conclusion

1. Only the fields in section 2 are collected; no special-category data is solicited; no marketing or analytics use without a new assessment.
2. The Supabase project stays in London and the Resend account stays on its current DPA terms.
3. **Operational rule, accepted by the owner (provisional):** enquiry data must not be included in Supabase support requests, screenshots or shared logs. If support access to the project is needed, use test or redacted data where possible.
4. Reassess on: a new or changed provider or sub-processor; a change to what is collected or why; a DPF or data-bridge change; Supabase issuing a new TIA; or annually, whichever is first.

## 7. Sign-off

| | |
|---|---|
| Provisional owner acceptance | Given by the owner and recorded on 4 November 2026. Accepts the low residual-risk conclusion, including the two documented limits: the Singapore legal analysis relies on Supabase's description of Singapore law and practice, and Supabase's published TIA (14 March 2025, written for Supabase, Inc.) is older than its 2026 contract documents. Not a signed approval |
| Operational rule accepted | Enquiry data must not be included in Supabase support requests, screenshots or shared logs (section 6, condition 3) |
| Formal adoption by Widian Tech Limited | **Pending incorporation.** No signature, approver name or approval date is recorded, and none is to be added until the company exists and adopts this assessment |
| Next review due | On a trigger in section 6, or 12 months after formal adoption, whichever is first |

## Sources (accessed 2026-11-04)

- Supabase [Data Processing Addendum](https://supabase.com/legal/customer-resources/data-processing-addendum), Version 1, 1 August 2026 (importer, SCC modules, UK Addendum, sub-processor and location clauses).
- Supabase [Data Residency and Transfers FAQ](https://supabase.com/legal/privacy-resources/data-residency-and-transfers-faq), Version 1, 6 October 2026.
- Supabase [sub-processor list, 12 October 2026](https://supabase.com/legal/subprocessor-list/October-12-2026.pdf) and [Transfer Impact Assessment, 14 March 2025](https://supabase.com/downloads/docs/Supabase+TIA+250314.pdf).
- [Data Privacy Framework List](https://www.dataprivacyframework.gov/list), Resend profile.
- ICO guidance linked in section 4.
