import { useTranslations } from "next-intl";
import MotionSection from "../common/MotionSection";
import Image from "next/image";

export default function MemberVideos() {
    const t = useTranslations("experiencePage.videosSection");

    const videos = [
        {
            thumbnail: "/images/vlogs/vlog1.webp",
            tag: t("vlogs.vlog1.tag"),
            views: "1.2k",
            title: t("vlogs.vlog1.title"),
            user: "@SeoulSearcher",
        },
        {
            thumbnail: "/images/vlogs/vlog2.webp",
            tag: t("vlogs.vlog2.tag"),
            views: "3.5k",
            title: t("vlogs.vlog2.title"),
            user: "@GlowGuide",
        },
        {
            thumbnail: "/images/vlogs/vlog3.webp",
            tag: t("vlogs.vlog3.tag"),
            views: "2.8k",
            title: t("vlogs.vlog3.title"),
            user: "@UrbanVibe",
        },
        {
            thumbnail: "/images/vlogs/vlog4.webp",
            tag: t("vlogs.vlog4.tag"),
            views: "1.9k",
            title: t("vlogs.vlog4.title"),
            user: "@StyleSeoul",
        },
    ];

    return (
        <section id="videos" className="py-24 bg-brand-cream font-pretendard">
            <div className="container mx-auto px-6 max-w-6xl">
                <MotionSection>
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 bg-brand-gold-soft text-brand-gold-dark font-bold text-xs uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                            <span>🎬</span> {t("eyebrow")}
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 text-zinc-900 tracking-tight">{t("title")}</h2>
                        <p className="text-zinc-500 text-lg lg:text-xl font-medium max-w-xl mx-auto italic border-b-2 border-brand-gold/10 inline-block pb-1">{t("subtitle")}</p>
                    </div>
                </MotionSection>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="relative group aspect-[10/16] overflow-hidden bg-zinc-100 rounded-[40px] cursor-pointer shadow-lg border border-black/[0.03]"
                        >
                            <Image
                                src={video.thumbnail}
                                alt={video.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/10 to-transparent" />

                            <div className="absolute top-5 left-5">
                                <span className="bg-brand-gold text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                                    {video.tag}
                                </span>
                            </div>

                            <div className="absolute top-5 right-5 bg-black/40 backdrop-blur-md text-white text-[9px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/10">
                                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                                <span className="font-inter uppercase">{video.views}</span>
                            </div>

                            <div className="absolute bottom-8 left-6 right-6 text-left">
                                <p className="text-white font-bold text-lg mb-3 leading-tight tracking-tight">
                                    {video.title}
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 bg-white/20 backdrop-blur-sm rounded-full border border-white/10" />
                                    <p className="text-white/80 font-bold text-[9px] uppercase tracking-widest">
                                        {video.user}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
