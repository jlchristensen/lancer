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
| Fonts | Geist Sans, Geist Mono, Playfair Display | via next/font |
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
    │   ├── globals.css            ← Tailwind import + brand CSS variables
    │   ├── layout.tsx             ← Root layout, metadata, fonts
    │   └── page.tsx               ← Home page, composes the sections
    │
    ├── lib/
    │   └── site.ts                ← Contact details, links, product list
    │
    └── components/sections/
        ├── Header.tsx             ← Fixed nav, goes solid on scroll
        ├── HeroSection.tsx        ← Headline and the two CTAs
        ├── WorkSection.tsx        ← Built by Lancer, the live products
        ├── ServicesSection.tsx    ← The three kinds of work
        ├── HowItWorksSection.tsx  ← Call, Scope, Build and hand off
        ├── CTASection.tsx         ← Repeat CTA
        └── Footer.tsx             ← Wordmark, email, copyright
```

## Current State of the Landing Page

One page, top to bottom:

1. **Header** - Fixed nav, "Lancer" wordmark, Work and Services links, primary CTA
2. **Hero** - "We build the software your business is missing." plus two CTAs
3. **Built by Lancer** - The live products, each linking out. This is the social proof, in place of testimonials we do not have
4. **What we do** - The three services
5. **How it works** - Call, Scope, Build and hand off
6. **CTA** - "Tell us what's slow."
7. **Footer** - Wordmark, email, copyright

### Editing the site

Almost everything an agent gets asked to change lives in **`src/lib/site.ts`**: the email address, the products on show, and the booking link. Change it there, not in the components.

**The Calendly link is not set yet.** `site.calendlyUrl` is an empty string. While it is empty, every "Book a call" button opens an email instead and its label reads "Start a project", so no button is ever a dead end. Paste the Calendly URL into that one field and the whole site switches over.

## Design System

Follow `docs/standards/ui-ux-standards.md` in the garage. Simple, minimal, generous whitespace, one primary color.

### Colors (Tailwind classes)
- **Primary:** `brand-600` (#2e8b57) for buttons and accents, `brand-700` for hover, `brand-50` for tinted backgrounds
- **Text:** `slate-900` headings, `slate-600` body, `slate-500` subtle
- **Background:** `white`, with `slate-50` on alternating sections

Brand tokens are defined in `src/app/globals.css` under `@theme inline`. Three colors on a screen is the ceiling.

### Typography
- **Font:** Geist Sans for everything, Playfair Display (`font-display`) for the wordmark only
- **Page title:** `text-4xl font-bold tracking-tight md:text-6xl`
- **Section heading:** `text-3xl font-bold md:text-4xl`
- **Body:** `text-lg text-slate-600`

### Component patterns
- **Buttons:** `rounded-full bg-brand-600 px-8 py-3.5 font-semibold text-white`, secondary is `border border-slate-300`
- **Cards:** `rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md`
- **Sections:** `px-6 py-16 md:py-24 lg:px-8`, container `max-w-6xl`
- **Buttons stack full width on mobile** and sit side by side from `sm:` up

### Copy rules
No em-dashes in anything a visitor reads. Use the middot (·) for label separators. Avoid the AI-tell vocabulary listed in the garage CLAUDE.md. Read it out loud before shipping it.

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
