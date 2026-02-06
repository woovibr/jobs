import fs from "fs";
import path from "path";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import { challenges, type ChallengeMeta } from "@/data/challenge-meta";

const challengesDir = path.join(process.cwd(), "..", "challenges");

export async function getChallengeContent(
  slug: string,
): Promise<{ meta: ChallengeMeta; html: string } | null> {
  const meta = challenges.find((c) => c.slug === slug);
  if (!meta) return null;

  const filePath = path.join(challengesDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const markdown = fs.readFileSync(filePath, "utf-8");
  const result = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(markdown);

  return { meta, html: result.toString() };
}

export function getAllChallengeSlugs(): string[] {
  return challenges.map((c) => c.slug);
}
