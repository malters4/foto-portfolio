// npm run photos — builds web copies of the photo originals.
//
// Reads every JPG in photos-originals/ (full-resolution, gitignored) and writes a copy to the
// same path under public/photos/: EXIF rotation applied, long side max 2000 px, metadata stripped.
// Then updates the width/height of each file in lib/photos.ts and lib/projects.ts.

import { createRequire } from "node:module";
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { basename, dirname, join, relative } from "node:path";

const root = join(dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, "$1")), "..");
const require = createRequire(join(root, "package.json"));
// sharp ships with Next.js, so no extra dependency.
const sharp = require(require.resolve("sharp", { paths: [root, join(root, "node_modules", "next")] }));

const MAX = 2000;
const srcDir = join(root, "photos-originals");
const outDir = join(root, "public", "photos");

const walk = (d) =>
  readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]));

const sizes = new Map();
for (const file of walk(srcDir).filter((f) => /\.jpe?g$/i.test(f))) {
  const out = join(outDir, relative(srcDir, file));
  mkdirSync(dirname(out), { recursive: true });
  const info = await sharp(file)
    .rotate()
    .resize(MAX, MAX, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(out);
  sizes.set(basename(file), [info.width, info.height]);
  console.log(`${relative(root, out)}  ${info.width}x${info.height}  ${(info.size / 1e6).toFixed(2)} MB`);
}

// Rewrite `"file.jpg", 1234, 567` pairs in the data files so layouts keep the right aspect ratio.
for (const dataFile of ["lib/photos.ts", "lib/projects.ts"]) {
  const path = join(root, dataFile);
  let text = readFileSync(path, "utf8");
  for (const [name, [w, h]] of sizes) {
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    text = text.replace(new RegExp(`("${escaped}",\\s*)\\d+(,\\s*)\\d+`, "g"), `$1${w}$2${h}`);
  }
  writeFileSync(path, text);
}
console.log(`${sizes.size} photos written; sizes updated in lib/.`);
