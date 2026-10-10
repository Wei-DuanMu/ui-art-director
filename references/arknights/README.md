# Arknights Mode — Overview & Guardrails

This directory contains the mode-specific visual language for **Arknights Mode** (`mode: arknights`). It is an original design-research abstraction inspired by the art direction of the game Arknights, built from cited public references — it contains **no game assets, no screenshots, no logos, no copied layouts**.

**This project is unofficial. It is not affiliated with, endorsed by, or licensed by Hypergryph or the Arknights franchise.** See README.md §Copyright.

## What this mode is for

Interfaces that should feel like **Rhodes-Island-adjacent industrial systems**: technical, authored, dense with real information, geometrically disciplined, and visually unmistakable — developer tools, monitoring consoles, game-adjacent fan tools, personal dashboards, terminals, and any product whose brand genuinely wants that register.

It is NOT a costume for arbitrary products. If the product is a normal SaaS back-office, use General Mode. Forcing this register onto an e-commerce admin page is a design failure this mode explicitly refuses to commit (see Mode Isolation in SKILL.md §4).

## Provenance discipline (mandatory)

Every claim in these files carries one of four labels:

| Label | Meaning |
|---|---|
| **[OBSERVED]** | Directly observed from a cited source in `reference-index.md`, with URL and access date. |
| **[GENERALIZED]** | Induced from multiple observed cases; the cases are cited. |
| **[INFERRED]** | Our inference from general public knowledge of the game's art direction. **Not yet verified against a cited source in this repo.** Treat as a hypothesis, verify before relying on it for client work. |
| **[ORIGINAL]** | Our original construction for this project — inspired by the register but invented here. No source claims. |

Never upgrade a label without evidence. Never cite a page you have not actually opened. `reference-index.md` is the single ledger: if a claim has no entry there, it is INFERRED at best.

## The seven refusals (mode guardrails)

Arknights Mode must NOT become "generic game HUD cosplay." Refuse:

1. **Random HUD lines** — lines, brackets, and grids exist only to structure real content regions.
2. **Meaningless numbers** — every numeric string must be a real value (timestamp, ID, count, coordinate of something real).
3. **Neon & gradient abuse** — the register is built on muted industrial tones + one or two signal accents, not glow.
4. **Decorative borders on everything** — enclosure is spent on hierarchy, not wallpaper.
5. **Every component is a game panel** — utility elements stay quiet; panels are for content that earns them.
6. **Mechanical screenshot copying** — never recreate a recognizable game screen; abstract the principle, rebuild for the product's actual information.
7. **Decoration complexity = quality** — the register's richness comes from information organization, not ornament count.

These extend `references/general/anti-patterns.md`; in Arknights Mode both apply.

## File map

- `visual-language.md` — the register's core traits and how to apply them
- `color-system.md` — palette construction and accent discipline for this mode
- `typography.md` — type strategy (incl. CJK/Latin mixing)
- `geometry-and-shapes.md` — the shape vocabulary and its rules
- `components.md` — component treatments specific to this mode
- `information-hierarchy.md` — how the register organizes dense information
- `motion-and-feedback.md` — animation and state feedback principles
- `page-patterns.md` — page-level composition applications
- `reference-index.md` — the evidence ledger (sources, dates, verification status)
