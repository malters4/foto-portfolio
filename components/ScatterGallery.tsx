"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import FadeIn from "@/components/FadeIn";
import type { Photo } from "@/lib/photos";

// Per-item vertical offset and width inside its column, repeating every 6 photos.
// Offsets only apply from md up; on phones photos stack full width.
const pattern = [
  "md:mt-0 md:w-[85%]",
  "md:mt-24 md:w-[80%] md:mx-auto",
  "md:mt-0 md:w-[95%] md:ml-auto",
  "md:mt-16 md:w-[90%]",
  "md:mt-32 md:w-[75%] md:mx-auto",
  "md:mt-10 md:w-[85%] md:ml-auto",
];

export default function ScatterGallery({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3 md:gap-y-24">
        {photos.map((photo, i) => (
          <FadeIn key={photo.src} className={pattern[i % pattern.length]}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="photo-zoom block w-full"
              aria-label={`Open ${photo.alt}`}
            >
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
        ))}
      </div>

      <PhotoLightbox photos={photos} index={index} onClose={() => setIndex(-1)} />
    </>
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
        srcSet: lightboxWidths.map((w) => ({ src: optimized(p.src, w), width: w, height: Math.round((p.height * w) / p.width) })),
      }))}
    />
  );
}
