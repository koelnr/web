import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">KARWSH</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#how-it-works"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                How it Works
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Pricing
              </Link>
              <Link
                href="#fleets"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Fleets
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="hidden sm:flex gap-2">
              <Phone className="h-4 w-4" />
              <MessageCircle className="h-4 w-4" />
              <span>Call / WA</span>
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              BOOK TRIAL ₹299
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
