# Choosing a mode

Two modes ship in v0.3.0. There is no third mode, and adding one is not a v0.3.x change.

## The whole decision

| Signal | Mode |
| --- | --- |
| The request is an ordinary product, tool, dashboard, site, or dev utility, and no visual direction was given | **general** |
| The request is an ordinary product **and** the user explicitly asked for the Arknights register, or the project config says `arknights` | **arknights** |
| The product is a game UI, but no register was specified | **general**, then ask. General's rules will hold up; the register question is one question, not a guess. |

`general` is the default and the fallback. If you are unsure, you are not in a position where `arknights` is the answer.

---

## Mode resolution order

Highest priority first. First match wins.

| Rank | Source | Where |
| --- | --- | --- |
| 1 | **The current task's explicit requirement** | What the user asked for in this conversation |
| 2 | **Project configuration** | `config/mode-config.yaml` → `ui_art_director.mode` |
| 3 | **Session setting** | Set by the user earlier in the conversation |
| 4 | **Default** | `general` |

Ranks 2–4 are untested end to end in v0.3.0 — only rank 1 was exercised (`evaluation/mode-isolation-tests.md`, C2 marked NOT RUN). Implement them as specified; do not assume they work because they are documented.

---

## Isolation contract

**Shared (mode-independent):** information architecture, component structure, data model, interaction logic, accessibility requirements, responsive strategy, performance budgets.

**Mode-owned (mode-specific):** color system and signal discipline, geometry and shape vocabulary, label and serial conventions, typography register, texture, density feel, decorative budget.

**Switching mode must not delete a capability.** If a switch makes you remove a feature, the modes have bled. Conversely, switching must not smuggle vocabulary across: no serial labels in General, no chamfers in General, no amber-as-decoration, no HUD framing.

---

## What Arknights mode is and is not

It is a **discipline for industrial-signal UI**: matte ground, one rationed signal color, geometric honesty, serial labelling, dense but ranked information, metadata as honesty.

It is **not** a game skin. Specifically, per `references/arknights/README.md`, mode refuses:

| Refusal | Why |
| --- | --- |
| HUD line-stuffing | Frames communicate containment. Nesting them communicates nothing. |
| Meaningless numbers | Every displayed figure must be a real value. |
| Neon abuse | Signal color is rationed; if everything glows, nothing signals. |
| Decorative borders | One hairline. No double, no inset. |
| Everything-is-a-panel | Flat planes, not a grid of boxes. |
| Copying screenshots | Rules are abstracted, not traced. |
| Complexity as quality | This is the mode's characteristic failure. |

---

## Source confidence

General Mode's rules are derived from established design practice and are high confidence.

**Arknights Mode's rules rest on a thinner base:** one verified page plus three unverified sources, tracked in `references/arknights/reference-index.md`. Two remain in the open verification queue. Derive with care, cite what is verified, label what is inferred, and mark new work `[ORIGINAL]` unless you have checked the source yourself.

---

## Changing modes mid-project

Do not half-migrate. Either the project is General or it is Arknights. A page carrying chamfered buttons next to flat-square panels is not "transitioning" — it is unfinished, and it will read that way.

When switching an existing project: keep the engineering layer, rebuild the visual layer, then run the mode's own review checklist against the result. Do not assume the code is already mode-clean because it was written in another mode.