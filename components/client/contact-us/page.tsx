'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, Twitter, CheckCircle2
} from 'lucide-react';
import { contactUs } from '@/lib/api/contactUs';
import { getSocialLinks } from '@/lib/api/socialLink';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
    const [errors, setErrors] = useState<Record<string, string[]>>({});
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({});
        setIsSuccess(false);
        setIsSubmitting(true);

        const response = await contactUs(formData);

        if (response.success) {
            setIsSuccess(true);
            setFormData({ name: '', email: '', service: '', message: '' });
            setTimeout(() => setIsSuccess(false), 5000);
        } else {
            setErrors(response.errors || {});
        }
        setIsSubmitting(false);
    };

    const socialLinks = getSocialLinks();

    return (
        <main className="w-full bg-white pt-32 pb-24 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="max-w-3xl mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy border border-brand-navy/20 mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                        <span className="text-white text-xs font-bold uppercase tracking-widest">Connect with our Partners</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black text-brand-navy tracking-tighter leading-tight mb-8">
                        {`Let’s start a`} <br />
                        <span className="text-brand-green italic">Conversation.</span>
                    </h1>
                    <p className="text-xl text-brand-slate font-medium leading-relaxed">
                        {`Whether you're a CPA firm looking to scale or a business owner seeking financial clarity, our experts are ready to architect your success.`}
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-16 items-start">

                    {/* Left Side: Info & Presence */}
                    <div className="lg:col-span-5 space-y-12">

                        {/* Direct Lines */}
                        <div className="grid gap-6">
                            {[
                                { icon: Mail, label: 'Email', value: 'hello@gapbridge.com', sub: 'Response within 24hrs' },
                                { icon: Phone, label: 'Phone', value: '+1 (555) 000-ADROIT', sub: 'Mon-Fri, 9am - 6pm EST' },
                                { icon: MapPin, label: 'Headquarters', value: '123 Financial District, NY', sub: 'Available for in-person meets' }
                            ].map((item, idx) => (
                                <div key={idx} className="group flex items-start gap-6 p-6 rounded-3xl border border-brand-border hover:bg-brand-surface transition-all duration-500">
                                    <div className="w-14 h-14 rounded-2xl bg-brand-navy text-white flex items-center justify-center group-hover:bg-brand-green transition-colors">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-slate/40 mb-1">{item.label}</p>
                                        <p className="text-xl font-bold text-brand-navy mb-1">{item.value}</p>
                                        <p className="text-sm font-medium text-brand-green">{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Presence */}
                        <div className="p-8 rounded-[2.5rem] bg-brand-navy text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/20 rounded-full blur-3xl" />
                            <h4 className="text-lg font-bold mb-6 relative z-10">Follow our Insights</h4>
                            <div className="flex gap-4 relative z-10">
                                {socialLinks.map((link) => (
                                    <Link key={link.name} href={link.href} className="p-2 rounded-lg bg-white/5 hover:bg-brand-green transition-colors">
                                        {link.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Professional Discovery Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-brand-surface border border-brand-border rounded-[3.5rem] p-8 md:p-16">
                            <form className="grid gap-8" onSubmit={(e) => handleSubmit(e)}>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-navy/40 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white border-b-2 border-brand-border focus:border-brand-green outline-none py-4 px-2 transition-all font-bold text-brand-navy"
                                            placeholder="Full Name..."
                                            name="name"
                                            value={formData.name}
                                            onChange={(e) => handleChange(e)}
                                            required
                                        />
                                        {errors.name && (
                                            <p className="text-[10px] text-brand-red font-bold uppercase mt-1">{errors.name[0]}</p>
                                        )}
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-navy/40 ml-1">Company Email</label>
                                        <input
                                            type="email"
                                            className="w-full bg-white border-b-2 border-brand-border focus:border-brand-green outline-none py-4 px-2 transition-all font-bold text-brand-navy"
                                            placeholder="Company Email..."
                                            name="email"
                                            value={formData.email}
                                            onChange={(e) => handleChange(e)}
                                            required
                                        />
                                        {errors.email && (
                                            <p className="text-[10px] text-brand-red font-bold uppercase mt-1">{errors.email[0]}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-navy/40 ml-1">How can we help?</label>
                                    <select
                                        className="w-full bg-white border-b-2 border-brand-border focus:border-brand-green outline-none py-4 px-2 transition-all font-bold text-brand-navy appearance-none" name="service"
                                        value={formData.service}
                                        onChange={(e) => handleChange(e)}
                                        required
                                    >
                                        <option value="">Select Service Area</option>
                                        <option value="Full-Stack Accounting Outsourcing">Full-Stack Accounting Outsourcing</option>
                                        <option value="Fractional CFO Advisory">Fractional CFO Advisory</option>
                                        <option value="Tax & Compliance Support">Tax & Compliance Support</option>
                                        <option value="Staff Augmentation">Staff Augmentation</option>
                                    </select>
                                    {errors.service && (
                                        <p className="text-[10px] text-brand-red font-bold uppercase mt-1">{errors.service[0]}</p>
                                    )}
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-navy/40 ml-1">Message / Project Scope</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-white border-b-2 border-brand-border focus:border-brand-green outline-none py-4 px-2 transition-all font-bold text-brand-navy resize-none"
                                        placeholder="Briefly describe your requirements..."
                                        name="message"
                                        value={formData.message}
                                        onChange={(e) => handleChange(e)}
                                        required
                                    />
                                    {errors.message && (
                                        <p className="text-[10px] text-brand-red font-bold uppercase mt-1">{errors.message[0]}</p>
                                    )}
                                </div>

                                <button className="group w-full py-6 rounded-full bg-brand-navy text-white font-black uppercase tracking-[0.2em] text-sm shadow-2xl shadow-brand-navy/20 hover:bg-brand-green transition-all duration-500 flex items-center justify-center gap-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed" disabled={isSubmitting}>
                                    Submit Inquiry
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>

                                {isSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="p-6 bg-brand-green/10 border border-brand-green/20 rounded-3xl text-center mb-8"
                                    >
                                        <p className="text-brand-green font-black uppercase tracking-widest text-xs">
                                            Inquiry Received Successfully
                                        </p>
                                        <p className="text-brand-navy text-sm font-medium mt-1">
                                            Our partners will reach out to you within 24 hours.
                                        </p>
                                    </motion.div>
                                )}

                                <div className="flex items-center justify-center gap-6 mt-4">
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-brand-slate/40 uppercase tracking-widest">
                                        <CheckCircle2 size={14} className="text-brand-green" />
                                        GDPR Compliant
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-brand-slate/40 uppercase tracking-widest">
                                        <CheckCircle2 size={14} className="text-brand-green" />
                                        End-to-End Encrypted
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactUs;