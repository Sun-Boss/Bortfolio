"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function CompanyIntro() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(".intro-element",
            { y: 40, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 75%"
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            }
        );

        // Sub-animation for images zooming in slowly on scroll
        gsap.utils.toArray<HTMLElement>(".vision-img").forEach((img) => {
            gsap.fromTo(img,
                { scale: 1 },
                {
                    scrollTrigger: {
                        trigger: img,
                        start: "top 85%",
                        end: "bottom 20%",
                        scrub: 1.5 // Smooth connection to scroll position
                    },
                    scale: 1.1,
                    ease: "none"
                }
            );
        });

        gsap.fromTo(".vision-line",
            { height: "0%" },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1
                },
                height: "100%",
                ease: "none"
            }
        );
    }, { scope: container });

    return (
        <section ref={container} id="vision" className="relative py-24 bg-white border-t border-gray-100 overflow-hidden scroll-mt-[100px]">
            <div className="container mx-auto px-6 lg:px-12 relative">

                {/* Visual Line Background */}
                <div className="absolute left-[24px] lg:left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 hidden md:block">
                    <div className="vision-line bg-blue-600 w-full h-0" />
                </div>

                <div className="space-y-24">

                    {/* Vision 1 */}
                    <div className="intro-element opacity-0 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                        <div className="lg:w-1/2 md:pl-12 lg:pl-0 order-2 lg:order-1">
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-gray-100">
                                <div className="vision-img absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 text-left order-1 lg:order-2 md:pl-12 lg:pl-0">
                            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4 block">Our Vision</span>
                            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                                변화와 혁신을 통해<br />
                                고객과 함께 성장하는 기업
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                디에스인포시스는 끊임없는 기술 혁신과 도전 정신으로 고객의 비즈니스 가치를<br />극대화합니다. 변화하는 IT 환경 속에서 가장 신뢰받는 파트너로서 새로운 패러다임을<br />제시하며, 지속 가능한 동반 성장을 이룩합니다.
                            </p>
                        </div>
                    </div>

                    {/* Vision 2 */}
                    <div className="intro-element opacity-0 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                        <div className="lg:w-1/2 text-left md:pl-12 lg:pl-0">
                            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4 block">Core Value</span>
                            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                                기술에 열정을 더해<br />
                                고객감동 서비스를 제공
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                첨단 기술력과 풍부한 노하우를 바탕으로 최적의 솔루션을 제공합니다.<br />고객의 요구조건을 뛰어넘는 완벽한 서비스를 완성하기 위해 우리는 언제나<br />작은 디테일에도 열정을 쏟고 있습니다.
                            </p>
                        </div>
                        <div className="lg:w-1/2 md:pl-12 lg:pl-0">
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-gray-100">
                                <div className="vision-img absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                            </div>
                        </div>
                    </div>

                    {/* Vision 3 */}
                    <div className="intro-element opacity-0 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                        <div className="lg:w-1/2 md:pl-12 lg:pl-0 order-2 lg:order-1">
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-gray-100">
                                <div className="vision-img absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 text-left order-1 lg:order-2 md:pl-12 lg:pl-0">
                            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4 block">Future Promise</span>
                            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                                최상의 가이드로<br />미래 사회를 리드합니다
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                단순한 시스템 구축을 넘어 4차 산업혁명 시대를 이끌어가는 원동력이 되겠습니다.<br />완벽한 안정성을 갖춘 미래 지향적인 차세대 시스템으로 새로운 디지털 문화를<br />창조해 나갈 것을 약속드립니다.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
