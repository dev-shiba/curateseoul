"use client";

import { useState } from "react";
import MotionSection from "../common/MotionSection";

const faqs = [
    {
        question: "왜 항공권/숙소 인증이 필요한가요?",
        answer: "저희 서비스는 실제 서울 여행자를 위한 거예요. 인증을 통해 진짜 여행 오시는 분들께 좋은 혜택을 드릴 수 있어요. 개인정보는 인증 용도로만 사용됩니다.",
    },
    {
        question: "왜 K-Beauty를 예약해야 하나요?",
        answer: "K-Beauty 예약은 회원 자격 활성화 조건이에요. 이렇게 해야 제휴 매장에서 체험 혜택을 드릴 수 있거든요. 서울 여행의 꽃인 K-Beauty도 즐기고, 추가 혜택도 받으세요!",
    },
    {
        question: "체험 혜택은 어떻게 받나요?",
        answer: "K-Beauty 예약이 확정되면 Reviewer Pass가 발급돼요. Pass가 있으면 맛집·카페 체험을 회원 혜택으로 이용할 수 있어요. 총 45만원 상당의 혜택이에요!",
    },
    {
        question: "체험을 얼마나 받을 수 있나요?",
        answer: "K-Beauty 등급과 여행 일정에 따라 달라요. 보통 2~4회 맛집/카페 체험 기회가 주어집니다. 여행 일정이 길수록 더 많은 혜택을 받을 수 있어요.",
    },
    {
        question: "후기는 꼭 써야 하나요?",
        answer: "후기 공유는 선택이에요. 다만 후기를 공유해주신 분께 다음 혜택 우선권을 드려요. 인스타그램이나 블로그에 솔직한 후기를 남겨주시면 됩니다.",
    },
    {
        question: "의료 중개 서비스인가요?",
        answer: "아니에요. 저희는 여행 체험 기획 서비스예요. K-Beauty 예약 도움과 로컬 체험 추천을 해드리고, 의료 조언은 하지 않아요.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-white font-pretendard">
            <div className="container mx-auto px-6 max-w-3xl">
                <MotionSection>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 text-brand-gold font-black text-sm uppercase tracking-[0.2em] mb-6">
                            <span>❓</span> FREQUENTLY ASKED
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-black mb-6 text-zinc-900 tracking-tighter">궁금한 점이 있으신가요?</h2>
                        <p className="text-zinc-600 text-lg lg:text-xl font-medium opacity-80 italic">Curate Seoul에 대해 가장 많이 묻는 질문들</p>
                    </div>
                </MotionSection>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-zinc-100 shadow-sm overflow-hidden rounded-2xl"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-7 text-left flex justify-between items-center hover:bg-zinc-50 transition-colors"
                            >
                                <span className="font-bold text-lg text-zinc-900">{faq.question}</span>
                                <span className={`text-brand-gold transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-8 pb-8 text-zinc-600 leading-relaxed font-bold opacity-80">
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
