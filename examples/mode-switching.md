# Mode switching — worked example

Shows that switching modes changes the **visual register only**. Same information architecture, same capabilities, same data. Every mode-specific choice below is traceable to a rule file; none of it is decorative piling-on.

---

## Round 1 — General mode

**Request:** a review console for an AI coding agent. Three sections, an editor with diffs, an agent panel, a task queue, a composer.

**Mode resolution:** no project config, no task instruction → default `general`.

**What General produced** (`evaluation/sandbox/test-a-general-workspace.html`, render `evaluation/screenshots/test-a-v2.png`):

| Decision | Reasoning |
| --- | --- |
| Teal accent on interactive elements | Product-appropriate; teal carries no genre signal |
| Flat 2px radius throughout | Nothing in an IDE implies a notched or chamfered language |
| Named nav items, no numbering | Serial labels are Arknights vocabulary — importing them here would be leakage |
| Diff hunk as visual anchor | What the user came to see |
| No texture, no stripes, no corner marks | Decoration budget 2% |

**Result:** correct, readable, entirely unremarkable. That is the point of General mode.

---

## Round 2 — same request, Arknights mode

**Mode resolution:** task instruction specifies the Arknights register.

**What changed:**

| Decision | Rule source |
| --- | --- |
| Serial section labels `01–04` | `arknights/information-hierarchy.md` — serial-section system |
| Amber, rationed to status only (≤5%) | `arknights/color-system.md` — signal color discipline |
| Chamfered buttons, notched corners | `arknights/geometry-and-shapes.md` — chamfer/tick semantics |
| Corner ticks at section boundaries only | Same file; nested frames are a HUD failure |
| Hazard stripe on the loading strip only | `arknights/motion-and-feedback.md` — one stripe, one purpose |
| Matte neutral ground, no gradients | `arknights/visual-language.md` — matte industrial |
| Metadata footer strip (build / tests / CPU) | `arknights/information-hierarchy.md` — operational honesty |

**What did not change:** the sections, the diff view, the agent panel, the queue, the composer, the density. Every capability survived the switch. (`evaluation/sandbox/test-b-arknights-workspace.html`, render `evaluation/screenshots/test-b-v3.png`.)

---

## Round 3 — back to General

**Mode resolution:** task instruction returns to General.

**What must be checked on the way back:** not "does it look General" but "is anything left over." A stray chamfer, a surviving serial label, or an amber accent still sitting on a non-status element all pass a glance and fail the mode.

**Verified:** the fresh General render is byte-for-byte consistent with Round 1 in register — no residual Arknights traits. (`test-a-v2.png`.)

---

## The rule this example exists to establish

**Switching modes changes decisions, not capability.** The engineering layer — information architecture, component behaviour, data binding, interaction logic — is mode-independent. The visual layer — geometry, palette, label vocabulary, texture, density feel — is entirely mode-owned.

The practical test: if switching modes made you delete a feature, the modes had bled into each other.

---

## What this example does not prove

The mode precedence **chain** was not exercised here. In all three rounds the mode came from the task instruction — the top rung. Project-config selection, override order, and the default are specified in `SKILL.md` §1 and documented in `config/mode-config.example.yaml`, but they were not validated end to end. See `evaluation/mode-isolation-tests.md` (C2, marked NOT RUN).