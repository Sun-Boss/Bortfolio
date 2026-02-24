"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function CTA() {
    const container = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        // Parallax background effect
        gsap.to(".cta-bg", {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

        // Content reveal
        gsap.from(textRef.current, {
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
            },
            scale: 0.9,
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out"
        });
    }, { scope: container });

    return (
        <section
            ref={container}
            className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-background"
        >
            {/* Parallax Background Glow Layer */}
            <div className="cta-bg absolute inset-[-20%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.05)_0%,rgba(0,0,0,0)_50%)] z-0 pointer-events-none" />
            <div className="cta-bg absolute inset-[-20%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_20%_80%,rgba(255,0,255,0.05)_0%,rgba(0,0,0,0)_50%)] z-0 pointer-events-none delay-100" />

            <div className="container px-4 mx-auto text-center relative z-10">
                <div ref={textRef} className="max-w-4xl mx-auto p-12 rounded-3xl border border-neon-cyan/20 bg-foreground/[0.02] backdrop-blur-sm shadow-[0_0_50px_rgba(0,243,255,0.05)]">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                        미래를 향한 다음 단계,
                        <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-magenta text-glow-cyan">
                            디에스인포시스와 함께하세요
                        </span>
                    </h2>
                    <p className="text-xl text-foreground/80 font-light mb-12">
                        업계를 선도하는 IT 솔루션으로 귀사의 비즈니스 한계를 뛰어넘으십시오.
                    </p>
                    <button className="px-10 py-5 rounded-full bg-gradient-neon text-white font-bold text-xl hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,0,255,0.4)] hover:shadow-[0_0_40px_rgba(255,0,255,0.7)] flex items-center justify-center gap-3 mx-auto">
                        프로젝트 문의하기
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
