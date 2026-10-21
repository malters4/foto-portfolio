export type Category = "street" | "travel";

export interface Photo {
  src: string;
  alt: string;
  // Intrinsic pixel size — galleries keep each photo's own aspect ratio.
  width: number;
  height: number;
}

export interface HomePhoto extends Photo {
  category: Category;
}

// Home page selection. Placeholder set — swap these for real photos in /public/photos.
export const photos: HomePhoto[] = [
  { src: "/photos/street-1.svg", alt: "Street photograph 1", category: "street", width: 1200, height: 1500 },
  { src: "/photos/travel-1.svg", alt: "Travel photograph 1", category: "travel", width: 1500, height: 1000 },
  { src: "/photos/street-2.svg", alt: "Street photograph 2", category: "street", width: 1500, height: 1000 },
  { src: "/photos/travel-2.svg", alt: "Travel photograph 2", category: "travel", width: 1200, height: 1500 },
  { src: "/photos/street-3.svg", alt: "Street photograph 3", category: "street", width: 1200, height: 1500 },
  { src: "/photos/travel-3.svg", alt: "Travel photograph 3", category: "travel", width: 1500, height: 1000 },
];
