'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const FooterClient = ({
    socialLinks,
    companyLinks,
    businessServices,
    cpaFirmLinks,
    currentYear
}: {
    socialLinks: { name: string, href: string, icon: React.ReactNode }[],
    companyLinks: { name: string, href: string }[],
    businessServices: { title: string, slug: string }[],
    cpaFirmLinks: { title: string, slug: string }[],
    currentYear: number
}) => {
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
                        <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                            Maximize Efficiency, Minimize Costs — Your Trusted Outsourcing Accounting Partner.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <Link key={link.name} href={link.href} aria-label={link.name} className="p-2 rounded-lg bg-white/5 hover:bg-brand-green transition-colors">
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Company Navigation */}
                    <div className="md:col-span-6">
                        <h3 className="text-lg font-bold mb-8">Company</h3>
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                            {companyLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-white/80 hover:text-brand-green text-sm transition-colors flex items-center group"
                                >
                                    {link.name}
                                    <ArrowUpRight size={12} aria-hidden="true" className="opacity-0 group-hover:opacity-100 transition-all ml-1" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Certifications & Partner */}
                    <div className="md:col-span-3 space-y-8">
                        <div>
                            <h3 className="text-sm font-black uppercase tracking-widest mb-6 text-white/60">Certifications</h3>
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
                        {/* <div>
                            <h4 className="text-sm font-black uppercase tracking-widest mb-4 text-white/60">Associate Partner</h4>
                            <div className="text-xl font-bold italic text-white/80">Tax<span className="text-brand-green">Apro</span></div>
                        </div> */}
                    </div>
                </div>

                {/* Middle Section: Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-16 border-b border-white/10">

                    {/* Business Owners */}
                    <div>
                        <h3 className="text-lg font-bold mb-8 pb-4 border-b border-white/10">Business Owners</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {businessServices.map((service) => (
                                <Link key={service.title} href={service.slug} className="text-white/70 hover:text-white text-sm transition-colors">
                                    {service.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Accounting/CPA Firms */}
                    <div>
                        <h3 className="text-lg font-bold mb-8 pb-4 border-b border-white/10">Accounting/CPA Firms</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {cpaFirmLinks.map((link) => (
                                <Link key={link.title} href={`${link.slug}`} className="text-white/70 hover:text-white text-sm transition-colors">
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-8">
                        <Link href="/terms-and-conditions" className="text-white/60 hover:text-white text-xs transition-colors">Terms of Service</Link>
                        <Link href="/site-map" className="text-white/60 hover:text-white text-xs transition-colors">Sitemap</Link>
                        <Link href="/security" className="text-white/60 hover:text-white text-xs transition-colors">Security</Link>
                    </div>
                    <p className="text-white/60 text-xs font-medium">
                        © {currentYear} Gapbridge Outsource Partner. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-white/60 text-xs font-medium">
                        <span>Designed & Developed by</span>
                        <Link
                            href="https://dev-rishabh.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/80 hover:text-brand-green transition-colors font-bold"
                        >
                            Rishabh Jain
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterClient;