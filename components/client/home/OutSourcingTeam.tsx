'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const OutSourcingTeam = (
    { teams }: {
        teams: {
            title: string;
            description: string;
            image: string;
            tags: string[];
            tagsBgColor: string[];
            tagsColor: string[];
        }[];
    }
) => {
    const [activeTab, setActiveTab] = useState(0);

    const activeData = teams[activeTab] || teams[0];

    return (
        <section className="w-full px-4 py-24 bg-brand-surface">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight mb-4">
                        The Outsourcing Team You Can <span className="text-brand-green">Count On</span>
                    </h2>
                    <p className="text-lg text-brand-slate max-w-2xl mx-auto font-medium">
                        Whether you need senior accountants or reliable payroll support — our elite professionals are ready to deliver peace of mind.
                    </p>
                </div>

                {/* Tabs Container */}
                <div className="flex justify-center mb-12">
                    <div className="flex p-1.5 bg-white border border-brand-border rounded-full overflow-x-auto no-scrollbar shadow-sm">
                        {teams.map((tab, index) => (
                            <button
                                key={tab.title}
                                onClick={() => setActiveTab(index)}
                                className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${activeTab === index ? 'text-white' : 'text-brand-slate hover:text-brand-navy'
                                    }`}
                            >
                                {activeTab === index && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-brand-navy rounded-full z-0"
                                        transition={{ type: 'spring', duration: 0.5 }}
                                    />
                                )}
                                <span className="relative z-10">{tab.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Card */}
                <div className="relative min-h-125">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-5xl shadow-2xl shadow-brand-navy/5 border border-brand-border overflow-hidden"
                        >
                            <div className="flex flex-col lg:flex-row items-stretch">
                                {/* Image Side */}
                                <div className="lg:w-1/2 relative min-h-75 lg:min-h-full">
                                    <Image
                                        src={activeData.image}
                                        alt={activeData.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-r from-white/10 to-transparent lg:from-transparent" />
                                </div>

                                {/* Text Side */}
                                <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {activeData.tags.map((tag, index) => (
                                            <span key={tag} className={`px-3 py-1 ${activeData.tagsBgColor[index]} ${activeData.tagsColor[index]} text-xs font-bold uppercase tracking-widest rounded-md`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                                        {activeData.title}
                                    </h3>
                                    <p className="text-brand-slate text-lg mb-8 leading-relaxed">
                                        {activeData.description}
                                    </p>

                                    <ul className="space-y-4 mb-10">
                                        {[
                                            'Dedicated, certified professionals',
                                            'Custom workflows for your team',
                                            'Fast onboarding & communication'
                                        ].map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-brand-navy font-semibold">
                                                <CheckCircle2 size={20} className="text-brand-green" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-4 mt-auto">
                                        <Link href="/contact-us">
                                            <button className="bg-brand-green text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-brand-green/20 hover:bg-brand-green/90 transition-all flex items-center gap-2 group">
                                                Hire Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </Link>
                                        {/* <button className="bg-white text-brand-navy border border-brand-border px-8 py-4 rounded-full font-bold hover:bg-brand-surface transition-all">
                                            Learn More
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default OutSourcingTeam;