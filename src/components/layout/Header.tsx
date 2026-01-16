"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md shadow-md py-3 border-b border-border/10"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className={cn("p-2 rounded-full transition-colors", isScrolled ? "bg-primary/10 group-hover:bg-primary/20" : "bg-white/10 group-hover:bg-white/20")}>
                        <Landmark className={cn("w-6 h-6 transition-colors", isScrolled ? "text-primary" : "text-white")} />
                    </div>
                    <span className={cn("text-xl font-bold tracking-tight transition-colors", isScrolled ? "text-foreground" : "text-white")}>
                        Gram Panchayat
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors",
                                isScrolled ? "text-foreground/80 hover:text-primary" : "text-white/80 hover:text-white"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button className={cn(
                        "px-5 py-2 rounded-full font-medium transition-colors shadow-sm",
                        isScrolled
                            ? "bg-primary text-primary-foreground hover:bg-primary/90"
                            : "bg-white text-primary hover:bg-white/90"
                    )}>
                        Login
                    </button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={cn("md:hidden p-2 transition-colors", isScrolled ? "text-foreground" : "text-white")}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-in slide-in-from-top-2">
                    <nav className="flex flex-col p-4 gap-4">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border last:border-0"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button className="bg-primary text-primary-foreground w-full py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                            Login
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
