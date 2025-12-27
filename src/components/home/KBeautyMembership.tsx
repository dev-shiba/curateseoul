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
            featured: true, // Moved featured to Essential
        },
        {
            name: t("tiers.signature.name"),
            price: t("tiers.signature.price"),
            benefits: t.raw("tiers.signature.benefits"),
            cta: t("tiers.signature.cta"),
        },
        {
            name: t("tiers.premium.name"),
            price: t("tiers.premium.price"),
            benefits: t.raw("tiers.premium.benefits"),
            cta: t("tiers.premium.cta"),
        },
    ];

    return (
        <section id="membership" className="py-32 bg-white font-pretendard relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <MotionSection>
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 bg-[#F5F5F0] text-[#BFA07A] font-bold text-sm px-5 py-2 rounded-full mb-6">
                            <span>🍁</span> {t("eyebrow")}
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black mb-4 text-zinc-900 tracking-tight">{t("title")}</h2>
                        <p className="text-zinc-500 text-lg font-medium">{t("subtitle")}</p>
                    </div>
                </MotionSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {memberships.map((m, index) => (
                        <div
                            key={index}
                            className={`p-10 flex flex-col items-center rounded-[32px] relative transition-all duration-300 ${m.featured
                                ? "bg-[#FFF9F2] border-2 border-[#C8A97E] shadow-xl scale-105 z-10"
                                : "bg-white border border-zinc-200 hover:shadow-lg"
                                }`}
                        >
                            {m.featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C8A97E] to-[#BFA07A] text-white text-sm font-bold px-6 py-2 rounded-full shadow-md z-20">
                                    {t("badge")}
                                </div>
                            )}

                            <h3 className="text-3xl font-bold mb-3 text-zinc-900 tracking-tight mt-4">{m.name}</h3>
                            <p className="text-zinc-500 font-medium mb-12">{m.price}</p>

                            <ul className="w-full space-y-5 mb-12 flex-1">
                                {Array.isArray(m.benefits) && m.benefits.map((benefit: string, i: number) => (
                                    <li key={i} className="flex items-start gap-4 text-[15px] text-zinc-600 font-medium">
                                        <span className="text-[#C8A97E] text-xs mt-1.5">✓</span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="https://pf.kakao.com/_curateseoul"
                                className={`w-full py-4 text-center font-bold rounded-xl transition-all ${m.featured
                                    ? "bg-[#C8A97E] text-white hover:bg-[#BFA07A] shadow-md"
                                    : "bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50"
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
