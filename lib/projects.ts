import type { Photo } from "./photos";

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  // A four-digit year, or "∞" for an open-ended series spanning several years.
  year: string;
  place: string;
  camera?: string;
  description: string;
  photos: Photo[];
}

// Files live in /public/photos/projects/<slug>/. The first photo is the project cover.
function inFolder(slug: string, list: [file: string, width: number, height: number, alt: string][]): Photo[] {
  return list.map(([file, width, height, alt]) => ({ src: `/photos/projects/${slug}/${file}`, alt, width, height }));
}

// Order here is the order on /projects. "[TBD]" marks text still to write.
export const projects: Project[] = [
  {
    slug: "panydolor",
    title: "Pan y dolor",
    year: "2026",
    place: "Fuerteventura",
    description: "[TBD]",
    photos: inFolder("panydolor", [
      ["lubitel_kodak_fuerte2026_001.jpg", 1991, 2000, "Dirt road through a volcanic landscape"],
      ["lubitel_kodak_fuerte2026_003.jpg", 1980, 2000, "Two women sitting on a wall above the sea"],
      ["lubitel_kodak_fuerte2026_007.jpg", 1996, 2000, "Double exposure of two women in swimsuits on the beach"],
      ["minox_35gt_foma_100_400_spring26_005.jpg", 2000, 1341, "Empty basketball court with palm trees"],
      ["minox_35gt_foma_100_400_spring26_007.jpg", 2000, 1277, "Dark interior with round windows"],
      ["minox_35gt_foma_100_400_spring26_011.jpg", 2000, 1269, "Woman sitting on a beach towel facing the sea"],
      ["minox_35gt_foma_100_400_spring26_012.jpg", 2000, 1265, "Two small figures on a wide beach below the dunes"],
      ["minox_35gt_foma_100_400_spring26_018.jpg", 2000, 1251, "Two women walking along the shore"],
      ["minox_35gt_foma_100_400_spring26_022.jpg", 2000, 1275, "Person lying in a beach chair on white sand"],
      ["minox_35gt_foma_100_400_spring26_023.jpg", 2000, 1279, "Legs stretched out on a towel in the sand"],
      ["minox_35gt_foma_100_400_spring26_024.jpg", 2000, 1279, "Silhouette of a palm tree under a grey sky"],
      ["minox_35gt_foma_100_400_spring26_025.jpg", 2000, 1277, "Island on the horizon beyond a dark shore"],
    ]),
  },
  {
    slug: "anemoia-adriatica",
    title: "Anemoia Adriatica",
    subtitle: "Geografie della distanza",
    year: "∞",
    place: "Emilia-Romagna, Italy",
    description: "[TBD]",
    photos: inFolder("anemoia-adriatica", [
      ["canon_at-1_agfa_100_bologna_winter-2026_008.jpg", 2000, 1261, "Path between sand dunes"],
      ["canon_at-1_agfa_100_bologna_winter-2026_010.jpg", 2000, 1261, "Lone figure on an empty winter beach"],
      ["canon_at-1_foma_100_400_bologna_spring-2026_012.jpg", 2000, 1283, "Dog looking out from a balcony"],
      ["canon_at-1_foma_100_400_bologna_spring-2026_023.jpg", 2000, 1275, "Spring-rider toys against a wall"],
      ["canon_at-1_foma_100_400_bologna_spring-2026_024.jpg", 2000, 1284, "Rows of bare beach poles by the sea"],
      ["canon_at-1_foma_100_bologna_2025-2026_008.jpg", 2000, 1267, "Two surfers waiting in the sea"],
      ["canon_at-1_foma_100_bologna_2025-2026_012.jpg", 2000, 1277, "Dog running on the beach by the waves"],
      ["canon_at-1_foma_100_bologna_2025-2026_019.jpg", 2000, 1264, "Two people at the shoreline"],
      ["canon_kodak200_old_031.jpg", 1363, 2000, "Man fishing next to a lamp post on the harbour"],
      ["lubitel_100_kodak_2025_005.jpg", 1983, 2000, "Couple sitting on rocks by a crowded beach"],
      ["lubitel_fuji_100_romagna2026_002.jpg", 1994, 2000, "Small red lighthouse on the pier"],
      ["lubitel_fuji_100_romagna2026_005.jpg", 2000, 1997, "White Volkswagen van with toys on the dashboard"],
      ["lubitel_fuji_100_romagna2026_007.jpg", 1991, 2000, "Figure walking on a beach covered in seaweed"],
      ["lubitel_fuji_100_romagna_agosto26_005.jpg", 1979, 2000, "Man sitting between breakwater rocks"],
      ["lubitel_fuji_100_romagna_agosto26_008.jpg", 1979, 2000, "Couple sitting on rocks facing the sea"],
      ["lubitel_kodak_fuji_100_sardegna26_pt2_011.jpg", 1984, 2000, "Man walking along a path in a pine forest"],
      ["lubitel_kodak_fuji_100_sardegna26_pt2_012.jpg", 1985, 2000, "Hat and bag hanging on driftwood on the beach"],
      ["olympys_fuji_200_PS2026_024.jpg", 2000, 1241, "Person sitting under a beach umbrella"],
      ["olympys_fuji_200_PS2026_027.jpg", 2000, 1222, "Inflatable flamingo and pool toys on the beach"],
    ]),
  },
  {
    slug: "lubitel",
    title: "Lubitel, storie di russe coriacee e cattive, in Corea",
    year: "2025",
    place: "South Korea",
    camera: "Lubitel 166, 6×6",
    description: "[TBD]",
    photos: inFolder("lubitel", [
      ["lubitel_100_kodak_2025_korea_006.jpg", 1991, 2000, "Woman with a ponytail at the steps of a temple"],
      ["lubitel_100_kodak_2025_korea_007.jpg", 1991, 2000, "Man with his hands behind his back among lanterns"],
      ["lubitel_100_kodak_2025_korea_009.jpg", 1991, 2000, "Woman holding a white poodle"],
      ["lubitel_foma_400_korea_001.jpg", 2000, 1993, "Two women in hanbok in a palace courtyard"],
      ["lubitel_foma_400_korea_005.jpg", 2000, 1997, "Woman in hanbok in a palace courtyard"],
      ["lubitel_kent_400_korea_006.jpg", 1978, 2000, "Man walking under white lanterns between lotus plants"],
      ["lubitel_kent_400_korea_010.jpg", 1959, 2000, "Woman with a parasol on an open plaza"],
      ["lubitel_kent_400_korea_011.jpg", 2000, 2000, "People in front of claw machines"],
      ["lubitel_kodak_tmax_100_korea_005.jpg", 1974, 2000, "Crossing with painted road markings and street vendors"],
      ["lubitel_kodak_tmax_100_korea_007.jpg", 1989, 2000, "Flowers behind a misted shop window"],
    ]),
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
