import ScatterGallery from "@/components/ScatterGallery";
import { photos } from "@/lib/photos";

const linkClass = "underline-offset-4 hover:underline";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col font-mono text-[13px] lowercase">
      <header className="sticky top-0 z-10 flex items-center justify-between bg-white/80 px-5 py-4 backdrop-blur md:px-8">
        <a href="#top" className={linkClass}>
          Elena Malta
        </a>
        <nav className="flex gap-5">
          <a href="#work" className={linkClass}>work</a>
          <a href="#about" className={linkClass}>about</a>
          <a href="#contact" className={linkClass}>contact</a>
        </nav>
      </header>

      <main id="top" className="flex-1 px-5 md:px-12">
        <p className="max-w-md pt-10 leading-relaxed text-neutral-400">
          {/* Placeholder — replace with a real one-line intro. */}
          street, travel and portrait photography.{" "}
          <a href="#contact" className="text-neutral-900 underline underline-offset-2">
            get in touch.
          </a>
        </p>

        <section id="work" aria-label="Gallery" className="scroll-mt-20 pt-16 pb-32">
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

      <footer
        id="contact"
        aria-label="Contact"
        className="flex flex-wrap gap-6 px-5 pt-8 pb-10 md:px-12"
      >
        <a href="mailto:hello@example.com" className={linkClass}>
          email
        </a>
        <a
          href="https://instagram.com/yourhandle"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          instagram
        </a>
      </footer>
    </div>
  );
}
