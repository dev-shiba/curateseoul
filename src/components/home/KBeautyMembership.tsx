import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import MotionSection from "../common/MotionSection";

export default function KBeautyMembership() {
    const t = useTranslations("benefitsPage.membershipSection");

    const memberships = [
        {
            name: t("tiers.essential.name"),
            price: t("tiers.essential.price"),
            benefits: t.raw("tiers.essential.benefits"),
            cta: t("tiers.essential.cta"),
        },
        {
            name: t("tiers.signature.name"),
            price: t("tiers.signature.price"),
            benefits: t.raw("tiers.signature.benefits"),
            cta: t("tiers.signature.cta"),
            featured: true,
        },
        {
            name: t("tiers.premium.name"),
            price: t("tiers.premium.price"),
            benefits: t.raw("tiers.premium.benefits"),
            cta: t("tiers.premium.cta"),
        },
    ];

    return (
        <section id="membership" className="py-32 bg-brand-cream font-pretendard relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <MotionSection>
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 bg-brand-gold-soft text-brand-gold-dark font-bold text-xs uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                            <span>👑</span> {t("eyebrow")}
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 text-zinc-900 tracking-tight underline decoration-brand-gold/10 decoration-4 underline-offset-8">{t("title")}</h2>
                        <p className="text-zinc-500 text-lg lg:text-xl font-medium max-w-xl mx-auto italic">{t("subtitle")}</p>
                    </div>
                </MotionSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {memberships.map((m, index) => (
                        <div
                            key={index}
                            className={`bg-white p-10 flex flex-col items-center shadow-lg transition-all duration-700 hover:-translate-y-2 rounded-[32px] relative overflow-hidden ${m.featured ? "border-2 border-brand-gold shadow-2xl" : "border border-black/[0.03]"
                                }`}
                        >
                            {m.featured && (
                                <>
                                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-gold via-brand-gold-dark to-brand-gold" />
                                    <div className="bg-[#D64545] text-white text-[11px] font-bold px-6 py-2 uppercase tracking-widest mb-8 rounded-full shadow-lg">
                                        {t("badge")}
                                    </div>
                                </>
                            )}
                            <h3 className="text-3xl font-extrabold mb-2 text-zinc-900 tracking-tight">{m.name}</h3>
                            <p className="text-brand-gold-dark font-extrabold mb-10 uppercase tracking-widest text-sm font-inter">{m.price}</p>

                            <ul className="w-full space-y-5 mb-12 h-full">
                                {Array.isArray(m.benefits) && m.benefits.map((benefit: string, i: number) => (
                                    <li key={i} className="flex items-start gap-4 text-sm text-zinc-600 font-medium">
                                        <span className="text-brand-gold-dark font-bold mt-1">✓</span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="https://pf.kakao.com/_curateseoul"
                                className={`w-full py-5 text-center font-bold uppercase tracking-widest text-xs rounded-xl shadow-md transition-all ${m.featured
                                    ? "bg-[#FEE500] text-[#191919] hover:shadow-xl"
                                    : "bg-zinc-50 text-zinc-600 hover:bg-zinc-100 border border-black/[0.03]"
                                    }`}
                            >
                                {m.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
