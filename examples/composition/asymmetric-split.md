# Composition Example: Asymmetric Split

**Pattern:** 02 — unequal columns with distinct roles (8:4).
**Product:** Ledgerline, an invoicing tool's invoice editor. (Fictional.)

## The composition

```
──────────────────────────────────────────────────────────────────
INVOICE #2417 · DRAFT                              save ⌘S · → send
──────────────────────────────────────────────────────────────────

┌──────────────────────────────────────┬─────────────────────────┐
│                                      │  STATUS                 │
│  LINE ITEMS                          │  draft · not sent       │
│  ──────────────────────────────      │                         │
│  design retainer        $4,800       │  CLIENT                 │
│  implementation (12h)   $1,920       │  Corvidae Systems       │
│  hosting, Q3              $360       │  NET 30 · due Nov 7     │
│  ──────────────────────────────      │                         │
│  subtotal               $7,080       │  HISTORY                │
│  tax 0%                      —       │  Oct 06  created        │
│  total                  $7,080       │  Oct 07  edited         │
│                                      │                         │
│  [+ add item]                        │  NOTES · internal       │
│                                      │  renewal — match Q2     │
│                                      │  pricing                │
└──────────────────────────────────────┴─────────────────────────┘
```

## Attention budget (rendered)

| Tier | Element | ~Budget |
|---|---|---|
| Primary | Line items + totals | ~42% |
| Secondary | Status / client block | ~24% |
| Supporting | History, notes | ~16% |
| Utility | Header actions | ~12% |
| Decoration | — | ~0% |

## Why this grammar

- **The editor's job happens in the left column**; everything on the right is context for decisions made on the left. An 8:4 split encodes that relationship in the geometry itself — no border or heading could state it as clearly.
- The 8:4 ratio is *derived*, not arbitrary: line items need measure for 3 columns of text + amounts; the rail needs exactly one label-value stack. Content shaped the ratio, not the other way round.
- Right-rail blocks are separated by **whitespace only** (see `spatial-relationships.md`: whitespace-first escalation). No cards: the split already provides the boundary.
- Totals use tabular figures right-aligned on a shared edge — alignment as relationship.

## Risks watched

- The "send" action lives in the header at utility weight; making it a giant accent button in the rail would have flipped the hierarchy (action ≠ most important information).
- History is readable but quiet; it passed the weight audit at ~10% by dropping to small size and reduced contrast.

## Transfer

Use the asymmetric split when **one side acts and the other informs**. Choose the ratio from the content's measure, and never call 50/50 asymmetric — a tie is not a split.
