# dsh-skill-ui-art-director

The [UI Art Director](https://github.com/Wei-DuanMu/ui-art-director) skill packaged as a [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (DSH) plugin.

**Teach AI to see, critique, explain, and improve UI design** — inside the DSH desktop app, terminal, or web UI.

Once installed, the agent gains an `ui-art-director` skill: UI review, redesign, design-system consulting, screenshot critique, code review, responsive review, taste training, and design-drift detection, all in an industrial-futurist editorial visual language.

## How it works

This is a zero-dependency Cordis plugin. At load time it registers a bundled `SkillProvider` on `ctx.skills`, exposing the packaged skill at `assets/ui-art-director/` (SKILL.md + references + templates + examples). It mirrors the official `@deepseek-ai/dsh-skill-badge` pattern:

```
dsh-plugin/
├── package.json
├── lib/
│   └── index.js                 # Cordis plugin: name / inject / apply(ctx)
└── assets/
    └── ui-art-director/         # generated — do not edit by hand
        ├── SKILL.md
        ├── references/          # loaded on demand (progressive disclosure)
        ├── templates/
        └── examples/
```

`assets/` is generated from the repository root by `node scripts/sync-dsh-assets.mjs`. The canonical skill content lives at the repository root; never edit `assets/` directly.

## Install

### DSH desktop (local path)

1. Get the plugin folder:
   - clone the repo: `git clone https://github.com/Wei-DuanMu/ui-art-director.git`, or
   - download `dsh-skill-ui-art-director-<version>.tgz` from the [latest release](https://github.com/Wei-DuanMu/ui-art-director/releases/latest) and extract it.
2. In the desktop app: **Plugins → install from local path**, and select the `dsh-plugin` folder (the extracted folder for the tgz).
3. Restart the session. The skill appears in the skill catalog as `ui-art-director`.

### DSH CLI

```bash
dsh plugin add <path-to>/dsh-plugin
# or against a specific profile, e.g. web:
dsh plugin --profile web add <path-to>/dsh-plugin
```

### No plugin install needed (filesystem skill)

DSH also discovers plain skill folders without any plugin. Copy the repository's root content (`SKILL.md`, `references/`, `templates/`, `examples/`) into either:

- `<your-project>/.dsh/skills/ui-art-director/` — project level
- `<dshHome>/skills/ui-art-director/` — user level

The plugin route exists so the skill can be installed, upgraded, and removed from the plugin manager like any other DSH extension.

## Use

```
/ui-art-director review this dashboard screenshot
```

or simply describe the task — "why does my settings page look generic", "set up a design system for an ops console", "review this React component's visual quality". The skill infers the mode from the request.

## Requirements

- DeepSeek Harness v0.2+ (desktop, CLI, or web) with the skills capability (shipped by default)
- Node.js 18+ only if you run the sync script or pack the tarball yourself; the installed plugin needs nothing

## Versioning

The plugin version tracks the skill version in the repository root `CHANGELOG.md`. Releases publish both the repository zip and the packed plugin tarball.

## License

MIT — same as the parent project.
