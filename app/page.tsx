import PhotoGrid from "@/components/PhotoGrid";
import { photos } from "@/lib/photos";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-20 px-4 py-16 sm:gap-28 sm:px-6 sm:py-24">
      <header className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Elena Malta
        </h1>
        <p className="text-neutral-500">Photography</p>
      </header>

      <section aria-label="Gallery">
        <PhotoGrid photos={photos} />
      </section>

      <section aria-label="About" className="max-w-2xl">
        <h2 className="mb-4 text-sm font-medium tracking-wide text-neutral-400 uppercase">
          About
        </h2>
        <p className="text-lg leading-relaxed text-neutral-700">
          {/* Placeholder — replace with real bio. */}
          A short bio goes here: who you are, what you shoot, and what draws
          you to it.
        </p>
      </section>

      <footer
        aria-label="Contact"
        className="flex flex-wrap gap-6 border-t border-neutral-200 pt-8 text-sm"
      >
        <a
          href="mailto:hello@example.com"
          className="text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
        >
          Email
        </a>
        <a
          href="https://instagram.com/yourhandle"
          target="_blank"
          rel="noreferrer"
          className="text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
        >
          Instagram
        </a>
      </footer>
    </main>
  );
}
