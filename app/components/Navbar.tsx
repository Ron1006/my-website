'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Stop background scrolling when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }, [isOpen]);

    return (
        <nav className="sticky top-0 z-[999] w-full bg-[#040506] border-b border-white/5">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 md:px-8 md:py-6">

                {/* Logo - Stays visible on both */}
                <Link href="/" className="z-[1001]">
                    <Image
                        src="/r-logo.png"
                        alt="R Logo"
                        width={32}
                        height={32}
                        className="cursor-pointer md:w-[40px] md:h-[40px]"
                    />
                </Link>

                {/* Desktop Links - FIXED: Added the links back */}
                <div className="hidden md:flex items-center gap-14 text-sm uppercase tracking-widest text-secondary">
                    <Link href="/#services" className="navbar-link">Services</Link>
                    <Link href="/#about" className="navbar-link">About Me</Link>
                    <Link href="/portfolio" className="navbar-link">Portfolio</Link>
                    <Link href="/blog" className="navbar-link">Blog</Link>
                </div>

                {/* Desktop Button - FIXED: Added the button back */}
                <div className="hidden md:flex">
                    <Link href="/#contact" className="btn-get-in-touch">
                        Get in touch
                    </Link>
                </div>

                {/* Mobile Menu Toggle - Only shows on mobile */}
                <button
                    className="flex md:hidden flex-col gap-1.5 z-[1001] p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                {/* FULL SCREEN MOBILE OVERLAY */}
                {isOpen && (
                    <div className="fixed inset-0 bg-[#040506]/80 backdrop-blur-sm z-[1000] flex flex-col pt-32 px-10 animate-in fade-in duration-300">
                        <div className="flex flex-col gap-8 text-xl font-light tracking-wide text-white">
                            <Link href="/#services" onClick={() => setIsOpen(false)}>Features</Link>
                            <Link href="/#services" onClick={() => setIsOpen(false)}>Services</Link>
                            <Link href="/portfolio" onClick={() => setIsOpen(false)}>Process</Link>
                            <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
                        </div>

                        <div className="mt-12 w-full">
                            <Link
                                href="/#contact"
                                onClick={() => setIsOpen(false)}
                                className="btn-get-in-touch w-full py-4 text-base flex items-center justify-center bg-black text-white rounded-full shadow-xl"
                            >
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}