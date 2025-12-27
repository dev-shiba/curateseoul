"use client";
import { useClipboard } from "@/hooks/useClipboard";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import MotionSection from "../common/MotionSection";
import { SiWechat, SiWhatsapp, SiLine } from "react-icons/si";

export default function FinalCTA() {
    const t = useTranslations("finalCTA");
    const tc = useTranslations("contactCard");
    const { copied, copyToClipboard } = useClipboard();
    const locale = useLocale();
    const isChinese = locale === "zh-CN";
    const isEnglish = locale === "en";
    const isJapanese = locale === "ja";
    const usePremiumLayout = isChinese || isEnglish || isJapanese;

    const brandColor = isChinese ? "#07C160" : isEnglish ? "#25D366" : isJapanese ? "#06C755" : "#FEE500";
    const BrandIcon = isChinese ? SiWechat : isEnglish ? SiWhatsapp : isJapanese ? SiLine : null;
    const buttonKey = isChinese ? "wechatButton" : isEnglish ? "whatsappButton" : isJapanese ? "lineButton" : "kakaoButton";

    const handleCopy = () => {
        copyToClipboard(tc("idValue"));
    };

    return (
        <section className="py-32 bg-brand-cream font-pretendard overflow-hidden relative">


            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <MotionSection>
                    <div className="text-center space-y-12">
                        <div className="inline-flex items-center gap-2 bg-brand-gold-soft text-brand-gold-dark font-bold text-xs uppercase tracking-widest px-5 py-2 rounded-full">
                            <span>✨</span> {t("eyebrow")}
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-extrabold text-zinc-900 leading-tight tracking-tight">
                            {t.rich("title", {
                                highlight: (chunks) => <span className="bg-gradient-to-r from-brand-gold to-brand-green bg-clip-text text-transparent">{chunks}</span>,
                                br: () => <br />
                            })}
                        </h2>

                        <p className="text-zinc-500 text-lg lg:text-2xl leading-relaxed max-w-2xl mx-auto font-medium italic border-b-2 border-brand-gold/10 inline-block pb-1">
                            {t.rich("description", {
                                br: () => <br />
                            })}
                        </p>

                        {/* Contact Card */}
                        <div className="bg-white p-12 lg:p-16 border border-black/[0.03] shadow-2xl max-w-xl mx-auto relative group rounded-[40px] overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${brandColor}, #bfa07a, ${brandColor})` }} />

                            {usePremiumLayout ? (
                                // Premium Layout (WeChat, WhatsApp, LINE)
                                <div className="flex flex-col items-center gap-8">
                                    <h3 className="text-xl font-bold text-zinc-900">{tc("title")}</h3>

                                    {/* QR Code Placeholder */}
                                    <div className="bg-brand-soft rounded-[24px] p-6 w-[220px] h-[220px] flex items-center justify-center relative border border-zinc-100">
                                        <div className="bg-white rounded-xl w-[180px] h-[180px] shadow-sm flex flex-col items-center justify-center gap-3 border border-zinc-50">
                                            {BrandIcon && <BrandIcon size={56} style={{ color: brandColor }} />}
                                            <span className="text-xs text-zinc-400 font-medium">{tc("scanCode") || "Scan QR Code"}</span>
                                        </div>
                                    </div>

                                    {/* ID Copy */}
                                    <div className="w-full bg-brand-soft rounded-xl p-4 flex items-center justify-between gap-4 border border-zinc-100">
                                        <div className="flex flex-col items-start gap-1">
                                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{tc("idLabel")}</span>
                                            <span className="text-xl font-bold font-inter" style={{ color: brandColor }}>{tc("idValue")}</span>
                                        </div>
                                        <button
                                            onClick={handleCopy}
                                            className={`px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-sm text-white`}
                                            style={{ backgroundColor: copied ? "#27272a" : brandColor }}
                                        >
                                            {copied ? "Copied!" : tc("copyButton")}
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                // Kakao Layout
                                <>
                                    <Link
                                        href="https://pf.kakao.com/_curateseoul"
                                        className="flex items-center justify-center gap-3 w-full bg-[#FEE500] hover:shadow-lg hover:-translate-y-0.5 text-[#191919] py-6 font-bold text-xl transition-all mb-8 rounded-2xl relative z-10"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                            <path d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.89 5.31 4.68 6.68-.15.54-.97 3.49-1 3.64 0 .11.04.22.12.29.08.07.18.1.28.08.14-.02 3.29-2.15 3.82-2.53.7.1 1.41.15 2.1.15 5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
                                        </svg>
                                        {tc("kakaoButton") || t("button")}
                                    </Link>

                                    <div className="inline-flex items-center justify-center gap-4 bg-brand-soft p-4 rounded-xl border border-black/[0.03] relative z-10 w-full">
                                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">ID</span>
                                        <span className="text-xl font-bold text-zinc-900 font-inter leading-none">{tc("idValue")}</span>
                                        <button
                                            onClick={() => copyToClipboard(tc("idValue"))}
                                            className={`text-[10px] font-bold px-4 py-2 rounded-lg transition-all relative ${copied
                                                ? "bg-zinc-800 text-white scale-95"
                                                : "bg-brand-gold hover:bg-brand-gold-dark text-white"
                                                }`}
                                        >
                                            {copied ? "COPIED!" : tc("copyButton")}
                                        </button>
                                    </div>
                                </>
                            )}

                            <p className="mt-8 text-[11px] text-zinc-300 font-medium relative z-10 text-center">
                                {t("note")}
                            </p>
                        </div>
                    </div>
                </MotionSection>
            </div>
        </section>
    );
}
