'use client'

import React from 'react'
import { ShieldCheck, Clock, Users, Lock, DollarSign, BarChart, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const features = [
    {
        title: 'Proven expertise',
        description: 'Dedicated professionals with deep domain experience and a track record of delivering measurable outcomes.',
        icon: ShieldCheck,
    },
    {
        title: 'Reliable delivery',
        description: 'Predictable timelines, consistent communication and SLA-backed engagements.',
        icon: Clock,
    },
    {
        title: 'Scalable teams',
        description: 'Quickly scale resource allocation up or down to match your business needs.',
        icon: Users,
    },
    {
        title: 'Security & compliance',
        description: 'Enterprise-grade data controls and compliance with industry standards.',
        icon: Lock,
    },
    {
        title: 'Transparent pricing',
        description: 'Simple, predictable pricing models with clear deliverables.',
        icon: DollarSign,
    },
    {
        title: 'Data-driven insights',
        description: 'Actionable dashboards and reports that help you make informed decisions.',
        icon: BarChart,
    },
]

const WhyChooseUs = () => {
    return (
        <section className="w-full px-4 py-16 bg-linear-to-b from-white to-slate-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Why organizations choose us
                    </h2>
                    <p className="mt-3 text-base text-gray-600 max-w-2xl mx-auto">
                        A trusted partner focused on operational excellence, confidentiality, and outcomes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
                    {/* Left: features grid */}
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((f) => {
                                const Icon = f.icon
                                return (
                                    <div
                                        key={f.title}
                                        tabIndex={0}
                                        role="article"
                                        aria-label={f.title}
                                        className="group bg-slate-50 border border-slate-100 rounded-xl p-4 flex gap-4 items-start hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-200 transition"
                                    >
                                        <div className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 bg-white/80 border border-slate-100">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-900">{f.title}</h3>
                                            <p className="mt-1 text-sm text-gray-600">{f.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="mt-6 text-center">
                            <Link href="/contact-us" className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-slate-900 text-white font-medium shadow-sm hover:bg-slate-800 transition">
                                Talk to an expert
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs