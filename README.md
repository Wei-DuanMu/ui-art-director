# UI Art Director

**Teach AI to see, critique, explain, and improve UI design.**

An AI Art Director skill for building distinctive, information-rich, industrial-futuristic interfaces.

---

## This is not a UI generator

Most AI UI tools work like this:

```
Prompt → Generate → Generate → Generate
```

UI Art Director works like an actual art director:

```
Observe → Understand → Diagnose → Explain → Direct → Improve
```

It is closer to:

- an **AI Art Director** that gives direction and defends it with reasoning
- a **UI Critic** that tells you what is wrong — and *why*
- a **Design System Consultant** that builds your visual system and guards it against drift
- a **Visual Design Teacher** that trains your own taste over time

If you want instant pretty pages, use a generator. If you want interfaces with hierarchy, identity, and intent — and want to understand why they work — use this.

## Features

- **UI Review** — structured diagnosis of visual hierarchy, typography, layout, composition, color, components, information density, brand identity, interaction, and responsive design
- **UI Improvement** — never "generate a prettier page"; always `Current UI → Diagnosis → Problems → Art Direction → Concrete Changes → Before/After`
- **Design System building** — color, typography, spacing, grid, radius, border, components, iconography, motion, responsive rules, and explicit Do / Don't
- **Screenshot Critique** — analyzes only what is visible in the image; never invents unseen details
- **Code Review** — visual-level review of React, Vue, Tailwind, CSS, and HTML: tokens, spacing consistency, typography, color, component reuse, responsive behavior, accessibility, maintainability
- **Responsive Review** — checks desktop / tablet / mobile, on the principle that *responsive design is not simply shrinking the desktop layout*
- **Design Drift Detection** *(experimental)* — compares new pages against your established design system: `Existing Design System → New Page → Compare → Detect Drift → Recommend Fixes`
- **Taste Training** — explains *why* something looks bad, with exercises, so you build your own judgment
- **Unified scoring** — a 100-point rubric with score bands, used to locate problems, never as a substitute for critique
- **Project Design Memory** — a persistent record of your product's visual identity across sessions

## Why?

AI UI generation has a taste problem. Ask for a dashboard and you get the same rounded cards, the same gradient hero, the same neon-on-dark "futurism," the same three-column SaaS landing page. The output is competent and completely interchangeable.

The root cause is not capability — it is that the AI was never taught to *look* before it *makes*. Real art directors don't start by generating. They start by observing, diagnosing, and directing. This skill encodes that working method, plus an original visual language to direct toward, plus the anti-patterns to steer away from.

The long-term goal:

```
UI Generator
    ↓
UI Critic
    ↓
AI Art Director
    ↓
AI Visual Design System
    ↓
AI Design Methodology
```

## Design Philosophy

Design decisions are made in a strict priority order. Lower layers never override higher ones:

```
Information Architecture
        ↓
Visual Hierarchy
        ↓
Usability
        ↓
Consistency
        ↓
Brand Identity
        ↓
Typography
        ↓
Color
        ↓
Decoration
```

> **If decoration conflicts with information architecture, information architecture wins.**

And the rule that governs every detail:

> **Decoration must have a reason.**

Every decorative element must communicate structure, state, orientation, or identity — or it gets removed.

## Visual Direction

The skill works in an **original** visual language: industrial-futurist editorial design. It is *informed by* the art-direction sensibilities of high-end game UI (industrial design, editorial design, technical terminals, restrained futurism) — but it copies nothing. No screenshots, logos, icons, character art, color recipes, layouts, or components from any specific game. The project abstracts design principles; it never imitates identifiable copyrighted work.

The Visual DNA:

| Keyword | What it means here |
|---|---|
| **Industrial** | Precision, engineering logic, functional structure, modularity, instrumentation — *not* random mechanical lines |
| **Editorial** | Typography as composition: large numerals, labels, annotations, grid, whitespace, asymmetry |
| **Technical** | Information design: units, states, coordinates, metadata — always with semantic purpose |
| **Futuristic** | Scientific, industrial, controlled, forward-looking — never neon, glow, cyberpunk, or random HUD |
| **Information-rich** | Density with hierarchy; metadata as visual material, not noise |
| **Precise** | Every value, edge, and interval is intentional |
| **Modular** | Reusable, composable structure instead of one-off pages |
| **Functional** | Form follows information and action |
| **Restrained** | Few accents, few effects, high signal |
| **Asymmetric** | Directed imbalance with hidden alignment logic underneath |
| **Structured** | Visible order: grid, rhythm, grouping |

## What It Can Do

### Modes

| Mode | Trigger | What happens |
|---|---|---|
| **UI Review** | "review this design" | Full diagnosis: top-3 problems, scoring, priorities, concrete changes |
| **Redesign** | "improve this page" | Diagnosis first, then art direction and Before → After |
| **New Page Direction** | "design a dashboard for…" | Art direction *before* implementation: anchors, hierarchy, keywords, constraints |
| **Design System** | "set up our design system" | Tokens + component rules + Do/Don't |
| **Screenshot Analysis** | you provide an image | Composition, hierarchy, type, spacing, color, components, density, brand, decoration — visible facts only |
| **Code Review** | you provide frontend code | Visual-system review of the implementation |
| **Responsive Review** | "does this work on mobile?" | Reprioritizes hierarchy per breakpoint |
| **Taste Training** | "why does this look bad?" | Principle explanation + a short exercise |
| **Project Continuity** | a design system exists | Drift detection against the established system |

### Example mode: Taste Training

