"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const products = [
    {
        name: "SI사업",
        desc: "최적화된 시스템 통합 및 구축을 통한 IT 인프라 패러다임 제시",
        features: ["시스템 통합", "IT 인프라 구축", "맞춤형 시스템 설계"],
        icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
    },
    {
        name: "보안솔루션",
        desc: "기업의 안전한 디지털 자산을\n지키는 최첨단 보안 인프라 제공",
        features: ["네트워크 보안", "엔드포인트 보안", "보안 컨설팅"],
        icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    },
    {
        name: "IoT솔루션",
        desc: "사물인터넷 기반 초연결 사회를 선도하는 스마트 솔루션",
        features: ["스마트 팩토리", "디바이스 연동", "데이터 모니터링"],
        icon: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.3 1.5 1.5 2.5"
    },
    {
        name: "금융솔루션",
        desc: "안정성과 신뢰성을 바탕으로 한 핀테크 및 차세대 금융 시스템",
        features: ["차세대 금융", "결제 시스템", "핀테크 인프라"],
        icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
    },
    {
        name: "모바일 컴퓨터",
        desc: "언제 어디서나 접근 가능한\n스마트 모바일 워크스페이스\n구축",
        features: ["모바일 워크", "PDA 시스템", "산업용 디바이스"],
        icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    }
];

export default function Products() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(".product-card",
            { y: 40, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%"
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            }
        );
    }, { scope: container });

    return (
        <section ref={container} id="products" className="py-24 bg-gray-50 text-gray-900 border-t border-gray-100 scroll-mt-[100px]">
            <div className="container mx-auto px-6 lg:px-12">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-3 block">Business Areas</span>
                    <h2 className="text-3xl md:text-4xl font-black mb-4">디에스인포시스의<br />다양한 사업 영역을 확인해보세요.</h2>
                    <p className="text-gray-500 font-medium">귀하의 비즈니스에 가장 적합한 IT 파트너를 선택하세요.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {products.map((p, i) => (
                        <div key={i} className="product-card opacity-0 group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col h-full hover:-translate-y-1">

                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d={p.icon} />
                                </svg>
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-gray-900">{p.name}</h3>
                            <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed whitespace-pre-line">{p.desc}</p>

                            <ul className="space-y-2 border-t border-gray-100 pt-6 mt-auto">
                                {p.features.map((f, idx) => (
                                    <li key={idx} className="flex items-center text-sm font-medium text-gray-600">
                                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
