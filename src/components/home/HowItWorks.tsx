import { useTranslations } from "next-intl";
import MotionSection from "../common/MotionSection";

export default function HowItWorks() {
    const t = useTranslations("experiencePage.howItWorksSection");

    const steps = [
        {
            num: "01",
            icon: "✈️",
            title: t("steps.step1.title"),
            desc: t("steps.step1.description"),
            featured: true,
        },
        {
            num: "02",
            icon: "💆",
            title: t("steps.step2.title"),
            desc: t("steps.step2.description"),
        },
        {
            num: "03",
            icon: "🎫",
            title: t("steps.step3.title"),
            desc: t("steps.step3.description"),
        },
        {
            num: "04",
            icon: "🎁",
            title: t("steps.step4.title"),
            desc: t("steps.step4.description"),
        },
    ];

    return (
        <section id="how" className="py-24 bg-brand-warm font-pretendard relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <MotionSection>
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 bg-brand-gold-soft text-brand-gold-dark font-bold text-xs uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                            <span className="text-sm">🛣️</span> {t("eyebrow")}
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 text-zinc-900 tracking-tight">{t("title")}</h2>
                        <p className="text-zinc-500 text-lg lg:text-xl font-medium max-w-xl mx-auto italic border-b-2 border-brand-gold/10 inline-block pb-1">{t("subtitle")}</p>
                    </div>
                </MotionSection>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`bg-white p-10 relative flex flex-col items-center text-center transition-all hover:-translate-y-2 rounded-[40px] shadow-lg border border-black/[0.03] overflow-hidden ${step.featured ? "border-2 border-brand-gold shadow-2xl" : ""
                                }`}
                        >
                            <div className="absolute top-6 right-8 text-4xl font-extrabold text-brand-gold-dark/10 font-inter tracking-tighter italic select-none">
                                {step.num}
                            </div>
                            {step.featured && (
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-gold via-brand-gold-dark to-brand-gold" />
                            )}
                            {step.featured && (
                                <div className="bg-[#D64545] text-white text-[10px] font-bold px-5 py-1.5 uppercase tracking-widest shadow-lg rounded-full mb-8 relative z-10">
                                    {t("badge")}
                                </div>
                            )}
                            <div className="w-16 h-16 bg-brand-gold-soft rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-extrabold mb-4 text-zinc-900 tracking-tight">{step.title}</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed font-medium">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
