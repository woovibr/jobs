import Fuse from "fuse.js";
import { type ChallengeMeta } from "@/data/challenge-meta";

export function createSearchIndex(items: ChallengeMeta[]) {
  return new Fuse(items, {
    keys: [
      { name: "title", weight: 2 },
      { name: "description", weight: 1.5 },
      { name: "tags", weight: 1 },
    ],
    threshold: 0.4,
    includeScore: true,
  });
}
