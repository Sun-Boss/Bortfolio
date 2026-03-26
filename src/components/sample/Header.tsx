"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "브랜드 스토리", href: "#story" },
        { name: "제철 과일", href: "#products" },
        { name: "생생 후기", href: "#reviews" },
        { name: "오시는 길", href: "#contact" },
    ];

    return (
        <header className={cn(
            "fixed top-0 left-0 w-full z-50 transition-all duration-300",
            scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-orange-100 py-4" : "bg-transparent py-6"
        )}>
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                <Link href="/sample" className="flex items-center gap-2">
                    <span className="text-2xl font-black tracking-tight text-orange-600">지현이네 <span className="text-green-600">과수원</span></span>
                </Link>

                <nav className="hidden md:flex gap-10 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "font-medium transition-colors cursor-pointer text-[16px]",
                                scrolled ? "text-gray-700 hover:text-orange-500" : "text-gray-800 hover:text-orange-600 drop-shadow-sm"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <Link href="#order" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-md hover:shadow-lg">
                        주문하기
                    </Link>
                </div>

                <button className={cn("md:hidden", scrolled ? "text-gray-900" : "text-gray-800")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                </button>
            </div>
        </header>
    );
}
