'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const companyLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about-us' },
        { name: 'How We Work', href: '/how-we-work' },
        { name: 'Why Gapbridge', href: '/why-gapbridge' },
        { name: 'Contact Us', href: '/contact-us' },
        { name: 'Locations', href: '/locations' },
        { name: 'Career', href: '/career' },
        { name: 'Blog', href: '/blog' },
        { name: 'Engagement Model', href: '/engagement-model' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
    ];

    const businessServices = [
        'Accounting Outsourcing', 'Bookkeeping Services', 'Outsourced Tax Prep',
        'AR & AP Management', 'Software Consulting', 'Virtual CFO',
        'Xero & QuickBooks', 'Audit Support', 'Cost Analysis', 'Year End Services'
    ];

    const cpaFirmLinks = [
        'Hire Accountant', 'Hire Bookkeeper', 'Hire Fractional CFO',
        'Hire Tax Preparer', 'Hire Tax Reviewer', 'Hire Staff Accountant',
        'Hire AR/AP Executive', 'Hire Audit Staff', 'Hire QuickBooks Expert', 'Hire Virtual CFO'
    ];

    return (
        <footer className="w-full bg-brand-navy text-white pt-20 pb-10 px-4 md:px-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                {/* Top Section: Logo & Main Company Links & Certifications */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">

                    {/* Brand Info */}
                    <div className="md:col-span-3 space-y-6">
                        <div className="flex items-center gap-2">
                            {/* Replace with your actual Logo Component or Image */}
                            <div className="text-2xl font-black tracking-tighter text-white">
                                GAP<span className="text-brand-green">BRIDGE</span>
                            </div>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            Maximize Efficiency, Minimize Costs — Your Trusted Outsourcing Accounting Partner.
                        </p>
                        <div className="flex gap-4">
                            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                                <Link key={i} href="#" className="p-2 rounded-lg bg-white/5 hover:bg-brand-green transition-colors">
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Company Navigation */}
                    <div className="md:col-span-6">
                        <h4 className="text-lg font-bold mb-8">Company</h4>
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                            {companyLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-white/60 hover:text-brand-green text-sm transition-colors flex items-center group"
                                >
                                    {link.name}
                                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all ml-1" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Certifications & Partner */}
                    <div className="md:col-span-3 space-y-8">
                        <div>
                            <h4 className="text-sm font-black uppercase tracking-widest mb-6 opacity-40">Certifications</h4>
                            <div className="flex flex-wrap gap-3">
                                {/* Certification Badges */}
                                {['/xero.png', '/cp.png', '/qb1.png', '/qb2.png'].map((src, i) => (
                                    <div key={i} className="relative w-12 h-12 bg-white/5 rounded-lg p-1 grayscale hover:grayscale-0 transition-all">
                                        <div className="w-full h-full relative">
                                            {/* Replace with actual paths */}
                                            <div className="bg-brand-green/20 w-full h-full rounded" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-sm font-black uppercase tracking-widest mb-4 opacity-40">Associate Partner</h4>
                            <div className="text-xl font-bold italic text-white/80">Tax<span className="text-brand-green">Apro</span></div>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-16 border-b border-white/10">

                    {/* Business Owners */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 pb-4 border-b border-white/10">Business Owners</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {businessServices.map((service) => (
                                <Link key={service} href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                                    {service}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Accounting/CPA Firms */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 pb-4 border-b border-white/10">Accounting/CPA Firms</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {cpaFirmLinks.map((link) => (
                                <Link key={link} href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                                    {link}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-8">
                        <Link href="#" className="text-white/40 hover:text-white text-xs transition-colors">Terms of Service</Link>
                        <Link href="#" className="text-white/40 hover:text-white text-xs transition-colors">Sitemap</Link>
                        <Link href="#" className="text-white/40 hover:text-white text-xs transition-colors">Security</Link>
                    </div>
                    <p className="text-white/40 text-xs font-medium">
                        © {currentYear} Gapbridge Outsource Partner. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-white/40 text-xs font-medium">
                        <span>Designed & Developed by</span>
                        <Link
                            href="https://dev-rishabh.vercel.app"
                            className="text-white/60 hover:text-brand-green transition-colors font-bold"
                        >
                            Rishabh Jain
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;