"use client";

import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export default function CustomerSupport() {
    return (
        <section id="contact" className="py-24 bg-white text-gray-900 border-t border-gray-100 scroll-mt-[100px]">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-center">

                <div className="lg:w-1/2">
                    <span className="text-orange-600 font-bold tracking-widest text-sm uppercase mb-4 block">Contact Us</span>
                    <h2 className="text-3xl lg:text-5xl font-black leading-tight mb-8 text-gray-900">
                        지현이네 과수원으로<br />
                        <span className="text-gray-400">발걸음 하시는 길</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium">
                        언제든 편하게 연락 주세요.<br />과일 주문 문의부터 대량 구매 상담까지 친절하게 안내해 드립니다. 직접 농장에 방문하셔서 신선한 과일을 맛보시는 것도 환영합니다.
                    </p>

                    <div className="space-y-6 mb-10">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-gray-900 font-bold mb-1">전화 문의</h4>
                                <p className="text-gray-600 text-lg">010-1234-5678</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-gray-900 font-bold mb-1">농장 주소</h4>
                                <p className="text-gray-600">경상북도 청송군 주왕산면 지현리 123</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 shrink-0">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h4 className="text-gray-900 font-bold mb-1">상담 시간</h4>
                                <p className="text-gray-600">평일 09:00 - 18:00 (주말 및 공휴일 휴무)</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a href="tel:010-1234-5678" className="flex-1 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2">
                            <Phone size={20} /> 전화 걸기
                        </a>
                        <button className="flex-1 py-4 bg-[#FEE500] text-[#191919] font-bold rounded-xl hover:bg-[#F4DC00] transition-colors shadow-sm flex items-center justify-center gap-2">
                            <MessageCircle size={20} /> 카카오톡 상담
                        </button>
                    </div>
                </div>

                <div className="lg:w-1/2 w-full">
                    <div className="relative aspect-square md:aspect-video lg:aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
                        {/* Placeholder for Map or Farm Image */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop')] bg-cover bg-center" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <div className="flex items-center gap-2 mb-2">
                                <MapPin size={20} className="text-orange-400" />
                                <h3 className="text-2xl font-bold">지현이네 과수원</h3>
                            </div>
                            <p className="text-white/90 font-medium">물 맑고 공기 좋은 청송에 위치하고 있습니다.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