```
Problem:
Too many cards.

Why:
Cardification destroys information hierarchy
and makes every piece of information look equally important.

Exercise:
Design the same page without cards.
Use typography, spacing, and dividers instead.
```

The goal is that you eventually need the skill less, not more.

## Installation

UI Art Director is an agent skill: a `SKILL.md` file plus references, templates, and examples. Install it wherever your agent reads skills.

### WorkBuddy

```bash
git clone https://github.com/Wei-DuanMu/ui-art-director.git
```

- User-level (all projects): copy the `ui-art-director` folder into `~/.workbuddy/skills/`
- Project-level (one project, shared with the team): copy it into `<project>/.workbuddy/skills/`

Restart the session, then invoke it with `/ui-art-director` or just describe a UI review task.

### Claude Code / Claude-compatible agents

- Personal: copy the folder into `~/.claude/skills/`
- Project: copy it into `<project>/.claude/skills/`

### Any other agent

Drop the folder into your agent's skill directory, or paste `SKILL.md` into your system prompt and keep `references/`, `templates/`, and `examples/` reachable as files. The skill reads only what it needs (progressive disclosure), so the folder layout matters more than the platform.

## Usage

```
/ui-art-director review this dashboard screenshot
```

```
/ui-art-director why does my settings page look so generic?
```

```
/ui-art-director help me set up a design system for an ops console
```

```
/ui-art-director review this React component's visual quality
```

Or just paste a screenshot, a Figma export description, or frontend code and ask what's wrong with it. The skill infers the mode from the request.

## Example

A fragment of a real review flow (full case studies live in `examples/`):

**Before** — a generic SaaS dashboard: six identical rounded metric cards, a gradient banner, neon accents on everything, three charts nobody reads.

**Diagnosis** — hierarchy is flat; decoration is compensating for the absence of a visual anchor; accent color is over-applied so it signals nothing.

**Direction** — industrial editorial: one dominant metric as the anchor, open sections instead of cards, one restrained accent family, mono/metadata type for system state.

**After** — the primary metric is 4× the scale of anything else, supporting metrics recede, sections are separated by rules and whitespace, one chart survives because it answers a real question.

**Why it works** — hierarchy creates the feeling of sophistication more reliably than effects do.

## Design Review Workflow

The default critique process:

1. One-sentence overall diagnosis
2. Top three problems, ordered by impact
3. Structural vs visual vs system problems, separated
4. A concise art direction
5. Concrete changes, measurable or actionable
6. Why each major change works
7. P0 / P1 / P2 / P3 priorities
8. A compact Before → After when useful

Scoring rubric (100 points):

| Category | Points |
|---|---|
| Visual Hierarchy | /15 |
| Typography | /15 |
| Layout & Composition | /15 |
| Color System | /10 |
| Component Consistency | /10 |
| Information Density | /10 |
| Brand Identity | /10 |
| Interaction Design | /5 |
| Responsive Design | /5 |
| Originality | /5 |

Bands: **90–100** Excellent · **80–89** Strong · **70–79** Good but inconsistent · **60–69** Needs significant improvement · **<60** Weak visual system

> Scores exist to locate problems. They are never the point of a review.

Priorities: **P0** Must Fix · **P1** Strong Recommendation · **P2** Polish · **P3** Optional (taste call, labeled as opinion).

## Project Design Memory

For long-running products, the skill maintains a design memory (`templates/project-memory.md`): brand personality, visual keywords, design philosophy, color palette, typography, grid, spacing, border/radius, iconography, component rules, motion, responsive rules, Do/Don't, and known drift risks. New pages are reviewed *against* this memory, so page 40 looks like it belongs with page 1.

## Roadmap

Status legend: ✅ Implemented · 🧪 Experimental · 📋 Planned

| Version | Status | Focus |
|---|---|---|
| **v0.1.0** | ✅ Current | Core skill: review workflow, scoring rubric, P0–P3 priorities, 9 references, 5 templates, 4 examples |
| — | 🧪 Experimental | Design drift detection and project design memory (manual workflow via template) |
| **v0.2.0** | 📋 Planned | Visual grammar: 40–60 executable visual rules (Rule + Reason); improved review rubric |
| **v0.3.0** | 📋 Planned | Case study system: more Before/After examples; taste-training exercise library |
| **v0.4.0** | 📋 Planned | Stronger design-drift detection and project-memory tooling |
| **v0.5.0** | 📋 Planned | Better screenshot analysis; deeper code review |
| **v1.0.0** | 📋 Planned | Stable UI art direction methodology |

Nothing in a 📋 row is implemented yet. Contributions that pull a row toward ✅ are welcome.

## Repository Layout

```
ui-art-director/
├── SKILL.md                      # The skill itself
├── README.md
├── LICENSE                       # MIT
├── CHANGELOG.md
├── CONTRIBUTING.md
├── references/                   # Loaded on demand (progressive disclosure)
│   ├── visual-language.md
│   ├── layout-and-composition.md
│   ├── typography.md
│   ├── color-system.md
│   ├── components.md
│   ├── data-visualization.md
│   ├── motion-and-responsive.md
│   ├── critique-and-taste.md
│   └── anti-patterns.md
├── templates/                    # Reusable review output formats
│   ├── ui-review.md
│   ├── design-system.md
│   ├── screenshot-review.md
│   ├── code-review.md
│   └── project-memory.md
└── examples/                     # Case studies: reasoning references, not designs to copy
    ├── bad-dashboard.md
    ├── over-cardified-ui.md
    ├── redesign-example.md
    └── good-dashboard.md
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). The short version: every visual rule must explain not only **what**, but **why**.

## License

[MIT](LICENSE) © 2026 UI Art Director contributors
