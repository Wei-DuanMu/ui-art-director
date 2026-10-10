# Components

## System before styling

Every component should have:

1. a **role** (what job it does)
2. a **hierarchy** (how loud it is relative to siblings)
3. a **state model** (default, hover, focus, active, disabled, loading, success, error — as relevant)
4. a **relationship to design tokens** (it consumes tokens; it does not invent values)

A component with hardcoded colors or one-off spacing is a leak in the system. Fix the leak at the token level, not by patching instances.

## Buttons

Differentiate primary, secondary, tertiary, ghost, destructive, and icon actions. Rules:

- One visually dominant action per region. Two "primary" buttons in one view means the user has no priority — that's a P0 hierarchy failure.
- Primary actions are anchored by weight, fill, and placement — not merely by being brighter.
- Destructive actions use the `danger` token and demand confirmation affordances, not just a red coat.

## Inputs

Prioritize clear label, value, focus, error, disabled, and helper states. Do not hide usability behind unusual visual treatment — an input nobody recognizes as an input has failed before styling begins. Focus states must be visible; this is where restrained glow or accent outline is *legitimate*, because focus is a state.

## Navigation

Navigation should establish product identity while keeping current location obvious. Use labels, active states, section markers, and density intentionally. The active item needs the accent or strong typographic treatment; inactive items recede. If users can't tell where they are within one second, navigation has failed its only job.

## Tables and data

Use alignment, numeric formatting, row rhythm, status indicators, and progressive disclosure.

- Numbers right-aligned (or tabular-figure aligned), text left-aligned, headers matching their column alignment
- Row rhythm from padding and hairline dividers — not from turning every row into a floating card
- Status as small, consistent indicators (dot + label), not full-width colored rows unless the row *is* an alert
- Progressive disclosure for secondary detail; a table is an index, not a dossier

## Cards

Cards are for entities that genuinely need lifting out of flow: interactive summaries, draggable objects, mixed-media previews, alerts. They are not the default section wrapper. See `layout-and-composition.md` — over-cardification is one of the most common P0 findings.

## States

Audit every important component for: default, hover, focus, active, disabled, loading, success, error. Missing states are invisible until a user hits them — then they're the only thing the user sees. Loading and empty states deserve design too; a skeleton that matches the layout's geometry preserves orientation during load.

## Consistency audit

Across all components, check:

- radius (one scale, not per-component improvisation)
- border weight
- icon scale and stroke
- padding (from the spacing scale)
- type roles (from the type system)
- interaction feedback (consistent hover/focus language)

Inconsistency in any of these is how a design system dies: not by bad decisions, but by uncoordinated decent ones.
