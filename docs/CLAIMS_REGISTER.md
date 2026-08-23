# Claims Register

Every material public claim must have an owner and evidence before release.

| Claim area | Current public treatment | Evidence needed | Owner | Status |
|---|---|---|---|---|
| One structured building record | Core proposition; describe as product operating model | Product demonstration and data model review | Product | Verify |
| Multi-organisation roles and permissions | Describe only implemented roles and controls | Role matrix and tested access behaviour | Engineering/Product | Verify |
| Inspection-to-closure lifecycle | Use precise stage language | Workflow/state transition evidence | Product | Verify |
| Independent inspection | Define who may perform it and what it means | Product rules and SME review | Product/SME | Verify |
| Client verification and closure | Avoid implying statutory certification | State model, permissions and SME/legal review | Product/Legal | Verify |
| Time-stamped attribution and audit history | Claim only for implemented events | Demo, schema and test evidence | Engineering | Verify |
| Evidence hashing | Explain scope and limitation; never equate with universal legal immutability | Technical design and threat-model review | Engineering/Security | Verify before use |
| Immutable issued records | Do not claim until exact implementation and boundaries are confirmed | Architecture and test evidence | Engineering/Security | Withhold |
| Security, hosting and resilience | Use honest placeholders until approved facts exist | Supplier, configuration and policy evidence | Security/Legal | Withhold |
| Certifications/accreditations | Never imply or display without current proof | Certificate, scope and expiry | Legal/Security | Withhold |
| Customer outcomes | No invented metrics or testimonials | Permissioned case study and methodology | Marketing/Customer | Withhold |
| Compliance marketplace infrastructure | Strategic direction only if marketplace behaviour is not live | Roadmap approval and clear labelling | Founder/Product | Proposed future state |

## Claim states

- **Verified:** evidence reviewed, wording and scope approved.
- **Qualified:** true only with an explicit limitation beside the claim.
- **Proposed future state:** visibly labelled as planned or being developed.
- **Withhold:** not suitable for public use.

## Release rule

No copy moves from draft to production while its supporting claim is “Verify” or “Withhold”. Screenshots and interface demonstrations are claims too; test data and future controls must be labelled.

