# Contributing to UI Art Director

Thanks for helping make AI a better art director. This project is a *methodology* project: contributions should improve how AI reasons about interface design, not just add more style words.

## Ways to contribute

- **Propose visual rules** — extend the references with executable guidance
- **Submit examples** — new before/after case studies
- **Improve references** — sharpen existing guidance, remove ambiguity
- **Report problems** — contradictions, vague rules, rules that produce bad output in practice
- **Improve templates** — make reviews more consistent and reusable

## The golden rule: WHAT + WHY

Every visual rule must explain **not only what to do, but why**. Rules without reasoning become superstition; rules with reasoning transfer judgment.

Don't submit:

> Use less rounded corners.

Do submit:

> **Rule:** Avoid excessive rounded containers.
>
> **Reason:** When every element is enclosed in the same soft geometry, containers stop communicating semantic grouping, and hierarchy collapses — everything looks equally important.

A good rule is:

1. **Executable** — an AI can apply it to a real design without guessing
2. **Explained** — the reasoning is stated
3. **Scoped** — it says when it applies and when it doesn't
4. **Testable** — you can point at a UI and say whether the rule was followed

## Proposing visual rules

1. Check `references/` for existing coverage — extend a file before creating a new one.
2. Write the rule in WHAT + WHY form.
3. Add a counter-example or failure symptom when possible ("this rule is violated when...").
4. Note the scope: which kinds of UI does it apply to?

## Submitting examples

Examples live in `examples/` and must follow the case-study shape:

```
Bad UI (wireframe or description)
→ Analysis
→ Diagnosis
→ Design Direction
→ Improved UI
→ Why It Works
```

Requirements:

- **Original work only.** Never copy a real commercial product's interface, brand, or assets. Use fictional products and companies.
- Use ASCII wireframes or precise text description so the case stays tool-agnostic.
- The "Why It Works" section matters more than the mockup — it is where the teaching happens.

## Reporting problems

Open an issue describing:

- Which file and section is wrong, vague, or contradictory
- What output or behavior it causes
- What you expected instead

Contradictions between files are high-priority bugs — the skill's authority depends on internal consistency.

## Maintaining consistency

- `SKILL.md` is the summary layer. If you change a rule in a reference, check whether `SKILL.md` summarizes it and update both.
- Scoring categories, score bands, and the P0–P3 priority scale are defined in `references/critique-and-taste.md` and mirrored in `templates/ui-review.md` and `SKILL.md`. Change them in all three places or not at all.
- Keep the project light. Do not add directories or files to "look professional" — every file must earn its place.

## Project identity

Keep the core identity intact: this is an **AI Art Director**, not a UI generator, prompt pack, or component library. Contributions that push the skill toward "just generate a pretty page" will be asked to rework toward Observe → Diagnose → Explain → Direct → Improve.

## The package is also a DSH bundle

`package.json` and `cordis.patch.yml` make this repository installable as a DeepSeek Harness plugin. Two rules keep it installable:

- **Keep the skill content at the repository root.** `lib/index.js` reads `SKILL.md`, `references/`, `templates/`, and `examples/` relative to the package root, and `files` in `package.json` decides what ships. Moving them breaks the plugin payload.
- **Never break the bundle declaration.** DSH installs a package that declares `dsh.bundle.patch` as a mountable layer; a package without it installs as a plain dependency and silently activates nothing. This also means the package name (`dsh-skill-ui-art-director`) and the plugin row name in `cordis.patch.yml` must stay in sync.

Verify packaging after changes:

```bash
npm pack --dry-run          # confirm cordis.patch.yml, SKILL.md, references/ are included
node -e "import('./lib/index.js')" # entry must load without errors
```

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
