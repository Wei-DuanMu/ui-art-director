# Visual Weight

Visual weight is how strongly an element pulls the eye. Composition is, in practice, the deliberate *allocation* of weight: the anchor must be the heaviest, and everything else's weight must match its rank in the information hierarchy.

**The core audit question:** which factors are giving this element more weight than its information deserves?

## The ten factors

Weight is never one property — it is the sum of these factors. Each can add or remove weight independently:

| Factor | Adds weight when… | Notes |
|---|---|---|
| **Area** | the element occupies more of the viewport | The bluntest instrument; large area + any other factor multiplies. |
| **Contrast** | value/color difference vs surroundings is high | The single strongest factor per pixel. |
| **Scale** | type or element size exceeds its neighbors | A display-size number outweighs a card full of body text. |
| **Color** | saturation/brightness exceeds the palette norm | Accent color is weight on loan — repay it with meaning. |
| **Position** | top-left (LTR), center, or along the primary scan path | First-seen positions carry free weight; spend them on the anchor. |
| **Density** | more information per unit area | Density draws the eye after the first read; it is a second-glance weight. |
| **Whitespace** | more space surrounds the element | Isolation is emphasis. The loneliest element reads as important. |
| **Typography** | heavier weight, larger size, distinctive case | Display type can anchor a page with almost no area. |
| **Motion** | anything moves or pulses | Motion outranks nearly everything static; use it only for state that changed. |
| **Container** | borders, shadows, fills, blur enclose the element | Every container adds weight. Cards are not free — they are a weight purchase. |

## Weight budgeting

The Visual Attention Budget (SKILL.md §4) is enforced through these factors. To give the anchor 35–45% of attention, you don't stretch its area alone — you compose factors:

- anchor: large area + breathing room + display typography + (optionally) the one accent
- secondary: moderate area + strong type, no accent
- supporting: small type, reduced contrast, tighter density
- utility: minimal contrast, compact, no container
- decoration: near-zero by definition (≤5%)

## The overweight failure

The canonical V0.1 failure: a trivial element carrying flagship weight.

> A routine **status indicator** rendered with huge font + bright accent + large card + strong border + shadow + glow is six factors deep. It will out-shout the actual content no matter how correct the tokens are.

**Weight audit procedure:**

1. List the page's elements in information-importance order.
2. For each, list which weight factors are active.
3. Compare ranks. Any element whose weight rank exceeds its importance rank is stealing attention — downgrade factors until ranks agree.
4. The anchor must win the weight ranking outright. A tie at the top is a failure (see `focal-point.md`).

## Removing weight vs adding weight

Junior thinking adds weight to what matters. Direction removes weight from what doesn't.

- Wrong: "make the primary metric more prominent" → bigger, brighter, bordered, shadowed.
- Right: quiet everything around it (reduce their contrast, containers, and size), give it room — prominence by subtraction.

Removing weight is almost always the better first move: it costs nothing, adds no noise, and can't trigger a weight arms race between elements.

## Interaction with other systems

- **Spatial relationships:** whitespace is a weight factor *and* a grouping signal; changing it changes both — always check both effects.
- **Typography:** type scale is the cheapest precise weight dial (see `typography-as-composition.md`).
- **Containers:** converting a card to an open section removes the container factor — the standard de-cardification move.
- **Motion:** one animated element on a static page owns ~all motion weight. Never animate decoration.
