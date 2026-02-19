import Image from 'next/image';
import { Calendar, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

const ScheduleConsultation = () => {
    return (
        <section className="w-full px-4 py-24 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Main Card Container */}
                <div className="relative bg-brand-navy rounded-5xl overflow-hidden shadow-2xl">

                    {/* Background Decorative Elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 skew-x-12 translate-x-20 hidden lg:block" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-green/20 rounded-full blur-3xl" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center">

                        {/* Left Content Side */}
                        <div className="lg:w-3/5 p-8 md:p-16 lg:p-20 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 text-white/80 text-xs font-bold uppercase tracking-widest">
                                <Zap size={14} className="text-brand-green" />
                                Ready to Scale?
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                                Gain Financial Clarity <br />
                                <span className="text-brand-green">Starting Today.</span>
                            </h2>

                            <p className="text-lg text-white/70 max-w-xl mb-10 leading-relaxed">
                                Gapbridge helps businesses solve operational inefficiencies with a sharp focus on accuracy and compliance. From daily transactions to end-to-end payroll, we bring peace of mind to your finance department.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Link
                                    href="/contact-us"
                                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-green text-white font-bold shadow-xl shadow-brand-green/20 hover:bg-brand-green/90 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
                                >
                                    Schedule a Consultation
                                    <Calendar size={20} className="group-hover:rotate-12 transition-transform" />
                                </Link>
                                <div className="flex items-center gap-2 text-white/60 text-sm font-medium">
                                    <ShieldCheck size={20} className="text-brand-green" />
                                    ISO Certified & GDPR Compliant
                                </div>
                            </div>
                        </div>

                        {/* Right Image Side */}
                        <div className="lg:w-2/5 w-full h-full min-h-[400px] relative">
                            <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-transparent to-transparent lg:bg-linear-to-l lg:from-brand-navy z-10" />
                            <Image
                                src="/images/team-member.png"
                                alt="Outsourcing Service"
                                fill
                                className="object-cover object-top filter brightness-90 contrast-110"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScheduleConsultation;