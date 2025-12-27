"use client";

import { useTranslations } from "next-intl";
import MotionSection from "../common/MotionSection";

export default function RulesSection() {
    const t = useTranslations("experiencePage.rulesSection");

    const rules = [
        { label: t("rules.verification.label"), text: t("rules.verification.text") },
        { label: t("rules.booking.label"), text: t("rules.booking.text") },
        { label: t("rules.pass.label"), text: t("rules.pass.text") },
        { label: t("rules.sharing.label"), text: t("rules.sharing.text") },
    ];

    return (
        <section className="py-32 bg-brand-warm font-pretendard relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <MotionSection>
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 bg-brand-gold-soft text-brand-gold-dark font-bold text-xs uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                            <span>⚠️</span> {t("eyebrow")}
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 text-zinc-900 tracking-tight">{t("title")}</h2>
                        <p className="text-zinc-500 text-lg lg:text-xl font-medium max-w-xl mx-auto italic border-b-2 border-brand-gold/10 inline-block pb-1">{t("subtitle")}</p>
                    </div>
                </MotionSection>

                <div className="space-y-8">
                    <div className="bg-white p-10 md:p-14 shadow-xl border border-black/[0.03] relative overflow-hidden rounded-[40px]">
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-gold via-brand-gold-dark to-brand-gold" />

                        <div className="flex items-center justify-center gap-3 bg-brand-gold-soft text-brand-gold-dark font-bold uppercase tracking-widest text-[10px] mb-12 px-6 py-2 rounded-full w-fit mx-auto">
                            <span className="text-base">✨</span> {t("participateEyebrow")}
                        </div>

                        <div className="space-y-10">
                            {rules.map((rule, index) => (
                                <div key={index} className="flex flex-col md:flex-row gap-6 md:items-center group">
                                    <span className="bg-brand-soft text-brand-gold-dark px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest min-w-[120px] text-center rounded-xl border border-black/[0.03] shadow-sm">
                                        {rule.label}
                                    </span>
                                    <p className="text-sm font-medium text-zinc-600 leading-relaxed">
                                        {rule.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-brand-soft border border-black/[0.03] p-8 rounded-2xl flex items-center justify-center gap-4 text-zinc-500 text-sm font-medium text-center shadow-sm italic">
                        <span className="text-brand-gold-dark text-xl">ℹ️</span>
                        <p>{t("note")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
