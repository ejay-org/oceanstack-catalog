# TODO List - MSP Open Source Catalog

Last updated: 2026-01-15

This document tracks all identified issues, improvements, and future tasks for the MSP Open Source Catalog project.

---

## Priority Legend

- 🔴 **Critical** - Blocks core functionality, should be fixed immediately
- 🟠 **High** - Important for quality/accessibility, fix soon
- 🟡 **Medium** - Improves UX/maintainability, schedule appropriately
- 🟢 **Low** - Nice to have, can be deferred

---

## Phase 1: Critical Fixes (Est. 1 week)

### 🔴 Data Integrity Issues

#### Missing Required Features
Six features are required by modules but provided by ZERO projects:

- [ ] **approval-process** - Add to workflow/ITSM projects
  - Suggested projects: n8n, Apache Airflow, GitLab (workflow features)
  - Required by: `itsm-workflow` module (modules.ts:104)

- [ ] **automated-reporting** - Add to reporting/BI tools
  - Suggested projects: Metabase, Apache Superset, Grafana
  - Required by: `analysis-report` module (modules.ts:161)

- [ ] **report-generation** - Add to analytics/BI projects
  - Suggested projects: Metabase, Apache Superset, Grafana
  - Required by: `analysis-report` module (modules.ts:159)

- [ ] **request-management** - Add to service desk/ticketing tools
  - Suggested projects: osTicket, GLPI, iTop
  - Required by: `itsm-workflow` module (modules.ts:107)

- [ ] **satisfaction-survey** - Add to help desk systems
  - Suggested projects: osTicket, GLPI (need to verify capabilities)
  - Required by: `itsm-desk` module (modules.ts:95)

- [ ] **progress-tracking** - Add to project management tools
  - Suggested projects: GitLab, Redmine (if added), or dedicated PM tools
  - Required by: `itsm-contract` module (modules.ts:120)

**Files to update:**
- `src/data/opensource.ts` - Add missing features to appropriate projects
- Consider: Review all 68 projects to ensure feature completeness

---

### 🟠 Type Safety Issues

- [ ] Fix unsafe `as any` casting in icon handling
  - **File:** `src/components/OpenSourceCard.tsx:26`
  - **Fix:** Use `keyof typeof LucideIcons` instead of `as any`
  - **Code:**
    ```typescript
    // Current (unsafe):
    const Icon = (LucideIcons as any)[iconName];

    // Better:
    const Icon = iconName && iconName in LucideIcons
      ? LucideIcons[iconName as keyof typeof LucideIcons]
      : LucideIcons.Box;
    ```

- [ ] Fix unsafe `as any` casting in ProjectIconImage
  - **File:** `src/components/ProjectIconImage.tsx:25`
  - **Fix:** Same pattern as above

- [ ] Add icon name validation
  - **Problem:** String-based icon names like "Database" aren't validated
  - **Fix:** Create a type or validation function to check icon names exist
  - **Files:** `src/data/opensource.ts`, `src/types/index.ts`

---

### 🟠 Accessibility - Critical Issues

- [ ] Add ARIA labels to search input
  - **File:** `src/app/page.tsx:113-119`
  - **Fix:** Add `aria-label="오픈소스 이름으로 검색"`

- [ ] Add ARIA attributes to MultiSelect dropdown
  - **File:** `src/components/MultiSelect.tsx`
  - **Fix:** Add `aria-expanded`, `aria-haspopup="listbox"`, `aria-controls`

- [ ] Add accessible label to BatteryIcon
  - **File:** `src/components/BatteryIcon.tsx`
  - **Fix:** Add `aria-label` with match percentage for screen readers
  - **Example:** `aria-label={`${percentage}% 기능 매칭`}`

- [ ] Fix color-only information in BatteryIcon
  - **File:** `src/components/BatteryIcon.tsx:20-33`
  - **Fix:** Add text labels or patterns in addition to colors

---

## Phase 2: High Priority Improvements (Est. 2-3 weeks)

### 🟠 Testing Infrastructure

