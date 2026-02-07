import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Circle,
  Clock3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
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
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <Image
        src={hero.backgroundImage.src}
        alt={hero.backgroundImage.alt}
        fill
        className="object-cover"
        priority
      />
      <div className={`absolute inset-0 ${hero.overlayClassName}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(30,157,241,0.28),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container relative z-10 mx-auto px-4 py-24">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8 text-white">
            <FadeIn>
              <Badge className="rounded-full border-white/40 bg-white/20 px-4 py-1 text-white backdrop-blur-sm">
                {hero.badge}
              </Badge>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="text-4xl font-black leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
                {hero.title}
              </h1>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p className="max-w-2xl text-base text-white/90 md:text-xl">
                {hero.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="flex flex-col gap-3 sm:flex-row">
                {hero.ctas.map((cta, index) => (
                  <Button
                    key={cta.label}
                    asChild
                    size="lg"
                    variant={index === 0 ? "default" : "outline"}
                    className={
                      index === 0
                        ? "h-12 rounded-full bg-primary px-7 text-primary-foreground shadow-lg shadow-primary/30"
                        : "h-12 rounded-full border-white/50 bg-white/10 px-7 text-white hover:bg-white/20"
                    }
                  >
                    <Link href={cta.href}>
                      {cta.label}
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.32}>
              <div className="flex flex-wrap gap-3">
                {hero.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-2 text-sm text-white/95 backdrop-blur-sm"
                  >
                    <Circle className="size-2 fill-white stroke-none" />
                    {highlight}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.25} y={30}>
            <Card className="hidden border-white/20 bg-black/35 text-white backdrop-blur-lg lg:block">
              <CardHeader>
                <CardDescription className="text-white/70">
                  {hero.sideCard.eyebrow}
                </CardDescription>
                <CardTitle className="text-4xl font-black text-white">
                  {hero.sideCard.price}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-white/90">
                {hero.sideCard.points.map((point, index) => (
                  <div key={point} className="flex items-center gap-2">
                    {index === 0 ? (
                      <Clock3 className="size-4 text-primary" />
                    ) : index === 1 ? (
                      <ShieldCheck className="size-4 text-primary" />
                    ) : (
                      <Sparkles className="size-4 text-primary" />
                    )}
                    {point}
                  </div>
                ))}
                <Separator className="bg-white/20" />
                <p className="text-xs text-white/70">{brand.tagline}</p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ServiceTiersSection() {
  const { serviceTiers } = landingPageConfig;

  return (
    <section id="services" className="relative overflow-hidden bg-background py-24">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="container relative mx-auto px-4">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">
              {serviceTiers.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{serviceTiers.subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {serviceTiers.tiers.map((tier) => (
            <Card
              key={tier.id}
              className="group border-border/70 bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
            >
              <CardHeader>
                <CardDescription className="uppercase tracking-wide text-xs">
                  {tier.subtitle}
                </CardDescription>
                <CardTitle className="text-2xl leading-tight">{tier.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-semibold text-primary">{tier.price}</p>
                <ul className="space-y-2.5">
                  {tier.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
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
    <section id="subscriptions" className="bg-slate-50 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            {subscriptionPlans.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{subscriptionPlans.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {subscriptionPlans.plans.map((plan) => (
            <Card
              key={plan.name}
              className={
                plan.badge
                  ? "relative border-primary bg-background shadow-xl shadow-primary/10"
                  : "border-border/80 bg-background"
              }
            >
              <CardHeader>
                {plan.badge ? (
                  <Badge className="w-fit rounded-full bg-primary px-3 py-1 text-primary-foreground">
                    {plan.badge}
                  </Badge>
                ) : null}
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription className="text-base font-semibold text-primary">
                  {plan.price}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Separator />
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Ideal for:</span>{" "}
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
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden border-primary/25">
          <div className="bg-gradient-to-r from-primary/10 via-background to-background p-7">
            <CardTitle className="text-2xl font-black tracking-tight">
              {subscriptionBenefits.title}
            </CardTitle>
          </div>
          <CardContent className="grid gap-3 p-7 md:grid-cols-2">
            {subscriptionBenefits.items.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border/80 bg-card/40 px-4 py-3 text-sm"
              >
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function OnDemandPricingSection() {
  const { onDemandPricing } = landingPageConfig;

  return (
    <section id="on-demand" className="bg-slate-50 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            {onDemandPricing.title}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {onDemandPricing.items.map((item) => (
            <Card key={item.label} className="border-border/80 bg-background">
              <CardContent className="flex items-center justify-between gap-4 pt-6">
                <p className="font-medium">{item.label}</p>
                <Badge variant="secondary" className="rounded-full px-3 py-1 text-sm">
                  {item.value}
                </Badge>
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
    <section id="fleet" className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            {fleetPricing.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{fleetPricing.subtitle}</p>
          <Badge className="mt-5 rounded-full bg-primary/12 px-4 py-1.5 text-primary hover:bg-primary/16">
            {fleetPricing.minimumCommitment}
          </Badge>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {fleetPricing.plans.map((plan) => (
            <Card
              key={plan.name}
              className="border-border/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription className="text-base font-semibold text-primary">
                  {plan.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
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
