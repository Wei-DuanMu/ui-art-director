# Anatomy: What a Strong Dashboard Does

This is the reasoning reference behind Example 1's "after" state — the general principles, so they transfer to dashboards that look nothing like it.

## The anchor pattern

```
PRIMARY METRIC (display size)        status ●
descriptor · unit · period           ▲/▼ delta vs baseline

supporting context, quiet
```

One or two primary metrics become anchors; everything else recedes through scale, weight, and spacing. The test: **squint at the page. Whatever you can still read is the hierarchy.** If you can read six things equally, the hierarchy is flat.

## What "good" looks like, itemized

1. **The first question is answered above the fold, in the largest type.** For an ops console that's usually a count or rate with a delta against a baseline. A number without a baseline is uninterpretable — always ship "1,204" with "▲ +8.2% vs 7-day avg" and, where relevant, a threshold: "target 90%".
2. **Density is deliberate.** Decision regions (alert queues, failing entities) are dense and typographically strong. Context regions (weekly fuel cost) are sparse and quiet. Density matches importance.
3. **Open sections replace most cards.** Dividers, whitespace, and typographic headers separate regions; cards/rows are reserved for entities that require action (an alert with an assign button earns its enclosure).
4. **Technical labels and status indicators appear — and are true.** Units, timestamps, thresholds, and health dots add the instrument feeling *and* information. Faked technical texture would be decoration; see `references/general/anti-patterns.md`.
5. **Accent marks attention, not surfaces.** One accent family, on active states, threshold breaches, and the primary action. If you can find the accent in under a second, the budget is right.
6. **Every chart answers a named question.** "Which way is today trending?" (sparkline beside the metric) survives. "What does the data look like as a pie?" dies. Decorative graphs with no decision value are noise that taxes every real metric.
7. **Tables are indexes, not dossiers.** Right-aligned tabular numbers, hairline row rhythm, status as dot + label, secondary detail behind progressive disclosure.

## The transferable lesson

Hierarchy creates the feeling of sophistication more reliably than effects. A dashboard with one clear anchor, honest metadata, one restrained accent, and only decision-relevant charts will read as "advanced" and "technical" to any viewer — no glow, no gradient, no HUD costume required.

When reviewing any dashboard, ask in order:

1. What is the anchor? (No answer → P0.)
2. What decision does each region support? (No answer → candidate for deletion.)
3. Is every accent and decorative element justified? (No → P1.)
4. Does every number have a unit and a baseline? (No → P1.)
