"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { PhotoLightbox } from "@/components/ScatterGallery";
import type { Photo } from "@/lib/photos";

// One photo after another, centred, read like a sequence. Landscapes run wider than portraits.
export default function SequenceGallery({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(-1);
  const total = String(photos.length).padStart(2, "0");

  return (
    <>
      <div className="flex flex-col items-center gap-24 md:gap-40">
        {photos.map((photo, i) => {
          const ratio = photo.width / photo.height;
          const width = ratio > 1.1 ? "md:w-[70%]" : ratio < 0.9 ? "md:w-[42%]" : "md:w-[52%]";
          return (
            <FadeIn key={photo.src} className={`w-full ${width}`}>
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
                  sizes="(max-width: 768px) 100vw, 70vw"
                  className="h-auto w-full"
                />
              </button>
              <p className="mt-3 text-neutral-400 tabular-nums">
                {String(i + 1).padStart(2, "0")} / {total}
              </p>
            </FadeIn>
          );
        })}
      </div>

      <PhotoLightbox photos={photos} index={index} onClose={() => setIndex(-1)} />
    </>
  );
}
