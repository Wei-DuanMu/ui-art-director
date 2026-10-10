# Arknights Mode — Page Patterns

Page-level applications of the register. Each pattern maps the shared composition grammar (`references/general/composition-grammar.md`) onto register conventions. All constructions [ORIGINAL]; fictional products.

## P1 — Operations Console (pattern 01: Dominant + Supporting)

For monitoring/ops tools. Anchor = one live readout or viewport; right rail = queues and status.

```
────────────────────────────────────────────────────────────
◧ FIELDOPS · NORTH GATE TERMINAL           SYNC 19:22 UTC ●
────────────────────────────────────────────────────────────
01 / CURRENT OPERATION

┌──────────────────────────────────┬───────────────────────┐
│  GRID LOAD                       │ 02 / ALERT QUEUE      │
│                                  │ ▲ VH-2217 coolant 108°│
│  4,182 MW                        │ ▲ VH-0843 route dev.  │
│  ▲ +3.1% · LIMIT 4.5GW           │   VH-1190 late +45m   │
│                                  ├───────────────────────┤
│  ▁▂▃▅▆▅▇▆█ 24H                   │ 03 / SUPPLY           │
│                                  │ hydro 61% ▇▇▇▇▇▇      │
│                                  │ wind  24% ▇▇▍         │
└──────────────────────────────────┴───────────────────────┘
// RELAY 07 · OPERATOR K. · v2.4.1
```

Notes: serial sections, hairline separation, one amber-tier accent on the alert markers only, readout pattern for the anchor, metadata strip at the foot.

## P2 — Dossier / Detail (pattern 03: Editorial Stack)

For entity pages (asset, document, character-sheet-style data — original content only).

```
────────────────────────────────────────────
ASSET FILE · RF-2217              CLASS B ●
────────────────────────────────────────────

COOLANT ARRAY RF-2217
field unit · north gate · commissioned 2025-03

        108.2°C
        OPERATING TEMP · LIMIT 105°C · EXCEEDED

────────────────────────────────────────────
01 / SERVICE LOG
2026-10-08  threshold breach, 22 min
2026-09-30  routine inspection — pass

02 / SPECIFICATION
flow 42 L/m · pressure 6.1 bar · mass 210 kg
```

Notes: the "character card" instinct must become an *asset file*: real data, serial sections, zero illustration dependence. Display numeral as anchor.

## P3 — Workbench (pattern 02 + 05: Asymmetric Split + Utility Rail)

For tools with a canvas/editor + actions.

```
────┬────────────────────────────────┬──────────────────
 ▽  │ 01 / DOCUMENT                  │ 02 / PROPERTIES
 f  │                                │ layer: header
 ▦  │   (canvas / editor / code      │ tracking: +20
 ⏸  │    occupies the wide field)    │ ──────────────
    │                                │ serial: 01
────┴────────────────────────────────┴──────────────────
// autosaved 19:24 · 2 pending changes
```

Notes: 44–56px rail, icon-only, quiet; properties panel at supporting weight; canvas owns the anchor.

## P4 — Status / Gate (pattern 06: Open Field + Data Cluster)

For status pages and pre-flight checks.

```
NORTH GATE RELAY                                     v1.8

              ALL SYSTEMS NOMINAL

              214 checks · 0 failing
              last incident 6d ago

              ── p99 4m12s ──
```

Notes: the register's restraint peak. One cluster, one alignment anchor, metadata only if true. A hazard-stripe thin band at the very top is the one allowed frame device — and only on degraded states.

## Pattern selection

Same rules as the shared grammar: let the information choose the pattern. The register changes the *surface* (flat panels, serials, geometry), never the *structure* (anchor, budget, focal order). If you find yourself adding geometric marks to make a weak composition feel "on-register," stop — fix the composition first, the register is a language for saying things, not a fig leaf.
