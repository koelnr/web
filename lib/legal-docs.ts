import path from "node:path";

export type LegalDoc = {
  slug: "privacy-policy" | "terms-and-conditions" | "refund-and-cancellation-policy";
  title: string;
  description: string;
  filePath: string;
};

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description: "How koelnr collects, uses, and protects customer data.",
    filePath: path.join(process.cwd(), "content/legal/privacy-policy.md"),
  },
  {
    slug: "terms-and-conditions",
    title: "Terms and Conditions",
    description: "Rules and terms for using koelnr products and services.",
    filePath: path.join(process.cwd(), "content/legal/terms-and-conditions.md"),
  },
  {
    slug: "refund-and-cancellation-policy",
    title: "Refund and Cancellation Policy",
    description: "Cancellation, rescheduling, and refund process details.",
    filePath: path.join(
      process.cwd(),
      "content/legal/refund-and-cancellation-policy.md",
    ),
  },
];

export function getLegalDocBySlug(slug: string) {
  return legalDocs.find((doc) => doc.slug === slug);
}
