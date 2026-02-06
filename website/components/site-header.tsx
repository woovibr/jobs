import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="8" fill="#03d69d" />
            <path
              d="M8 11l5 5-5 5M16 21h8"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Woovi <span className="text-[var(--primary)]">Jobs</span>
          </span>
        </Link>
        <nav className="flex items-center gap-4">
          <a
            href="https://github.com/woovibr/jobs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-600 hover:text-[var(--primary)] transition-colors dark:text-zinc-400"
          >
            GitHub
          </a>
          <a
            href="https://woovi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-md bg-[var(--primary)] px-4 text-sm font-medium text-white hover:bg-[var(--primary-hover)] transition-colors"
          >
            Join Woovi
          </a>
        </nav>
      </div>
    </header>
  );
}
