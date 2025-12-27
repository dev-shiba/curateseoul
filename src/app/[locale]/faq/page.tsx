import FAQ from "@/components/home/FAQ";
import { useTranslations } from "next-intl";

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
