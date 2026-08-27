import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WorkSection />
        <ServicesSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
