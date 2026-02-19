'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Search, ShieldCheck, BarChart,
    RefreshCcw, ArrowRight, Layers, Settings
} from 'lucide-react';

const HowWeWork = () => {
    const steps = [
        {
            number: "01",
            title: "Discovery & Audit",
            desc: "We perform a deep dive into your current ledgers and workflows. Our analysis identifies structural inefficiencies to ensure a clean starting point for optimization.",
            icon: <Search className="text-brand-green" size={24} />
        },
        {
            number: "02",
            title: "Architectural Setup",
            desc: "We integrate specialized automation tools into your existing ERP, ensuring a seamless, zero-friction handoff between your internal team and our experts.",
            icon: <Layers className="text-brand-green" size={24} />
        },
        {
            number: "03",
            title: "Security & Compliance",
            desc: "Before operations begin, we establish encrypted channels and protocols, ensuring all financial data adheres to global regulatory and security standards.",
            icon: <ShieldCheck className="text-brand-green" size={24} />
        },
        {
            number: "04",
            title: "Execution & Reporting",
            desc: "Our senior financial teams manage daily operations, providing you with real-time dashboards and weekly strategic insights to drive growth.",
            icon: <BarChart className="text-brand-green" size={24} />
        }
    ];

    return (
        <div className="w-full bg-white pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header: The Operational Philosophy */}
                <div className="text-center max-w-3xl mx-auto mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-surface border border-brand-border mb-8"
                    >
                        <Settings size={14} className="text-brand-green animate-spin-slow" />
                        <span className="text-brand-navy text-xs font-black uppercase tracking-[0.2em]">The Process Engine</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black text-brand-navy tracking-tighter leading-tight mb-8">
                        Precision in <br />
                        <span className="text-brand-green italic">Every Interaction.</span>
                    </h1>
                    <p className="text-xl text-brand-slate font-medium leading-relaxed">
                        We build financial infrastructure that scales. Our process is transparent, automated, and built on years of operational excellence in the outsourcing sector.
                    </p>
                </div>

                {/* The Roadmap Section */}
                <div className="relative mb-32">
                    {/* Vertical Center Line for Desktop */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-border -translate-x-1/2" />

                    <div className="space-y-24 lg:space-y-32">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col lg:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Text Content */}
                                <div className="lg:w-1/2 space-y-6">
                                    <div className="text-6xl font-black text-brand-green/10 mb-2">{step.number}</div>
                                    <h3 className="text-3xl font-extrabold text-brand-navy">{step.title}</h3>
                                    <p className="text-lg text-brand-slate font-medium leading-relaxed max-w-md">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Center Marker */}
                                <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-white border-4 border-brand-navy flex items-center justify-center z-10">
                                        <div className="w-3 h-3 rounded-full bg-brand-green" />
                                    </div>
                                </div>

                                {/* Visual Element Placeholder */}
                                <div className="lg:w-1/2 flex justify-center">
                                    <div className="w-full max-w-sm aspect-video bg-brand-surface rounded-[3rem] border border-brand-border flex items-center justify-center p-12 transition-transform hover:scale-105 duration-500">
                                        <div className="text-brand-green">
                                            {step.icon}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Integration Dashboard Preview Block */}
                <div className="bg-brand-navy rounded-[4rem] p-12 md:p-24 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-[100px]" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8">
                                One Team. <br />
                                <span className="text-brand-green">Shared Environment.</span>
                            </h2>
                            <p className="text-white/60 text-lg leading-relaxed mb-8 font-medium">
                                We utilize advanced version control for financial documentation and automated reporting workflows. We integrate into your technology stack to ensure data flows without friction.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {['QuickBooks', 'Xero', 'Microsoft Teams', 'Slack', 'Zoho'].map((tool) => (
                                    <span key={tool} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white/40 text-xs font-bold uppercase tracking-widest">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex justify-center">
                            <div className="relative w-64 h-64 bg-brand-green/20 rounded-full flex items-center justify-center">
                                <RefreshCcw size={80} className="text-brand-green animate-spin-slow" />
                                <div className="absolute inset-0 border-2 border-brand-green border-dashed rounded-full animate-spin-slow" style={{ animationDuration: '10s' }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Closing Call to Action */}
                <div className="mt-32 text-center p-16 rounded-[4rem] border-2 border-dashed border-brand-border">
                    <h2 className="text-3xl font-black text-brand-navy mb-6">Ready to initiate your workflow audit?</h2>
                    <Link href="/contact-us">
                        <button className="flex items-center gap-3 bg-brand-navy text-white px-10 py-5 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-brand-green transition-all mx-auto group">
                            Begin Discovery <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HowWeWork;