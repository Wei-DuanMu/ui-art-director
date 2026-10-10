# Evaluation — method and honesty rules

This directory holds the **real** test record for v0.3.0. It is not a marketing folder.

## Whatbelongs here

| Artifact | Purpose |
| --- | --- |
| `sandbox/*.html` | Original test pages built for these tests. Not scraped, not copied. |
| `screenshots/*.png` | Actual renders captured from a headless Edge via `playwright-core`. |
| `general-mode-tests.md` | Test A |
| `arknights-mode-tests.md` | Test B |
| `mode-isolation-tests.md` | Test C |
| `execution-quality-tests.md` | Test D — the real edit loop, with gap ratings |

## Honesty rules (binding on this directory)

1. **No score without a rendered artifact.** Any claim about how a page *looks* must point to a PNG in `screenshots/`. Un-rendered reasoning is recorded as reasoning, never as a visual verdict.
2. **No verified claim without a method.** "Verified" means: opened the URL, recorded the date, recorded what was visible. Anything else is `[INFERRED]` or `[ORIGINAL]`.
3. **Unfinished work is marked unfinished.** Where a test could not be run in this environment, the report says `NOT RUN` and names the reason. It is never quietly dropped and never written up as if it passed.
4. **Screenshots are dated by filename**, `test-<id>-v<n>.png`, where `v<n>` is the iteration. The final accepted render is the highest `v`. Intermediate versions are kept — the iteration trail is the evidence that the self-critique loop actually ran.
5. **Scores are comparative instruments.** The same rubric, applied by the same pass, to before and after. A before/after delta is meaningful; an absolute 92 is not.

## Environment used

| Item | Value |
| --- | --- |
| Renderer | Microsoft Edge (Chromium), headless, via `playwright-core` `channel: 'msedge'` |
| Viewport | 1440 × 900 CSS px |
| Static server | `python -m http.server` on `127.0.0.1` |
| Date captured | 2026-10-10 |

No real product build system, no framework, no component library — these pages are hand-written HTML/CSS precisely so that the composition decisions under test are not entangled with a design system's defaults.

## How the self-critique loop was run

For each page: write → render → look at the PNG → list concrete defects → classify the gap (`none` / `low` / `medium` / `high`) → fix the *factor*, not the direction → re-render. The full trail, including the two dead ends recorded in `execution-quality-tests.md`, is kept in the versioned screenshots.