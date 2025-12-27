import { useTranslations } from "next-intl";
import MotionSection from "../common/MotionSection";

export default function TrustSection() {
    const t = useTranslations("trust");

    const trusts = [
        {
            icon: "✅",
            titleKey: "items.verification.title",
            descKey: "items.verification.description",
        },
        {
            icon: "💬",
            titleKey: "items.consultation.title",
            descKey: "items.consultation.description",
        },
        {
            icon: "🛡️",
            titleKey: "items.transparency.title",
            descKey: "items.transparency.description",
        },
    ];

    return (
        <section className="py-24 bg-brand-cream font-pretendard">
            <div className="container mx-auto px-6 max-w-6xl">
                <MotionSection>
                    <div className="text-center mb-16 lg:mb-20">
                        <span className="block text-[#C8A97E] font-extrabold text-lg lg:text-xl tracking-widest uppercase mb-4">
                            {t("eyebrow")}
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-black mb-6 text-zinc-900 tracking-tight leading-tight">{t("title")}</h2>
                        <p className="text-zinc-500 text-lg lg:text-xl font-medium max-w-xl mx-auto leading-relaxed">
                            {t.rich("description", {
                                br: () => <br />
                            })}
                        </p>
                    </div>
                </MotionSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {trusts.map((item, index) => (
                        <div key={index} className="bg-white p-10 rounded-[32px] flex flex-col items-center text-center shadow-sm border border-zinc-100 h-full">
                            <div className="w-20 h-20 bg-[#F5F1E8] rounded-[24px] flex items-center justify-center text-4xl mb-8">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-zinc-900 tracking-tight">{t(item.titleKey)}</h3>
                            <p className="text-zinc-500 leading-relaxed font-medium break-keep">
                                {t.rich(item.descKey, {
                                    br: () => <br />
                                })}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
