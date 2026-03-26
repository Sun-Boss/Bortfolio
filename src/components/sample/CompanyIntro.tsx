"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

export default function CompanyIntro() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(".intro-element",
            { y: 50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 75%"
                },
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
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
                    scale: 1.15,
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
        <section ref={container} id="story" className="relative py-32 bg-[#fdfbf7] overflow-hidden scroll-mt-[100px]">
            <div className="container mx-auto px-6 lg:px-12 relative text-center mb-20">
                <span className="text-orange-600 font-bold tracking-widest text-sm uppercase mb-3 block">Our Story</span>
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">지현이네 가족 이야기</h2>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative">
                {/* Visual Line Background */}
                <div className="absolute left-[24px] lg:left-1/2 top-0 bottom-0 w-[2px] bg-orange-100 hidden md:block">
                    <div className="vision-line bg-orange-500 w-full h-0" />
                </div>

                <div className="space-y-32">

                    {/* Story 1 */}
                    <div className="intro-element opacity-0 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                        <div className="lg:w-1/2 md:pl-12 lg:pl-0 order-2 lg:order-1 relative">
                            <div className="absolute -inset-4 bg-orange-100/50 rounded-full blur-3xl -z-10" />
                            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative bg-orange-50">
                                <div className="vision-img absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/sample/img/orchard-story1.png')" }} />
                            </div>
                        </div>
                        <div className="lg:w-1/2 text-left order-1 lg:order-2 md:pl-12 lg:pl-0">
                            <span className="text-orange-600 font-bold tracking-widest text-sm mb-4 block">TRADITION</span>
                            <h3 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                                3대째 이어온<br />
                                정직한 고집
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                농약 없는 건강한 땅을 일구며 지내온 시간들.<br />
                                할아버지의 거친 손에서 아버지의 땀방울로, 그리고 이제는 우리 세대로 이어지는 과수원에 대한 사랑.<br />
                                크기나 모양보다는 <strong>'건강한 맛'</strong> 하나만 고집합니다.
                            </p>
                        </div>
                    </div>

                    {/* Story 2 */}
                    <div className="intro-element opacity-0 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                        <div className="lg:w-1/2 text-left md:pl-12 lg:pl-0">
                            <span className="text-orange-600 font-bold tracking-widest text-sm mb-4 block">NATURE</span>
                            <h3 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                                자연이 선물한<br />
                                깊고 풍부한 단맛
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                일교차가 큰 골짜기에서 충분한 햇빛을 맞고 자란 과일들은 과육이 단단하고 당도가 월등히 높습니다.<br />
                                억지로 익히지 않고 자연의 시계에 맞춰 가장 적기에 수확해 <strong>자연 그대로의 달콤함</strong>을 선사합니다.
                            </p>
                        </div>
                        <div className="lg:w-1/2 md:pl-12 lg:pl-0 relative">
                            <div className="absolute -inset-4 bg-green-100/50 rounded-full blur-3xl -z-10" />
                            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative bg-green-50">
                                <div className="vision-img absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/sample/img/orchard-story2.png')" }} />
                            </div>
                        </div>
                    </div>

                    {/* Story 3 */}
                    <div className="intro-element opacity-0 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                        <div className="lg:w-1/2 md:pl-12 lg:pl-0 order-2 lg:order-1 relative">
                            <div className="absolute -inset-4 bg-yellow-100/50 rounded-full blur-3xl -z-10" />
                            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative bg-yellow-50">
                                <div className="vision-img absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/sample/img/orchard-story3.png')" }} />
                            </div>
                        </div>
                        <div className="lg:w-1/2 text-left order-1 lg:order-2 md:pl-12 lg:pl-0">
                            <span className="text-orange-600 font-bold tracking-widest text-sm mb-4 block">FRESHNESS</span>
                            <h3 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                                가지에서 식탁으로<br />
                                당일 수확, 산지 직송
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                유통 과정 없이 농장에서 직접 댁으로 보내드립니다.<br />
                                주문이 들어오면 당일 새벽 이슬을 맞고 자란 과일들만 골라 정성껏 포장합니다. <strong>가장 신선할 때</strong> 맛보실 수 있습니다.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
