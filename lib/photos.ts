export type Category = "street" | "travel" | "portraits";

export interface Photo {
  src: string;
  alt: string;
  category: Category;
}

// Placeholder set — swap these for real photos in /public/photos.
export const photos: Photo[] = [
  { src: "/photos/street-1.svg", alt: "Street photograph 1", category: "street" },
  { src: "/photos/street-2.svg", alt: "Street photograph 2", category: "street" },
  { src: "/photos/street-3.svg", alt: "Street photograph 3", category: "street" },
  { src: "/photos/travel-1.svg", alt: "Travel photograph 1", category: "travel" },
  { src: "/photos/travel-2.svg", alt: "Travel photograph 2", category: "travel" },
  { src: "/photos/travel-3.svg", alt: "Travel photograph 3", category: "travel" },
  { src: "/photos/portrait-1.svg", alt: "Portrait 1", category: "portraits" },
  { src: "/photos/portrait-2.svg", alt: "Portrait 2", category: "portraits" },
  { src: "/photos/portrait-3.svg", alt: "Portrait 3", category: "portraits" },
];
