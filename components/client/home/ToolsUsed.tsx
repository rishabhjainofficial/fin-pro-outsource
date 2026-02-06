import Image from 'next/image';
import React from 'react'

const ToolsUsed = () => {
    const tools = [
        { name: 'QuickBooks', src: '/tools/quickbooks.png' },
        { name: 'Xero', src: '/tools/xero.png' },
        { name: 'Stripe', src: '/tools/stripe.png' },
        { name: 'Bill.com', src: '/tools/billcom.png' },
        { name: 'Shopify', src: '/tools/shopify.png' },
        { name: 'CCHero', src: '/tools/cchero.png' },
        { name: 'DrakeSoftware', src: '/tools/drakesoftware.png' },
        { name: 'Intuit', src: '/tools/intuit.png' },
        { name: 'Sage', src: '/tools/sage.png' },
        { name: 'FreshBooks', src: '/tools/freshbooks.png' },
        { name: 'Wave', src: '/tools/wave.png' },
        { name: 'Zoho Books', src: '/tools/zoho-books.png' },
    ];
    return (
        <section className="w-full px-4 py-16 bg-linear-to-b from-white to-slate-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        We are expertly skilled in a wide range of accounting software!
                    </h2>
                </div>
            </div>
            <div className="w-full bg-slate-50/50 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            We are adroit with multiple accounting tools
                        </h2>
                        <div className="h-1 w-20 bg-[#5d9446] mx-auto rounded-full" />
                    </div>

                    {/* Stunning Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {tools.map((tool) => (
                            <div
                                key={tool.name}
                                className="group relative flex flex-col items-center justify-center p-6 bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#5d9446]/30"
                            >
                                {/* Background glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#5d9446]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-16 h-16 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                        <Image
                                            src={tool.src}
                                            alt={tool.name}
                                            width={100}
                                            height={100}
                                            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                        />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#5d9446] transition-colors">
                                        {tool.name}
                                    </span>
                                </div>

                                {/* Bottom accent line on hover */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#5d9446] rounded-full transition-all duration-300 group-hover:w-1/3" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ToolsUsed