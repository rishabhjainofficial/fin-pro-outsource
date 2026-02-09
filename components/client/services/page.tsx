import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';

interface Services {
    title: string;
    slug: string;
    icon: React.ReactNode;
    desc: string;
}

const ServicePage = ({ services, headerPart1, headerPart2, desc, spanText, spanIcon }: { services: Services[], headerPart1?: string, headerPart2?: string, desc?: string, spanText?: string, spanIcon?: React.ReactNode }) => {
    return (
        <section className="w-full bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="max-w-3xl mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border mb-6"
                    >
                        {spanIcon}
                        <span className="text-brand-navy text-xs font-black uppercase tracking-widest">{spanText}</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black text-brand-navy tracking-tighter leading-tight mb-8">
                        {headerPart1} <br />
                        <span className="text-brand-green italic">{headerPart2}</span>
                    </h1>
                    <p className="text-xl text-brand-slate font-medium leading-relaxed">
                        {desc}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            <Link href={`/services/${service.slug}`}>
                                <div className="h-full p-8 bg-brand-surface border border-brand-border rounded-[2.5rem] transition-all duration-500 hover:bg-brand-navy hover:shadow-2xl hover:shadow-brand-navy/20">
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-navy group-hover:text-white mb-4 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-brand-slate group-hover:text-white/60 mb-8 font-medium line-clamp-2 transition-colors">
                                        {service.desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-green">
                                        Explore Service <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicePage