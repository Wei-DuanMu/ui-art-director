# FRONTEND UI REVIEW

Review the code as the implementation of a visual system — not only for correctness. Supported: React, Vue, HTML, CSS, Tailwind, and similar.

## Checklist

### Design tokens
- [ ] Colors/spacing/radius/type come from tokens or theme config, not hardcoded values
- [ ] No one-off hex codes, magic px values, or inline styles that bypass the system

### Spacing consistency
- [ ] Spacing values come from a scale (e.g., 4/8/12/16/24/32)
- [ ] No 13-unique-gap pages

### Typography
- [ ] Type roles used consistently (heading styles not reinvented per page)
- [ ] Numeric data uses tabular figures where compared
- [ ] Hierarchy carried by size/weight, not color alone

### Color
- [ ] Accent applied to a small fraction of elements
- [ ] Semantic tokens (success/warning/danger) used semantically
- [ ] Contrast floors respected

### Component reuse
- [ ] Existing components used instead of re-implemented
- [ ] Variants via props/tokens, not copy-paste divergence

### Responsive behavior
- [ ] Breakpoints reprioritize content, not just shrink it
- [ ] Touch targets ≥ ~44px on mobile
- [ ] No horizontal-scroll accidents

### Accessibility
- [ ] Semantic HTML (button, nav, main, headings in order)
- [ ] Visible focus states
- [ ] `prefers-reduced-motion` respected
- [ ] Alt text / aria where needed

### Maintainability
- [ ] Visual fixes achievable at token level, not per-instance patching
- [ ] Dead styles and unused variants removed

## Issue format

For each issue:

- **Problem:** [what and where — file/component/class]
- **Priority:** P0 / P1 / P2 / P3
- **Why it matters:** [the principle violated]
- **Recommended change:** [smallest coherent fix, with a minimal code example when useful]

## Discipline

Prefer the smallest coherent change that preserves the established design language. Do not rewrite files when a token change fixes the issue. Do not redesign the product's identity during a code review unless the user asked for a redesign.
