# Arknights Mode — Components

Component treatments for the register. All constructions [ORIGINAL]. Shared component logic (states, consistency audits) lives in `references/general/components.md` and applies fully; this file only defines what changes in this mode.

## Buttons

- **Primary:** solid signal accent fill, dark text, chamfered (per the product's chamfer convention). No glow, no gradient.
- **Secondary:** transparent fill, hairline border, primary text. Chamfer optional but consistent.
- **Tertiary/ghost:** text + chevron for navigational actions.
- **Destructive:** restrained red variant of primary; triangle marker allowed.
- One dominant action per region — shared rule, enforced harder here because accent is scarce.

## Panels

- Flat `surface`, 1px `border`, square corners unless the chamfer convention applies.
- Panel headers: serial label + title + optional state marker, separated from body by a hairline.
- No nested panels. If you need a panel inside a panel, restructure into sibling regions or layers (`references/general/composition-grammar.md` pattern 07).

## Tags & status

- Status = shape + word, not color alone: ●/▲/■ markers with labels (`RUNNING`, `DEGRADED`, `HALTED`).
- Tags: square or chamfered outline chips, mono or small caps text. No pill-shaped pastel tags — wrong register.

## Tables & data lists

- Hairline row separators, tight density, tabular numerals right-aligned.
- Row state via left edge marker (2px accent bar) — not full-row background tint.
- Column headers as small-caps labels with optional serial index.

## Navigation

- Top bar: product mark + section links with index numbers (`01 OPERATIONS`), active section gets the accent or an underline bar.
- Side nav (when used): narrow, icon+label, active item marked by left bar + surface-2 fill. Icons are simple geometric glyphs, consistent stroke — never emoji.

## Inputs

- Square corners, hairline border, `surface` fill; focus = accent border (flat, no glow) + label stays visible.
- Validation: triangle marker + message; error text in the critical color, border follows.

## Viewports (live data regions)

- Map/chart/terminal/log regions may use corner ticks (per `geometry-and-shapes.md`) and a slightly different surface step to read as "instrument glass" — flat, no blur.
- Terminal/log: mono text, timestamp per line, ANSI-free (color only via the semantic set).

## Overlays

- Modal/drawer: `surface-2`, scrim at ~60%, chamfer per convention. Overlays are the only place a faint backdrop blur is tolerated — and only if it doesn't cut text contrast below AA.

## States checklist (per component)

default · hover (surface shift or border brighten, flat) · focus (visible accent outline — a11y floor) · active · disabled (dim, no strikethrough games) · loading (hazard-stripe shimmer allowed as the ONE decorative motion) · error · empty (one line + one action, no illustration required).
