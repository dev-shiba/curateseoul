"use client";

import { useTranslations } from "next-intl";
import MotionSection from "../common/MotionSection";

export default function VerificationFlow() {
    const t = useTranslations("verification");

    const steps = [
        {
            step: "STEP 1",
            icon: "📱",
            title: t("steps.step1.value"),
        },
        {
            step: "STEP 2",
            icon: "💬",
            title: t("steps.step2.value"),
        },
        {
            step: "STEP 3",
            icon: "🎁",
            title: t("steps.step3.value"),
        },
    ];

    const benefits = [
        { icon: "🍖", title: t("benefits.food.title"), desc: t("benefits.food.description") },
        { icon: "💆", title: t("benefits.beauty.title"), desc: t("benefits.beauty.description") },
        { icon: "🏥", title: t("benefits.medical.title"), desc: t("benefits.medical.description") },
        { icon: "🎪", title: t("benefits.popups.title"), desc: t("benefits.popups.description") },
    ];

    return (
        <section id="verify" className="py-24 bg-brand-warm relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <MotionSection>
                    <div className="bg-white border-2 border-brand-gold rounded-[32px] p-12 lg:p-16 text-center shadow-lg relative overflow-hidden max-w-4xl mx-auto">
                        {/* Top Accent Line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold via-brand-gold-dark to-brand-gold" />

                        <div className="w-16 h-16 bg-brand-gold-soft border border-brand-gold-light/20 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                            {t("icon")}
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-zinc-900 tracking-tight">
                            {t("title")}
                        </h2>

                        <p className="text-zinc-500 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                            {t.rich("subtitle", {
                                strong: (chunks) => <strong className="text-brand-gold-dark">{chunks}</strong>,
                                br: () => <br />
                            })}
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
                            {steps.map((step, index) => (
                                <div key={index} className="flex flex-col md:flex-row items-center gap-4">
                                    <div className="flex items-center gap-4 bg-brand-soft border border-black/[0.03] p-5 rounded-2xl min-w-[240px] shadow-sm transform transition-transform hover:-translate-y-1">
                                        <div className="text-3xl">{step.icon}</div>
                                        <div className="text-left">
                                            <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none mb-1">
                                                {step.step}
                                            </div>
                                            <div className="text-base font-bold text-zinc-900">
                                                {step.title}
                                            </div>
                                        </div>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="text-brand-gold hidden md:block opacity-40">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14m-7-7 7 7-7 7" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="bg-brand-warm/60 border border-black/[0.03] p-6 rounded-2xl text-center hover:border-brand-gold/30 hover:-translate-y-1 transition-all group">
                                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                                    <h4 className="text-xs font-bold mb-1 text-zinc-900">{benefit.title}</h4>
                                    <p className="text-[11px] text-zinc-400 font-medium">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </MotionSection>
            </div>
        </section>
    );
}
