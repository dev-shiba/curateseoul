"use client";

import Link from "next/link";
import MotionSection from "../common/MotionSection";

const benefits = [
    {
        title: "프리미엄 맛집/오마카세",
        value: "₩150,000 상당",
        desc: "예약 필수인 로컬 맛집 체험",
        icon: "🍣",
    },
    {
        title: "인스타 핫플 카페/디저트",
        value: "₩50,000 상당",
        desc: "웨이팅 없는 프리미엄 서비스",
        icon: "☕",
    },
    {
        title: "브랜드 팝업/전시회",
        value: "₩100,000 상당",
        desc: "VIP 패스트트랙 입장 권한",
        icon: "🎟️",
    },
    {
        title: "K-Beauty 시술/케어 할인",
        value: "₩150,000+ 상당",
        desc: "회원 전역 시크릿 할인 혜택",
        icon: "💆",
    },
];

export default function BenefitsValue() {
    return (
        <section id="benefits" className="py-24 bg-zinc-50/50 font-pretendard relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px] -z-0" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <MotionSection>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                        <div>
                            <div className="inline-flex items-center gap-2 text-brand-gold font-black text-sm uppercase tracking-[0.2em] mb-6">
                                <span>💎</span> MEMBERSHIP BENEFIT
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-black text-zinc-900 tracking-tighter mb-6 underline decoration-brand-gold/20 decoration-8 underline-offset-8">멤버십 혜택의 가치</h2>
                            <p className="text-zinc-600 text-lg lg:text-xl font-medium leading-relaxed opacity-80">개별 결제 시보다 압도적으로 저렴한 가격으로 제안합니다</p>
                        </div>
                        <div className="bg-white/45 backdrop-blur-[40px] saturate-[180%] border border-white/60 p-8 rounded-3xl shadow-xl shadow-black/5">
                            <div className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-2">Total Estimated Value</div>
                            <div className="text-4xl font-black text-brand-gold tracking-tighter">₩450,000 + 혜택</div>
                        </div>
                    </div>
                </MotionSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="glass-card p-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500 rounded-[32px]"
                        >
                            <div className="w-20 h-20 bg-white/60 backdrop-blur-md rounded-[28px] flex items-center justify-center text-4xl mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-black mb-3 text-zinc-900 tracking-tight">{benefit.title}</h3>
                            <p className="text-brand-gold font-black text-base mb-4">{benefit.value}</p>
                            <p className="text-sm text-zinc-500 font-bold leading-relaxed opacity-80">{benefit.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold via-brand-wine to-brand-gold rounded-[40px] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-white/80 backdrop-blur-2xl border border-white/40 p-10 md:p-14 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                            <div className="space-y-2 text-center md:text-left">
                                <p className="text-brand-gold font-black text-xs uppercase tracking-[0.3em]">TOTAL BENEFIT VALUE</p>
                                <h3 className="text-3xl lg:text-4xl font-black text-zinc-900 tracking-tighter">총 혜택 가치 ₩450,000+</h3>
                            </div>
                            <div className="h-12 w-px bg-zinc-200 hidden md:block" />
                            <div className="text-center md:text-right">
                                <p className="text-text-medium font-bold text-sm mb-2">오늘 바로 시작하고 혜택을 누리세요</p>
                                <div className="text-zinc-400 text-[10px] font-black tracking-widest uppercase">LIMITED TO 30 MEMBERS MONTHLY</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
