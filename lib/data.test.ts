// Sanity checks on the photo and project lists, so a typo in a filename or a
// missing size shows up in `npm test` instead of as a broken image on the site.

import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { photos, type Photo } from "./photos";
import { projects } from "./projects";

const publicDir = join(__dirname, "..", "public");

function checkPhoto(photo: Photo) {
  expect(photo.src, "src must start with /").toMatch(/^\//);
  expect(existsSync(join(publicDir, photo.src)), `missing file public${photo.src}`).toBe(true);
  expect(photo.alt.trim(), `${photo.src} needs alt text`).not.toBe("");
  expect(photo.width, `${photo.src} width`).toBeGreaterThan(0);
  expect(photo.height, `${photo.src} height`).toBeGreaterThan(0);
}

describe("home photos", () => {
  it("has photos", () => {
    expect(photos.length).toBeGreaterThan(0);
  });

  it.each(photos.map((p) => [p.src, p]))("%s is valid", (_, photo) => {
    checkPhoto(photo);
    expect(["street", "travel"]).toContain(photo.category);
  });

  it("has no duplicates", () => {
    const srcs = photos.map((p) => p.src);
    expect(new Set(srcs).size).toBe(srcs.length);
  });
});

describe("projects", () => {
  it("have unique, url-safe slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9-]+$/);
  });

  it.each(projects.map((p) => [p.slug, p]))("%s is valid", (_, project) => {
    expect(project.title.trim()).not.toBe("");
    expect(project.year).toMatch(/^\d{4}$/);
    expect(project.photos.length).toBeGreaterThan(0);
    project.photos.forEach(checkPhoto);
    const srcs = project.photos.map((p) => p.src);
    expect(new Set(srcs).size, "duplicate photo in project").toBe(srcs.length);
  });
});
