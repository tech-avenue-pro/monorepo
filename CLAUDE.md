# TechAvenue Pro — Monorepo

## Overview
Turborepo monorepo. One live website today (`apps/web`); more apps will be added under `apps/`.
Shared code lives in `packages/`.

## Repo Structure

```
monorepo/
├── apps/
│   ├── web/          # First website (techavenue.pro) — port 3000
│   └── chathaclinic/ # Second website (chathaclinic.com) — port 3001
├── packages/
│   ├── ui/           # Shared React component library (@repo/ui)
│   ├── styles/       # Shared CSS files & Tailwind preset (@repo/styles)
│   ├── typescript-config/
│   ├── eslint-config/
│   ├── email/        # Nodemailer email utilities (@repo/email)
│   └── config/
```

---

## `packages/ui` — Component Library

Source root: `packages/ui/src/design-systems/`

### Layouts (wrappers for page sections)
Located in `layouts/`:
- `HeroSection` / `HeroContainer` — for the top hero area only
- `RegularSection` / `RegularContainer` — standard page sections with normal padding
- `SmallSection` — reduced-spacing wrapper (use for card-only sections like CTA)

**Page structure pattern** (every page follows this):
```tsx
<HeroSection><HeroContainer>
  <HeroSectionTech {...heroContent} />
</HeroContainer></HeroSection>

<RegularSection><RegularContainer>
  <ServiceSection {...servicesContent} />
</RegularContainer></RegularSection>

<SmallSection><RegularContainer>
  <FinalCTAWithForm {...ctaContent} form={<Form />} />
</RegularContainer></SmallSection>
```

### Components
Located in `components/`. Each component has its own folder:

| Folder | Component | Content Type |
|--------|-----------|--------------|
| `cta/` | `FinalCTAWithForm` | `FinalCTAFormContent` |
| `footer/` | `Footer` | `FooterContent` |
| `hero-sections/tech/` | `HeroSectionTech` | `HeroSectionTechContent` |
| `hero-sections/right-visual/` | `HeroSectionRightVisual` | `HeroSectionRightVisualContent` |
| `how-it-works/` | `HowItWorks` | `HowItWorks` |
| `services/ServiceSection/` | `ServiceSection` | `ServiceSectionContent` |
| `services/service-card-top-visual/` | `ServiceCardTopVisual` | `ServiceCardTopVisualContent` |
| `services/service-card-top-number/` | `ServiceCardTopNumber` | `ServiceCardTopNumberContent` |
| `services/service-detail-page/` | `ServiceDetails` | `ServiceDetailPageContent` |
| `services/ServiceSectionSimple/` | `ServiceSectionSimple` | — |
| `stats/` | `StatsView` | `StatsContent` |
| `why-choose-us/` | `WhyChooseUs` | `WhyChooseUsContent` |
| `why-it-works/` | `WhyItWorks` | `WhyItWorksContent` |
| `section-title/standard/` | `SectionTitleView` | — |
| `section-title/split-messages/` | `SectionTitleSplitMessageView` | `SectionTitleSplitContent` |
| `hero-sections/doctor/` | `HeroSectionDoctor` | `HeroSectionDoctorContent` |
| `specializations/` | `SpecializationsSection` | `SpecializationsSectionContent` |
| `locations/` | `LocationsSection` | `LocationsSectionContent` |
| `experience/` | `ExperienceSection` | `ExperienceSectionContent` |

Navigation: `navigation-bar/StandardNavBar.tsx`

### Component Content Pattern
Every component has a sibling `*-content.ts` file defining its props interface.
Components accept a single spread of those props:
```tsx
// footer-content.ts
export interface FooterContent {
  footerTitle: string;
  footerLogo: string;
  socialLinks: { logo: string; link: string; alt: string }[];
  phoneNumber: string;
  emailAddress: string;
  copyrightText: string;
  footerLinks: { title: string; links: { title: string; link: string }[] }[];
}

// Footer.tsx usage
function Footer({ footerTitle, footerLogo, ... }: FooterContent) { ... }
```

