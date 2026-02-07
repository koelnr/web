import { Button } from "@/components/ui/button";
import { Instagram, Mail } from "lucide-react";
import Link from "next/link";
import { landingPageConfig, siteConfig } from "@/lib/config";

export function AppFooter() {
  return (
    <footer className="relative overflow-hidden border-t bg-background py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(30,157,241,0.12),transparent_45%)]" />
      <div className="container relative mx-auto px-4">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h3 className="text-3xl font-black tracking-tight">
              {landingPageConfig.brand.name}
            </h3>
            <p className="text-muted-foreground">{landingPageConfig.brand.tagline}</p>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              {landingPageConfig.brand.description}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" size="sm" className="gap-2 rounded-full">
              <Link href="#">
                <Instagram className="h-4 w-4" />
                Instagram
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="gap-2 rounded-full">
              <Link href="#">
                <Mail className="h-4 w-4" />
                Email
              </Link>
            </Button>
          </div>

          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {siteConfig.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
