This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Production

- **Live site:** https://foto-portfolio-one.vercel.app/
- **Hosting:** Vercel
- **Repository:** https://github.com/malters4/foto-portfolio

## Layout & structure

Monospace lowercase type throughout, "scatter" look inspired by joroggemans.com. Every page shares a sticky header (`projects` / `about` / `contact`) and a contact footer. Clicking any photo opens a lightbox.

| Route | Content |
| --- | --- |
| `/` | Intro, curated street + travel selection (12–15 photos), about. Loose three-column grid with varying widths and vertical offsets, fading in on scroll; one column on phones. |
| `/projects` | Index of photo series: cover, title, year, place, photo count. Two columns, the second offset lower. |
| `/projects/[slug]` | One series: title, place · year · camera, short text, then photos as a centred sequence (one after another, `01 / 10` counters, landscapes wider than portraits), link to the next project. |

Files:

- `app/layout.tsx` — fonts, global type style, shared header/footer.
- `app/page.tsx` — home page.
- `app/projects/page.tsx`, `app/projects/[slug]/page.tsx` — projects index and project page.
- `components/SiteHeader.tsx`, `components/SiteFooter.tsx` — shared header and contact footer.
- `components/ScatterGallery.tsx` — home scatter grid + shared lightbox. `components/SequenceGallery.tsx` — project-page sequence. `components/FadeIn.tsx` — scroll fade-in.
- `lib/photos.ts` — home photo list, in display order. Each entry: file name, `width`, `height` (intrinsic pixels after EXIF rotation, so each photo keeps its aspect ratio), `category` (`street` or `travel`), `alt` text.
- `lib/projects.ts` — projects (`slug`, `title`, optional `subtitle`, `year` — four digits or `∞` for an open-ended series — `place`, optional `camera`, `description`, `photos`). Array order = order on `/projects`; first photo = cover.
- `photos-originals/` — full-resolution originals (film scans and digital JPGs). **Not in git** (`.gitignore`), so keep your own backup. Same folder layout as `public/photos/`.
- `public/photos/` — web copies generated from the originals (long side 2000 px, EXIF rotation applied, metadata stripped): home images at the top level, project images in `projects/<slug>/`. Don't edit by hand.
- `scripts/prepare-photos.mjs` (`npm run photos`) — regenerates every web copy from `photos-originals/` and updates the `width`/`height` of each file in `lib/photos.ts` and `lib/projects.ts`. Uses the `sharp` package bundled with Next.js.

Current projects: Pan y dolor (`panydolor`, Fuerteventura 2026), Anemoia Adriatica — Geografie della distanza (`anemoia-adriatica`, ∞), Lubitel, storie di russe coriacee e cattive, in Corea (`lubitel`, 2025).

Adding a photo:

1. Copy the original into `photos-originals/` (top level for home, `projects/<slug>/` for a project).
2. Add a line to `lib/photos.ts` or `lib/projects.ts` with the file name, any placeholder size (e.g. `1, 1`) and alt text.
3. Run `npm run photos` — it writes the web copy to `public/photos/` and fills in the real size.
4. Run `npm test`.

Placeholders still to replace: intro line and about bio (`app/page.tsx`), email and Instagram (`components/SiteFooter.tsx`), project descriptions marked `[TBD]` (`lib/projects.ts`).

## Photo protection

Deterrents only — a browser cannot fully stop downloads, and screenshots cannot be blocked at all:

- `components/ImageGuard.tsx` blocks the right-click menu and drag-and-drop on every `<img>` (including the lightbox).
- `app/globals.css` disables image selection, dragging and the iOS long-press "Save image" menu.
- The lightbox shows resized copies from the Next.js image optimizer (`/_next/image`, max 2048 px), never the original files.
- Footer copyright notice.

Files in `public/` are still reachable by direct URL, which is why only 2000 px web copies live there; full-resolution originals never leave `photos-originals/`.

Project titles and subtitles keep their original capitalisation (`normal-case`); the rest of the site is lowercase.

## Tests

```bash
npm test
```

Runs `lib/data.test.ts` with Vitest (v4 — v5 needs newer `@types/node`). It checks the photo and project lists: every file exists in `public/`, has `alt`, `width`, `height`; home categories are `street`/`travel`; project slugs are unique and URL-safe; years are four digits or `∞`; no duplicate photos. Run it after adding or renaming photos. There are no browser/end-to-end tests on purpose, to keep the project light.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3002](http://localhost:3002) with your browser to see the result (the `dev` script runs on port 3002).

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
