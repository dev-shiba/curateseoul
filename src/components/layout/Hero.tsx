"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import RibbonBadge from "@/components/common/RibbonBadge";
import { useState } from "react";
import { SiWechat } from "react-icons/si";

export default function Hero() {
    const t = useTranslations("hero");
    const tc = useTranslations("contactCard");
    const locale = useLocale();
    const isChinese = locale === "zh-CN";
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("CurateSeoul");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="relative min-h-screen flex items-center pt-48 pb-24 overflow-hidden bg-brand-cream font-pretendard">
            {/* Soft Ambient Blobs */}
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[80%] bg-[radial-gradient(circle,var(--color-brand-gold-soft)_0%,transparent_70%)] pointer-events-none blur-3xl" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[60%] bg-[radial-gradient(circle,var(--color-brand-gold-soft)_0%,transparent_70%)] pointer-events-none blur-3xl" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
                    className="flex justify-center mb-12"
                >
                    <RibbonBadge text={t("eyebrow")} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="space-y-12 mb-20 w-full flex flex-col items-center"
                >
                    <h1 className="text-4xl lg:text-[64px] font-extrabold leading-[1.2] tracking-tight text-zinc-900">
                        {t.rich("title", {
                            shrink: (chunks) => <span className="text-2xl lg:text-4xl font-semibold text-zinc-400 align-middle ml-2">{chunks}</span>
                        })}
                        <br />
                        <span className="relative inline-block bg-gradient-to-r from-brand-gold to-brand-green bg-clip-text text-transparent pb-4 mt-3">
                            {t.rich("titleHighlight", {
                                emphasis: (chunks) => <span className="inline-block font-black italic text-5xl lg:text-[88px] ml-2 tracking-tighter drop-shadow-sm py-2 pr-4 bg-gradient-to-r from-brand-gold to-brand-green bg-clip-text text-transparent">{chunks}</span>
                            })}
                            {/* x2 Badge */}
                            <span className="absolute -top-3 -right-8 rotate-12 bg-[#E5503C] text-white text-xs lg:text-sm px-2.5 py-1 rounded-md font-black shadow-md select-none border-2 border-white">
                                x2
                            </span>
                        </span>
                    </h1>

                    {/* Stats Section */}
                    <div className="flex flex-row justify-center items-center gap-8 lg:gap-12 w-full py-2">
                        <div className="space-y-2">
                            <div className="text-4xl lg:text-5xl font-black text-brand-gold-dark font-inter tracking-tight">50+</div>
                            <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{t("stats.partners")}</div>
                        </div>

                        {/* Divider */}
                        <div className="w-px h-12 bg-black/10" />

                        <div className="space-y-2">
                            <div className="text-4xl lg:text-5xl font-black text-brand-gold-dark font-inter tracking-tight">{isChinese ? "¥3000+" : "₩45만+"}</div>
                            <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{t("stats.value")}</div>
                        </div>

                        {/* Divider */}
                        <div className="w-px h-12 bg-black/10" />

                        <div className="space-y-2">
                            <div className="text-4xl lg:text-5xl font-black text-brand-gold-dark font-inter tracking-tight">30명</div>
                            <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{t("stats.monthly")}</div>
                        </div>
                    </div>

                    <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto font-medium">
                        {t.rich("description.combined", {
                            highlight: (chunks) => <span className="text-zinc-900 font-bold border-b-2 border-brand-gold/40 pb-0.5">{chunks}</span>,
                            br: () => <br />
                        })}
                    </p>

                    <div className="flex justify-center flex-wrap gap-3">
                        {["beauty", "popups", "guide"].map((key) => (
                            <div key={key} className="flex items-center gap-2 bg-white border border-black/5 px-5 py-3 rounded-full text-sm font-bold text-zinc-600 shadow-sm transition-transform hover:-translate-y-0.5">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-brand-gold" strokeWidth="3">
                                    <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {t(`features.${key}`)}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Horizontal Contact Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
                    className="w-full max-w-3xl bg-white border border-brand-gold/20 p-8 md:p-10 relative overflow-hidden shadow-2xl rounded-[32px] mx-auto text-center"
                >
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-gold via-[#E5503C] to-brand-gold" />

                    <div className="flex flex-col items-center space-y-8">
                        {/* Header */}
                        <div className="space-y-4">
                            <div className="inline-block bg-[#E5503C] text-white px-4 py-1.5 text-xs font-bold rounded-full shadow-md animate-pulse">
                                {tc("badge")}
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-3xl lg:text-4xl font-black text-zinc-900 leading-tight tracking-tight">
                                    {tc("title")}
                                </h2>
                                <p className="text-zinc-500 text-lg font-medium">
                                    {tc("subtitle")}
                                </p>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="w-full max-w-md space-y-4">
                            {isChinese ? (
                                // WeChat specific layout
                                <>
                                    <div className="flex flex-col items-center gap-6 w-full">
                                        {/* QR Code Placeholder */}
                                        <div className="bg-brand-soft rounded-[24px] p-8 w-[200px] h-[200px] flex items-center justify-center relative">
                                            <div className="bg-white rounded-xl w-[140px] h-[140px] shadow-sm flex flex-col items-center justify-center gap-2 border border-zinc-100">
                                                <SiWechat className="w-12 h-12 text-[#07C160]" />
                                                <span className="text-xs text-zinc-400 font-medium">{tc("scanCode")}</span>
                                            </div>
                                        </div>

                                        {/* ID Copy Row */}
                                        <div className="bg-brand-soft rounded-xl p-3 pl-6 pr-3 w-full flex items-center justify-between gap-4">
                                            <div className="flex items-center gap-2 overflow-hidden">
                                                <span className="text-xs font-bold text-zinc-400 whitespace-nowrap">{tc("idLabel")}</span>
                                                <span className="text-lg font-bold text-[#07C160] font-inter truncate">{tc("idValue")}</span>
                                            </div>
                                            <button
                                                onClick={handleCopy}
                                                className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all whitespace-nowrap shadow-sm ${copied
                                                    ? "bg-zinc-800 text-white"
                                                    : "bg-[#07C160] text-white hover:bg-[#06ad56] hover:-translate-y-0.5"
                                                    }`}
                                            >
                                                {copied ? "Copied!" : tc("copyButton")}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="relative py-4 w-full">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-zinc-200"></div>
                                        </div>
                                        <div className="relative flex justify-center text-xs">
                                            <span className="px-4 bg-white text-zinc-400 font-medium">{tc("divider")}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3 w-full">
                                        <div className="bg-brand-soft rounded-xl px-4 py-4 flex items-center border border-transparent focus-within:border-[#07C160] transition-colors">
                                            <input
                                                type="text"
                                                placeholder={tc("formPlaceholder")}
                                                className="bg-transparent text-sm font-medium w-full focus:outline-none placeholder:text-zinc-400"
                                            />
                                        </div>
                                        <button className="w-full bg-[#07C160] hover:bg-[#06ad56] text-white px-6 py-4 rounded-xl text-md font-bold transition-all shadow-md hover:-translate-y-0.5 hover:shadow-lg">
                                            {tc("formButton")}
                                        </button>
                                    </div>
                                </>
                            ) : (
                                // Kakao specific layout
                                <>
                                    <Link
                                        href="https://pf.kakao.com/_curateseoul"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full bg-[#FEE500] hover:bg-[#FADC00] hover:-translate-y-0.5 text-[#191919] py-4 rounded-xl font-bold text-lg shadow-md transition-all group"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.89 5.31 4.68 6.68-.15.54-.97 3.49-1 3.64 0 .11.04.22.12.29.08.07.18.1.28.08.14-.02 3.29-2.15 3.82-2.53.7.1 1.41.15 2.1.15 5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
                                        </svg>
                                        {tc("kakaoButton")}
                                    </Link>

                                    <div className="bg-[#FDFBF7] rounded-xl p-3 pl-6 pr-3 w-full flex items-center justify-between gap-4 border border-[#F2EFE9] mt-6">
                                        <div className="flex items-center gap-3 overflow-hidden">
                                            <span className="text-xs font-bold text-zinc-400 whitespace-nowrap">{tc("idLabel")}</span>
                                            <span className="text-lg font-bold text-[#bfa07a] font-inter truncate">{tc("idValue")}</span>
                                        </div>
                                        <button
                                            onClick={handleCopy}
                                            className={`px-5 py-2 rounded-lg font-bold text-sm transition-all whitespace-nowrap shadow-sm ${copied
                                                ? "bg-zinc-800 text-white"
                                                : "bg-[#C8A97E] text-white hover:bg-[#b89a6e]"
                                                }`}
                                        >
                                            {copied ? "COPIED!" : tc("copyButton")}
                                        </button>
                                    </div>

                                    <div className="relative py-6 w-full">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-zinc-200"></div>
                                        </div>
                                        <div className="relative flex justify-center text-xs">
                                            <span className="px-4 bg-white text-zinc-400 font-medium">{tc("divider")}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 w-full">
                                        <div className="flex-1 bg-[#FDFBF7] rounded-xl px-4 py-4 flex items-center border border-[#F2EFE9] focus-within:border-[#C8A97E] transition-colors">
                                            <input
                                                type="text"
                                                placeholder={tc("formPlaceholder")}
                                                className="bg-transparent text-sm font-medium w-full focus:outline-none placeholder:text-zinc-400"
                                            />
                                        </div>
                                        <button className="bg-[#C8A97E] hover:bg-[#b89a6e] text-white px-8 py-4 rounded-xl text-md font-bold transition-all shadow-md hover:-translate-y-0.5 whitespace-nowrap">
                                            {tc("formButton")}
                                        </button>
                                    </div>
                                </>
                            )}

                            <p className="text-[11px] text-zinc-400 font-medium pt-2">
                                ✅ {tc("note")}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
