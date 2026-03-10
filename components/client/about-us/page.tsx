'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Users, Target, Trophy, Landmark,
    ArrowRight, ShieldCheck, Heart, GraduationCap
} from 'lucide-react';
import Link from 'next/link';

const AboutUs = ({ teams }: { teams: { id: number; title: string; role: string; src: string }[] }) => {
    return (
        <div className="w-full bg-white pt-20 pb-24 px-6">
            <div className="max-w-7xl mx-auto">

                {/* --- Executive Header --- */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border">
                            <Trophy size={14} className="text-brand-green" />
                            <span className="text-brand-navy text-xs font-black uppercase tracking-widest">Global Excellence</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-brand-navy tracking-tighter leading-tight">
                            Engineering <br />
                            <span className="text-brand-green italic">Financial Clarity.</span>
                        </h1>
                        <p className="text-xl text-brand-slate font-medium leading-relaxed">
                            Gapbridge was established to solve the complexities of modern financial operations. We provide the infrastructure and expertise that allow firms to scale with confidence and precision.
                        </p>
                    </motion.div>
                </div>

                {/* --- Core Team --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-16">
                    {teams.map((item) => (
                        <motion.div
                            key={item.id}
                            whileHover={{ y: -5 }}
                            className="group relative flex flex-col items-center text-center"
                        >
                            {/* Image Container: Clean & Minimal */}
                            <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-4 bg-brand-surface border border-brand-border group-hover:border-brand-green/30 transition-all duration-500 shadow-sm group-hover:shadow-xl">
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    fill
                                    className="object-fit grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                />

                                {/* Subtle Overlay on Hover */}
                                <div className="absolute inset-0 bg-linear-to-t from-brand-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Typography: Focused & Professional */}
                            <div className="space-y-1">
                                <h3 className="text-sm font-black text-brand-navy tracking-tight group-hover:text-brand-green transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-slate/60">
                                    {item.role || 'Associate'}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- Mission Statement (Dark Block) --- */}
                <div className="bg-brand-navy rounded-[4rem] overflow-hidden relative mb-16">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                    <div className="relative z-10 flex flex-col lg:flex-row items-center p-12 md:p-24 gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8">
                                A Global Hub for <br /> <span className="text-brand-green">Financial Experts.</span>
                            </h2>
                            <p className="text-white/60 text-lg leading-relaxed mb-8">
                                Headquartered with a global reach, Gapbridge curates the top 1% of financial talent. Our rigorous selection process ensures that our partners receive support from accountants and analysts who are not only technically proficient but strategically minded.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-brand-green text-3xl font-black mb-1">500+</div>
                                    <div className="text-white/40 text-xs font-bold uppercase tracking-widest">Successful Engagements</div>
                                </div>
                                <div>
                                    <div className="text-brand-green text-3xl font-black mb-1">24/7</div>
                                    <div className="text-white/40 text-xs font-bold uppercase tracking-widest">Global Support</div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full flex justify-center">
                            <div className="relative w-full aspect-square max-w-md bg-white/5 rounded-[3rem] border border-white/10 flex items-center justify-center overflow-hidden">
                                <Landmark size={120} className="text-brand-green opacity-20" />
                                <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-transparent to-transparent" />
                                <div className="absolute bottom-10 text-center w-full px-6">
                                    <div className="text-white font-black text-xl mb-1">Gapbridge Partner Network</div>
                                    <div className="text-brand-green text-sm font-bold uppercase tracking-widest">Integrated Excellence</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Culture & Impact --- */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-black text-brand-navy tracking-tight">Reliability, Scaled.</h2>
                        <p className="text-brand-slate text-lg font-medium leading-relaxed">
                            Our culture is built on the pillars of transparency and accountability. We empower our teams with the best financial technology to ensure that every client—from independent startups to established CPA firms—receives an uncompromising level of service.
                        </p>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-brand-surface rounded-xl border border-brand-border text-brand-navy font-bold text-sm">
                                <Users size={16} className="text-brand-green" />
                                Expert-Led Teams
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-brand-surface rounded-xl border border-brand-border text-brand-navy font-bold text-sm">
                                <Target size={16} className="text-brand-green" />
                                Outcome Focused
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-64 bg-brand-surface rounded-[2.5rem] border border-brand-border overflow-hidden relative">
                            <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop" fill alt="Collaboration" className="object-cover" />
                        </div>
                        <div className="h-64 bg-brand-surface rounded-[2.5rem] border border-brand-border overflow-hidden relative translate-y-8">
                            <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=500&auto=format&fit=crop" fill alt="Strategy Session" className="object-cover" />
                        </div>
                    </div>
                </div>

                {/* --- Footer CTA --- */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-black text-brand-navy mb-10">Partner with a firm that values your growth.</h2>
                    <Link href="/contact-us" className="inline-flex items-center gap-3 bg-brand-navy text-white px-10 py-5 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-brand-green transition-all group">
                        Start Your Journey <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;