# Test D — Execution quality (the real edit loop)

**Purpose:** the v0.2 diagnosis was "the skeleton is right, the result is mediocre" — Design Reasoning strong, Design Execution weak. This test measures whether the skill can actually *change* a rendered page, and whether it can tell when its own result is still wrong.

**Pages:** `sandbox/test-d-before.html` → `sandbox/test-d-after.html`
**Renders:** `screenshots/test-d-before.png`, `test-d-after.png`, `test-d-after-v2.png`, `test-d-after-v3.png`

This is the only test in v0.3.0 with a genuine multi-round iteration trail, including two fixes that were wrong.

## The baseline is deliberately bad

`test-d-before.png` is a competent-looking but compositionally flat dashboard, the exact failure mode v0.2 was criticized for:

| Defect | Evidence in render |
| --- | --- |
| Gradient banner as the loudest element | Decorative, carries no information, sits above the real numbers |
| Six equal-weight cards | Every metric looks equally urgent; the eye cannot rank anything |
| Emoji as status iconography | Reads as placeholder, not product |
| Three decorative charts | Charting decoration — no question is being answered |
| No dominant element | Nothing on the page is more important than anything else |

Composition core for the before state: **VH 7 + Composition 7 + Spatial 6 = 20/40** → verdict `system-correct, composition-flat`.

## What changed, and why

| Decision | Reason | Where it shows |
| --- | --- | --- |
| One primary anchor | An operations screen needs one answer to"is today OK?" | `1,204` at 64px mono |
| Sparkline under the anchor | Gives the number a direction without competing with it | 14 bars, sub-10% contrast |
| Alerts as an entity queue | Alerts are work items with an ID and a time, not a stat | Right rail, 4 rows, real IDs |
| Secondary metrics demoted | On-demand numbers, not the headline | 4 small metrics below |
| Metadata footer strip | Operational honesty — build, refresh cadence, region | Bottom strip |
| Decoration removed | Gradient, emoji, decorative charts all deleted | — |

Attention budget: Primary 38% / Secondary 27% / Supporting 29% / Decoration 0%.

## The iteration trail — including two wrong fixes

This is the part that matters. The first two attempts did not work, and both were caught only by looking at the render.

| Ver | What the render showed | Action | Gap after |
| --- | --- | --- | --- |
| v1 | Composed correctly, but a large void between the sparkline and the secondary metric band — the bottom third of the left column was empty | Added `body { display:flex; flex-direction:column }` + `main { flex:1 }` | **low** — void moved, not fixed |
| v2 | Void gone, but the left column still read as bottom-heavy-empty; sparkline sat in a short band with dead space beneath | Made `.anchor` a flex column, sparkline `flex:1`, added an axis label row | **regression** — see below |
| v3a | **Sparkline now stretched to full column height and became the loudest thing on the page.** It was competing with `1,204` for primary attention — a textbook violation of the attention budget it was supposed to serve. | Tried `max-height: 132px` | **worse** — the void returned |
| v3b | Still wrong | Kept `flex: 1` but cut the bar opacity to `rgba(255,255,255,.07)` and the highlight bar to `opacity: .5` | **none** — accepted |

`screenshots/test-d-after-v3.png` — **accepted.**

## What the dead ends teach

Both wrong fixes came from the same error: **treating a symptom as a factor.**

- v2 treated the void as a height problem when it was a *weight distribution* problem — the left column had not been given enough to say.
- v3a treated the over-loud sparkline as a size problem when it was a *contrast* problem — the bars were too heavy for the role they played.

The correct move in both cases was to ask what job the element has, then size its weight to that job. This is precisely the failure mode `references/general/execution-gap.md` warns about, and it is worth noting that the warning existed in v0.2 and was still violated in practice. **A documented rule that gets violated in the first honest attempt is not yet an internalized rule** — that finding belongs in the changelog, not buried here.

## Execution gap summary

| Stage | Gap | Note |
| --- | --- | --- |
| Baseline→v1 | medium | Structural void, correctly diagnosed |
| v1→v2 | low | Partial fix; residual void |
| v2→v3a | high (regression) | Fix overshot into attention-budget violation |
| v3a→v3b | none | Factor corrected |

Four rounds to close. The loop worked — but it needed the render, twice, to catch what reasoning alone had gotten wrong both times.

## Score (General rubric)

| Dimension | Before | After | Movement |
| --- | --- | --- | --- |
| Visual hierarchy | 7/15 | 14/15 | Anchor established; decoration demoted |
| Composition | 7/15 | 13/15 | Anchor + entity rail + supporting band |
| Typography | 7/10 | 9/10 | Mono for figures, one clear size ladder |
| Spatial relationships | 6/10 | 9/10 | Planes separated, gutters consistent |
| Layout quality | 6/10 | 9/10 | Viewport filled after v3b |
| Color system | 6/10 | 9/10 | One accent, disciplined, alert-red rationed |
| Component consistency | 5/10 | 8/10 | Shared radius/padding/row pattern |
| Information density | 3/5 | 4/5 | Dense but ranked |
| Brand identity | 2/5 | 4/5 | Operational identity, not decorative |
| Interaction quality | 2/5 | 3/5 | Static render — unverified |
| Responsive design | 1/3 | 1/3 | Single breakpoint |
| Originality | 1/2 | 1/2 | Honest, not distinctive |
| **Total** | **51/100** | **75/100** | **+24** |

Composition core: **20/40 → 36/40**, clearing the `composition-flat` verdict.

## Honest limitations

- The before page is a strawman written by the same author as the skill, testing the skill's own diagnosis. It demonstrates that the rubric detects a known failure; it does not prove the rubric discriminates among real-world dashboards.
- Interaction and responsive remain unverified throughout. No JavaScript, no real data, no real users.
- Four rounds is not fast. A skilled operator working with these rules would likely converge in one or two; the count here reflects the skill being followed cold.