### Design System Primitives
- `DSText` — typography with `variant` (DSTextVariant enum) and `color` (DSTextColor enum)
- `DSButton` / `DSLinkButton` — buttons with `variant` (DSButtonVariant enum)
- `DSLink` — links with variant/color/arrow props
- `DSMotion` — Framer Motion wrapper with preset animations: `fade-up`, `blur-in`, `fade-in`, `scale-in`, `slide-right`, `slide-left`
- `DSStagger` — staggered animation container
- `DSLayoutBackground` enum — backgrounds like `default`, `defaultVariation1-3`, `primary`, `secondary`, `accent`, etc.

Key enums (in `typography.ts`, `backgrounds.ts`):
- `DSTextVariant`: largestTitle → footnote
- `DSTextColor`: primary, secondary, ..., senary, septenary, accent, success, warning, critical, white, gray variants
- `DSLayoutBackground`: default, defaultVariation1/2/3, primary, secondary, accent, white, black, transparent

---

## `packages/styles` — Shared CSS

Files imported in `apps/web/app/layout.tsx`:
- `design-systems.css` — all CSS variables (colors, backgrounds, buttons, text classes)
- `animations.css` — `hero-reveal`, `slide-up-animation` keyframes
- `navigation.css` — `.header`, sticky nav, mobile menu, dropdowns
- `backgrounds.css` — background utility classes

CSS classes follow `ds-` prefix: `ds-text-*`, `ds-bg-*`, `ds-btn-*`.
Tailwind preset: `@repo/styles/tailwind-preset`.

---

## `apps/web` — Website

### Content Layer
All page content lives in `app/content/`, split by section:

```
app/content/
├── hero-section/
│   ├── hero-section-tech-content.json
│   └── getHeroContent.ts
├── how-it-works/
│   ├── how-it-works.json
│   └── getHowItWorksContent.ts
├── why-choose-us/
│   ├── why-choose-us.json
│   └── getWhyChooseUsContent.ts
├── cta-section/
│   ├── cta-section-content.json
│   └── getCTASectionContent.ts
├── footer-section/
│   ├── footer-content.json
│   ├── secondary-footer-content.json
│   └── getFooterContent.ts
└── services/
    ├── servicesContent.json          # Home-page service card list
    ├── servicesContent.ts            # getServices(), getServiceBySlug(slug)
    ├── digital-marketing-ads.json
    ├── premium-business-website.json
    ├── branding-visual-identity.json
    ├── online-appointments.json
    ├── live-queue.json
    ├── google-visibility-and-local-search.json
    └── social-media-presence-management.json
```

**Adding content to a section:**
1. Edit the JSON file in `app/content/<section>/`
2. The getter function casts JSON to the type from `@repo/ui` — no code changes needed unless the shape changes

**Getter pattern (same for all sections):**
```ts
import sectionData from "./section-content.json";
import { SectionContent } from "@repo/ui/design-systems/components/.../content.ts";

export function getSectionContent(): SectionContent {
  return sectionData as SectionContent;
}
```

### Services
- Home page lists services from `servicesContent.json` (cards with image, slug, href)
- Detail pages: `app/services/[slug]/page.tsx` — loads `getServiceBySlug(slug)`
- Adding a new service: add JSON file matching `ServiceDetailPageContent` shape, add entry to `servicesContent.json`

### Navigation
`app/MainNavBar.tsx` — wraps `StandardNavBar`. Links are hardcoded (not JSON-driven).

### Contact Form
`app/HomeView/Form.tsx` — client component. Submits to `app/api/contact/route.ts` (uses `@repo/email`).

### Key Files
- `app/page.tsx` — homepage, assembles all sections
- `app/layout.tsx` — root layout, fonts (Archivo + Inter), CSS imports, metadata
- `tailwind.config.cjs` — extends `@repo/styles/tailwind-preset`, includes ui package content paths
- `next.config.js` — currently empty (extends defaults)

---

## Adding a New Website

1. Create `apps/<name>/` following the same structure as `apps/web`
2. Import `@repo/ui`, `@repo/styles`, `@repo/email` in package.json
3. Follow the same content layer pattern: `app/content/<section>/` with JSON + getter
4. Add to Turborepo `turbo.json` pipeline if needed
