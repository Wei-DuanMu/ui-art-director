# Anti-patterns

Anti-patterns are the default output of un-directed AI UI generation. Treat this file as a detection checklist: when any symptom below appears, name it, explain why it fails, and fix it. The governing principle:

> **Decoration must have a reason.**

## The false equations

Mechanical style shortcuts that must never be applied:

| False equation | Why it fails |
|---|---|
| Black + Neon = Futuristic | It's one movie's costume design. Futurism here is scientific and industrial, not nightclub. |
| Glassmorphism = Premium | Blur and translucency reduce contrast, harm readability, and date-stamp the design to a trend cycle. |
| Rounded Cards Everywhere = Modern | Universal enclosure flattens hierarchy; containers stop meaning anything. |
| Gradient + Glow = AI | The visual equivalent of saying nothing loudly. Every AI landing page looks identical because of this. |
| Random HUD Lines = Sci-Fi | HUD elements exist to instrument real state. Fake instrumentation is noise cosplaying as information. |
| Tiny Technical Numbers = High-tech | If the numbers mean nothing, they communicate that decoration matters more than honesty. Real technical text has units and purpose. |
| Bento Grid = Good Layout | A bento grid is a container decision, not a hierarchy decision. Filling a bento with equal-weight tiles is flatness with better marketing. |

## Named drifts

### Generic SaaS

**Symptoms:** centered hero with gradient headline, three-column feature grid with icons, pill buttons, testimonial carousel, identical rounded cards, zero distinctive typography.

**Fix:** open composition, one strong typographic statement, asymmetric anchor, fewer containers, a visual grammar that belongs to this product only.

### Generic AI Landing Page

**Symptoms:** dark background, purple-to-cyan gradient text, glowing orb or abstract 3D shape, "Powered by AI" pill badge, feature bento, glassmorphic cards.

**Fix:** state what the product *does* in large type; use technical metadata that is actually true; one restrained accent; composition that takes a position instead of hedging with centered symmetry.

### Generic Dashboard

**Symptoms:** gradient welcome banner, six equal metric cards with colored icons, three decision-free charts, a table that duplicates the cards.

**Fix:** pick the metric the user actually checks first; make it the anchor; let supporting metrics recede; keep only charts that answer questions. See `examples/bad-dashboard.md`.

### Generic Tailwind UI

**Symptoms:** default shadow scale, default radius, `bg-gray-50` sections, indigo-everything accent, cards as the only layout primitive. Competent and completely anonymous.

**Fix:** define real tokens with a point of view; sharp or restrained radii; replace shadows with borders and background shifts; an accent that isn't the framework default.

### Over-cardification

**Symptoms:** every section, row, and paragraph inside its own rounded container; nested cards; cards inside cards.

**Why it fails:** when everything is enclosed, enclosure stops signaling grouping; the eye gets 12 competing anchors instead of one.

**Fix:** remove most containers; separate with typography, dividers, whitespace, and background bands. Keep cards only for true entities. See `examples/over-cardified-ui.md`.

### Excessive Rounded Corners

**Symptoms:** pill buttons, pill inputs, pill tags, 24px-radius cards, circular everything.

**Why it fails:** universal softness erases the difference between interactive and static elements, and fights an industrial-technical identity. Radius is a voice; using one radius for everything is mumbling.

**Fix:** a radius scale (e.g., 0/2/4/8) assigned by component role; reserve full rounding for true pills (tags, toggles).

### Glassmorphism

**Symptoms:** frosted panels over colorful backgrounds, translucent navbars, blur everywhere.

**Why it fails:** contrast suffers, text legibility depends on whatever is behind the panel, and the effect is a trend marker that ages fast.

**Fix:** opaque surfaces with explicit elevation; reserve any translucency for genuinely overlaying UI (command palettes, modals) with scrims.

### Excessive Gradients

**Symptoms:** gradient page backgrounds, gradient buttons, gradient text, gradient borders.

**Fix:** flat surfaces; one gradient maximum, and only where it means something (e.g., heat in a data visualization).

### Cyberpunk Clichés

**Symptoms:** black + neon cyan/magenta, scanlines, glitch effects, angular clip-paths on every card, kanji/latin decorative fragments.

**Fix:** remove the costume. Precision, density, and typographic discipline communicate "advanced" better than neon ever will.

### Decorative HUD

**Symptoms:** corner brackets on cards, crosshairs, random grid overlays, orbiting circles, meaningless coordinate strings.

**Fix:** delete any HUD element that doesn't instrument real state. If a coordinate is displayed, it should be a real coordinate of something.

### Meaningless Technical Numbers

**Symptoms:** "SYS.0382", "// 04.22.87", random hex strings, fake version numbers sprinkled for texture.

**Fix:** technical text must be true: real timestamps, real units, real status, real indexes. If it's invented, it's decoration — cut it.

### Style over usability

Never accept unreadable text, poor contrast, confusing navigation, inaccessible focus states, or broken responsive behavior in exchange for visual mood. This is the only anti-pattern that is always P0.

## Detection protocol

When reviewing or generating, scan for the symptoms above. For each hit:

1. Name the anti-pattern.
2. Explain why it fails *in this design* (not just in general).
3. Give the fix with a concrete alternative.
