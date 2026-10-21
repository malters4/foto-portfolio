import type { Photo } from "./photos";

export interface Project {
  slug: string;
  title: string;
  year: string;
  place: string;
  camera?: string;
  description: string;
  photos: Photo[];
}

// Builds placeholder entries for /public/photos/projects/<slug>/NN.svg.
function placeholders(slug: string, sizes: [number, number][]): Photo[] {
  return sizes.map(([width, height], i) => {
    const n = String(i + 1).padStart(2, "0");
    return { src: `/photos/projects/${slug}/${n}.svg`, alt: `${slug} ${n}`, width, height };
  });
}

const square: [number, number] = [1200, 1200];
const portrait: [number, number] = [1200, 1500];
const landscape: [number, number] = [1500, 1000];

// Order here is the order on /projects. Year, place, description and photos are placeholders.
export const projects: Project[] = [
  {
    slug: "lubitel",
    title: "Lubitel, storie di russe coriacee e cattive, in Corea",
    year: "2025",
    place: "South Korea",
    camera: "Lubitel 166, 6×6",
    description:
      "placeholder — two to four lines about the series: where, when, why this camera, what the pictures are about.",
    photos: placeholders("lubitel", Array(10).fill(square)),
  },
  {
    slug: "romagna",
    title: "Romagna",
    year: "2024",
    place: "Emilia-Romagna, Italy",
    description:
      "placeholder — two to four lines about the series: where, when, what the pictures are about.",
    photos: placeholders("romagna", [portrait, landscape, portrait, landscape, portrait, landscape, portrait, landscape]),
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
