"use client";

import MotionSection from "../common/MotionSection";

const steps = [
    {
        step: "STEP 1",
        icon: "📱",
        title: "항공권/숙소 캡처",
    },
    {
        step: "STEP 2",
        icon: "💬",
        title: "카톡으로 전송",
    },
    {
        step: "STEP 3",
        icon: "🎁",
        title: "맞춤 혜택 받기",
    },
];

const benefits = [
    { icon: "🍖", title: "로컬 맛집", desc: "관광객 모르는 찐맛집" },
    { icon: "💆", title: "K-Beauty", desc: "피부관리·헤어·메이크업" },
    { icon: "🏥", title: "병원·클리닉", desc: "검증된 의료 서비스" },
    { icon: "🎪", title: "체험·팝업", desc: "핫플 우선 입장" },
];

export default function VerificationFlow() {
    return (
        <section id="verify" className="py-24 bg-brand-cream/50 relative overflow-hidden">
            <div className="absolute top-[10%] right-[-10%] w-[300px] h-[300px] bg-brand-wine/5 rounded-full blur-[80px]" />
            <div className="container mx-auto px-6 max-w-6xl">
                <MotionSection>
                    <div className="glass-card p-12 md:p-20 rounded-[48px] relative z-10">
                        <div className="text-center mb-16">
                            <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center text-4xl mx-auto mb-8">✈️</div>
                            <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tighter text-zinc-900">항공권 or 숙소 인증하면</h2>
                            <p className="text-zinc-600 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-medium opacity-80">
                                여행 일정을 인증해주시면<br />
                                <strong>한국인만 아는 로컬 정보</strong>와 <strong>회원 전용 혜택</strong>을 제안해드려요
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
                            {steps.map((step, index) => (
                                <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="bg-white/40 backdrop-blur-md border border-white/60 p-8 text-center min-w-[240px] rounded-3xl shadow-sm">
                                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{step.icon}</div>
                                        <div className="text-sm font-black text-brand-gold uppercase tracking-[0.2em] mb-2">{step.step}</div>
                                        <div className="text-2xl font-black text-zinc-900 tracking-tighter">{step.title}</div>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="text-brand-gold hidden md:block">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                <path d="M10 20H30M30 20L22 12M30 20L22 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="bg-zinc-50 p-8 text-center hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-brand-gold/20 flex flex-col items-center">
                                    <div className="text-4xl mb-6">{benefit.icon}</div>
                                    <h4 className="text-lg font-black mb-2 text-zinc-900">{benefit.title}</h4>
                                    <p className="text-sm text-text-light font-bold opacity-70">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </MotionSection>
            </div>
        </section>
    );
}
