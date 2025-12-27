import FAQ from "@/components/home/FAQ";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { Locale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: 'metadata.faq' });

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
    <main className="min-h-screen font-pretendard">
      {/* Simple Hero / Title Section */}
      <section className="pt-48 pb-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
            {t("faq")}
          </h1>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
            {tf("subtitle")}
          </p>
        </div>
      </section>

      <FAQ />
    </main>
  );
}
