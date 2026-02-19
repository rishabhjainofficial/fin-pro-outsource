'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Landmark, ArrowUpRight } from 'lucide-react';

const IndustriesServe = ({ industries }: {
    industries: {
        title: string;
        src: string
    }[]
}) => {
    return (
        <section className="w-full px-4 py-24 bg-brand-surface">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy border border-brand-navy/10 mb-4">
                                <Landmark size={14} className="text-brand-green" />
                                <span className="text-white text-xs font-bold uppercase tracking-wider">Sector Expertise</span>
                            </div> */}
                        <h2 className="text-4xl md:text-5xl font-black text-brand-navy tracking-tight leading-none">
                            Tailored Solutions <br />
                            <span className="text-brand-green font-extrabold italic">Across Industries.</span>
                        </h2>
                    </div>
                    <p className="text-brand-slate text-lg font-medium max-w-sm">
                        Diversified accounting expertise designed to meet the unique regulatory needs of your specific sector.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {industries.map((industry) => (
                        <div
                            key={industry.title}
                            className="group relative h-[280px] rounded-3xl overflow-hidden bg-brand-navy flex items-end p-6 cursor-default transition-all duration-500"
                        >
                            {/* The Image (Revealed on Hover) */}
                            <Image
                                src={industry.src}
                                alt={industry.title}
                                fill
                                className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 ease-in-out"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/20 to-transparent" />

                            {/* Hover Border Accent */}
                            <div className="absolute inset-0 border-2 border-brand-green/0 group-hover:border-brand-green/40 rounded-3xl transition-all duration-500 z-20" />

                            {/* Content */}
                            <div className="relative z-10 w-full">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-bold text-white leading-tight">
                                        {industry.title}
                                    </h3>
                                    <div className="bg-brand-green p-1.5 rounded-full opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        <ArrowUpRight size={14} className="text-white" />
                                    </div>
                                </div>
                                <div className="h-1 w-0 bg-brand-green mt-2 group-hover:w-full transition-all duration-500" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesServe;