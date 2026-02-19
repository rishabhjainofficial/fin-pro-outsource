'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ShieldCheck, Zap, Users, Globe,
    BarChart3, HeartHandshake, ArrowRight, Star
} from 'lucide-react';

const WhyGapbridge = () => {
    const values = [
        {
            title: "Clinical Precision",
            desc: "In accounting, a decimal point is the difference between success and audits. We operate with 99.9% accuracy.",
            icon: <ShieldCheck className="text-brand-green" size={24} />
        },
        {
            title: "Scalable DNA",
            desc: "Built by developers and accountants, our workflows scale as fast as your growth charts do.",
            icon: <Zap className="text-brand-green" size={24} />
        },
        {
            title: "Human-Centric Tech",
            desc: "We use AI to automate the mundane, so our senior accountants can focus on your strategic advisory.",
            icon: <Users className="text-brand-green" size={24} />
        }
    ];

    return (
        <div className="w-full bg-white pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* --- Hero Section --- */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy border border-brand-navy/20">
                            <Star size={14} className="text-brand-green fill-brand-green" />
                            <span className="text-white text-xs font-black uppercase tracking-widest">The Gapbridge Standard</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-brand-navy tracking-tighter leading-tight">
                            More than an <br />
                            <span className="text-brand-green italic">Outsource Partner.</span>
                        </h1>
                        <p className="text-xl text-brand-slate font-medium leading-relaxed max-w-xl">
                            {`We bridge the gap between complex financial operations and your business's ultimate potential through adroit execution and tireless integrity.`}
                        </p>
                    </motion.div>

                    <div className="relative h-125 rounded-[4rem] overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
                            alt="Strategic partnership"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-brand-navy/10" />
                    </div>
                </div>

                {/* --- Values Grid (Bento Style) --- */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    {values.map((value, idx) => (
                        <div key={idx} className="p-10 bg-brand-surface rounded-5xl border border-brand-border hover:bg-white hover:shadow-2xl hover:shadow-brand-navy/5 transition-all duration-500 group">
                            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-navy group-hover:text-white transition-colors duration-500">
                                {value.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy mb-4">{value.title}</h3>
                            <p className="text-brand-slate font-medium leading-relaxed">
                                {value.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* --- The "Adroit" Difference (Split Section) --- */}
                <div className="bg-brand-navy rounded-[4rem] overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-green/10 -skew-x-12 translate-x-20 hidden lg:block" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center p-12 md:p-24 gap-16">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                                Built for the <br /> <span className="text-brand-green">Next Generation</span> of Firms.
                            </h2>
                            <p className="text-white/60 text-lg leading-relaxed">
                                {`Unlike traditional outsourcing models, Gapbridge integrates directly into your Slack, Teams, and ERPs. We don't just work for you; we work `}<span className="text-white font-bold">with</span> you.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    { icon: <Globe size={18} />, text: "Global-Ready Compliance" },
                                    { icon: <BarChart3 size={18} />, text: "Real-time Financial Dashboards" },
                                    { icon: <HeartHandshake size={18} />, text: "Dedicated Success Manager" }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-white font-bold">
                                        <div className="text-brand-green">{item.icon}</div>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-center">
                                <div className="text-4xl font-black text-brand-green mb-2">6+</div>
                                <div className="text-white/60 text-xs font-black uppercase tracking-widest">Years Experience</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-center">
                                <div className="text-4xl font-black text-brand-green mb-2">99%</div>
                                <div className="text-white/60 text-xs font-black uppercase tracking-widest">Retention Rate</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-center col-span-2">
                                <div className="text-brand-green font-bold mb-2 uppercase tracking-tighter">Technology Stack</div>
                                <div className="text-white/40 text-sm">MERN • Laravel • Next.js • QuickBooks • Xero</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Final CTA --- */}
                <div className="mt-32 text-center">
                    <h2 className="text-4xl font-black text-brand-navy mb-8">Ready to see the difference?</h2>
                    <Link href="/contact-us">
                        <button className="group relative px-10 py-5 bg-brand-navy text-white rounded-full font-black uppercase tracking-[0.2em] text-sm overflow-hidden transition-all hover:bg-brand-green">
                            <span className="relative z-10 flex items-center gap-3">
                                Schedule a Workflow Audit <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default WhyGapbridge;