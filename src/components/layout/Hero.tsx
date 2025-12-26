"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
    const t = useTranslations("hero");
    const tc = useTranslations("contactCard");

    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-brand-cream font-pretendard">
            {/* Soft Ambient Blobs */}
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[80%] bg-[radial-gradient(circle,var(--color-brand-gold-soft)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[60%] bg-[radial-gradient(circle,var(--color-brand-green-soft)_0%,transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="space-y-10"
                    >
                        <div className="inline-flex items-center gap-2 bg-brand-gold-soft border border-brand-gold-light/30 px-5 py-2.5 rounded-full text-brand-gold-dark font-bold text-xs tracking-wide">
                            <span>✨</span> {t("eyebrow")}
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-4xl lg:text-[56px] font-extrabold leading-[1.2] tracking-tight text-zinc-900">
                                {t("title")}<br />
                                <span className="bg-gradient-to-r from-brand-gold to-brand-green bg-clip-text text-transparent">
                                    {t("titleHighlight")}
                                </span>
                            </h1>

                            <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed max-w-lg font-medium">
                                {t.rich("description.combined", {
                                    highlight: (chunks) => <span className="text-zinc-900 font-bold border-b-2 border-brand-gold/40 pb-0.5">{chunks}</span>,
                                    br: () => <br />
                                })}
                            </p>
                        </div>

                        <div className="flex flex-row gap-12 border-t border-black/5 pt-10">
                            <div className="space-y-1">
                                <div className="text-3xl font-extrabold text-brand-gold-dark font-inter">50+</div>
                                <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{t("stats.partners")}</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-3xl font-extrabold text-brand-gold-dark font-inter">₩45만+</div>
                                <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{t("stats.value")}</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-3xl font-extrabold text-brand-gold-dark font-inter">30명</div>
                                <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{t("stats.monthly")}</div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {["beauty", "popups"].map((key) => (
                                <div key={key} className="flex items-center gap-2 bg-white border border-black/5 px-4 py-2.5 rounded-full text-xs font-bold text-zinc-600 shadow-sm">
                                    <span className="text-brand-gold text-sm">✦</span> {t(`features.${key}`)}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Kakao-Style Contact Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
                        className="bg-white border border-black/5 p-10 lg:p-12 relative overflow-hidden shadow-2xl rounded-[32px]"
                    >
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold via-brand-gold-dark to-brand-gold" />

                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D64545] text-white px-5 py-1.5 text-[11px] font-bold rounded-full shadow-lg whitespace-nowrap">
                            {tc("badge")}
                        </div>

                        <div className="text-center mt-4">
                            <h2 className="text-2xl font-bold mb-2 text-zinc-900">{tc("title")}</h2>
                            <p className="text-zinc-400 text-sm mb-10 font-medium">
                                {tc("subtitle")}
                            </p>

                            <Link
                                href="https://pf.kakao.com/_curateseoul"
                                className="flex items-center justify-center gap-3 w-full bg-[#FEE500] hover:shadow-lg hover:-translate-y-0.5 text-[#191919] py-4.5 font-bold text-base transition-all mb-4 rounded-xl"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.89 5.31 4.68 6.68-.15.54-.97 3.49-1 3.64 0 .11.04.22.12.29.08.07.18.1.28.08.14-.02 3.29-2.15 3.82-2.53.7.1 1.41.15 2.1.15 5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
                                </svg>
                                {tc("kakaoButton")}
                            </Link>

                            <div className="bg-brand-soft p-4 flex justify-between items-center mb-6 rounded-xl border border-black/[0.03]">
                                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">{tc("idLabel")}</span>
                                <span className="font-bold text-zinc-900 font-inter">@{tc("idValue")}</span>
                                <button className="bg-brand-gold hover:bg-brand-gold-dark text-white text-[10px] font-bold px-4 py-2 rounded-lg transition-colors">{tc("copyButton")}</button>
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-[1px] flex-1 bg-black/5" />
                                <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-widest leading-none">{tc("divider")}</span>
                                <div className="h-[1px] flex-1 bg-black/5" />
                            </div>

                            <form className="flex gap-2.5 mb-6">
                                <input
                                    type="text"
                                    placeholder={tc("formPlaceholder")}
                                    className="flex-1 bg-brand-soft border border-black/[0.03] px-5 py-4 text-sm font-medium focus:outline-none focus:border-brand-gold focus:bg-white transition-all rounded-xl"
                                />
                                <button className="bg-brand-gold hover:bg-brand-gold-dark text-white px-6 py-4 font-bold text-sm transition-all rounded-xl">{tc("formButton")}</button>
                            </form>

                            <p className="text-[11px] text-zinc-300 font-medium">{tc("note")}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
