# Vision X Analysis

**An independent football scouting and video analysis website.**

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

---

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Fonts**: Barlow Condensed (display), DM Sans (body), Space Mono (mono)

---

## Project Structure

```
vision-x/
├── app/
│   ├── layout.tsx              # Root layout with fonts, Navbar, Footer
│   ├── globals.css             # Global styles, Tailwind layers, custom utilities
│   ├── page.tsx                # Home page
│   ├── not-found.tsx           # 404 page
│   ├── analysis/
│   │   ├── page.tsx            # Analysis listing
│   │   └── [id]/page.tsx       # Analysis detail
│   ├── players/
│   │   ├── page.tsx            # Players listing
│   │   └── [id]/page.tsx       # Player profile
│   ├── methodology/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── Navbar.tsx              # Sticky, animated navbar with mobile menu
│   ├── Footer.tsx
│   ├── VideoCard.tsx           # Analysis card with thumbnail
│   ├── PlayerCard.tsx          # Player profile card
│   ├── SectionHeader.tsx       # Reusable section heading
│   └── PageTransition.tsx      # Framer Motion page wrapper
├── lib/
│   └── data.ts                 # Placeholder data (players, analyses)
├── tailwind.config.ts          # Extended design tokens
├── tsconfig.json
└── next.config.js
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Design System

### Color Tokens (Tailwind)

| Token | Hex | Usage |
|-------|-----|-------|
| `pitch-black` | `#080B0F` | Page background |
| `pitch-dark` | `#0E1318` | Section backgrounds |
| `pitch-card` | `#111820` | Card backgrounds |
| `pitch-border` | `#1A2330` | Borders |
| `accent-green` | `#00E5A0` | Primary accent |
| `accent-blue` | `#0FA4FF` | Secondary accent |
| `text-primary` | `#F0F4F8` | Main text |
| `text-secondary` | `#8A9BB0` | Body copy |
| `text-muted` | `#4A5B6E` | Labels, metadata |

### Component Classes

| Class | Description |
|-------|-------------|
| `.btn-primary` | Green filled button |
| `.btn-outline` | Bordered ghost button |
| `.card-base` | Standard dark card with border |
| `.label-tag` | Small uppercase mono label |
| `.display-heading` | Barlow Condensed heading |
| `.input-field` | Dark form input |
| `.container-px` | Responsive horizontal padding |
| `.section-spacing` | Vertical section padding |
| `.pitch-grid` | Subtle grid background |

---

## Adding Real Content

### Players
Edit `lib/data.ts` — the `players` array. Each player has:
- Basic info (name, position, age, club, foot, height, nationality)
- `imageUrl`: Replace with real photo URLs
- `description`: Profile paragraph
- `strengths` / `improvements`: Array of strings
- `clips`: Array of timestamped analysis observations
- `videoUrl`: YouTube embed URL

### Analyses
Edit `lib/data.ts` — the `analyses` array. Each analysis references a `playerId` for linking.

---

## Extending

- Add a **CMS** (Sanity, Contentful) by replacing the `lib/data.ts` imports with API calls
- Add **dynamic metadata** using Next.js `generateMetadata()` in detail pages
- Add **video player** by replacing the placeholder with a real `<iframe>` or React Player
- Add **search/filter** to the Analysis and Players pages using React state
