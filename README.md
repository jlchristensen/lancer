# Lancer

The website for **Lancer**, the business entity. Wordmark: **Lancer Optimization**.

Lancer is Jack's business entity. The offer is optimization, not software builds: tuning and rebuilding the websites businesses already have, and implementing AI in the operations behind them. The garage products are proof of craft.

**Live:** https://welcometolancer.com

> The home services marketplace that used to live in this repo is scrapped. Its code is in git history only.

## Run it locally

```bash
npm install     # first time only
npm run dev
```

Open http://localhost:3000.

## Changing the site

Two files cover almost everything you would want to edit.

**`src/lib/site.ts`**

| What | Where |
|------|-------|
| Email address | `site.email` |
| Booking link | `site.calendlyUrl` |
| Products on the page | `products` array |

**`src/lib/content.ts`** holds every word on the page: the headline, the
three services, the process paragraph, and the closing pitch.

**The Calendly link is not set yet.** While `site.calendlyUrl` is an empty
string, every "Book a call" button opens an email instead and reads "Start a
project". Paste the Calendly URL into that field and the whole site switches
over. Nothing else to change.

## The design

Dark SaaS: deep navy, one blue accent, a glow behind the hero, and the live
products shown in device frames. It replaced an earlier monochrome direction
called Silk, which is still in git history.

Three rules if you change it:

- **Nothing gets numbered.** No 01 / 02 / 03, no step badges. The process is a
  paragraph on purpose.
- **Nothing invented.** No placeholder metrics, no fabricated testimonials. The
  floating cards say what a thing is, never how well it is doing.
- **The products are the proof.** Chip, Sage and The Social Project do the job
  a fake dashboard does elsewhere, honestly.

The palette is eight tokens in `src/app/globals.css`. Headlines are Archivo at
normal weight, body is Geist. Product screenshots live in `public/products/`
and their frames are CSS, so swapping a screenshot is just replacing a file.

## Project structure

```
src/
├── app/
│   ├── globals.css     # Palette and reduced motion
│   ├── layout.tsx      # Fonts and page metadata
│   └── page.tsx        # Composes the sections in order
├── lib/
│   ├── site.ts         # Contact details, links, product list
│   ├── content.ts      # Every word on the page
│   └── styles.ts       # The one button shape
├── components/sections/
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── WorkSection.tsx        # Built by Lancer
│   ├── ServicesSection.tsx    # What we do
│   ├── ProcessSection.tsx     # How it works, as a paragraph
│   ├── CTASection.tsx
│   └── Footer.tsx
└── components/ui/
    ├── SilkField.tsx   # The drifting line background
    ├── useCanvasScene.ts
    └── Reveal.tsx
```

## Tech stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · React 19. Hosted on AWS Amplify.

Tailwind v4 has no `tailwind.config.js`. The palette lives as CSS variables in `src/app/globals.css`.

## Deploying

Amplify auto-deploys on every push to `main`. Run `npm run build` first to be sure it compiles.

## Before you write copy

No em-dashes in anything a visitor reads. Use the middot (·) for label separators. See the copy rules in the garage `CLAUDE.md`.
