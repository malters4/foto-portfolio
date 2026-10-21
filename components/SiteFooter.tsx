const linkClass = "underline-offset-4 hover:underline";

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      aria-label="Contact"
      className="flex flex-wrap gap-6 px-5 pt-8 pb-10 md:px-12"
    >
      {/* Placeholders — replace with real email and Instagram handle. */}
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
  );
}
