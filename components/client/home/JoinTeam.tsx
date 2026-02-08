'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight, Sparkles } from 'lucide-react';

const JoinTeam = () => {
    const images = [
        {
            src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=869&auto=format&fit=crop',
            title: 'Office hallway'
        },
        {
            src: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1032&auto=format&fit=crop',
            title: 'Meeting Room 1'
        },
        {
            src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=869&auto=format&fit=crop',
            title: 'Lunch Area'
        },
        {
            src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=870&auto=format&fit=crop',
            title: 'Team Work'
        },
        {
            src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=870&auto=format&fit=crop',
            title: 'Meeting Room 2'
        },
        {
            src: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=870&auto=format&fit=crop',
            title: 'Work Space'
        },
        {
            src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Spacious boardroom'
        }
    ]

    return (
        <section className="w-full px-4 py-24 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Header Block */}
                <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
                    <div className="max-w-2xl text-center lg:text-left">
                        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy text-white mb-6">
                            <Sparkles size={14} className="text-brand-green" />
                            <span className="text-xs font-bold uppercase tracking-widest">Careers at Gapbridge</span>
                        </div> */}
                        <h2 className="text-4xl md:text-6xl font-black text-brand-navy tracking-tight leading-[1.1] mb-6">
                            Be Part of <br />
                            <span className="text-brand-green">Something Great.</span>
                        </h2>
                        <p className="text-lg text-brand-slate font-medium leading-relaxed">
                            Our infrastructure speaks the same language as our services: refined, reliable, and built for excellence. We provide the clarity and calm needed to deliver exceptional results.
                        </p>
                    </div>

                    <button className="group relative flex items-center gap-3 px-8 py-4 bg-white border-2 border-brand-navy text-brand-navy rounded-full font-bold hover:bg-brand-navy hover:text-white transition-all duration-300 shadow-xl shadow-brand-navy/5">
                        Join Our Team
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* The Artistic Bento Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[200px] md:auto-rows-[250px]">
                    {images.map((image, index) => {
                        // Creating a high-end editorial layout
                        const isMain = index === 0;
                        const isWide = index === 5;
                        const isTall = index === 2;

                        return (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className={`
                                    relative overflow-hidden rounded-5xl group shadow-2xl shadow-brand-navy/5
                                    ${isMain ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' : ''}
                                    ${isWide ? 'col-span-2 md:col-span-2' : ''}
                                    ${isTall ? 'row-span-2' : ''}
                                `}
                            >
                                <Image
                                    src={image.src}
                                    alt={`Office Culture ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />

                                {/* Glassmorphism Label */}
                                <div className="absolute inset-0 bg-linear-to-t from-brand-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                    <div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-2xl w-full flex justify-between items-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="text-white font-bold text-sm tracking-wide">{image.title}</span>
                                        <Users size={16} className="text-brand-green" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default JoinTeam;