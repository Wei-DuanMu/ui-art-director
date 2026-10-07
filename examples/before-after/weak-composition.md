# Before → After: Weak Composition

**The failure:** the default centered template — technically clean, compositionally anonymous.

## Before

```
┌─────────────────────────────────────────────┐
│                  LOGO                       │
│                                             │
│         A GREAT PRODUCT HEADLINE            │
│      a subtitle that says a bit less        │
│                                             │
│        [ Button ]      [ Button ]           │
│                                             │
│   ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│   │ Feature │ │ Feature │ │ Feature │       │
│   └─────────┘ └─────────┘ └─────────┘       │
│                                             │
└─────────────────────────────────────────────┘
```

Everything centered. Every block full-width and symmetrical. The three feature cards identical. This is the shape of ten thousand landing pages — and of zero products with a point of view.

## Diagnosis

- **Composition check:** no grammar — blocks stacked in template order. The centered axis removes all direction; the eye bounces off symmetry instead of traveling.
- **Focal check:** the headline is the nominal anchor but shares weight with logo + twin buttons + card row. First read is muddy.
- **Spatial audit:** uniform gaps everywhere (the template's one spacing value) — no group boundaries, no rhythm, no break.
- **Root cause:** composition inherited from a component library's demo page. Nobody chose anything.

## Composition change

Rank: the product statement is the anchor; a real product fact (live metric) is the proof; features compress into a numbered list; one button survives. Grammar: asymmetric editorial — statement anchored left on the grid, fact panel right, deliberate off-axis tension.

## After

```
PRODUCT · v2.4                                              [docs] [→]

Ship every change
with proof.                     DEPLOY HEALTH · NOW
                                99.98% · 1,204 deploys today
Every deploy verified           ▁▂▃▅▆▇█ 24h
against your own
production data.                01  connect your pipeline · 4 min
                                02  watch every run live
[ start free ]                  03  block regressions automatically

─────────────────────────────────────────────────────────────────
```

## Why it works

- **Asymmetry creates travel:** statement pulls the eye left-and-down, fact panel catches it on the right. The page leads somewhere; the old one orbited its own centerline.
- **The anchor is a sentence with a claim**, set at display size on a real grid edge — not centered filler. The proof panel is *evidence* (real numbers), which is what the feature cards only gestured at.
- **Feature cards died so hierarchy could live:** the same content as a numbered list at supporting weight costs a third of the attention and reads twice as fast.
- One primary action at utility-adjacent placement — action ≠ anchor, and the page no longer begs.

**Exercise:** take any centered landing section. Left-align it to a grid edge, delete one button, and replace the three feature cards with one factual panel. Compare squint tests.
