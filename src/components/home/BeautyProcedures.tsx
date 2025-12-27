import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function BeautyProcedures() {
    const t = useTranslations("benefitsPage.proceduresSection");

    return (
        <section className="py-32 bg-brand-cream overflow-hidden font-pretendard relative">
            {/* Soft Ambient Decoration */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-gold-soft rounded-full blur-[150px] -z-0 opacity-50" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative aspect-[4/5] md:aspect-square overflow-hidden shadow-2xl rounded-[40px] border border-white/50">
                        <Image
                            src="/images/hero.png" // Using the hero image as a placeholder for consistency
                            alt="Beauty Procedure"
                            fill
                            className="object-cover object-center"
                        />
                    </div>

                    <div className="space-y-10">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 bg-brand-gold-soft text-brand-gold-dark font-bold text-xs uppercase tracking-widest px-5 py-2 rounded-full mb-2">
                                <span>✨</span> {t("titleHighlight")}
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-zinc-900">
                                {t("title")}
                            </h2>
                            <p className="text-zinc-500 text-lg leading-relaxed font-medium italic border-b-2 border-brand-gold/10 inline-block pb-1">
                                {t("description")}
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                { key: "skinBooster", num: "01" },
                                { key: "miniLifting", num: "02" },
                                { key: "petiteSurgery", num: "03" },
                            ].map((item) => (
                                <div key={item.key} className="flex items-start gap-4 p-6 bg-white border border-brand-gold/10 rounded-[20px] transition-all hover:shadow-lg hover:-translate-y-1 hover:border-brand-gold/30 group">
                                    <div className="w-12 h-12 bg-brand-gold-soft flex items-center justify-center text-brand-gold-dark font-bold rounded-2xl text-lg font-inter shrink-0 group-hover:bg-brand-gold group-hover:text-white transition-colors">
                                        {item.num}
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-zinc-900 text-lg tracking-tight">{t(`items.${item.key}.title`)}</h4>
                                        <p className="text-sm text-zinc-500 font-medium leading-relaxed">{t(`items.${item.key}.description`)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/benefits#procedures"
                            className="inline-block bg-brand-gold hover:bg-brand-gold-dark px-10 py-5 font-bold uppercase tracking-widest text-sm text-white transition-all rounded-2xl shadow-lg shadow-brand-gold/20 hover:shadow-xl hover:shadow-brand-gold/30 hover:-translate-y-0.5"
                        >
                            {t("cta")}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
