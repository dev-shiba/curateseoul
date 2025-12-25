"use client";

import MotionSection from "../common/MotionSection";

const steps = [
    {
        num: "01",
        icon: "✈️",
        title: "여행 인증",
        desc: "항공권 또는 숙소 예약 캡처를 카톡으로 전송",
        featured: true,
    },
    {
        num: "02",
        icon: "💆",
        title: "K-Beauty 예약",
        desc: "피부관리·헤어 등 원하는 서비스 선택",
    },
    {
        num: "03",
        icon: "🎫",
        title: "Reviewer Pass",
        desc: "맛집·카페·팝업 체험 권한 받기",
    },
    {
        num: "04",
        icon: "🎁",
        title: "체험 & 공유",
        desc: "즐기고 솔직한 후기 공유",
    },
];

export default function HowItWorks() {
    return (
        <section id="how" className="py-24 bg-brand-warm/30 font-pretendard">
            <div className="container mx-auto px-6">
                <MotionSection>
                    <div className="text-center mb-16 underline-offset-8">
                        <div className="inline-flex items-center gap-2 text-brand-gold font-bold text-sm uppercase tracking-[0.2em] mb-6">
                            <span className="text-xl">🛣️</span> 이용 방법
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-black mb-6 text-zinc-900 tracking-tighter">간단한 4단계</h2>
                        <p className="text-lg lg:text-xl text-zinc-600 font-medium italic opacity-70">인증 → K-Beauty 예약 → Pass 받기 → 체험</p>
                    </div>
                </MotionSection>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`bg-white p-10 relative flex flex-col items-center text-center transition-all hover:-translate-y-2 border border-zinc-100 ${step.featured ? "ring-2 ring-brand-gold/20 shadow-xl" : "shadow-lg shadow-zinc-100/50"
                                }`}
                        >
                            <div className="absolute top-6 right-8 text-2xl font-black text-brand-gold/20 font-inter tracking-tighter italic">
                                {step.num}
                            </div>
                            {step.featured && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-wine text-white text-[11px] font-black px-5 py-2 uppercase tracking-widest shadow-lg rounded-full">
                                    추천
                                </div>
                            )}
                            <div className="w-16 h-16 bg-brand-gold/5 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-black mb-4 text-zinc-900 tracking-tighter">{step.title}</h3>
                            <p className="text-base text-text-light leading-relaxed font-bold opacity-80">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
