'use client';

import { useState } from "react";
import { ArrowLeft, ArrowRight, CirclePlus } from 'lucide-react';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const StepsToHire = ({ steps }: {
    steps: {
        title: string;
        description: string;
        src: string
    }[]
}) => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <section className="w-full px-4 py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy border border-brand-navy/20 mb-4">
                        <CirclePlus size={14} className="text-brand-green" />
                        <span className="text-white text-xs font-bold uppercase tracking-wider">Onboarding Process</span>
                    </div> */}
                    <h2 className="text-4xl md:text-5xl font-black text-brand-navy tracking-tight mb-6">
                        Hire Experts in <span className="text-brand-green">5 Easy Steps</span>
                    </h2>
                    <p className="text-lg text-brand-slate max-w-2xl mx-auto font-medium">
                        Our streamlined process makes it simple for CPAs and businesses to acquire top accounting talent effortlessly.
                    </p>
                </div>

                {/* Steps Progress Tracker */}
                <div className="hidden md:flex justify-between items-center mb-16 relative px-10">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-brand-border -translate-y-1/2 z-0" />
                    <motion.div
                        className="absolute top-1/2 left-0 h-0.5 bg-brand-green -translate-y-1/2 z-0"
                        animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                        transition={{ duration: 0.5 }}
                    />

                    {steps.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentStep(idx)}
                            className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${currentStep >= idx ? 'bg-brand-green text-white scale-110 shadow-lg shadow-brand-green/30' : 'bg-white border-2 border-brand-border text-brand-slate'
                                }`}
                        >
                            {idx + 1}
                        </button>
                    ))}
                </div>

                {/* Content Slider */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col md:flex-row items-center gap-12 bg-brand-surface border border-brand-border rounded-5xl p-8 md:p-20"
                        >
                            {/* Image Side */}
                            <div className="w-full md:w-1/2 flex justify-center relative">
                                <div className="absolute inset-0 bg-brand-green/5 rounded-full blur-3xl" />
                                <Image
                                    src={steps[currentStep].src}
                                    alt={steps[currentStep].title}
                                    width={450}
                                    height={450}
                                    className="relative z-10 object-contain max-h-[300px] md:max-h-full"
                                />
                            </div>

                            {/* Text Side */}
                            <div className="w-full md:w-1/2">
                                <span className="inline-block px-4 py-1.5 rounded-lg bg-brand-navy text-white text-xs font-bold uppercase tracking-widest mb-6">
                                    Phase 0{currentStep + 1}
                                </span>
                                <h3 className="text-3xl md:text-5xl font-black text-brand-navy mb-6 leading-tight">
                                    {steps[currentStep].title}
                                </h3>
                                <p className="text-brand-slate text-lg md:text-xl font-medium leading-relaxed mb-10 italic">
                                    {steps[currentStep].description}
                                </p>

                                {/* Navigation Controls */}
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setCurrentStep(s => Math.max(0, s - 1))}
                                        disabled={currentStep === 0}
                                        className="p-4 rounded-full border border-brand-border bg-white text-brand-navy hover:bg-brand-navy hover:text-white transition-all disabled:opacity-20 shadow-sm"
                                    >
                                        <ArrowLeft size={24} />
                                    </button>
                                    <button
                                        onClick={() => setCurrentStep(s => Math.min(steps.length - 1, s + 1))}
                                        disabled={currentStep === steps.length - 1}
                                        className="p-4 rounded-full bg-brand-green text-white hover:bg-brand-navy transition-all disabled:opacity-20 shadow-xl shadow-brand-green/20"
                                    >
                                        <ArrowRight size={24} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default StepsToHire;