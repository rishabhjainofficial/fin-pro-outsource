'use client'

import { useState } from "react";
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from "next/image";

const steps = [
    {
        title: '1. Primary Discussion',
        description: 'We kickstart our working relationship by discussing your business requirements & what you hope to achieve with our help.',
        src: 'https://cdn.prod.website-files.com/6718c309cc349b579872ddbb/6731dec47e22df831eca24ab_slide-img.svg'
    },
    {
        title: '2. SLAs Setup',
        description: 'After discussing your requirements, our team understands your operating procedures, helping us set the right SLAs.',
        src: 'https://cdn.prod.website-files.com/6718c309cc349b579872ddbb/6731dec47e22df831eca24ab_slide-img.svg'
    },
    {
        title: '3. Contract Agreement',
        description: 'Once the SLAs are set up, we officiate things by signing an agreement, outlining– team members, deadlines, clauses, etc.',
        src: 'https://cdn.prod.website-files.com/6718c309cc349b579872ddbb/6731dec47e22df831eca24ab_slide-img.svg'
    },
    {
        title: '4. Services Commencement',
        description: 'After finalizing all paperwork, we begin executing the pre-defined tasks and required functions.',
        src: 'https://cdn.prod.website-files.com/6718c309cc349b579872ddbb/6731dec47e22df831eca24ab_slide-img.svg'
    },
    {
        title: '5. Weekly Review Meetings',
        description: 'We conduct weekly meets, ensuring we address any concern & keep client satisfaction at the heart of our support.',
        src: 'https://cdn.prod.website-files.com/6718c309cc349b579872ddbb/6731dec47e22df831eca24ab_slide-img.svg'
    },
];

const StepsToHire = () => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <section className="w-full px-4 py-16 bg-linear-to-b from-white to-slate-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Hire Top Accounting Professionals in 5 Easy Steps
                    </h2>
                    <p className="mt-3 text-base text-gray-600 max-w-2xl mx-auto">
                        Our streamlined 5-step process makes it simple for CPAs and businesses to hire top accounting talent effortlessly.
                    </p>
                </div>

                <div className="relative">
                    <div className="flex flex-col md:flex-row items-center gap-8 bg-white border border-slate-200 rounded-4xl p-8 md:p-12 shadow-2xl">
                        <div className="w-full md:w-1/2 flex justify-center">
                            <Image
                                src={steps[currentStep].src}
                                alt={steps[currentStep].title}
                                width={350}
                                height={350}
                                className="object-contain max-h-64 md:max-h-full"
                            />
                        </div>

                        <div className="w-full md:w-1/2 text-left">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#5d9446]/10 text-[#5d9446] text-xs font-bold uppercase tracking-wider mb-6">
                                Step {currentStep + 1}
                            </span>
                            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                {steps[currentStep].title.split('. ')[1]}
                            </h3>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                {steps[currentStep].description}
                            </p>
                        </div>
                    </div>

                    {/* Navigation arrows */}
                    <button
                        aria-label="Previous step"
                        onClick={() => setCurrentStep(s => Math.max(0, s - 1))}
                        className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white border border-slate-200 rounded-full p-2 shadow-sm hover:bg-slate-50 disabled:opacity-40 ${currentStep === 0 ? 'pointer-events-none opacity-40' : ''}`}
                        disabled={currentStep === 0}
                    >
                        <ArrowLeft className="w-4 h-4" />
                    </button>

                    <button
                        aria-label="Next step"
                        onClick={() => setCurrentStep(s => Math.min(steps.length - 1, s + 1))}
                        className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white border border-slate-200 rounded-full p-2 shadow-sm hover:bg-slate-50 disabled:opacity-40 ${currentStep === steps.length - 1 ? 'pointer-events-none opacity-40' : ''}`}
                        disabled={currentStep === steps.length - 1}
                    >
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default StepsToHire