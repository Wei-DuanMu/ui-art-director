# Composition Example: Open Field + Data Cluster

**Pattern:** 06 — large deliberate whitespace + one compact, dense cluster placed off-center.
**Product:** Northlight, a build-system status page. (Fictional.)

## The composition

```
northlight · build status                                      v1.8


                        ALL SYSTEMS OPERATIONAL

                        0 failing · 214 passing
                        last failure 6d ago · flake rate 0.4%

                        ── pipeline p99: 4m 12s ──


                                       status refreshed 04:08 UTC
```

(The viewport is ~70% empty space. That emptiness is the design.)

## Attention budget (rendered)

| Tier | Element | ~Budget |
|---|---|---|
| Primary | Status statement + counters | ~45% |
| Secondary | Pipeline line | ~18% |
| Supporting | Refresh timestamp | ~12% |
| Utility | Product/version tag | ~8% |
| Decoration | — | ~0% |

## Why this grammar

- **The page has one fact and one question behind it:** "is anything broken right now?" When the answer is the whole page, the cluster gets the whole field. Isolation IS the emphasis — no accent color could say it louder.
- The cluster is **placed, not floated**: it anchors to the grid's second vertical third and is left-aligned with the (invisible) column the timestamp also obeys. Off-center but aligned — the field reads as intentional, not unfinished.
- One cluster, ever. A second element at similar size would have destroyed the pattern; the pipeline line therefore sits inside the cluster's boundary at supporting weight.
- No glow, no gradient, no "hero." The confidence of the emptiness is the brand.

## Risks watched

- **Fear-of-empty pressure:** stakeholders asked for a logo mark in the field. Rejected — the field is load-bearing; fill it and the page reverts to generic.
- If the status were FAILING, this same grammar still works: the cluster's statement changes, the field stays. The pattern carries state through type, not through red wallpaper.

## Transfer

Use open field + cluster for **single-decision screens**: status, empty states, landing heroes with real information, keynote metrics. Requirements: exactly one cluster, one alignment anchor, and the discipline to defend the emptiness.
