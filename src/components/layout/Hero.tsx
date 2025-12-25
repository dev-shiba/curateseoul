"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-[95vh] flex items-center pt-32 pb-24 overflow-hidden bg-brand-cream font-pretendard">
            {/* Apple Glass Liquid Background Blobs */}
            <div className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] bg-brand-gold/15 rounded-full blur-[140px] animate-liquid opacity-60" />
            <div className="absolute bottom-[-15%] right-[-10%] w-[800px] h-[800px] bg-brand-wine/5 rounded-full blur-[160px] animate-liquid opacity-40 delay-1000" />
            <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[100px] animate-liquid opacity-30 delay-2000" />

            {/* Main Container Aligned with other sections (max-w-6xl) */}
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="space-y-12 lg:space-y-16"
                    >
                        <div className="inline-flex items-center gap-3 bg-white/45 backdrop-blur-[40px] saturate-[180%] border border-white/30 px-8 py-4 rounded-full shadow-xl shadow-black/5 text-brand-wine font-black text-sm uppercase tracking-widest">
                            <span className="animate-pulse">✈️</span> 서울 여행자 전용 혜택
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-4xl lg:text-[54px] font-black leading-[1.1] tracking-tighter text-zinc-900 drop-shadow-sm text-left">
                                여행 경비는 줄<br />
                                <span className="inline-block mt-1">이</span><br />
                                <span className="inline-block mt-1">고</span><br />
                                <span className="text-brand-gold">체험은 두 배로</span>
                            </h1>

                            <p className="text-xl lg:text-3xl text-zinc-600 leading-relaxed max-w-lg font-medium tracking-tight">
                                <strong>항공권 또는 숙소만 인증</strong>하면<br />
                                로컬 맛집, K-Beauty, 핫플을<br />
                                <span className="text-zinc-900 font-bold decoration-brand-gold/30 decoration-[12px] underline underline-offset-[16px]">회원 혜택가</span>로 즐길 수 있어요
                            </p>
                        </div>

                        <div className="flex flex-row gap-12 lg:gap-16 pb-4">
                            <div className="space-y-3">
                                <div className="text-5xl font-black text-zinc-900 tracking-tighter italic">50+</div>
                                <div className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em]">제휴 매장</div>
                            </div>
                            <div className="space-y-3">
                                <div className="text-5xl font-black text-brand-gold tracking-tighter italic">₩45만+</div>
                                <div className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em]">혜택 가치</div>
                            </div>
                            <div className="space-y-3">
                                <div className="text-5xl font-black text-brand-wine tracking-tighter italic">30명</div>
                                <div className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em]">월 한정</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 pt-4">
                            <Link
                                href="#contact-card"
                                className="bg-zinc-900 hover:bg-zinc-800 text-white px-14 py-6 text-center font-black uppercase tracking-[0.3em] transition-all shadow-2xl shadow-zinc-900/20 text-sm rounded-2xl"
                            >
                                상담하기
                            </Link>
                            <Link
                                href="#benefits"
                                className="bg-white/45 backdrop-blur-[40px] saturate-[180%] hover:bg-white/60 text-zinc-900 border border-white/30 px-14 py-6 text-center font-black uppercase tracking-[0.3em] transition-all text-sm rounded-2xl shadow-xl shadow-black/5"
                            >
                                혜택 가이드
                            </Link>
                        </div>
                    </motion.div>

                    {/* Apple Glass Contact Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
                        id="contact-card"
                        className="glass-card p-12 lg:p-16 relative overflow-hidden group rounded-[48px]"
                    >
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-gold via-brand-wine to-brand-gold opacity-80" />

                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-wine text-white px-10 py-3 text-[10px] font-black uppercase tracking-[0.4em] leading-none shadow-2xl shadow-brand-wine/20 z-20 rounded-full animate-bounce">
                            🔥 12자리 남음
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-black text-center mb-6 text-zinc-900 tracking-tighter">카카오톡 상담하기</h2>
                            <p className="text-zinc-500 text-center text-sm mb-12 leading-relaxed font-bold uppercase tracking-[0.2em] opacity-80">
                                &quot;여행자&quot;를 보내주세요
                            </p>

                            <Link
                                href="https://pf.kakao.com/_curateseoul"
                                className="flex items-center justify-center gap-4 w-full bg-[#FEE500] hover:bg-[#FADC00] text-zinc-900 py-7 font-black text-xl transition-all mb-10 shadow-2xl shadow-yellow-500/10 rounded-3xl"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
                                    <path d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.89 5.31 4.68 6.68-.15.54-.97 3.49-1 3.64 0 .11.04.22.12.29.08.07.18.1.28.08.14-.02 3.29-2.15 3.82-2.53.7.1 1.41.15 2.1.15 5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
                                </svg>
                                카카오톡 상담
                            </Link>

                            <div className="bg-white/45 backdrop-blur-[40px] p-6 flex justify-between items-center mb-12 border border-white/40 shadow-xl shadow-black/5 rounded-2xl">
                                <span className="text-xs font-black text-zinc-400 uppercase tracking-widest opacity-80">ID</span>
                                <span className="font-black text-zinc-900 tracking-tighter text-lg">@CurateSeoul</span>
                                <button className="bg-zinc-900 text-white text-[10px] font-black px-5 py-2.5 uppercase tracking-tighter hover:bg-zinc-800 transition-colors rounded-lg">복사</button>
                            </div>

                            <div className="relative mb-12 text-center">
                                <span className="bg-transparent px-8 text-xs font-black text-zinc-400 uppercase tracking-[0.5em] relative z-10">OR LEAVE CONTACT</span>
                                <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-zinc-900/10 -z-0"></div>
                            </div>

                            <form className="flex gap-4 mb-10">
                                <input
                                    type="text"
                                    placeholder="카카오톡 ID"
                                    className="flex-1 bg-white/45 backdrop-blur-[40px] border border-white/60 px-8 py-6 text-sm font-black focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:bg-white/90 transition-all shadow-inner rounded-2xl"
                                />
                                <button className="bg-zinc-900 text-white px-10 py-6 font-black text-sm hover:bg-zinc-800 transition-all shadow-2xl rounded-2xl">신청</button>
                            </form>

                            <p className="text-xs text-zinc-400 text-center font-black uppercase tracking-[0.3em]">2H RESPONSE · NO OBLIGATION</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
