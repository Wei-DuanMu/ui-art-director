# Composition Example: Dense Utility Rail

**Pattern:** 05 — compressed high-frequency actions in a narrow rail; calm main region.
**Product:** Driftline, a log-analysis console. (Fictional.)

## The composition

```
──────────────────────────────────────────────────────────────────────
driftline · prod / api-gateway                          ● live · 04:09
────┬─────────────────────────────────────────────────────────────────
 ▽  │  04:09:12.411  200  GET /v2/charges        38ms   trace 9f2e
 f  │  04:09:12.208  200  GET /v2/customers      41ms   trace 9f2d
 ⏸  │  04:09:11.977  502  POST /v2/refunds        2.1s  trace 9f2c ⚠
 ⊕  │  04:09:11.702  200  GET /v2/charges        36ms   trace 9f2b
    │  04:09:11.650  200  GET /v2/health          4ms   trace 9f2a
 ⭳  │  04:09:11.322  429  GET /v2/search         12ms   trace 9f29 ⚠
    │  04:09:11.004  200  GET /v2/items          52ms   trace 9f28
────┴─────────────────────────────────────────────────────────────────
 errors 3 · rate-limited 12 · p99 1.9s                    filter: none
```

Rail (left, 44px): stream filter · pause · bookmark · export — icon-only, quiet contrast, 4px gaps.

## Attention budget (rendered)

| Tier | Element | ~Budget |
|---|---|---|
| Primary | Log stream | ~44% |
| Secondary | Anomalous rows (⚠ marks) | ~20% |
| Supporting | Footer stats strip | ~18% |
| Utility | Rail + header | ~15% |
| Decoration | — | ~0% |

## Why this grammar

- **The stream is the content and it never sleeps.** Anything that competes with it taxes every glance. The rail compresses four high-frequency actions into 44px of near-silent chrome — reachable in one gesture, invisible in every scan.
- Rail icons are single-weight, reduced contrast, no labels, no containers. The weight audit holds them at utility tier even though they're interactive — *interactive does not mean important*.
- Anomalies get the secondary tier through a **textual marker** (⚠) and position, not through row-background color — colored rows would have made every error a banner and destroyed the stream's scannability.
- Footer stats use the same density discipline as the rail: compressed, mono, quiet — utility-grade information at utility-grade weight.

## Risks watched

- Rail scope creep: a request to add six more icons was cut to two (the rest moved to the filter popover). A rail that becomes a second navigation system needs its own hierarchy — and a different pattern.
- Touch target floor: 44px rail works on desktop; on tablet the rail widens and gains labels, per responsive rules.

## Transfer

Use a utility rail when **actions are frequent but individually unimportant**. The test: after 30 seconds on the page, the user should remember the content, not the rail.
