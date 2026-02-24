"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".hero-text", {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
        });

    }, { scope: container });

    return (
        <section
            ref={container}
            className="relative z-0 min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            <div className="container px-4 mx-auto text-center z-10 relative">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8 leading-tight drop-shadow-lg text-white">
                    <span className="hero-text block opacity-90 mb-2 font-light">
                        고객에게 새로운 가치를 드리는
                    </span>
                    <span className="hero-text block mt-2">
                        IT 서비스 전문기업
                    </span>
                </h1>

                <div className="hero-text mt-12 flex flex-col items-center gap-10">
                    <button className="px-10 py-3.5 border border-white/50 text-white font-medium text-[15px] hover:bg-primary-blue hover:border-primary-blue hover:text-white transition-all duration-300 backdrop-blur-sm">
                        자세히 보기
                    </button>
                    {/* Slider dots indicator */}
                    <div className="flex gap-2.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-white shadow-sm"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-white/40 cursor-pointer hover:bg-white/70 transition-colors"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-white/40 cursor-pointer hover:bg-white/70 transition-colors"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
