'use client';

import { ArrowRight, icons } from "lucide-react";
import Link from "next/link";

const OurServices = () => {
    const services = [
        {
            title: 'Bookkeeping Services',
            description: 'Accurate and timely recording of financial transactions to maintain organized financial records.',
            link: '#',
            icon: icons.BookOpen
        },
        {
            title: 'Payroll Services',
            description: 'Efficient management of employee compensation, tax withholdings, and compliance with labor laws.',
            link: '#',
            icon: icons.CreditCard
        },
        {
            title: 'Tax Preparation',
            description: 'Expert preparation and filing of tax returns to ensure compliance and maximize deductions.',
            link: '#',
            icon: icons.FileText
        },
        {
            title: 'Financial Reporting',
            description: 'Comprehensive financial statements and reports to provide insights into your business’s financial health.',
            link: '#',
            icon: icons.ChartBar
        },
        {
            title: 'Auditing Services',
            description: 'Independent examination of financial records to ensure accuracy and compliance with accounting standards.',
            link: '#',
            icon: icons.ShieldCheck
        },
        {
            title: 'CFO Services',
            description: 'Strategic financial leadership and guidance to help businesses make informed decisions and drive growth.',
            link: '#',
            icon: icons.Users
        },
    ]
    return (
        <section className="w-full px-4 py-16 bg-linear-to-b from-white to-slate-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
                        Professional accounting & financial services
                    </h2>
                    <p className="mt-3 text-base text-gray-600 max-w-2xl mx-auto">
                        Expert, reliable support for accounting, payroll, tax, and advisory needs — delivered with precision and confidentiality.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Link
                            href={service.link}
                            key={index}
                            aria-label={`Learn more about ${service.title}`}
                            className="group block bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-200 transition-colors"
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-100 text-slate-700">
                                            <service.icon className="w-5 h-5" />
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-lg font-medium text-slate-900">{service.title}</h3>
                                        <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center justify-end">
                                    <span className="text-sm font-medium text-slate-700 mr-2 group-hover:text-slate-900 transition">Learn more</span>
                                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurServices