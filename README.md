This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Production

- **Live site:** https://foto-portfolio-one.vercel.app/
- **Hosting:** Vercel
- **Repository:** https://github.com/malters4/foto-portfolio

## Layout & structure

Single-page site with a "scatter" layout (inspired by joroggemans.com): monospace lowercase type, sticky header with anchor links (`work` / `about` / `contact`), and photos in a loose three-column grid with varying widths and vertical offsets that fade in on scroll. On phones photos stack in one column. Clicking a photo opens a lightbox.

- `app/page.tsx` — page sections: header, intro, gallery, about, contact.
- `components/ScatterGallery.tsx` — gallery grid, scatter pattern, fade-in, lightbox.
- `lib/photos.ts` — photo list. Each entry needs `src`, `alt`, `category`, `width`, `height` (intrinsic pixels, so each photo keeps its aspect ratio).
- `public/photos/` — image files. Currently placeholder SVGs; replace with real photos and update `lib/photos.ts`.

Placeholder texts still to replace: intro line, about bio, email and Instagram links in `app/page.tsx`.

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
