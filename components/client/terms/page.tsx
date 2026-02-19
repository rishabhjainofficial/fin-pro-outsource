'use client';

import { motion } from 'framer-motion';
import { Scale, FileText, ShieldAlert, Gavel, Globe, Copyright } from 'lucide-react';

const TermsPage = () => {
    const sections = [
        {
            icon: <Scale size={24} />,
            title: "Agreement to Terms",
            content: "By accessing gapbridgebiz.com, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree, you are prohibited from using this site."
        },
        {
            icon: <FileText size={24} />,
            title: "Professional Disclaimer",
            content: "Information on this site is for general purposes only and does not constitute professional accounting or tax advice. A formal relationship is only established upon a signed Service Level Agreement (SLA)."
        },
        {
            icon: <Copyright size={24} />,
            title: "Intellectual Property",
            content: "All custom code, design elements, and brand assets are the exclusive property of Gapbridge. Unauthorized use or reproduction of our proprietary UI/UX is strictly prohibited."
        },
        {
            icon: <ShieldAlert size={24} />,
            title: "Limitation of Liability",
            content: "Gapbridge shall not be held liable for any damages arising out of the use or inability to use the materials on this website, including data loss or business interruption."
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
                        <Gavel size={14} className="text-brand-green" />
                        <span className="text-white text-xs font-bold uppercase tracking-widest">Legal Framework</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black text-brand-navy tracking-tighter leading-tight mb-8">
                        Terms of <br />
                        <span className="text-brand-green italic">Engagement.</span>
                    </h1>
                    <p className="text-xl text-brand-slate font-medium leading-relaxed">
                        These terms govern your use of our digital portal. For our full professional service terms, please refer to your individual partner contract.
                    </p>
                </div>

                {/* Terms Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {sections.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[2.5rem] border border-brand-border bg-brand-surface hover:bg-white hover:shadow-xl transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-brand-navy/5 text-brand-navy flex items-center justify-center mb-6">
                                {section.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">{section.title}</h3>
                            <p className="text-brand-slate text-sm font-medium leading-relaxed">
                                {section.content}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Final Clause Island */}
                <div className="bg-brand-surface border border-brand-border rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                            <Globe size={32} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-brand-navy">Governing Law</h4>
                            <p className="text-brand-slate text-sm font-medium">These terms are governed by the laws of our primary operating jurisdiction.</p>
                        </div>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="text-xs font-black uppercase tracking-widest text-brand-navy/40 mb-2">Questions?</p>
                        <p className="text-brand-navy font-bold">infogapbridgeoutsourcing@gmail.com</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default TermsPage;