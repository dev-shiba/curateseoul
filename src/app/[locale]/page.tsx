import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { Locale } from "@/i18n/routing";
import Hero from "@/components/layout/Hero";
import BenefitsValue from "@/components/home/BenefitsValue";
import VerificationFlow from "@/components/home/VerificationFlow";
import TrustSection from "@/components/home/TrustSection";
import FinalCTA from "@/components/home/FinalCTA";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: 'metadata.home' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
    },
    twitter: {
      title: t('ogTitle'),
      description: t('ogDescription'),
    }
  };
}

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
