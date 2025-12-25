"use client";

import MotionSection from "../common/MotionSection";

const videos = [
    {
        thumbnail: "/images/vlogs/vlog1.png",
        tag: "맛집/카페",
        views: "1.2k",
        title: "성수동 힙플레이스 투어",
        user: "@SeoulSearcher",
    },
    {
        thumbnail: "/images/vlogs/vlog2.png",
        tag: "K-Beauty",
        views: "3.5k",
        title: "강남 피부관리 찐후기",
        user: "@GlowGuide",
    },
    {
        thumbnail: "/images/vlogs/vlog3.png",
        tag: "핫플",
        views: "2.8k",
        title: "홍대 밤거리 버스킹",
        user: "@UrbanVibe",
    },
    {
        thumbnail: "/images/vlogs/vlog4.png",
        tag: "쇼핑",
        views: "1.9k",
        title: "한남동 럭셔리 부티크",
        user: "@StyleSeoul",
    },
];

export default function MemberVideos() {
    return (
        <section id="videos" className="py-24 bg-white font-pretendard">
            <div className="container mx-auto px-6 max-w-6xl">
                <MotionSection>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 text-brand-gold font-bold text-sm uppercase tracking-[0.2em] mb-6">
                            <span>🎬</span> REAL REVIEW
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-black mb-6 text-zinc-900 tracking-tighter">회원들의 서울 여행 후기</h2>
                        <p className="text-zinc-600 text-lg lg:text-xl font-medium opacity-70 italic underline-offset-8 decoration-zinc-100">실제 회원들이 체험하고 남긴 숏폼 영상</p>
                    </div>
                </MotionSection>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="relative group aspect-[9/16] overflow-hidden glass-card rounded-[32px] cursor-pointer"
                        >
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/10 to-transparent" />

                            <div className="absolute top-5 left-5">
                                <span className="bg-brand-gold text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                                    {video.tag}
                                </span>
                            </div>

                            <div className="absolute top-5 right-5 bg-black/40 backdrop-blur-md text-white text-xs font-bold px-3 py-2 rounded-full flex items-center gap-1 shadow-lg">
                                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-1" />
                                {video.views}
                            </div>

                            <div className="absolute bottom-8 left-6 right-6 text-left">
                                <p className="text-white font-black text-lg mb-2 leading-tight drop-shadow-lg tracking-tighter">
                                    {video.title}
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 bg-white/30 backdrop-blur-sm rounded-full" />
                                    <p className="text-white font-bold text-xs uppercase tracking-widest opacity-80">
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
