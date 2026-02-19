'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Server, Eye, FileCheck, Database, Zap } from 'lucide-react';

const SecurityPage = () => {
    const protocols = [
        {
            icon: <Lock />,
            title: "End-to-End Encryption",
            desc: "All financial data is encrypted in transit using TLS 1.3 and at rest using AES-256 standards."
        },
        {
            icon: <Server />,
            title: "AWS Infrastructure",
            desc: "Hosted on secure AWS EC2 instances with dedicated VPCs and multi-factor authentication (MFA) protocols."
        },
        {
            icon: <Eye />,
            title: "Zero-Trust Access",
            desc: "Internal access to client files is restricted via strict Identity and Access Management (IAM) policies."
        },
    ];

    return (
        <main className="w-full bg-white pt-32 pb-24 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="max-w-3xl mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy border border-brand-navy/20 mb-6"
                    >
                        <ShieldCheck size={14} className="text-brand-green" />
                        <span className="text-white text-xs font-bold uppercase tracking-widest">Enterprise-Grade Security</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black text-brand-navy tracking-tighter leading-tight mb-8">
                        Your Data, <br />
                        <span className="text-brand-green italic">Fortified.</span>
                    </h1>
                    <p className="text-xl text-brand-slate font-medium leading-relaxed">
                        In the accounting world, trust is built on security. We combine rigorous financial protocols with cutting-edge cloud architecture to protect your firm’s most sensitive assets.
                    </p>
                </div>

                {/* Core Security Pillars */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {protocols.map((item, idx) => (
                        <div key={idx} className="p-10 rounded-[2.5rem] border border-brand-border bg-brand-surface hover:shadow-2xl transition-all duration-500 group">
                            <div className="w-14 h-14 rounded-2xl bg-brand-navy text-white flex items-center justify-center mb-8 group-hover:bg-brand-green transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy mb-4">{item.title}</h3>
                            <p className="text-brand-slate font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Technical Compliance "Island" */}
                <div className="bg-brand-navy rounded-[3.5rem] p-12 md:p-20 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/20 rounded-full blur-[120px]" />

                    <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <h2 className="text-4xl font-black tracking-tight mb-6">Compliance & <br />Data Sovereignty</h2>
                            <p className="text-white/70 text-lg mb-8">
                                We adhere to global standards ensuring that your outsourced operations meet the same compliance benchmarks as your in-house team.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "GDPR & CCPA Compliant Data Handling",
                                    "SOC 2 Type II Mapped Internal Controls",
                                    "Regular Automated Security Patching",
                                    "Daily Off-site Encrypted Backups"
                                ].map((list, i) => (
                                    <div key={i} className="flex items-center gap-3 font-bold text-sm">
                                        <div className="w-5 h-5 rounded-full bg-brand-green flex items-center justify-center">
                                            <Zap size={10} className="text-white" />
                                        </div>
                                        {list}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square rounded-[2rem] bg-white/5 border border-white/10 flex flex-col items-center justify-center p-6 text-center">
                                <Database className="text-brand-green mb-4" size={32} />
                                <span className="text-xs font-black uppercase tracking-widest">Data Isolation</span>
                            </div>
                            <div className="aspect-square rounded-[2rem] bg-white/5 border border-white/10 flex flex-col items-center justify-center p-6 text-center">
                                <FileCheck className="text-brand-green mb-4" size={32} />
                                <span className="text-xs font-black uppercase tracking-widest">Audit Trails</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SecurityPage;