# Arknights Mode — Geometry & Shapes

The register's shape language is small and semantic. Every shape is a **sign with a meaning**, assigned once per product and used consistently. [INFERRED trait; all assignments below are ORIGINAL constructions — invent your own per product, don't copy in-game iconography.]

## The vocabulary

### Chamfer (cut corner) [INFERRED as register-typical]

A single 45° cut on one or two corners of a panel or button. The register's most recognizable move.

**Rules [ORIGINAL]:**

- One chamfer size per product (e.g., 8px), one corner convention (e.g., top-right only for containers, top-left+bottom-right for primary actions).
- Chamfer = interactive or featured. Static content blocks stay square. If everything is chamfered, the mark means nothing.
- Implement in CSS via `clip-path: polygon(...)`; keep radii at 0 elsewhere — chamfer and border-radius never mix on the same element.

### Diagonal / chevron [INFERRED]

Slanted edges, arrow-like forms. Assign to **direction and progression**: step indicators, "next", expansion, forward flow.

**Rules:** chevrons point where attention should go; a chevron pointing nowhere is decoration without a reason. Never use diagonals on opposing edges of the same small element (reads as noise at <24px).

### Triangle [INFERRED]

Warning and status semantics (the hazard-sign association). Small, flat, paired with the amber family.

**Rules:** triangle = caution or criticality only. Not a bullet, not a list marker.

### Hexagon [INFERRED]

Classification and identity (entity types, departments, rarities-as-categories).

**Rules:** hexagons carry category icons or single glyphs; label them (shape alone is ambiguous at small sizes). One hexagon system per product.

### Hazard stripe [INFERRED]

Diagonal stripe bands (amber/dark or dim/light neutral). Assign to **restricted, loading, under-construction, or boundary** states.

**Rules:** stripes are a state, not a texture. A stripe band on a normal content panel violates guardrail 4. Use at low contrast for boundaries, high contrast only for real warnings.

### Serial frame / corner ticks [ORIGINAL]

Small corner brackets or tick marks on a container's corners — marks the container as a **viewport onto live data** (video, map, chart, terminal).

**Rules:** one viewport per viewport region; never frame static text with ticks (that's HUD cosplay, guardrail 1).

## Assignment table (fill per product)

| Shape | Assigned meaning (this product) | Forbidden use |
|---|---|---|
| chamfer | | |
| chevron | | |
| triangle | | |
| hexagon | | |
| hazard stripe | | |
| corner ticks | | |

If a row can't be filled with a real meaning, don't use the shape in this product.

## Grid

Underlying layout stays on the shared grid rules (`references/general/layout-and-composition.md`). The register favors **visible structural lines**: full-bleed hairlines separating regions are welcome (they read as engineering drawings); what is forbidden is *unconnected* line fragments floating as decoration [guardrail 1].
