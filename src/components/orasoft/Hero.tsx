"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".hero-element", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });
    }, { scope: container });

    return (
        <section ref={container} id="about" className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 bg-transparent text-gray-900 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">

                <div className="lg:w-1/2 flex flex-col items-start text-left">
                    <span className="hero-element inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6 tracking-wide">
                        IT 서비스 전문기업
                    </span>
                    <h1 className="hero-element text-4xl lg:text-6xl font-black leading-[1.15] mb-8 tracking-tight text-gray-900">
                        고객에게<br />새로운 가치를 드리는 <br />
                        <span className="text-blue-600">동반 성장 파트너</span>
                    </h1>
                    <p className="hero-element text-lg lg:text-xl text-gray-600 font-medium leading-relaxed mb-10 max-w-xl">
                        디에스인포시스(주)는 끊임없는 기술 혁신과 도전 정신으로<br />고객의 비즈니스 가치를 극대화합니다.<br />SI, 보안, IoT, 금융 전문 최적화 솔루션을 제공하며<br />변화와 혁신을 이끌어갑니다.
                    </p>
                    <div className="hero-element flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all shadow-lg hover:shadow-blue-600/30">
                            제안 및 문의하기
                        </button>
                        <button className="px-8 py-4 bg-white border border-gray-300 hover:border-gray-400 text-gray-800 rounded-lg font-bold transition-all shadow-sm">
                            회사소개 보기 →
                        </button>
                    </div>
                </div>

                <div className="lg:w-1/2 relative hero-element">
                    <div className="absolute inset-0 bg-blue-50 rounded-3xl transform rotate-3 scale-105 -z-10" />
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-white border border-gray-100 flex items-center justify-center p-8">
                        {/* Placeholder for an actual CAD/Blueprint interface image */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent" />
                        <div className="relative z-10 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-white max-w-xs shadow-xl rotate-[-2deg]">
                            <h3 className="text-blue-600 font-bold mb-2">미래지향적 시스템</h3>
                            <p className="text-sm text-gray-600">4차 산업혁명 시대를 이끌어가는<br />원동력으로 완벽한 안정성을 갖춘<br />디지털 문화를 창조합니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
