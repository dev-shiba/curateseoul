"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 font-pretendard ${isScrolled
                ? "bg-white/45 backdrop-blur-[40px] saturate-[180%] border-b border-white/30 py-4 shadow-xl shadow-black/5"
                : "bg-transparent py-8"
                }`}
        >
            <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
                <Link href="/" className="group flex items-center gap-2">
                    <div className="text-2xl font-black tracking-tighter text-zinc-900 group-hover:text-brand-gold transition-colors">
                        CURATE<span className="text-brand-gold group-hover:text-zinc-900">SEOUL</span>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-12">
                    {[
                        { name: "여행 인증", href: "#verify" },
                        { name: "혜택 안내", href: "#benefits" },
                        { name: "후기", href: "#reviews" },
                        { name: "K-Beauty", href: "#membership" },
                    ].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-black uppercase tracking-[0.1em] text-zinc-600 hover:text-zinc-900 transition-all relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                <Link
                    href="#contact-card"
                    className="bg-zinc-900 text-white px-10 py-4 text-xs font-black uppercase tracking-[0.15em] hover:bg-brand-gold hover:text-white transition-all shadow-lg shadow-zinc-900/10"
                >
                    상담하기
                </Link>
            </div>
        </header>
    );
}
