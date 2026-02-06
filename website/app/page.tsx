"use client";

import { useState, useMemo, useCallback } from "react";
import { HeroSection } from "@/components/hero-section";
import { SearchBar } from "@/components/search-bar";
import { TagFilter } from "@/components/tag-filter";
import { CategorySection } from "@/components/category-section";
import {
  challenges,
  getAllTags,
  categoryLabels,
  type Category,
} from "@/data/challenge-meta";
import { createSearchIndex } from "@/lib/search";

const allTags = getAllTags();
const searchIndex = createSearchIndex(challenges);
const categoryOrder: Category[] = [
  "frontend",
  "backend",
  "fintech",
  "devops",
  "architecture",
];

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

  const handleToggleTag = useCallback((tag: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  }, []);

  const filtered = useMemo(() => {
    let results = challenges;

    if (query.trim()) {
      const searchResults = searchIndex.search(query.trim());
      results = searchResults.map((r) => r.item);
    }

    if (selectedTags.size > 0) {
      results = results.filter((c) =>
        Array.from(selectedTags).every((tag) => c.tags.includes(tag)),
      );
    }

    return results;
  }, [query, selectedTags]);

  const grouped = useMemo(() => {
    const map = new Map<Category, typeof challenges>();
    for (const cat of categoryOrder) {
      map.set(
        cat,
        filtered.filter((c) => c.category === cat),
      );
    }
    return map;
  }, [filtered]);

  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <div className="mb-8 space-y-4">
        <SearchBar value={query} onChange={setQuery} />
        <TagFilter
          tags={allTags}
          selected={selectedTags}
          onToggle={handleToggleTag}
        />
      </div>
      {filtered.length === 0 ? (
        <p className="text-center text-zinc-500 py-12">
          No challenges match your filters. Try adjusting your search or tags.
        </p>
      ) : (
        categoryOrder.map((cat) => (
          <CategorySection
            key={cat}
            title={categoryLabels[cat]}
            challenges={grouped.get(cat) || []}
          />
        ))
      )}
    </div>
  );
}
