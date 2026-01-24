"use client";
import { useState } from 'react';
import { Menu, X, Landmark } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Services', href: 'services' },
        { name: 'For Professionals', href: 'professionals' },
        { name: 'Pricing', href: 'pricing' },
        { name: 'About', href: 'about' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <div className="bg-slate-900 p-1.5 rounded-lg">
                            <Link href="/">
                                <Landmark size={28} className="text-white" />
                            </Link>
                        </div>
                        <span className="text-xl font-bold text-slate-900 tracking-tight">
                            FinPortal
                        </span>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all">
                            Client Login
                        </button>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-slate-900 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Dropdown) */}
            <div className={`
                md:hidden absolute w-full bg-white border-b border-slate-200 transition-all duration-300 ease-in-out
                ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
            `}>
                <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="block px-3 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4 px-3">
                        <button className="w-full bg-slate-900 text-white px-5 py-3 rounded-lg text-base font-medium">
                            Client Login
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;