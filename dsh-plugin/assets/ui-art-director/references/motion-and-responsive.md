# Motion and Responsive Design

## Motion

Animation should communicate one of five things:

1. **Feedback** — your action registered (press, toggle, submit)
2. **Orientation** — where you are and where content came from (panel slides in from its source edge)
3. **Hierarchy** — what to look at first (staggered entrance by importance)
4. **Transition** — a state change (value updates, view switches)
5. **Progress** — time is passing and the system is working

Prefer precise fades, slides, reveals, staggered entrances, progress indicators, and state transitions. Keep durations short (150–300ms for UI feedback) and easing functional.

Avoid:

- constant glow or pulse on static elements — a heartbeat implies something is alive or wrong
- excessive bounce — playfulness is a brand decision, not a default
- decorative parallax — motion that doesn't answer one of the five purposes is decoration on a timer
- animation that blocks interaction — the user should never wait for a flourish

**Respect `prefers-reduced-motion`.** Provide reduced alternatives; motion is an enhancement layer, never a requirement for comprehension.

## Responsive

**Responsive design is not simply shrinking the desktop layout.** It is reprioritizing content per breakpoint.

- **Desktop:** rich navigation, secondary context visible, higher information density justified
- **Tablet:** reduce secondary regions, simplify composition, keep primary workflow intact
- **Mobile:** preserve primary information and actions; collapse, move, or progressively disclose secondary content

Per breakpoint, ask:

1. What is the single most important thing at this width?
2. What was visible at desktop that must now be reached, not shown?
3. Did any hierarchy relationship invert or collapse? (e.g., a right rail that stacked *above* the content it contextualizes)

Common failures:

- shrink-only thinking — the same layout compressed until type is unreadable
- desktop nav hidden with no mobile equivalent — orientation lost
- tap targets below ~44px
- horizontal scrolling on data tables with no sticky column or card transformation

## Accessibility

At every breakpoint, respect: visible focus, touch targets, reduced-motion preferences, semantic structure, contrast floors, and readable type. Accessibility is not a post-pass; it is the floor the visual system is built on.
