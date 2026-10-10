# Critique and Taste Training

## Critique sequence

0. **Composition review first** — visual anchor, focal point, balance, proportion, asymmetry, density, whitespace, alignment, proximity, separation, rhythm, visual weight. Structural findings must never be drowned by system-level nits.
1. Overall diagnosis — one sentence, composition verdict first
2. Top three issues, ordered by impact
3. Composition vs structural vs visual vs system problems, separated
4. Art direction — keywords, anchors, constraints
5. Concrete changes — measurable or actionable
6. Why each major change works
7. Priority tags (P0–P3)
8. Compact Before → After when useful

Never invert this order. Concrete changes without diagnosis teach nothing; diagnosis without changes helps no one.

## Scoring rubric

100 points — a heuristic instrument for comparing iterations, not an objective law of beauty:

| Category | Points |
|---|---|
| Visual Hierarchy | /15 |
| Composition | /15 |
| Typography | /10 |
| Spatial Relationships | /10 |
| Layout Quality | /10 |
| Color System | /10 |
| Component Consistency | /10 |
| Information Density | /5 |
| Brand Identity | /5 |
| Interaction Quality | /5 |
| Responsive Design | /3 |
| Originality | /2 |

**Change note (v0.2.0 → v0.3.0):** weights re-specified by the V0.2.0 Dual-Mode requirements — Layout Quality and Component Consistency restored to /10 (they carry real execution signal once composition is first-class), Information Density 10→5, Responsive 5→3, Originality 5→2. Total remains 100. Composition + Visual Hierarchy + Spatial Relationships still form the 40-point composition core.

Bands:

| Score | Verdict |
|---|---|
| 90–100 | Excellent |
| 80–89 | Strong |
| 70–79 | Good but inconsistent |
| 60–69 | Needs significant improvement |
| <60 | Weak visual system |

Rules:

- Evidence for every sub-score — one line, pointing at something visible.
- Never score a design you haven't actually reviewed.
- No points for style alone; none for resemblance to a reference. Visually striking + poor readability/interaction/function → deduct explicitly.
- A score is a structured diagnostic instrument — it locates problems; it never substitutes for critique and never measures "objective beauty."
- When Composition + Visual Hierarchy + Spatial Relationships total ≤20/40, the verdict is "system-correct, composition-flat" regardless of the total.
- Arknights Mode runs extra checks (traceable references, abstraction not copying, no meaningless HUD, seven refusals) — reported separately, never added to the 100.

## Priorities

- **P0 — Must Fix.** Breaks hierarchy, readability, usability, accessibility, or brand identity. The design fails while this stands.
- **P1 — Strong Recommendation.** Materially improves the design. Skipping it keeps the design mediocre.
- **P2 — Polish.** Refinement of rhythm, spacing, or detail. Worth doing after P0/P1.
- **P3 — Optional.** A taste call. Always labeled as opinion, with reasoning.

## Design problems vs taste

Keep these separate in every review:

- **Design problems** violate principles: flat hierarchy, insufficient contrast, inconsistent tokens, inaccessible states, broken responsiveness, meaningless decoration. State as findings, with the principle violated.
- **Taste preferences** are legitimate choices among valid options: serif vs sans display, warm vs cool neutrals, sharp vs soft geometry. State as opinion, give reasoning and your pick, acknowledge the alternative.

Never present taste as objective failure. Never excuse a design problem as "just a style choice." This distinction is what separates an art director from a person with opinions.

## Strong critique language

Use precise language:

- "hierarchy is flat" — not "it feels boring"
- "component geometry is too soft for the intended identity"
- "accent is over-applied, so it signals nothing"
- "the layout is template-driven; composition was chosen before content"
- "metadata is competing with primary content"

Precision is teachable; vagueness is not.

## Taste training

When useful, end with a small exercise. Proven exercises:

- **Monochrome + one accent** — rebuild the page with no color but one accent; forces hierarchy through type and space
- **No-card composition** — same page, zero cards; typography, spacing, and dividers only
- **Two type sizes** — entire page in two sizes; forces role clarity through weight, case, and placement
- **One-column editorial** — reflow the page as a single editorial column; exposes which content actually matters
- **Three densities** — rebuild the same page sparse, balanced, dense; teaches what each density costs

The goal is to teach perception, not create dependence on the assistant.
