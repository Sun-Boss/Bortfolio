import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-neutral-800 text-white/80 py-12">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">

                {/* Logo & Links */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-14 w-full">
                    <div className="flex items-center">
                        <img
                            src="/img/ds_logo_white.png"
                            alt="디에스인포시스 하단로고"
                            className="h-8 md:h-14 w-auto opacity-70 hover:opacity-100 transition-opacity"
                        />
                    </div>

                    <div className="flex flex-wrap gap-x-8 gap-y-4 text-[14px] font-medium">
                        <Link href="#" className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-right-4 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-3 after:bg-white/20">회사소개</Link>
                        <Link href="#" className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-right-4 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-3 after:bg-white/20">회사위치</Link>
                        <Link href="#" className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-right-4 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-3 after:bg-white/20">제안 및 문의</Link>
                        <Link href="#" className="hover:text-white transition-colors font-semibold text-white">공지사항</Link>
                    </div>
                </div>

            </div>

            <div className="container mx-auto px-6 lg:px-12 mt-10">
                <div className="text-[13px] space-y-2.5 text-white/50 flex flex-col">
                    <p className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6">
                        <span>(08501) 서울특별시 금천구 가산디지털1로 205-28, 1101~1102호(가산동)</span>
                        <span className="hidden lg:inline-block w-[1px] h-3 bg-white/20"></span>
                        <span className="flex items-center gap-4">
                            <span>T. 02-6269-7900</span>
                            <span className="w-[1px] h-2.5 bg-white/20"></span>
                            <span>F. 02-6269-7904</span>
                            <span className="w-[1px] h-2.5 bg-white/20"></span>
                            <span className="text-white/70">E. info@dsin.kr</span>
                        </span>
                    </p>
                    <p className="pt-2">
                        Copyright 2017. DS Infosys Co., Ltd all rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
