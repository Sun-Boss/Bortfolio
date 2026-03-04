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
        { name: "샘플보기", href: "#" },
        { name: "회사소개", href: "#vision" },
        { name: "사업영역", href: "#products" },
        { name: "고객지원", href: "#support" },
        { name: "제안 및 문의", href: "#footer" },
    ];

    return (
        <header className={cn(
            "fixed top-0 left-0 w-full z-50 transition-all duration-300",
            scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200 py-4" : "bg-white py-6 border-b border-gray-100"
        )}>
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                <Link href="/sample" className="flex items-center gap-2">
                    <img src="/img/ds_logo_orange.png" alt="DS INFOSYS" className="h-[52px] w-auto" />
                </Link>

                <nav className="hidden md:flex gap-10 items-center">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group py-2">
                            <Link
                                href={item.href}
                                className="font-semibold transition-colors cursor-pointer text-[15px] text-gray-700 group-hover:text-blue-600"
                            >
                                {item.name}
                            </Link>

                            {/* Dropdown Menu for '샘플보기' */}
                            {item.name === "샘플보기" && (
                                <div className="absolute top-full left-0 mt-2 w-40 bg-white/95 backdrop-blur-md border border-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0 flex flex-col overflow-hidden">
                                    <Link href="/sample1" className="px-4 py-3 hover:bg-gray-50 transition-colors text-sm text-gray-700 hover:text-blue-600">샘플1</Link>
                                    <Link href="/sample2" className="px-4 py-3 hover:bg-gray-50 transition-colors text-sm text-gray-700 hover:text-blue-600">샘플2</Link>
                                    {/*
                                    <Link href="/" className="px-4 py-3 hover:bg-gray-50 transition-colors text-sm text-gray-700 hover:text-blue-600 border-t border-gray-50">샘플1</Link>
                                    <Link href="/sample2" className="px-4 py-3 hover:bg-gray-50 transition-colors text-sm text-gray-700 hover:text-blue-600 border-t border-gray-50">샘플2</Link>
                                    <Link href="/sample3" className="px-4 py-3 hover:bg-gray-50 transition-colors text-sm text-gray-700 hover:text-blue-600 border-t border-gray-50">샘플3</Link>
                                    <Link href="/" className="px-4 py-3 hover:bg-gray-50 transition-colors text-sm text-gray-700 hover:text-blue-600 border-t border-gray-50">샘플페이지1</Link>
                                    */}
                                </div>
                            )}
                        </div>

                    ))}
                </nav>

                <button className="md:hidden text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                </button>
            </div>
        </header>
    );
}
