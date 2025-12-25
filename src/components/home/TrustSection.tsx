"use client";

import MotionSection from "../common/MotionSection";

const trusts = [
    {
        icon: "✅",
        title: "엄격한 검증",
        desc: "직접 방문하고 검증한 곳만 추천해요. 서비스 퀄리티를 보장합니다.",
    },
    {
        icon: "💬",
        title: "실시간 상담",
        desc: "카카오톡으로 실시간 소통, 평균 2시간 내 응답해드려요.",
    },
    {
        icon: "🛡️",
        title: "투명한 안내",
        desc: "숨겨진 비용 없이 모든 가격을 투명하게 안내해드려요.",
    },
];

export default function TrustSection() {
    return (
        <section className="py-24 bg-white font-pretendard">
            <div className="container mx-auto px-6 max-w-6xl">
                <MotionSection>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 text-brand-gold font-black text-sm uppercase tracking-[0.2em] mb-6">
                            <span>🤝</span> TRUST & PROMISE
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-black mb-6 text-zinc-900 tracking-tighter">함께하는 약속</h2>
                        <p className="text-zinc-600 text-lg lg:text-xl font-medium opacity-80 decoration-brand-gold/10 decoration-8 underline-offset-8 underline">신뢰할 수 있는 정보를 제공하는 것이 우리의 사명입니다</p>
                    </div>
                </MotionSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {trusts.map((t, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 bg-brand-gold/5 rounded-[32px] flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-brand-gold/5">
                                {t.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-zinc-900">{t.title}</h3>
                            <p className="text-sm text-text-medium leading-relaxed max-w-[280px] font-medium">{t.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
