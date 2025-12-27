import BenefitsValue from "@/components/home/BenefitsValue";
import KBeautyMembership from "@/components/home/KBeautyMembership";
import FeaturedClinics from "@/components/home/FeaturedClinics";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { Locale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.benefits' });

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

export default function BenefitsPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="py-12">
        <BenefitsValue />
        {/* <BeautyProcedures /> */}
        <KBeautyMembership />
        <FeaturedClinics />
      </div>
    </main>
  );
}
