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

Nearly everything you would want to edit is in one file: **`src/lib/site.ts`**.

| What | Where |
|------|-------|
| Email address | `site.email` |
| Booking link | `site.calendlyUrl` |
| Products on the page | `products` array |

**The Calendly link is not set yet.** While `site.calendlyUrl` is an empty string, every "Book a call" button opens an email instead and reads "Start a project". Paste the Calendly URL into that field and the whole site switches over. Nothing else to change.

Page copy lives in the section components under `src/components/sections/`.

## Project structure

```
src/
├── app/
│   ├── globals.css     # Tailwind import + brand colors
│   ├── layout.tsx      # Fonts and page metadata
│   └── page.tsx        # Composes the sections in order
├── lib/
│   └── site.ts         # Contact details, links, product list
└── components/sections/
    ├── Header.tsx
    ├── HeroSection.tsx
    ├── WorkSection.tsx        # Built by Lancer
    ├── ServicesSection.tsx    # What we do
    ├── HowItWorksSection.tsx
    ├── CTASection.tsx
    └── Footer.tsx
```

## Tech stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · React 19. Hosted on AWS Amplify.

Tailwind v4 has no `tailwind.config.js`. Brand colors are CSS variables in `src/app/globals.css`.

## Deploying

Amplify auto-deploys on every push to `main`. Run `npm run build` first to be sure it compiles.

## Before you write copy

No em-dashes in anything a visitor reads. Use the middot (·) for label separators. See the copy rules in the garage `CLAUDE.md`.
