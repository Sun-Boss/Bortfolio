"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Link from "next/link";

const notices = [
    {
        title: '국회사무처 "차세대 e의안시스템 구축 사업(장비도입)" 계약 체결',
        category: "국회 국회사..",
        date: "2024-12-26"
    },
    {
        title: '주택도시보증공사 "디지털 혁신을 위한 차세대 정보시스템 구축 사업" 계약 체결',
        category: "주택도시보..",
        date: "2024-12-13"
    },
    {
        title: '국회사무처 "국회정보시스템 통합유지관리 및 위탁운영 3개년 사업" 계약 체결',
        category: "국회 국회사..",
        date: "2024-06-25"
    }
];

export default function NoticeSection() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".notice-header", {
            scrollTrigger: { trigger: container.current, start: "top 85%" },
            y: 30, opacity: 0, duration: 0.6,
        });

        gsap.from(".notice-card", {
            scrollTrigger: { trigger: container.current, start: "top 80%" },
            y: 30, opacity: 0, duration: 0.6, stagger: 0.1,
        });
    }, { scope: container });

    return (
        <section ref={container} className="py-24 relative bg-transparent">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="notice-header flex justify-between items-center mb-10 pb-4 border-b-2 border-white/10">
                    <h2 className="text-3xl font-black text-foreground flex items-center gap-3">
                        Notice
                    </h2>
                    <Link href="#" className="px-5 py-2 bg-primary-blue hover:bg-primary-light-blue text-white font-medium text-sm transition-colors rounded-sm shadow-sm">
                        자세히보기
                    </Link>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {notices.map((notice, idx) => (
                        <div
                            key={idx}
                            className="notice-card bg-[#111111] p-8 border border-white/10 shadow-sm hover:border-primary-blue/50 hover:bg-[#1a1a1a] transition-colors duration-300 cursor-pointer flex flex-col justify-between min-h-[220px] group rounded-xl"
                        >
                            <div>
                                <h3 className="text-[16px] font-bold leading-relaxed text-foreground group-hover:text-primary-light-blue transition-colors mb-5 line-clamp-3">
                                    {notice.title}
                                </h3>
                                <p className="text-[13px] text-foreground/70 flex items-center gap-2">
                                    <span className="text-[10px] text-primary-light-blue">▶</span>
                                    {notice.category}
                                </p>
                            </div>
                            <div className="text-right text-[13px] text-foreground/50 font-medium font-mono">
                                {notice.date}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination / Controls */}
                <div className="flex justify-center items-center gap-8 text-foreground/50 text-sm font-semibold tracking-wider">
                    <button className="hover:text-primary-light-blue transition-colors flex items-center gap-2">
                        <span className="text-lg leading-none">&larr;</span> PREV
                    </button>
                    <button className="hover:text-primary-light-blue transition-colors flex items-center gap-2">
                        NEXT <span className="text-lg leading-none">&rarr;</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
