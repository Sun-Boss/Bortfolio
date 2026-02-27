"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer id="footer" className="bg-gray-900 py-16 text-gray-400">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12 mb-8">

                    <div className="md:col-span-1">
                        <Link href="/sample" className="inline-block mb-6">
                            <img src="/img/ds_logo_white.png" alt="DS INFOSYS" className="h-[52px] w-auto" />
                        </Link>
                        <p className="text-sm leading-relaxed mb-6 max-w-xs">
                            디에스인포시스(주)는 고객에게 새로운 가치를 <br />드리는 IT 서비스 전문기업입니다.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
                        <ul className="space-y-4 text-sm mix-blend-plus-lighter">
                            <li>
                                <strong className="text-gray-300 block mb-1">주소</strong>
                                (08501) 서울특별시 금천구 가산디지털1로 205-28, <br />1101~1102호(가산동)
                            </li>
                            <li>
                                <strong className="text-gray-300 block mb-1">고객 상담 센터</strong>
                                T. 02-6269-7900 F. 02-6269-7904 E. info@dsin.kr
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                        <ul className="space-y-3 text-sm flex flex-col items-start">
                            <Link href="#" className="hover:text-blue-400 transition-colors">제품 소개</Link>
                            <Link href="#" className="hover:text-blue-400 transition-colors">고객 지원</Link>
                            <Link href="#" className="hover:text-blue-400 transition-colors">견적 의뢰</Link>
                            <Link href="#" className="hover:text-blue-400 transition-colors">회사 안내</Link>
                        </ul>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                    <p>© Copyright 2017. DS Infosys Co., Ltd All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
