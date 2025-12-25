"use client";

import MotionSection from "../common/MotionSection";

const reviews = [
    {
        avatar: "https://i.pravatar.cc/150?u=yuki",
        name: "Yuki S.",
        from: "Japan",
        rating: 5,
        text: "서울 여행이 처음이라 걱정이 많았는데, 큐레이트 서울 덕분에 진짜 로컬 핫플들만 골라 갈 수 있었어요. 특히 오마카세 예약 혜택이 최고였습니다!",
        tags: ["맛집 체험", "오마카세", "로컬 감성"],
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
        text: "피부관리 예약을 도와주신 덕분에 한국의 프리미엄 서비스를 편하게 받을 수 있었어요. 제휴된 카페들도 분위기가 너무 좋아서 인생샷 많이 건졌네요.",
        tags: ["K-Beauty", "피부관리", "카페 투어"],
        images: [
            "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1528605248644-14dd04cb11c7?w=300&h=300&fit=crop",
        ],
    },
];

export default function MemberReviews() {
    return (
        <section id="reviews" className="py-24 bg-zinc-50 font-pretendard relative overflow-hidden">
            <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px]" />
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <MotionSection>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 text-brand-gold font-black text-sm uppercase tracking-[0.2em] mb-6">
                            <span>💬</span> REAL REVIEW
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-black mb-6 text-zinc-900 tracking-tighter">회원들의 솔직한 후기</h2>
                        <p className="text-zinc-600 text-lg lg:text-xl font-medium opacity-80 decoration-brand-gold/10 decoration-8 underline-offset-8 underline">CURATE SEOUL과 함께한 특별한 경험</p>
                    </div>
                </MotionSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="glass-card p-10 md:p-12 flex flex-col rounded-[40px] hover:shadow-2xl transition-all duration-700 bg-zinc-50/30"
                        >
                            <div className="flex items-center gap-5 mb-8">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-16 h-16 rounded-full border-2 border-white shadow-md"
                                />
                                <div>
                                    <h4 className="font-black text-zinc-900">{review.name}</h4>
                                    <p className="text-xs font-black text-brand-gold uppercase tracking-widest">{review.from}</p>
                                </div>
                                <div className="ml-auto flex gap-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} className="text-brand-gold text-sm">★</span>
                                    ))}
                                </div>
                            </div>

                            <p className="text-text-medium mb-10 leading-relaxed font-medium italic">
                                &quot;{review.text}&quot;
                            </p>

                            <div className="flex flex-wrap gap-2 mb-10">
                                {review.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-white/60 backdrop-blur-sm border border-zinc-100 text-xs font-black px-5 py-2.5 rounded-full text-zinc-600 uppercase tracking-widest"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                                {review.images.map((img, i) => (
                                    <div key={i} className="aspect-square overflow-hidden rounded-2xl group/img">
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
