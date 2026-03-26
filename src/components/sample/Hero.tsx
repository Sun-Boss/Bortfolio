"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".hero-element", {
            y: 40,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out"
        });

    }, { scope: container });

    return (
        <section ref={container} id="home" className="relative min-h-screen flex items-center pt-20 bg-[#fdfbf7] overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Image of fresh apples in an orchard */}
                <div className="hero-bg absolute inset-0 bg-cover bg-center opacity-100" style={{ backgroundImage: "url('/sample/img/orchard-hero.png')" }} />
                <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf7] via-transparent to-transparent" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center">

                <div className="lg:w-3/5 flex flex-col items-start text-left pt-20 pb-32">
                    <span className="hero-element inline-block py-1.5 px-4 rounded-full bg-orange-100 text-orange-600 border border-orange-200 text-sm font-bold mb-6 tracking-wider">
                        PREMIUM FRESH FRUITS
                    </span>
                    <h1 className="hero-element text-5xl lg:text-7xl font-black leading-[1.2] mb-8 tracking-tight text-gray-900 drop-shadow-sm">
                        갓 딴 신선함을<br />문 앞까지<br />
                        <span className="text-orange-500">지현이네 과수원</span>
                    </h1>
                    <p className="hero-element text-lg lg:text-2xl text-gray-700 font-medium leading-relaxed mb-12 max-w-2xl drop-shadow-sm">
                        맑은 공기와 따스한 햇살 아래서<br />
                        3대째 정성껏 키워낸 달콤하고 건강한 제철 과일.<br />
                        자연의 맛을 그대로 전해드립니다.
                    </p>
                    <div className="hero-element flex flex-col sm:flex-row gap-5">
                        <a href="#products" className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-lg transition-all shadow-[0_4px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_8px_30px_rgba(249,115,22,0.5)] text-center">
                            제철 과일 만나보기
                        </a>
                        <a href="#story" className="px-8 py-4 bg-white/60 backdrop-blur-md border border-gray-200 hover:bg-white/90 text-gray-800 hover:text-orange-600 rounded-full font-bold text-lg transition-all text-center">
                            우리 가족 이야기
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70 animate-bounce">
                <span className="text-xs tracking-widest uppercase font-semibold text-gray-500">Scroll</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg>
            </div>
        </section>
    );
}
