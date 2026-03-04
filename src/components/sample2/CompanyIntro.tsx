"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function CompanyIntro() {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".intro-item",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 75%",
                    }
                }
            );
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section id="company" ref={container} className="py-24 bg-white border-t border-gray-100 overflow-hidden relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16 intro-item">
                    <span className="text-[#00A651] font-bold tracking-widest text-sm uppercase mb-4 block">Company Introduction</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
                        변화와 혁신을 통해<br />고객과 함께 성장하는 기업
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                        디에스인포시스는 끊임없는 기술 혁신과 도전 정신으로 고객의 비즈니스 가치를 극대화합니다. 변화하는 IT 환경 속에서 가장 신뢰받는 파트너로서 새로운 패러다임을 제시하며, 지속 가능한 동반 성장을 이룩합니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                    <div className="intro-item flex flex-col items-start bg-gray-50 p-10 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                        <span className="text-[#00A651] font-bold tracking-widest text-sm uppercase mb-4 block">Core Value</span>
                        <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
                            기술에 열정을 더해<br />고객감동 서비스를 제공
                        </h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            첨단 기술력과 풍부한 노하우를 바탕으로 최적의 솔루션을 제공합니다. 고객의 요구조건을 뛰어넘는 완벽한 서비스를 완성하기 위해 우리는 언제나 작은 디테일에도 열정을 쏟고 있습니다.
                        </p>
                    </div>

                    <div className="intro-item flex flex-col items-start bg-[#00A651] text-white p-10 rounded-2xl shadow-lg relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000" />
                        <div className="relative z-10">
                            <span className="text-green-100 font-bold tracking-widest text-sm uppercase mb-4 block">Future Promise</span>
                            <h3 className="text-2xl font-bold leading-tight mb-4">
                                최상의 가이드로<br />미래 사회를 리드합니다
                            </h3>
                            <p className="text-green-50 leading-relaxed font-medium">
                                단순한 시스템 구축을 넘어 4차 산업혁명 시대를 이끌어가는 원동력이 되겠습니다. 완벽한 안정성을 갖춘 미래 지향적인 차세대 시스템으로 새로운 디지털 문화를 창조해 나갈 것을 약속드립니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
