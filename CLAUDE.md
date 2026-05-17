# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Art portfolio and ecommerce website for artist Queen Nwaneri. Minimalist design with 3D effects, smooth animations, and Stripe payments (Australia/AUD only).

## Commands

```bash
pnpm dev          # Start dev server on localhost:3000
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## Tech Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4** — utility-first styling via CSS variables for light/dark themes
- **Framer Motion** — page transitions, scroll animations, hover effects
- **React Three Fiber + drei** — 3D hero scene (floating artwork planes, particles)
- **Stripe** — checkout sessions, AUD currency, AU-only shipping
- **next-themes** — system preference detection + manual light/dark toggle
- **lucide-react** — icon library
- **Fonts**: Cormorant Garamond (display/headings) + Inter (body)

## Architecture

### Theming
CSS variables defined in `src/app/globals.css` (`:root` and `.dark`). Mapped to Tailwind via `@theme inline`. next-themes applies `.dark` class on `<html>`. Use semantic color names: `background`, `foreground`, `muted`, `muted-foreground`, `accent`, `card`, `border`.

### Three.js / R3F
All R3F components MUST be `"use client"` and loaded via `dynamic(() => ..., { ssr: false })` from a client component wrapper. Never use `ssr: false` in Server Components. The `HeroSceneWrapper` pattern handles this.

### Data Layer
Artwork data is in `src/data/artworks.ts` as a typed array. No CMS — flat file approach. To add/edit artworks, modify this file. Helper functions: `getArtworkBySlug()`, `getArtworksByCollection()`, `getFeaturedArtworks()`.

### Stripe Integration
- `src/lib/stripe.ts` — server singleton
- `src/app/api/checkout/route.ts` — creates Checkout Session (AUD, AU-only)
- `src/app/api/webhook/route.ts` — handles payment completion
- Keys in `.env.local`: `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET`

### Route Structure
- `/` — Hero with 3D scene + gallery grid with collection filters
- `/artwork/[slug]` — Detail page with image, metadata, price, buy button
- `/about` — Artist bio with scroll-triggered text animations
- `/contact` — Instagram + email with magnetic button effects
- `/api/checkout` — POST: Stripe Checkout Session
- `/api/webhook` — POST: Stripe webhook

### Animation Patterns
- Scroll reveals: `motion.div` with `whileInView` + staggered delays
- Page entry: `motion.div` with `initial`/`animate` fade+slide
- Hover: `whileHover={{ y: -4 }}` or `scale` on cards
- Filter transitions: `LayoutGroup` + `AnimatePresence` for grid reflow
- Ease tuple used for Framer Motion: `[0.25, 0.1, 0.25, 1] as const` (required for TypeScript)
- Navbar pill indicator: `layoutId="nav-indicator"` for shared layout animation

### Component Conventions
- Layout components: `src/components/layout/` (Navbar, Footer, PageTransition, HeroContent)
- UI primitives: `src/components/ui/` (ThemeToggle, AnimatedText, MagneticButton)
- Feature components grouped by domain: `gallery/`, `artwork/`, `three/`, `contact/`, `about/`
