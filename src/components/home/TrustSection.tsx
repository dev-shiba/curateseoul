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
        <section className="py-24 bg-white font-pretendard">
            <div className="container mx-auto px-6 max-w-6xl">
                <MotionSection>
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 bg-brand-gold-soft text-brand-gold-dark font-bold text-xs uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                            <span>🤝</span> {t("eyebrow")}
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 text-zinc-900 tracking-tight">{t("title")}</h2>
                        <p className="text-zinc-500 text-lg lg:text-xl font-medium max-w-xl mx-auto leading-relaxed italic border-b-2 border-brand-gold/10 inline-block pb-1">{t("description")}</p>
                    </div>
                </MotionSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {trusts.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 bg-brand-gold-soft rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform shadow-sm">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-4 text-zinc-900">{t(item.titleKey)}</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed max-w-[280px] font-medium">
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
