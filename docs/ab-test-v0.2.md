# A/B Test Plan: V0.1 vs V0.2

Purpose: verify that V0.2 closes the V0.1 execution gap — *"the skill can explain good design better than it can produce it"* — by comparing generated output, not just review quality.

Baseline (V0.1 evaluation, preserved):

- Design Evaluation: **15 / 21**
- Skill Capability: **8 / 9**
- Failure mode: token-correct, component-correct, composition-flat.

## Method

1. Install V0.1 and V0.2 as two separate skill bundles (e.g. `ui-art-director` at tag `v0.1.2` vs `v0.2.0`), or run sessions against a checkout of each tag.
2. For each case below, give both versions the **identical prompt** and let them produce a full page (wireframe or code + render).
3. Screenshot/render both outputs. Score each with the V0.2 rubric (`templates/ui-review.md`), applied blind where possible.
4. Record the **Composition core** subtotal (Visual Hierarchy + Composition + Spatial Relationships, /40) separately — that is the axis V0.2 is supposed to move.
5. Also record the **process artifact**: does the output include (or imply) a Composition Plan — anchor, attention budget, stated reading order? V0.2 must be able to explain its attention allocation *before* building (success criterion 5).

## Cases

### Case A — AI Developer Workspace

Prompt (identical for both versions):

> Design the main workspace for an AI coding assistant: a central code/diff view, a conversation panel, a task list, and a status strip. Desktop-first, dark theme, technical product.

What to compare:

- Is the code/diff view the unmistakable anchor (pattern 01 or 02), or did both panels end up 50/50?
- Is the task list at utility weight or did it become a card farm?
- Attention budget: does utility (status strip, actions) stay ≤15%?

### Case B — Information-rich Dashboard

Prompt:

> Design an operations dashboard for a logistics company: 6–8 metrics, an alert queue, a region map placeholder, and one trend visualization. Dense but readable.

What to compare:

- One primary metric vs six-way tie (V0.1's known failure).
- Alert queue: actionable rows (decision entities) vs metric cards.
- Charts: only ones answering named questions; sparklines vs chart wallpaper.
- Composition core /40.

### Case C — AI Product Landing Page

Prompt:

> Design the landing page for an AI data-quality product: headline, one proof element, three capabilities, one call to action. Distinctive, not generic-SaaS.

What to compare:

- Centered template layout (V0.1 tendency) vs directed composition (asymmetric editorial or open field).
- Proof element: real-looking data/metadata vs glowing orb decoration.
- Decoration budget ≤5% (V0.2) vs gradient/glow spend (V0.1).

## Comparison dimensions (per case)

| Dimension | Weight in verdict |
|---|---|
| Composition (grammar chosen, anchor present) | primary |
| Visual hierarchy (readable order 1→2→3) | primary |
| Focal point (wins squint test) | primary |
| Spatial relationships (grouping by distance) | primary |
| Information density (assigned per region) | secondary |
| Typography (type as composition) | secondary |
| Design distinctiveness (anti-template) | secondary |

## Pass criteria

V0.2 passes the A/B test if, on at least 2 of 3 cases:

1. **Composition core improves by ≥8 points** (/40) over V0.1 on the same case, and
2. the output ships (or can state) a Composition Plan — anchor + budget + reading order — and
3. no regression on the V0.1 system categories (Color, Component Consistency, Information Density) beyond noise (±2 points per category).

V0.2 does **not** need to produce "perfect UI." It needs pages whose composition itself carries design intent.

## Reporting template

Per case, record:

```
Case: [A/B/C]
V0.1 total:  /100   composition core: /40
V0.2 total:  /100   composition core: /40
Anchor present (V0.1 / V0.2): yes/no · yes/no
Composition plan present (V0.2): yes/no
Regressions: [none / list]
Verdict: [pass / fail]
```
