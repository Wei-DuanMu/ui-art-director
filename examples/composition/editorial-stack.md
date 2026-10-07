# Composition Example: Editorial Stack

**Pattern:** 03 — hierarchy carried by typography, whitespace, dividers, and alignment. Zero cards.
**Product:** The weekly reliability report of Parcelwright, a logistics API. (Fictional.)

## The composition

```
──────────────────────────────────────────────────────────
RELIABILITY REPORT
W41 · Oct 05 – Oct 11 2026 · parcelwright api · v2.4
──────────────────────────────────────────────────────────

99.94%
availability · target 99.9% · 8 consecutive weeks in SLO

──────────────────────────────────────────────────────────

INCIDENTS

One partial outage, 22 min, eu-west region, Oct 07.
Root cause identified as misconfigured retry budget;
fix deployed Oct 08 02:14 UTC. No data loss.

──────────────────────────────────────────────────────────

LATENCY

p50   84ms   ▼ 6ms vs W40
p95  412ms   ▼ 18ms
p99  891ms   ▲ 12ms · watch item

──────────────────────────────────────────────────────────

NEXT

Retry-budget guardrails roll out to all regions W42.
Deprecation notice for /v1/track goes out Oct 15.
```

## Attention budget (rendered)

| Tier | Element | ~Budget |
|---|---|---|
| Primary | Availability numeral | ~38% |
| Secondary | Incidents | ~25% |
| Supporting | Latency, next | ~22% |
| Utility | Header metadata | ~10% |
| Decoration | — | ~0% |

## Why this grammar

- **The content is a narrative with one headline fact.** Editorial stack is the only grammar that treats a report like a document instead of a dashboard.
- The 99.94% numeral is display-size and isolated — an anchor built **purely from type scale and whitespace** (`typography-as-composition.md` move #1). No card, no fill, no border.
- Sections are hairline-separated (escalation ladder step 2: whitespace alone was tried, sections blurred at this density, so hairlines were added — and nothing louder).
- Rhythm: heading → content → deep gap, repeated — then **one deliberate break**: the availability numeral's scale. The break is the message.
- Latency figures use tabular numerals aligned on a shared edge; deltas carry ▲▼ semantics with units. Quiet mono metadata, real values only.

## Risks watched

- Monotony: three sections with identical internal rhythm — accepted here because the numeral's scale break carries the page; a fourth identical section would have needed a rhythm variation.
- No color anywhere. The stack survives the editorial test: hierarchy intact in grayscale.

## Transfer

Use the editorial stack when **the page is meant to be read, not operated**. If you're reaching for a card to "structure" a paragraph of content, stop — the stack is the structure.
