"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const businesses = [
    {
        title: "SI사업",
        description: "최적화된 시스템 통합 및 구축을 통한 IT 인프라 패러다임 제시",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "보안솔루션",
        description: "기업의 안전한 디지털 자산을 지키는 최첨단 보안 인프라 제공",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "IoT솔루션",
        description: "사물인터넷 기반 초연결 사회를 선도하는 스마트 솔루션",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "금융솔루션",
        description: "안정성과 신뢰성을 바탕으로 한 핀테크 및 차세대 금융 시스템",
        image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "모바일 컴퓨터",
        description: "언제 어디서나 접근 가능한 스마트 모바일 워크스페이스 구축",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop"
    }
];

export default function BusinessAreas() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".section-title",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: ".section-header",
                        start: "top 80%",
                    }
                }
            );

            cardsRef.current.forEach((card, index) => {
                if (!card) return;
                gsap.fromTo(
                    card,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: index * 0.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 70%",
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="business" ref={sectionRef} className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="section-header text-center mb-16">
                    <h2 className="section-title text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Our Business</h2>
                    <p className="section-title text-gray-600 max-w-2xl mx-auto">
                        디에스인포시스는 급변하는 IT 환경 속에서 최고의 기술력으로 고객의 성공적인 비즈니스를 지원합니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {businesses.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            className="group relative h-[400px] overflow-hidden rounded-xl"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                <h3 className="text-2xl font-bold mb-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                    {item.title}
                                </h3>
                                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-6 line-clamp-3">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
