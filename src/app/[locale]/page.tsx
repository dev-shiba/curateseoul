import Hero from "@/components/layout/Hero";
import VerificationFlow from "@/components/home/VerificationFlow";
import BenefitsValue from "@/components/home/BenefitsValue";
import TrustSection from "@/components/home/TrustSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BenefitsValue showViewMore={true} />
      <VerificationFlow />
      <TrustSection />
      <FinalCTA />
    </main>
  );
}
