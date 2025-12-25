"use client";

import Link from "next/link";
import MotionSection from "../common/MotionSection";

const memberships = [
    {
        name: "Essential",
        price: "부담 없이 시작",
        benefits: ["헤어 스타일링", "메이크업 체험", "기본 피부 관리", "두피 관리"],
        featured: true,
    },
    {
        name: "Signature",
        price: "한 단계 업그레이드",
        benefits: ["개인 맞춤 상담", "K-Beauty 스튜디오", "동선 & 예약 서포트", "맞춤 추천"],
    },
    {
        name: "Premium",
        price: "프리미엄 맞춤",
        benefits: ["프라이빗 상담", "최우선 예약", "전담 매니저", "추가 VIP 혜택"],
    },
];

export default function KBeautyMembership() {
    return (
        <section id="membership" className="py-32 bg-brand-cream/20 font-pretendard relative overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <MotionSection>
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 text-brand-gold font-black text-sm uppercase tracking-[0.2em] mb-6">
                            <span>👑</span> EXCLUSIVE ACCESS
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-black mb-6 text-zinc-900 tracking-tighter underline decoration-brand-gold/20 decoration-8 underline-offset-8">K-Beauty 멤버십 프로그램</h2>
                        <p className="text-zinc-600 text-lg lg:text-xl font-medium opacity-80">당신에게 가장 필요한 혜택을 선택하세요</p>
                    </div>
                </MotionSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {memberships.map((m, index) => (
                        <div
                            key={index}
                            className={`glass-card p-10 md:p-12 flex flex-col items-center border-t-4 transition-all duration-700 hover:-translate-y-2 rounded-[32px] ${m.featured ? "border-brand-gold ring-1 ring-brand-gold/20" : "border-white/40"
                                }`}
                        >
                            {m.featured && (
                                <div className="bg-brand-wine text-white text-[11px] font-black px-6 py-2 uppercase tracking-widest mb-8 rounded-full shadow-lg">
                                    POPULAR
                                </div>
                            )}
                            <h3 className="text-4xl font-black mb-3 text-zinc-900 tracking-tighter">{m.name}</h3>
                            <p className="text-brand-gold font-black mb-12 uppercase tracking-[0.2em] text-sm">{m.price}</p>

                            <ul className="w-full space-y-5 mb-14">
                                {m.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-4 text-base text-zinc-600 font-bold opacity-80">
                                        <span className="text-brand-gold bg-brand-gold/10 w-6 h-6 rounded-full flex items-center justify-center text-xs">✓</span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="#contact-card"
                                className={`w-full py-6 text-center font-black uppercase tracking-[0.2em] transition-all text-sm rounded-2xl shadow-xl ${m.featured
                                    ? "bg-zinc-900 text-white hover:bg-zinc-800"
                                    : "bg-white/60 text-zinc-600 hover:bg-white/80 border border-zinc-100"
                                    }`}
                            >
                                {m.featured ? "상담 신청하기 →" : "자세히 보기"}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
