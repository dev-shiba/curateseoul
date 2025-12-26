"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../common/LocaleSwitcher";

export default function Header() {
    const t = useTranslations("header");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: t("verification"), href: "/#verify" },
        { name: t("benefits"), href: "/benefits" },
        { name: t("experience"), href: "/experience" },
        { name: t("reviews"), href: "/experience#reviews" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 font-pretendard ${isScrolled
                ? "bg-white/90 backdrop-blur-2xl border-b border-black/5 py-4 shadow-sm"
                : "bg-transparent py-8"
                }`}
        >
            <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
                <Link href="/" className="group flex items-center gap-2">
                    <div className="text-2xl font-bold tracking-tight text-zinc-900">
                        Curate<span className="text-brand-gold">Seoul</span>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-12">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-semibold text-zinc-600 hover:text-brand-gold transition-all relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-6">
                    <LocaleSwitcher />
                    <Link
                        href="https://pf.kakao.com/_curateseoul"
                        className="bg-[#FEE500] text-[#191919] px-6 py-3 rounded-full text-sm font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2"
                    >
                        <span>💬</span> {t("cta")}
                    </Link>
                </div>
            </div>
        </header>
    );
}
