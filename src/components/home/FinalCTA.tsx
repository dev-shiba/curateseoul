"use client";

import Link from "next/link";
import MotionSection from "../common/MotionSection";

export default function FinalCTA() {
    return (
        <section className="py-32 bg-zinc-900 font-pretendard overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[150px] -z-0" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-wine/5 rounded-full blur-[100px] -z-0" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <MotionSection>
                    <div className="text-center space-y-12">
                        <div className="inline-flex items-center gap-2 text-brand-gold font-black text-sm uppercase tracking-[0.3em]">
                            <span>✨</span> BECOME A MEMBER
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tighter">
                            지금 바로 <span className="text-brand-gold">서울의 주인공</span>이 되세요
                        </h2>

                        <p className="text-zinc-400 text-lg lg:text-2xl leading-relaxed max-w-2xl mx-auto font-medium opacity-80 italic">
                            인증 한 번으로 열리는 프리미엄 로컬 혜택,<br />
                            당신의 서울 여행이 특별해집니다.
                        </p>

                        <div className="bg-white/5 backdrop-blur-2xl p-12 lg:p-16 border border-white/10 max-w-xl mx-auto relative group rounded-[48px]">
                            <div className="absolute inset-0 bg-brand-gold/5 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 rounded-[48px]" />

                            <Link
                                href="https://pf.kakao.com/_curateseoul"
                                className="flex items-center justify-center gap-4 w-full bg-[#FEE500] hover:bg-[#FADC00] text-zinc-900 py-7 font-black text-xl transition-all mb-10 shadow-2xl relative z-10 rounded-3xl"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                    <path d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.89 5.31 4.68 6.68-.15.54-.97 3.49-1 3.64 0 .11.04.22.12.29.08.07.18.1.28.08.14-.02 3.29-2.15 3.82-2.53.7.1 1.41.15 2.1.15 5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
                                </svg>
                                카카오톡 상담하기
                            </Link>

                            <div className="flex items-center justify-center gap-4 text-white relative z-10">
                                <span className="text-sm font-black uppercase tracking-[0.2em] text-zinc-500">ID</span>
                                <span className="text-xl font-black tracking-tighter">@CurateSeoul</span>
                                <button className="bg-white/10 hover:bg-white/20 text-white text-[10px] font-black px-4 py-2 uppercase tracking-tighter transition-colors rounded-lg">복사</button>
                            </div>

                            <p className="mt-10 text-[10px] text-zinc-500 font-black uppercase tracking-[0.3em] relative z-10">
                                &quot;여행자&quot; 메시지를 보내시면 혜택 가이드를 보내드려요
                            </p>
                        </div>
                    </div>
                </MotionSection>
            </div>
        </section>
    );
}
