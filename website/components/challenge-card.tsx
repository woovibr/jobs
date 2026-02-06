import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { categoryLabels, type ChallengeMeta } from "@/data/challenge-meta";

export function ChallengeCard({ challenge }: { challenge: ChallengeMeta }) {
  return (
    <Link href={`/challenges/${challenge.slug}`}>
      <Card className="h-full transition-all hover:shadow-md hover:border-[var(--primary)]/50">
        <CardHeader>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="secondary" className="text-xs">
              {categoryLabels[challenge.category]}
            </Badge>
          </div>
          <CardTitle className="text-lg">{challenge.title}</CardTitle>
          <CardDescription>{challenge.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-1.5">
            {challenge.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
