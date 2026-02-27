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
        { name: "회사소개", href: "#vision-section" },
        { name: "사업영역", href: "#business-areas" },
        { name: "주요 고객사 및 파트너", href: "#partners" },
        { name: "회사정보", href: "#contact-location" },
    ];

    return (
        <header className={cn(
            "fixed top-0 left-0 w-full z-50 transition-all duration-300",
            scrolled ? "bg-background/90 backdrop-blur-md shadow-md border-b border-white/10 py-4" : "bg-transparent py-6"
        )}>
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src="/img/ds_logo_white.png"
                        alt="디에스인포시스 로고"
                        className={cn(
                            "h-7 md:h-14 w-auto transition-all duration-300",
                            !scrolled && "brightness-0 invert opacity-90 drop-shadow-md"
                        )}
                    />
                </Link>

                <nav className="hidden md:flex gap-10 items-center">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group">
                            <Link
                                href={item.href}
                                className={cn(
                                    "font-semibold transition-colors cursor-pointer text-[15px] py-4",
                                    scrolled ? "text-foreground hover:text-primary-light-blue" : "text-white/90 hover:text-white drop-shadow-md"
                                )}
                            >
                                {item.name}
                            </Link>

                            {/* Dropdown Menu for '샘플보기' */}
                            {item.name === "샘플보기" && (
                                <div className="absolute top-full left-0 mt-2 w-40 bg-background/95 backdrop-blur-md border border-white/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0 flex flex-col overflow-hidden">
                                    <Link href="/orasoft" className="px-4 py-3 hover:bg-white/5 transition-colors text-sm text-foreground/80 hover:text-primary-light-blue">메인페이지</Link>
                                    <Link href="/sample0" className="px-4 py-3 hover:bg-white/5 transition-colors text-sm text-foreground/80 hover:text-primary-light-blue">샘플1</Link>
                                    {/*<Link href="/" className="px-4 py-3 hover:bg-white/5 transition-colors text-sm text-foreground/80 hover:text-primary-light-blue">샘플1</Link>
                                    <Link href="/sample2" className="px-4 py-3 hover:bg-white/5 transition-colors text-sm text-foreground/80 hover:text-primary-light-blue border-t border-white/5">샘플2</Link>
                                    <Link href="/sample3" className="px-4 py-3 hover:bg-white/5 transition-colors text-sm text-foreground/80 hover:text-primary-light-blue border-t border-white/5">샘플3</Link>
                                    <Link href="/" className="px-4 py-3 hover:bg-white/5 transition-colors text-sm text-foreground/80 hover:text-primary-light-blue border-t border-white/5">샘플페이지1</Link>
                                */}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                <button className="md:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                </button>
            </div>
        </header>
    );
}
