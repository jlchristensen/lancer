# Lancer — AI Agent Context

## What Is This Project?

This is the website for **Lancer**, the business entity. Wordmark: **Lancer Optimization**.

Lancer is Jack's business entity. **The offer is optimization, not software builds**: tuning and rebuilding the websites businesses already have, and implementing AI in the operations behind them (agents, automations, internal tools, reporting). The products built in the garage (Chip, Sage, Stitch, tabtab, The Social Project) are owned by Lancer and serve as proof of craft, not as the service.

**The old home services marketplace is scrapped.** This repo used to hold it. Its code is gone from `main` as of the studio rebuild and lives on in git history only. Do not restore it, cite it, or build on it.

**Live URL:** https://welcometolancer.com (AWS Amplify, auto-deploys from `main`)

**Repo:** https://github.com/lancer-source/lancer

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.1.6 |
| Language | TypeScript | 5.x |
| UI | React | 19.2.3 |
| Styling | Tailwind CSS | v4 |
| Fonts | Geist Sans, Archivo | via next/font |
| Hosting | AWS Amplify | Auto-deploy from main |

**Important:** Tailwind CSS v4 uses `@import "tailwindcss"` in CSS instead of a `tailwind.config.js`. Theme customization happens in CSS variables in `src/app/globals.css`.

The Supabase packages are still in `package.json` from the marketplace build. Nothing imports them. Leave them or strip them, but do not wire them back up without a reason.

## Project Structure

```
projects/lancer/
├── CLAUDE.md              ← You are here
├── .cursorrules           ← Cursor IDE rules
├── amplify.yml            ← AWS Amplify build config
│
├── docs/                  ← Agent prompts, workflows, roadmap, old plans
├── public/                ← Static assets
│
└── src/
    ├── app/
    │   ├── globals.css            ← Tailwind import, palette, reduced motion
    │   ├── layout.tsx             ← Fonts, metadata, dark theme colour
    │   └── page.tsx               ← Composes the sections in order
    │
    ├── lib/
    │   ├── site.ts                ← Contact details, links, product list
    │   ├── content.ts             ← Every word on the page
    │   └── styles.ts              ← The one button shape
    │
    ├── components/sections/
    │   ├── Header.tsx             ← Floating pill nav
    │   ├── HeroSection.tsx        ← Full screen, silk drifting behind
    │   ├── WorkSection.tsx        ← Built by Lancer, three staggered tiles
    │   ├── ServicesSection.tsx    ← Three statements
    │   ├── ProcessSection.tsx     ← How it works, as a paragraph
    │   ├── CTASection.tsx         ← Closing, silk again
    │   └── Footer.tsx
    │
    └── components/ui/
        ├── SilkField.tsx          ← The drifting line background
        ├── useCanvasScene.ts      ← Canvas loop, retina, resize, still frame
        └── Reveal.tsx             ← Scroll into view fade
```

## Current State of the Landing Page

One page, top to bottom: hero, Built by Lancer, What we do, How it works,
closing CTA, footer.

The live products stand in as social proof, since there are no testimonials
or client logos yet. When real ones exist, they go above the fold.

### Editing the site

Two files cover almost every request:

- **`src/lib/site.ts`** for the email address, the booking link, and which
  products appear
- **`src/lib/content.ts`** for every word on the page

**The Calendly link is set** (`site.calendlyUrl`, a 30-minute slot). Every
booking button reads "Book a call" and opens Calendly. If the link is ever
cleared, the buttons fall back to email and relabel themselves, so nothing
dead-ends. The process copy says "thirty minutes" because the slot is 30
minutes; keep those in sync.

## Design System

The design is **light pastel** in the Polymer mould: a lavender-into-peach
gradient wash painted once on `body` (fixed attachment, every section shares
the same light), white surfaces, near-black text, **black pill buttons** —
deliberately not blue — a floating white nav, and the live products in device
frames. It replaced the dark-navy direction, which replaced "Silk"; both are
in git history. Audience reasoning: the site sells to business owners, not
engineers, and soft light pages read approachable where dark reads dev-tool.

The colour tokens kept their NAMES through the flip (`ink` family = surfaces,
`paper` = primary text), so components did not need rewriting. Mind that when
reading class names: `bg-ink` is white here.

Three rules carried over from how the direction was chosen, and they still hold:

**No numbered sets.** No 01 / 02 / 03, no step badges. The services are three
cards without numbers and the process is a paragraph. Numbering is only for
content the reader must follow in order.

**Nothing invented.** The reference designs this was built from are full of
placeholder metrics ("+24%", "99.9%", "$50k saved") and fabricated
testimonials with invented names and job titles. **None of that goes on this
site.** The floating cards carry facts only: what a thing is, not how well it
is doing. There is no testimonials section and there will not be one until
there are real clients willing to be quoted.

**The products are the proof.** Chip, Sage and The Social Project are real,
live and good-looking. They do the job that a fake dashboard mockup does on
other sites, and they do it honestly.

**Banned by name** after Jack flagged them as AI giveaways (Aug 2026): the
announcement-pill badge with dot and arrow, the faint background grid,
icon-in-rounded-square feature cards, and letterspaced uppercase eyebrow
labels. Do not reintroduce any of them. The services section is editorial
hairline rows instead, each ending in a Proof line that points at something
real we shipped. Every proof must stay true and checkable; if one stops
being true, fix or remove it the same day.

### Colour

