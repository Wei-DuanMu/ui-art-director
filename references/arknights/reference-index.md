# Reference Index — Evidence Ledger

The single source of truth for what this project's Arknights Mode is based on. Every [OBSERVED] or [GENERALIZED] claim elsewhere in `references/arknights/` must trace to an entry here.

**Verification status legend:** ✅ verified (opened and read) · ⚠️ partial (opened, content not fully retrievable) · ❌ unverified (queued for manual review)

## Sources

### S1 — ignoredone's space (homepage)

- **URL:** https://www.ignoredone.space/
- **Access date:** 2026-10-10 · **Status:** ✅ verified (text-level)
- **What it is:** Personal design site of "ignoredone", hosting Arknights art resources and design tutorials.
- **Observed (text):** section taxonomy — 美术资源 (art resources), 设计导航, 字体库 (font library), 个人作品, 学习工程, 自制图标库 (self-made icon library), IgnoBoard, 作品库, 学方舟做设计, 图文教程, 资源共享. Homepage features motion/graphic pieces described as "融球 · 螺旋扩散 + 毛玻璃音波 · 双螺旋" — i.e., the site's own aesthetic uses frosted-glass and fluid motion experiments.
- **Not observed:** the visual content of the linked sections (see S2–S4).

### S2 — 明日方舟美术资源系统

- **URL:** https://www.ignoredone.space/index.php/arknights_design/
- **Access date:** 2026-10-10 · **Status:** ⚠️ partial — page title confirmed; body content loads dynamically and was **not retrievable** via static fetch; direct browser access from the working environment returned HTTP 502 at the time of testing.
- **Observed:** page title "明日方舟 美术资源系统" only.
- **Unverified:** the asset categories, presentation style, and any UI assets inside. **Queued: manual browser visit required.**

### S3 — 学方舟做设计 (video tutorial series)

- **URL:** http://www.ignoredone.space/index.php/graphic-design/
- **Access date:** 2026-10-10 · **Status:** ⚠️ partial — episode list verified; video content not analyzable in this environment.
- **Observed (text):** ~12-episode tutorial series analyzing Arknights graphic design; episodes link to bilibili videos. Cover filenames reference Arknights events/themes (e.g., 未许之地, 火山旅梦) and episode numbers (学方舟做设计_7.5, _5, _3.5, _1).
- **Unverified:** the actual design analysis inside the videos. **Queued: watch episodes BV1WnUTYpERQ (ep.1) and BV1qMfGBkERy / BV1dNxRzZEJT (recent) and transcribe principles.**

### S4 — 图文教程库

- **URL:** https://www.ignoredone.space/index.php/text-tutorial/
- **Access date:** 2026-10-10 · **Status:** ✅ verified (text-level)
- **Observed (text):** a 15-item tutorial list on graphic-effect *production* (铅笔素描, 纹理改色, 点阵/马赛克, 纸张晕染, 玻璃字/金属字, 酸性风格, 光栅, 摩尔纹, 印章化, 封面设计排雷手册…). These are Photoshop-style effect tutorials, **not UI design-language analysis**.
- **Consequence:** S4 is not cited as evidence for any UI-mode claim. It does indicate the community's design discourse centers on *effect techniques + cover/poster design*.

## Verification queue (for maintainers)

1. Open S2 in a real browser; record the asset taxonomy and presentation patterns. Update `information-hierarchy.md` and `components.md` labels accordingly.
2. Watch S3 episodes 1–3; transcribe stated design principles with timestamps; upgrade matching [INFERRED] claims to [OBSERVED].
3. Capture 3–5 public screenshots of in-game UI (menu, terminal, inventory) from official sources for *private* analysis; derive traits as text. **Do not commit the screenshots** (copyright); commit only the textual analysis with a note of what was viewed and when.

## Rules for editing this ledger

- One entry per source, with URL, access date, and status.
- Never mark ✅ for content not actually opened in full.
- When a source is re-verified, update the access date and status, and adjust labels in dependent files.
