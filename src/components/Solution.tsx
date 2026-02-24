"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Solution() {
    const container = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        // Parallax effect for cards
        cardsRef.current.forEach((card, i) => {
            if (!card) return;

            gsap.fromTo(card,
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "back.out(1.7)",
                }
            );
        });
    }, { scope: container });

    const solutions = [
        {
            title: "클라우드 네이티브 전환",
            desc: "확장성과 안정성을 보장하는 클라우드 환경으로의 유연한 마이그레이션을 지원합니다. 마이크로서비스 아키텍처(MSA)를 통해 비즈니스 민첩성을 극대화하세요.",
            color: "cyan",
            tag: "Cloud"
        },
        {
            title: "데이터 기반 의사결정 체계",
            desc: "AI 및 빅데이터 분석 기술을 통합하여 흩어진 데이터를 유의미한 인사이트로 변환합니다. 빠르고 정확한 데이터 파이프라인을 구축해 드립니다.",
            color: "magenta",
            tag: "Data"
        },
        {
            title: "제로 트러스트 보안 인프라",
            desc: "모든 접근을 지속적으로 검증하는 차세대 보안 모델을 도입하여 내부와 외부의 복합적인 보안 위협으로부터 기업의 핵심 데이터를 강력하게 보호합니다.",
            color: "blue",
            tag: "Security"
        }
    ];

    return (
        <section ref={container} className="relative py-32 bg-background overflow-hidden z-20">
            {/* Dynamic Background Element */}
            <div className="absolute top-0 right-[-10vw] w-[40vw] h-[40vw] rounded-full bg-neon-blue/10 blur-[150px] -z-10 mix-blend-screen pointer-events-none" />

            <div className="container px-4 mx-auto max-w-6xl">
                <div className="w-full flex flex-col md:flex-row items-end justify-between mb-24 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                            디에스인포시스만의<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-magenta">
                                미래지향적 솔루션
                            </span>
                        </h2>
                        <p className="text-foreground/70 text-lg">
                            고객의 성공을 앞당기는 혁신적인 기술력과 노하우를 제공합니다.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((sol, i) => (
                        <div
                            key={i}
                            ref={(el) => { cardsRef.current[i] = el; }}
                            className="group relative h-full bg-foreground/[0.02] border border-foreground/5 rounded-3xl p-8 hover:bg-foreground/[0.04] transition-all duration-500 overflow-hidden flex flex-col"
                        >
                            {/* Animated Glow Border on Hover */}
                            <div className={`absolute inset-0 border-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out 
                ${sol.color === 'cyan' ? 'border-neon-cyan/50 shadow-[0_0_20px_rgba(0,243,255,0.2)_inset]' :
                                    sol.color === 'magenta' ? 'border-neon-magenta/50 shadow-[0_0_20px_rgba(255,0,255,0.2)_inset]' :
                                        'border-neon-blue/50 shadow-[0_0_20px_rgba(0,60,255,0.2)_inset]'}`}
                            />

                            <div className="relative z-10 mb-auto">
                                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-6 border
                  ${sol.color === 'cyan' ? 'border-neon-cyan/50 text-neon-cyan bg-neon-cyan/5' :
                                        sol.color === 'magenta' ? 'border-neon-magenta/50 text-neon-magenta bg-neon-magenta/5' :
                                            'border-neon-blue/50 text-neon-blue bg-neon-blue/5'}`
                                }>
                                    {sol.tag}
                                </span>

                                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-foreground/70 transition-all">
                                    {sol.title}
                                </h3>

                                <p className="text-foreground/60 font-light leading-relaxed">
                                    {sol.desc}
                                </p>
                            </div>

                            {/* Decorative graphic in card */}
                            <div className={`mt-12 h-1 w-full rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-300
                ${sol.color === 'cyan' ? 'bg-gradient-to-r from-neon-cyan to-transparent' :
                                    sol.color === 'magenta' ? 'bg-gradient-to-r from-neon-magenta to-transparent' :
                                        'bg-gradient-to-r from-neon-blue to-transparent'}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
