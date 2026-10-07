# Before → After: Weak Hierarchy

**The failure:** everything is "fine" — correct tokens, consistent components — and nothing leads.

## Before

```
────────────────────────────────────────────────
DASHBOARD
────────────────────────────────────────────────
Revenue        $128,400        +12.4%
Orders         1,204           +8.2%
Refunds        23              -2.1%
Uptime         99.9%           +0.0%
────────────────────────────────────────────────
chart: revenue last 30 days
chart: orders last 30 days
────────────────────────────────────────────────
```

Every metric the same size. Every row the same weight. Two charts the same size. Tokens: perfect. Hierarchy: none.

## Diagnosis

- **Type audit:** one size, one weight across all data — levels defined in the type system but never *applied* (`execution-gap.md`: "Editorial hierarchy intent / everything same size implementation — gap: high").
- **Focal check:** no anchor; the eye enters at "DASHBOARD" (a label, not information) and stalls.
- **Budget:** four metrics ≈15% each, charts ≈20% each. The charts outweigh the numbers they explain.
- **Root cause:** typography treated as tokens, not as composition. No one assigned a display role.

## Composition change

Rank first: revenue is the anchor (the metric the business checks first); orders is secondary; refunds/uptime are context; one chart survives (revenue trend, bonded to the anchor); the orders chart becomes a sparkline.

## After

```
────────────────────────────────────────────────
REVENUE · LAST 30 DAYS                    OCT 2026

$128,400
▲ +12.4% vs prev · threshold $100k exceeded day 18
▁▂▃▅▄▆▅▇█

────────────────────────────────────────────────
orders   1,204  ▲ +8.2%   ▁▂▃▅▆
refunds      23  ▼ −2.1%  within tolerance
uptime    99.9%            SLO 99.9% · met
────────────────────────────────────────────────
```

## Why it works

- **The display role was assigned, not just defined.** $128,400 at ~3× body size + isolation is now the page's first read — type as anchor, zero containers (`typography-as-composition.md` move #1).
- Secondary and context rows are *compressed*, not just smaller: one-line-per-metric with tabular figures and inline sparklines — density increased while weight decreased.
- The deleted chart is the real lesson: it consumed 20% of the budget to answer a question ("which way are orders trending?") that a 40px sparkline now answers for ~3%.

**Exercise:** take any metrics page. Assign exactly one metric the display role. Demote every other metric one tier. Delete any chart whose question a sparkline can answer.
