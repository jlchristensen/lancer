# Lancer

The website for **Lancer**, the business entity. Wordmark: **Lancer Optimization**.

Lancer is a software studio. It owns the products built in the garage and takes on client work in three areas: websites new and rebuilt, product builds from 0 to 1, and automation and dashboards.

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

It is called **Silk**, picked out of eight options in August 2026. Dark, no
accent colour, rounded, unhurried. Long lines drift across the hero and the
closing section on a canvas.

Two rules to hold to if you are changing it:

- **Nothing gets numbered.** No 01 / 02 / 03, no step badges, no bulleted
  feature lists. The services are three statements and the process is a
  paragraph, on purpose.
- **No gradient text, no glass cards, no indigo.** If a layout could sit
  unchanged on any other startup landing page, it is wrong.

The palette is four values and lives in `src/app/globals.css`. Headlines are
Archivo, body copy is Geist. All motion stops for visitors whose device asks
for reduced motion.

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
