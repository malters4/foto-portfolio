const linkClass = "underline-offset-4 hover:underline";

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      aria-label="Contact"
      className="flex flex-wrap gap-6 px-5 pt-8 pb-10 md:px-12"
    >
      <a href="mailto:elena.malta88@gmail.com" className={linkClass}>
        email
      </a>
      <a
        href="https://www.instagram.com/maltersmalters"
        target="_blank"
        rel="noreferrer"
        className={linkClass}
      >
        instagram
      </a>
      <p className="w-full text-neutral-400 normal-case">
        © {new Date().getFullYear()} Elena Malta. All rights reserved. Photos may not be downloaded or reused without permission.
      </p>
    </footer>
  );
}
