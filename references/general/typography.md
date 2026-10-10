# Typography

Typography is a structural tool, not decoration. In this visual language it is the *primary* structural tool — the thing that creates hierarchy when color and effects are removed.

## Hierarchy

Define clear roles and use them consistently:

- **display** — the page's single largest statement (use sparingly, one per view)
- **H1 / H2 / H3** — section structure
- **body** — reading text
- **small** — supporting text
- **caption** — figure and image annotation
- **label** — form and control labels
- **metadata** — timestamps, units, indexes, status
- **numeric/mono** — metrics, data, coordinates, code

Hierarchy fails when roles blur: five similar font sizes, body-weight headings, or bold used so often it means nothing.

## Contrast

Create hierarchy through size, weight, spacing, case, line length, and placement — not only color. Color is the weakest hierarchy signal: it fails for colorblind users, in grayscale, and when everything is accented. A heading that only differs from body text by color is not a heading.

**Practical contrast ratios (starting points, tune per typeface):**

- display : body — at least 3:1 in size
- H2 : body — at least 1.5:1
- if two levels are hard to tell apart at arm's length, they are one level — merge or differentiate them

## Numeric typography

Large numbers can become anchors for metrics, states, indexes, and technical data. The pattern: **one strong number + one quiet descriptor.**

```
128,400
REVENUE · LAST 30 DAYS · ▲ +12.4%
```

The number carries the attention; the descriptor carries the meaning. Never reverse their weights. Use tabular figures for data so digits align vertically in comparisons — misaligned digits silently destroy scanability.

## Chinese / English mixed typography

When mixing Chinese and English, check:

- **x-height and perceived size** — same point size does not mean same visual size; CJK glyphs are optically denser
- **perceived weight** — a Latin "regular" next to a CJK "regular" may look mismatched; adjust weight, not just size
- **baseline alignment** — mixed-script lines must sit on a shared baseline
- **line-height** — CJK usually needs more line-height than Latin at the same size
- **tracking** — do not apply Latin letter-spacing habits to CJK

Do not blindly apply the same font size to scripts with different visual density.

## Metadata

Metadata should be quieter than primary content but still intentional: compact labels, mono/numeric faces, uppercase where appropriate, restrained tracking. Metadata done well is this language's signature texture — it adds the "instrument" feeling. Metadata done badly (tiny, low-contrast, everywhere) is noise that also fails accessibility.

## Common failures

- Too many similar font sizes — no perceptible levels
- Weak heading/body contrast — structure is invisible
- Overusing bold — when everything shouts, nothing is heard
- Excessive letter-spacing on body text — readability drops
- Tiny low-contrast metadata — decoration pretending to be information
- Decorative fonts that damage readability — identity bought with usability is always overpriced
- Center-aligned long paragraphs — ragged left edge destroys reading rhythm
