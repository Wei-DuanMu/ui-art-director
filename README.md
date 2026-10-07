# UI Art Director

**Teach AI to see, critique, explain, compose, direct, and improve UI design.**

An AI Art Director skill for building distinctive, information-rich, industrial-futuristic interfaces.

> **V0.2 — From Critic to Design Director.** V0.1 could explain good design better than it could produce it: token-correct, component-correct, composition-flat. V0.2 puts **Composition First**: visual anchors, attention budgets, spatial relationships, and visual weight are decided before components, tokens, or code — and checked against the render after it.

---

## This is not a UI generator

Most AI UI tools work like this:

```
Prompt → Tokens → Components → Code → (flat page, professionally styled)
```

UI Art Director works like an actual art director:

```
Understand → Compose → Prioritize → Direct → Implement → Critique → Iterate
```

It is closer to:

- an **AI Art Director** that gives direction and defends it with reasoning
- a **UI Critic** that tells you what is wrong — and *why*
- a **Design System Consultant** that builds your visual system and guards it against drift
- a **Visual Design Teacher** that trains your own taste over time

If you want instant pretty pages, use a generator. If you want interfaces with hierarchy, identity, and intent — and want to understand why they work — use this.

## Features

**Composition (V0.2):**

- **Composition Planning** — before any complex UI: visual anchor, secondary focus, supporting info, utility info, decoration budget
- **Visual Attention Budget** — Primary 35–45% / Secondary 20–30% / Supporting 15–25% / Utility 5–15% / Decoration 0–5%; warns when attention is spent on low-value elements
- **Composition Grammar** — 7 reusable layout patterns (Dominant+Supporting, Asymmetric Split, Editorial Stack, Full-width Anchor, Dense Utility Rail, Open Field+Data Cluster, Layered Information Plane)
- **Visual Weight system** — 10 weight factors, weight audits, prominence by subtraction
- **Focal Point rules** — one primary anchor per viewport; the five-equal-zones check
- **Typography as Composition** — type as construction material; anchors without containers
- **Multiple Composition Exploration** — Direction A/B/C compared on strength/weakness/best-for/risk, then one is chosen
- **Intent → Decision → Effect** — every design decision traceable to a testable effect
- **Execution Gap Analysis + Self-Critique Loop** — compares rendered output against stated design intent, grades the gap, revises

**Critique (V0.1, preserved):**

- **UI Review** — composition review first, then structured diagnosis of hierarchy, typography, color, components, density, brand, interaction, responsive
- **UI Improvement** — never "generate a prettier page"; always `Current UI → Diagnosis → Problems → Art Direction → Concrete Changes → Before/After`
- **Design System building** — color, typography, spacing, grid, radius, border, components, iconography, motion, responsive rules, and explicit Do / Don't
- **Screenshot Critique** — analyzes only what is visible in the image; never invents unseen details
- **Code Review** — visual-level review of React, Vue, Tailwind, CSS, and HTML
- **Responsive Review** — checks desktop / tablet / mobile, on the principle that *responsive design is not simply shrinking the desktop layout*
- **Design Drift Detection** *(experimental)* — compares new pages against your established design system
- **Taste Training** — explains *why* something looks bad, with exercises
- **Unified scoring** — a 100-point rubric (rebalanced for V0.2) with score bands, used to locate problems
- **Project Design Memory** — a persistent record of your product's visual identity, composition conventions, and drift risks

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
Composition
        ↓
Visual Hierarchy
        ↓
Spatial Relationships
        ↓
Typography
        ↓
Components
        ↓
Design Tokens
        ↓
