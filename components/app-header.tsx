"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { landingPageConfig } from "@/lib/config";
import { Logo } from "@/components/logo";

const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
};

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 h-16 w-full border-b border-white/20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-12 w-auto" />
              <span className="sr-only">{landingPageConfig.brand.name}</span>
            </Link>
            <nav className="hidden items-center gap-6 md:flex">
              <Link
                href="#subscriptions"
                onClick={(e) => smoothScroll(e, "#subscriptions")}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                Subscriptions
              </Link>
              <Link
                href="#on-demand"
                onClick={(e) => smoothScroll(e, "#on-demand")}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                On-Demand
              </Link>
              <Link
                href="#fleet"
                onClick={(e) => smoothScroll(e, "#fleet")}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                Fleet
              </Link>
            </nav>
          </div>

          <Button asChild size="sm" className="rounded-full px-5">
            <Link href="#hero" onClick={(e) => smoothScroll(e, "#hero")}>
              Download App
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
