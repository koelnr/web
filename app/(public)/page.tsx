import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-primary/5">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://placehold.harshsandhu.com/api/img?w=1920&h=600"
              alt="Professional car wash service"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>

          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                LUDHIANA'S #1 DOORSTEP CAR WASH
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Skip the queue. We bring the water, power, and shine to you.
                <br />
                Join 500+ happy subscribers in Sarabha Nagar & Model Town.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="text-lg px-8 h-14">
                  BOOK A WASH - ₹299
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 h-14"
                >
                  VIEW SUBSCRIPTIONS
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                (No payment required to book)
              </p>

              <div className="flex flex-wrap justify-center gap-6 pt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">4.9/5 Avg Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">90% Less Water Used</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">Background Verified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Old Way vs Karwsh Way */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              THE "OLD WAY" vs. THE KARWSH WAY
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-lg">Driving to the wash center</p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-lg">Waiting in line for 1 hour</p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-lg">Unreliable local cleaners</p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-lg">Harsh chemicals & scratches</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">We come to your home or office</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">Zero wait time. You relax.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">Trained pros with SOPs</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">Eco-friendly, scratch-free tech</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Simple 3-Step Process */}
        <section id="how-it-works" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              SIMPLE 3-STEP PROCESS
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <CardTitle className="text-2xl">BOOK</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Select a slot via Web or WhatsApp.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <CardTitle className="text-2xl">WE WASH</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our fully equipped van arrives. You don't even need to be
                    there.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <CardTitle className="text-2xl">YOU SHINE</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get a notification when your car is sparkling clean.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Subscription Plans */}
        <section id="pricing" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                CHOOSE YOUR SHINE
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                "Lock in your price. No surge pricing."
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
              {/* Starter Plan */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">STARTER</CardTitle>
                  <div className="text-4xl font-bold mb-4">
                    ₹699<span className="text-lg font-normal">/mo</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <p>2 Exterior Wash</p>
                    <p>1 Interior Vac</p>
                  </div>
                  <Button className="w-full mt-6">Choose Plan</Button>
                </CardContent>
              </Card>

              {/* Recommended Plan */}
              <Card className="border-4 border-primary relative shadow-xl">
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                  RECOMMENDED (Best)
                </Badge>
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">PREMIUM</CardTitle>
                  <div className="text-4xl font-bold mb-4">
                    ₹1,199<span className="text-lg font-normal">/mo</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <p>4 Exterior Washes</p>
                    <p>2 Interior Vacuums</p>
                    <div className="border-t pt-3 space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Priority Booking</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Free Redo Guarantee</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-6">JOIN THE CLUB</Button>
                </CardContent>
              </Card>

              {/* Care+ Plan */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">CARE+</CardTitle>
                  <div className="text-4xl font-bold mb-4">
                    ₹1,599<span className="text-lg font-normal">/mo</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <p>4 Exterior Washes</p>
                    <p>4 Interior Vacuums</p>
                    <p>1 Deep Clean/mo</p>
                    <div className="border-t pt-3 space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Priority Booking</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Free Redo</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-6">Choose Plan</Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground">
                Just want a one-time wash?{" "}
                <Button variant="link" className="p-0 h-auto font-semibold">
                  Book a Trial for ₹299
                </Button>
              </p>
            </div>
          </div>
        </section>

        {/* Social Proof / Testimonials */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              TRUSTED BY LUDHIANA'S BEST SOCIETIES
            </h2>

            <Card className="max-w-3xl mx-auto my-12 border-2">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4 justify-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-lg italic text-center mb-4">
                  "I used to waste my Sunday morning at the wash center. Now
                  Karwsh does it while I have breakfast."
                </p>
                <p className="text-center text-muted-foreground">
                  - Resident, Royale Heights
                </p>
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-muted-foreground">
                <span className="font-semibold">Serving:</span> Royale Heights |
                Palm Meadows | Sarabha Nagar | Civil Lines
              </p>
            </div>
          </div>
        </section>

        {/* B2B Section */}
        <section id="fleets" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                FOR BUSINESS OWNERS
              </h2>

              <p className="text-lg text-muted-foreground">
                Manage a fleet? Get GST invoices and dedicated morning slots.
                <br />
                Packages start at ₹799/vehicle.
              </p>

              <Button size="lg" className="text-lg px-8">
                Get a Corporate Quote
              </Button>
            </div>
          </div>
        </section>
      </main>
  );
}
