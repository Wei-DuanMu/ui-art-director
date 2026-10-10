# Accessibility

Accessibility is the floor the visual system is built on — not a post-pass, and never a trade against "style." A design that fails these rules has failed regardless of its composition score. Mode-independent: applies in General and Arknights modes.

## Contrast floors

- Body text: ≥ 4.5:1 (WCAG AA)
- Large text (≥24px, or ≥19px bold): ≥ 3:1
- UI chrome with meaning (borders of inputs, focus indicators, icon-only controls): ≥ 3:1 against adjacent colors
- Muted palettes make failures easy — verify every "dim" role, in every theme, with real values, not vibes.

## Focus

- Every interactive element has a **visible** focus state. This is the one place a strong accent outline is always legitimate.
- Never remove outlines without replacing them with something at least as visible.
- Focus order matches the stated reading order — a composition that tabs backwards is broken.

## Touch and pointer

- Touch targets ≥ ~44×44px on touch breakpoints (utility rails included — compressed ≠ tiny).
- Hover is never the only path to information (tooltips must have a focus/tap equivalent).

## Motion

- Honor `prefers-reduced-motion`: remove non-essential animation; keep instant state changes and opacity-only fades.
- No information may exist only in motion (a user who can't perceive the animation must still get the state).

## Structure and semantics

- Semantic HTML first: `button`, `nav`, `main`, headings in order, lists for lists. A div soup with ARIA patched on top is a P0 finding.
- Images and icon-only controls have accessible names; decorative marks are hidden from assistive tech.
- Color is never the only channel: status gets shape + label, errors get text, deltas get ▲▼ + words.

## Text

- Body text ≥ 16px default; line-height ≥ 1.4 for CJK, ≥ 1.3 for Latin body.
- All-caps only for short Latin labels; never for CJK, never for sentences.
- Content reflows at 200% zoom without horizontal scrolling on mobile widths.

## Review rule

Every UI review and code review checks this file's items. Accessibility findings are **never tagged P3** — they are P0 (blocking) or P1 (significant), because "optional accessibility" is a contradiction.
