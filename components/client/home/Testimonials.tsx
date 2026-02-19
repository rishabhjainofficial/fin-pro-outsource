'use client';
import { Star, Quote, Library } from 'lucide-react';
import Image from 'next/image';

const Testimonials = ({ testimonials }: {
    testimonials: {
        name: string;
        role: string;
        content: string;
        star: number;
        image: string
    }[]
}) => {
    return (
        <section className="w-full px-4 py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-16">
                <div className="flex flex-col md:flex-row items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy border border-brand-green/20 mb-4">
                            <Library size={14} className="text-brand-green" />
                            <span className="text-white text-xs font-bold uppercase tracking-widest">Success Stories</span>
                        </div> */}
                        <h2 className="text-4xl md:text-5xl font-black text-brand-navy tracking-tight leading-none">
                            Trusted by <span className="text-brand-green">Industry Leaders.</span>
                        </h2>
                    </div>
                    <p className="text-lg text-brand-slate font-medium max-w-sm">
                        Our clients are a testament to our commitment to precision and financial excellence.
                    </p>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative flex overflow-hidden">
                <div className="flex animate-testimonial-scroll gap-8 py-10 group-hover:[animation-play-state:paused]">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="w-[400px] md:w-[520px] flex-shrink-0 relative bg-brand-surface p-10 md:p-14 rounded-5xl border border-brand-border hover:bg-white hover:shadow-2xl hover:shadow-brand-navy/5 transition-all duration-700 group/card"
                        >
                            {/* Decorative Quote Mark */}
                            <Quote className="absolute top-10 right-10 w-20 h-20 text-brand-navy/5 group-hover/card:text-brand-green/10 transition-colors duration-700" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex gap-1 mb-8">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            size={18}
                                            fill={i < item.star ? "#5d9446" : "none"}
                                            className={i < item.star ? "text-brand-green" : "text-brand-border"}
                                        />
                                    ))}
                                </div>

                                <p className="text-xl md:text-2xl text-brand-navy font-semibold leading-relaxed mb-12 italic tracking-tight">
                                    {`"${item.content}"`}
                                </p>

                                <div className="mt-auto flex items-center gap-5">
                                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-white shadow-xl rotate-3 group-hover/card:rotate-0 transition-transform duration-500">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-brand-navy text-lg">{item.name}</h4>
                                        <p className="text-brand-green text-sm font-bold uppercase tracking-wider">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Refined Edge Fades */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
            </div>
        </section>
    );
};

export default Testimonials;