- [ ] **Set up testing framework**
  - Install dependencies: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`
  - Create `vitest.config.ts`
  - Add test scripts to `package.json`

- [ ] **Write tests for mapping logic** (CRITICAL)
  - **File:** `src/lib/mapping.ts`
  - Test `isModuleSupported()` with various feature combinations
  - Test `getMatchScore()` edge cases (0%, 50%, 100%)
  - Test `getMatchingFeatureCount()` accuracy
  - Test `getOpenSourceForModule()` filtering
  - Test `getModulesForOpenSource()` filtering

- [ ] **Write component tests**
  - `OpenSourceCard` - renders correctly, handles icon errors
  - `BatteryIcon` - displays correct colors at thresholds
  - `MultiSelect` - filtering works, selection updates
  - Homepage filtering logic (page.tsx:29-54)

- [ ] **Write data validation tests**
  - All features in modules exist in at least one project
  - All GitHub URLs are valid format
  - All icon names are valid (if Lucide) or valid URLs

---

### 🟠 Accessibility - Keyboard Navigation

- [ ] **Implement keyboard navigation in MultiSelect**
  - **File:** `src/components/MultiSelect.tsx`
  - Support arrow keys to navigate options
  - Support Enter/Space to select options
  - Support Escape to close dropdown
  - Support Tab to move between elements
  - Focus management when opening/closing

- [ ] **Add keyboard shortcuts documentation**
  - Create help modal with keyboard shortcuts
  - Add to README

- [ ] **Test with screen reader**
  - Verify NVDA/JAWS compatibility
  - Test VoiceOver on macOS

---

### 🟡 Search & Filtering Improvements

- [ ] **Expand search functionality**
  - **File:** `src/app/page.tsx:44-50`
  - Search project descriptions in addition to names
  - Search features/capabilities
  - Add fuzzy matching (e.g., using Fuse.js)
  - Highlight search matches in results

- [ ] **Add sort options**
  - **File:** `src/app/page.tsx`
  - Sort by: Stars (ASC/DESC), Name (A-Z), Start Year, Language
  - Add UI controls for sorting
  - Preserve sort preference in URL params

- [ ] **Add category filtering to inventory page**
  - Currently only on mapping page
  - Add category filter dropdown/tabs

- [ ] **Add filter by category to mapping page**
  - Currently shows all categories at once
  - Add tabs or dropdown to view one category at a time

---

### 🟡 Documentation

- [ ] **Create CONTRIBUTING.md**
  - How to add new projects
  - Feature naming conventions
  - Icon selection guidelines
  - How to run tests
  - PR process

- [ ] **Create docs/DATA_SCHEMA.md**
  - Explain OpenSource, Category, Module types
  - Document all feature names and their meanings
  - Data validation rules

- [ ] **Create docs/ARCHITECTURE.md**
  - Explain feature matching system in detail
  - Component hierarchy
  - Data flow diagrams
  - Technology decisions

- [ ] **Add JSDoc comments**
  - **File:** `src/lib/mapping.ts` - All exported functions
  - **File:** `src/components/` - All component props
  - Explain parameters and return values

- [ ] **Expand README.md**
  - Add screenshots
  - Add "Why this project exists" section
  - Add technology choices rationale
  - Add deployment instructions

---

## Phase 3: Medium Priority Enhancements (Est. 4+ weeks)

### 🟡 User Experience Features

#### Export & Data Management

- [ ] **Add CSV export functionality**
  - Export filtered inventory results
  - Export module mappings
  - Include all project metadata

- [ ] **Add JSON export functionality**
  - Export raw data for API consumption
  - Export mapping matrix

- [ ] **Add print-friendly view**
  - CSS print styles
  - Generate PDF reports

#### Project Comparison

- [ ] **Implement project comparison tool**
  - Select multiple projects (checkboxes)
  - Side-by-side comparison view
  - Compare: features, license, stars, language, year
  - Highlight differences

- [ ] **Add comparison permalink**
  - Generate shareable URL with selected projects
  - URL param: `?compare=project1,project2,project3`

#### Favorites & Bookmarks

- [ ] **Add favorite/bookmark system**
  - Heart icon on project cards
  - Store in localStorage
  - "My Favorites" filter/view
  - Export favorites list

#### UI/UX Improvements

- [ ] **Add breadcrumb navigation**
  - Home > Inventory
  - Home > Module Mapping > [Category]

- [ ] **Add back-to-top button**
  - Shows after scrolling down 500px
  - Smooth scroll animation

- [ ] **Add "New" and "Trending" badges**
  - Mark projects added in last 3 months as "New"
  - Mark projects with high star growth as "Trending"
  - Requires: Add `dateAdded` field to OpenSource type

- [ ] **Add project detail modal**
  - Click card to open detailed view
  - Show all features (not just first 4)
  - Show full description
  - Show related projects

- [ ] **Add empty state illustrations**
  - When no search results
  - When no projects match filters
  - Use friendly illustrations

---

### 🟡 Performance Optimizations

- [ ] **Implement pagination or virtualization**
  - **File:** `src/app/page.tsx:134-139`
  - Current: Renders all 68 cards at once
  - Option A: Virtual scrolling (react-window)
  - Option B: Pagination (show 20 per page)

- [ ] **Optimize icon loading**
  - **Files:** All icon image components
  - Use Next.js Image component instead of `<img>`
  - Implement lazy loading for off-screen images
  - Add loading placeholders

- [ ] **Memoize expensive computations**
  - **File:** `src/app/page.tsx:23-26`
  - Avoid re-sorting options on every render
  - Add `useCallback` to event handlers

- [ ] **Code splitting**
  - Lazy load mapping page
  - Split large data files if they grow

- [ ] **Add loading states**
  - Show skeleton loaders while rendering
  - Add suspense boundaries

---

### 🟡 Data Enhancements

- [ ] **Add more metadata to projects**
  - `dateAdded`: Date - When added to catalog
  - `lastUpdated`: Date - Last GitHub commit date (could fetch via API)
  - `contributors`: Number - GitHub contributor count
  - `website`: String - Official website URL
  - `documentation`: String - Docs URL
  - `maturity`: "experimental" | "stable" | "mature"
  - `communitySize`: "small" | "medium" | "large"

- [ ] **Add project relationships**
  - "Alternative to": Link similar projects
  - "Works well with": Integration recommendations
  - "Part of stack": Group related tools

- [ ] **Validate all GitHub URLs**
  - Write script to check all URLs return 200
  - Check star counts are up to date
  - Auto-update stars periodically?

- [ ] **Validate all icon image URLs**
  - Check external icon URLs are accessible
  - Download and cache frequently broken images locally

---

### 🟢 Nice-to-Have Features

- [ ] **Add dark mode toggle**
  - Already configured in tailwind.config.ts
  - Add UI toggle in header
  - Persist preference in localStorage

- [ ] **Add language toggle (Korean/English)**
  - Internationalization support
  - Translate all UI strings
  - Translate project descriptions?

- [ ] **Add RSS feed**
  - Generate feed of newly added projects
  - Allow users to subscribe

- [ ] **Add GitHub star tracking**
  - Show star count trends over time
  - "Rising stars" section for fast-growing projects

- [ ] **Add project health indicators**
  - Last commit date
  - Issue count
  - PR response time
  - Fetch from GitHub API

- [ ] **Add community ratings**
  - Allow users to rate projects
  - Show average rating
  - Requires: Backend/database

- [ ] **Add comment/review system**
  - User reviews per project
  - Requires: Authentication + backend

- [ ] **Add project suggestions**
  - "Based on your filters, you might like..."
  - ML-based recommendations

- [ ] **Add analytics dashboard**
  - Most viewed projects
  - Most filtered features
  - Popular categories
  - Requires: Analytics integration

---

## Technical Debt & Code Quality

### 🟡 Refactoring Opportunities

- [ ] **Extract magic numbers to constants**
  - `OpenSourceCard.tsx:99` - `slice(0, 4)` → `MAX_VISIBLE_FEATURES`
  - `BatteryIcon.tsx:20-33` - Color thresholds → Named constants
  - `page.tsx:66` - `top-[89px]` → Calculate from header height

- [ ] **Extract hardcoded text to constants**
  - All Korean text strings
  - Prepare for i18n

- [ ] **Consistent error handling**
  - Add error boundaries
  - Log errors to console (dev) or service (prod)
  - User-friendly error messages

- [ ] **Add PropTypes or stricter TypeScript**
  - Make all optional props explicit
  - Add runtime validation for data files

---

## Infrastructure & DevOps

### 🟡 Development Experience

- [ ] **Add pre-commit hooks**
  - Install Husky
  - Run linter before commit
  - Run type check before commit
  - Run tests before push

- [ ] **Add code formatting**
  - Install Prettier
  - Add `.prettierrc`
  - Add format script to package.json

- [ ] **Improve build pipeline**
  - Add build time reporting
  - Add bundle size analysis
  - Fail build on TypeScript errors
  - Fail build on lint errors

- [ ] **Add environment validation**
  - Check Node version matches requirements
  - Validate all dependencies installed

### 🟢 Deployment & Monitoring

- [ ] **Add deployment preview**
  - Preview PRs on Vercel/Netlify
  - Add preview URL to PR comments

- [ ] **Add error monitoring**
  - Integrate Sentry for production errors
  - Track JavaScript errors

- [ ] **Add performance monitoring**
  - Web Vitals tracking
  - Lighthouse CI in GitHub Actions

- [ ] **Add uptime monitoring**
  - Monitor GitHub Pages availability
  - Alert on downtime

---

## Questions & Research Needed

- [ ] Should we add a backend for user features (favorites, ratings)?
- [ ] Should we auto-update GitHub stars periodically (API integration)?
- [ ] Should we support multiple languages (i18n)?
- [ ] Should we add authentication for admin features?
- [ ] What's the long-term vision for this catalog?

---

## Completed Tasks

_Tasks will be moved here once completed_

---

## Notes

- All file references are relative to project root: `/Users/User/Documents/oceanstack-catalog/`
- Priority and effort estimates may change based on implementation details
- Add new items to this TODO as they're discovered
- Review and reprioritize quarterly

---

**Next Review Date:** 2026-04-15
