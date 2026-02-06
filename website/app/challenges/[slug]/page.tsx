import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ChallengeContent } from "@/components/challenge-content";
import {
  getChallengeContent,
  getAllChallengeSlugs,
} from "@/lib/challenges";

export function generateStaticParams() {
  return getAllChallengeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getChallengeContent(slug);
  if (!data) return { title: "Challenge Not Found" };
  return {
    title: `${data.meta.title} — Woovi Jobs`,
    description: data.meta.description,
  };
}

export default async function ChallengePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getChallengeContent(slug);
  if (!data) notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-[var(--primary)] transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to challenges
      </Link>
      <ChallengeContent meta={data.meta} html={data.html} />
    </div>
  );
}
