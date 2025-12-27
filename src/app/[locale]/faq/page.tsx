import FAQ from "@/components/home/FAQ";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { Locale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as any, namespace: 'metadata.faq' });

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

export default function FAQPage() {
  const t = useTranslations("header"); // Assuming 'faq' key is in header or common
  const tf = useTranslations("faqPage");

  return (
    <main className="min-h-screen pt-24">
      <div className="py-12">
        <FAQ />
      </div>
    </main>
  );
}
