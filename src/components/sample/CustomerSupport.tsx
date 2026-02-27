"use client";

export default function CustomerSupport() {
    return (
        <section id="support" className="py-24 bg-white text-gray-900 border-t border-gray-100 scroll-mt-[100px]">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-center">

                <div className="lg:w-1/2">
                    <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4 block">고객 중심</span>
                    <h2 className="text-3xl lg:text-5xl font-black leading-tight mb-8 text-gray-900">
                        고객의 니즈를 최우선으로,<br />
                        <span className="text-gray-400">맞춤형 솔루션과 신속한 지원<br />으로 신뢰를 쌓습니다.</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium">
                        디에스인포시스(주)는 멈추지 않는 도전과 혁신 정신을 바탕으로 대한민국 IT 서비스 생태계를 변화시킵니다. 고객의 가장 신뢰받는 파트너로서 함께 미래 성장을 창출 해 가는 든든한 IT 가이드가 되겠습니다.
                    </p>

                    <div className="flex gap-4">
                        <button className="flex-1 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors shadow-lg">
                            제안 및 문의
                        </button>
                        <button className="flex-1 py-4 bg-white text-gray-900 border border-gray-300 font-bold rounded-lg hover:border-gray-500 transition-colors shadow-sm">
                            고객지원 센터
                        </button>
                    </div>
                </div>

                <div className="lg:w-1/2 w-full">
                    <div className="relative aspect-square md:aspect-video lg:aspect-square bg-gray-100 rounded-3xl overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')] bg-cover bg-center brightness-110 contrast-90" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <h3 className="text-2xl font-bold mb-2">당신의 성공 파트너</h3>
                            <p className="text-white/80">디에스인포시스가 언제나 함께합니다.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
