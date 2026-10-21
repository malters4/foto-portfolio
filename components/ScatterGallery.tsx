"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { Photo } from "@/lib/photos";

// Per-item vertical offset and width inside its column, repeating every 6 photos.
// Offsets only apply from md up; on phones photos stack full width.
const pattern = [
  "md:mt-0 md:w-[75%]",
  "md:mt-24 md:w-[70%] md:mx-auto",
  "md:mt-0 md:w-[85%] md:ml-auto",
  "md:mt-16 md:w-[80%]",
  "md:mt-32 md:w-[65%] md:mx-auto",
  "md:mt-10 md:w-[75%] md:ml-auto",
];

export default function ScatterGallery({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-3 md:gap-y-24">
        {photos.map((photo, i) => (
          <FadeIn key={photo.src} className={pattern[i % pattern.length]}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="block w-full cursor-zoom-in"
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

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos.map((p) => ({ src: p.src, alt: p.alt, width: p.width, height: p.height }))}
      />
    </>
  );
}

// Fades and lifts its children in the first time they scroll into view.
function FadeIn({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
