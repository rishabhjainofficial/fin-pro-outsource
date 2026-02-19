'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, ArrowRight, Briefcase, Calendar, User } from 'lucide-react';
import { CaseStudy } from '@/lib/data/caseStudies';

const CaseStudiesSection = ({ caseStudies }: { caseStudies: CaseStudy[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeCase = caseStudies[activeIndex];

    return (
        <section className="w-full px-4 py-24 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy text-white mb-6">
                            <Target size={14} className="text-brand-green" />
                            <span className="text-xs font-bold uppercase tracking-widest">Case Studies</span>
                        </div> */}
                        <h2 className="text-4xl md:text-6xl font-black text-brand-navy tracking-tight leading-[1.1]">
                            Proven Results. <br />
                            <span className="text-brand-green">Global Impact.</span>
                        </h2>
                    </div>

                    {/* Navigation Toggles */}
                    <div className="flex gap-2 p-1.5 bg-white border border-brand-border rounded-2xl">
                        {caseStudies.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeIndex === idx
                                    ? 'bg-brand-navy text-white shadow-lg'
                                    : 'text-brand-slate hover:bg-brand-surface'
                                    }`}
                            >
                                Case 0{idx + 1}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Case Display Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                        className="relative bg-white border border-brand-border rounded-5xl overflow-hidden shadow-2xl shadow-brand-navy/5"
                    >

                        <Link href={`/case-studies/${activeCase.slug}`}>
                            <div className="flex flex-col lg:flex-row min-h-[600px]">

                                {/* Visual/Image Half */}
                                <div className="lg:w-1/2 relative min-h-[400px]">
                                    <Image
                                        src={activeCase.image}
                                        alt={activeCase.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-brand-navy/20" />

                                    {/* Floating Metric Badge */}
                                    <div className="absolute bottom-8 left-8 bg-white p-8 rounded-4xl shadow-2xl border border-brand-border animate-fade-up">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 rounded-2xl bg-brand-green/10 text-brand-green">
                                                <Calendar size={24} />
                                            </div>
                                            <div>
                                                <div className="text-4xl font-black text-brand-navy leading-none">{activeCase.author}</div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-brand-slate mt-1">{activeCase.date}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Half */}
                                <div className="lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center">
                                    <h3 className="text-3xl md:text-5xl font-black text-brand-navy leading-tight mb-8">
                                        {activeCase.title}
                                    </h3>

                                    <div className="space-y-8 mb-12">
                                        <div>
                                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-slate mb-2">The Challenge</h4>
                                            <p className="text-brand-slate font-medium leading-relaxed">{activeCase.excerpt}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-slate mb-2">Our Solution</h4>
                                            <p className="text-brand-slate font-medium leading-relaxed">{activeCase.description}</p>
                                        </div>
                                        {/* <div className="p-6 bg-brand-surface rounded-3xl border border-brand-border">
                                        <div className="flex items-start gap-4">
                                            <Award className="text-brand-green mt-1 shrink-0" size={20} />
                                            <p className="text-brand-navy font-bold">{activeCase.description}</p>
                                        </div>
                                    </div> */}
                                    </div>

                                    <button className="group flex items-center gap-3 text-brand-navy font-black text-sm uppercase tracking-widest">
                                        View Detailed Study
                                        <div className="w-10 h-10 rounded-full border border-brand-navy flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-all">
                                            <ArrowRight size={18} />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </AnimatePresence>

                {/* Subtle Trust Footer */}
                <div className="mt-12 text-center text-brand-slate/40 text-xs font-bold tracking-[0.3em] uppercase">
                    Trusted by 500+ Organizations Worldwide
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesSection;