# Composition Example: Dominant + Supporting

**Pattern:** 01 — one large primary region + subordinate regions.
**Product:** Halcyon Grid, a regional power-grid monitor. (Fictional.)

## The composition

```
──────────────────────────────────────────────────────────────────
HALCYON GRID · REGION NORTH-3                   2026-10-08 04:12 UTC
──────────────────────────────────────────────────────────────────

┌─────────────────────────────────────────┬──────────────────────┐
│                                         │  LOAD SHED QUEUE     │
│   GRID LOAD · NOW                       │  ──────────────────  │
│                                         │  04:11  feeder 7     │
│        4,182 MW                         │  04:03  feeder 2     │
│                                         │  03:58  feeder 11    │
│   ▲ +3.1% vs forecast · threshold 4.5GW │                      │
│                                         ├──────────────────────┤
│   ▁▂▃▅▆▅▇▆█  trailing 24h               │  GENERATION MIX      │
│                                         │  hydro 61% ▇▇▇▇▇▇    │
│                                         │  wind  24% ▇▇▍       │
│                                         │  gas   15% ▇▌        │
└─────────────────────────────────────────┴──────────────────────┘
```

## Attention budget (rendered)

| Tier | Element | ~Budget |
|---|---|---|
| Primary | Grid-load numeral + trend | ~40% |
| Secondary | Load shed queue | ~22% |
| Supporting | Generation mix | ~20% |
| Utility | Header metadata | ~10% |
| Decoration | — | ~0% |

## Why this grammar

- **The page exists to answer one question** — "is the grid inside capacity right now?" One question, one anchor: pattern 01.
- The anchor is carried by **scale + isolation + whitespace**, not by a card stack: display numeral ~3× body, surrounded by the largest empty margins on the page.
- The right column is *visibly* subordinate: smaller type, reduced contrast, tighter density. Its two blocks stack by urgency (actionable queue above descriptive mix), not by size.
- **Reading order is designable and stated:** load → queue → mix → metadata. The squint test returns exactly that order.

## Risks watched

- The sparkline could have crept into a chart block of its own — it's kept inline under the numeral, weight-bonded to the anchor.
- The queue's timestamps are real metadata (mono role), not decoration; a fake "SYS-04" tag was removed in review.

## Transfer

Use this pattern whenever the viewport has **one answer above all others**. The discipline is not making the anchor big — it's keeping everything else visibly smaller.
