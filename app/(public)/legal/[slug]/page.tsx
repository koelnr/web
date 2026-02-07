import fs from "node:fs/promises";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { getLegalDocBySlug, legalDocs } from "@/lib/legal-docs";
import { markdownToHtml } from "@/lib/markdown";

type LegalPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return legalDocs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: LegalPageProps) {
  const { slug } = await params;
  const doc = getLegalDocBySlug(slug);

  if (!doc) {
    return {
      title: "Legal",
    };
  }

  return {
    title: doc.title,
    description: doc.description,
  };
}

export default async function LegalDocPage({ params }: LegalPageProps) {
  const { slug } = await params;
  const doc = getLegalDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const markdown = await fs.readFile(doc.filePath, "utf-8");
  const html = markdownToHtml(markdown);

  return (
    <main className="min-h-screen bg-background py-16">
      <section className="container mx-auto max-w-4xl px-4">
        <div className="mb-6">
          <Link href="/legal" className="text-sm text-primary hover:underline">
            Back to legal
          </Link>
        </div>

        <Card>
          <CardContent className="p-8 md:p-10">
            <article
              className="markdown-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
