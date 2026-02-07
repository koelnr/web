import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FadeIn, ScrollReveal } from "@/components/animations";
import { landingPageConfig } from "@/lib/config";

function HeroSection() {
  const { hero, brand } = landingPageConfig;

  return (
    <section className="relative min-h-screen flex items-center" id="hero">
      <Image
        src={hero.backgroundImage.src}
        alt={hero.backgroundImage.alt}
        fill
        className="object-cover"
        priority
      />
      <div className={`absolute inset-0 ${hero.overlayClassName}`} />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl text-white space-y-8">
          <FadeIn>
            <Badge className="bg-white/15 text-white border-white/30 hover:bg-white/20">
              {hero.badge}
            </Badge>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              {hero.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-white/90">{hero.subtitle}</p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              {hero.ctas.map((cta) => (
                <Button
                  key={cta.label}
                  asChild
                  size="lg"
                  variant={cta.variant ?? "default"}
                  className={
                    cta.variant === "secondary"
                      ? "bg-white text-black hover:bg-white/90"
                      : ""
                  }
                >
                  <Link href={cta.href}>{cta.label}</Link>
                </Button>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-sm text-white/85">{brand.tagline}</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ServiceTiersSection() {
  const { serviceTiers } = landingPageConfig;

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">{serviceTiers.title}</h2>
            <p className="text-muted-foreground mt-4">{serviceTiers.subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {serviceTiers.tiers.map((tier) => (
            <Card key={tier.id}>
              <CardHeader>
                <CardTitle>{tier.title}</CardTitle>
                <CardDescription>{tier.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-semibold text-primary">{tier.price}</p>
                <ul className="space-y-2">
                  {tier.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="size-4 mt-0.5 text-primary shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function SubscriptionPlansSection() {
  const { subscriptionPlans } = landingPageConfig;

  return (
    <section id="subscriptions" className="py-20 bg-accent/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">{subscriptionPlans.title}</h2>
          <p className="text-muted-foreground mt-4">{subscriptionPlans.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {subscriptionPlans.plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.badge ? "border-2 border-primary relative" : ""}
            >
              <CardHeader>
                {plan.badge ? (
                  <Badge className="w-fit bg-primary text-primary-foreground">
                    {plan.badge}
                  </Badge>
                ) : null}
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription className="font-semibold text-primary">
                  {plan.price}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {plan.includes.map((item) => (
                    <li key={item} className="text-sm flex items-start gap-2">
                      <CheckCircle2 className="size-4 mt-0.5 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Separator />
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Ideal for:</span>{" "}
                  {plan.idealFor}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function SubscriptionBenefitsSection() {
  const { subscriptionBenefits } = landingPageConfig;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>{subscriptionBenefits.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2">
              {subscriptionBenefits.items.map((item) => (
                <div key={item} className="flex gap-2 text-sm">
                  <CheckCircle2 className="size-4 mt-0.5 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function OnDemandPricingSection() {
  const { onDemandPricing } = landingPageConfig;

  return (
    <section id="on-demand" className="py-20 bg-accent/40">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold">{onDemandPricing.title}</h2>
        </div>

        <div className="grid gap-4 mt-8 md:grid-cols-2">
          {onDemandPricing.items.map((item) => (
            <Card key={item.label}>
              <CardContent className="pt-6 flex items-center justify-between gap-3">
                <p>{item.label}</p>
                <Badge variant="secondary">{item.value}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FleetPricingSection() {
  const { fleetPricing } = landingPageConfig;

  return (
    <section id="fleet" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">{fleetPricing.title}</h2>
          <p className="text-muted-foreground mt-4">{fleetPricing.subtitle}</p>
          <Badge variant="outline" className="mt-4">
            {fleetPricing.minimumCommitment}
          </Badge>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {fleetPricing.plans.map((plan) => (
            <Card key={plan.name}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription className="font-semibold text-primary">
                  {plan.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="size-4 mt-0.5 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ServiceTiersSection />
      <SubscriptionPlansSection />
      <SubscriptionBenefitsSection />
      <OnDemandPricingSection />
      <FleetPricingSection />
    </main>
  );
}
