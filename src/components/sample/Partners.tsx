"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const clients = [
    "국회사무처", "주택도시보증공사", "국민건강보험공단", "대법원",
    "한국도로공사", "K-water", "경찰청", "한국전력공사", "우정사업본부", "보건복지부"
];

export default function Partners() {
    const container = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Continuous scrolling marquee
        gsap.to(".marquee-inner-sample", {
            xPercent: -50,
            ease: "none",
            duration: 25,
            repeat: -1,
        });

        gsap.fromTo(".partners-header",
            { y: 30, opacity: 0 },
            {
                scrollTrigger: { trigger: container.current, start: "top 80%" },
                y: 0, opacity: 1, duration: 0.8
            }
        );
    }, { scope: container });

    return (
        <section ref={container} className="py-24 bg-white border-t border-gray-100 overflow-hidden relative">
            <div className="container mx-auto px-6 lg:px-12 mb-12 text-center partners-header relative z-20">
                <h3 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Trusted By</h3>
                <h2 className="text-3xl lg:text-4xl font-black text-gray-900 drop-shadow-sm mb-4">주요 고객사 및 파트너</h2>
                <p className="text-gray-500 font-medium">수많은 공공기관 및 기업이 디에스인포시스와 함께합니다.</p>
            </div>

            <div className="relative w-full flex overflow-hidden py-4">
                {/* Fade edges to blend with the white background */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div ref={marqueeRef} className="marquee-inner-sample flex w-max gap-8 items-center pr-8">
                    {/* Double the array for seamless endless loop */}
                    {[...clients, ...clients].map((client, i) => (
                        <div key={i} className="flex-none px-10 py-5 bg-gray-50 border border-gray-100 rounded-xl hover:border-blue-200 hover:bg-blue-50 hover:shadow-sm transition-all duration-300">
                            <span className="text-xl font-bold text-gray-700 whitespace-nowrap">{client}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
