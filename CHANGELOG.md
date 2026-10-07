# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

Planned, not yet implemented. See the Roadmap in README.md for status definitions.

### Planned for v0.3.0
- Case study system expansion; structured taste-training exercise library
- A/B test results (docs/ab-test-v0.2.md) incorporated

### Planned for v1.0.0
- Stable UI art direction methodology

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
