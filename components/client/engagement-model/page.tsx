'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    UserPlus, Layers, Calendar, BarChart4,
    CheckCircle2, ArrowRight, Briefcase, Zap
} from 'lucide-react';

const EngagementModel = () => {
    const models = [
        {
            title: "Staff Augmentation",
            subtitle: "On-Demand Expertise",
            desc: "Scale internal capacity instantly with senior accountants, tax preparers, or bookkeepers who integrate directly into existing workflows.",
            features: ["Full-time or Part-time", "Direct reporting to your management", "Seamless ERP integration", "Reduced overhead costs"],
            icon: <UserPlus className="text-brand-green" size={28} />,
            color: "bg-brand-surface"
        },
        {
            title: "Managed Team",
            subtitle: "End-to-End Outsourcing",
            desc: "A complete, self-managed financial department including an Account Manager and Senior Associates to handle complex operations.",
            features: ["Dedicated Lead Partner", "Standard Operating Procedure development", "Weekly strategic reviews", "Fully scalable architecture"],
            icon: <Layers className="text-brand-green" size={28} />,
            color: "bg-brand-navy text-white"
        },
        {
            title: "Project-Based",
            subtitle: "Specialized Intervention",
            desc: "Specific financial projects such as back-tax cleanup, audit support, or large-scale software migrations and implementations.",
            features: ["Fixed-scope deliverables", "Defined project timelines", "Expert-led execution", "Strategic post-project handoff"],
            icon: <Calendar className="text-brand-green" size={28} />,
            color: "bg-brand-surface"
        }
    ];

    return (
        <main className="w-full bg-white pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="max-w-3xl mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border mb-6"
                    >
                        <Briefcase size={14} className="text-brand-green" />
                        <span className="text-brand-navy text-xs font-black uppercase tracking-widest">Engagement Styles</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black text-brand-navy tracking-tighter leading-tight mb-8">
                        Built for <br />
                        <span className="text-brand-green italic">Your Growth.</span>
                    </h1>
                    <p className="text-xl text-brand-slate font-medium leading-relaxed">
                        Every firm operates at a unique pace. Our engagement models are engineered to sync with your specific requirements, providing a tailored financial infrastructure.
                    </p>
                </div>

                {/* Model Comparison Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-32">
                    {models.map((model, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className={`p-10 rounded-[3rem] border border-brand-border transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-brand-navy/5 flex flex-col ${model.color}`}
                        >
                            <div className="mb-8 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                                {model.icon}
                            </div>
                            <div className="mb-2 text-xs font-black uppercase tracking-[0.2em] opacity-60">{model.subtitle}</div>
                            <h3 className="text-3xl font-bold mb-6">{model.title}</h3>
                            <p className={`mb-10 font-medium leading-relaxed ${model.color.includes('navy') ? 'text-white/70' : 'text-brand-slate'}`}>
                                {model.desc}
                            </p>

                            <ul className="space-y-4 mb-12 flex-1">
                                {model.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-bold">
                                        <CheckCircle2 size={18} className="text-brand-green shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-full font-black uppercase tracking-widest text-xs transition-all ${model.color.includes('navy')
                                ? 'bg-brand-green text-white hover:bg-white hover:text-brand-navy'
                                : 'bg-brand-navy text-white hover:bg-brand-green'
                                }`}>
                                Learn More
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Scalability & Transparency Section */}
                <div className="bg-brand-surface rounded-[4rem] p-12 md:p-24 overflow-hidden relative">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-brand-navy tracking-tight mb-8">
                                Why Our Model <br />
                                <span className="text-brand-green">Delivers Results.</span>
                            </h2>
                            <div className="space-y-8">
                                {[
                                    { title: "Cost Transparency", desc: "Our flat-rate or hourly pricing structures include all necessary software licenses and management overhead." },
                                    { title: "Risk-Managed Integration", desc: "Experience our seamless operational integration with a 30-day pilot before long-term commitment." },
                                    { title: "SLA-Backed Performance", desc: "Every partnership is governed by strict Service Level Agreements, ensuring consistent quality and 99.9% accuracy." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center shrink-0">
                                            <Zap size={18} className="text-brand-green" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-brand-navy text-lg mb-1">{item.title}</h4>
                                            <p className="text-brand-slate font-medium text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interactive Logic Preview */}
                        <div className="relative">
                            <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-brand-border relative z-10">
                                <BarChart4 size={60} className="text-brand-green mb-8" />
                                <h4 className="text-2xl font-black text-brand-navy mb-4">Lifecycle Scaling</h4>
                                <p className="text-brand-slate font-medium mb-8">
                                    Our models are designed to adapt. As your firm matures, we facilitate the transition from individual staff support to full-managed department operations.
                                </p>
                                <div className="h-2 w-full bg-brand-surface rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '85%' }}
                                        viewport={{ once: true }}
                                        className="h-full bg-brand-green"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between text-[10px] font-black uppercase tracking-widest text-brand-navy/40">
                                    <span>Startup</span>
                                    <span>Mid-Market</span>
                                    <span>Enterprise</span>
                                </div>
                            </div>
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-green/10 rounded-full blur-[100px]" />
                        </div>
                    </div>
                </div>

                {/* Bottom Call to Action */}
                <div className="mt-32 text-center">
                    <p className="text-brand-slate/60 font-bold uppercase tracking-[0.3em] text-xs mb-8">Ready to define your partnership?</p>
                    <button className="inline-flex items-center gap-3 bg-brand-navy text-white px-10 py-5 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-brand-green transition-all group shadow-2xl shadow-brand-navy/10">
                        Consult with a Partner <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
            </div>
        </main>
    );
};

export default EngagementModel;