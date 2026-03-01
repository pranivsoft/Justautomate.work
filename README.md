# justautomate.work

> Turn your manual work into smart AI workflows.

**justautomate.work** is a premium, futuristic single-page website for an AI automation consultancy. It features Apple-style scroll-driven animations, a sticky hardware-reveal services section, horizontal scroll use cases, and a fully responsive dark-mode design.

---

## 🚀 Hosting & Deployment

This project is **hosted on [Vercel](https://vercel.com)** and auto-deploys from the `main` branch of this GitHub repository.

| Setting           | Value                        |
|-------------------|------------------------------|
| **Platform**      | Vercel (Free Tier)           |
| **Branch**        | `main`                       |
| **Framework**     | Vite                         |
| **Build Command** | `npm run build`              |
| **Output Dir**    | `dist`                       |
| **Node Version**  | 20.x                         |

> **⚠️ IMPORTANT:** Every push to the `main` branch triggers an automatic production deployment on Vercel. Always test locally before pushing.

---

## 🛠 Tech Stack

| Technology         | Purpose                                    |
|--------------------|--------------------------------------------|
| **React 18**       | UI framework                               |
| **TypeScript**     | Type safety                                |
| **Vite 5**         | Build tool and dev server                  |
| **Tailwind CSS 3** | Utility-first styling                      |
| **Framer Motion**  | Scroll-driven animations and transitions   |
| **Lucide React**   | Icon library                               |
| **shadcn/ui**      | Accessible UI component primitives         |

---

## 📂 Project Structure

```
justautomate.work/
├── public/              # Static assets (favicon, _redirects)
├── src/
│   ├── App.tsx          # Main application (all sections)
│   ├── main.tsx         # React entry point
│   ├── index.css        # Global styles and Tailwind imports
│   └── lib/
│       └── utils.ts     # Utility functions (cn helper)
├── index.html           # HTML entry point
├── tailwind.config.ts   # Tailwind theme (colors, fonts, animations)
├── vite.config.ts       # Vite configuration
├── vercel.json          # Vercel deployment config (SPA rewrites)
├── netlify.toml         # Netlify config (backup deployment option)
├── package.json         # Dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

---

## 📋 Rules & Guidelines for Editing

### ✅ DO

- **Always test locally** before pushing to `main`:
  ```sh
  npm install
  npm run dev        # Preview at http://localhost:8080
  npm run build      # Verify production build succeeds
  ```
- **Keep all sections in `App.tsx`** — the site is a single-page layout. Each section is a separate function component within this file.
- **Use the existing Tailwind theme** — custom colors (`void`, `neon-cyan`, `neon-purple`, `surface-100/200/300`) and fonts (`Inter`, `Space Grotesk`) are defined in `tailwind.config.ts`. Use them instead of hardcoding hex values.
- **Use `framer-motion` for animations** — all scroll-driven effects use `useScroll`, `useTransform`, and `useSpring`. Keep animations smooth by always wrapping `scrollYProgress` in `useSpring`.
- **Commit with clear messages** — use conventional commit format:
  - `feat:` for new features
  - `fix:` for bug fixes
  - `chore:` for maintenance
  - `style:` for visual-only changes

### ❌ DON'T

- **Never modify `vercel.json`** unless you fully understand the routing implications. The current rewrite rule is critical for SPA routing.
- **Never delete or rename `index.html`** — Vite requires this as the entry point.
- **Never change the build command** in `package.json` (currently `vite build`). Vercel reads this directly.
- **Never push broken builds to `main`** — always run `npm run build` locally first. A broken build = a broken live site.
- **Never add server-side code** — this is a purely static site. There is no backend. If you need API calls, use client-side `fetch` to external services.
- **Never hardcode colors** — always use Tailwind classes referencing the theme (`text-neon-cyan`, `bg-void`, `bg-surface-100`, etc.).

---

## 🎨 Design System

### Color Palette

| Token           | Hex       | Usage                              |
|-----------------|-----------|------------------------------------|
| `void`          | `#0A0A0A` | Primary background                 |
| `surface-100`   | `#111111` | Card / section backgrounds         |
| `surface-200`   | `#1A1A1A` | Elevated surfaces                  |
| `surface-300`   | `#222222` | Borders and dividers               |
| `neon-cyan`     | `#00F0FF` | Primary accent, CTAs, highlights   |
| `neon-blue`     | `#0057FF` | Secondary accent                   |
| `neon-purple`   | `#7B61FF` | Gradient endpoints, phase markers  |
| `neon-pink`     | `#FF0055` | Reserved for alerts/errors         |

### Typography

| Font              | Usage                        |
|-------------------|------------------------------|
| **Inter**         | Body text, descriptions      |
| **Space Grotesk** | Headlines, labels, monospace |

---

## 🧪 Local Development

### Prerequisites

- **Node.js** v18 or higher (v20 recommended)
- **npm** (comes with Node.js)

### Getting Started

```sh
# 1. Clone the repository
git clone https://github.com/pranivsoft/Justautomate.work.git
cd Justautomate.work

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open in browser
# → http://localhost:8080
```

### Build for Production

```sh
npm run build       # Outputs to ./dist/
npm run preview     # Preview the production build locally
```

---

## 🔄 Deployment Workflow

```
Code Change → git add → git commit → git push origin main → Vercel Auto-Deploy
```

1. Make your changes locally.
2. Test with `npm run dev` and verify with `npm run build`.
3. Commit and push to `main`.
4. Vercel automatically picks up the new commit and deploys within ~30 seconds.
5. Check the Vercel dashboard for deployment status and preview URLs.

---

## 📝 Content Editing Quick Reference

| What to change               | Where to edit                                    |
|------------------------------|--------------------------------------------------|
| Hero headline / copy         | `src/App.tsx` → `ScrollHero` component           |
| Services (phases)            | `src/App.tsx` → `HardwareRevealServices`         |
| Use Cases / personas         | `src/App.tsx` → `HorizontalScrollUseCases`       |
| CTA section / form           | `src/App.tsx` → `CTASection`                     |
| Colors / fonts               | `tailwind.config.ts` → `theme.extend`            |
| Global CSS / base styles     | `src/index.css`                                  |
| Page title / meta            | `index.html` → `<head>`                          |
| Vercel routing                | `vercel.json` (⚠️ edit with caution)             |

---

## 📄 License

This project is proprietary. All rights reserved by justautomate.work.
