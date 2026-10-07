# Example 1: Generic SaaS Dashboard → Industrial Editorial Dashboard

Fictional product: **Northbeam Fleet**, a delivery-fleet monitoring console. All content below is original; any resemblance to real products is the point of the exercise, not a copy.

## Bad UI

```
┌────────────────────────────────────────────────────────────────┐
│ 🌈 Welcome back, Alex! Here's your fleet overview.  (gradient  │
│    banner, purple→blue, 110px tall)                            │
├─────────┬─────────┬─────────┬─────────┬─────────┬──────────────┤
│╭───────╮│╭───────╮│╭───────╮│╭───────╮│╭───────╮│╭───────╮     │
││ 💜    │││ 💙    │││ 💚    │││ 🧡    │││ 💗    │││ 💛    │     │
││ 1,204 │││ 87.3% │││ $3.2k │││  42   │││ 99.9% │││  18   │     │
││ Trips │││ OnTime│││ Fuel  │││ Alerts│││ Uptime│││ Trucks│     │
│╰───────╯│╰───────╯│╰───────╯│╰───────╯│╰───────╯│╰───────╯     │
├─────────┴─────────┴─────────┴─────────┴─────────┴──────────────┤
│ ╭──────────────╮ ╭──────────────╮ ╭──────────────╮             │
│ │  line chart  │ │   pie chart  │ │   bar chart  │             │
│ │  (no title)  │ │ (5 colors)   │ │ (no units)   │             │
│ ╰──────────────╯ ╰──────────────╯ ╰──────────────╯             │
└────────────────────────────────────────────────────────────────┘
```

## Analysis

Running the inspection sequence:

- **Composition:** no visual anchor. Six cards at identical size compete; the eye has no start point. Centered banner consumes the strongest position for zero information.
- **Hierarchy:** flat. "Alerts 42" (actionable) and "Trips 1,204" (contextual) are equally loud.
- **Typography:** one size for all metrics; emoji as icons; no numeric typography.
- **Color:** six accent colors on one row — accent signals nothing. Gradient banner is decoration without a reason.
- **Components:** card monoculture. Every datum is enclosed in the same rounded container.
- **Density:** charts exist because "dashboards have charts"; none answers a named question. The pie has 5 colors for decoration.
- **Brand:** swap the title and this screenshot belongs to any SaaS product ever made.

## Diagnosis

The page is template-driven: composition was chosen before content was understood, and decoration (gradient, emoji, rainbow charts) is compensating for the absence of hierarchy. **Score: 54/100 — Weak visual system.** Dominant failure: no anchor, no hierarchy (P0).

## Design Direction

Industrial editorial instrument panel:

- **Anchor:** the one number the operator checks first — today's active deliveries.
- **One accent** (signal amber) reserved for active states and threshold breaches.
- **Open sections** separated by rules and whitespace; cards only for the alert queue (real entities requiring action).
- **Mono/metadata type** for units, timestamps, and system state — true metadata only.
- Charts survive only if they answer a question. Two die.

## Improved UI

```
──────────────────────────────────────────────────────────────────
NORTHBEAM FLEET · OPERATIONS                    2026-10-08 09:42 UTC
──────────────────────────────────────────────────────────────────

ACTIVE DELIVERIES · TODAY
1,204                            ▲ +8.2% vs 7-day avg
                                 on-time 87.3% · target 90%

  ▁▂▃▅▄▆▅▇█  last 14 days
──────────────────────────────────────────────────────────────────

ALERTS · 4 NEED ACTION                                          ●
──────────────────────────────────────────────────────────────────
  09:31  VH-2217  coolant temp 108°C · threshold 105    [assign]
  08:57  VH-0843  route deviation 12 km                 [review]
  08:12  VH-1190  delivery late +45 min                 [contact]
  07:48  VH-2034  fuel level 8%                         [assign]
──────────────────────────────────────────────────────────────────

FLEET                                          18 / 20 active
FUEL COST · 7 DAYS                    $3,214 · ▼ 4% vs prior week
UPTIME                                     99.9% · 30-day rolling
──────────────────────────────────────────────────────────────────
```

## Why It Works

- **Hierarchy answers the first question instantly.** The operator's #1 metric is 4× the scale of anything else; everything else visibly defers. The six-way tie is gone.
- **Alerts became actionable rows**, not a number on a card. Each row is a real entity with state, time, and an action — this is where cards/rows earn their enclosure.
- **Accent appears exactly once** (the alert marker), so it means something. Amber is now a signal, not wallpaper.
- **Metadata is real:** units, thresholds, comparison baselines, timestamps. Every number can be interpreted without asking "compared to what?"
- **Two charts were deleted.** The remaining sparkline answers "which way is today trending?" in one second. The pie chart answered nothing.
- **The gradient banner died**, and the identity got *stronger* — proof that identity comes from hierarchy and typographic voice, not decoration.

**Key lesson:** hierarchy creates the feeling of sophistication more reliably than effects.
