# Sourav Rout — Portfolio

> Premium Cyberpunk Hacker Portfolio built with Next.js 14, Three.js, Framer Motion & Tailwind CSS.

## ⚡ Quick Start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production build
npm run start    # Serve production build
```

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| 3D | Three.js + React Three Fiber + Drei |
| Animation | Framer Motion + GSAP |
| Styling | Tailwind CSS v3 |
| Icons | Lucide React |

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page (assembles all sections)
├── components/
│   ├── 3d/
│   │   └── HeroScene.tsx      # Three.js canvas (SSR-safe dynamic import)
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   ├── Experience.tsx
│   │   ├── GitHubStats.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── CustomCursor.tsx
│       └── LoadingScreen.tsx
├── lib/
│   ├── data.ts          # All portfolio content (edit here)
│   └── utils.ts         # cn() utility
└── styles/
    └── globals.css      # Tailwind + custom CSS
```

## ✏️ Personalizing

1. **Content** — Edit `lib/data.ts` to update skills, projects, experience, and testimonials.
2. **GitHub Stats** — Replace `souravr` in `GitHubStats.tsx` with your GitHub username.
3. **Colors** — Theme tokens are in `tailwind.config.js` under `colors.neon`.
4. **Resume** — Place your PDF at `public/resume.pdf`.
5. **Avatar/OG Image** — Add images to `public/images/`.

## 🚀 Deployment

**Vercel (recommended)**
```bash
npx vercel --prod
```

**Docker**
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 🔑 Key Design Decisions

- **3D Scene** uses `dynamic(() => import(...), { ssr: false })` — zero SSR crashes.
- **Loading Screen** boots a fake terminal sequence then transfers to the real UI.
- **Custom cursor** follows mouse with RAF-based lerp for buttery smoothness.
- **All sections** use `useInView` + Framer Motion for scroll-triggered reveals.
- **No hydration issues** — every browser API call is inside `useEffect`.

## 📝 License

MIT — use freely, attribution appreciated.
