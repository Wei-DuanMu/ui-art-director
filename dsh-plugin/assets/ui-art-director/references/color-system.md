# Color System

## Token model

Define tokens before choosing colors. Minimum set:

- `background`
- `surface`
- `elevated surface`
- `border`
- `text primary`
- `text secondary`
- `text muted`
- `accent`
- `success`
- `warning`
- `danger`
- `info`

Tokens are roles, not hex values. "Make this redder" is a guess; "this element should use `danger`, not `accent`" is a decision.

## Accent discipline

Accent is for attention. It should identify priority, active state, key data, or interaction. **If everything is accented, nothing is accented** — accent overuse is mathematically self-defeating: attention signal divided by number of accented elements approaches zero.

Budget accents: one dominant accent family, used on roughly 5–10% of the visible surface. If a review finds accent on more than a fifth of the page, flag it.

## Palette construction

Prefer:

1. A restrained neutral base (backgrounds, surfaces, borders, most text)
2. One dominant accent family
3. A small semantic palette (success/warning/danger/info), desaturated enough to coexist with the accent

Use **contrast and value before saturation**. A design that only works in full saturation has no hierarchy — it has volume. Check the palette in grayscale: if hierarchy disappears, it was carried by saturation and will fail for real users.

## Industrial-futurist tendency

Warm amber/orange, signal yellow, controlled cyan, muted red, or technical blue can all work as the accent family — none is mandatory. Choose according to product personality:

- ops/monitoring consoles tolerate signal colors (amber, cyan) because state is the content
- editorial/products favor a single warm accent on quiet neutrals
- whatever the choice, document *why* in the design system so the choice survives personnel changes

## Dark and light

Both themes must be designed, not inverted. An inverted light theme produces glowing surfaces and dead borders. Define surface elevation by overlay alpha or explicit steps, verify border visibility on both, and re-check accent contrast per theme.

## Avoid

- Giant gradient backgrounds as a shortcut to personality — they add noise without adding identity
- Neon glow around components — glow is a state (focus, alert), not a material
- Five unrelated accent colors — that's not a palette, it's an argument
- Low-contrast text justified by aesthetics — contrast floors are not negotiable: body text must meet WCAG AA (4.5:1), large text 3:1
- Semantic colors as decoration — red that doesn't mean danger trains users to ignore red

Always check contrast and semantic meaning before visual mood.
