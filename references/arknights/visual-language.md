# Arknights Mode — Visual Language

The register in one sentence: **an industrial relief-agency's operating system** — matte, technical, editorially typeset, dense with real information, and geometrically disciplined. [INFERRED from public familiarity with the game's art direction; see `reference-index.md` for the current verification state.]

This file defines *what the register is* and *how to decide whether a design choice belongs to it*. It never licenses copying screens.

## Core traits

### 1. Matte industrial material [INFERRED]

Surfaces read as equipment, not as glass or paper: low-saturation dark greys and desaturated off-whites, minimal gradients, no gloss. Depth comes from flat layering (panel on panel with thin rules), not from shadows and blur.

**Apply:** backgrounds in 2–3 flat elevation steps; hairline borders instead of drop shadows; translucency only for true overlays with a scrim.

### 2. Editorial information design [INFERRED]

The register treats UI like a technical publication: oversized numerals, section headers with serial-style labels, annotations, footnote-grade metadata, mixed CJK/Latin type. Pages feel *authored*.

**Apply:** every page gets a document-grade header (name + index + date/state); primary metrics use display-size numerals; metadata is real and set in mono.

### 3. Geometric discipline [INFERRED]

A small, consistent shape vocabulary — chamfered corners, diagonal cuts, triangles/chevrons, hexagonal accents, hazard-stripes — used as *semantic markers* (category, warning, state), never as texture.

**Apply:** pick 2–3 shapes per product and assign each a meaning. Detail in `geometry-and-shapes.md`.

### 4. Signal-color accenting [INFERRED]

Muted base + one or two high-visibility signal colors (safety-amber family is the canonical choice) reserved for state, alerts, and primary actions. Status colors are semantic and consistent.

**Apply:** accent budget ≤5% of visible area; see `color-system.md`.

### 5. Density with hierarchy [INFERRED]

Screens carry a lot of information, but organized into clear tiers: big-number anchors, structured mid-tier data, quiet metadata. The density is the point; the hierarchy is what keeps it legible.

**Apply:** full compliance with the shared composition layer (`references/general/` — grammar, weight, spatial, focal rules all apply unchanged in this mode).

## What this register is NOT [ORIGINAL guardrails]

- Not cyberpunk: no neon glow, no magenta-on-black, no scanline wallpaper.
- Not military sci-fi: no camouflage of function under rivets and grilles.
- Not "anime UI": no character art as layout filler, no rounded cute controls.
- Not a screenshot: if the result is recognizable as a specific game screen, it has failed — abstract further.

## Identity checklist for any page in this mode

1. Could this pass as the UI of a relief organization's field terminal? (register fit)
2. Is every decorative mark semantic? (guardrail)
3. Is the loudest element also the most important information? (hierarchy)
4. Does it survive in grayscale? (the register's structure is tonal, not chromatic)
5. Is anything copied rather than abstracted? (copyright line — must be no)
