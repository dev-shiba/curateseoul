export type Language = 'en' | 'ko' | 'cn';

export const dictionary = {
    en: {
        nav: {
            process: "Verify",
            timeline: "Programs",
            benefits: "Benefits",
            reviews: "Reviews",
            contact: "Consult",
        },
        hero: {
            tag: "Premium Medical & Beauty Concierge",
            title: "Beyond K-Beauty,\nExperience Real Seoul",
            desc_bold: "Exclusive for Clinic & Beauty Salon Guests",
            desc: "Verified visitors get VIP access to Seoul's top dining, wellness, and cultural experiences.",
            stat1_val: "50+", stat1_lbl: "Partner Locations",
            stat2_val: "VIP", stat2_lbl: "Concierge Service",
            stat3_val: "100+", stat3_lbl: "Curated Spots",
            btn_kakao: "Verify via KakaoTalk",
            card_badge: "Limited Offer",
            card_title: "Get Your Welcome Kit",
            card_sub: "Verify your visit now",
            card_copy: "Copy ID"
        },
        verify: {
            title: "How to Enjoy Benefits",
            subtitle: "Simple verification for our medical & beauty tourists",
            step1: "Visit Clinic/Salon",
            step2: "Verify Receipt",
            step3: "Get Pass",
            benefit1: "Dining",
            benefit2: "Wellness",
            benefit3: "Shopping",
            benefit4: "Tours"
        },
        timeline: {
            title: "Member's Real Day",
            desc: "See how our members spend a perfect day in Seoul.",
            item1_title: "Seongsu Cafe", item1_desc: "Skip lines at the hottest cafe.",
            item2_title: "Gangnam Skin Care", item2_desc: "40% off premium dermatology.",
            item3_title: "Hidden Hanwoo", item3_desc: "Locals-only BBQ spot reservation.",
            item4_title: "Trend Pop-up", item4_desc: "Direct entry to fashion pop-ups.",
            item5_title: "Omakase Dinner", item5_desc: "Exclusive seat at booked-out places.",
            item6_title: "Speakeasy Bar", item6_desc: "Secret entry code + Welcome drink.",
            tag_cafe: "Cafe", tag_food: "Food", tag_popup: "Experience", tag_fine: "Fine Dining", tag_night: "Nightlife"
        },
        benefits: {
            title: "What You Get",
            desc: "Perks included with your K-Beauty booking.",
            item1_title: "Premium Dining", item1_desc: "Reservations for Michelin & Hot places.",
            item2_title: "Cafe Tour", item2_desc: "Seongsu/Hannam trendy cafes.",
            item3_title: "Pop-up/Exhibition", item3_desc: "Priority entry for limited events.",
            item4_title: "K-Beauty Discount", item4_desc: "Member prices for Skin/Hair/Makeup."
        },
        shortform: {
            title: "Member Vlogs",
            desc: "Real experiences from our community."
        },
        reviews: {
            title: "Member Feedback",
            desc: "Hear from our verified travelers.",
            user1: "Sarah J.", review1: "The personalized itinerary saved me so much time. I loved the hidden cafe in Seongsu!", tags1: ["Cafe", "Seoul"],
            user2: "Emily C.", review2: "Getting 40% off the skin clinic was amazing. The translator was very helpful too.", tags2: ["K-Beauty", "Gangnam"],
            user3: "Michael L.", review3: "Private palace tour was the highlight. A totally different experience from normal tours.", tags3: ["Culture", "VIP"]
        },
        contact: {
            title: "Start Your Journey",
            desc: "Ready for the ultimate Seoul upgrade?",
            name: "Name",
            email: "Email",
            message: "Message",
            submit: "Request Access"
        }
    },
    ko: {
        nav: {
            process: "인증하기",
            timeline: "프로그램",
            benefits: "혜택안내",
            reviews: "후기",
            contact: "문의하기",
        },
        hero: {
            tag: "프리미엄 메디컬 & 뷰티 컨시어지",
            title: "아름다워진 당신,\n서울의 멋도 즐기세요",
            desc_bold: "제휴 병원 및 뷰티샵 이용 고객님 전용",
            desc: "엄선된 맛집, 스파, 팝업스토어 VIP 혜택으로 서울 여행을 완성해드립니다.",
            stat1_val: "50+", stat1_lbl: "제휴 브랜드",
            stat2_val: "VIP", stat2_lbl: "전담 케어",
            stat3_val: "100+", stat3_lbl: "큐레이션",
            btn_kakao: "카카오톡으로 신청하기",
            card_badge: "기간 한정 혜택",
            card_title: "웰컴 키트 신청하기",
            card_sub: "이용 영수증으로 간편 인증",
            card_copy: "아이디 복사"
        },
        verify: {
            title: "혜택을 받는 방법",
            subtitle: "간단한 인증으로 프리미엄 혜택을 누리세요.",
            step1: "병원/샵 방문",
            step2: "영수증 인증",
            step3: "멤버십 발급",
            benefit1: "다이닝",
            benefit2: "웰니스",
            benefit3: "쇼핑",
            benefit4: "투어"
        },
        timeline: {
            title: "멤버의 리얼한 하루",
            desc: "큐레이트 서울 멤버들은 어떻게 하루를 보낼까요?",
            item1_title: "성수동 핫플 카페", item1_desc: "웨이팅 없이 바로 입장, 멤버 전용 디저트.",
            item2_title: "강남 피부관리", item2_desc: "프리미엄 에스테틱 40% 할인가 이용.",
            item3_title: "숨겨진 한우 맛집", item3_desc: "지도에도 없는 로컬 고기집 예약.",
            item4_title: "브랜드 팝업", item4_desc: "2시간 대기 없이 하이패스 입장.",
            item5_title: "오마카세 디너", item5_desc: "예약 마감된 스시야 특별석 확보.",
            item6_title: "한남동 스피키지", item6_desc: "암호를 대야 들어가는 바, 웰컴드링크.",
            tag_cafe: "카페", tag_food: "미식", tag_popup: "체험", tag_fine: "다이닝", tag_night: "나이트"
        },
        benefits: {
            title: "제공 혜택",
            desc: "인증만 해도 쏟아지는 여행 특전.",
            item1_title: "프리미엄 다이닝", item1_desc: "미슐랭 및 예약곤란점 예약 대행.",
            item2_title: "카페 투어", item2_desc: "성수/한남 등 핫한 카페 큐레이션.",
            item3_title: "팝업/전시", item3_desc: "기간 한정 이벤트 우선 입장권.",
            item4_title: "K-뷰티 할인", item4_desc: "피부/헤어/메이크업 제휴가 적용."
        },
        shortform: {
            title: "멤버 브이로그",
            desc: "영상으로 보는 생생한 이용 후기."
        },
        reviews: {
            title: "회원들의 리얼 후기",
            desc: "실제 이용한 회원들의 생생한 리뷰를 확인하세요.",
            user1: "김나영", review1: "성수동 카페 웨이팅 없이 들어간 게 신의 한 수였어요. 추천해주신 디저트도 최고!", tags1: ["카페", "성수동"],
            user2: "최민지", review2: "피부과 할인 혜택으로 비행기값 뽑았습니다. 통역사 분도 너무 친절하셨어요.", tags2: ["K-뷰티", "강남"],
            user3: "이준호", review3: "야간 궁궐 투어는 정말 특별했습니다. 일반 패키지랑은 차원이 다르네요.", tags3: ["문화체험", "VIP"]
        },
        contact: {
            title: "여행 시작하기",
            desc: "지금 바로 혜택을 신청하세요.",
            name: "이름",
            email: "이메일",
            message: "메시지",
            submit: "신청하기"
        }
    },
    cn: {
        nav: {
            process: "行程认证",
            timeline: "精选项目",
            benefits: "福利",
            reviews: "评价",
            contact: "咨询入会",
        },
        hero: {
            tag: "首尔旅行者专属福利",
            title: "省下旅行费，\n体验翻倍享",
            desc_bold: "只需验证机票或酒店",
            desc: "即可解锁本地人私藏美食、K-Beauty、热门打卡点。",
            stat1_val: "50+", stat1_lbl: "合作商家",
            stat2_val: "¥3000+", stat2_lbl: "福利价值",
            stat3_val: "30名", stat3_lbl: "每月限额",
            btn_kakao: "添加微信咨询",
            card_badge: "🔥 本月仅剩12个名额",
            card_title: "添加微信咨询",
            card_sub: "发送'体验官'获取福利指南",
            card_copy: "复制 ID"
        },
        verify: {
            title: "验证机票或酒店后",
            subtitle: "即可获得本地人私藏攻略和会员专属福利。",
            step1: "截图机票/酒店",
            step2: "微信发送",
            step3: "获取定制福利",
            benefit1: "本地美食",
            benefit2: "K-Beauty",
            benefit3: "医院·诊所",
            benefit4: "体验·快闪"
        },
        timeline: {
            title: "会员的真实一天",
            desc: "跟着我们的会员，看看首尔完美的一天是什么样。",
            item1_title: "圣水洞网红咖啡", item1_desc: "免排队入座，享受会员专属甜点。",
            item2_title: "江南皮肤管理", item2_desc: "会员价比官网便宜40%。",
            item3_title: "隐藏韩牛店", item3_desc: "本地人私藏烤肉店，会员专属预约。",
            item4_title: "品牌快闪店", item4_desc: "跳过2小时排队，直接入场体验。",
            item5_title: "预约制Omakase", item5_desc: "会员专属通道，当天即可入座。",
            item6_title: "汉南洞隐藏酒吧", item6_desc: "会员专属入场+免费迎宾酒。",
            tag_cafe: "咖啡体验", tag_food: "美食体验", tag_popup: "快闪体验", tag_fine: "高端美食", tag_night: "夜生活"
        },
        benefits: {
            title: "你能获得这些",
            desc: "预订K-Beauty时附赠的体验福利。",
            item1_title: "高端美食", item1_desc: "韩牛Omakase、米其林级热门店。",
            item2_title: "网红咖啡探店", item2_desc: "圣水洞咖啡、伦敦贝果、Onion等。",
            item3_title: "品牌快闪/展览", item3_desc: "限时活动优先入场，跳过排队。",
            item4_title: "K-Beauty折扣", item4_desc: "皮肤管理、美发、化妆会员价。"
        },
        shortform: {
            title: "会员们的首尔Vlog",
            desc: "看看会员们的真实体验短视频。"
        },
        reviews: {
            title: "会员真实评价",
            desc: "看看真正体验过的人怎么说。",
            user1: "Sarah J.", review1: "定制行程帮我节省了很多时间。我非常喜欢圣水洞的隐藏咖啡馆！", tags1: ["咖啡", "首尔"],
            user2: "Emily C.", review2: "皮肤诊所的40%折扣太棒了。翻译也非常有帮助。", tags2: ["K-Beauty", "江南"],
            user3: "Michael L.", review3: "私人故宫游是最大的亮点。与普通旅游完全不同的体验。", tags3: ["文化", "VIP"]
        },
        contact: {
            title: "开启旅程",
            desc: "准备好扩展您的医疗业务了吗？",
            name: "姓名",
            email: "电子邮箱",
            message: "留言",
            submit: "发送留言"
        }
    }
};
