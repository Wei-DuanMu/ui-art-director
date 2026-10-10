# Arknights Mode — Color System

Palette construction for the industrial-signal register. All tokens below are **[ORIGINAL]** — inspired by the register, invented for this project. Do not treat them as the game's official colors, and do not lift exact values from game screenshots.

## Base: matte neutrals

| Token | Role | Guidance |
|---|---|---|
| `bg` | page background | very dark, desaturated neutral (near-black with a cool or warm bias — pick one per product) |
| `surface` | panels | one flat step above bg; no gradient |
| `surface-2` | elevated panels | second flat step; used sparingly (drawers, popovers) |
| `border` | hairlines | low-contrast neutral; visible but quiet |
| `text` | primary text | off-white, never pure #FFF on near-black (halation) |
| `text-dim` | secondary | 65–75% of primary contrast |
| `text-faint` | metadata | still ≥ WCAG AA for its size |

Elevation is **flat steps + hairlines**, never shadows/glow. [ORIGINAL]

## Accent: signal family

Choose **one** primary signal color per product. Canonical register choice: **safety amber** (hazard-signaling warmth on matte grey). Valid alternatives: signal red (alert-heavy products), clinical cyan (medical/lab-flavored products).

Rules:

- Accent marks: primary action, active state, critical state change, one anchor datum. Nothing else.
- Budget: ≤5% of visible pixels. If the page feels "colorful," the accent leaked.
- Never pair the signal accent with a second saturated hue in the same viewport; the register's discipline dies at two accents.

## Semantic set [ORIGINAL]

| State | Guidance |
|---|---|
| normal/ok | desaturated green-grey or the neutral border itself — "fine" should be quiet |
| warning | amber family (may share hue with accent; differentiate by context, not by adding orange #2) |
| critical | restrained red, flat, no glow |
| info | neutral or dim cyan — informational ≠ attention |

## Light theme

The register supports light themes as "paper document" variants: warm off-white base, ink-dark text, same signal accent, hairlines darker than the dark theme's. Chamfers and hazard-stripes work *better* on light; keep them.

## Forbidden in this mode

- Neon/glow treatments of any color [guardrail 3]
- Gradient backgrounds as personality
- Saturated multi-hue "category rainbows" — categorize with shape and label first (`geometry-and-shapes.md`), color last
- Accent-colored large surfaces (an accent panel is a shout; the register speaks evenly)

## Contrast

Same floors as General Mode: body ≥4.5:1, large text ≥3:1, focus indicators always visible on matte surfaces. Verify per theme. The muted palette makes contrast failures easy — check every dim text role.
