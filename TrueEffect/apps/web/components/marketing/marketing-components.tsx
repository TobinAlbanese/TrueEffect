"use client";

import { useState } from "react";
import type { ElementType, ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Eye,
  FileText,
  Globe2,
  Home,
  Layers,
  MapPin,
  MessageSquareText,
  Radar,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { TrueEffectLogo } from "@/components/navigation/true-effect-logo";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImpactRadar } from "@/components/radar/impact-radar";
import { ImpactCard } from "@/components/impact/impact-components";
import { impactCards } from "@/lib/mock-data/impact-cards";
import { pricingPlans } from "@/lib/mock-data/pricing";
import { faqs } from "@/lib/mock-data/faqs";
import { sources } from "@/lib/mock-data/sources";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/trust", label: "Trust" },
  { href: "/sources", label: "Sources" },
  { href: "/app/today", label: "Demo" },
];

export function MarketingNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-backgroundSoft/88 backdrop-blur">
      <div className="te-container flex min-h-20 items-center justify-between gap-4">
        <TrueEffectLogo />
        <nav aria-label="Marketing navigation" className="hidden items-center gap-2 md:flex">
          {navLinks.map((item) => (
            <Link className="rounded-full px-4 py-2 font-medium text-textSecondary hover:bg-secondary hover:text-textPrimary" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link className="hidden rounded-full px-4 py-2 font-medium text-textPrimary hover:bg-secondary sm:inline-flex" href="/sign-in">
            Sign in
          </Link>
          <ButtonLink href="/waitlist" variant="primary">
            Join waitlist
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}

export function MarketingFooter() {
  return (
    <footer className="border-t border-border bg-card/60 py-10">
      <div className="te-container grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <TrueEffectLogo />
          <p className="mt-5 max-w-2xl text-base text-textSecondary">
            True Effect is a frontend MVP prototype using mock data only. It shows how localized impact intelligence can feel before backend integrations exist.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="grid gap-3">
            <p className="font-semibold">Product</p>
            <Link href="/pricing">Pricing</Link>
            <Link href="/trust">Trust</Link>
            <Link href="/sources">Sources</Link>
            <Link href="/waitlist">Waitlist</Link>
          </div>
          <div className="grid gap-3">
            <p className="font-semibold">Prototype</p>
            <Link href="/app/today">Today</Link>
            <Link href="/app/ask">Ask True Effect</Link>
            <Link href="/admin/review">Admin review</Link>
            <Link href="/onboarding/location">Onboarding</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function HeroRadarMockup() {
  return <ImpactRadar className="mx-auto w-full max-w-3xl" />;
}

export function ProductPreviewMockup() {
  return (
    <div className="relative mx-auto max-w-5xl rounded-lg border border-border bg-card p-4 soft-shadow">
      <div className="grid gap-4 lg:grid-cols-[1fr_1.25fr]">
        <div className="rounded-lg bg-backgroundSoft p-5">
          <p className="text-sm font-semibold text-mainPrimary">Today in Sacramento</p>
          <h3 className="mt-2 text-2xl font-semibold">Personal impact feed</h3>
          <div className="mt-5 grid gap-3">
            {impactCards.slice(0, 3).map((card) => (
              <div className="rounded-lg border border-border bg-card p-4" key={card.id}>
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold">{card.title}</p>
                  <span className="rounded-full bg-environmentPrimary/15 px-3 py-1 text-sm font-semibold text-environmentPrimary">
                    {card.level}
                  </span>
                </div>
                <p className="mt-2 text-sm text-textSecondary">{card.summary}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-textPrimary p-5 text-white">
          <p className="text-sm font-semibold text-lightPrimary">Impact explanation</p>
          <h3 className="mt-2 text-2xl font-semibold">News tells you what happened. True Effect tells you what it may mean.</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {["Money", "Home", "Town"].map((label) => (
              <div className="rounded-lg bg-white/10 p-4" key={label}>
                <p className="text-sm text-white/70">{label}</p>
                <p className="mt-2 font-semibold">Medium signal</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-lg bg-white/10 p-4">
            <p className="text-sm text-white/70">Bottom line</p>
            <p className="mt-2">A practical, source-visible explanation with uncertainty clearly labeled.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-8 md:py-12">
      <div className="te-container">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.55 }}
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-textSecondary">
            <span className="h-2 w-2 rounded-full bg-environmentPrimary" />
            California beta opening soon - start with your ZIP code.
          </div>
          <h1 className="mt-8 text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-textPrimary md:text-7xl">
            When the world changes, know what it means for you.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-textSecondary md:text-xl">
            True Effect explains how policies, prices, local decisions, and global events may affect your money, family, home, job, safety, town, and future.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/onboarding/location" size="lg" variant="primary">
              See what affects you
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/app/today" size="lg" variant="outline">
              Explore demo
            </ButtonLink>
          </div>
        </motion.div>
        <div className="mt-12">
          <HeroRadarMockup />
        </div>
      </div>
    </section>
  );
}

export function ValuePillRow() {
  const values = [
    { icon: Clock3, title: "30-second summaries", text: "Readable enough to understand before a coffee cools." },
    { icon: MapPin, title: "ZIP-based local context", text: "Starts with Sacramento 95814 in this prototype." },
    { icon: Eye, title: "Source-visible explanations", text: "See where the signal came from." },
    { icon: Bell, title: "Watch issues over time", text: "Follow what changed since last time." },
  ];

  return (
    <section className="te-container grid gap-3 py-8 md:grid-cols-4">
      {values.map((item) => (
        <Card className="p-5" key={item.title}>
          <item.icon className="h-6 w-6 text-mainPrimary" />
          <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
          <p className="mt-2 text-sm text-textSecondary">{item.text}</p>
        </Card>
      ))}
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.12em] text-environmentPrimary">{eyebrow}</p> : null}
      <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-lg text-textSecondary">{text}</p> : null}
    </div>
  );
}

export function HomepageDemoSection() {
  return (
    <section className="te-section">
      <div className="te-container">
        <SectionIntro
          eyebrow="Sacramento demo"
          title="5 things may affect Sacramento this week."
          text="Enter the mock ZIP and see a calm, source-visible feed instead of a doom scroll."
        />
        <div className="mx-auto mt-8 flex max-w-lg items-center gap-3 rounded-lg border border-border bg-card p-3 shadow-sm">
          <MapPin className="h-5 w-5 text-environmentPrimary" />
          <input
            aria-label="Demo ZIP code"
            className="min-h-11 flex-1 bg-transparent text-lg font-semibold outline-none"
            defaultValue="95814"
          />
          <span className="rounded-full bg-mainPrimary px-4 py-2 text-sm font-semibold text-white">Sacramento</span>
        </div>
        <div className="mt-8 grid gap-5">
          {impactCards.slice(0, 5).map((card) => (
            <ImpactCard card={card} key={card.id} sources={sources.slice(0, card.sourceCount)} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductPillarSection() {
  const pillars = [
    { icon: Radar, title: "Today", text: "A daily impact radar for your life and location." },
    { icon: Home, title: "My Town", text: "Local decisions without municipal document overload." },
    { icon: Search, title: "Impact Explorer", text: "Browse money, home, schools, safety, jobs, and more." },
    { icon: MessageSquareText, title: "Ask True Effect", text: "Paste a headline or notice and get an impact explanation." },
    { icon: Bell, title: "Watchlist", text: "Follow issues and see what changed over time." },
    { icon: FileText, title: "Weekly Brief", text: "A calm personal summary of the week ahead." },
  ];

  return (
    <section className="te-section bg-card/55">
      <div className="te-container">
        <SectionIntro eyebrow="Product" title="A personal radar for real-world change." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <Card className="p-6" key={pillar.title}>
              <pillar.icon className="h-7 w-7 text-mainPrimary" />
              <h3 className="mt-5 text-2xl font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-base text-textSecondary">{pillar.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  const steps = [
    "Enter your ZIP code",
    "Choose what matters",
    "See your personal impact feed",
    "Follow issues over time",
    "View sources and uncertainty",
  ];

  return (
    <section className="te-section">
      <div className="te-container">
        <SectionIntro eyebrow="How it works" title="Simple enough to understand in seconds." />
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <Card className="p-5" key={step}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mainPrimary text-sm font-bold text-white">
                {index + 1}
              </div>
              <p className="mt-5 font-semibold">{step}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  const cards = [
    { icon: Eye, title: "Sources visible", text: "Every important explanation shows source context." },
    { icon: Sparkles, title: "Uncertainty labeled", text: "The product says what is known and what may change." },
    { icon: Layers, title: "Fact separated from interpretation", text: "Practical meaning is clearly framed as analysis." },
    { icon: ShieldCheck, title: "Human review for sensitive issues", text: "Admin review is part of the future workflow." },
  ];

  return (
    <section className="te-section bg-textPrimary text-white">
      <div className="te-container">
        <SectionIntro eyebrow="Trust" title="Built for trust, not outrage." text="True Effect is designed to be calm, nonpartisan, and useful." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div className="rounded-lg border border-white/12 bg-white/8 p-5" key={card.title}>
              <card.icon className="h-7 w-7 text-lightPrimary" />
              <h3 className="mt-5 text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-white/72">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingPreview() {
  return (
    <section className="te-section">
      <div className="te-container">
        <SectionIntro eyebrow="Pricing preview" title="Plans for different levels of attention." text="No payment logic is implemented in this prototype." />
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <Card className={cn("flex flex-col p-5", plan.featured && "border-mainPrimary ring-2 ring-mainPrimary/20")} key={plan.name}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                {plan.featured ? <span className="rounded-full bg-environmentPrimary px-3 py-1 text-sm font-semibold text-white">Popular</span> : null}
              </div>
              <p className="mt-4 text-3xl font-semibold">{plan.price}</p>
              <p className="mt-3 text-textSecondary">{plan.description}</p>
              <ul className="mt-6 grid gap-3 text-sm">
                {plan.features.slice(0, 5).map((feature) => (
                  <li className="flex gap-2" key={feature}>
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-mainPrimary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink className="mt-6" href="/pricing" variant={plan.featured ? "primary" : "outline"}>
                View plan
              </ButtonLink>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="te-section bg-card/55">
      <div className="te-container">
        <SectionIntro eyebrow="FAQ" title="Plain answers before you sign up." />
        <div className="mx-auto mt-10 max-w-4xl divide-y divide-border rounded-lg border border-border bg-card">
          {faqs.map((item, index) => (
            <div key={item.question}>
              <button
                aria-expanded={open === index}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                onClick={() => setOpen(open === index ? -1 : index)}
                type="button"
              >
                <span className="text-lg font-semibold">{item.question}</span>
                <ChevronDown className={cn("h-5 w-5 transition", open === index && "rotate-180")} />
              </button>
              {open === index ? <p className="px-5 pb-5 text-base text-textSecondary">{item.answer}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="te-section">
      <div className="te-container">
        <div className="relative overflow-hidden rounded-lg bg-textPrimary p-8 text-center text-white md:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(47,107,255,0.45),transparent_24rem),radial-gradient(circle_at_76%_40%,rgba(255,122,47,0.38),transparent_22rem)]" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Start with your ZIP code.</h2>
            <p className="mt-4 text-lg text-white/74">See the prototype through the eyes of a Sacramento household.</p>
            <ButtonLink className="mt-8" href="/onboarding/location" size="lg" variant="signal">
              See what affects me
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MeaningSection() {
  const cards = [
    { title: "What happened", text: "A policy, price, meeting, report, or global event changed." },
    { title: "Why it matters", text: "True Effect connects the change to practical life areas." },
    { title: "How it affects you", text: "The explanation is localized, source-visible, and uncertainty-aware." },
  ];

  return (
    <section className="te-section">
      <div className="te-container">
        <SectionIntro eyebrow="Promise" title="Not more headlines. Real-life meaning." />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <Card className="p-6" key={card.title}>
              <h3 className="text-2xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-textSecondary">{card.text}</p>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <ProductPreviewMockup />
        </div>
      </div>
    </section>
  );
}

export function MarketingPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <MarketingNavbar />
      {children}
      <MarketingFooter />
    </div>
  );
}

export function MethodologyCard({
  title,
  text,
  icon: Icon = Globe2,
}: {
  title: string;
  text: string;
  icon?: ElementType;
}) {
  return (
    <Card className="p-6">
      <Icon className="h-7 w-7 text-mainPrimary" />
      <h2 className="mt-5 text-2xl font-semibold">{title}</h2>
      <p className="mt-3 text-textSecondary">{text}</p>
    </Card>
  );
}
