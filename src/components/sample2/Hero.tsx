"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Subtle scale animation on the background
            gsap.fromTo(
                ".bg-image",
                { scale: 1.1 },
                { scale: 1, duration: 4, ease: "power2.out" }
            );

            // Text fade-in and slide-up
            gsap.fromTo(
                [textRef.current, subtitleRef.current],
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, stagger: 0.3, ease: "power3.out", delay: 0.5 }
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image / Color */}
            <div className="bg-image absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 to-black/80 mix-blend-multiply z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop')" }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white mt-16">
                <div ref={subtitleRef} className="text-lg md:text-xl font-medium tracking-widest text-[#00A651] mb-6 uppercase drop-shadow-md">
                    Eco-friendly IT Innovation
                </div>
                <h1 ref={textRef} className="text-5xl md:text-7xl font-bold leading-tight mb-8 drop-shadow-xl shadow-black/50">
                    IT 혁신을 이끄는 <br className="hidden md:block" />
                    글로벌 리더, <span className="text-[#00A651] drop-shadow-xl shadow-black/50">디에스인포시스</span>
                </h1>

                {/* Scroll Indicator */}
                <div className="absolute left-1/2 -bottom-32 -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <span className="text-sm tracking-widest uppercase mb-2 drop-shadow-md">Scroll</span>
                    <div className="w-[1px] h-12 bg-white/50" />
                </div>
            </div>
        </section>
    );
}
