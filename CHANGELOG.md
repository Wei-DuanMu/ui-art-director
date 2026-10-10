# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

Nothing yet. See the Roadmap in README.md for status definitions.

## [0.3.0] — 2026-10-10

Dual Mode + Execution First. (This is the release described in the v0.3.0 planning notes as "V0.2.0"; the number moved because v0.2.0 Composition First had already shipped.)

### Added — dual mode

- **Two visual modes** — `general` (default) and `arknights`, specified in `SKILL.md` §1. No third mode.
- **Mode resolution order** — task requirement > project config > session setting > default. Higher rungs win; the first match decides.
- **Mode isolation contract** — shared engineering layer (IA, behaviour, accessibility), separate visual layer (color, geometry, label vocabulary, texture). Switching mode changes style and never removes capability.
- **Reference sets split by mode** — `references/general/` (16 files) and `references/arknights/` (10 files). The split is structural: a rule in one mode's set cannot leak into the other because it is not in the other's load set.
- `references/arknights/` — mode overview with **seven refusals** (no HUD line-stuffing, no meaningless numbers, no neon abuse, no decorative borders, no everything-is-a-panel, no screenshot copying, complexity ≠ quality), plus visual language, color, typography, geometry, components, information hierarchy, motion, and four page patterns (P1 Operations Console / P2 Dossier / P3 Workbench / P4 Status Gate).
- **Four-level source tagging** — `[OBSERVED]` / `[GENERALIZED]` / `[INFERRED]` / `[ORIGINAL]`, with `references/arknights/reference-index.md` as a public evidence ledger. Verified: the S1 homepage. Partial: S2 (dynamic, locally 502). Unanalyzed: S3 (12 video links, contents not reviewed). **Excluded: S4 — verified reachable but it is a Photoshop tutorial, not UI analysis.**
- `config/mode-config.example.yaml` — project-level mode selection.
- `references/general/accessibility.md` — contrast, focus visibility, touch targets, motion safety, semantics, text alternatives. Accessibility findings are never P3.
- `templates/design-decision-record.md` — goal, observed problem, composition strategy, spatial/weight plan, implementation, acceptance criteria, result.
- `examples/mode-switching.md` — General → Arknights → General worked example.
- `docs/mode-selection.md`, `docs/reference-methodology.md`.

### Added — Execution First

- **§15 Execution discipline** — an 8-step loop that requires editing real code, running it, rendering it, and grading the gap before reporting success.
- **Run/Render Verification** clause — a verification claim must name what was actually rendered.
- **Honest verification scope** — when the environment cannot render or run, the skill states the achieved scope and lists unverified steps. Inventing verification results is now an explicit violation.

### Changed

- **Working loop** is now `Understand → Compose → Prioritize → Direct → Implement → Verify → Critique → Iterate` — `Verify` is new and sits between implementation and critique.
- **Scoring rebalanced to 100** — Layout Quality 10 and Component Consistency 10 (previously demoted in v0.2) are restored as first-class dimensions; Information Density and Responsive Design yield a point each to Density 5 / Responsive 3. Arknights-mode checks are scored separately and never inflate the 100.
- `references/critique-and-taste.md` updated to the v0.3 rubric.
- `templates/ui-review.md` — mode row, 12-check Composition Review, v0.3 rubric, plus four Arknights-specific checks marked as outside the 100.
- `templates/project-memory.md` — composition conventions (default grammar, anchor conventions, budget rules, rail rules).
- `examples/good-dashboard.md` updated for the new rubric.

### Evaluation — real, not promised

- `evaluation/` with four test groups, original hand-written HTML/CSS sandbox pages, and headless-Edge screenshots.
  - **Test A** (General AI dev workspace): 79/100. Two real defects found by looking at the render — an under-filled anchor region and an illegible DONE row.
  - **Test B** (same brief, Arknights register): 79/100. Three render iterations to fit the viewport without losing the composer. Zero mode leakage in either direction.
  - **Test C** (mode switching): visual isolation demonstrated; **configuration-driven precedence NOT RUN** and marked as such.
  - **Test D** (execution quality): 51 → 75/100 across four rounds, composition core 20/40 → 36/40, clearing the `composition-flat` verdict.
- `evaluation/README.md` — method and binding honesty rules: no score without a rendered artifact, no verified claim without a method, unfinished work marked unfinished.

### Honest findings recorded rather than smoothed over

- **Test D needed two wrong fixes before converging.** Both came from treating a symptom as a factor — a void treated as a height problem, and an over-loud sparkline treated as a size problem when it was a contrast problem. The rule was already written in `execution-gap.md` and was still violated on the first honest attempt. A documented rule that gets violated is not yet an internalized rule.
- **Mode precedence rungs 2–4 are specified but unvalidated.** All switching in v0.3.0 was driven from the task instruction, the top rung. Tracked as the first v0.4.0 task.
- **Interaction and responsive scores are near-floor and near-meaningless.** Static screenshots cannot evidence them; they are reported as absence of evidence, not as proof.

## [0.2.0] - 2026-10-08

**From Critic to Design Director.** V0.1 testing (Design Evaluation 15/21, Skill Capability 8/9) showed the skill could explain good design better than it could produce it: token-correct, component-correct, composition-flat. V0.2 puts Composition First — composition is decided before components, tokens, or code, and checked against the render after it.

