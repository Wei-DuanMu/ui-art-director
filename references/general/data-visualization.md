# Data Visualization

Dashboard design should make data legible and decision-relevant. A dashboard is an instrument panel, not a chart gallery.

## Priorities

1. Metric meaning
2. Comparison
3. Trend
4. Status
5. Annotation
6. Decoration

If a visual element serves none of the first five, it is decoration — and decoration must justify itself or go.

## Use

- **Large numerals** for the current value of primary metrics — one strong number + one quiet descriptor
- **Concise labels** with units; a number without a unit is trivia
- **Threshold markers** so users see "good/bad" without reading values
- **Small trend lines (sparklines)** for direction, placed beside the metric they describe
- **Timelines** for events and states over time
- **Compact charts** only when shape matters more than exact values
- **Status systems** (dot + label) for health, using semantic tokens

Every chart should answer a named question. "What question does this chart answer?" — if the answer is "none," delete the chart. Charts added merely because a dashboard is "expected" to contain charts are noise that taxes every real metric on the page.

## Visual hierarchy

The most important metric gets the strongest scale and contrast. Secondary context recedes through smaller type, quieter color, and tighter grouping. The failure mode is six metrics at identical size: the user must read everything to learn anything, which means the dashboard answers questions slower than a table would.

A useful structure per region:

```
PRIMARY METRIC (display size)        status ●
descriptor · unit · period           ▲/▼ delta vs comparison

supporting context, one or two lines, quiet
```

## Common failures

- **Chart wallpaper:** three or more charts of equal size with no stated purpose
- **Equal-loudness metrics:** every number the same size — hierarchy flat
- **Missing baselines:** a value with no comparison (vs target, vs previous period) is uninterpretable
- **Precision theater:** six decimal places where two would do; false precision reduces trust and scanability
- **Rainbow encoding:** categories colored for variety instead of meaning
- **3D or gradient-filled charts:** ink that carries no data
