# Maison Delice - System Patterns

## Architecture
- Next.js App Router with file-based routing
- Client components for interactive pages ("use client")
- Server components where possible (Footer)
- Shared layout with Navbar and Footer

## Design Patterns
- AnimatedSection: Reusable scroll-triggered fade-in animations
- SectionTitle: Consistent section header component with decorative elements
- Placeholder images: CSS gradient-based placeholders for demo
- Color system: Tailwind CSS custom colors via @theme inline

## Component Structure
```
src/
  app/
    layout.tsx          - Root layout with fonts, Navbar, Footer
    page.tsx            - Home page
    menu/page.tsx       - Menu with filter
    hakkimizda/page.tsx - About page with timeline
    galeri/page.tsx     - Gallery with masonry + lightbox
    siparis/page.tsx    - Order form
    blog/page.tsx       - Blog grid
    iletisim/page.tsx   - Contact form + info
  components/
    Navbar.tsx          - Fixed navbar with mobile hamburger
    Footer.tsx          - Dark brown footer
    AnimatedSection.tsx - Scroll animation wrapper
    SectionTitle.tsx    - Section header component
```

## Animation Patterns
- Framer Motion for page-level and component animations
- Scroll-triggered with viewport detection
- 0.6-0.8s duration, easeOut curves
- Staggered children with delay multipliers
