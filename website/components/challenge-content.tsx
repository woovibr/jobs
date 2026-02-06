import { Badge } from "@/components/ui/badge";
import { categoryLabels, type ChallengeMeta } from "@/data/challenge-meta";

export function ChallengeContent({
  meta,
  html,
}: {
  meta: ChallengeMeta;
  html: string;
}) {
  return (
    <article className="mx-auto max-w-3xl">
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <Badge>{categoryLabels[meta.category]}</Badge>
        {meta.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
      <div
        className="prose prose-zinc max-w-none dark:prose-invert prose-headings:text-zinc-900 dark:prose-headings:text-zinc-50 prose-a:text-[var(--primary)] prose-a:no-underline hover:prose-a:underline prose-code:before:content-none prose-code:after:content-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
