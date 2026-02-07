import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { legalDocs } from "@/lib/legal-docs";

export const metadata = {
  title: "Legal",
  description: "Legal policies for koelnr",
};

export default function LegalIndexPage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <section className="container mx-auto max-w-4xl px-4">
        <div className="mb-10 space-y-2 text-center">
          <h1 className="text-4xl font-black tracking-tight">Legal</h1>
          <p className="text-muted-foreground">
            Privacy, terms, and policy documents for koelnr.
          </p>
        </div>

        <div className="grid gap-4">
          {legalDocs.map((doc) => (
            <Card key={doc.slug} className="transition-all hover:border-primary/40">
              <CardHeader>
                <CardTitle className="text-xl">
                  <Link href={`/legal/${doc.slug}`} className="hover:text-primary">
                    {doc.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{doc.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
