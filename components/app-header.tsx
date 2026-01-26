"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

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
              <span className="text-2xl font-bold">Karwsh</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#how-it-works"
                onClick={(e) => smoothScroll(e, "#how-it-works")}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                How it Works
              </Link>
              <Link
                href="#pricing"
                onClick={(e) => smoothScroll(e, "#pricing")}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Pricing
              </Link>
              <Link
                href="#fleets"
                onClick={(e) => smoothScroll(e, "#fleets")}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Fleets
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:flex gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>Call / WA</span>
            </Button>
            <Button size="sm">Book Trial ₹299</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
