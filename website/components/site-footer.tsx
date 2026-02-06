export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="container mx-auto flex flex-col items-center gap-2 px-4 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <p>
          Built by{" "}
          <a
            href="https://woovi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--primary)] hover:underline"
          >
            Woovi
          </a>{" "}
          — Instant payments with Pix
        </p>
        <p>Open source code challenges for engineers who love building</p>
      </div>
    </footer>
  );
}
