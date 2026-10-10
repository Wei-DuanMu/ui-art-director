# Test C — Mode switching and isolation

**Purpose:** prove that switching modes changes style only — no capability is lost, and no Arknights vocabulary leaks into General output.

**Status: PARTIALLY RUN.** The visual half was executed; the configuration half was not. Both halves are recorded below with the split stated plainly rather than the whole being reported as passed.

## C1 — Visual isolation (RUN)

Evidence: `screenshots/test-a-v2.png` vs `screenshots/test-b-v3.png`.

Same brief, same viewport, same browser, back to back.

| Check | Result |
| --- | --- |
| Arknights geometry in General output | None found |
| Serial numbering in General output | None found |
| Amber signal color in General output | None — teal throughout |
| Hazard stripe / corner tick in General output | None |
| General flat-square register in Arknights output | None — chamfers and ticks throughout |
| Capabilities lost when switching | None — both pages carry nav, editor, agent panel, queue, composer |

The capability check is the important half of this test and it passed on both sides: General has no chamfer vocabulary, Arknights has no generic-bootstrap look.

## C2 — Configuration-driven switching (NOT RUN)

**What was not done:** No test exercised `config/mode-config.yaml` as the actual switching input. Mode selection during C1 was driven by explicit task instruction, not by a project config file.

**Why:** the mode precedence chain (task > project config > session > default) has four rungs. Validating only the top rung does not validate the chain, and claiming the chain "works" from the top rung alone would be exactly the kind of unfounded claim this project exists to avoid.

**What remains to be verified:**

| # | Check | Method needed |
| --- | --- | --- |
| 1 | Project config selects the mode when the task does not specify one | Write `config/mode-config.yaml`, re-run Test A unmodified, expect the Arknights register |
| 2 | Task instruction overrides project config | Keep `mode: arknights`, issue a General-mode task, expect General output |
| 3 | Default is General | No config, no task instruction → General |
| 4 | Round trip General → Arknights → General is stable | Switch back and re-render; confirm no residual traits |
| 5 | Switching does not drop capabilities | Confirm the full capability checklist holds on both sides of a round trip |

Checks 4 and 5 matter most. A mode switch that leaves one stray chamfer behind is a real failure even though the first render looks right — and only a round trip can detect it.

## Conclusion

Visual isolation: **demonstrated.** Configuration-driven precedence: **untested.** The mechanism is written into `SKILL.md` §1 and `config/mode-config.example.yaml`; it is specified, not verified. Anyone extending this project should treat closing C2 as the first task.