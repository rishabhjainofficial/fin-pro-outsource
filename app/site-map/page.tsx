'use client';

import { motion } from 'framer-motion';
import { Map, ChevronRight, LayoutGrid, Shield, Briefcase, Info } from 'lucide-react';
import Link from 'next/link';

const Sitemap = () => {
    const categories = [
        {
            title: "About Gapbridge",
            icon: <Info size={20} />,
            links: [
                { name: "Why Gapbridge", href: "/why-gapbridge" },
                { name: "How We Work", href: "/how-we-work" },
                { name: "Meet the Team", href: "/about-us" },
                { name: "Engagement Model", href: "/engagement-model" },
            ]
        },
        {
            title: "Services",
            icon: <Briefcase size={20} />,
            links: [
                { name: "Business Owners", href: "/services/business-owners" },
                { name: "Valuation Services", href: "/services/valuation-services" },
                { name: "Advisory Services", href: "/services/advisory-services" },
                { name: "CPA Firm Solutions", href: "/cpa-firm" },
            ]
        },
        {
            title: "Resources",
            icon: <LayoutGrid size={20} />,
            links: [
                { name: "Case Studies", href: "/case-studies" },
                { name: "Industry Blog", href: "/blog" },
                { name: "Career Opportunities", href: "/career" },
                { name: "Contact Us", href: "/contact-us" },
            ]
        },
        {
            title: "Legal & Security",
            icon: <Shield size={20} />,
            links: [
                { name: "Security & Infrastructure", href: "/security" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms & Conditions", href: "/terms-and-conditions" },
            ]
        }
    ];

    return (
        <main className="w-full bg-white pt-32 pb-24 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy border border-brand-navy/20 mb-6"
                    >
                        <Map size={14} className="text-brand-green" />
                        <span className="text-white text-xs font-bold uppercase tracking-widest">Site Directory</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black text-brand-navy tracking-tighter leading-tight mb-8">
                        Architecture of <br />
                        <span className="text-brand-green italic">Gapbridge.</span>
                    </h1>
                </div>

                {/* Sitemap Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, idx) => (
                        <div key={idx} className="space-y-6">
                            <div className="flex items-center gap-3 text-brand-green">
                                <div className="p-2 bg-brand-surface rounded-xl">
                                    {category.icon}
                                </div>
                                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-brand-navy">
                                    {category.title}
                                </h2>
                            </div>

                            <ul className="space-y-4">
                                {category.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center justify-between p-4 rounded-2xl border border-brand-border hover:bg-brand-surface transition-all duration-300"
                                        >
                                            <span className="text-brand-navy font-bold text-sm group-hover:text-brand-green transition-colors">
                                                {link.name}
                                            </span>
                                            <ChevronRight size={14} className="text-brand-border group-hover:text-brand-green group-hover:translate-x-1 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Sitemap;