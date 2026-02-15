'use client';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Users, Coffee, Rocket, ArrowUpRight } from 'lucide-react';

const Career = () => {
    const perks = [
        { icon: <Rocket size={24} />, title: "Growth Path", desc: "Clear promotion cycles and mentorship from 6+ year veterans." },
        { icon: <Clock size={24} />, title: "Flexibility", desc: "Hybrid work models designed for a healthy work-life balance." },
        { icon: <Users size={24} />, title: "Global Culture", desc: "Work with top-tier CPA firms across the US and UK." },
        { icon: <Coffee size={24} />, title: "Wellness", desc: "Comprehensive health benefits and team-building retreats." },
    ];

    const jobs = [
        { title: "Senior Full Stack Developer", dept: "Engineering", type: "Full-time", location: "Remote / India" },
        { title: "Tax Preparation Specialist", dept: "Finance", type: "Full-time", location: "Udaipur, India" },
        { title: "Client Success Manager", dept: "Operations", type: "Contract", location: "UK (Remote)" },
    ];

    return (
        <div className="bg-[#F8FAFC] min-h-screen pt-32 pb-20 px-6">
            {/* 1. Hero Island */}
            <section className="max-w-7xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-brand-navy rounded-[3.5rem] p-12 md:p-24 text-center text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent)]" />
                    <div className="relative z-10">
                        <span className="text-brand-green font-black uppercase tracking-widest text-xs mb-6 inline-block">Join the Bridge</span>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                            Build the Future of <br /> <span className="text-brand-green">Global Finance.</span>
                        </h1>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 font-medium">
                            We are looking for innovators, number-crunchers, and problem solvers to join our growing team.
                        </p>
                        <button className="bg-brand-green text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                            View Openings
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* 2. Perks Section (Benefits for Employees) */}
            <section className="max-w-7xl mx-auto py-20 px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-brand-navy">Why Gapbridge?</h2>
                    <p className="text-brand-slate opacity-60 mt-2">More than just a job; it's a career launchpad.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {perks.map((perk, i) => (
                        <div key={i} className="bg-white border border-brand-border p-8 rounded-[2.5rem] hover:shadow-xl transition-all duration-500 group">
                            <div className="w-12 h-12 bg-brand-surface rounded-2xl flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors">
                                {perk.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">{perk.title}</h3>
                            <p className="text-sm text-brand-slate leading-relaxed opacity-70">{perk.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Open Roles Island */}
            <section className="max-w-5xl mx-auto bg-white border border-brand-border rounded-[3.5rem] overflow-hidden shadow-sm">
                <div className="p-10 md:p-16">
                    <h2 className="text-3xl font-black text-brand-navy mb-10">Current Openings</h2>
                    <div className="divide-y divide-brand-border">
                        {jobs.map((job, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ x: 10 }}
                                className="py-8 flex flex-col md:flex-row md:items-center justify-between group cursor-pointer"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-green transition-colors">{job.title}</h3>
                                    <div className="flex gap-4 mt-2 text-sm font-medium text-brand-slate opacity-60">
                                        <span className="flex items-center gap-1"><Briefcase size={14} /> {job.dept}</span>
                                        <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0 flex items-center gap-4">
                                    <span className="bg-brand-surface px-4 py-1.5 rounded-full text-xs font-bold text-brand-navy">{job.type}</span>
                                    <div className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-all">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Career;