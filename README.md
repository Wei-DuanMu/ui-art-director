# UI Art Director

**Teach AI to see, critique, explain, compose, direct, implement, and improve UI design.**

An AI Art Director skill for building distinctive, information-rich interfaces — in a product-appropriate register, or in an industrial-signal register with traceable rules.

> **V0.3 — Dual Mode + Execution First.** V0.2 could reason about composition better than it could execute it. V0.3 closes two gaps: **two explicit modes** (a general product register and an Arknights-inspired industrial register, each with its own rule files and its own refusals), and **Execution First** — the skill is expected to actually change code, render it, look at the render, and grade its own gap before claiming success.

---

## Nine questions, answered up front

| # | Question | Answer |
|---|---|---|
| 1 | **What is this?** | An agent skill (a `SKILL.md` plus references, templates, examples) that makes an AI work like a UI art director and a UI critic. |
| 2 | **What does it actually do?** | Runs a fixed loop: Understand → Compose → Prioritize → Direct → Implement → Verify → Critique → Iterate. It plans composition before code and checks the render against the plan. |
| 3 | **Is it a UI generator?** | No. It will not produce a pretty page from a sentence. It produces direction with reasoning, and critiques what you built. |
| 4 | **What are the modes?** | `general` (default) and `arknights`. Two, not more. They differ in visual decisions only — never in capability. |
| 5 | **How do I choose a mode?** | Task instruction beats project config beats session setting beats the default. Default is `general`. See [docs/mode-selection.md](docs/mode-selection.md). |
| 6 | **Is this affiliated with Arknights or Hypergryph?** | **No.** This is an unofficial, independent project. See the notice below. |
| 7 | **What platforms are verified?** | DeepSeek Harness and WorkBuddy only. Other hosts are plausible, not tested. See the compatibility note. |
| 8 | **Can I trust its visual claims?** | References carry source tags (`[OBSERVED]` / `[GENERALIZED]` / `[INFERRED]` / `[ORIGINAL]`) and `references/arknights/reference-index.md` is a public ledger of what was and was not verified. |
| 9 | **What is the evidence it works?** | `evaluation/` — four test groups, original HTML/CSS pages, real headless-browser screenshots, real scores including the failures. |

---

## Non-affiliation notice

**This project is unofficial and independent.** It is not affiliated with, endorsed by, sponsored by, or connected to Hypergryph, Yostar, or any game related to *Arknights*. Arknights is a trademark of its respective owner. This repository contains no game assets, logos, artwork, fonts, audio, or extracted content, and its "arknights" mode is an original set of design rules abstracted from general principles of industrial-signal interface design. Any resemblance in register is the result of following shared design conventions, not of copying.

---

## Verified compatibility

| Host | Status | Evidence |
|---|---|---|
| **DeepSeek Harness (DSH)** | ✅ Verified | Bundle install via `dsh plugin add github:Wei-DuanMu/ui-art-director`; plain-skill folder install into `~/.dsh/skills/` |
| **WorkBuddy** | ✅ Verified | Skill folder copied to `~/.workbuddy/skills/`, invoked as `/ui-art-director` |
| Claude Code / compatible agents | ⚠️ Expected, untested | Follows the same `SKILL.md` + folder convention; not verified in this repo |
| Other agents | ⚠️ Expected, untested | Same caveat — the layout convention is portable, but only DSH and WorkBuddy were actually run |

The two verified rows are the only ones this project claims. Everything else is a reasonable inference from the skill-folder convention, and is labelled as such rather than advertised as supported.

---

## This is not a UI generator

Most AI UI tools work like this:

```
Prompt → Tokens → Components → Code → (flat page, professionally styled)
```

UI Art Director works like an actual art director:

```
Understand → Compose → Prioritize → Direct → Implement → Verify → Critique → Iterate
```

It is closer to:

