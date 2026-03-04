"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "샘플보기", href: "#" },
    { name: "Company", href: "#company" },
    { name: "Business", href: "#business" },
    { name: "Partners", href: "#partners" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md text-gray-900" : "bg-transparent text-white"
        }`;

    const logoSrc = isScrolled ? "/img/ds_logo_orange.png" : "/img/ds_logo_white.png";

    return (
        <header className={headerClasses}>
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/sample2" className="flex items-center gap-2 z-50">
                        <img src={logoSrc} alt="DS INFOSYS" className="h-8 md:h-10 w-auto transition-transform duration-300 hover:scale-105" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link
                                    href={item.href}
                                    className={`text-sm font-medium hover:text-[#00A651] transition-colors py-8`}
                                >
                                    {item.name}
                                </Link>

                                {/* Dropdown Menu for '샘플보기' */}
                                {item.name === "샘플보기" && (
                                    <div className="absolute top-full left-0 mt-0 w-40 bg-white/95 backdrop-blur-md border border-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0 flex flex-col overflow-hidden">
                                        <Link href="/sample" className="px-4 py-3 hover:bg-gray/5 transition-colors text-sm text-gray-700 hover:text-blue-600">메인페이지</Link>
                                        <Link href="/sample1" className="px-4 py-3 hover:bg-gray-50 transition-colors text-sm text-gray-700 hover:text-blue-600">샘플1</Link>
                                        <Link href="/sample2" className="px-4 py-3 hover:bg-gray-50 transition-colors text-sm text-gray-700 hover:text-blue-600">샘플2</Link>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden z-50 p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} className={isScrolled || isMobileMenuOpen ? "text-gray-900" : "text-white"} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-2xl font-medium text-gray-900 hover:text-[#00A651] transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
