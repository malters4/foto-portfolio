"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import FadeIn from "@/components/FadeIn";
import type { Photo } from "@/lib/photos";

// Per-item width and alignment inside its column, repeating every 6 photos.
// Only applies from md up; on phones photos stack full width.
const pattern = [
  { width: 0.95, className: "md:w-[95%]" },
  { width: 0.9, className: "md:w-[90%] md:mx-auto" },
  { width: 1, className: "md:w-full" },
  { width: 0.92, className: "md:w-[92%] md:ml-auto" },
  { width: 0.88, className: "md:w-[88%] md:mx-auto" },
  { width: 0.96, className: "md:w-[96%]" },
];

// Small top offsets on the three columns keep the scattered look.
const columnOffsets = ["", "md:pt-10", "md:pt-5"];
const COLUMNS = columnOffsets.length;

// Masonry: each photo goes into the currently shortest column, so columns stack
// without the gaps a row grid leaves under landscape photos.
function toColumns(photos: Photo[]) {
  const columns: number[][] = Array.from({ length: COLUMNS }, () => []);
  const heights = new Array(COLUMNS).fill(0);
  photos.forEach((photo, i) => {
    const c = heights.indexOf(Math.min(...heights));
    columns[c].push(i);
    heights[c] += (photo.height / photo.width) * pattern[i % pattern.length].width + 0.1;
  });
  return columns;
}

export default function ScatterGallery({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      {/* On phones the columns are display:contents and `order` keeps the list order. */}
      <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-8">
        {toColumns(photos).map((column, c) => (
          <div key={c} className={`contents md:flex md:min-w-0 md:flex-1 md:flex-col md:gap-12 ${columnOffsets[c]}`}>
            {column.map((i) => (
              <GalleryItem key={photos[i].src} photo={photos[i]} i={i} onOpen={setIndex} />
            ))}
          </div>
        ))}
      </div>

      <PhotoLightbox photos={photos} index={index} onClose={() => setIndex(-1)} />
    </>
  );
}

function GalleryItem({ photo, i, onOpen }: { photo: Photo; i: number; onOpen: (i: number) => void }) {
  const onClick = () => onOpen(i);
  return (
    <FadeIn className={pattern[i % pattern.length].className} style={{ order: i }}>
      <button type="button" onClick={onClick} className="photo-zoom block w-full" aria-label={`Open ${photo.alt}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="h-auto w-full transition-opacity hover:opacity-85"
        />
      </button>
    </FadeIn>
  );
}

// The lightbox gets resized copies from the Next.js image optimizer instead of the original files,
// so full-resolution scans are never sent to the browser through the UI.
const lightboxWidths = [1080, 1920, 2048];
const optimized = (src: string, w: number) => `/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=75`;

export function PhotoLightbox({ photos, index, onClose }: { photos: Photo[]; index: number; onClose: () => void }) {
  return (
    <Lightbox
      open={index >= 0}
      index={index}
      close={onClose}
      slides={photos.map((p) => ({
        src: optimized(p.src, 1920),
        alt: p.alt,
        width: p.width,
        height: p.height,
        srcSet: lightboxWidths.map((w) => ({
          src: optimized(p.src, w),
          width: w,
          height: Math.round((p.height * w) / p.width),
        })),
      }))}
    />
  );
}
