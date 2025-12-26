"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BenefitsValue from "@/components/home/BenefitsValue";
import KBeautyMembership from "@/components/home/KBeautyMembership";
import BeautyProcedures from "@/components/home/BeautyProcedures";
import FeaturedClinics from "@/components/home/FeaturedClinics";

export default function BenefitsPage() {
  return (
    <main className="min-h-screen bg-brand-cream pt-20">
      <Header />
      <div className="py-12">
        <BenefitsValue />
        <BeautyProcedures />
        <KBeautyMembership />
        <FeaturedClinics />
      </div>
      <Footer />
    </main>
  );
}
