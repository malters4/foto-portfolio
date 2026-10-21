import Link from "next/link";

const linkClass = "underline-offset-4 hover:underline";

// Sticky top bar shared by every page. About lives on the home page; contact is the site footer.
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white/80 px-5 py-4 backdrop-blur md:px-8">
      <Link href="/" className={linkClass}>
        Elena Malta
      </Link>
      <nav className="flex gap-5">
        <Link href="/projects" className={linkClass}>projects</Link>
        <Link href="/#about" className={linkClass}>about</Link>
        <a href="#contact" className={linkClass}>contact</a>
      </nav>
    </header>
  );
}
