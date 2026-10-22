import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SequenceGallery from "@/components/SequenceGallery";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: `${project.title} — Elena Malta` } : {};
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const i = projects.indexOf(project);
  const next = projects[(i + 1) % projects.length];

  return (
    <main className="flex-1 px-5 pt-10 pb-32 md:px-12">
      <Link href="/projects" className="text-neutral-400 underline-offset-4 hover:text-neutral-900 hover:underline">
        ← projects
      </Link>

      <header className="mt-10 mb-20 max-w-xl md:mb-32">
        <h1 className="text-lg leading-snug normal-case">{project.title}</h1>
        {project.subtitle && <p className="text-lg leading-snug text-neutral-500 normal-case">{project.subtitle}</p>}
        <p className="mt-2 text-neutral-400">
          {[project.place, project.year, project.camera].filter(Boolean).join(" · ")}
        </p>
        <p className="mt-6 leading-relaxed text-neutral-700">{project.description}</p>
      </header>

      <SequenceGallery photos={project.photos} />

      {next.slug !== project.slug && (
        <nav className="mt-32 flex justify-end">
          <Link href={`/projects/${next.slug}`} className="underline-offset-4 hover:underline">
            next: <span className="normal-case">{next.title}</span> →
          </Link>
        </nav>
      )}
    </main>
  );
}
