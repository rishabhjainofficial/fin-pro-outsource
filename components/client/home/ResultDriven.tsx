'use client'
import { ArrowUpRight } from 'lucide-react'

const ResultDriven = (
    { stats }: {
        stats: {
            id: number;
            value: number;
            suffix: string;
            label: string;
            sub: string;
            color: string;
        }[]
    }
) => {
    return (
        <section className="w-full px-4 py-24 bg-brand-surface">
            <div className="max-w-6xl mx-auto">
                {/* Clean, Centered Header */}
                <div className="text-center mb-20">
                    <h2 className="text-brand-navy text-5xl md:text-6xl font-black tracking-tighter mb-6">
                        Performance in <span className="text-brand-green">Numbers.</span>
                    </h2>
                    <p className="text-brand-slate text-lg max-w-xl mx-auto font-medium">
                        Tangible impact delivered to CPA firms and startups worldwide through precision and adroit execution.
                    </p>
                </div>

                {/* The "Bento" Dashboard Card */}
                <div className="relative group">
                    {/* Subtle Glow Background */}
                    <div className="absolute -inset-1 bg-linear-to-r from-brand-green/20 to-brand-blue/20 rounded-5xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000" />

                    <div className="relative bg-white border border-brand-border rounded-5xl overflow-hidden shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-brand-border">
                            {stats.map((stat) => (
                                <div
                                    key={stat.id}
                                    className="p-10 hover:bg-brand-surface transition-colors duration-300 flex flex-col justify-between min-h-[220px]"
                                >
                                    <div className="flex justify-between items-start">
                                        <div className={`p-2 rounded-lg bg-slate-50 border border-brand-border`}>
                                            <ArrowUpRight size={16} className="text-brand-slate" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-slate/70">
                                            Data Metric
                                        </span>
                                    </div>

                                    <div>
                                        <div className={`text-5xl font-black tracking-tighter ${stat.color} mb-1`}>
                                            {stat.value}{stat.suffix}
                                        </div>
                                        <div className="text-brand-navy font-bold text-lg leading-none">
                                            {stat.label}
                                        </div>
                                        <div className="text-brand-slate text-xs mt-2 font-medium opacity-60">
                                            {stat.sub}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Trust Caption */}
                <div className="mt-12 flex items-center justify-center gap-4 text-brand-slate italic text-sm">
                    <div className="h-px w-12 bg-brand-border" />
                    Verified financial data for the fiscal year 2025
                    <div className="h-px w-12 bg-brand-border" />
                </div>
            </div>
        </section>
    )
}

export default ResultDriven;