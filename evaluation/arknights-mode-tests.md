# Test B — Arknights Mode workspace

**Purpose:** prove that Arknights Mode reaches a genuinely different *visual* register for the same underlying product, and that the difference comes from articulated rules rather than from decorative piling-on.

**Page:** `sandbox/test-b-arknights-workspace.html`
**Final render:** `screenshots/test-b-v3.png` (v1, v2 kept as the iteration trail)

## Same brief, different mode

Test B is the *same business requirement* as Test A: an AI coding agent workspace with review / runs / benchmark / ledger sections, an agent panel, a channel, a task queue, and a composer. Changing the mode must change how it looks, not whether it works.

## Source discipline

Per `references/arknights/reference-index.md`, the register is built from:

| Source | Tag | What was taken |
| --- | --- | --- |
| S1 homepage (ignoredone.space) | `[OBSERVED]` 2026-10-10 | Section taxonomy: serial-numbered major sections, matte ground, editorial density |
| S2 arknights_design subpage | `[INFERRED]` | Industrial-signal hypothesis only; page is dynamic and returned 502 locally — **not** treated as verified |
| S3 graphic-design video series | `[INFERRED]` | 12episode structure noted, **content not analyzed** — nothing lifted |
| S4 text-tutorial | `[OBSERVED]` | Confirmed to be a Photoshop effect tutorial, i.e. **not** a UI analysis source. Excluded from the visual register. |

Consequence: the geometry system (chamfer, chevron, hazard stripe, corner ticks) is `[ORIGINAL]` construction constrained by the matte-industrial hypothesis. It is **not** presented as copied from the source, and the reference index records this.

## Composition plan

| Question | Answer |
| --- | --- |
| Visual anchor | The agent status block — `prompt-eval-07`, RUNNING, step 12/20 |
| Grammar | Dense Utility Rail + Layered Information Plane |
| Primary | Editor diff buffer (~58%) |
| Secondary | Serial rail (01–04) + agent status |
| Supporting | Channel thread, task queue |
| Decoration | Corner ticks + hazard stripe on the loading strip only — ~3% |

Attention budget: Primary 41% / Secondary 31% / Supporting 25% / Decoration 3%.

## The seven refusals, checked

| Refusal | Held? |
| --- | --- |
| No HUD line-stuffing | Yes — frames only at section boundaries, never nested |
| No meaningless numbers | Yes — every figure is a real value (line numbers, step counts, token counts, diff counts) |
| No neon abuse | Yes — single amber signal, on status only, ≤5% of pixels |
| No decorative borders | Yes — one hairline border, no double/inset frames |
| No everything-is-a-panel | Yes — three flat planes, not six boxed cards |
| No screenshot copying | Yes — no source asset reused |
| Decorative complexity ≠ quality | Acknowledged — §7 of `arknights/README.md` names this as the mode's characteristic failure |

## Iteration record

| Ver | Defect found by looking at the render | Fix | Gap |
| --- | --- | --- | --- |
| v1 | Page exceeded the 900px viewport; footer pushed out of sight; corner-tick frame enclosed empty space | Added code lines to 61, compressed `sechead`/`viewport` padding, `overflow: hidden` on body | medium |
| v2 | Composer (the primary action) fell below the fold inside the rail | `.rail-sec.channel { flex: 1; overflow-y: auto; min-height: 0 }`, `.rail-sec { flex: none }`, composer `margin-top: auto` | low |
| v3 | — | Verified in `test-b-v3.png`: header, code region, channel, composer, and footer all within 900px; no overflow; no void | none |

`screenshots/test-b-v3.png` — **accepted.**

## Difference from Test A, stated precisely

Same information architecture, same components, same density. What changed:

| Dimension | General | Arknights |
| --- | --- | --- |
| Section identity | Named nav items | Serial labels `01–04` |
| Corner treatment | Square, 2px radius | Chamfered notches + corner ticks |
| Accent discipline | Teal, used on interactive elements | Amber, used on *status* only |
| Stripes | None | Hazard stripe, loading only |
| Metadata | Minimal footer | Footer metadata strip with build / test / CPU / operator |

That is five articulated decisions, each traceable to a rule file. Not one of them is "add more game-looking stuff."

## Score (General rubric, 100)

| Dimension | Pts | Evidence |
| --- | --- | --- |
| Visual hierarchy | 12/15 | RUNNING agent block clearly dominant; diff is anchor-adjacent |
| Composition | 12/15 | Dense rail grammar holds; serial section system works |
| Typography | 7/10 | Serial labels and mono readouts work; some CJK/Latin baseline drift in the channel thread |
| Spatial relationships | 8/10 | Rail planes separate cleanly after the v2 flex fix |
| Layout quality | 8/10 | Fits 900px exactly, nothing clipped |
| Color system | 9/10 | Matte neutrals + single signal amber, correctly rationed |
| Component consistency | 8/10 | Chamfer/flat-panel/tick system applied consistently |
| Information density | 5/5 | Genuinely dense, still readable — this is the mode's strength |
| Brand identity | 4/5 | Distinctive and specific to the register |
| Interaction quality | 3/5 | Static render; `prefers-reduced-motion` path written but unverified in-browser |
| Responsive design | 1/3 | Fixed-viewport design |
| Originality | 2/2 | The register is specific and not interchangeable with General |
| **Total** | **79/100** | Composition core 32/40 |

## Honest limitations

- Total matching Test A's 79 is coincidence, not equivalence. B wins Brand and Originality; A wins Hierarchy and Typography. The rubric captures that; the total does not.
- The reference base is one verified page plus three unverified sources. Arknights Mode's confidence is **lower** than General Mode's, and this document must not be read as validation of the source material — only of the rules derived from it.
- S2 and S3 remain unverified. `reference-index.md` carries them as an open verification queue.