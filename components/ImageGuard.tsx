"use client";

import { useEffect } from "react";

// Deterrent only: blocks the right-click menu ("Save image as…") and drag-to-desktop on photos.
// Anything shown in a browser can still be captured, so this just removes the easy paths.
export default function ImageGuard() {
  useEffect(() => {
    const block = (e: Event) => {
      if (e.target instanceof HTMLImageElement) e.preventDefault();
    };
    document.addEventListener("contextmenu", block);
    document.addEventListener("dragstart", block);
    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("dragstart", block);
    };
  }, []);

  return null;
}
