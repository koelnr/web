# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 16 application with TypeScript, React 19, and Tailwind CSS 4. Uses shadcn/ui component library (New York style) with Bun as the package manager.

## Development Commands

```bash
bun dev          # Start development server on http://localhost:3000
bun run build    # Build production bundle
bun start        # Run production server
eslint           # Run ESLint (no additional args needed)
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS 4 with PostCSS, tw-animate-css for animations
- **UI Components**: shadcn/ui (New York style variant)
- **Package Manager**: Bun
- **Fonts**: Geist Sans & Geist Mono from Google Fonts

## Project Structure

- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with font configuration
  - `page.tsx` - Homepage
  - `globals.css` - Global styles with Tailwind and theme variables
- `lib/` - Shared utilities
  - `utils.ts` - Contains `cn()` utility for merging Tailwind classes
- `components/` - React components (none yet, but path aliases configured)
- `public/` - Static assets

## Configuration Notes

### Path Aliases
The project uses `@/*` as an alias pointing to the root directory:
```typescript
import { cn } from "@/lib/utils"
```

### shadcn/ui Configuration
Components are configured in `components.json`:
- Style: New York
- Base color: Gray
- CSS variables enabled
- Icon library: lucide-react
- Components go in `@/components/ui`

### Tailwind CSS 4
Using the new Tailwind v4 with inline theme configuration in `globals.css`. Color scheme uses OKLCH color space with CSS variables for theming. Dark mode is class-based (`.dark` class).

### TypeScript
- Target: ES2017
- Module resolution: bundler
- Strict mode enabled
- JSX: react-jsx (React 19 automatic runtime)
