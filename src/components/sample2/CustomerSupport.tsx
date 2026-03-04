"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function CustomerSupport() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                contentRef.current?.children ? Array.from(contentRef.current.children) : [],
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-6 max-w-7xl">
                <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Column - Customer Service */}
                    <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">고객문의</h2>
                        <p className="text-gray-600 mb-8 max-w-md">
                            디에스인포시스 서비스에 대한 궁금한 점이나 제안하실 내용이 있다면 언제든지 문의해 주세요.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-center gap-4 text-gray-800">
                                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-[#00A651]">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 mb-1">고객센터</div>
                                    <div className="text-xl font-semibold">02-1234-5678</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-800">
                                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 mb-1">이메일 문의</div>
                                    <div className="text-lg font-medium">contact@dsinfosys.com</div>
                                </div>
                            </div>
                        </div>

                        <button className="flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-[#00A651] transition-colors duration-300">
                            1:1 문의하기 <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </div>

                    {/* Right Column - Ethics / Location */}
                    <div className="flex flex-col gap-6">
                        {/* Notice & Ethics Card */}
                        <div className="bg-gradient-to-br from-teal-900 to-green-900 p-10 rounded-2xl text-white flex-1 flex flex-col justify-between group overflow-hidden relative">
                            {/* Decorative Pattern */}
                            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2629&auto=format&fit=crop')] bg-cover mix-blend-overlay" />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4">공지사항 및 윤리경영</h3>
                                <p className="text-green-100 max-w-sm mb-8">
                                    투명하고 공정한 기업 문화를 만들어가는<br />디에스인포시스의 소식을 전합니다.
                                </p>
                            </div>

                            <div className="relative z-10 flex gap-4">
                                <button className="px-6 py-3 border border-white/30 rounded-full hover:bg-white hover:text-green-900 transition-colors backdrop-blur-sm">
                                    공지사항
                                </button>
                                <button className="px-6 py-3 border border-white/30 rounded-full hover:bg-white hover:text-green-900 transition-colors backdrop-blur-sm flex items-center">
                                    윤리경영 <ArrowRight className="ml-2 w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between group cursor-pointer hover:border-[#00A651] transition-colors">
                            <div className="flexItems-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-[#00A651] group-hover:text-white transition-colors">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">오시는 길</h4>
                                    <p className="text-sm text-gray-500">디에스인포시스 본사 및 지사 안내</p>
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#00A651] group-hover:translate-x-1 transition-all" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
