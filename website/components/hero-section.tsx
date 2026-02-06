export function HeroSection() {
  return (
    <section className="py-16 md:py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-zinc-50">
        Build the future of{" "}
        <span className="text-[var(--primary)]">payments</span>
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        Open source code challenges from Woovi. Pick a challenge, build
        something great, and show us what you can do.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <a
          href="https://woovi.com/careers"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-md bg-[var(--primary)] px-6 text-sm font-medium text-white hover:bg-[var(--primary-hover)] transition-colors"
        >
          View Open Positions
        </a>
        <a
          href="https://github.com/woovibr/jobs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-300 bg-white px-6 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition-colors dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
        >
          Star on GitHub
        </a>
      </div>
    </section>
  );
}
