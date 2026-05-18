# ChessPawn — Website

Marketing site and privacy policy for **ChessPawn**, a chess puzzle game
by [Gicklatt](https://gicklatt.github.io).

🔗 **Live:** [gicklatt.github.io/chesspawngame](https://gicklatt.github.io/chesspawngame)

## About the game

Think like a chess master, solve like a puzzle genius. Capture every pawn
using chess-movement cards across 400 handcrafted levels, daily
challenges, weekly events and 12 board themes.

- [App Store](https://apps.apple.com/us/app/chesspawn/id6760585822)
- [Google Play](https://play.google.com/store/apps/details?id=com.gicklatt.chesspawn)

## Tech stack

- **Next.js 15** (App Router) — statically exported (`output: "export"`)
- **React 19** + **Tailwind CSS**
- Hosted on **GitHub Pages**

## Develop

```bash
npm install
npm run dev     # http://localhost:3000/chesspawngame
```

## Build

```bash
npm run build   # static site exported to ./out
```

## Deploy

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds
the site and publishes `out/` to GitHub Pages.

> The site is served from the `/chesspawngame` sub-path, so `basePath` in
> `next.config.js` must match the repository name. `next/image` does not
> add `basePath` to image `src` when images are `unoptimized`, so asset
> paths use the shared constant in `src/config.js`.

## Structure

| Path | Purpose |
|------|---------|
| `src/app/page.js` | Landing page |
| `src/app/privacy/page.js` | Privacy policy (App Store / Google Play URL) |
| `src/components/` | Hero, Features, Screenshots, Footer, … |
| `public/` | Screenshots, icons, `robots.txt`, `sitemap.xml` |

## Privacy Policy

[gicklatt.github.io/chesspawngame/privacy](https://gicklatt.github.io/chesspawngame/privacy/)

---

© Gicklatt · [gicklatt@gmail.com](mailto:gicklatt@gmail.com)
