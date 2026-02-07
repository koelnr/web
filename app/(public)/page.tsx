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
import { FadeIn } from "@/components/animations";
import { landingPageConfig } from "@/lib/config";

function AppStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
      <path d="M16.61 13.33c.03 3.16 2.77 4.22 2.8 4.24-.02.08-.44 1.5-1.45 2.98-.87 1.27-1.77 2.54-3.2 2.57-1.4.03-1.85-.83-3.45-.83-1.6 0-2.1.8-3.42.85-1.37.05-2.41-1.37-3.29-2.63-1.8-2.6-3.17-7.34-1.33-10.53.91-1.58 2.54-2.58 4.32-2.61 1.35-.03 2.63.91 3.45.91.82 0 2.36-1.12 3.98-.95.68.03 2.6.27 3.83 2.07-.1.06-2.28 1.33-2.25 3.93ZM14.24 5.76c.73-.89 1.23-2.13 1.09-3.36-1.05.04-2.31.7-3.06 1.59-.67.78-1.26 2.03-1.1 3.23 1.17.09 2.37-.59 3.07-1.46Z" />
    </svg>
  );
}

function PlayStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
      <path d="M3.7 2.5c-.42.25-.7.72-.7 1.35v16.3c0 .64.28 1.1.7 1.35l9.33-9.5L3.7 2.5Zm11.85 6.95-2.9 2.55 2.9 2.54 3.75-2.13c.93-.53.93-1.29 0-1.82l-3.75-2.14ZM4.9 22l8.98-8.8 2.98 2.62-10.4 5.9c-.74.42-1.34.46-1.56.28Zm0-20c.22-.18.82-.14 1.56.28l10.4 5.9-2.98 2.62L4.9 2Z" />
    </svg>
  );
}

function HeroSection() {
  const { hero, brand } = landingPageConfig;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <Image
        src={hero.backgroundImage.src}
        alt={hero.backgroundImage.alt}
        fill
        className="object-cover"
        priority
      />
      <div className={`absolute inset-0 ${hero.overlayClassName}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(30,157,241,0.28),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[40px_40px]" />

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
                    <Link
                      href={cta.href}
                      className="inline-flex items-center gap-2"
                    >
                      {cta.store === "apple" ? (
                        <AppStoreIcon />
                      ) : (
                        <PlayStoreIcon />
                      )}
                      {cta.label}
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.32}>
              <div className="flex flex-wrap gap-3">
                {hero.highlights.map((highlight) => (
                  <Badge key={highlight} variant="secondary">
                    <Circle className="size-1 fill-white stroke-none" />
                    {highlight}
                  </Badge>
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

function SubscriptionPlansSection() {
  const { subscriptionPlans } = landingPageConfig;

  return (
    <section
      id="subscriptions"
      className="relative overflow-hidden bg-background py-24"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-primary/10 to-transparent" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            {subscriptionPlans.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {subscriptionPlans.subtitle}
          </p>
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
              <CardContent className="h-full flex flex-col space-y-4">
                <ul className="flex-1 space-y-2">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Separator />
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Ideal for:
                  </span>{" "}
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
        <Card className="bg-background overflow-hidden border-primary/25">
          <div className="px-8 pt-4">
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
    <section id="on-demand" className="bg-card py-24">
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
                <Badge
                  variant="secondary"
                  className="rounded-full px-3 py-1 text-sm"
                >
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
          <Card className="mt-8 border-primary/25 bg-primary/5">
            <CardContent className="space-y-5 p-8">
              <p className="text-sm text-muted-foreground">
                {fleetPricing.contactOnlyMessage}
              </p>
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href={`mailto:${fleetPricing.contactEmail}`}>
                  {fleetPricing.contactEmail}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function ConversionCtaSection() {
  const { conversionCta } = landingPageConfig;

  return (
    <section className="bg-card py-24">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden border-primary/25 bg-linear-to-br from-background via-background to-primary/5">
          <CardContent className="p-8 md:p-12">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <Badge className="rounded-full bg-primary/10 text-primary hover:bg-primary/20">
                Next Step
              </Badge>
              <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                {conversionCta.title}
              </h2>
              <p className="text-muted-foreground">{conversionCta.subtitle}</p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href={conversionCta.primary.href}>
                    {conversionCta.primary.label}
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8"
                >
                  <Link href={conversionCta.secondary.href}>
                    {conversionCta.secondary.label}
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function MobileStickyCtaBar() {
  const { mobileStickyCta } = landingPageConfig;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-background/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md gap-2">
        <Button asChild className="h-11 flex-1 rounded-full">
          <Link href={mobileStickyCta.primary.href}>
            {mobileStickyCta.primary.label}
          </Link>
        </Button>
        <Button asChild variant="outline" className="h-11 flex-1 rounded-full">
          <Link href={mobileStickyCta.secondary.href}>
            {mobileStickyCta.secondary.label}
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-20 md:pb-0">
      <HeroSection />
      <SubscriptionPlansSection />
      <SubscriptionBenefitsSection />
      <OnDemandPricingSection />
      <FleetPricingSection />
      <ConversionCtaSection />
      <MobileStickyCtaBar />
    </main>
  );
}
