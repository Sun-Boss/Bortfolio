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
        { name: "회사소개", href: "#" },
        { name: "사업영역", href: "#" },
        { name: "제안 및 문의", href: "#" },
        { name: "공지사항", href: "#" },
    ];

    return (
        <header className={cn(
            "fixed top-0 left-0 w-full z-50 transition-all duration-300",
            scrolled ? "bg-background/90 backdrop-blur-md shadow-md border-b border-white/10 py-4" : "bg-transparent py-6"
        )}>
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src="/img/logo.png"
                        alt="디에스인포시스 로고"
                        className={cn(
                            "h-7 md:h-9 w-auto transition-all duration-300",
                            !scrolled && "brightness-0 invert opacity-90 drop-shadow-md"
                        )}
                    />
                </Link>

                <nav className="hidden md:flex gap-10">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "font-semibold transition-colors cursor-pointer text-[15px]",
                                scrolled ? "text-foreground hover:text-primary-light-blue" : "text-white/90 hover:text-white drop-shadow-md"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <button className="md:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                </button>
            </div>
        </header>
    );
}
