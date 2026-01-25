import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Mail } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function AppFooter() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">{siteConfig.name}</h3>
            <p className="text-muted-foreground">
              A Doorstep Car Wash Service.
            </p>
            <p className="text-sm text-muted-foreground">Ludhiana, Punjab.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Instagram className="h-4 w-4" />
              Instagram
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Mail className="h-4 w-4" />
              Email
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
