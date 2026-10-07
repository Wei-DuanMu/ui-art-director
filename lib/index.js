/**
 * Bundled `ui-art-director` skill provider for DeepSeek Harness (DSH).
 *
 * This package is a DSH bundle: `package.json` declares `dsh.bundle.patch`
 * pointing at `cordis.patch.yml`, which mounts this plugin on `ctx.skills`.
 *
 * The runtime uses only `node:fs` and `node:url`; `@deepseek-ai/cordis` and
 * `@deepseek-ai/dsh-skill` are host-provided capabilities reached through the
 * plugin context, so this package installs with zero dependencies and needs no
 * build step (a git install therefore needs no pnpm build-script allowance).
 *
 * The skill body lives at the package root (`SKILL.md` plus `references/`,
 * `templates/`, `examples/`), and `resourceBase` lets the agent resolve the
 * relative resource paths used throughout SKILL.md.
 *
 * @module dsh-skill-ui-art-director
 */

import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const PROVIDER_NAME = 'ui-art-director'

const SKILL_ROOT_URL = new URL('../', import.meta.url)
const SKILL_BODY_URL = new URL('../SKILL.md', import.meta.url)

/** Base used by the agent to resolve relative resources (references/, templates/, examples/). */
const RESOURCE_BASE = {
  kind: 'directory',
  path: fileURLToPath(SKILL_ROOT_URL),
}

const INVOCATION = { modelInvocable: true, userInvocable: true }

const DESCRIPTION =
  'Act as a demanding UI Art Director for app and web design. Review screenshots, layouts, design systems, and frontend code; improve hierarchy, typography, color, composition, components, motion, responsiveness, and brand identity using an original industrial-futurist-editorial visual language, without copying copyrighted assets or interfaces.'

const WHEN_TO_USE =
  'Use when the user asks to design, critique, review, redesign, polish, or implement an app/web UI, dashboard, landing page, component, design system, screenshot, or frontend styling, especially when they want industrial, futuristic, technical, editorial, game-inspired, or highly art-directed visual quality.'

/**
 * Bundled-provider rank. Matches BUNDLED_SKILL_RANK in @deepseek-ai/dsh-skill
 * (600 in the local-discovery table of docs/subsystems/skills.md); hardcoded
 * here so the plugin stays dependency-free.
 */
const BUNDLED_SKILL_RANK = 600

const CANDIDATE = {
  name: 'ui-art-director',
  description: DESCRIPTION,
  whenToUse: WHEN_TO_USE,
  invocation: INVOCATION,
  provider: PROVIDER_NAME,
  source: 'bundled',
  resourceBase: RESOURCE_BASE,
  rank: BUNDLED_SKILL_RANK,
  locator: SKILL_BODY_URL,
}

const provider = {
  name: PROVIDER_NAME,
  list: () => Promise.resolve([CANDIDATE]),
  async get(_candidate) {
    return {
      name: CANDIDATE.name,
      description: CANDIDATE.description,
      whenToUse: CANDIDATE.whenToUse,
      invocation: CANDIDATE.invocation,
      provider: CANDIDATE.provider,
      source: CANDIDATE.source,
      resourceBase: RESOURCE_BASE,
      content: await readFile(SKILL_BODY_URL, 'utf8'),
    }
  },
}

/** Cordis plugin name. */
export const name = 'skill-ui-art-director'

/** Capability required by the bundled provider. */
export const inject = ['skills']

/** Register the bundled `ui-art-director` provider on `ctx.skills`. */
export function apply(ctx) {
  ctx.skills.registerProvider(() => provider)
}
