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

const home = (file: string, width: number, height: number, category: Category, alt: string): HomePhoto => ({
  src: `/photos/${file}`,
  alt,
  category,
  width,
  height,
});

// Home page selection, in display order. Files live in /public/photos.
export const photos: HomePhoto[] = [
  home("_8090095.JPG", 2000, 1500, "street", "Two heads peeking over a white wall"),
  home("_9040417.JPG", 2000, 1500, "street", "Man standing in a lit kiosk at dusk"),
  home("_9160529.JPG", 2000, 1500, "street", "Crowded street in front of a graffiti-covered building"),
  home("agfa_100_rollei_009.jpg", 2000, 1242, "street", "Empty tunnel corridor with a figure at the far end"),
  home("canon_at-1_foma_100_bologna_2025-2026_026.jpg", 2000, 1267, "street", "Woman walking a dog through a snowy park"),
  home("canon_foma100_082025_029.jpg", 2000, 1264, "street", "Fish swimming in dark water"),
  home("foma_200_lubitel_007.jpg", 1981, 2000, "street", "Man pulling a shopping trolley under a long arcade"),
  home("img013.jpg", 2000, 1180, "street", "Women in white veils gathered in a square"),
  home("img024.jpg", 2000, 1195, "street", "Priest in a cassock checking his phone in the street"),
  home("lubitel_kodak_fuji_100_sardegna26_pt2_001.jpg", 1988, 2000, "travel", "Three people standing at the water's edge, Sardinia"),
  home("lubitel_kodak_tmax_100_sardegna_006.jpg", 1973, 2000, "travel", "Man reading a newspaper under an arcade, Sardinia"),
  home("minox_35gt_kodak_200_arles26_001.jpg", 2000, 1270, "travel", "Woman at a café counter, Arles"),
  home("minox_35gt_kodak_200_arles26_010.jpg", 2000, 1251, "travel", "Garden with a striped deckchair seen through trees, Arles"),
  home("olympys_lomo_100_korea_025.jpg", 2000, 1285, "travel", "Man on a scooter in a narrow alley, Korea"),
  home("olympys_lomo_200_korea_027.jpg", 2000, 1268, "travel", "Men playing a board game on the pavement, Korea"),
];