- an **AI Art Director** that gives direction and defends it with reasoning
- a **UI Critic** that tells you what is wrong — and *why*
- a **Design System Consultant** that builds your visual system and guards it against drift
- a **Visual Design Teacher** that trains your own taste over time

If you want instant pretty pages, use a generator. If you want interfaces with hierarchy, identity, and intent — and want to understand why they work — use this.

## Features

**Dual mode (V0.3):**

- **Two modes, not a theme switcher** — `general` and `arknights`, each with its own reference set under `references/<mode>/`, its own composition defaults, and its own refusal list
- **Mode resolution chain** — task requirement > project config (`config/mode-config.yaml`) > session setting > default `general`
- **Mode isolation contract** — shared engineering layer (IA, behaviour, accessibility), separate visual layer (color, geometry, label vocabulary, texture). Switching never removes a capability
- **Four-level source tagging** — `[OBSERVED]` / `[GENERALIZED]` / `[INFERRED]` / `[ORIGINAL]`, with a public evidence ledger
- **Seven refusals in Arknights mode** — no HUD line-stuffing, no meaningless numbers, no neon abuse, no decorative borders, no everything-is-a-panel, no screenshot copying, and an explicit acknowledgment that decorative complexity is not quality

**Execution First (V0.3):**

- **Execution discipline** — the skill edits real code, runs it, captures a render, and reports what it sees
- **Run/Render Verification** — verification claims must name what was actually rendered
- **Honest verification scope** — when the environment cannot render or run, the skill says so and lists the unverified steps instead of inventing results
- **Design Decision Record** template — goal, observed problem, composition strategy, implementation, acceptance criteria, result

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
- **Accessibility review** *(v0.3)* — contrast, focus visibility, touch targets, motion safety, semantics, and text alternatives. An accessibility finding is **never** downgraded to P3
- **Screenshot Critique** — analyzes only what is visible in the image; never invents unseen details
- **Code Review** — visual-level review of React, Vue, Tailwind, CSS, and HTML
- **Responsive Review** — checks desktop / tablet / mobile, on the principle that *responsive design is not simply shrinking the desktop layout*
- **Design Drift Detection** *(experimental)* — compares new pages against your established design system
- **Taste Training** — explains *why* something looks bad, with exercises
- **Unified scoring** — a 100-point rubric (rebalanced for V0.3) with score bands, used to locate problems
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

The skill does not have one visual language. It has two modes, and each carries its own.

### General mode — product-appropriate professional UI

The default, and not a compromise. Restrained neutrals, a single rationed accent, typography carrying hierarchy, flat planes over nested frames, density with a clear ranking. A finance dashboard, an ops console, and a developer tool all live here without looking like the same product.

General mode is **not** safe-and-bland. "Professional" is a composition standard, not a visual ceiling — the bar is a decisive anchor, honest weighting, and no decoration without a reason.

### Arknights mode — industrial-signal register

A **discipline** for industrial-signal interfaces: matte ground, one rationed signal color, geometric honesty (chamfers, chevrons, ticks with semantic assignments), serial section labelling, dense but ranked information, metadata treated as honesty.

Seven refusals keep it from becoming decoration: no HUD line-stuffing, no meaningless numbers, no neon abuse, no decorative borders, no everything-is-a-panel, no screenshot copying, and the explicit admission that **decorative complexity is not quality** — that is this mode's characteristic failure.

Source provenance is tracked, not assumed. Every rule is tagged `[OBSERVED]` / `[GENERALIZED]` / `[INFERRED]` / `[ORIGINAL]`, and [`references/arknights/reference-index.md`](references/arknights/reference-index.md) records which sources were verified, which were only partially reachable, and which remain an open verification queue. Method: [docs/reference-methodology.md](docs/reference-methodology.md).

### What both modes share

The 11-word Visual DNA that describes the family:

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

No screenshots, logos, icons, artwork, fonts, or extracted content from any specific product or game. The project abstracts design principles; it never imitates identifiable copyrighted work.

