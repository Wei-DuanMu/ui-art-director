# PROJECT DESIGN MEMORY

Copy this file into your project (e.g., `.ui-art-director.md` or your agent's memory location) and fill it in once. The skill treats it as the source of truth for Project Continuity mode: new pages are reviewed against it, and drift is reported against it. Update it when the design system itself intentionally changes — not when one page wants an exception.

---

## Identity

**Brand Personality:**
[e.g., "Precision instruments for logistics teams — serious, calm, data-forward"]

**Visual Keywords:**
[e.g., "industrial, editorial, information-rich, restrained, structured"]

**Design Philosophy:**
[2–3 sentences. What does this product believe about how interfaces should work?]

## Color Palette

- background:
- surface:
- surface-elevated:
- border:
- text-primary:
- text-secondary:
- text-muted:
- accent: [+ what it marks]
- success / warning / danger / info:

## Typography

- display:
- heading:
- body:
- label:
- metadata:
- numeric/mono:
- mixed-language rules:

## Grid

[columns, max width, gutters, alignment anchors]

## Spacing

[spacing scale + section rhythm]

## Border / Radius

[weights + radius scale by component role]

## Iconography

[style, stroke, scale, labeling rules]

## Component Rules

[roles, variants, state models — link to full design system if one exists]

## Motion Rules

[allowed purposes, durations, reduced-motion behavior]

## Responsive Rules

[per-breakpoint priorities]

## Do

- 

## Don't

- 

## Known Drift Risks

[where this project has drifted before or is prone to drift]

---

## Drift review procedure

When a new page/component is reviewed against this memory:

```
Existing Design System (this file)
        ↓
New Page / Component
        ↓
Compare: color, typography, spacing, radius, component shape, density, decorative language
        ↓
Detect Drift: list each deviation
        ↓
Recommend Fixes: for each deviation — conform to system, or propose a deliberate system evolution
```

A deviation is either **drift** (unintentional — fix it) or **evolution** (intentional — update this memory so the change becomes the new system). Never let a page silently evolve the system one exception at a time.
