# Reference method — how this project treats sources

A skill that gives design advice must be honest about where that advice came from. v0.3.0 introduces a four-level source discipline. It applies to every reference file, every rule, and every claim about an external aesthetic.

## The four tags

| Tag | Meaning | Standard |
| --- | --- | --- |
| `[OBSERVED]` | I opened the source and saw it | Date recorded, what was visible recorded |
| `[GENERALIZED]` | Derived from observation, stated as a transferable rule | The rule, not the source's particulars |
| `[INFERRED]` | Plausible from indirect evidence; not directly confirmed | Must name what evidence exists and what does not |
| `[ORIGINAL]` | Constructed by this project | Constraint stated, no borrowed authority claimed |

A rule with no tag is a defect. If you add a rule without one, it is either forgotten work or borrowed authority — both need fixing.

## Why this exists

v0.2.0 shipped Arknights-flavored rules with no visible provenance. The failure mode is concrete and serious: an AI asked to direct an Arknights-style interface, having never seen the source, produces confident rules and presents invented detail as observation. The user cannot tell the difference. That is precisely the dishonesty this skill is supposed to fight in UI work, reproduced inside the skill itself.

## The evidence ledger

`references/arknights/reference-index.md` is the ledger. It records, per source:

- identifier and URL
- verification status with date
- what was actually seen
- what was taken and at which tag
- what remains unverified

Current ledger state as of 2026-10-10:

| Source | Status | Consequence |
| --- | --- | --- |
| S1 homepage (ignoredone.space) | ✅ Verified | May support `[OBSERVED]` / `[GENERALIZED]` |
| S2 arknights_design subpage | ⚠️ Partial — dynamic content, returned 502 locally | `[INFERRED]` only |
| S3 graphic-design video series | ⚠️ Links identified, content not analyzed | Nothing may be attributed to it |
| S4 text-tutorial | ✅ Verified — but it is a Photoshop tutorial, not UI analysis | **Excluded** from the visual register |

S4 is the instructive one: it was reachable and looked relevant, and reading it revealed it was about something else entirely. Verification is not just about reachability — a source that answers a different question must be dropped, not stretched.

## Rules of use

1. **Never claim to have analyzed a page you could not load.** No rendering, no analysis. Say the page was unavailable.
2. **Never let reachability substitute for relevance.** Confirm the source answers the question before extracting from it.
3. **Abstraction is required, not optional.** Even from verified sources, rules must be stated as transferable principles. Copying composition and calling it art direction is not acceptable.
4. **Keep the verification queue.** Unverified sources stay listed as unverified. Deleting them because they are inconvenient is how a ledger becomes fiction.
5. **Lower the confidence bar for thinner sources.** Where the ledger is thin, say so in the output. A user should know whether they are getting rules from verified observation or from inference.

## For contributors

Adding a rule from an external source? Tag it, and add the source to the ledger with its verification status. If you cannot verify it, `[INFERRED]` with the evidence named is acceptable and honest. Untagged generality is not — it launders a guess into a rule of thumb, and the next reader will trust it.