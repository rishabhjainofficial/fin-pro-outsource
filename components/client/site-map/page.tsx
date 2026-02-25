'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Map, ChevronRight } from 'lucide-react';

const SitemapPage = ({ categories }: {
    categories: {
        title: string;
        icon: React.ReactNode;
        links: {
            name: string;
            href: string;
        }[];
    }[]
}) => {
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
    )
}

export default SitemapPage