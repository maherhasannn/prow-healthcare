# Prow — HIPAA-Compliant AI for Healthcare

A production-grade frontend website for Prow, a HIPAA-compliant AI platform designed for healthcare organizations. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

**This is the main frontend application.** The index page (`app/page.tsx`) serves the complete website interface.

## Design Philosophy

**Radical Clarity** — A refined, editorial fintech aesthetic inspired by Mercury.com. The design eschews generic "AI startup" tropes in favor of clean lines, generous whitespace, and sophisticated typography.

### Key Design Principles

- **Light & Airy**: Off-white backgrounds (`#F9F9F7`, `#F2F4F6`) instead of pure white
- **Distinctive Typography**: Space Grotesk for headings, IBM Plex Sans for body text
- **Sophisticated Accents**: Electric maritime blue (`#0066CC`) applied sparingly
- **Motion-First**: Every interaction is animated with custom bezier curves
- **Abstract Visualizations**: CSS/SVG-based graphics for AI processes

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Build static export (generates index.html in /out directory)
npm run build
```

This will generate a static site in the `out/` directory with `index.html` as the entry point, ready for GitHub Pages deployment.

### GitHub Pages Deployment

1. Build the static site:
   ```bash
   npm run build
   ```

2. The `out/` directory will contain `index.html` and all static assets.

3. For GitHub Pages:
   - **Option A**: Commit the `out/` directory and configure GitHub Pages to serve from `/out`
   - **Option B**: Use GitHub Actions to automatically build and deploy (recommended)

4. If committing `out/` manually, you may need to remove `/out/` from `.gitignore` temporarily.

## Project Structure

```
prowEncryption/
├── app/
│   ├── layout.tsx              # Root layout with font configuration
│   ├── page.tsx                # Main index page - serves the frontend website
│   └── globals.css             # Global styles and CSS variables
├── components/
│   ├── Navigation.tsx          # Fixed navigation with scroll effects
│   ├── Hero.tsx                # Hero section with staggered animations
│   ├── Features.tsx            # Feature grid with hover effects
│   ├── HIPAASafeguards.tsx     # HIPAA compliance safeguards section
│   ├── PrivacyDataProtection.tsx  # Privacy and data protection features
│   ├── ChatIntegration.tsx     # EHR integration and chat interface
│   └── Footer.tsx              # Footer component
└── package.json
```

**Note:** The main entry point is `app/page.tsx`, which renders the complete frontend website.

## Features

- **HIPAA Compliance**: Comprehensive coverage of administrative, physical, and technical safeguards
- **Privacy & Data Protection**: No training on customer data, private AI sessions, PHI guardrails
- **Healthcare-Focused**: Built for clinical workflows with EHR integration (Epic, Cerner, Allscripts)
- **Staggered Page Loads**: Elements slide up and fade in with custom bezier curves
- **Scroll-Triggered Animations**: Components animate as they enter the viewport
- **Micro-interactions**: Hover effects on buttons and cards
- **Animated Visualizations**: 
  - HIPAA safeguard category animations
  - Privacy protection visualizations
  - EHR integration mockups
- **Responsive Design**: Mobile-first approach with breakpoints
- **Accessibility**: Semantic HTML and high contrast ratios

## Customization

### Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --color-background: #F9F9F7;
  --color-background-alt: #F2F4F6;
  --color-text: #1A1F2C;
  --color-accent: #0066CC;
}
```

### Typography

Fonts are configured in `app/layout.tsx`. To change fonts, update the Google Fonts imports and CSS variables.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **Google Fonts** - Space Grotesk & IBM Plex Sans

## License

Private - All rights reserved.









