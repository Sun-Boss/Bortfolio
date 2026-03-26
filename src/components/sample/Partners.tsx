"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { Star } from "lucide-react";

const reviews = [
    { text: "사과가 진짜 달고 아삭해요! 매년 시켜먹습니다.", author: "김*민 고객님" },
    { text: "부모님 명절 선물로 드렸는데 너무 좋아하시네요. 강력 추천!", author: "박*영 고객님" },
    { text: "포장도 꼼꼼하고 과일 상태가 흠잡을데 없이 최상급이에요.", author: "이*호 고객님" },
    { text: "복숭아 향이 박스 뜯기도 전부터 납니다. 최고입니당~", author: "정*희 고객님" },
    { text: "매번 흠집 하나 없는 예쁜 사과로만 와서 받을 때마다 기분이 좋아요.", author: "최*진 고객님" },
    { text: "과즙이 뚝뚝 떨어져요! 진짜 이렇게 맛있는 배는 처음 먹어봐요.", author: "강*우 고객님" }
];

export default function Partners() {
    const container = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Continuous scrolling marquee
        gsap.to(".marquee-inner-sample", {
            xPercent: -50,
            ease: "none",
            duration: 35,
            repeat: -1,
        });

        gsap.fromTo(".reviews-header",
            { y: 30, opacity: 0 },
            {
                scrollTrigger: { trigger: container.current, start: "top 80%" },
                y: 0, opacity: 1, duration: 0.8
            }
        );
    }, { scope: container });

    return (
        <section ref={container} id="reviews" className="py-24 bg-[#fcfaf5] border-t border-orange-50 overflow-hidden relative scroll-mt-[100px]">
            <div className="container mx-auto px-6 lg:px-12 mb-16 text-center reviews-header relative z-20">
                <span className="text-orange-600 font-bold tracking-widest text-sm uppercase mb-3 block">Customer Reviews</span>
                <h2 className="text-3xl lg:text-5xl font-black text-gray-900 drop-shadow-sm mb-6 tracking-tight">생생한 고객 후기</h2>
                <p className="text-gray-600 text-lg font-medium">지현이네 과수원을 경험하신 많은 분들의 달콤하고 따뜻한 이야기입니다.</p>
            </div>

            <div className="relative w-full flex overflow-hidden py-4">
                {/* Fade edges to blend with the background */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fcfaf5] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fcfaf5] to-transparent z-10 pointer-events-none" />

                <div ref={marqueeRef} className="marquee-inner-sample flex w-max gap-6 items-center pr-6">
                    {/* Double the array for seamless endless loop */}
                    {[...reviews, ...reviews].map((review, i) => (
                        <div key={i} className="flex-none w-[340px] p-8 bg-white border border-orange-100/50 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
                            <div className="flex gap-1 mb-4 text-orange-400">
                                <Star size={18} fill="currentColor" strokeWidth={0} />
                                <Star size={18} fill="currentColor" strokeWidth={0} />
                                <Star size={18} fill="currentColor" strokeWidth={0} />
                                <Star size={18} fill="currentColor" strokeWidth={0} />
                                <Star size={18} fill="currentColor" strokeWidth={0} />
                            </div>
                            <p className="text-gray-800 font-semibold text-lg leading-relaxed mb-6 break-keep">
                                "{review.text}"
                            </p>
                            <span className="text-sm font-bold text-gray-400 block text-right">{review.author}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
