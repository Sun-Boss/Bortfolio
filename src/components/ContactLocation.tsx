"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function ContactLocation() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".contact-col", {
            scrollTrigger: { trigger: container.current, start: "top 80%" },
            y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: "power3.out"
        });
    }, { scope: container });

    return (
        <section ref={container} id="contact-location" className="py-24 bg-transparent relative scroll-mt-[120px]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    {/* Customer Center */}
                    <div className="contact-col flex flex-col group cursor-pointer">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-1.5 h-6 bg-primary-blue inline-block"></span>
                            <h3 className="text-2xl font-black text-foreground drop-shadow-sm">고객 상담 센터</h3>
                        </div>
                        <div className="relative rounded-xl overflow-hidden h-[260px] md:h-[300px] flex items-center justify-center border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                            {/* Background Image */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-overlay" />
                            {/* Dark Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 group-hover:from-black/90 group-hover:to-black/40 transition-colors duration-500" />

                            <div className="relative z-10 text-center flex flex-col gap-4 w-full px-6">
                                <p className="text-4xl md:text-5xl font-black text-white tracking-widest drop-shadow-md">
                                    <span className="text-xl md:text-2xl mr-2 font-bold tracking-normal opacity-80 text-primary-light-blue">T.</span>
                                    02-6269-7900
                                </p>
                                <div className="text-[14px] md:text-[15px] text-white/90 space-y-1 font-medium mt-2">
                                    <p>평일 09:00 AM ~ 06:00 PM</p>
                                    <p>토요일, 일요일, 공휴일 휴무</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="contact-col flex flex-col group cursor-pointer">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-1.5 h-6 bg-primary-blue inline-block"></span>
                            <h3 className="text-2xl font-black text-foreground drop-shadow-sm">회사위치</h3>
                        </div>
                        <div className="relative rounded-xl overflow-hidden h-[260px] md:h-[300px] flex items-center justify-center border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                            {/* Background Image */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2156&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-overlay" />
                            {/* Dark Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 group-hover:from-black/90 group-hover:to-black/40 transition-colors duration-500" />

                            <div className="relative z-10 text-center px-8 md:px-12 w-full flex flex-col items-center justify-center gap-4">
                                <p className="text-lg md:text-xl font-bold text-white leading-relaxed drop-shadow-md word-break-keep-all">
                                    (08501) 서울특별시 금천구 가산디지털1로<br />
                                    205-28, 1101~1102호(가산동)
                                </p>
                                <button className="px-6 py-2 border border-white/30 text-white text-sm hover:bg-white/10 transition-colors rounded backdrop-blur-sm mt-2">
                                    지도 보기
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
