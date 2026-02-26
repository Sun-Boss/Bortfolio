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
        gsap.to(".marquee-inner", {
            xPercent: -50,
            ease: "none",
            duration: 20,
            repeat: -1,
        });

        gsap.from(".partners-header", {
            scrollTrigger: { trigger: container.current, start: "top 80%" },
            y: 30, opacity: 0, duration: 0.8
        });
    }, { scope: container });

    return (
        <section ref={container} id="partners" className="py-24 bg-transparent border-y border-white/5 overflow-hidden relative scroll-mt-[120px]">
            <div className="container mx-auto px-4 mb-12 text-center partners-header relative z-20">
                <h3 className="text-sm font-bold tracking-[0.2em] text-primary-light-blue uppercase mb-2">Trusted By</h3>
                <h2 className="text-3xl font-black text-foreground drop-shadow-sm">주요 고객사 및 파트너</h2>
            </div>

            <div className="relative w-full flex overflow-hidden">
                {/* Fade edges to blend with the global background image */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />

                <div ref={marqueeRef} className="marquee-inner flex w-[200%] gap-8 items-center px-4">
                    {/* Double the array for seamless endless loop */}
                    {[...clients, ...clients].map((client, i) => (
                        <div key={i} className="flex-none px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:border-primary-blue/50 hover:bg-white/10 transition-colors">
                            <span className="text-xl font-bold text-white whitespace-nowrap">{client}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
