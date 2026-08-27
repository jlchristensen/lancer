# Lancer — AI Agent Context

## What Is This Project?

This is the website for **Lancer**, the business entity. Wordmark: **Lancer Optimization**.

Lancer is a software studio. It owns the products built in the garage (Chip, Sage, Stitch, tabtab, The Social Project) and takes on client work in three areas: websites new and rebuilt, product builds from 0 to 1, and automation and dashboards.

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

**The Calendly link is not set yet.** `site.calendlyUrl` is an empty string.
While it is empty, every "Book a call" button opens an email instead and its
label reads "Start a project", so no button is ever a dead end. Paste the
Calendly URL into that one field and the whole site switches over.

## Design System

The design is called **Silk**. It was picked out of eight options in August
2026. Two rules came out of that process and they are the ones to hold to.

**No numbered sets.** No 01 / 02 / 03, no step badges, no bulleted feature
lists. The services are three statements with room around them, and the
process is a paragraph. Numbering is only allowed if the content is genuinely
a sequence the reader has to follow in order, and even then, question it.

**No AI house style.** No gradient text. No frosted glass cards. No indigo or
violet. If a layout could sit unchanged on any other startup landing page,
it is wrong.

### Colour

There is no accent colour. The whole palette is four values, in `globals.css`:

| Token | Value | Used for |
|-------|-------|----------|
| `pitch` | `#08080a` | The ground |
| `pitch-2` | `#101013` | Tiles and panels |
| `bone` | `#ece5d8` | Headlines, primary buttons |
| `ash` | `#8b857c` | Body copy |
| `ash-dim` | `#5a554e` | Footer, hairlines |

Buttons are bone on pitch, and invert to white on hover. Quiet buttons are a
hairline border that brightens.

### Typography

- **Archivo** (`font-heavy`, weight 800, tight tracking) for every headline
- **Geist** (`font-sans`) for body copy
- No third face, no monospace

### Shape and motion

Everything is rounded. `rounded-full` on buttons and nav, `rounded-3xl` on
tiles. Transitions run 300 to 500ms, never faster: the whole point of this
direction is that it feels unhurried.

`SilkField` draws long lines drifting across the hero and the closing
section. It is decorative, hidden from screen readers, and draws a single
still frame when the visitor has asked for reduced motion. `Reveal` fades
sections in as they scroll into view and is disabled the same way.

### Copy rules

No em-dashes in anything a visitor reads. Use the middot (·) for label
separators. Avoid the AI-tell vocabulary listed in the garage CLAUDE.md.
Read it out loud before shipping it.

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
