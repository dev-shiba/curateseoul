import { useTranslations } from "next-intl";
import MotionSection from "../common/MotionSection";
import Image from "next/image";

export default function MemberReviews() {
    const t = useTranslations("experiencePage.reviewsSection");

    const reviews = [
        {
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
            name: "Yuki S.",
            from: t("items.review1.from"),
            flag: "🇯🇵",
            rating: 5,
            text: t("items.review1.text"),
            tags: t.raw("items.review1.tags"),
            images: [
                "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80", // Food/Dining
                "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=300&q=80", // Terrace/View
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=300&q=80", // Restaurant Interior
            ],
        },
        {
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
            name: "Sakura M.",
            from: t("items.review2.from"),
            flag: "🇯🇵",
            rating: 5,
            text: t("items.review2.text"),
            tags: t.raw("items.review2.tags"),
            images: [
                "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=300&q=80", // Hot stone Spa
                "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=600&q=80", // Modern Interior/Gallery
                "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=300&q=80", // Cafe/Coffee
            ],
        },
        {
            avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
            name: "Hana K.",
            from: t("items.review3.from"),
            flag: "🇯🇵",
            rating: 4.5, // Visual variety? Or just 5. Reference shows 4.5.
            text: t("items.review3.text"),
            tags: t.raw("items.review3.tags"),
            images: [
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=300&q=80", // Fashion Shopping
                "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=80", // Chocolate Cake
                "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=300&q=80", // Dessert
            ],
        },
    ];

    return (
        <section id="reviews" className="py-24 bg-brand-cream font-pretendard relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <MotionSection>
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 bg-[#F5F1E8] text-[#8C7B65] font-bold text-sm px-5 py-2 rounded-full mb-6">
                            <span>★</span> {t("eyebrow")}
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black mb-4 text-zinc-900 tracking-tight">{t("title")}</h2>
                        <p className="text-zinc-500 text-lg font-medium">{t("subtitle")}</p>
                    </div>
                </MotionSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white flex flex-col rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 group"
                        >
                            {/* Top Image Collage */}
                            <div className="grid grid-cols-3 gap-0.5 h-48">
                                {review.images.map((img, i) => (
                                    <div key={i} className="relative overflow-hidden h-full">
                                        <Image
                                            src={img}
                                            alt={`${review.name}'s review photo ${i + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-1">
                                {/* User Profile */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative w-12 h-12 flex-shrink-0">
                                        <div className="w-full h-full rounded-full overflow-hidden border border-zinc-100 relative">
                                            <Image
                                                src={review.avatar}
                                                alt={review.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <span className="absolute -bottom-1 -right-1 text-sm drop-shadow-sm">{review.flag}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-zinc-900 text-[17px] leading-tight mb-1">{review.name}</h4>
                                        <p className="text-xs text-zinc-400 font-medium">{review.from}</p>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-5">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={`text-sm ${i < Math.floor(review.rating) ? "text-[#C8A97E]" : i < review.rating ? "text-[#C8A97E]/50" : "text-zinc-200"}`}>
                                            ★
                                        </span>
                                    ))}
                                    {/* Handle half star manually if needed, or simple logic */}
                                    {review.rating % 1 !== 0 && (
                                        <span className="text-sm text-[#C8A97E] absolute ml-[72px] invisible">★</span> // Just simplistic for now
                                    )}
                                </div>

                                <p className="text-zinc-600 mb-8 leading-relaxed font-medium text-[15px] line-clamp-3">
                                    &quot;{review.text}&quot;
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {Array.isArray(review.tags) && review.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="bg-[#F5F1E8] text-[#8C7B65] text-[11px] font-bold px-3 py-1.5 rounded-lg"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
