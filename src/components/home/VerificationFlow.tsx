"use client";

import { useTranslations } from "next-intl";
import MotionSection from "../common/MotionSection";

export default function VerificationFlow() {
    const t = useTranslations("experiencePage.howItWorksSection");

    const steps = [
        {
            key: "step1",
            icon: "💬", // Changed from airplane to message icon
            isSpecial: true,
        },
        {
            key: "step2",
            icon: "💆‍♀️", // Using woman getting massage/haircut emoji or similar
            isSpecial: false,
        },
        {
            key: "step3",
            icon: "🏪", // Curated stores/Benefits
            isSpecial: false,
        },
        {
            key: "step4",
            icon: "📝", // Review mission
            isSpecial: false,
        },
    ];

    return (
        <section id="verify" className="py-24 bg-brand-cream relative overflow-hidden font-pretendard">
            <div className="container mx-auto px-6 max-w-7xl">
                <MotionSection>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-brand-gold/10 px-4 py-1.5 rounded-full mb-6">
                            <span className="text-xs font-bold text-brand-gold-dark tracking-wider uppercase">
                                ✨ {t("eyebrow")}
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight">
                            {t("title")}
                        </h2>
                        <p className="text-lg text-zinc-400 font-medium">
                            {t("subtitle")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-12">
                        {steps.map((step, index) => (
                            <div
                                key={step.key}
                                className={`relative rounded-[32px] p-6 xl:p-8 min-h-[300px] flex flex-col items-center text-center transition-all duration-300 group
                  ${step.isSpecial
                                        ? "bg-brand-warm border-2 border-brand-gold shadow-warm"
                                        : "bg-white border border-transparent hover:border-brand-gold/20 shadow-sm hover:shadow-warm"
                                    }
                `}
                            >
                                {step.isSpecial && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E5503C] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md z-10">
                                        {t("badge")}
                                    </div>
                                )}

                                <span className={`absolute top-6 right-6 text-lg font-black font-inter
                  ${step.isSpecial ? "text-brand-gold-dark" : "text-brand-gold/60"}
                `}>
                                    0{index + 1}
                                </span>

                                <div className="flex-1 flex flex-col items-center justify-center w-full pt-6">
                                    <div className={`w-20 h-20 rounded-[24px] flex items-center justify-center text-4xl mb-6 shadow-inner
                    ${step.isSpecial ? "bg-white" : "bg-brand-soft"}
                  `}>
                                        {step.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-zinc-900 mb-3 whitespace-nowrap">
                                        {t(`steps.${step.key}.title`)}
                                    </h3>

                                    <p className="text-sm text-zinc-500 font-medium leading-relaxed px-1 break-keep">
                                        {t.rich(`steps.${step.key}.description`, {
                                            br: () => <br />
                                        })}
                                    </p>
                                </div>

                                {/* Arrow between steps (Desktop only) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:flex absolute top-1/2 -right-5 xl:-right-7 transform -translate-y-1/2 translate-x-1/2 z-20 text-brand-gold/30">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="bg-[#F5F5F0] rounded-[24px] p-6 flex flex-col items-center justify-center gap-4 text-center border border-[#E5E0D8] max-w-3xl mx-auto shadow-sm mt-12">
                        <div className="flex flex-col md:flex-row items-center gap-3">
                            <div className="bg-[#8C8170] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                                i
                            </div>
                            <p className="text-[#5D5545] font-bold text-sm md:text-[15px] tracking-tight">
                                {t("footerInfo")}
                            </p>
                        </div>
                        <div className="w-full h-px bg-[#E5E0D8] hidden md:block" />
                        <p className="text-[#8C8170] font-medium text-xs md:text-sm tracking-tight leading-relaxed">
                            {t("footerDetail")}
                        </p>
                    </div>
                </MotionSection>
            </div>
        </section>
    );
}
