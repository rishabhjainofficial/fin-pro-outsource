'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Globe, Zap } from 'lucide-react';
import Link from 'next/link';

const LetConnect = () => {
    return (
        <section className="w-full px-4 py-24 bg-brand-surface overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* The "Power Card" */}
                <div className="relative bg-brand-navy rounded-[4rem] p-12 md:p-24 overflow-hidden shadow-2xl">

                    {/* Artistic Background Elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-brand-green/10 to-transparent skew-x-12 translate-x-32 hidden lg:block" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-green/20 rounded-full blur-[120px] opacity-60" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
                        >
                            <Sparkles size={16} className="text-brand-green animate-pulse" />
                            <span className="text-white text-xs font-black uppercase tracking-[0.2em]">
                                Available for Q1 2026 Onboarding
                            </span>
                        </motion.div>

                        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                            Ready to Elevate Your <br />
                            <span className="text-brand-green italic">Financial Operations?</span>
                        </h2>

                        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                            Stop managing spreadsheets and start managing growth. Join the elite firms
                            outsourcing their core finance functions to Adroit experts.
                        </p>

                        {/* The Main Action Button */}
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Link
                                href="/contact-us"
                                className="group relative flex items-center gap-4 px-12 py-6 bg-brand-green text-white rounded-full font-black uppercase tracking-[0.2em] text-sm shadow-2xl shadow-brand-green/40 hover:bg-white hover:text-brand-navy transition-all duration-500 hover:-translate-y-2"
                            >
                                Schedule Consultation
                                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                            </Link>

                            <div className="flex items-center gap-2 text-white/40 text-sm font-bold tracking-widest uppercase">
                                <Zap size={18} className="text-brand-green" />
                                15-Minute Discovery Call
                            </div>
                        </div>

                        {/* Trust Footer inside the Card */}
                        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12 border-t border-white/10 pt-12 w-full max-w-4xl">
                            {[
                                { icon: ShieldCheck, text: 'Enterprise Security' },
                                { icon: Globe, text: 'Global Compliance' },
                                { icon: Sparkles, text: 'Precision Accuracy' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center justify-center gap-3 text-white/50">
                                    <item.icon size={18} className="text-brand-green/60" />
                                    <span className="text-xs font-bold uppercase tracking-widest">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LetConnect;