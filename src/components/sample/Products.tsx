"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { Apple, Leaf, Sun, Droplets } from "lucide-react";

const products = [
    {
        name: "청송 꿀사과",
        season: "9월 ~ 11월",
        desc: "맑은 공기를 품고 자라 아삭하고\n달콤한 과즙이 꽉 찬 프리미엄 꿀사과",
        features: ["15 Brix 이상 당도 보장", "껍질째 먹는 안심 사과", "산지 당일 수확직송"],
        icon: Apple,
        color: "text-red-500",
        bg: "bg-red-50",
        border: "hover:border-red-200"
    },
    {
        name: "나주 신고배",
        season: "9월 ~ 10월",
        desc: "풍부한 과즙과 시원하고\n아삭한 식감이 일품인 최상급 배",
        features: ["가족 명절 선물 강력추천", "부드러운 과육", "최상품 엄선 포장"],
        icon: Leaf,
        color: "text-yellow-600",
        bg: "bg-yellow-50",
        border: "hover:border-yellow-200"
    },
    {
        name: "햇살 머금은 복숭아",
        season: "7월 ~ 8월",
        desc: "한여름의 무더위를 잊게 해줄\n달콤하고 향긋한 제철 복숭아",
        features: ["입안 가득 번지는 향기", "부드러운 백도/단단한 황도", "상처 없는 꼼꼼한 포장"],
        icon: Sun,
        color: "text-pink-500",
        bg: "bg-pink-50",
        border: "hover:border-pink-200"
    },
    {
        name: "프리미엄 샤인머스캣",
        season: "8월 ~ 10월",
        desc: "망고 향이 가득, 톡 터지는\n상큼함이 매력적인 씨 없는 포도",
        features: ["망고 같은 짙은 단맛", "알이 굵은 최상급 상품", "씨가 없어 먹기 편안함"],
        icon: Droplets,
        color: "text-green-500",
        bg: "bg-green-50",
        border: "hover:border-green-200"
    }
];

export default function Products() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(".product-card",
            { y: 50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%"
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            }
        );
    }, { scope: container });

    return (
        <section ref={container} id="products" className="py-24 bg-white text-gray-900 scroll-mt-[100px]">
            <div className="container mx-auto px-6 lg:px-12">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-orange-600 font-bold tracking-widest text-sm uppercase mb-3 block">Seasonal Fruits</span>
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-gray-900">지현이네 제철 과일</h2>
                    <p className="text-gray-600 text-lg font-medium">자연의 시간에 맞춰 가장 맛있게 익었을 때 수확합니다.<br />건강하고 달콤한 제철 과일들을 만나보세요.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((p, i) => {
                        const Icon = p.icon;
                        return (
                            <div key={i} className={`product-card opacity-0 group bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] ${p.border} transition-all duration-300 flex flex-col h-full hover:-translate-y-2`}>

                                <div className={`w-16 h-16 ${p.bg} ${p.color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                    <Icon size={32} strokeWidth={2.5} />
                                </div>

                                <div className="mb-4">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${p.color} ${p.bg} mb-3`}>
                                        수확기: {p.season}
                                    </span>
                                    <h3 className="text-2xl font-bold text-gray-900">{p.name}</h3>
                                </div>
                                
                                <p className="text-base text-gray-500 mb-8 flex-grow leading-relaxed whitespace-pre-line">{p.desc}</p>

                                <ul className="space-y-3 border-t border-gray-100 pt-6 mt-auto">
                                    {p.features.map((f, idx) => (
                                        <li key={idx} className="flex items-start text-sm font-medium text-gray-600">
                                            <svg className={`w-5 h-5 mr-2 ${p.color} shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="leading-snug">{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`mt-8 w-full py-3 rounded-xl font-bold bg-gray-50 text-gray-700 group-hover:${p.bg} group-hover:${p.color} transition-colors border border-gray-100`}>
                                    자세히 보기
                                </button>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
