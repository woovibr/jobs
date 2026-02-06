import { ChallengeCard } from "@/components/challenge-card";
import { type ChallengeMeta } from "@/data/challenge-meta";

export function CategorySection({
  title,
  challenges,
}: {
  title: string;
  challenges: ChallengeMeta[];
}) {
  if (challenges.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.slug} challenge={challenge} />
        ))}
      </div>
    </section>
  );
}
