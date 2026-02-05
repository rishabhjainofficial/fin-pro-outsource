'use client';
import { useState } from 'react';
import Image from 'next/image';

const OutSourcingTeam = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        'Senior Accountants',
        'Tax Preparers',
        'Fractional CFO',
        'Bookkeepers',
        'Payroll',
    ];

    const data = [
        {
            title: 'Senior Accountants',
            description: 'Free up your in-house CPA team for specialized tasks, and leverage the skills of our certified accountants for routine tasks that are super-important. Hire certified senior accountants today.',
            image: '/images/team-member.png',
            tags: ['10+ years of experience', 'Advance knowledge', 'Client-focused'],
            tagsBgColor: ['#d4e5cd', '#cdd7e5', '#e5d6cd'],
            tagsColor: ['#5d9446', '#467d94', '#944646'],
        },
        {
            title: 'Tax Preparers',
            description: 'Our tax preparers are experts in navigating the complexities of tax regulations, ensuring accurate and timely filings. Let our professionals handle your tax preparation needs, so you can focus on growing your business.',
            image: '/images/team-member.png',
            tags: ['Expertise in tax regulations', 'Accurate filings', 'Timely service'],
            tagsBgColor: ['#d4e5cd', '#cdd7e5', '#e5d6cd'],
            tagsColor: ['#5d9446', '#467d94', '#944646'],
        },
        {
            title: 'Fractional CFO',
            description: 'Our Fractional CFOs provide strategic financial leadership on a part-time basis, helping businesses make informed decisions, optimize cash flow, and drive growth without the cost of a full-time CFO.',
            image: '/images/team-member.png',
            tags: ['Strategic financial leadership', 'Cost-effective', 'Growth-focused'],
            tagsBgColor: ['#d4e5cd', '#cdd7e5', '#e5d6cd'],
            tagsColor: ['#5d9446', '#467d94', '#944646'],
        },
        {
            title: 'Bookkeepers',
            description: 'Our bookkeepers ensure your financial records are accurate and up-to-date, providing essential support for your business’s financial health. Let us handle your bookkeeping needs so you can focus on what you do best.',
            image: '/images/team-member.png',
            tags: ['Accurate records', 'Up-to-date', 'Financial health'],
            tagsBgColor: ['#d4e5cd', '#cdd7e5', '#e5d6cd'],
            tagsColor: ['#5d9446', '#467d94', '#944646'],
        },
        {
            title: 'Payroll',
            description: 'Our payroll services ensure your employees are paid accurately and on time, while also managing tax withholdings and compliance. Let us take care of your payroll needs so you can focus on growing your business.',
            image: '/images/team-member.png',
            tags: ['Accurate payments', 'Timely service', 'Compliance management'],
            tagsBgColor: ['#d4e5cd', '#cdd7e5', '#e5d6cd'],
            tagsColor: ['#5d9446', '#467d94', '#944646'],
        }
    ]

    const activeData = data[activeTab];

    return (
        <section className="w-full px-4 py-16 bg-linear-to-b from-white to-slate-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                        The Outsourcing Team You Can Count On
                    </h2>
                    <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                        Whether you need senior accountants, a fractional CFO or reliable payroll support — our elite professionals are ready to maximize productivity and deliver peace of mind.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center space-x-3 overflow-auto pb-2 pt-1">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab}
                            aria-pressed={activeTab === index}
                            onClick={() => setActiveTab(index)}
                            className={`relative whitespace-nowrap px-5 py-2 rounded-full transition-all duration-250 focus:outline-none ${activeTab === index ? 'bg-linear-to-r from-slate-700 to-slate-600 text-white shadow-lg' : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:scale-105'}`}
                        >
                            <span className="text-sm font-medium">{tab}</span>
                        </button>
                    ))}
                </div>

                {/* Card */}
                <div className="bg-white backdrop-blur-sm bg-opacity-60 rounded-3xl shadow-xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-8 gap-6">
                        <div className="md:flex-1 flex justify-center md:justify-start">
                            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-inner">
                                <Image src={activeData.image} alt={activeData.title} width={440} height={320} className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <div className="md:flex-1">
                            <div className="flex items-center space-x-4 mb-4">
                                {activeData.tags.map((tag, index) => (
                                    <span key={tag} className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-sm font-medium" style={{ backgroundColor: activeData.tagsBgColor[index], color: activeData.tagsColor[index] }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{activeData.title}</h3>
                            <p className="text-gray-600 mb-6">{activeData.description}</p>

                            <ul className="space-y-2 mb-6">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1 text-green-600">✓</span>
                                    <span>Dedicated, certified professionals with proven experience</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1 text-green-600">✓</span>
                                    <span>Custom workflows that integrate with your team</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1 text-green-600">✓</span>
                                    <span>Fast onboarding and reliable communication</span>
                                </li>
                            </ul>

                            <div className="flex flex-wrap items-center gap-3">
                                <a href="#contact" className="inline-block px-6 py-2 rounded-full bg-slate-800 text-white font-semibold shadow hover:bg-slate-700 transition">Hire Now</a>
                                <a href="#learn-more" className="inline-block px-4 py-2 rounded-full border border-slate-200 text-slate-700 hover:shadow transition">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OutSourcingTeam;