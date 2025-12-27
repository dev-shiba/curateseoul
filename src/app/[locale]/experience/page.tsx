import MemberVideos from "@/components/home/MemberVideos";
import MemberReviews from "@/components/home/MemberReviews";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { Locale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: 'metadata.experience' });

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

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="py-12">
        <MemberVideos />
        <MemberReviews />
      </div>
    </main>
  );
}
