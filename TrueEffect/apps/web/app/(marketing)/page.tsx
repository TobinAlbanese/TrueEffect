import {
  FAQSection,
  FinalCTA,
  HeroSection,
  HomepageDemoSection,
  HowItWorksSection,
  MeaningSection,
  PricingPreview,
  ProductPillarSection,
  TrustSection,
  ValuePillRow,
} from "@/components/marketing/marketing-components";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuePillRow />
      <MeaningSection />
      <HomepageDemoSection />
      <ProductPillarSection />
      <HowItWorksSection />
      <TrustSection />
      <PricingPreview />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
