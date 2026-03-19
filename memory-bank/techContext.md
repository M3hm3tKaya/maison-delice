# Maison Delice - Tech Context

## Framework & Runtime
- Next.js 16.2.0 (App Router)
- React 19.2.4
- TypeScript 5.x
- Node.js (latest LTS)

## Styling
- Tailwind CSS 4 with @tailwindcss/postcss
- Custom colors defined via @theme inline in globals.css
- No tailwind.config.ts (Tailwind v4 uses CSS-based config)

## Dependencies
- framer-motion: Page transitions and scroll animations
- gsap + @gsap/react: Available for complex animations
- lenis: Smooth scrolling library (available)
- clsx: Conditional className utility

## Fonts (Google Fonts via next/font)
- Playfair Display: Headings (400-700)
- Great Vibes: Logo and script accents (400)
- Lato: Body text (300, 400, 700)

## Build & Dev
- npm run dev: Development server
- npm run build: Production build
- npm run lint: ESLint check

## Key Decisions
- All pages use "use client" for interactivity (forms, filters, animations)
- Footer is a server component (no client-side interactivity)
- Placeholder images use CSS gradients instead of actual images
- No external API calls - all data is static/hardcoded
