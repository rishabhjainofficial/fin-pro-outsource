'use client';

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const OurServices = ({ services }: { services: { title: string, slug: string, icon: any, description: string }[] }) => {
    return (
        <section className="w-full px-4 py-24 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-brand-navy text-4xl md:text-5xl font-black tracking-tight mb-4">
                            Precision <span className="text-brand-green">Financial</span> Solutions
                        </h2>
                        <p className="text-brand-slate text-lg font-medium">
                            Expert, reliable support for accounting, payroll, and advisory needs — delivered with clinical precision and absolute confidentiality.
                        </p>
                    </div>
                    <Link href="/services/business-owners" className="text-brand-navy font-bold flex items-center gap-2 group border-b-2 border-brand-green pb-1">
                        Explore All Services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link
                            href={service.slug}
                            key={index}
                            className="group relative bg-brand-surface p-10 rounded-4xl border border-transparent hover:border-brand-border hover:bg-white hover:shadow-2xl hover:shadow-brand-navy/5 transition-all duration-500 flex flex-col justify-between min-h-[320px] overflow-hidden"
                        >
                            {/* Animated Background Accent */}
                            <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -translate-y-12 translate-x-12 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700`} />

                            <div className="relative z-10 mt-8 flex items-center justify-between overflow-hidden">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-sm border border-brand-border text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-500 mb-8`}>
                                    {service.icon}
                                </div>
                                <div className="translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                                    <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center text-white shadow-lg mb-8">
                                        <ArrowRight size={18} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-green transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-brand-slate leading-relaxed font-medium">
                                    {service.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurServices;