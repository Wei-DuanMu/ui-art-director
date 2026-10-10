# Composition Grammar

Composition is the arrangement of visual attention across a viewport. It is decided **before** components, tokens, or color. A page built on a strong composition survives bad styling; a page built on no composition cannot be saved by good styling.

> Tokens describe the system. Composition creates the experience.

Every pattern below is defined by: **Structure / Purpose / Best For / Visual Effect / Risks / Anti-pattern / Example**.

Choose ONE primary grammar per viewport. Patterns can nest (a rail inside an asymmetric split), but one pattern must own the viewport's first read.

---

## 01 Dominant + Supporting

**Structure:** One large primary region (60–75% of the viewport) + one or two clearly subordinate regions.

```
┌───────────────────────────┬───────────┐
│                           │           │
│         PRIMARY           │ Supporting│
│      (task / metric /     │           │
│       visualization)      │           │
│                           ├───────────┤
│                           │ Supporting│
└───────────────────────────┴───────────┘
```

**Purpose:** Guarantee a single unmistakable anchor.
**Best For:** Dashboards, workspaces, product pages, detail views.
**Visual Effect:** The eye lands once, immediately; everything else is read as context.
**Risks:** The supporting regions competing back (too much accent, too-large type); the primary region filled with low-value content, wasting the anchor.
**Anti-pattern:** Primary region at 50% — a split is not dominance. Dominance requires a visible ratio gap.
**Example:** Ops console where one live metric + its trend owns the left two-thirds; alerts and fleet status stack quietly right. (See `examples/bad-dashboard.md` after-state.)

---

## 02 Asymmetric Split

**Structure:** Two columns at an intentional, unequal ratio (7:3, 8:4, 3:1), each with a distinct role.

```
┌─────────────────────────┬───────┐
│                         │       │
│       WORK / CONTENT    │ Rail  │
│                         │       │
└─────────────────────────┴───────┘
```

**Purpose:** Give regions unequal visual weight *by construction*, so hierarchy can't drift back to flat.
**Best For:** Editor + context, content + metadata, workspace + utility.
**Visual Effect:** Directed flow; the wide side reads as the subject, the narrow side as the instrument.
**Risks:** Ratio chosen arbitrarily (why 7:3 and not 6:4? — answer with content needs); the narrow side becoming a junk drawer.
**Anti-pattern:** Calling a 50/50 split "asymmetric." 50/50 is a tie.
**Example:** Settings page: 8:4 split, wide left holds the active form, narrow right holds read-only account state.

---

## 03 Editorial Stack

**Structure:** A single-column (or single-dominant-column) vertical composition built from typography, whitespace, dividers, labels, and alignment — no cards required.

```
TITLE / DISPLAY STATEMENT
metadata · units · date
─────────────────────────
SECTION HEADING
body, measure-limited
─────────────────────────
SECTION HEADING
body
```

**Purpose:** Carry hierarchy with type and rhythm alone; maximum content legibility.
**Best For:** Reports, documentation, changelogs, detail narratives, marketing pages with something to say.
**Visual Effect:** Authored, calm, confident; rhythm comes from spacing intervals and type scale.
**Risks:** Monotony if every section has identical rhythm — break rhythm deliberately at the important moment; insufficient contrast between heading levels.
**Anti-pattern:** Wrapping each stack section in a card "for structure." The stack *is* the structure.
**Example:** A release-notes page where the version number is display-size, sections are hairline-separated, and one breaking-change block breaks the rhythm with an accent rule.

---

## 04 Full-width Anchor

**Structure:** One horizontal element spans the full content width and sets the page's beat; everything else hangs below (or above) it in subordinate bands.

```
┌───────────────────────────────────────┐
│        FULL-WIDTH ANCHOR              │
│   (key visualization / status / hero) │
├───────────────┬───────────────┬───────┤
│   band        │   band        │ band  │
└───────────────┴───────────────┴───────┘
```

