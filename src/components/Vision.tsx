"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Vision() {
    const container = useRef<HTMLDivElement>(null);
    const textRef1 = useRef<HTMLHeadingElement>(null);
    const textRef2 = useRef<HTMLHeadingElement>(null);
    const textRef3 = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        // Simple fade up on scroll
        const elements = [textRef1.current, textRef2.current, textRef3.current];

        elements.forEach((el, index) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    end: "bottom 60%",
                    scrub: false,
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        });

        // Parallax background line
        gsap.to(".vision-line", {
            scrollTrigger: {
                trigger: container.current,
                start: "top center",
                end: "bottom center",
                scrub: 1
            },
            height: "100%",
            ease: "none"
        });

    }, { scope: container });

    return (
        <section ref={container} className="relative py-32 bg-transparent border-t border-white/5">
            <div className="container mx-auto px-6 max-w-5xl relative">

                {/* Visual Line */}
                <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 hidden lg:block">
                    <div className="vision-line bg-primary-blue w-full h-0" />
                </div>

                <div id="vision-section" className="space-y-32 scroll-mt-[120px]">
                    {/* Vision 1 */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start lg:items-center">
                        <div className="lg:w-1/2 text-left lg:text-right">
                            <span className="text-primary-light-blue font-bold tracking-widest text-sm uppercase mb-4 block">Our Vision</span>
                            <h2 ref={textRef1} className="text-3xl lg:text-5xl font-black text-foreground leading-tight tracking-tight">
                                변화와 혁신을 통해<br />
                                고객과 함께 성장하는 기업
                            </h2>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="text-foreground/60 text-lg leading-relaxed font-light">
                                디에스인포시스는 끊임없는 기술 혁신과 도전 정신으로 고객의 비즈니스 가치를 극대화합니다. 변화하는 IT 환경 속에서 가장 신뢰받는 파트너로서 새로운 패러다임을 제시하며, 지속 가능한 동반 성장을 이룩합니다.
                            </p>
                        </div>
                    </div>

                    {/* Vision 2 */}
                    <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-24 items-start lg:items-center">
                        <div className="lg:w-1/2 text-left">
                            <span className="text-primary-light-blue font-bold tracking-widest text-sm uppercase mb-4 block">Core Value</span>
                            <h2 ref={textRef2} className="text-3xl lg:text-5xl font-black text-foreground leading-tight tracking-tight">
                                기술에 열정을 더해<br />
                                고객감동 서비스를 제공
                            </h2>
                        </div>
                        <div className="lg:w-1/2 text-left lg:text-right">
                            <p className="text-foreground/60 text-lg leading-relaxed font-light">
                                첨단 기술력과 풍부한 노하우를 바탕으로 최적의 솔루션을 제공합니다. 고객의 요구조건을 뛰어넘는 완벽한 서비스를 완성하기 위해 우리는 언제나 작은 디테일에도 열정을 쏟고 있습니다.
                            </p>
                        </div>
                    </div>

                    {/* Vision 3 */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start lg:items-center">
                        <div className="lg:w-1/2 text-left lg:text-right">
                            <span className="text-primary-light-blue font-bold tracking-widest text-sm uppercase mb-4 block">Future Promise</span>
                            <h2 ref={textRef3} className="text-3xl lg:text-5xl font-black text-foreground leading-tight tracking-tight">
                                최상의 가이드로<br />미래 사회를 리드합니다
                            </h2>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="text-foreground/60 text-lg leading-relaxed font-light">
                                단순한 시스템 구축을 넘어 4차 산업혁명 시대를 이끌어가는 원동력이 되겠습니다. 완벽한 안정성을 갖춘 미래 지향적인 차세대 시스템으로 새로운 디지털 문화를 창조해 나갈 것을 약속드립니다.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
