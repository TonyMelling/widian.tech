# Circular Compliance - Product Truth and Platform Implications

**Status:** Cross-repository product brief; verify against the private Widian application before public use
**Purpose:** Prevent the marketing website from outrunning deployed product capability

## 1. Required chain

The complete Circular Compliance claim requires an evidence-preserving relationship across:

`Building -> Element -> Inspection -> Finding -> Remediation -> Contractor submission -> Independent verification -> Client verification -> Verified closure -> Future review`

## 2. Capability gates

### P0 - required before presenting the full chain as deployed

- Authoritative, versioned inspection outcome.
- Finding-to-remediation relationship with idempotent creation.
- Contractor identity and organisation attribution.
- Versioned or immutable contractor evidence within stated boundaries.
- Explicit separation of contractor completion, independent checking, client verification and closure.
- Failed-verification route back to remediation without destructive history changes.
- Atomic verification and closure transitions.
- Complete transition history for the relevant record.
- Consistent compliance rules between capture, QA and issued reports.
- Reliable resolution state across findings and work.

### P1 - required for a mature continuous Building Record

- Persistent asset identity across inspection cycles and provider changes.
- Controlled duplicate-reference reconciliation.
- Assignment and reassignment history.
- Due dates, escalation and reinspection scheduling.
- Contractor company, competence and insurance records where relevant.
- Assessment-basis and standards-version history.
- Building and element timelines.
- Document register and compliance-pack generation.
- Search across assets, actions, evidence and issued records.
- Supersession rules that preserve historic records.

### P2 - category expansion

- Fire-stopping and FRA workflows joined to the same Building Record.
- Cross-discipline building status.
- Client-configurable verification policies.
- Controlled public Building Record views.
- Portfolio intelligence and carefully governed assisted analysis.
- Approved external-provider and integration routes.

## 3. Current-copy rule

For each proposed statement, the Product Truth Reviewer must classify it:

- Current and verified
- Current with qualification
- Partial
- Planned
- Withhold

The website must show planned or conceptual functionality as such. A screenshot, animation or diagram is also a claim.

## 4. Specific high-risk claims

Do not publish without evidence and approval:

- defects `automatically` initiate remediation in every applicable case;
- the Golden Thread is `unbroken` across every record type;
- evidence is permanently immutable;
- Widian creates permanent audit readiness;
- all remediation is independently reinspected;
- AI identifies or determines compliance risk;
- Widian proves that a building is safe;
- Widian manages or accepts statutory responsibility for a building's compliance.

## 5. Physical QR/public record implications

Any Widian building plaque or public QR route requires:

- a stable, non-sensitive public building reference;
- explicit fields approved for public disclosure;
- no tenant, resident, inspector or contractor personal information;
- no unrestricted plans, vulnerabilities, defects or operational evidence;
- rate limiting and enumeration resistance;
- revocation or status controls without changing the permanent internal identity;
- wording that describes the digital record without implying certification.

Preferred plaque direction:

> This building's digital compliance record is powered by Widian.

The public-record feature and physical signage require separate application specifications and security review before production.

## 6. Marketing handoff

The marketing implementation may proceed with the narrative and qualified model before every P0 item is complete, provided:

- the page distinguishes current capability from direction;
- claims use the register;
- demonstrations are truthful and dated;
- the Product Truth Reviewer approves the wording;
- no concept art is presented as a live interface or customer deployment.
