"use client";

import { cn } from "@/lib/utils";

export function TagFilter({
  tags,
  selected,
  onToggle,
}: {
  tags: string[];
  selected: Set<string>;
  onToggle: (tag: string) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {tags.map((tag) => {
        const isActive = selected.has(tag);
        return (
          <button
            key={tag}
            onClick={() => onToggle(tag)}
            className={cn(
              "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
              isActive
                ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                : "border-zinc-300 bg-white text-zinc-700 hover:border-[var(--primary)] hover:text-[var(--primary)] dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300",
            )}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
