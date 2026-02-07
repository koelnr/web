"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { landingPageConfig } from "@/lib/config";

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
    <header className="sticky top-0 z-50 w-full h-16 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">{landingPageConfig.brand.name}</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#services"
                onClick={(e) => smoothScroll(e, "#services")}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Services
              </Link>
              <Link
                href="#subscriptions"
                onClick={(e) => smoothScroll(e, "#subscriptions")}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Subscriptions
              </Link>
              <Link
                href="#on-demand"
                onClick={(e) => smoothScroll(e, "#on-demand")}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                On-Demand
              </Link>
              <Link
                href="#fleet"
                onClick={(e) => smoothScroll(e, "#fleet")}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Fleet
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Button asChild size="sm">
              <Link href="#hero" onClick={(e) => smoothScroll(e, "#hero")}>
                Download App
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