### Added
- **Composition Planning stage** (SKILL.md §4): visual anchor, secondary focus, supporting info, utility info, decoration budget — answered before any complex UI
- **Visual Attention Budget**: Primary 35–45% / Secondary 20–30% / Supporting 15–25% / Utility 5–15% / Decoration 0–5%, with a low-value-spend warning
- **Composition Grammar** (`references/composition-grammar.md`): 7 patterns (Dominant+Supporting, Asymmetric Split, Editorial Stack, Full-width Anchor, Dense Utility Rail, Open Field+Data Cluster, Layered Information Plane), each with Structure/Purpose/Best For/Visual Effect/Risks/Anti-pattern/Example
- **Spatial Relationship rules** (`references/spatial-relationships.md`): proximity, separation, alignment, density, breathing room; every distance must justify itself
- **Visual Weight system** (`references/visual-weight.md`): 10 weight factors, weight audits, prominence by subtraction
- **Focal Point rules** (`references/focal-point.md`): one primary anchor per viewport; the five-equal-zones check
- **Typography as Composition** (`references/typography-as-composition.md`): type roles as compositional instruments; anchors without containers
- **Execution Gap analysis + Self-Critique Loop** (`references/execution-gap.md`): compare rendered output against stated intent, grade the gap, revise factors not direction
- **Multiple Composition Exploration** (SKILL.md §5): Direction A/B/C compared before choosing
- **Intent → Decision → Effect mapping** (SKILL.md §6): no untraceable design decisions
- **Composition Review** runs before the classic design review (SKILL.md §9)
- `templates/composition-plan.md`: the pre-build plan, including direction exploration and post-implementation checks
- 8 new examples: `examples/composition/` (5 patterns applied to fictional products) and `examples/before-after/` (cardification, weak hierarchy, weak composition — bad composition → good composition, not color swaps)
- `docs/ab-test-v0.2.md`: V0.1 vs V0.2 A/B test protocol (3 cases, composition core tracked separately)
- README: Evaluation section (V0.1 baseline preserved)

### Changed
- **Design priority stack**: IA → Composition → Visual Hierarchy → Spatial Relationships → Typography → Components → Design Tokens → Decoration. Tokens are no longer a starting point.
- **Scoring rubric rebalanced** (see note in `references/critique-and-taste.md`): adds Composition /15 and Spatial Relationships /10; Layout 10→5 (absorbed into Composition); Component Consistency 10→5 (components are means, not ends); Typography 15→10; Brand Identity 10→5. Total remains 100. Composition core (VH+Composition+Spatial) ≤20/40 now yields the verdict "system-correct, composition-flat" regardless of total.
- **Working loop**: Understand → Compose → Prioritize → Direct → Implement → Critique → Iterate (was Observe → Understand → Diagnose → Explain → Direct → Improve)
- `templates/ui-review.md`: Composition Review checklist + rebalanced score table
- `templates/project-memory.md`: composition conventions (grammar, anchor, budget norms)
- `references/layout-and-composition.md`: scope narrowed to layout mechanics; composition decisions moved to the new composition layer
- SKILL.md frontmatter: description now includes composition-first direction

### Preserved from V0.1
Design system building, color/typography/spacing/grid/radius/border/component rules, all review modes, anti-pattern detection, taste training, project memory, P0–P3 priorities, design-problem vs taste distinction, DSH bundle packaging.

## [0.1.2] - 2026-10-08

Fixes DSH installation. Thanks to the first report.

### Fixed
- **DSH plugin installation rejected the package.** The plugin manager refused the install because the package did not declare a DSH bundle — per DSH's own documentation, "a package without the `dsh.bundle` declaration still installs, but only as a plain dependency: activates no layer". Added the `dsh.bundle.patch` manifest and `cordis.patch.yml` layer, so `dsh plugin add github:Wei-DuanMu/ui-art-director` now installs a real, mountable bundle.

### Changed
- **The repository root is now the plugin package.** Previously the plugin lived in `dsh-plugin/` with a generated copy of the skill content, which required a sync step and shipped the content twice. The plugin entry now lives at `lib/index.js` and reads `SKILL.md`, `references/`, `templates/`, and `examples/` from the package root.
- Removed `dsh-plugin/` and `scripts/sync-dsh-assets.mjs` (and with them the duplicated assets).
- README: corrected DeepSeek Harness install instructions (GitHub / tarball / local clone / filesystem skill) and repository layout.

## [0.1.1] - 2026-10-08

Distribution release — no methodology changes.

### Added
- `dsh-plugin/`: DeepSeek Harness (DSH) plugin packaging — a zero-dependency Cordis plugin (`dsh-skill-ui-art-director`) that registers the skill as a bundled `SkillProvider` on `ctx.skills`, installable from the DSH desktop plugin manager or CLI by local path
- `scripts/sync-dsh-assets.mjs`: regenerates `dsh-plugin/assets/` from the canonical skill content (run after any skill edit)
- README: DeepSeek Harness installation section (plugin route and filesystem-skill route); repository layout updated

## [0.1.0] - 2026-10-08

Initial open-source release.

### Added
- `SKILL.md` — core skill definition with the Observe → Understand → Diagnose → Explain → Direct → Improve working loop
- Nine working modes: UI Review, Redesign, New Page Direction, Design System, Screenshot Analysis, Code Review, Responsive Review, Taste Training, Project Continuity
- 100-point review rubric with score bands (Excellent / Strong / Good but inconsistent / Needs significant improvement / Weak visual system)
- P0–P3 priority system for findings
- Explicit distinction between design problems and taste preferences
- Nine references: visual language, layout & composition, typography, color system, components, data visualization, motion & responsive, critique & taste, anti-patterns
- Five templates: UI review, design system, screenshot review, code review, project design memory
- Four original examples: generic SaaS dashboard redesign, over-cardified UI redesign, generic AI landing page redesign, and an anatomy of a strong dashboard
- Project design memory format for long-term visual identity and experimental design-drift detection
- MIT License, contributing guide, and roadmap (v0.2 → v1.0)
