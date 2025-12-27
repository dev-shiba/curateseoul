import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import MotionSection from "../common/MotionSection";
import Image from "next/image";

export default function BenefitsValue({ showViewMore }: { showViewMore?: boolean }) {
  const t = useTranslations("benefitsPage.valueSection");
  console.log(showViewMore)

  const benefits = [
    {
      key: "dining",
      image: "/images/benefit/dining.png",
    },
    {
      key: "cafe",
      image: "/images/benefit/cafe.png",
    },
    {
      key: "popup",
      image: "/images/benefit/popup.png",
    },
    {
      key: "beauty",
      image: "/images/benefit/beauty.png",
    },
  ];

  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">


      <div className="container mx-auto px-6 relative z-10">
        <MotionSection>
          <div className="text-center mb-16">
            <div className="inline-block bg-brand-warm/50 border border-brand-gold/20 px-6 py-2 rounded-full mb-6">
              <span className="text-sm font-bold text-brand-gold-dark">
                {t("eyebrow")}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight">
              {t("title")}
            </h2>
            <p className="text-lg text-zinc-500 font-medium mb-12">
              {t("subtitle")}
            </p>

            {/* Total Value Emphasis */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-brand-gold/20 p-[1px] rounded-3xl shadow-warm-lg">
                <div className="bg-white rounded-[23px] p-8 md:p-12 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-brand-gold" />

                  <h3 className="text-xs font-bold text-brand-gold-dark uppercase tracking-widest mb-4">
                    {t("totalEstimatedValueLabel")}
                  </h3>
                  <div className="text-4xl md:text-6xl font-extrabold text-brand-gold-dark mb-2">
                    {t("totalEstimatedValue")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefit Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
            {benefits.map((item, index) => (
              <div
                key={item.key}
                className={`group bg-white rounded-[32px] p-8 shadow-sm hover:shadow-warm-lg transition-all duration-300 border hover:-translate-y-1 relative flex flex-col items-center text-center ${index === 0 ? "border-brand-gold/40 ring-1 ring-brand-gold/20" : "border-transparent hover:border-brand-gold/20"
                  }`}
              >
                {index === 0 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                    {t("popularBadge")}
                  </div>
                )}

                <div className="w-24 h-24 bg-brand-soft rounded-[28px] overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-500 shadow-inner relative">
                  <Image
                    src={item.image}
                    alt={t(`items.${item.key}.title`)}
                    fill
                    className="object-cover"
                  />
                </div>

                <h4 className="text-xl font-bold text-zinc-900 mb-3">
                  {t(`items.${item.key}.title`)}
                </h4>

                <p className="text-sm text-zinc-500 leading-relaxed mb-8 font-medium h-10">
                  {t(`items.${item.key}.description`)}
                </p>

                <div className="mt-auto w-full bg-brand-warm/50 rounded-2xl p-4">
                  <div className="text-xs font-bold text-zinc-400 mb-1 uppercase tracking-wider">
                    {t("valueLabel")}
                  </div>
                  <div className="text-2xl font-black text-brand-gold-dark">
                    {t(`items.${item.key}.value`)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showViewMore && (
            <div className="text-center">
              <Link
                href="/benefits"
                className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                {t("viewMore")}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-zinc-400 text-xs font-medium">
              {t("disclosureNote")}
            </p>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
