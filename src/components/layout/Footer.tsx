export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg dark:bg-black text-slate-300 dark:text-slate-400 py-10 text-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://linkedin.com/in/nilbermota"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary-light transition-colors"
          >
            🔗
          </a>
          <a
            href="https://github.com/nilbermota"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-primary-light transition-colors"
          >
            💻
          </a>
        </div>
        <p className="text-sm">
          Built with{" "}
          <span className="font-semibold text-primary-light/80">Next.js</span> &{" "}
          <span className="font-semibold text-primary-light/80">
            Tailwind CSS
          </span>
          .
        </p>
        <p className="text-sm">
          Designed by Nilber Mota. © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
