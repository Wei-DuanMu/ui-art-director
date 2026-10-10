# Arknights Mode — Motion & Feedback

Motion in this register is mechanical and informative: quick, precise, over before you notice it. [INFERRED trait; rules ORIGINAL. Shared rules in `references/general/motion-and-responsive.md` apply — this file amends.]

## Principles

1. **Fast and functional.** UI feedback 120–200ms, state transitions 200–300ms. Nothing bounces. Easing: ease-out or linear — no springy overshoot.
2. **Motion means state changed.** Animation answers "what just happened?" — value updated, item added, mode switched, alert arrived. Idle decoration never moves.
3. **One motion at a time per region.** Stagger only for initial page assembly (see below), never for ongoing updates.

## Register-specific devices [ORIGINAL]

| Device | Use | Spec |
|---|---|---|
| **Hard cut + settle** | panel/section appear | opacity 0→1 + 2–4px translate, 150ms. The "mechanical snap." |
| **Scan reveal** | first paint of a data region | a 1px light line sweeps the region once, 300ms, then never again this session |
| **Stripe shimmer** | loading/processing | hazard-stripe band slides at low speed; the register's one allowed ambient motion |
| **Value flicker** | live numeric update | old value dims→new value, 120ms; no counting-up odometer theatrics |
| **Edge pulse** | alert arrival on a region | 2px accent left-bar fades in; the region itself does not flash |

## Feedback mapping

| Event | Feedback |
|---|---|
| button press | 100ms surface darken; primary buttons may "snap" (1px translate) |
| toggle/switch | instant state + 150ms accent settle |
| form error | triangle marker + message appear (hard cut), no shake animation |
| async load (region) | stripe shimmer on the region's header strip |
| async load (full page) | serial boot readout (real step names), not a spinner alone |
| live data tick | value flicker on changed cells only |
| mode switch (general↔arknights) | full theme swap is a hard cut; do not crossfade palettes |

## Reduced motion

`prefers-reduced-motion`: kill scan reveal, stripe shimmer, and stagger; keep instant state changes and opacity-only fades. The register works fully static — motion is seasoning, never structure.

## Forbidden

- Idle glow/pulse on static elements (guardrail: motion outranks everything — wasting it on chrome steals attention from data)
- Parallax decoration
- Count-up animations on every number (reserve for genuinely dramatic single reveals, once per page load)
- Any animation that delays interaction (>300ms before the UI is usable)
