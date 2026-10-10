# Focal Point

A focal point is where the eye lands. Every viewport gets one first read — design decides whether it's the right one.

## The rules

### Rule 1 — One primary focal point per viewport

A viewport must have exactly one primary anchor. "Exactly one" is not a style preference; two equal anchors produce a tie, and a tie means the user does the prioritization work the interface was supposed to do.

The primary focal point is the element the page *exists to show*:

- main task
- main metric
- primary content
- hero visualization
- active workspace

If you cannot name the primary focal point in one sentence, the page has no composition yet — stop and do Composition Planning (SKILL.md §4).

### Rule 2 — Secondary focal points exist, and are visibly weaker

Secondary focal points (typically one or two) receive the eye *after* the primary. They must lose to it on the weight audit (see `visual-weight.md`): less area, less contrast, smaller scale, or off the primary scan path. If a secondary element survives a squint test as clearly as the anchor, it isn't secondary.

### Rule 3 — The five-equal-zones check

If a viewport contains **five or more regions of roughly equal visual weight**, treat it as lacking focal hierarchy — flag it in every review and fix it before any other polish.

```
┌──────┬──────┬──────┐
│  A   │  B   │  C   │     ← six zones, one weight:
├──────┼──────┼──────┤       no first read, no second read,
│  D   │  E   │  F   │       only scanning fatigue
└──────┴──────┴──────┘
```

The fix is never "make one card prettier." It is choosing what the page is *for*, then rebuilding around that (usually pattern 01, 04, or 06 from `composition-grammar.md`).

### Rule 4 — Position spends attention, so place deliberately

For LTR interfaces the entry point is top-left; the natural path runs across the top, down the left edge, then diagonally. Place the primary anchor on the path's start or its strongest node — not wherever the template put the first div.

Deliberate alternatives (off-center, lower-right, isolated field) are legal and often powerful — pattern 06 uses exactly this — but they are *chosen*, with the whitespace doing the work. An anchor in a weak position with no compensating weight is just lost.

### Rule 5 — The reading order must be designable

State the intended read explicitly for any non-trivial page:

```
1st: [anchor]
2nd: [secondary]
3rd: [supporting]
then: [utility on demand]
```

If you can't state it, the user can't follow it. During review, verify the actual weight ranking matches this stated order (see `execution-gap.md` — a mismatched reading order is a classic intent/implementation gap).

## Focal point vs decoration

Decoration near the focal point borrows its gravity; decoration far from it is dead weight. Either way, decoration never *is* the focal point — an anchor must be information. A gradient orb in the center of a landing page is a focal point occupied by nothing.

## Diagnostic checklist

- Can you name the primary focal point in one sentence?
- Does it win the squint test outright?
- Do secondary elements read *after* it, not alongside it?
- Are there 5+ equal-weight zones? (P0 if yes)
- Is the anchor on the scan path, or deliberately off it with compensation?
- Is the anchor information, or styling?
