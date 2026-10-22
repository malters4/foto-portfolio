import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Elena Malta",
};

export default function ProjectsPage() {
  return (
    <main className="flex-1 px-5 pt-10 pb-32 md:px-12">
      <h1 className="mb-16 text-neutral-400">projects</h1>

      <ul className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2">
        {projects.map((project, i) => {
          const cover = project.photos[0];
          return (
            // Second column sits lower so the index keeps the scattered feel of the home page.
            <li key={project.slug} className={i % 2 === 1 ? "md:mt-32" : ""}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <Image
                  src={cover.src}
                  alt={cover.alt}
                  width={cover.width}
                  height={cover.height}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-auto w-full transition-opacity group-hover:opacity-85"
                />
                <div className="mt-4 flex items-baseline justify-between gap-6">
                  <h2 className="normal-case underline-offset-4 group-hover:underline">{project.title}</h2>
                  <span className="shrink-0 text-neutral-400 tabular-nums">{project.year}</span>
                </div>
                {project.subtitle && <p className="text-neutral-500 normal-case">{project.subtitle}</p>}
                <p className="text-neutral-400">
                  {project.place} · {project.photos.length} photos
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
