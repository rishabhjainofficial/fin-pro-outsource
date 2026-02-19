'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const ToolsUsed = ({ tools }: { tools: { name: string; src: string }[] }) => {
    return (
        <section className="w-full px-4 py-24 bg-brand-surface">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-20">
                    {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy border border-brand-navy/10 mb-6">
                        <Cpu size={14} className="text-brand-green" />
                        <span className="text-white text-xs font-bold uppercase tracking-widest text-opacity-70">
                            Our Tech Stack
                        </span>
                    </div> */}
                    <h2 className="text-4xl md:text-5xl font-black text-brand-navy tracking-tight mb-6">
                        Expertly Skilled in <br />
                        <span className="text-brand-green italic">Modern Accounting Software.</span>
                    </h2>
                    <p className="text-lg text-brand-slate max-w-2xl mx-auto font-medium">
                        {`We don't just use tools; we master them. Our team is adroit with the industry's leading platforms to ensure your data is accurate and integrated.`}
                    </p>
                </div>

                {/* Stunning Tech Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={tool.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative flex flex-col items-center justify-center p-8 bg-white border border-brand-border rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-brand-navy/5 hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Inner Hover Glow */}
                            <div className="absolute inset-0 bg-linear-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                                <div className="w-24 h-24 relative flex items-center justify-center">
                                    <Image
                                        src={tool.src}
                                        alt={tool.name}
                                        width={120}
                                        height={120}
                                        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 brightness-110"
                                    />
                                </div>

                                {/* Hidden Name Reveal */}
                                <span className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy opacity-0 group-hover:opacity-40 transition-opacity duration-500">
                                    {tool.name}
                                </span>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-8 h-8 bg-brand-green/10 rounded-bl-3xl translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                        </motion.div>
                    ))}
                </div>

                {/* Trust Footer */}
                <div className="mt-16 text-center">
                    <p className="text-brand-slate/50 text-sm font-medium italic">
                        + and 20+ other specialized financial integrations
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ToolsUsed;