/**
 * Sync the canonical skill content into the DSH plugin's packaged assets.
 *
 * Source of truth: repository root (SKILL.md, references/, templates/, examples/).
 * Output:          dsh-plugin/assets/ui-art-director/ (fully regenerated).
 *
 * Run after any change to the skill content:
 *   node scripts/sync-dsh-assets.mjs
 */
import { cp, mkdir, rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const repoRoot = fileURLToPath(new URL('..', import.meta.url))
const target = fileURLToPath(new URL('../dsh-plugin/assets/ui-art-director', import.meta.url))

const COPIES = ['SKILL.md', 'references', 'templates', 'examples']

await rm(target, { recursive: true, force: true })
await mkdir(target, { recursive: true })

for (const entry of COPIES) {
  await cp(`${repoRoot}/${entry}`, `${target}/${entry}`, { recursive: true })
  console.log(`synced ${entry}`)
}

console.log(`\nDSH plugin assets regenerated at dsh-plugin/assets/ui-art-director/`)
