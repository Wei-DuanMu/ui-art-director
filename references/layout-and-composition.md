# Layout and Composition

> **Scope note (V0.2):** this file owns layout *mechanics* — grids, gutters, rhythm, density classification. The composition *decision* (which pattern, which anchor, how attention is allocated) lives in `composition-grammar.md`, `focal-point.md`, `spatial-relationships.md`, and `visual-weight.md`. Mechanics serve the decision, never precede it.

## Priority

Composition establishes hierarchy before decoration. A well-composed page in plain black and white beats a decorated page with no structure. When reviewing, evaluate the composition with all color and effects mentally removed.

## Grid

Choose a grid intentionally: 4/8/12-column, editorial, modular, or asymmetric. Define:

- max content width
- gutters
- section spacing scale
- alignment anchors (the edges things actually line up to)

A grid you chose beats a grid that happened. If elements align to nothing, every spacing value is a coin flip.

## Rhythm

Use repeated intervals to establish rhythm, then break the rhythm deliberately at important moments. Rhythm is what makes a break in rhythm meaningful. The failure mode is every block having identical padding and height — perfect uniformity reads as no structure at all, because nothing is emphasized.

## Density

Classify regions as sparse, balanced, or dense, and design each accordingly:

- **Dense regions** need stronger typography and explicit grouping, or the density becomes soup.
- **Sparse regions** need a clear anchor so they read as intentional, not empty.
- **Balanced regions** are the default; keep them that way by not decorating them into density.

Mixing densities on one page is good — uniform density is monotonous. But the mix must be deliberate: dense where decisions happen, sparse where orientation happens.

## Card avoidance

Do not put every section in a card. Cards are one separation tool among many:

- open sections
- horizontal/vertical dividers
- background band shifts
- typographic headers with metadata
- whitespace alone

**Why this matters:** when every section is an identical rounded rectangle, containers stop communicating semantic grouping. Hierarchy collapses because enclosure no longer means anything. Use a card when a region genuinely needs to be lifted out of the flow (interactive summary, draggable entity, alert) — not as the default section wrapper.

## Asymmetry

Asymmetry is useful when it creates direction or emphasis — a wide primary column against a narrow rail, an offset headline, an anchor pulled to one edge. It must still have hidden alignment logic: elements align to shared edges even when the overall balance is uneven. Asymmetry without underlying alignment reads as accident, not intent.

## Diagnostic checklist

- Is there a dominant anchor?
- Does the eye know where to start?
- Are primary and secondary regions distinguishable at a glance?
- Are alignment edges intentional and shared?
- Are gutters consistent?
- Is repeated structure becoming monotonous?
- Does any region's density mismatch its importance?
- Could any card be replaced by a divider, whitespace, or typography?

## Common failures

- **Template composition:** hero + three columns + footer, regardless of content. The layout was chosen before the content was understood.
- **Centered everything:** every block centered, every line balanced — nothing has direction.
- **Spacing roulette:** margins chosen per-element by feel, producing 13 unique gap values on one page. Fix with a spacing scale and stick to it.
