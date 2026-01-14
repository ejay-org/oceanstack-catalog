# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an MSP (Managed Service Provider) Open Source Catalog - a Next.js 15 web application that catalogs and categorizes open-source tools for building MSP integrated operation platforms. The site provides two main views:
1. **Inventory page** (`/`) - Browse and filter all open-source projects
2. **Module Mapping page** (`/mapping`) - View feature-based mappings between MSP modules and open-source tools

The project is written primarily in Korean and is deployed to GitHub Pages at `/stackcatalog` base path.

## Commands

### Development
```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production (outputs to ./out directory)
npm run build

# Lint code
npm run lint
```

### Testing Production Build Locally
```bash
NODE_ENV=production npm run build
```

### Deployment
- GitHub Actions automatically deploys to GitHub Pages on push to `main` branch
- Workflow file: `.github/workflows/deploy.yml`
- Manual deployment: Go to Actions tab → "Deploy to GitHub Pages" → "Run workflow"

## Architecture & Data Model

### Core Data Structures

The application is built around three primary data types defined in `src/types/index.ts`:

1. **OpenSource** - Individual open-source projects with:
   - Basic info: name, description, license, GitHub URL, stars, language, start year
   - `features`: Array of capability strings (e.g., "monitoring", "alerting", "ci-cd")
   - `icon`: Either a Lucide icon name (string) or image URL

2. **Category** - Five MSP categories (ITAM, ITOM, ITSM, Analysis, AI/Automation):
   - Each has color theming (gradient, border, text colors)
   - Defined in `src/data/categories.ts`

3. **Module** - Specific MSP functional modules (e.g., "자산관리", "모니터링"):
   - Belongs to a category
   - Has `requiredFeatures`: Array of feature strings needed for this module
   - Defined in `src/data/modules.ts`

### Feature Matching System

Located in `src/lib/mapping.ts`, this system calculates how well open-source projects match module requirements:

- **`isModuleSupported()`** - Returns true if an open-source has ANY of the module's required features
- **`getMatchScore()`** - Calculates percentage match (0-100) based on how many required features are present
- **`getOpenSourceForModule()`** - Returns all open-source projects supporting a module

This powers the Module Mapping page where projects are shown with battery icons indicating match percentage.

### Component Architecture

**Key Components:**
- `OpenSourceCard` (`src/components/OpenSourceCard.tsx`) - Displays project cards on inventory page with icon, stats, license, and feature badges
- `BatteryIcon` (`src/components/BatteryIcon.tsx`) - Visual indicator (0-100%) showing feature match score with tooltip showing which features match/miss
- `ProjectIconImage` - Handles both Lucide icons and image URLs with fallback on error
- `MultiSelect` - Custom filter component for inventory page

**Icon Handling:**
- Icons can be Lucide React icon names (string like "Database") or URLs (http/https/local path)
- Components check if icon starts with http/https/slash to determine type
- Image loading has error fallback to default Lucide icon

## Data Management

### Adding New Open Source Projects

Edit `src/data/opensource.ts`:

```typescript
{
  id: "unique-id",
  name: "Project Name",
  description: "Description in Korean",
  license: "MIT", // or other license
  githubUrl: "https://github.com/...",
  stars: 12345,
  startYear: 2020,
  language: "Python", // primary language
  features: [
    "monitoring",
    "alerting",
    "metrics-collection"
  ],
  icon: "Activity" // Lucide icon name OR image URL
}
```

**Important Notes:**
- `features` array drives the module matching system - use existing feature names when possible for consistency
- Icon can be:
  - Lucide icon name (e.g., "Database", "Activity", "Shield")
  - Image URL (e.g., "https://..." or "/icons/logo.png")
  - See README.md for comprehensive icon guidelines

### Adding New Modules

Edit `src/data/modules.ts`:

```typescript
{
  id: "unique-module-id",
  name: "모듈 이름",
  description: "모듈 설명",
  category: "itam", // or itom, itsm, analysis, ai-automation
  requiredFeatures: [
    "feature-1",
    "feature-2"
  ]
}
```

## Next.js Configuration

The app uses static export (`output: 'export'`) for GitHub Pages deployment:
- `basePath` is `/stackcatalog` in production (configured in `next.config.ts`)
- Images are unoptimized for static hosting
- All pages are pre-rendered at build time

## Styling

- **Tailwind CSS** for utility-first styling
- **shadcn/ui** components for Card, Badge, Tooltip (in `src/components/ui/`)
- CSS variables in `src/app/globals.css` define theme colors (HSL format)
- Dark mode support configured via `class` strategy in `tailwind.config.ts`

## File Organization

```
src/
├── app/
│   ├── page.tsx              # Inventory page with filtering
│   ├── mapping/page.tsx      # Module mapping view
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # CSS variables and global styles
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── OpenSourceCard.tsx    # Project card for inventory
│   ├── BatteryIcon.tsx       # Match percentage indicator
│   ├── ProjectIconImage.tsx  # Icon/image handler
│   └── MultiSelect.tsx       # Filter dropdown
├── data/
│   ├── opensource.ts         # All open-source project data
│   ├── categories.ts         # Five MSP categories
│   └── modules.ts            # MSP functional modules
├── lib/
│   ├── mapping.ts            # Feature matching logic
│   └── utils.ts              # Utility functions (cn helper)
└── types/
    └── index.ts              # TypeScript interfaces
```

## Key Patterns

1. **Feature-based matching** - The entire mapping system relies on matching feature strings between open-source projects and module requirements. Always use consistent feature naming.

2. **Client-side filtering** - The inventory page uses `"use client"` with React state for filtering by license, features, and search query.

3. **Type safety** - All data conforms to TypeScript interfaces. When adding data, ensure it matches the types in `src/types/index.ts`.

4. **Static generation** - No API calls or dynamic data. Everything is imported from data files and rendered at build time.

5. **Icon flexibility** - Components handle both Lucide icons and image URLs transparently with error handling.
