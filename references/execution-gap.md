# Execution Gap

The execution gap is the distance between **what the design intended** and **what the rendered page actually does**. V0.1 proved that correct tokens and components do not close this gap — a page can pass every system check and still miss its intent.

> The diagnostic question this file answers: *"The direction was right — why didn't the page turn out that way?"*

## The gap model

```
Design Intent
      ↓
Implementation
      ↓
Rendered Output
      ↓
Compare against intent
      ↓
Execution Gap: none / low / medium / high
```

The gap is measured on **outcome properties**, not code properties:

- intended reading order vs actual squint-test order
- intended attention budget vs rendered weight distribution
- intended density vs rendered density
- intended rhythm vs rendered rhythm

## Common gap signatures

| Intent | Implementation | Gap | Root cause pattern |
|---|---|---|---|
| Editorial hierarchy | Everything same size | **High** | Type scale defined but not applied; levels collapsed to "the default size" |
| Technical density | Too much whitespace | **Medium** | Sparse defaults inherited; density was never assigned per region |
| Single anchor | 5 equal-weight zones | **High** | Composition step skipped; content placed in source order |
| Restrained accent | Accent everywhere | **Medium** | Accent applied per-component, never audited per-viewport |
| Calm utility rail | Rail out-shouts content | **Medium** | Icons/labels given content-level weight; no weight audit |
| Open field + cluster | Field filled with "balance" elements | **High** | Fear of emptiness; decoration budget exceeded |

Each row's root cause is a *process* failure, not a taste failure: a step in the workflow was skipped or never checked against the render.

## Detecting the gap

Run this comparison after any implementation (code, wireframe, or screenshot):

1. **Restate the intent** — the Composition Plan's anchor, budget, and reading order. (No plan? State it now; a gap measured against nothing is just an opinion.)
2. **Squint test the render** — blur until only weight remains. Write down what reads 1st, 2nd, 3rd.
3. **Compare orders.** Any rank inversion between intended and actual order is a gap.
4. **Compare budgets.** Estimate rendered attention by region (area × contrast × position). Decoration >5% or utility >15% is a budget breach.
5. **Grade:** none / low (one minor inversion) / medium (budget breach or one major inversion) / high (anchor lost or unreadable hierarchy).

## Closing the gap

Gaps close by **factor adjustment**, not redesign:

- Anchor lost → add weight to the anchor (scale, isolation) *and* remove weight from competitors (containers, contrast, accent). Both moves, not one.
- Reading order inverted → fix position and scale first; color last.
- Budget breach → remove factors from the over-budget region until it fits; never compensate by inflating the anchor into a weight arms race.
- Density gap → adjust type size/leading and spacing scale per region; don't add or remove content.

Re-run the detection after revising. One pass rarely closes a high gap; two usually do.

## The self-critique loop

After generating or revising UI, always:

```
Generate
   ↓
Render / Screenshot
   ↓
Self-review (squint test + budget estimate)
   ↓
Compare with stated design intent
   ↓
Grade the execution gap
   ↓
Revise the factors, not the direction
   ↓
(repeat until gap is none/low)
```

Rules:

- **Never self-review against the code** — review against the *render*. The gap lives in what the user sees, not in what the tokens say.
- **Never skip the comparison even when the code "looks right."** The entire V0.1 failure class was correct code producing flat pages.
- If a real screenshot isn't available, render mentally from the layout structure — but say so, and mark the grade provisional.
- When reporting to the user, show the gap verdict with the intended-vs-actual reading order. One honest gap report teaches more than ten compliments.
