import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

const clinics = [
    {
        id: 1,
        name: "Dream Plastic Surgery",
        location: "Apgujeong, Seoul",
        image: "/images/clinic_1.webp",
    },
    {
        id: 2,
        name: "Urban Plastic Surgery",
        location: "Gangnam, Seoul",
        image: "/images/clinic_2.webp",
    },
    {
        id: 3,
        name: "Lienjang Plastic Surgery",
        location: "Gangnam, Seoul",
        image: "/images/clinic_3.webp",
    },
];

export default function FeaturedClinics() {
    const t = useTranslations("benefitsPage.clinicsSection");

    return (
        <section id="clinics" className="py-32 bg-brand-cream font-pretendard relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold-soft rounded-full blur-[150px] -z-0 opacity-30" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">{t("title")}</h2>
                        <p className="text-zinc-500 text-lg font-medium italic border-b-2 border-brand-gold/10 inline-block pb-1">{t("subtitle")}</p>
                    </div>
                    <Link
                        href="/benefits"
                        className="bg-brand-gold hover:bg-brand-gold-dark px-10 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all rounded-xl shadow-lg shadow-brand-gold/20"
                    >
                        {t("browseAll")}
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {clinics.map((clinic) => (
                        <div key={clinic.id} className="group cursor-pointer">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-[40px] shadow-lg border border-black/[0.03] mb-8 bg-zinc-50 group-hover:shadow-2xl group-hover:shadow-brand-gold/10 transition-all duration-500">
                                <Image
                                    src={clinic.image}
                                    alt={clinic.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="space-y-2 px-4">
                                <p className="text-brand-gold-dark font-bold text-[10px] uppercase tracking-[0.2em]">{clinic.location}</p>
                                <h3 className="text-2xl font-extrabold text-zinc-900 tracking-tight group-hover:text-brand-gold-dark transition-colors mb-3">
                                    {clinic.name}
                                </h3>
                                <div
                                    className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-brand-gold transition-colors inline-block"
                                >
                                    {t("more")} →
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