**Purpose:** Establish a single horizontal rhythm line the whole page obeys.
**Best For:** Dashboards with one system-level status, pages with a hero visualization that is genuinely the content.
**Visual Effect:** Stability; the page reads top-down in clear acts.
**Risks:** The anchor being decorative (a banner, not information) — then it's the most expensive mistake on the page; subordinate bands creeping to the anchor's weight.
**Anti-pattern:** Gradient welcome banner as "anchor." An anchor must carry the page's most important *information*, not its loudest styling.
**Example:** Network monitor where a full-width latency timeline is the anchor; per-region stats sit in a quiet band below.

---

## 05 Dense Utility Rail

**Structure:** A narrow, high-density column (icons, short labels, status dots, quick actions) alongside a calmer main region.

```
┌────┬──────────────────────────────┐
│Rail│                              │
│ ●▣ │           MAIN               │
│ ○□ │                              │
└────┴──────────────────────────────┘
```

**Purpose:** Compress low-priority, high-frequency operations into minimal visual weight while keeping them reachable.
**Best For:** IDEs, consoles, monitoring tools, any workspace with frequent secondary actions.
**Visual Effect:** The main region stays calm; utility is one glance away, never in the way.
**Risks:** Rail items with equal visual weight as content (bright icons, large hit areas); rail growing into a second navigation system — then it needs its own hierarchy.
**Anti-pattern:** A "utility rail" styled like a feature sidebar. If the rail draws the eye first, it has failed.
**Example:** Log viewer: 48px rail of filter/pin/export actions; log stream owns the rest.

---

## 06 Open Field + Data Cluster

**Structure:** Large deliberate whitespace (the field) + one compact, dense information cluster placed off-center.

```
┌───────────────────────────────────────┐
│                                       │
│            (open field)               │
│                  ┌──────────┐         │
│                  │  DATA    │         │
│                  │ CLUSTER  │         │
│                  └──────────┘         │
└───────────────────────────────────────┘
```

**Purpose:** Use emptiness as emphasis; the cluster's isolation IS the hierarchy.
**Best For:** Landing pages, empty states, single-decision screens, keynote-style metrics.
**Visual Effect:** Tension and confidence; the viewer cannot miss the one thing because there is nothing else.
**Risks:** Field reading as "unfinished" — the field needs one alignment anchor (the cluster aligns to a grid edge, never floats randomly); adding filler to "use the space" and destroying the pattern.
**Anti-pattern:** Open field + scattered elements at similar size. The pattern requires exactly one cluster.
**Example:** A status page that is 70% empty with one off-center cluster: current state, one number, one timestamp.

---

## 07 Layered Information Plane

**Structure:** Content organized into primary / secondary / supporting *layers* distinguished by elevation, value, and type weight — instead of by container boxes.

```
LAYER 1  primary content (full contrast, largest type)
LAYER 2  secondary context (reduced contrast, smaller)
LAYER 3  supporting metadata (quietest, mono/small)
```

**Purpose:** Build hierarchy through depth and tone rather than enclosure; escape card-dependence entirely.
**Best For:** Data-dense interfaces, detail views, any page where cards would number more than four.
**Visual Effect:** Information feels suspended at different distances; the eye reads foreground first.
**Risks:** Layers insufficiently separated in contrast (becomes mush); too many layers (more than three reads as noise, not depth).
**Anti-pattern:** Implementing "layers" as three nested cards with shadows. Layers are tonal, not boxed.
**Example:** Incident detail: title + current status (layer 1), timeline (layer 2), metadata footer in mono (layer 3) — zero cards.

---

## Choosing a pattern

Ask in order:

1. What is the ONE thing this viewport exists to show? → it gets the anchor pattern (01, 04, or 06).
2. Is there a persistent secondary workflow? → split or rail (02, 05).
3. Is the content fundamentally a narrative? → editorial stack (03).
4. Would this page need more than four cards? → layered plane (07) instead.

**Never choose a pattern because it looks interesting.** Choose it because it matches the information's shape. If two patterns fit, sketch both and compare (see SKILL.md §5 — Multiple Composition Exploration).
