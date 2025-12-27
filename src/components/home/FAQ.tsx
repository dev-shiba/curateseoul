"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import MotionSection from "../common/MotionSection";

export default function FAQ() {
    const t = useTranslations("experiencePage.faqSection");
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        { question: t("items.q1.question"), answer: t("items.q1.answer") },
        { question: t("items.q2.question"), answer: t("items.q2.answer") },
        { question: t("items.q3.question"), answer: t("items.q3.answer") },
        { question: t("items.q4.question"), answer: t("items.q4.answer") },
        { question: t("items.q5.question"), answer: t("items.q5.answer") },
        { question: t("items.q6.question"), answer: t("items.q6.answer") },
    ];

    return (
        <section id="faq" className="py-10 bg-brand-cream font-pretendard">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-black/[0.03] shadow-sm overflow-hidden rounded-2xl transition-all hover:shadow-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className={`w-full px-8 py-7 text-left flex justify-between items-center transition-all ${openIndex === index ? "bg-brand-soft/50" : "hover:bg-brand-soft/30"}`}
                            >
                                <span className={`font-bold text-lg text-zinc-900 transition-colors ${openIndex === index ? "text-brand-gold-dark" : ""}`}>{faq.question}</span>
                                <span className={`text-brand-gold-dark transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-8 pb-8 text-zinc-500 leading-relaxed font-medium">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
