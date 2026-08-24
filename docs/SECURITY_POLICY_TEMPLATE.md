# Widian Information Security Policy — template

**Document owner:** `[Security owner]`  
**Executive approver:** `[Approver]`  
**Version:** `[0.1]`  
**Effective date:** `[DD Month YYYY]`  
**Next review:** `[DD Month YYYY]`  
**Classification:** Internal  
**Status:** Template — not an approved or implemented security claim

## 1. Purpose and scope

This policy defines how Widian manages information-security risk and protects the confidentiality, integrity and availability of information and systems. It applies to workers, authorised third parties, the public website, Widian application, corporate services, all environments, personal data, customer information, code, credentials, logs and evidence.

Record exclusions and rationale: `[exclusions]`.

## 2. Principles

Widian will apply least privilege, proportionate layered controls, data minimisation and evidence-based assurance. Marketing and operational product data remain separated unless a documented decision approves a connection. Exceptions must be recorded, risk assessed, independently approved and time limited.

## 3. Roles

| Role | Named owner | Responsibility |
|---|---|---|
| Executive owner | `[Name]` | Risk appetite, resources and material risk acceptance |
| Security owner | `[Name]` | Programme, risk register, incidents and reporting |
| Privacy owner | `[Name]` | Personal-data compliance, rights and breach assessment |
| System owner | `[Per system]` | Data classification, access and residual risk |
| Engineering owner | `[Name]` | Secure delivery, patching, logging and recovery |

No person may approve their own material exception.

## 4. Risk, assets and data

- Maintain risk, system, supplier, data-store and information-asset registers.
- Assess material architectural, supplier and data-flow changes before release.
- Classify information as `[Public / Internal / Confidential / Restricted]` with handling rules.
- Define purposes, lawful bases, retention, deletion and backup-expiry rules.
- Encrypt sensitive information in transit and at rest using provider-supported controls.
- Keep production personal data out of development tools unless explicitly approved.
- Test rights handling, restoration and deletion, including processors and backups.

**Evidence:** registers, data map, change assessments, approvals, retention schedule and test results.

## 5. Identity and access

- Use individual accounts, least privilege and multi-factor authentication where supported.
- Require owner approval and review privileged access every `[quarter]`.
- Remove access promptly on role change or departure.
- Store service credentials in approved secret stores; never commit secrets to source control.
- Rotate credentials after suspected exposure and according to risk-based schedules.

**Evidence:** access reviews, joiner/mover/leaver records, MFA reports and secret scans.

## 6. Secure engineering and change

- Use peer review and protected branches for production changes.
- Run configured formatting, lint, type, test, build and relevant browser/security gates.
- Validate untrusted input and use safe error handling, rate controls and abuse protections.
- Inventory dependencies and remediate vulnerabilities against approved severity targets.
- Separate development, staging/preview and production environments and credentials.
- Assess security and privacy before adding a dependency, integration or processor.
- Maintain tested rollback steps for material releases.

**Evidence:** pull requests, CI, dependency reports and release records.

## 7. Infrastructure and endpoints

- Use supported and hardened managed services proportionate to risk.
- Restrict production data and administrative interfaces.
- Apply security updates within severity-based targets.
- Protect DNS, domains and cloud administration with named owners, MFA and recovery controls.
- Use encryption, screen locks and managed protection on devices with Widian access.

## 8. Logging, monitoring and vulnerabilities

- Log proportionate authentication, privilege, data-access, change and administrative events.
- Exclude raw form bodies, secrets and unnecessary personal data from logs.
- Protect logs from alteration, restrict access and define retention.
- Assign alert owners, response targets and escalation routes; test them at `[frequency]`.
- Maintain a reporting route and triage vulnerabilities by exploitability, exposure and impact.
- Remediation targets: Critical `[x]`; High `[x]`; Medium `[x]`; Low `[risk-based]`.
- Do not claim independent testing or certification before completion and approval.

## 9. Suppliers and cloud services

- Perform due diligence before a supplier processes confidential or personal data.
- Record role, data location, subprocessors, controls, deletion and incident duties.
- Put appropriate contracts and transfer safeguards in place before processing.
- Review critical suppliers annually and on material change; maintain exit plans.

**Direction to verify:** Vercel in an EU AWS region and isolated Supabase marketing storage. Record exact regions, contracts, subprocessors and transfer mechanisms before approval.

## 10. Incidents, breaches and recovery

- Provide a monitored route: `[security contact]`.
- Preserve evidence and record decisions from detection through closure.
- Classify severity, appoint a lead and involve the privacy owner where personal data may be affected.
- Assess notification duties and deadlines using the incident and breach procedures.
- Complete a blameless review and track corrective actions.
- Define recovery-time and recovery-point objectives; test backups at `[frequency]`.
- Document dependencies, provider outage paths, workarounds and communications ownership.
- Keep normal marketing pages independent of the operational application and database.

## 11. Awareness, exceptions and review

- Provide security/privacy induction before granting material access and annual refreshers.
- Require prompt reporting of phishing, credential exposure, lost devices and disclosure.
- Every exception records the requirement, justification, affected assets, risk, compensating controls, owner, independent approver and expiry.
- Review this policy at least annually and after material incidents, regulatory change or architectural change.
- Public claims require separate evidence review.

## 12. Supporting documents

- Data classification and asset-management standard
- Access-control and joiner/mover/leaver procedure
- Secure-development and vulnerability-management standards
- Incident-response and personal-data-breach plan
- Backup/restoration and continuity runbook
- Supplier-security and transfer-assessment procedure
- Retention and deletion schedule
- Acceptable-use and remote-working policy
- Risk and exception registers

## Approval record

| Version | Date | Author | Reviewer(s) | Approver | Summary |
|---|---|---|---|---|---|
| `[0.1]` | `[date]` | `[name]` | `[roles]` | `[name]` | Initial draft |
