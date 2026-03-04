"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const clients = [
    "국회사무처", "주택도시보증공사", "국민건강보험공단", "대법원",
    "한국도로공사", "K-water", "경찰청", "한국전력공사",
    "우정사업본부", "보건복지부"
];

export default function Partners() {
    const container = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(".partners-header",
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: { trigger: container.current, start: "top 80%" },
                    y: 0, opacity: 1, duration: 0.8
                }
            );

            // Apple-style Blur Reveal Animation
            if (gridRef.current) {
                const cards = gsap.utils.toArray<HTMLElement>(gridRef.current.children);

                // Set initial states to be fully blurred out
                gsap.set(cards, {
                    opacity: 0,
                    filter: "blur(20px)",
                    scale: 0.9,
                    y: 40
                });

                // Clear the blur as they scroll in
                gsap.to(cards, {
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 65%",
                    },
                    opacity: 1,
                    filter: "blur(0px)",
                    scale: 1,
                    y: 0,
                    duration: 1.2,
                    stagger: 0.1,
                    ease: "power3.out",
                });
            }
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section id="partners" ref={container} className="py-24 bg-white overflow-hidden relative border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center partners-header mb-20">
                    <span className="text-gray-400 font-bold tracking-widest text-sm uppercase mb-4 block">Trusted By</span>
                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-4">주요 파트너</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">수많은 공공기관 및 기업이 신뢰하는 파트너입니다.</p>
                </div>

                <div
                    ref={gridRef}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 max-w-6xl mx-auto"
                >
                    {clients.map((client, i) => (
                        <div
                            key={i}
                            className="group relative flex flex-col items-center justify-center text-center cursor-pointer"
                        >
                            {/* Line separator at top of each item for a minimal look */}
                            <div className="w-12 h-[1px] bg-gray-200 mb-6 group-hover:bg-[#00A651] transition-colors duration-500" />

                            <span className="text-lg lg:text-xl font-medium text-gray-400 group-hover:text-gray-900 transition-colors duration-500">
                                {client}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
