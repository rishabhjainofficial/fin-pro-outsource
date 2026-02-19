"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    TrendingUp, Clock, Users2, ShieldCheck,
    ArrowRight, CheckCircle2, Globe2
} from 'lucide-react';

const ServiceDetailPage = ({ serviceData }: { serviceData: any }) => {
    const benefits = [
        {
            title: "Cost Efficiency",
            metric: "Save 50%",
            desc: "Significant reduction in operational overhead by leveraging our specialized offshore teams.",
            icon: <TrendingUp className="text-brand-green" size={24} />
        },
        {
            title: "Overnight Turnaround",
            metric: "24h Delivery",
            desc: "We work while you sleep. Your financial data is updated and ready by your morning.",
            icon: <Clock className="text-brand-green" size={24} />
        },
        {
            title: "Scalable Talent",
            metric: "On-Demand",
            desc: "Instantly scale your workforce during busy tax seasons without the burden of full-time hiring.",
            icon: <Users2 className="text-brand-green" size={24} />
        },
        {
            title: "Data Security",
            metric: "ISO Standard",
            desc: "Enterprise-grade security protocols ensuring all US/UK client data remains strictly confidential.",
            icon: <ShieldCheck className="text-brand-green" size={24} />
        }
    ];

    return (
        <div className="bg-[#F8FAFC] min-h-screen">
            {/* 1. Hero Section (The "Island" Header) */}
            <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white border border-brand-border p-12 md:p-20 rounded-[3.5rem] shadow-sm relative overflow-hidden"
                >
                    <div className="max-w-3xl relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                                Solutions for Business Owners
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-brand-navy leading-tight mb-8">
                            {serviceData.title}
                        </h1>
                        <p className="text-xl text-brand-slate font-medium opacity-70 leading-relaxed mb-10">
                            {serviceData.description}
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-brand-navy text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-green transition-all shadow-lg shadow-brand-navy/10">
                                Consult with an Expert <ArrowRight size={18} />
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* 2. THE BENEFITS SECTION (The "Value Grid") */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-black text-brand-navy mb-4">Strategic Advantages</h2>
                        <p className="text-brand-slate font-medium opacity-60">
                            Driving growth for CPAs and Business Owners through optimized financial workflows.
                        </p>
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-brand-green font-black text-sm uppercase tracking-tighter">
                        <Globe2 size={18} /> US & UK Compliance Ready
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8 }}
                            className="bg-white p-8 rounded-[2.5rem] border border-brand-border hover:border-brand-green hover:shadow-2xl hover:shadow-brand-navy/5 transition-all duration-500"
                        >
                            <div className="w-14 h-14 bg-brand-surface rounded-2xl flex items-center justify-center mb-6">
                                {benefit.icon}
                            </div>
                            <div className="text-2xl font-black text-brand-navy mb-1">{benefit.metric}</div>
                            <h3 className="text-lg font-bold text-brand-navy mb-4">{benefit.title}</h3>
                            <p className="text-sm text-brand-slate leading-relaxed opacity-70">
                                {benefit.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 3. Detailed Service Content (The "Methodology") */}
            <section className="max-w-7xl mx-auto px-6 py-20 border-t border-brand-border">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-brand-green/20 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="bg-brand-navy rounded-[3rem] p-12 text-white relative z-10">
                            <h3 className="text-3xl font-black mb-8 italic">"Our methodology ensures 100% audit-readiness, allowing you to focus on client advisory while we handle the data."</h3>
                            <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                                <CheckCircle2 size={32} className="text-brand-green" />
                                <div>
                                    <div className="font-black uppercase tracking-widest text-xs opacity-50">Operational Standard</div>
                                    <div className="font-bold text-lg text-brand-green">Accurate. Secure. Timely.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-4xl font-black text-brand-navy leading-tight">
                            How we integrate with your team.
                        </h2>
                        <p className="text-brand-slate leading-relaxed font-medium opacity-70">
                            Our process is designed to be invisible to your clients but invaluable to your operations. Whether you use Xero, QuickBooks, or proprietary software, our team plugs in seamlessly.
                        </p>
                        <ul className="space-y-4">
                            {['Dedicated Account Manager', 'End-to-end Process Mapping', 'Monthly Performance Reviews'].map((item) => (
                                <li key={item} className="flex items-center gap-3 font-bold text-brand-navy">
                                    <div className="w-6 h-6 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center">
                                        <CheckCircle2 size={14} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetailPage;