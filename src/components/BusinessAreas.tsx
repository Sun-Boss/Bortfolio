"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const areas = [
    { title: "SI사업", subtitle: "SI Business" },
    { title: "보안솔루션", subtitle: "Security Business" },
    { title: "IoT솔루션", subtitle: "IoT Solution" },
    { title: "금융솔루션", subtitle: "Finance Solution" },
    { title: "모바일 컴퓨터", subtitle: "Mobile Computers" },
];

export default function BusinessAreas() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".area-card", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 85%",
            },
            y: 40,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out"
        });
    }, { scope: container });

    return (
        <section ref={container} id="business-areas" className="relative py-24 bg-transparent overflow-hidden border-y border-white/5 scroll-mt-[120px]">
            {/* Background glowing effects for 3D feel */}
            <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary-blue/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-brand-yellow/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-black text-foreground mb-4">사업 영역</h2>
                    <p className="text-foreground/60 font-light">디에스인포시스의 핵심 사업 역량을 소개합니다</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {areas.map((area, index) => (
                        <div
                            key={index}
                            className="area-card group relative flex flex-col items-center justify-center p-8 lg:p-10 text-center cursor-pointer 
                                bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl
                                hover:bg-white/10 hover:border-primary-light-blue/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] 
                                hover:-translate-y-2 transition-colors duration-500"
                        >
                            {/* Inner glow on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Accent line on hover */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-primary-light-blue to-transparent group-hover:w-3/4 transition-colors duration-500" />

                            <h3 className="text-xl lg:text-xl font-bold text-white mb-2 transition-colors relative z-10 drop-shadow-md">
                                {area.title}
                            </h3>
                            <p className="text-xs text-white/70 font-semibold font-mono tracking-wider uppercase relative z-10 group-hover:text-primary-light-blue transition-colors drop-shadow">
                                {area.subtitle}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
