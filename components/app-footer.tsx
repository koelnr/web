import { Button } from "@/components/ui/button";
import { Instagram, Mail } from "lucide-react";
import Link from "next/link";
import { landingPageConfig, siteConfig } from "@/lib/config";

export function AppFooter() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">{landingPageConfig.brand.name}</h3>
            <p className="text-muted-foreground">{landingPageConfig.brand.tagline}</p>
            <p className="text-sm text-muted-foreground">
              {landingPageConfig.brand.description}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" size="sm" className="gap-2">
              <Link href="#">
                <Instagram className="h-4 w-4" />
                Instagram
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="gap-2">
              <Link href="#">
                <Mail className="h-4 w-4" />
                Email
              </Link>
            </Button>
          </div>

          <div className="text-center text-sm text-muted-foreground border-t pt-8">
            <p>&copy; {siteConfig.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
