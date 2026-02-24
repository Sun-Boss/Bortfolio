"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export default function Problem() {
    const container = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        const cards = gsap.utils.toArray(itemsRef.current) as HTMLElement[];

        // Animate cards fading in and sliding up when scrolling
        cards.forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%", // When the top of card hits 85% of viewport
                    toggleActions: "play none none reverse",
                },
                y: 80,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                delay: i * 0.1 // Slight stagger effect if they appear together
            });
        });

        // Animate the line connecting them
        gsap.from(".timeline-line", {
            scrollTrigger: {
                trigger: ".timeline-container",
                start: "top 80%",
                end: "bottom 30%",
                scrub: 1, // Smoothly link to scroll position
            },
            scaleY: 0,
            transformOrigin: "top center",
            ease: "none"
        });
    }, { scope: container });

    const problems = [
        {
            title: "레거시 시스템의 한계",
            desc: "오래된 인프라로 인해 비즈니스 변화에 민첩하게 대응하기 어렵고 유지보수 비용이 기하급수적으로 증가합니다.",
            icon: "🖥️"
        },
        {
            title: "데이터의 사일로화",
            desc: "부서별로 분산된 데이터는 통합적인 인사이트 도출을 막고 신속한 의사결정을 방해합니다.",
            icon: "🔒"
        },
        {
            title: "보안 위협의 고도화",
            desc: "날로 교묘해지는 사이버 공격에 대한 체계적인 대응 전략 부재로 핵심 자산이 위험에 노출되어 있습니다.",
            icon: "🛡️"
        }
    ];

    return (
        <section ref={container} className="relative py-32 bg-background z-10">
            <div className="container px-4 mx-auto max-w-6xl">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta to-neon-cyan">
                            현대의 비즈니스가 직면한 과제
                        </span>
                    </h2>
                    <p className="text-foreground/70 text-lg md:text-xl">
                        디지털 혁신의 과정에서 수많은 기업들이 겪고 있는 핵심 문제들
                    </p>
                </div>

                <div className="timeline-container relative grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
                    {/* Background decoration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent timeline-line hidden md:block" />

                    {problems.map((prob, i) => (
                        <div
                            key={i}
                            ref={(el) => { itemsRef.current[i] = el; }}
                            className="relative p-8 rounded-2xl bg-foreground/[0.03] border border-foreground/10 hover:border-neon-cyan/50 transition-colors duration-500 overflow-hidden group"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="w-16 h-16 rounded-xl bg-background/50 border border-neon-cyan/30 flex items-center justify-center text-3xl mb-6 shadow-[0_0_15px_rgba(0,243,255,0.1)]">
                                {prob.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground">{prob.title}</h3>
                            <p className="text-foreground/60 leading-relaxed font-light">
                                {prob.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
