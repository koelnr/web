import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/config";

export function AppFooter() {
  return (
    <footer className="dark bg-card text-card-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-sm">{siteConfig.footer.description}</p>
          </div>
          {siteConfig.footer.sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-8 bg-accent/50" />
        <div className="text-center text-sm">
          <p>&copy; {siteConfig.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
