'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Database, Lock, UserCheck, Bell } from 'lucide-react';

const PrivacyPolicyPage = () => {
    const sections = [
        {
            icon: <Eye size={24} />,
            title: "Data Collection",
            content: "We collect information you provide directly via our contact forms, including name, email, and service interests. Technical data like IP addresses and browsing behavior is collected through Google Analytics and Microsoft Clarity."
        },
        {
            icon: <Database size={24} />,
            title: "Data Usage",
            content: "Your data is used solely to provide accounting services, improve website performance, and communicate with you. We do not sell or trade your professional data to third parties."
        },
        {
            icon: <Lock size={24} />,
            title: "Security Infrastructure",
            content: "Data is hosted on secure AWS EC2 instances. We use industry-standard encryption (AES-256) and secure SMTP protocols for all electronic communications."
        },
        {
            icon: <UserCheck size={24} />,
            title: "Your Rights",
            content: "You have the right to request access to, correction of, or deletion of your personal data. Contact us at our official email to exercise these rights."
        }
    ];

    return (
        <main className="w-full bg-white pt-32 pb-24 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="max-w-3xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy border border-brand-navy/20 mb-6"
                    >
                        <ShieldCheck size={14} className="text-brand-green" />
                        <span className="text-white text-xs font-bold uppercase tracking-widest">Privacy Standards</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black text-brand-navy tracking-tighter leading-tight mb-8">
                        Data <br />
                        <span className="text-brand-green italic">Protection.</span>
                    </h1>
                    <p className="text-xl text-brand-slate font-medium leading-relaxed">
                        At Gapbridge, we treat your financial and personal data with the same rigor as an enterprise-level audit. Here is how we manage your information.
                    </p>
                </div>

                {/* Policy Cards Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {sections.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-[2.5rem] border border-brand-border bg-brand-surface group hover:bg-white hover:shadow-xl transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-brand-navy text-white flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors">
                                {section.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">{section.title}</h3>
                            <p className="text-brand-slate text-sm font-medium leading-relaxed">
                                {section.content}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Detailed Information Section */}
                <div className="bg-brand-navy rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-[80px]" />
                    <div className="relative z-10 max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Bell className="text-brand-green" size={20} />
                            <h4 className="text-xs font-black uppercase tracking-[0.3em]">Policy Updates</h4>
                        </div>
                        <h2 className="text-3xl font-bold mb-6">Transparency & Compliance</h2>
                        <p className="text-white/70 font-medium leading-relaxed mb-8 text-sm">
                            We regularly review our privacy practices to comply with GDPR, CCPA, and evolving financial regulations. By using our site, you acknowledge our data management protocols.
                        </p>
                        <div className="pt-8 border-t border-white/10">
                            <p className="text-xs text-white/40 font-bold uppercase tracking-widest">Inquiries</p>
                            <p className="text-lg font-bold mt-1">infogapbridgeoutsourcing@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PrivacyPolicyPage;