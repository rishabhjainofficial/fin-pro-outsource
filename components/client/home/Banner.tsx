import Image from "next/image";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const Banner = () => {
    return (
        <section className="w-full relative h-[70vh] md:h-[85vh] lg:h-[90vh] overflow-hidden bg-brand-navy">
            {/* Background image with refined treatment */}
            <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
                alt="Financial strategy collaboration"
                fill
                priority
                className="object-cover opacity-60 scale-105"
            />

            {/* Premium Gradient Overlays */}
            <div className="absolute inset-0 bg-linear-to-r from-brand-navy via-brand-navy/60 to-transparent" aria-hidden="true"></div>
            <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-transparent to-transparent" aria-hidden="true"></div>

            {/* Hero Content */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
                <div className="w-full lg:w-2/3 text-left">
                    {/* Badge Indicator */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 border border-brand-green/30 mb-8 animate-fade-up">
                        <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                        <span className="text-brand-green text-xs font-bold uppercase tracking-widest">
                            Global Outsourcing Excellence
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.95] mb-8 animate-fade-up">
                        Financial <br />
                        Operations, <br />
                        <span className="text-brand-green italic font-extrabold">Simplified.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '100ms' }}>
                        Hire expert accounting teams and fractional CFOs to scale with confidence.
                        Experience fast onboarding and seamless integration.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
                        <Link
                            href="/contact-us"
                            className="group w-full sm:w-auto px-10 py-5 rounded-full bg-brand-green text-white font-black uppercase tracking-widest text-sm shadow-2xl shadow-brand-green/20 hover:bg-brand-green/90 transition-all flex items-center justify-center gap-3"
                        >
                            Get Started
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <button className="flex items-center gap-3 text-white font-bold group">
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md group-hover:bg-brand-green group-hover:border-brand-green transition-all">
                                <Play size={16} fill="white" />
                            </div>
                            <span className="text-sm tracking-widest uppercase">Watch how it works</span>
                        </button>
                    </div>

                    {/* Quick Trust Signals */}
                    <div className="mt-16 flex flex-wrap gap-8 opacity-50">
                        {['ISO 27001', 'GDPR Ready', '99.9% Accuracy'].map((item) => (
                            <div key={item} className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-[0.2em]">
                                <CheckCircle2 size={14} className="text-brand-green" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Floating "Adroit" Card for Desktop */}
                <div className="hidden lg:flex absolute right-10 bottom-20 w-80 p-8 rounded-5xl bg-white/10 backdrop-blur-xl border border-white/20 flex-col gap-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
                    <div className="text-brand-green font-black text-5xl tracking-tighter">150+</div>
                    <div className="text-white text-sm font-bold leading-tight">
                        Certified CPAs ready to integrate with your workflow.
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-green w-3/4" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;