# Arknights Mode — Information Hierarchy

How the register organizes dense information without losing legibility. [INFERRED trait; rules ORIGINAL. Shared composition rules from `references/general/` apply unchanged — this file adds register-specific practice.]

## The three-tier page

Nearly every page in this register resolves to:

```
TIER 1 — anchor: display numeral / primary task / live viewport
         + one qualifier line (units, threshold, delta)
TIER 2 — structured data: tables, queues, grouped lists
         serial-labeled sections
TIER 3 — metadata strip: timestamps, IDs, version, operator
         mono, dim, single row where possible
```

Tier 1 owns ~40% of attention, tier 2 ~40%, tier 3 ~10%, utility ~10%, decoration ~0%. (Shared attention budget applies; this is the register's typical distribution.)

## Serial-section system [ORIGINAL]

Pages are documents. Structure them with numbered sections:

```
01 / CURRENT OPERATION        ← tier 1 anchor region
02 / SQUAD STATUS             ← tier 2 data
03 / SUPPLY LEDGER            ← tier 2 data
// SYNC 2026-10-10 19:22 UTC   ← tier 3 metadata
```

- Numbers are sequential and real. Never skip or fake them.
- Sections separate with full-width hairlines, not cards.
- 2–5 sections per viewport; more means the page is two pages.

## Density strategy

The register tolerates — expects — high density in tier 2. Keep it legible:

- tight row rhythm (8–12px), tabular figures, hairline separators
- quiet headers (small caps, dim) so data outranks labels
- progressive disclosure for rare detail (expand row / drawer), not tooltips-on-everything
- whitespace concentrated around tier 1 (breathing room where the decision happens), density concentrated in tier 2 (where scanning happens)

## Metadata as texture, honestly

The register's "rich" feel comes largely from real metadata: timestamps, deltas, thresholds, IDs, operator names, sync states. This is allowed — encouraged — under three constraints:

1. **Every value is true** (guardrail 2). No invented coordinates.
2. **One metadata style** (mono, dim, small) everywhere.
3. **Metadata never outranks content** — if a footer strip draws the eye before the tier-2 data, dim it.

## Readout pattern [ORIGINAL]

For instrument-style figures, use the stacked readout:

```
LABEL · UNIT                    ← tiny, dim, caps or tracked CJK
4,182                           ← display numeral, tabular
▲ +3.1% vs forecast · lim 4.5GW ← qualifier, small
```

One readout = one fact. A row of 3+ readouts needs size differentiation (one primary, rest scaled down ~60%) or it becomes an equal-weight zone (shared focal-point rule 3).

## What changes vs General Mode

- Section serials are expected here, optional in General.
- Full-width hairlines replace most inter-section whitespace.
- Metadata volume is higher — but the honesty constraints are identical.
- Anchor treatments may add geometric markers (chamfer/ticks); General Mode anchors are typographic first.