Decoration
```

> **Tokens describe the system. Composition creates the experience.**
>
> If decoration conflicts with information architecture, information architecture wins.

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
| **Composition Plan** | "design a page for…" | Anchor, attention budget, grammar, spatial/weight/type plans — before any implementation |
| **UI Review** | "review this design" | Composition review first, then full diagnosis: top-3 problems, scoring, priorities, concrete changes |
| **Redesign** | "improve this page" | Diagnosis first, then art direction and Before → After |
| **Design System** | "set up our design system" | Tokens + component rules + Do/Don't (after composition needs are known) |
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

### DeepSeek Harness (DSH)

This repository is itself a DSH **bundle**: `package.json` declares `dsh.bundle.patch`, so the plugin manager can install it directly. It is a zero-dependency, build-free plugin — the skill body ships inside the package and registers itself on `ctx.skills`.

**Install from GitHub** (desktop: paste into the add-plugin field; CLI below):

```bash
dsh plugin --profile desktop add github:Wei-DuanMu/ui-art-director
```

No build-script permission is needed: the plugin ships ready-to-run JavaScript, so pnpm has nothing to allow.

**Install from a tarball** (no git, no registry):

```bash
# dsh-skill-ui-art-director-<version>.tgz is attached to each GitHub release
dsh plugin --profile desktop add ./dsh-skill-ui-art-director-0.1.2.tgz
```

**Install from a local clone:** `dsh plugin --profile desktop add <path-to>/ui-art-director`

After the install completes, enable the new bundle in the plugin list (the install dialog offers **Enable now**).

**No install at all** — DSH also discovers plain skill folders. Copy `SKILL.md`, `references/`, `templates/`, and `examples/` into either:

| Level | Path |
|---|---|
| user | `~/.dsh/skills/ui-art-director/` (Windows: `%USERPROFILE%\.dsh\skills\ui-art-director\`) |
| project | `<project>/.dsh/skills/ui-art-director/` |

This route needs no plugin machinery at all — the skill is discovered on the next session.

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

For builds, the full V0.2 workflow:

```
User Intent → Information Architecture → Visual Intent → Visual Anchor
→ Composition → Spatial Relationships → Visual Weight → Typography
→ Components → Design Tokens → Code → Screenshot/Render
→ Composition Review → Design Review → Execution Gap → Iterate
```

For reviews, composition is checked first so structural findings are never drowned by system-level nits:

0. **Composition Review** — anchor, focal point, balance, proportion, asymmetry, density, whitespace, alignment, proximity, separation, rhythm, visual weight
1. One-sentence overall diagnosis (composition verdict first)
2. Top three problems, ordered by impact
3. Composition vs structural vs visual vs system problems, separated
4. A concise art direction
5. Concrete changes, measurable or actionable
6. Why each major change works
7. P0 / P1 / P2 / P3 priorities
8. A compact Before → After when useful

Scoring rubric (100 points, V0.2):

| Category | Points |
|---|---|
| Visual Hierarchy | /15 |
| Composition | /15 |
| Typography | /10 |
| Spatial Relationships | /10 |
| Color System | /10 |
| Information Density | /10 |
| Layout | /5 |
| Component Consistency | /5 |
| Brand Identity | /5 |
| Interaction Design | /5 |
| Responsive Design | /5 |
| Originality | /5 |

Bands: **90–100** Excellent · **80–89** Strong · **70–79** Good but inconsistent · **60–69** Needs significant improvement · **<60** Weak visual system

> Scores exist to locate problems. They are never the point of a review. When Composition + Visual Hierarchy + Spatial Relationships total ≤20/40, the verdict is "system-correct, composition-flat" regardless of the total.

Priorities: **P0** Must Fix · **P1** Strong Recommendation · **P2** Polish · **P3** Optional (taste call, labeled as opinion).

## Project Design Memory

For long-running products, the skill maintains a design memory (`templates/project-memory.md`): brand personality, visual keywords, design philosophy, color palette, typography, grid, spacing, border/radius, iconography, component rules, motion, responsive rules, Do/Don't, and known drift risks. New pages are reviewed *against* this memory, so page 40 looks like it belongs with page 1.

## Evaluation

**V0.1 (preserved baseline):** Design Evaluation 15/21 · Skill Capability 8/9. Strengths: diagnosis, design-system analysis, critique workflow. Failure mode: *token-correct, component-correct, composition-flat* — design reasoning stronger than design execution.

**V0.2:** designed to move the composition axis. A/B test protocol (3 cases: AI developer workspace, information-rich dashboard, AI product landing page; composition core /40 tracked separately) lives in [docs/ab-test-v0.2.md](docs/ab-test-v0.2.md). Results will be recorded here once run.

## Roadmap

Status legend: ✅ Implemented · 🧪 Experimental · 📋 Planned

| Version | Status | Focus |
|---|---|---|
| **v0.1.0** | ✅ | Core skill: review workflow, scoring rubric, P0–P3 priorities, 9 references, 5 templates, 4 examples |
| **v0.1.2** | ✅ | DSH bundle packaging (installable via plugin manager) |
| — | 🧪 Experimental | Design drift detection and project design memory (manual workflow via template) |
| **v0.2.0** | ✅ Current | **Composition First**: composition grammar (7 patterns), attention budget, visual weight, focal point rules, spatial relationships, typography-as-composition, execution gap + self-critique loop, rebalanced 100-point rubric, composition plan template, 8 new examples |
| **v0.3.0** | 📋 Planned | Case study system expansion; structured taste-training exercise library; A/B test results incorporated |
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
│   ├── composition-grammar.md    # ── V0.2 composition layer ──
│   ├── spatial-relationships.md
│   ├── visual-weight.md
│   ├── focal-point.md
│   ├── typography-as-composition.md
│   ├── execution-gap.md
│   ├── visual-language.md        # ── system layer ──
│   ├── layout-and-composition.md
│   ├── typography.md
│   ├── color-system.md
│   ├── components.md
│   ├── data-visualization.md
│   ├── motion-and-responsive.md
│   ├── critique-and-taste.md
│   └── anti-patterns.md
├── templates/                    # Reusable review output formats
│   ├── composition-plan.md       # V0.2: plan before building
│   ├── ui-review.md
│   ├── design-system.md
│   ├── screenshot-review.md
│   ├── code-review.md
│   └── project-memory.md
├── examples/
│   ├── composition/              # V0.2: the 7 grammars in action (5 shown)
│   ├── before-after/             # V0.2: bad composition → good composition
│   ├── bad-dashboard.md          # V0.1 case studies
│   ├── over-cardified-ui.md
│   ├── redesign-example.md
│   └── good-dashboard.md
├── docs/
│   └── ab-test-v0.2.md           # V0.1 vs V0.2 A/B test protocol
├── package.json                  # DSH bundle manifest (dsh.bundle.patch) + npm package
├── cordis.patch.yml              # DSH bundle layer: mounts the plugin on ctx.skills
└── lib/
    └── index.js                  # Zero-dependency Cordis plugin: registers the skill provider
```

The skill content at the repository root **is** the plugin payload — there is no duplicated copy to keep in sync.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). The short version: every visual rule must explain not only **what**, but **why**.

## License

[MIT](LICENSE) © 2026 UI Art Director contributors
