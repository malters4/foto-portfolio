import ScatterGallery from "@/components/ScatterGallery";
import { photos } from "@/lib/photos";

export default function Home() {
  return (
    <main className="flex-1 px-5 md:px-12">
      <p className="max-w-md pt-10 leading-relaxed text-neutral-400">
        {/* Placeholder — replace with a real one-line intro. */}
        street and travel photography.{" "}
        <a href="#contact" className="text-neutral-900 underline underline-offset-2">
          get in touch.
        </a>
      </p>

      <section aria-label="Gallery" className="pt-16 pb-32">
        <ScatterGallery photos={photos} />
      </section>

      <section id="about" aria-label="About" className="max-w-md scroll-mt-20 pb-24">
        <h2 className="mb-4 text-neutral-400">about</h2>
        <p className="leading-relaxed text-neutral-700">
          {/* Placeholder — replace with real bio. */}
          a short bio goes here: who you are, what you shoot, and what draws
          you to it.
        </p>
      </section>
    </main>
  );
}