## What It Can Do

### Visual modes

| Mode | Selected by | Visual outcome |
|---|---|---|
| **`general`** | Default; or task/config/session says so | Product-appropriate professional UI |
| **`arknights`** | Task instruction, or `ui_art_director.mode: arknights` in `config/mode-config.yaml` | Matte industrial register: serial labels, chamfers, rationed amber signal |

Resolution order, full decision table, and the isolation contract: [docs/mode-selection.md](docs/mode-selection.md).

### Workflow modes

| Mode | Trigger | What happens |
|---|---|---|
| **Composition Plan** | "design a page for…" | Anchor, attention budget, grammar, spatial/weight/type plans — before any implementation |
| **UI Review** | "review this design" | Composition review first, then full diagnosis: top-3 problems, scoring, priorities, concrete changes |
| **Redesign** | "improve this page" | Diagnosis first, then art direction and Before → After |
| **Design System** | "set up our design system" | Tokens + component rules + Do/Don't (after composition needs are known) |
| **Build** | "implement this design" | **Execution First**: edit code → run → render → compare to intent → grade gap → fix the factor, not the direction |
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
dsh plugin --profile desktop add ./dsh-skill-ui-art-director-0.3.0.tgz
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

Or just paste a screenshot, a Figma export description, or frontend code and ask what's wrong with it. The skill infers the workflow from the request.

**Selecting a visual mode:** just ask, or set it once per project:

```bash
cp config/mode-config.example.yaml config/mode-config.yaml
# then edit ui_art_director.mode
```

```
/ui-art-director redo this console in the arknights mode
```

An explicit request in the task always wins over the config file.

## Example

A fragment of a real review flow (full case studies live in `examples/`):

**Before** — a generic SaaS dashboard: six identical rounded metric cards, a gradient banner, neon accents on everything, three charts nobody reads.

**Diagnosis** — hierarchy is flat; decoration is compensating for the absence of a visual anchor; accent color is over-applied so it signals nothing.

**Direction** — industrial editorial: one dominant metric as the anchor, open sections instead of cards, one restrained accent family, mono/metadata type for system state.

**After** — the primary metric is 4× the scale of anything else, supporting metrics recede, sections are separated by rules and whitespace, one chart survives because it answers a real question.

**Why it works** — hierarchy creates the feeling of sophistication more reliably than effects do.

## Design Review Workflow

For builds, the full V0.3 workflow:

