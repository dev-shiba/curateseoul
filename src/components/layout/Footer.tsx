"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-zinc-900 pt-24 pb-12 font-pretendard overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[150px] -z-0" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-8">
                            <div className="text-3xl font-black tracking-tighter text-white">
                                CURATE<span className="text-brand-gold">SEOUL</span>
                            </div>
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed font-medium mb-8">
                            한국인만 아는 프리미엄 로컬 정보와<br />
                            검증된 K-Beauty 혜택을 제안합니다.
                        </p>
                        <div className="flex gap-4">
                            {["Instagram", "YouTube", "TikTok"].map((social) => (
                                <Link
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 bg-white/5 hover:bg-white/10 flex items-center justify-center rounded-xl transition-colors"
                                >
                                    <span className="text-zinc-400 text-[10px] font-black uppercase tracking-tighter">{social[0]}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="#verify" className="text-zinc-500 hover:text-white text-xs font-bold transition-colors">여행 일정 인증</Link></li>
                            <li><Link href="#benefits" className="text-zinc-500 hover:text-white text-xs font-bold transition-colors">제휴 혜택 안내</Link></li>
                            <li><Link href="#reviews" className="text-zinc-500 hover:text-white text-xs font-bold transition-colors">회원 리얼 후기</Link></li>
                            <li><Link href="#membership" className="text-zinc-500 hover:text-white text-xs font-bold transition-colors">K-Beauty 멤버십</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex flex-col gap-1">
                                <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">Address</span>
                                <span className="text-zinc-400 text-xs font-bold leading-relaxed">首尔市江南区永东大路602, 6楼</span>
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">Email & Phone</span>
                                <span className="text-zinc-400 text-xs font-bold">curateseoul@gmail.com</span>
                                <span className="text-zinc-400 text-xs font-bold">010-2557-1506</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Newsletter</h4>
                        <p className="text-zinc-500 text-xs font-bold mb-6">최신 로컬 업데이트와 시크릿 혜택 정보를 받으세요.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-white/5 border border-white/10 px-5 py-4 text-xs font-bold text-white focus:outline-none focus:border-brand-gold/50 transition-colors flex-1 rounded-xl"
                            />
                            <button className="bg-brand-gold text-white px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-brand-gold-dark transition-colors rounded-xl">Join</button>
                        </form>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em]">
                        &copy; 2024 CURATE SEOUL. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-zinc-600 hover:text-white text-[10px] font-black uppercase tracking-[0.2em] transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-zinc-600 hover:text-white text-[10px] font-black uppercase tracking-[0.2em] transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
