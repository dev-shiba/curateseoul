"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import LocaleSwitcher from "../common/LocaleSwitcher";
import { SiWechat } from "react-icons/si";

export default function Header() {
    const t = useTranslations("header");
    const pathname = usePathname();
    const locale = useLocale();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: t("verification"), href: "/" },
        { name: t("benefits"), href: "/benefits" },
        { name: t("reviews"), href: "/experience" },
        { name: t("faq"), href: "/faq" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 font-pretendard ${isScrolled
                ? "bg-white/90 backdrop-blur-2xl py-5 shadow-sm"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
                <Link href="/" className="group flex items-center gap-2">
                    <div className="text-2xl font-bold tracking-tight text-zinc-900">
                        Curate<span className="text-brand-gold">Seoul</span>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-12">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-semibold transition-all relative group ${isActive ? "text-brand-gold" : "text-zinc-600 hover:text-brand-gold"
                                    }`}
                            >
                                {item.name}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-gold transition-all ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-6">
                    <LocaleSwitcher />
                    {locale === "zh-CN" ? (
                        <Link
                            href="#wechat" // Anchor to WeChat section
                            className="bg-[#07C160] text-white px-6 py-3 rounded-full text-sm font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2 hover:bg-[#06ad56]"
                        >
                            <SiWechat size={20} />
                            {t("cta")}
                        </Link>
                    ) : (
                        <Link
                            href="https://pf.kakao.com/_curateseoul"
                            target="_blank"
                            className="bg-[#FEE500] text-[#191919] px-6 py-3 rounded-full text-sm font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.89 5.31 4.68 6.68-.15.54-.97 3.49-1 3.64 0 .11.04.22.12.29.08.07.18.1.28.08.14-.02 3.29-2.15 3.82-2.53.7.1 1.41.15 2.1.15 5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
                            </svg>
                            {t("cta")}
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}