| Token | Value | Used for |
|-------|-------|----------|
| `ink` | `#070b14` | The ground |
| `ink-2` | `#0b1120` | Section bands, cards |
| `ink-3` | `#111a2e` | Raised surfaces, device frames |
| `line` | `#1c2740` | Borders and hairlines |
| `paper` | `#e9edf7` | Headlines and primary text |
| `mute` | `#8a96ad` | Body copy |
| `mute-dim` | `#5d6980` | Labels, footer |
| `accent` | `#2f7dff` | The only colour. Buttons, live dots, hovers |

`accent-soft` and `accent-deep` are the hover and glow variants. Nothing else
gets colour.

### Typography

- **Archivo** (`font-heavy`) for headlines, at **normal weight**, large, tight
  tracking. Not bold: the reference's authority comes from size and space
- **Geist** (`font-sans`) for body copy

### Screenshots

`public/products/` holds `chip.jpg`, `sage.jpg` and `tsp.jpg`, captured from
the live sites. The device frames around them are drawn in CSS in
`components/ui/DeviceShowcase.tsx`, not baked into the images, so refreshing a
screenshot is a matter of dropping in a new file at the same aspect ratio.

- `chip.jpg` is a desktop capture, sits in the browser frame
- `sage.jpg` is cropped to the app's own phone column
- `tsp.jpg` is a desktop capture letterboxed onto its own background colour,
  so the phone frame shows it whole rather than cropping the headline

### Motion

`Reveal` fades sections in on scroll and is disabled under
`prefers-reduced-motion`. The glow is static CSS. **Note:** CSS transitions are
frozen in background tabs, so an automated screenshot of this page can look
blank. That is not a bug, it caught us once already.

### Copy rules

No em-dashes in anything a visitor reads. Use the middot (·) for label
separators. Avoid the AI-tell vocabulary in the garage CLAUDE.md. Read it out
loud before shipping.

## Development Commands

```bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Production build (always run before deploying)
npm run lint      # Check code quality
npm run start     # Serve production build locally
```

## Deployment

AWS Amplify auto-deploys when changes are pushed to `main`. The `amplify.yml` file configures the build:
- Install: `npm ci`
- Build: `npm run build`
- Output: `.next` directory

**To deploy:** Push to `main` branch → Amplify picks it up automatically.

**For feature work:** Use feature branches → Create PR → Jack approves → Merge to main → Auto-deploy.

## Agent System

This project uses AI agents for development. Each agent has a specific role and follows a defined workflow.

### Available Agents

| Agent | File | Purpose |
|-------|------|---------|
| Content Editor | `docs/agents/content-editor.md` | Content, copy, and styling changes |
| Feature Researcher | `docs/agents/feature-researcher.md` | Investigate best practices before building |
| Feature Planner | `docs/agents/feature-planner.md` | Create implementation plans for features |
| Senior Reviewer | `docs/agents/senior-reviewer.md` | Review and improve implementation plans |
| Feature Builder | `docs/agents/feature-builder.md` | Implement features from approved plans |
| Code Reviewer | `docs/agents/code-reviewer.md` | Review code before merging PRs |
| Product Feedback | `docs/agents/product-feedback.md` | Analyze design/UI and provide recommendations |

### Agent Templates

Reusable templates for creating new agents live in `docs/agents/templates/`:

| Template | Purpose |
|----------|---------|
| `prompt-engineer.md` | Create and improve other agents |
| `builder-agent.md` | Build features, pages, and components |
| `research-agent.md` | Investigate tools, patterns, and best practices |
| `advisor-agent.md` | Strategic and technical advice |

To create a new agent, copy the relevant template, fill in the `[brackets]`, and save to `docs/agents/`.

### Two Workflow Types

**Content/Design Workflow** (lightweight):
For copy changes, styling tweaks, and visual updates. Jack works directly with the Content Editor agent. See `docs/workflows/content-workflow.md`.

**Feature Development Workflow** (full pipeline):
For new features like email capture, user profiles, etc. Multiple agents collaborate through a structured pipeline. See `docs/workflows/feature-workflow.md`.

### How to Start an Agent Session

Open a new Cursor session in `projects/lancer/` and tell the agent:

```
Follow the instructions in docs/agents/[agent-name].md

[Your task or instructions here]
```

## Standards & References

This project follows the standards defined at the workspace level:
- **Coding:** `the-garage/docs/standards/coding-standards.md`
- **UI/UX:** `the-garage/docs/standards/ui-ux-standards.md`
- **Project:** `the-garage/docs/standards/project-standards.md`
- **Agent Workflow:** `the-garage/docs/standards/agent-workflow.md`

## Git Workflow

All agents manage git automatically. Jack should not need to think about git.

### Branch Strategy
- **`main`** — Always deployable. Merges trigger Amplify deployment.
- **Feature branches** — All new work happens on branches:
  ```
  content/update-landing-copy
  feature/email-capture-upgrade
  feature/user-profiles
  ```

### Commit Convention
```bash
feat: add a case study page
fix: correct mobile layout on features section
style: update hero section spacing and colors
content: update FAQ answers and headline copy
docs: add email capture implementation plan
refactor: extract email validation to utility
```

### PR Flow
1. Agent creates feature branch
2. Agent does the work, commits along the way
3. Agent (or Code Reviewer) creates PR with summary
4. Jack reviews and approves in GitHub
5. Merge to main → Auto-deploy on Amplify

## Important Notes

- Jack is learning to code — explain everything in plain language
- Design matters — this is for idea validation, it needs to look professional
- Mobile-first — most visitors will come from ads on phones
- Ship fast — get it working, then polish
- This site is a shop window, not an app. There is no auth, no database and no form backend. Keep it that way unless Jack asks for one
- Never commit `.env.local`
- Always run `npm run build` before saying something is done
