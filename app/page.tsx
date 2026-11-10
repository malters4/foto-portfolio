import ScatterGallery from "@/components/ScatterGallery";
import { photos } from "@/lib/photos";

export default function Home() {
  return (
    <main className="flex-1 px-5 md:px-12">
      <p className="max-w-md pt-10 leading-relaxed text-neutral-400">
        people, places and moments in between.{" "}
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
          Photographing everyday life, fleeting moments and the little details
          that often go unnoticed. A fan of analogue photography, slow
          processes, unapologetic dog watching and complaining about burnt
          coffee.
        </p>
      </section>
    </main>
  );
}