```
User Intent → Information Architecture → Visual Intent → Visual Anchor
→ Composition → Spatial Relationships → Visual Weight → Typography
→ Components → Design Tokens → Code → Run/Render
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

Scoring rubric (100 points, V0.3):

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
| Interaction Design | /5 |
| Responsive Design | /3 |
| Originality | /2 |

Bands: **90–100** Excellent · **80–89** Strong · **70–79** Good but inconsistent · **60–69** Needs significant improvement · **<60** Weak visual system

> Scores exist to locate problems. They are never the point of a review. When Composition + Visual Hierarchy + Spatial Relationships total ≤20/40, the verdict is "system-correct, composition-flat" regardless of the total.

Priorities: **P0** Must Fix · **P1** Strong Recommendation · **P2** Polish · **P3** Optional (taste call, labeled as opinion). Accessibility findings are never P3.

**Arknights mode adds four checks that are *not* counted in the 100:** traceable references per the evidence ledger, abstraction rather than copying, no meaningless HUD decoration, and the seven refusals holding.

## Execution First

V0.2's diagnosis was blunt: Design Reasoning was stronger than Design Execution. The rules existed; the output did not improve as much as it should have. V0.3 makes execution explicit.

The loop when asked to build or change a UI:

1. State the composition intent before touching code
2. Change the real code, not a description of the change
3. Run it. Render it. Screenshot it if possible.
4. **Say what is actually visible** — never describe a page you did not render
5. Compare render against stated intent
6. Grade the gap: `none` / `low` / `medium` / `high`
7. Fix the **factor**, not the direction
8. Record it in a Design Decision Record

**If the environment cannot render or run, say so.** State the verification scope that was achieved and list the steps that remain unverified. An unverified claim is not a small omission — it is the exact failure mode this skill exists to fix in AI output.

The full trail, including the two fixes that were wrong and had to be caught by looking at the render, is in [evaluation/execution-quality-tests.md](evaluation/execution-quality-tests.md).

## Project Design Memory

For long-running products, the skill maintains a design memory (`templates/project-memory.md`): brand personality, visual keywords, design philosophy, color palette, typography, grid, spacing, border/radius, iconography, component rules, motion, responsive rules, Do/Don't, and known drift risks. New pages are reviewed *against* this memory, so page 40 looks like it belongs with page 1.

## Evaluation

Real tests live in [`evaluation/`](evaluation/), not in a promise. Original HTML/CSS pages, real headless-browser screenshots, real scores — including the failures.

| Test | What it checks | Result |
|---|---|---|
| **A — General workspace** | General mode composes a professional tool workspace with no mode leakage | 79/100 · [`test-a-v2.png`](evaluation/screenshots/test-a-v2.png) |
| **B — Arknights workspace** | Same brief, different register; source discipline and seven refusals hold | 79/100 · [`test-b-v3.png`](evaluation/screenshots/test-b-v3.png) |
| **C — Mode switching** | Visual isolation across modes; capabilities survive a switch | Visual half **run** · config half **NOT RUN** |
| **D — Execution quality** | Can the skill actually change a page and tell when it is still wrong | 51 → 75/100 over 4 rounds · [`before`](evaluation/screenshots/test-d-before.png) → [`after`](evaluation/screenshots/test-d-after-v3.png) |

Two findings worth stating plainly rather than burying:

- **Test D needed four rounds, and two of the fixes were wrong.** A documented rule in `execution-gap.md` was still violated in the first honest attempt. A rule that gets violated has not yet been internalized.
- **Test C2 was not run.** Mode selection was only ever driven from the top rung of the precedence chain. The mechanism is specified; it is not validated.

Both totals of 79 are coincidence, not equivalence — A wins hierarchy and typography, B wins brand and originality. Interaction and responsive scores are near-floor throughout because static screenshots cannot evidence them, and are reported as absence of evidence rather than as proof.

**Earlier baselines:** V0.1 — Design Evaluation 15/21, Skill Capability 8/9. Failure mode: *token-correct, component-correct, composition-flat*. The A/B protocol for that comparison is in [docs/ab-test-v0.2.md](docs/ab-test-v0.2.md).

## Roadmap

Status legend: ✅ Implemented · 🧪 Experimental · 📋 Planned

| Version | Status | Focus |
|---|---|---|
| **v0.1.0** | ✅ | Core skill: review workflow, scoring rubric, P0–P3 priorities, 9 references, 5 templates, 4 examples |
| **v0.1.2** | ✅ | DSH bundle packaging (installable via plugin manager) |
| — | 🧪 Experimental | Design drift detection and project design memory (manual workflow via template) |
| **v0.2.0** | ✅ | **Composition First**: composition grammar (7 patterns), attention budget, visual weight, focal point rules, spatial relationships, typography-as-composition, execution gap + self-critique loop, rebalanced 100-point rubric, composition plan template, 8 new examples |
| **v0.3.0** | ✅ Current | **Dual Mode + Execution First**: `general` / `arknights` modes with split reference sets, four-level source tagging + evidence ledger, seven refusals, accessibility review, Design Decision Record, four real test groups with screenshots |
| **v0.4.0** | 📋 Planned | Close Test C2 — validate the full mode precedence chain; turn the drift-detection template into real tooling |
| **v0.5.0** | 📋 Planned | Deeper code review; screenshot analysis that reasons about multi-state and multi-breakpoint captures |
| **v1.0.0** | 📋 Planned | Stable UI art direction methodology |

Nothing in a 📋 row is implemented yet. Contributions that pull a row toward ✅ are welcome — starting with the two open items in `evaluation/`.

## Repository Layout

```
ui-art-director/
├── SKILL.md                      # The skill itself
├── README.md
├── LICENSE                       # MIT
├── CHANGELOG.md
├── CONTRIBUTING.md
├── config/
│   └── mode-config.example.yaml  # V0.3: project-level mode selection
├── references/
│   ├── general/                  # ── V0.3: mode-isolated reference sets ──
│   │   ├── composition-grammar.md    # V0.2 composition layer
│   │   ├── spatial-relationships.md
│   │   ├── visual-weight.md
│   │   ├── focal-point.md
│   │   ├── typography-as-composition.md
│   │   ├── execution-gap.md
│   │   ├── layout-and-composition.md # system layer
│   │   ├── typography.md
│   │   ├── color-system.md
│   │   ├── components.md
│   │   ├── data-visualization.md
│   │   ├── motion-and-responsive.md
│   │   ├── accessibility.md        # V0.3
│   │   ├── critique-and-taste.md
│   │   └── anti-patterns.md
│   └── arknights/               # V0.3: industrial-signal register
│       ├── README.md                 # mode overview + seven refusals
│       ├── reference-index.md        # evidence ledger (source tags)
│       ├── visual-language.md
│       ├── color-system.md
│       ├── typography.md
│       ├── geometry-and-shapes.md
│       ├── components.md
│       ├── information-hierarchy.md
│       ├── motion-and-feedback.md
│       └── page-patterns.md
├── templates/                    # Reusable review output formats
│   ├── composition-plan.md       # V0.2: plan before building
│   ├── design-decision-record.md # V0.3: Execution First record
│   ├── ui-review.md
│   ├── design-system.md
│   ├── screenshot-review.md
│   ├── code-review.md
│   └── project-memory.md
├── examples/
│   ├── README.md                    # index of all case studies
│   ├── composition/              # V0.2: the 7 grammars in action (5 shown)
│   ├── before-after/             # V0.2: bad composition → good composition
│   ├── mode-switching.md         # V0.3: General → Arknights → General
│   ├── bad-dashboard.md          # V0.1 case studies
│   ├── over-cardified-ui.md
│   ├── redesign-example.md
│   └── good-dashboard.md
├── evaluation/                   # V0.3: real tests, real screenshots
│   ├── README.md                     # method + honesty rules
│   ├── general-mode-tests.md         # Test A
│   ├── arknights-mode-tests.md       # Test B
│   ├── mode-isolation-tests.md       # Test C
│   ├── execution-quality-tests.md    # Test D
│   ├── sandbox/                      # original test pages
│   └── screenshots/                  # headless-Edge renders, v1..vn
├── docs/
│   ├── mode-selection.md         # V0.3: the two modes, decision table
│   ├── reference-methodology.md  # V0.3: four-level source tagging
│   └── ab-test-v0.2.md           # V0.1 vs V0.2 A/B test protocol
├── package.json                  # DSH bundle manifest (dsh.bundle.patch) + npm package
├── cordis.patch.yml              # DSH bundle layer: mounts the plugin on ctx.skills
└── lib/
    └── index.js                  # Zero-dependency Cordis plugin: registers the skill provider
```

The skill content at the repository root **is** the plugin payload — there is no duplicated copy to keep in sync.

The `general/` / `arknights/` split is not cosmetic: it enforces mode isolation at the file level. A rule belonging to one mode cannot leak into the other, because it is not in the other's reference set.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). The short version: every visual rule must explain not only **what**, but **why**.

## License

[MIT](LICENSE) © 2026 UI Art Director contributors
