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
- `lib/photos.ts` — home photo list. Each entry needs `src`, `alt`, `category` (`street` or `travel`), `width`, `height` (intrinsic pixels, so each photo keeps its aspect ratio).
- `lib/projects.ts` — projects (`slug`, `title`, `year`, `place`, optional `camera`, `description`, `photos`). Array order = order on `/projects`; first photo = cover.
- `public/photos/` — home images; `public/photos/projects/<slug>/` — project images. Currently placeholder SVGs; replace with real photos and update the lists.

Placeholders still to replace: intro line and about bio (`app/page.tsx`), email and Instagram (`components/SiteFooter.tsx`), project year/place/description and photos (`lib/projects.ts`).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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
