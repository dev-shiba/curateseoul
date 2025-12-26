import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("footer");

    const quickLinks = [
        { name: t("quickLinks.verify"), href: "/#verify" },
        { name: t("quickLinks.benefits"), href: "/benefits" },
        { name: t("quickLinks.reviews"), href: "/experience#reviews" },
        { name: t("quickLinks.membership"), href: "/benefits#membership" },
    ];

    return (
        <footer className="bg-brand-soft pt-24 pb-12 font-pretendard overflow-hidden relative">
            {/* Soft Ambient Decoration */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold-soft rounded-full blur-[150px] -z-0" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-24">
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-block mb-8">
                            <div className="text-3xl font-bold tracking-tight text-zinc-900">
                                Curate<span className="text-brand-gold">Seoul</span>
                            </div>
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed font-medium mb-8">
                            {t.rich("description", {
                                br: () => <br />
                            })}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-zinc-900 font-bold text-xs uppercase tracking-widest mb-8">{t("quickLinks.title")}</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-zinc-500 hover:text-brand-gold text-[13px] font-medium transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-zinc-900 font-bold text-xs uppercase tracking-widest mb-8">{t("contact.title")}</h4>
                        <ul className="space-y-6">
                            <li className="flex flex-col gap-1.5">
                                <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest leading-none">{t("contact.address.label")}</span>
                                <span className="text-zinc-600 text-[13px] font-medium leading-relaxed">{t("contact.address.value")}</span>
                            </li>
                            <li className="flex flex-col gap-1.5">
                                <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest leading-none">{t("contact.info.label")}</span>
                                <span className="text-zinc-600 text-[13px] font-medium leading-none">curateseoul@gmail.com</span>
                                <span className="text-zinc-600 text-[13px] font-medium leading-none">010-2557-1506</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-zinc-400 text-[11px] font-medium uppercase tracking-widest">
                        {t("copyright")}
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-zinc-400 hover:text-brand-gold text-[11px] font-medium uppercase tracking-widest transition-colors">{t("privacy")}</Link>
                        <Link href="#" className="text-zinc-400 hover:text-brand-gold text-[11px] font-medium uppercase tracking-widest transition-colors">{t("terms")}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
