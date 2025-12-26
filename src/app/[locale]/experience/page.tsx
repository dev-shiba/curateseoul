"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MemberVideos from "@/components/home/MemberVideos";
import MemberReviews from "@/components/home/MemberReviews";
import HowItWorks from "@/components/home/HowItWorks";
import RulesSection from "@/components/home/RulesSection";
import FAQ from "@/components/home/FAQ";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-brand-cream pt-20">
      <Header />
      <div className="py-12">
        <MemberVideos />
        <MemberReviews />
        <HowItWorks />
        <RulesSection />
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
