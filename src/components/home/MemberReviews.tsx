import { useTranslations } from "next-intl";
import MotionSection from "../common/MotionSection";

export default function MemberReviews() {
    const t = useTranslations("experiencePage.reviewsSection");

    const reviews = [
        {
            avatar: "https://i.pravatar.cc/150?u=yuki",
            name: "Yuki S.",
            from: "Japan",
            rating: 5,
            text: t("items.review1.text"),
            tags: t.raw("items.review1.tags"),
            images: [
                "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=300&h=300&fit=crop",
                "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&h=300&fit=crop",
                "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=300&h=300&fit=crop",
            ],
        },
        {
            avatar: "https://i.pravatar.cc/150?u=sakura",
            name: "Sakura M.",
            from: "Japan",
            rating: 5,
            text: t("items.review2.text"),
            tags: t.raw("items.review2.tags"),
            images: [
                "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=300&fit=crop",
                "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=300&h=300&fit=crop",
                "https://images.unsplash.com/photo-1528605248644-14dd04cb11c7?w=300&h=300&fit=crop",
            ],
        },
    ];

    return (
        <section id="reviews" className="py-24 bg-brand-warm font-pretendard relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <MotionSection>
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 bg-brand-gold-soft text-brand-gold-dark font-bold text-xs uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                            <span>💬</span> {t("eyebrow")}
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 text-zinc-900 tracking-tight">{t("title")}</h2>
                        <p className="text-zinc-500 text-lg lg:text-xl font-medium max-w-xl mx-auto italic border-b-2 border-brand-gold/10 inline-block pb-1">{t("subtitle")}</p>
                    </div>
                </MotionSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white p-10 md:p-12 flex flex-col rounded-[40px] shadow-lg transition-all duration-700 hover:-translate-y-2 border border-black/[0.03]"
                        >
                            <div className="flex items-center gap-5 mb-8">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-14 h-14 rounded-full border-2 border-white shadow-sm"
                                />
                                <div>
                                    <h4 className="font-bold text-zinc-900 text-base leading-none mb-1.5">{review.name}</h4>
                                    <p className="text-[10px] font-bold text-brand-gold-dark uppercase tracking-widest leading-none">{review.from}</p>
                                </div>
                                <div className="ml-auto flex gap-0.5">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} className="text-brand-gold text-xs">★</span>
                                    ))}
                                </div>
                            </div>

                            <p className="text-zinc-500 mb-10 leading-relaxed font-medium italic text-[15px]">
                                &quot;{review.text}&quot;
                            </p>

                            <div className="flex flex-wrap gap-2 mb-10">
                                {Array.isArray(review.tags) && review.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-brand-soft border border-black/[0.03] text-[10px] font-bold px-4 py-2 rounded-full text-zinc-600 uppercase tracking-widest"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                                {review.images.map((img, i) => (
                                    <div key={i} className="aspect-square overflow-hidden rounded-2xl group/img bg-zinc-50 border border-black/[0.03]">
                                        <img
                                            src={img}
                                            alt="review image"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
