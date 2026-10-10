# Spatial Relationships

Space is not the absence of content — it is the primary tool for expressing *relationships between* content. Users read grouping from distance before they read it from borders, headings, or color. Get the distances right and the interface explains itself; get them wrong and no amount of styling repairs the confusion.

**Never say "add some padding." Every distance must answer: why does this distance exist?**

## The five forces

### Proximity — related things are near

Items that belong to the same semantic group must be measurably closer to each other than to anything outside the group. Proximity is the strongest grouping signal — stronger than shared borders or shared color.

**Rule of thumb:** within-group gaps should be clearly smaller than between-group gaps. A usable starting ratio is 1:2 to 1:3 (e.g., 8px within, 24px between). If within-group and between-group gaps are equal, there is no grouping — there is only a list.

```
label        value          ← 8px pair
label        value

────────── 24px ──────────   ← group boundary visible as space

label        value
```

### Separation — different semantics get visible distance

A group boundary must be *legible as a boundary*. Separation can be carried by whitespace alone, by a hairline divider, or by a background shift — in ascending order of loudness. Use the quietest mechanism that still reads.

**Escalation rule:** try whitespace first. If two groups still blur, add a hairline. Only reach for background bands or cards when the first two genuinely fail. Every escalation spends visual weight; spend it only when the cheaper signal failed.

### Alignment — shared edges mean shared relationships

Elements that align to a common edge are read as related even at a distance. Elements that *almost* align are read as a mistake.

- Every region aligns to a small set of shared edges (the grid). Arbitrary x-positions are forbidden.
- Numbers in tables align on the decimal/tabular axis; text aligns left; these are relationships made visible.
- When two adjacent blocks start at different left edges, that difference must *mean* something (parent vs child, content vs annotation) — or it's noise.

### Density — importance may be packed; utility should be

Density is a budget you allocate deliberately:

- **Dense** where the user's job is comparison and scanning (tables, logs, alert queues). Tighter spacing increases information per glance — that is the point.
- **Balanced** for general content.
- **Sparse** around what must be contemplated (the anchor metric, the primary decision).

Density without hierarchy is noise; sparseness without an anchor is emptiness. The same page should usually contain all three — each assigned on purpose.

### Breathing room — space around high-value elements

Whitespace around an element *increases* its perceived importance — it is the cheapest emphasis mechanism that exists. The primary anchor should be the least crowded thing on the page.

**Test:** if the most important element on the page also has the least whitespace around it, the composition is fighting itself.

## The distance justification table

When deciding any gap, use this mapping — and be able to state which row you're on:

| Relationship | Spacing intent | Starting point |
|---|---|---|
| Inside one semantic unit (label↔value) | tightest | 4–8px |
| Between units in one group | tight | 8–16px |
| Between groups in one section | medium | 24–32px |
| Between sections | large | 40–64px |
| Around the primary anchor | largest on the page | section gap ×1.5+ |
| Utility/rail items | compressed but touchable | 4–8px, ≥44px targets on touch |

Values are starting points from a spacing scale (4/8/12/16/24/32/48/64), not license to invent new ones. The scale constrains; the table decides.

## Diagnostic checklist

- Can every gap on the page be justified by a row in the table?
- Is within-group spacing visibly smaller than between-group spacing?
- Did any boundary skip the whitespace-first escalation and jump straight to a card?
- Do all left edges belong to a small, nameable set?
- Is the anchor the least crowded element?
- Is any dense region dense *and* important, or is density hiding weak hierarchy?
