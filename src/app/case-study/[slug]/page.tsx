import { getProjectBySlug, getAllSlugs } from "@/lib/projects";
import { CaseStudyPageClient } from "./CaseStudyPageClient";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.titlePt} — Lanna Anjos`,
    description: project.synopsisPt,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyPageClient project={project} />;
}
