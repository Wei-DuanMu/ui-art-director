# Test A — General Mode workspace

**Purpose:** prove that General Mode composes a real professional tool workspace (an AI coding agent IDE) with product-appropriate register — no game elements leaking in.

**Page:** `sandbox/test-a-general-workspace.html`
**Final render:** `screenshots/test-a-v2.png` (v1 kept as the pre-fix baseline)

## The brief given to the skill

> Design the primary workspace of an AI coding agent IDE. The user runs multiple agent sessions against a repo, reviews diffs, and needs to know at a glance which session is running, which are waiting, and what the tool is doing right now.

## Composition plan (produced before any code)

| Question | Answer |
| --- | --- |
| Visual anchor | The editor buffer — specifically the changed diff hunk, not the file tree |
| Grammar | Dense Utility Rail + Dominant/Supporting split |
| Primary | Editor buffer, ~62% of visual weight |
| Secondary | Session rail (left, 200px) and agent panel (right, 340px) |
| Supporting | Tool-call status strip (bottom of editor) |
| Decoration | None. No glow, no gradient panel, no illustration. |

Attention budget: Primary 44% / Secondary 38% / Supporting 16% / Decoration 2%.

Deliberately **not** chosen: any signal color on more than one element, any HUD frame, any serial numbering in the nav (that is Arknights vocabulary and would be mode leakage).

## What the first render got wrong

`screenshots/test-a-v1.png` was structurally correct and compositionally weak. Two real defects, both found by looking at the render:

1. **Anchor region had a hole.** Only 9 lines of code were rendered, so the editor — the element carrying 44% of the attention budget — occupied the top third of its own column and left a large void beneath. The user would read the workspace as "mostly empty." This is a composition failure, not a styling bug: the anchor's *weight* was allocated in the layout but not delivered in content.
2. **Completed-task text was too faint.** The DONE row used a line-through plus a low-contrast grey, dropping below readable contrast. Secondary state should be quieter than active state, not illegible.

Gap rating at v1: **medium**. Fixing it required changing what the anchor region *contains*, not how it looks.

## Fixes applied

| Fix | Factor corrected |
| --- | --- |
| Extended the code buffer from 9 to 64 lines of real diff content | Anchor weight now matches its budget |
| Raised DONE-row contrast, removed `line-through` | Hierarchy separated by weight, not by legibility loss |

`screenshots/test-a-v2.png` — anchor column is visually full, the DONE row is readable and clearly inactive without being erased. **Accepted.**

## Mode isolation check

| Arknights trait | Present? |
| --- | --- |
| Serial label numbering (`01 /`) | No |
| Chamfered / notched geometry | No |
| Amber signal-only palette | No — teal accent, neutral grays |
| Hazard stripe / corner tick | No |
| Diagonal / hazard texture | No |

No mode leakage. Typography and geometry are product-typical; nothing signals a game register.

## Score (General rubric)

| Dimension | Pts | Evidence |
| --- | --- | --- |
| Visual hierarchy | 13/15 | Diff hunk is the brightest, largest element; state badges ordered by weight |
| Composition | 13/15 | Three-column dense rail grammar, anchor column genuinely dominant |
| Typography | 8/10 | Mono for code, sans for chrome, size steps consistent |
| Spatial relationships | 9/10 | Gutters consistent; rails read as separate planes |
| Layout quality | 8/10 | Fills viewport after fix; no dead zones |
| Color system | 8/10 | Single teal accent, one state-red, disciplined |
| Component consistency | 8/10 | Badge / row / panel share radius and padding |
| Information density | 4/5 | High but readable |
| Brand identity | 3/5 | Neutral, not yet distinctive |
| Interaction quality | 3/5 | Static render; hover/focus not verifiable here |
| Responsive design | 1/3 | Single fixed breakpoint tested only |
| Originality | 1/2 | Professional-standard rather than novel |
| **Total** | **79/100** | Good, but composition core 35/40 is strong |

**Honest limitation:** interaction and responsive scores are near-floor because this is a static screenshot. They are not evidence of a working UI — they are absence of evidence. Treat 79 as a composition benchmark, not a product-readiness score.