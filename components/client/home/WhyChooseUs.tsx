'use client'

import React from 'react'
import { ShieldCheck, Clock, Users, Lock, DollarSign, BarChart, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const features = [
    {
        title: 'Proven expertise',
        description: 'Professionals with deep domain experience delivering measurable outcomes.',
        icon: ShieldCheck,
        color: 'brand-green'
    },
    {
        title: 'Reliable delivery',
        description: 'Predictable timelines, consistent communication and SLA-backed engagements.',
        icon: Clock,
        color: 'brand-blue'
    },
    {
        title: 'Scalable teams',
        description: 'Quickly scale resource allocation up or down to match your needs.',
        icon: Users,
        color: 'brand-navy'
    },
    {
        title: 'Security & compliance',
        description: 'Enterprise-grade data controls and compliance with industry standards.',
        icon: Lock,
        color: 'brand-red'
    },
    {
        title: 'Transparent pricing',
        description: 'Simple, predictable pricing models with clear deliverables.',
        icon: DollarSign,
        color: 'brand-green'
    },
    {
        title: 'Data-driven insights',
        description: 'Actionable dashboards that help you make informed decisions.',
        icon: BarChart,
        color: 'brand-blue'
    },
]

const WhyChooseUs = () => {
    return (
        <section className="w-full px-4 py-24 bg-brand-surface">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-12 items-start">

                    {/* Left Side: Sticky Header */}
                    <div className="lg:sticky lg:top-32 space-y-6">
                        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy border border-brand-green/20">
                            <CheckCircle2 size={14} className="text-brand-green" />
                            <span className="text-white text-xs font-bold uppercase tracking-wider">The Adroit Advantage</span>
                        </div> */}
                        <h2 className="text-4xl md:text-5xl font-black text-brand-navy tracking-tight leading-[1.1]">
                            Why top firms <br />
                            <span className="text-brand-green">trust our process.</span>
                        </h2>
                        <p className="text-lg text-brand-slate font-medium leading-relaxed">
                            A partner focused on operational excellence, absolute confidentiality, and high-impact outcomes.
                        </p>

                        <div className="pt-4">
                            <Link href="/contact-us" className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-navy text-white font-bold shadow-xl shadow-brand-navy/20 hover:bg-brand-navy/90 transition-all">
                                Talk to an expert
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Bento Grid */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {features.map((f, idx) => {
                            const Icon = f.icon
                            return (
                                <div
                                    key={f.title}
                                    className="group relative bg-white border border-brand-border rounded-3xl p-8 hover:shadow-2xl hover:shadow-brand-navy/5 transition-all duration-500 overflow-hidden"
                                >
                                    {/* Subtle Corner Glow */}
                                    <div className={`absolute -top-12 -right-12 w-24 h-24 bg-${f.color}/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />

                                    <div className="relative z-10">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-brand-surface border border-brand-border text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-500`}>
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-brand-navy mb-3">{f.title}</h3>
                                            <p className="text-brand-slate font-medium leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                                                {f.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom Decorative Line */}
                                    <div className={`absolute bottom-0 left-0 h-1 bg-${f.color} w-0 group-hover:w-full transition-all duration-500`} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs