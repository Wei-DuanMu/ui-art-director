# Typography as Composition

In this visual language, typography is not a styling layer applied after layout — it is a **construction material**. Type size, weight, measure, and spacing build the same things layout does: hierarchy, rhythm, grouping, and the anchor itself. A page whose composition depends entirely on containers has no typographic composition; a page with strong typographic composition barely needs containers.

## Roles as compositional instruments

Each role is a tool with a compositional job, not just a size:

| Role | Compositional job |
|---|---|
| **Display** | Builds the anchor. One per viewport. Its size IS the hierarchy claim. |
| **Heading (H1–H3)** | Builds structure. Each level is a visible step in the reading order. |
| **Subheading** | Bridges display and body; orients without competing. |
| **Body** | Carries reading. Optimized for the measure, not for show. |
| **Label** | Attaches meaning to controls and fields; must stay quieter than what it labels. |
| **Metadata** | Builds the technical texture: timestamps, units, states, versions. Quiet but intentional. |
| **Numerical data** | Carries metrics. Tabular figures; size proportional to decision value. |
| **Technical data** | Code, IDs, coordinates. Mono role; precision signal. |

## The four dials — each does compositional work

- **Size** — the hierarchy dial. Biggest lever on visual weight per unit effort. A display-size number doesn't just say "important metric": it *becomes* the page's visual anchor (pattern 01 without any card).
- **Weight** — the emphasis-within-size dial. Two levels at one size can still differ in rank through weight alone (but never rely on weight alone for adjacent levels).
- **Measure (line length)** — the rhythm dial. 45–75 characters for body; narrow measures for editorial stacks, wider for reference content. Measure controls how a column *feels* before a word is read.
- **Spacing (line-height, letter-spacing, paragraph gaps)** — the breathing dial. Tight leading + wide paragraph gaps = dense technical; generous leading = editorial calm.

## Composition moves typography makes possible

1. **Anchor without a container.** Display number + quiet descriptor + whitespace. No card, no border — the scale and isolation do everything. (This is the single highest-value move V0.1 was missing.)
2. **Structure without chrome.** Editorial stack (pattern 03): headings + hairlines + whitespace produce a fully navigable page with zero boxes.
3. **Density without noise.** In data regions, drop one size, tighten leading, keep tabular figures — information per glance rises while weight stays controlled.
4. **Rhythm through interruption.** Establish a repeating type cadence (heading / body / gap), then break it once — larger display, deeper gap — at the section that matters most. The break is the message.

## Type scale as a composition decision

A modular scale (e.g., ratio 1.25–1.5) isn't just consistency — it guarantees that size differences are *legible as levels*. Two sizes closer than ~1.15× read as one level: merge them or push them apart.

When planning a page, write the type scale *into* the Composition Plan: which role is display, what size ratio separates the anchor from everything else (target ≥2.5–3× between the anchor's numeral and body).

## Mixed Chinese / English

All rules from `typography.md` apply, with one compositional addition: CJK display type is optically denser than Latin at the same size, so a CJK anchor may need *less* scale to achieve the same weight — judge by the squint test, not the point size.

## Diagnostic checklist

- Is the anchor carried partly by type, or entirely by a box?
- Does each adjacent level differ by a perceptible step (≥1.15×, or weight+case)?
- Is there exactly one display role per viewport?
- Does any card exist only because its content had no typographic hierarchy? (Replace with type-first structure.)
- Does the type rhythm break deliberately at the most important section?
