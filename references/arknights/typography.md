# Arknights Mode — Typography

Type carries this register. The goal: a technical publication that happens to be interactive. [INFERRED register reading; constructions are ORIGINAL.]

## Type roles

| Role | Use | Treatment [ORIGINAL] |
|---|---|---|
| display | page anchor, hero numerals | very large, tight leading, often a numeral + tiny qualifier |
| section header | structural divisions | medium size + serial-style index ("01 /", "SEC.02") |
| body | reading text | neutral grotesque; 45–70 char measure |
| label | field/control names | small, often uppercase Latin or tracked CJK |
| metadata | dates, IDs, states, units | mono, small, dim — but ≥AA contrast |
| numeric | all data | tabular figures, always |
| technical | codes, traces, coordinates | mono |

## The serial-label device [GENERALIZED → ORIGINAL construction]

The register's signature move: headers paired with index numbers, catalog tags, or classification codes — turning navigation into documentation.

```
01 / OPERATIONS
SEC.02 — RESOURCE LEDGER
LOG // 2026-10-10
```

Rules [ORIGINAL]:

- The index must be **real**: actual section number, real date, true count. A fake "SEC.07" on the second section is guardrail violation #2 (meaningless numbers).
- One serial style per product (pick `NN /`, `SEC.NN`, or `//` — not all three).
- Serials are metadata weight: dimmer and smaller than the header they tag.

## Numerals as anchors [shared with general layer]

Display-size tabular numerals + a quiet qualifier line. In this register the qualifier often carries units and a threshold reference:

```
4,182 MW
GRID LOAD · +3.1% VS FORECAST · LIMIT 4.5 GW
```

## CJK + Latin mixing [INFERRED trait, ORIGINAL rules]

The register mixes scripts constantly (CJK content + Latin technical labels). Rules:

- Latin labels may go uppercase/tracked for texture; **never track CJK** — it destroys readability.
- Match perceived size, not point size: CJK typically reads larger at the same pt — compensate down ~5–10% when paired inline.
- Mono Latin + CJK pairs need explicit baseline checking; CJK in a mono context falls back to a CJK font with its own metrics — test with real strings, not lorem.
- Keep one sans family with both scripts covered (or a designed pair). Do not let the OS pick the CJK fallback silently.

## Weight and case discipline

- 2–3 weights max per page (e.g., regular/medium/bold). The register is flat; weight steps must be visible at a glance.
- Bold is a state (active, critical, anchor), not a default for headers.
- All-caps is for short Latin labels only — never for sentences, never for CJK.

## Forbidden

- Decorative/display fonts for body or data (readability is the register's backbone)
- Random size variation "for richness" — sizes come from the scale
- Fake technical strings as texture [guardrail 2]
