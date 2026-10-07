# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

Planned, not yet implemented. See the Roadmap in README.md for status definitions.

### Planned for v0.2.0
- Visual grammar: 40–60 executable visual rules, each stated as Rule + Reason
- Improved review rubric with per-category diagnostic questions

### Planned for v0.3.0
- Case study system: more before/after examples across product types
- Structured taste-training exercise library

### Planned for v1.0.0
- Stable UI art direction methodology

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
