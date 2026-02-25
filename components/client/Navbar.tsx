"use client";
import { useState, useEffect } from 'react';
import { Landmark, ChevronDown, Menu, X, ArrowRight, CircleQuestionMark, ListChecks, Users, Server, Briefcase, HandCoins, MessageSquareMore } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
    const iconSize = 18;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        {
            name: 'About Us',
            type: 'dropdown',
            subLinks: [
                { title: 'Why Gapbridge', href: '/why-gapbridge', desc: 'Our mission.', icon: <CircleQuestionMark size={iconSize} /> },
                { title: 'How We Work', href: '/how-we-work', desc: 'Our process.', icon: <ListChecks size={iconSize} /> },
                { title: 'Meet the Team', href: '/about-us', desc: 'Our experts.', icon: <Users size={iconSize} /> },
                { title: 'Engagement', href: '/engagement-model', desc: 'Models.', icon: <Server size={iconSize} /> },
            ]
        },
        {
            name: 'Services',
            type: 'dropdown',
            subLinks: [
                { title: 'Business Owners', href: '/services/business-owners', desc: 'Accounting.', icon: <Briefcase size={iconSize} /> },
                { title: 'Valuation Services', href: '/services/valuation-services', desc: 'Appraisal.', icon: <HandCoins size={iconSize} /> },
                { title: 'Advisory Services', href: '/services/advisory-services', desc: 'Consulting.', icon: <MessageSquareMore size={iconSize} /> },
            ]
        },
        { name: 'CPA Firm (Hire)', type: 'link', href: '/cpa-firm' },
        { name: 'Career', type: 'link', href: '/career' },
        { name: 'Blog', type: 'link', href: '/blog' },
        { name: 'Case Studies', type: 'link', href: '/case-studies' },
        // { name: 'Contact Us', type: 'link', href: '/contact-us' },
    ];

    return (
        <header className="fixed w-full z-50 flex justify-center pt-6 pointer-events-none">
            <motion.nav
                onMouseLeave={() => setHoveredMenu(null)}
                animate={{
                    y: scrolled ? 0 : -24,
                    borderRadius: scrolled ? '100px' : '0px',
                    backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0)',
                    boxShadow: scrolled ? '0 20px 40px -10px rgba(15, 23, 42, 0.15)' : 'none',
                }}
                className={`pointer-events-auto flex items-center justify-between max-w-7xl h-20 border backdrop-blur-md transition-[width,padding,border-color] duration-500 ${scrolled ? 'border-brand-border w-[92%] pl-8 pr-3' : 'border-transparent w-full px-12'}`}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Image src="/gapbridge-logo.png" alt="Logo" width={150} height={84} priority sizes="150px" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative px-1 h-full flex items-center"
                            onMouseEnter={() => setHoveredMenu(link.name)}
                        >
                            <div className={`flex items-center gap-1.5 px-2 py-2 text-sm font-bold rounded-full transition-all duration-300 cursor-pointer ${scrolled ? 'text-brand-navy/70 hover:text-brand-navy hover:bg-brand-surface' : 'text-white/80 hover:text-white hover:bg-white/10'
                                }`}>
                                {link.type === 'link' ? <Link href={link.href || '#'}>{link.name}</Link> : <span>{link.name}</span>}
                                {link.type === 'dropdown' && <ChevronDown size={14} className={`opacity-50 transition-transform duration-300 ${hoveredMenu === link.name ? 'rotate-180' : ''}`} />}
                            </div>

                            {/* DROPDOWN MENU */}
                            <AnimatePresence>
                                {hoveredMenu === link.name && link.type === 'dropdown' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute top-full left-0 w-80 pt-4"
                                    >
                                        <div className="bg-white border border-brand-border shadow-2xl rounded-4xl p-3 overflow-hidden">
                                            {link.subLinks?.map((sub) => (
                                                <Link key={sub.title} href={sub.href} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-brand-surface group/item transition-all">
                                                    <div className="bg-brand-surface p-2.5 rounded-xl text-brand-navy group-hover/item:bg-brand-green group-hover/item:text-white transition-all">
                                                        {sub.icon}
                                                    </div>
                                                    <div>
                                                        <div className="text-[15px] font-bold text-brand-navy group-hover/item:text-brand-green transition-colors">{sub.title}</div>
                                                        {/* <div className="text-xs text-brand-slate font-medium opacity-60">{sub.desc}</div> */}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}

                    <Link
                        href="/contact-us"
                        className={`ml-4 px-7 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 group ${scrolled ? 'bg-brand-navy text-white hover:bg-brand-green' : 'bg-brand-green text-white hover:scale-105'}`}
                    >
                        Book a Call
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    aria-label="Toggle mobile menu"
                    className={`lg:hidden w-12 h-12 flex items-center justify-center rounded-full ${scrolled ? 'text-brand-navy' : 'text-white'}`}
                >
                    {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </motion.nav>

            {/* Mobile Dropdown (Unified with Island Theme) */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        // Ensure pointer events are explicitly enabled here
                        className="absolute top-28 left-4 right-4 bg-white rounded-[2.5rem] shadow-2xl border border-brand-border lg:hidden pointer-events-auto overflow-hidden flex flex-col"
                        style={{ maxHeight: 'calc(100vh - 140px)' }} // Responsive height calculation
                    >
                        {/* Inner Scrollable Container */}
                        <div className="p-8 overflow-y-auto custom-scrollbar">
                            <ul className="grid gap-10">
                                {navLinks.map((link) => (
                                    <li key={link.name} className="space-y-5">
                                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-green/60">
                                            {link.name}
                                        </div>
                                        <div className="grid gap-5">
                                            {link.type === 'link' ? (
                                                <Link
                                                    href={link.href || '#'}
                                                    onClick={() => setIsMobileOpen(false)} // Close menu on click
                                                    className="text-lg font-black text-brand-navy active:text-brand-green transition-colors"
                                                >
                                                    {link.name}
                                                </Link>
                                            ) : (
                                                link.subLinks?.map((sub) => (
                                                    <Link
                                                        key={sub.title}
                                                        href={sub.href}
                                                        onClick={() => setIsMobileOpen(false)} // Close menu on click
                                                        className="flex items-center gap-4 text-brand-navy font-bold text-lg group active:translate-x-1 transition-transform"
                                                    >
                                                        <div className="p-2 bg-brand-surface rounded-xl text-brand-navy group-active:bg-brand-green group-active:text-white transition-colors">
                                                            {sub.icon}
                                                        </div>
                                                        {sub.title}
                                                    </Link>
                                                ))
                                            )}
                                        </div>
                                    </li>
                                ))}

                                {/* Explicit Mobile CTA */}
                                <Link
                                    href="/contact-us"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="mt-4 w-full justify-center px-7 py-5 rounded-2xl bg-brand-navy text-white text-sm font-black uppercase tracking-widest flex items-center gap-2"
                                >
                                    Book a Call
                                    <ArrowRight size={18} />
                                </Link>
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;