import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contact" className="bg-gray-100 text-gray-600 py-12 border-t border-gray-200">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-gray-200 pb-8">
                    <div className="md:col-span-1">
                        <Link href="/sample2" className="inline-block mb-4">
                            <img src="/img/ds_logo_black.png" alt="DS INFOSYS" className="h-[48px] w-auto" />
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs text-gray-500">
                            디에스인포시스(주)는 고객에게 새로운 가치를 드리는 IT 서비스 전문기업입니다.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">사업 영역</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-[#00A651] transition-colors">SI사업</Link></li>
                            <li><Link href="#" className="hover:text-[#00A651] transition-colors">보안솔루션</Link></li>
                            <li><Link href="#" className="hover:text-[#00A651] transition-colors">IoT솔루션</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">고객 지원</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-[#00A651] transition-colors">고객 문의</Link></li>
                            <li><Link href="#" className="hover:text-[#00A651] transition-colors">오시는 길</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">윤리경영 및 컴플라이언스</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-[#00A651] transition-colors">윤리강령</Link></li>
                            <li><Link href="#" className="hover:text-[#00A651] transition-colors">개인정보처리방침</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-4 text-sm flex flex-col items-start gap-2">
                    <div className="text-gray-500 flex flex-col gap-1">
                        <p><strong>본사:</strong> (08501) 서울특별시 금천구 가산디지털1로 205-28, 1101~1102호(가산동)</p>
                        <p><strong>고객 상담 센터:</strong> T. 02-6269-7900 | F. 02-6269-7904 | E. info@dsin.kr</p>
                    </div>
                    <p className="mt-4 text-xs">© 2026 DS INFOSYS Co., Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
