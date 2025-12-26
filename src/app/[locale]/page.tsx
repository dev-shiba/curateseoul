"use client";

import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import VerificationFlow from "@/components/home/VerificationFlow";
import BenefitsValue from "@/components/home/BenefitsValue";
import MemberVideos from "@/components/home/MemberVideos";
import MemberReviews from "@/components/home/MemberReviews";
import HowItWorks from "@/components/home/HowItWorks";
import KBeautyMembership from "@/components/home/KBeautyMembership";
import TrustSection from "@/components/home/TrustSection";
import RulesSection from "@/components/home/RulesSection";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <Header />
      <Hero />
      <VerificationFlow />
      <TrustSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
