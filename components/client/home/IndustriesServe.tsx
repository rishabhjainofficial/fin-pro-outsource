'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Landmark, ArrowUpRight } from 'lucide-react';

const IndustriesServe = () => {
    const data = [
        {
            title: 'Real Estate',
            src: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Healthcare',
            src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Hotel & Restaurants',
            src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Retail & Wholesale',
            src: 'https://images.unsplash.com/photo-1606824722920-4c652a70f348?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Shipping & Logistics',
            src: 'https://images.unsplash.com/photo-1769144256181-698b8f807066?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Agriculture',
            src: 'https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Manufacturing',
            src: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'E-commerce',
            src: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Franchise',
            src: 'https://images.unsplash.com/photo-1726003352580-25aee6be334c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Small business accounting',
            src: 'https://images.unsplash.com/photo-1762831063505-68022b6133a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];

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
                    {data.map((industry) => (
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