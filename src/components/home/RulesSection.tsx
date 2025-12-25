"use client";

import MotionSection from "../common/MotionSection";

const rules = [
    { label: "여행 인증", text: "항공권 또는 숙소 예약 캡처를 카톡으로 전송" },
    { label: "K-Beauty", text: "Curate Seoul 통해 K-Beauty 체험 1개 예약" },
    { label: "Pass 발급", text: "예약 확정 후, Reviewer Pass로 체험 혜택 받기" },
    { label: "후기 공유", text: "체험 후 SNS에 솔직한 후기 공유 (선택, 환영해요!)" },
];

export default function RulesSection() {
    return (
        <section className="py-32 bg-brand-warm/30 font-pretendard">
            <div className="container mx-auto px-6 max-w-4xl">
                <MotionSection>
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 text-brand-wine font-black text-sm uppercase tracking-[0.2em] mb-6">
                            <span>⚠️</span> IMPORTANT RULES
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-black mb-6 text-zinc-900 tracking-tighter">꼭 지켜주세요</h2>
                        <p className="text-zinc-600 text-lg lg:text-xl font-medium opacity-80 underline decoration-brand-wine/10 decoration-8 underline-offset-8">안전하고 정직한 커뮤니티를 위해 필요한 최소한의 규칙</p>
                    </div>
                </MotionSection>

                <div className="space-y-6">
                    <div className="bg-white p-10 md:p-14 shadow-2xl shadow-zinc-200/50 border border-zinc-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-gold via-brand-gold-dark to-brand-gold" />

                        <div className="flex items-center justify-center gap-3 text-brand-gold font-black uppercase tracking-[0.2em] text-xs mb-10">
                            <span className="text-lg">✨</span> 이렇게 참여하세요
                        </div>

                        <div className="space-y-8">
                            {rules.map((rule, index) => (
                                <div key={index} className="flex flex-col md:flex-row gap-6 md:items-center">
                                    <span className="bg-brand-gold/10 text-brand-gold px-5 py-2.5 text-[10px] font-black uppercase tracking-widest min-w-[120px] text-center rounded-lg border border-brand-gold/10">
                                        {rule.label}
                                    </span>
                                    <p className="text-sm font-semibold text-text-medium leading-relaxed">
                                        {rule.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-brand-wine/5 border border-brand-wine/10 p-8 rounded-2xl flex items-center justify-center gap-4 text-brand-wine text-sm font-bold text-center">
                        <span className="text-xl">ℹ️</span>
                        <p>후기를 공유해주시면 다음 혜택 우선권이 주어져요. 솔직한 의견을 남겨주세요!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
