"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer id="footer" className="bg-[#1a1a1a] py-16 text-gray-400">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12 mb-8">

                    <div className="md:col-span-1">
                        <Link href="/sample" className="inline-block mb-6">
                            <span className="text-2xl font-black tracking-tight text-white">지현이네 <span className="text-orange-500">과수원</span></span>
                        </Link>
                        <p className="text-sm leading-relaxed mb-6 max-w-xs text-gray-400">
                            3대째 정성을 다해 키워낸 달콤하고 건강한 제철 과일.<br />가장 신선할 때 식탁 위로 전해드립니다.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
                        <ul className="space-y-4 text-sm mix-blend-plus-lighter">
                            <li>
                                <strong className="text-gray-300 block mb-1">상호 및 주소</strong>
                                지현이네 과수원 | 대표: 김지현<br />
                                경상북도 청송군 주왕산면 지현리 123
                            </li>
                            <li>
                                <strong className="text-gray-300 block mb-1">고객 센터</strong>
                                T. 010-1234-5678<br />
                                E. contact@jihyun-orchard.kr
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                        <ul className="space-y-3 text-sm flex flex-col items-start">
                            <Link href="#home" className="hover:text-orange-400 transition-colors">홈으로</Link>
                            <Link href="#story" className="hover:text-orange-400 transition-colors">우리 이야기</Link>
                            <Link href="#products" className="hover:text-orange-400 transition-colors">과일 안내</Link>
                            <Link href="#reviews" className="hover:text-orange-400 transition-colors">고객 후기</Link>
                        </ul>
                    </div>

                </div>

                <div className="flex flex-col flex-wrap md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
                    <p>© Copyright 2024. Jihyun's Orchard All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition-colors">이용약관</a>
                        <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
                        <a href="#" className="hover:text-white transition-colors">사업자정보확인</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
