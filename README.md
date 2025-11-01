# Frontend Mentor Challenges Collection

A collection of [Frontend Mentor](https://www.frontendmentor.io) challenge solutions built with SvelteKit. This project showcases various frontend challenges organized by difficulty level.

## 🚀 Features

- **Dynamic Routing** - All challenges are handled through a single dynamic route (`[slug]`)
- **Organized by Level** - Challenges categorized as newbie, junior (18 challenges total)
- **Search & Filter** - Find challenges by level or search by title
- **Multiple Views** - Grid, Card, and List view options
- **Responsive Design** - Mobile-first approach with modern CSS
- **Type-Safe** - TypeScript support with proper type checking

## 📁 Project Structure

```
src/
├── routes/
│   ├── challenges/
│   │   ├── [slug]/          # Dynamic route for all challenges
│   │   │   ├── +page.js     # Server-side validation & data loading
│   │   │   ├── +page.svelte  # Dynamically loads component
│   │   │   └── +layout.svelte # Applies challenge-specific styles
│   │   ├── +page.svelte      # Challenges listing page
│   │   └── +layout.svelte    # Challenges layout
│   ├── +page.svelte          # Landing page
│   ├── +layout.svelte        # Root layout
│   └── +error.svelte         # Global error page (404, etc.)
├── lib/
│   ├── components/
│   │   ├── shared/           # Reusable components (Attr, Spinner, PlaceholderImage)
│   │   ├── level/
│   │   │   ├── newbie/       # Newbie level challenge components
│   │   │   └── junior/       # Junior level challenge components
│   │   └── landing/          # Landing page components
│   └── config/
│       ├── challenge-routes.js    # Maps slugs to components (dynamic imports)
│       ├── challenge-layouts.js  # Challenge layout configurations
│       └── challenge-data.js     # Challenge data access utilities
└── data/
    └── challenges.json        # Challenge data (titles, slugs, levels, thumbnails)
```

## 🛠️ Tech Stack

- **[SvelteKit](https://kit.svelte.dev/)** v1.30.4 - Framework with dynamic routing
- **[Svelte](https://svelte.dev/)** v4.2.20 - Component framework
- **[Vite](https://vitejs.dev/)** v4.5.14 - Build tool
- **[TypeScript](https://www.typescriptlang.org/)** v5.9.3 - Type safety
- **CSS Custom Properties** - Theming and customization
- **Flexbox & Grid** - Layout systems
- **ImageKit CDN** - Image delivery and optimization
- **pnpm** - Package manager

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm check

# Type checking (watch mode)
pnpm check:watch

# Linting
pnpm lint

# Format code
pnpm format
```

## ➕ Adding New Challenges

Challenge components are **automatically loaded** through dynamic routing. The system:
1. Reads challenge data from `src/data/challenges.json`
2. Validates challenge existence server-side via `+page.js` (throws 404 if not found)
3. Maps slugs to component names via `src/lib/config/challenge-routes.js`
4. Dynamically imports components based on slug and level
5. Applies layout styles and attribution colors from `src/lib/config/challenge-layouts.js`

**No manual route files needed** - components are automatically available at `/challenges/[slug]`.

**Error Handling:** Invalid slugs automatically show a 404 page via `+error.svelte`.

Currently includes **18 challenges** across newbie and junior levels.

### Steps to Add a Challenge

1. **Add to data file**: Update `src/data/challenges.json` with challenge details:
   ```json
   {
     "order": 15,
     "title": "Your Challenge",
     "thumb": "15.jpg",
     "slug": "your-challenge-slug",
     "level": "newbie"
   }
   ```

2. **Create component**: Add component to appropriate level folder:
   - `src/lib/components/level/newbie/YourChallenge.svelte`
   - `src/lib/components/level/junior/YourChallenge.svelte`

3. **Configure routes**: Add component mapping to `src/lib/config/challenge-routes.js`:
   ```js
   // Add to componentNameOverrides if slug doesn't match component name
   'your-challenge-slug': 'YourChallenge',
   
   // Add to componentImports
   'your-challenge-slug': () => import('$lib/components/level/newbie/YourChallenge.svelte'),
   
   // Add to fallbackImports (optional, for fallback handling)
   'newbie/YourChallenge': () => import('$lib/components/level/newbie/YourChallenge.svelte')
   ```

4. **Configure layout** (optional): Add layout config to `src/lib/config/challenge-layouts.js` for custom attribution colors:
   ```js
   'your-challenge-slug': {
     title: 'Your Challenge',
     attrColors: {
       text: 'hsl(...)',
       link: 'hsl(...)',
       linkHover: 'hsl(...)'
     }
   }
   ```

That's it! The challenge will be automatically available at `/challenges/your-challenge-slug`.

## 📝 Component Guidelines

- **Naming**: Use PascalCase for component file names (`NewsletterSignup.svelte`)
- **Self-contained**: Include all styles in the component
- **Attribution**: Always include `<Attr />` component for Frontend Mentor attribution
- **Responsive**: Mobile-first CSS approach
- **CSS Variables**: Use custom properties for themeable colors
- **Accessibility**: Proper ARIA labels and semantic HTML

### Component Template

```svelte
<script>
  import Attr from "$lib/components/shared/Attr.svelte";
  import { glbVars } from "../../../../stores";
  
  // For images from CDN
  $: imageSrc = `${$glbVars.cdnUrl}your-component/image.jpg`;
</script>

<section class="container" role="main">
  <!-- Challenge content -->
  <Attr />
</section>

<style>
  .container {
    min-height: 100vh;
    /* Styles */
  }
</style>
```

### Important Notes

- **CDN URLs**: Use `${$glbVars.cdnUrl}slug/path` pattern (no extra slash after `cdnUrl` since it already ends with `/`)
- **Image paths**: Use `challenge-slug/filename.ext` format in CDN
- **Attribution**: Always include `<Attr />` at the end of component (positioned absolutely at bottom)
- **Container**: Use `role="main"` on main container for accessibility
- **Error handling**: Use `PlaceholderImage` component for images that may fail to load
- **Store subscription**: Use `$glbVars.cdnUrl` (with `$`) to access the store value reactively

### Import Examples

```svelte
// Shared components
import Attr from "$lib/components/shared/Attr.svelte";
import PlaceholderImage from "$lib/components/shared/PlaceholderImage.svelte";
import Spinner from "$lib/components/shared/Spinner.svelte";

// Landing components
import Main from "$lib/components/landing/Main.svelte";
```

## 📦 Package Management

This project uses **pnpm** for package management. All commands should use `pnpm`:

```bash
pnpm install    # Install dependencies
pnpm dev        # Development server
pnpm build      # Production build
pnpm preview    # Preview production build
pnpm check      # Type checking
pnpm check:watch # Type checking (watch mode)
pnpm lint       # Linting
pnpm format     # Code formatting
```

**Note:** The project uses `pnpm-lock.yaml` for dependency locking. Always commit this file.

---

Built with ❤️ using SvelteKit
